const EquipmentListEditorComponent = {
    props: ['dataSource', 'handleLevels', 'handleImage'],
    
    data: () => ({
        
    }),
        
    computed: {
    },

    methods: {
        addEquipment() {
            this.dataSource.push(null);
        },

        deleteEquipment(key) {
            this.dataSource.splice(key,1);
        }
    },

    template: `
    
        <button @click="addEquipment">Add</button>
        <div v-for="(equipId, key) in dataSource" :key="key" >

            <div v-if="handleLevels || handleImage">
                <vequipeditor :equip-id="!!equipId ? equipId.id : 0" @equip-set="(mstId)=>dataSource[key]= { id: mstId }" @equip-delete="deleteEquipment(key)" />
                
                <div v-if="!!dataSource[key] && handleLevels" >
                    Level <input v-model="equipId.level" type="number" min=0 max=10 />
                </div>

                <div v-if="!!dataSource[key] && handleImage">
                    Image (150px x 150px)<input v-model="equipId.image" />
                    <img :src="equipId.image" />
                </div>
            </div>
            <div v-else>
                <vequipeditor :equip-id="equipId" @equip-set="(mstId)=>dataSource[key]=mstId" @equip-delete="deleteEquipment(key)" />
            </div>
        </div>
    
    `
}