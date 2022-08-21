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
}

/**
 * 
 * @param {QuestManager} questManager 
 */
function QuestData(questManager) {
    this.id = 0;

    this.numberOfTimeCanBeCompleted = 0;
    this.triggerOnReload = 0;

    // Mission
    this.objectives = new ChGimmickList("quest", null, null, [], {});
    this.name = "";
    this.description = "";

    // Rewards
    this.rewardJavascript = "";
    this.rewardShipData = [];
    this.rewardEquipmentData = [];

    this.getProgress = function () {
        return questManager.questsProgress.find(x => x.questId == this.id);
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