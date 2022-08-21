const QuestDetailComponent = {
    props: ['eventData', 'mapData', 'quest'],
        
    data: () => ({
        
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

        </table>
        <vgimmicklist :gimmick-list="quest.objectives" :map-data="mapData" />
    </div>
    
    `
}