const NodeEnemyCompObjectsEditorComponent = {
    props: ['compList', 'initValues', 'compObject', 'mapData', 'allCompsObject'],

    computed: {
        mapPartsItemList() {
            const parts = [];
            
            for (const part in this.mapData.parts) {

                parts.push({ display: part, key: part });
            }

            return parts;
        },

        compsPerDiff () {
            if (!this.compList.compDiff) this.compList.compDiff = {};
            if (!this.compList.compDiff[4]) this.compList.compDiff[4] = {};
            if (!this.compList.compDiff[1]) this.compList.compDiff[1] = {};
            if (!this.compList.compDiff[2]) this.compList.compDiff[2] = {};
            if (!this.compList.compDiff[3]) this.compList.compDiff[3] = {};

            return this.compList.compDiff;
        },
    },

    methods: {
        toggleLastDanceComps() {
            if (!this.compList.compDiffF) {
                this.compList.compDiffF = { 4: {}, 1: {}, 2: {}, 3: {} };
            } else {
                delete this.compList.compDiffF;
            }
        },
        togglePostClearComps() {
            if (!this.compList.compDiffC) {
                this.compList.compDiffC = { 4: {}, 1: {}, 2: {}, 3: {} };
            } else {
                delete this.compList.compDiffC;
            }
        },
    },

    template: `
        <venemycomplist :comp-list="compsPerDiff" :comp-object="compObject" :init-values="initValues" :all-comps-object="allCompsObject"></venemycomplist>




        <div v-if="!!compList.compDiffF" class="group-title">Last dance comps</div>
        
        <div v-if="!!compList.compDiffF"><button @click="toggleLastDanceComps">Delete last dance comps</button></div>
        <div v-else><button @click="toggleLastDanceComps">Handle last dance comps</button></div>
        
        <div v-if="!!compList.compDiffF">Last dance part <vcomboboxeditor :data-source="compList" :item-list="mapPartsItemList" data-field="compFPart" /></div>
        <venemycomplist v-if="!!compList.compDiffF" :comp-list="compList.compDiffF" :comp-object="compObject" :init-values="initValues" :all-comps-object="allCompsObject"></venemycomplist>
        



        <div v-if="!!compList.compDiffC" class="group-title">Post clear comps</div>

        <div v-if="!!compList.compDiffC"><button @click="togglePostClearComps">Delete post clear comps</button></div>
        <div v-else><button @click="togglePostClearComps">Handle post clear comps</button></div>

        <venemycomplist v-if="!!compList.compDiffC" :comp-list="compList.compDiffC" :comp-object="compObject" :init-values="initValues" :all-comps-object="allCompsObject"></venemycomplist>
    `
}