class ChMapData {
    constructor () {
        this.name = "";
        this.nameT = "";

        this.mapPreviewImage = "";
        this.mapImage = "";

        this.fleetTypes = [];
        
        this.bgmMap = "";
        this.bgmDN = "";
        this.bgmNN = "";
        this.bgmDB = "";
        this.bgmNB = "";

        this.bossnode = []; // --- todo => computed

        this.overrideBGM = {}; // --- Ignored

        this.giveLock = ""; 
        this.checkLock = []; 

        this.lockSpecial = false; // --- Todo => new model with startNode[] property
        this.giveLockSpecial = []; // --- Todo => new model with startNode[] property
        this.checkLockSpecial = []; // --- Todo => new model with startNode[] property

        this.lbas = 0;
        this.lbasSortie = 0;

        this.parts = {};

        this.reward = { ships: [], firstOnly: false };

        this.hiddenRoutes = {};

        this.debuffRules = {};

        /**
         * @type {ChRule[]}
         */
        this.startCheckRule = [];

        this.nodes = {};

        /**
         * @type {ChRule[]} List of rules, returned nodes must be true or false
         */
        this.additionalChecksRules = [];

        /**
         * Use this to manage complex locking
         */
        this.lockInfos = {
            // --- Difficulties to which lock applies
            difficulties: [],

            isTagAllowed: {
                // --- Per start
                startNode: {
                    /*
                    example : 
                    Start1: ['52_1'],
                    */
                },

                // --- Per fleet type
                fleetType: {
                    /*
                    example:
                    0: ['52_1'],
                    */
                }
            },

            tagGiven: {
                // --- Per start
                startNode: {
                    /*
                    example : 
                    Start1: '52_1',
                    */
                },

                // --- Per fleet type
                fleetType: {
                    /*
                    example:
                    0: '52_1',
                    */
                }
            },
        }
    }
}