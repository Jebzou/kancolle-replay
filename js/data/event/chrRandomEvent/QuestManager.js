function QuestManager() {

    /**
     * @type {QuestData[]}
     */
    this.quests = [];

    /**
     * @type {QuestProgress[]}
     */
    this.questsProgress = [];

    this.loadQuests = function (quests) {
        for (const quest of quests) {
            const newQuest = new QuestData(this);
            Object.assign(newQuest, quest);

            // Instanciate the gimmicks 
            newQuest.objectives = new ChGimmickList("quest", newQuest.objectives.mapPartNumber, newQuest.objectives.mapNum, newQuest.objectives.gimmicks, newQuest.objectives.additionnalParameters);
        
            // Make this an option ?
            newQuest.objectives.playSoundOnStepDone = () => {return false;};

            this.quests.push(newQuest);
        }

        // --- Progress
        if (typeof(CHDATA) !== "undefined" && CHDATA.event) {
            if (!CHDATA.event.questsProgress) CHDATA.event.questsProgress = {};

            for (const quest of quests) {
                const newProgress = new QuestProgress(this);
                newProgress.questId = quest.id;
                this.questsProgress.push(newProgress);

                if (CHDATA.event.questsProgress[newProgress.questId]) {
                    Object.assign(newProgress, CHDATA.event.questsProgress[newProgress.questId]);
                }

                CHDATA.event.questsProgress[newProgress.questId] = newProgress;
            }
        }
    }

    this.addQuest = function() {
        
        const newQuest = new QuestData(this);

        // Instanciate the gimmicks 
        newQuest.objectives = new ChGimmickList("quest", null, null, [], {});

        // get last id
        for (const newId of this.quests.map(x => x.id)) {
            if (newQuest.id < newId) newQuest.id = newId;
        }
    
        this.quests.push(newQuest);

        if (typeof(CHDATA) !== "undefined" && CHDATA.event) {
            const newProgress = new QuestProgress(this);
            newProgress.questId = newQuest.id;
            this.questsProgress.push(newProgress);

            CHDATA.event.questsProgress[newQuest.id] = newProgress;
        }

        return newQuest;
    }

    this.deleteQuest = function(id) {
        const index = this.quests.findIndex(x => x.id == id);

        if (index != -1) this.quests.splice(index, 1); 
    }

    this.getProgress = function (id) {
        return this.questsProgress.find(x => x.questId == id);
    }
    
    this.getQuest = function (id) {
        return this.quests.find(x => x.id == id);
    }

    this.onReload = () => {
        for (const quest of this.quests) {
            quest.onReload();
        }
    }

    this.checkProgress = (node, data) => {
        for (const quest of this.quests) {
            quest.checkProgress(node, data);
        }
    }
}

/**
 * 
 * @param {QuestManager} questManager 
 */
function QuestData(questManager) {
    this.id = 0;

    this.numberOfTimeCanBeCompleted = 0;
    this.triggerOnReload = false;

    // Mission
    this.objectives = new ChGimmickList("quest", null, null, [], {});

    this.name = "";
    this.description = "";

    // Rewards
    this.rewardJavascript = "";
    this.rewardShipData = [];
    this.rewardEquipmentData = [];
    this.rewardChance = {
        4: 100,
        1: 100,
        2: 100,
        3: 100,
    }

    this.getProgress = function () {
        return questManager.questsProgress.find(x => x.questId == this.id);
    }

    this.isMapUnlocked = () => {
        if (typeof(CHDATA) == 'undefined') return false;

        return typeof(CHDATA.event.maps[this.objectives.mapNum].diff) !== "undefined"; 
    }

    this.getProgressText = () => {
        let text = '';

        if (!this.isMapUnlocked()) return text;

        for (const objective of this.objectives.gimmicks) {
            text += `${objective.getLongDescription(getDiff())} ${objective.getGimmickProgress()}/${objective.getTimesRequired()}`;
            text += "<br>";
        }

        if (this.rewardChance[getDiff()] != 100) {
            text += "<br>";
            text += `Chance of reward : ${this.rewardChance[getDiff()]}%`;
        } 

        return text;
    }

    this.giveRewards = () => {

        if ((Math.random() * 100) > this.rewardChance[getDiff()]) return;

        if (this.rewardJavascript) eval(this.rewardJavascript);
        if (this.rewardShipData.length || this.rewardEquipmentData.length) {

            const rewardsToGive = {
				ships: this.rewardShipData,
				items: this.rewardEquipmentData
			};

            chAddReward(rewardsToGive, true);
            chShowReward(rewardsToGive);
        }
    }

    this.onReload = () => {
        if (!this.isMapUnlocked()) return;
        if (!this.triggerOnReload) return;
        if (this.objectives.gimmickDone()) this.giveRewards();
    }

    this.checkProgress = (node, data) => {
        // Map not unlocked => no check
        if (!this.isMapUnlocked()) return;

        // Gimmick already done => no check
        if (this.objectives.gimmickDone()) return;

        this.objectives.checkGimmickSteps(node, data);

        // Gimmick is now done ?
        if (this.objectives.gimmickDone()) {
            // Give reward
            this.giveRewards();

            this.getProgress().timesCompleted++;

            // Reset counts if needed
            if (this.numberOfTimeCanBeCompleted > this.getProgress().timesCompleted) {
                for (const gimmick of this.objectives.gimmicks) {
                    if (CHDATA.event.maps[gimmick.mapIdForChdata].debuff[gimmick.id]) CHDATA.event.maps[gimmick.mapIdForChdata].debuff[gimmick.id] = 0;
                }
            }
        }
    }
}

/**
 * 
 * @param {QuestManager} questManager 
 */
function QuestProgress(questManager) {
    this.timesCompleted = 0;
    this.questId = 0;

    this.getQuest = function () {
        return questManager.quests.find(x => x.id == this.questId);
    }
}