const RoutingListComponent = {
    props: ['ruleList', 'mapData', 'conditionCheckedNode', 'resultNodesList', 'eventData'],
        
    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        addRule() {
            const newRule = new ChRule();

            if (this.conditionCheckedNode) newRule.conditionCheckedNode = this.conditionCheckedNode;

            this.ruleList.push(newRule);
        },

        onDeleteRule(deletedRule) {
            const tempArray = [];

            while (this.ruleList.length) {
                tempArray.push(this.ruleList.shift());
            }

            for (const rule of tempArray) {
                if (deletedRule !== rule) this.ruleList.push(rule);
            }
        },

        moveDown(ruleKey) {
            if (!this.ruleList[ruleKey + 1]) return;

            const rule = this.ruleList[ruleKey];
            this.ruleList[ruleKey] = this.ruleList[ruleKey + 1];
            this.ruleList[ruleKey + 1] = rule;
        },

        moveUp(ruleKey) {
            if (!this.ruleList[ruleKey - 1]) return;

            const rule = this.ruleList[ruleKey];
            this.ruleList[ruleKey] = this.ruleList[ruleKey - 1];
            this.ruleList[ruleKey - 1] = rule;
        }
    },

    watch: {
        
    },

    template: `
    
        <div class="mapButton" @click="addRule">Add rule</div>

        <div v-for="(rule, key) in ruleList" :key="key">
            <button @click="moveUp(key)">Move Up</button>
            <button @click="moveDown(key)">Move Down</button>
            <vrouting :rule="rule" :map-data="mapData" @delete-rule="onDeleteRule" :result-nodes-list="resultNodesList" :event-data="eventData"></vrouting>
        </div>
    
    `
}