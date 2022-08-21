const QuestListComponent = {
    props: ['eventData', 'mapData', 'mapNumber'],
        
    data: () => ({
        questManager: new QuestManager(),
    }),

    computed: {
        questList() {
            if (!this.eventData.quests) this.eventData.quests = [];
            return this.eventData.quests.filter(x => x.objectives.mapNum == this.mapNumber);
        }
    },

    methods: {
        addQuest() {
            /**
             * @type {QuestData}
             */
            const newQuest = this.questManager.addQuest();
            newQuest.objectives.mapNum = this.mapNumber;
        },
        
        deleteQuest(id) {
            this.questManager.deleteQuest(id);
        }
    },

    watch: {
        
    },

    mounted: function() {
        if (!this.eventData.quests) this.eventData.quests = [];
        this.questManager.loadQuests(this.eventData.quests);
        this.eventData.quests = this.questManager.quests;
    },

    template: `
    
    <div>
        <button @click="addQuest">Add quest</button>

        <div v-for="(quest, key) in questList" :key="key">
            <button @click="deleteQuest(quest.id)">Delete quest</button>
            <vquestdetail :event-data="eventData" :map-data="mapData" :quest="quest" />
        </div>
    </div>
    
    `
}