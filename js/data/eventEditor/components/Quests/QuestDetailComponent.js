const QuestDetailComponent = {
    props: ['eventData', 'mapData', 'quest'],
        
    data: () => ({
        diffItemList: COMMON.DIFFICULTIES,
    }),

    computed: {
        
    },

    methods: {
        
    },

    watch: {
        
    },

    template: `
    
    <div class="quest-detail">
        <table>
            <tr>
                <td>Name</td>
                <td><input v-model="quest.name" /></td>
            </tr>

            <tr>
                <td>Description</td>
                <td><textarea v-model="quest.description" /></td>
            </tr>        

            <tr>
                <td>Number of time can be completed</td>
                <td><input v-model="quest.numberOfTimeCanBeCompleted" type="number" min="0" /></td>
            </tr>        

            <tr>
                <td>Trigger on reload (reapply javascript on reload)</td>
                <td><input v-model="quest.triggerOnReload" type="checkbox" /></td>
            </tr>        

            <tr>
                <td>Javascript to execute on complete</td>
                <td><textarea v-model="quest.rewardJavascript" /></td>
            </tr>        

            <tr>
                <td>Reward ships</td>
                <td><vshipdatalisteditor :data-source="quest.rewardShipData" :numberOfShips="99" :editors="{ LVL: true }"/></td>
            </tr>

            <tr>
                <td>Reward equipments</td>
                <td>
                    <div class="equipDataRuleEditor">
                        <vequiplisteditor :data-source="quest.rewardEquipmentData" handle-levels="true" handle-image="true" />
                    </div>
                </td>
            </tr>

            <tr>
                <td>Chances of reward</td>
                <td>
                    <div v-for="diff in diffItemList" :key="diff.key">
                        {{diff.display}}
                        <input v-model="quest.rewardChance[diff.key]" type="number" min="0" max="100" /> %
                    </div>
                </td>
            </tr>

        </table>
        <vgimmicklist :gimmick-list="quest.objectives" :map-data="mapData" />
    </div>
    
    `
}