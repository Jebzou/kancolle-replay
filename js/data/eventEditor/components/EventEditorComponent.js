const EventEditorComponent = {
    props: ['eventData'],

    data: () => ({
        difficultiesItemSource: [
            { key: 4, display: "Casual" },
            { key: 1, display: "Easy" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Hard" },
        ],
        fleetsItemSource: [
            { key: 0, display: "Single Fleet" },
            { key: 1, display: "Carrier Task Force" },
            { key: 2, display: "Surface Task Force" },
            { key: 3, display: "Transport Escort Force" },
            { key: 7, display: "Strike Force" },
        ]
    }),
        
    methods: {
        
        
        addWave() {
            const now = new Date(new Date(Date.now()));
            const offset = now.getTimezoneOffset();
            const date = new Date(now.getTime() - (offset*60*1000));

            this.eventData.friendFleetWaves[999999] = { date: date.toISOString().split('T')[0] };
            this.recomputeWavesNumbers();
        },

        deleteWave(element) {
            
            let count = 0;
            const waves = {};

            for (const wave of Object.values(this.eventData.friendFleetWaves)) {
                if (wave !== element) waves[++count] = wave;
            }

            this.eventData.friendFleetWaves = waves;

            this.recomputeWavesNumbers();
        },

        recomputeWavesNumbers() {
            const waves = {};
            let count = 0;

            for (const waveObject of Object.values(this.eventData.friendFleetWaves).sort((a,b) => new Date(a.date) - new Date(b.date))) {
                waves[++count] = waveObject;
            }

            this.eventData.friendFleetWaves = waves;
        }
    },

    template: document.getElementById('event-editor')
}