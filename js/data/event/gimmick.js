/**
 * 
 * @param {'debuff' | 'mapPart' | 'route' | 'quest'} type 
 * @param {ChGimmickParameters[]} gimmickData 
 * @param {{
 *  numberOfStepRequired: number
 *  partToUnlock: number
 * lastDanceOnly: boolean
 *  description: string
 *  title: string
 * difficultiesAllowed: number[]
 * specialSoundOnCompletion: String
 * routeUnlockRequired: number
 * }} additionnalParameters Additionnal parameters to handle special cases
 */
function ChGimmickList(type, mapPartNumber, mapNum, gimmickData, additionnalParameters) {

    if (!additionnalParameters) additionnalParameters = {};

    /**
     * @type {'debuff' | 'mapPart'}
     */
    this.type = type;
	// --- Map part by default
	if (type == "route") this.type = type = 'mapPart';

    this.mapPartNumber = mapPartNumber;

    this.mapNum = mapNum;
    this.mapIdForChdata = mapNum ?? 'multimap';

    /**
     * @type {{
    *   numberOfStepRequired: number
     *  partToUnlock: number
     *  description: string
     *  title: string
     * lastDanceOnly: boolean
     * difficultiesAllowed: number[]
     * specialSoundOnCompletion: string
     * routeUnlockRequired: number
     * }}
     */
    this.additionnalParameters = additionnalParameters;

    /**
     * Set this to true to play sound on every step done
     */
    this.playSoundOnStepDone = () => {
        return WORLD >= 45;
    };

    /**
     * @type {ChGimmick[]}
     */
    this.gimmicks = [];
    this.gimmickData = gimmickData;

    for (const gimmick of gimmickData) {
        if (mapNum) gimmick.mapnum = mapNum;

        gimmick.mapPartNumber = mapPartNumber;

        let gimmickObject = new ChGimmick(gimmick);

        if (!mapNum) gimmickObject.mapIdForChdata = this.mapIdForChdata;

        if (type == 'debuff') {
            gimmickObject.id += '-D';
        }

        if (type == 'mapPart') {
            // --- To finish
            gimmickObject.id += '-U' + additionnalParameters.partToUnlock;
        }

        if (gimmick.fleetType) {
            gimmickObject.id += `-FT${gimmick.fleetType.join('_')}`;
        }

        this.gimmicks.push(gimmickObject);
    }

    /**
     * 
     * @returns Returns true if gimmick is done
     */
    this.gimmickDone = () => {
        if (additionnalParameters.difficultiesAllowed && !additionnalParameters.difficultiesAllowed.includes(getDiff())) return false;
        if (this.mapPartNumber && this.mapNum && this.mapPartNumber > CHDATA.event.maps[this.mapNum].part) return false;

        // --- Only X steps required instead of all of them (Summer 16 E4)
        if (additionnalParameters && additionnalParameters.numberOfStepRequired) {
            let count = 0;

            for (const gimmick of this.gimmicks) {
                if (gimmick.gimmickDone()) count++;
            }

            return count >= additionnalParameters.numberOfStepRequired;
        }

        for (const gimmick of this.gimmicks) {
            if (!gimmick.gimmickDone()) return false;
        }

        return true;
    }

    /**
     * Check if gimmick steps have progressed
     */
    this.checkGimmickSteps = (node, checkGimmickParameters) => {
        if (!CHDATA.event.maps[this.mapIdForChdata]) {
            CHDATA.event.maps[this.mapIdForChdata] = {};
        }

        if (!CHDATA.event.maps[this.mapIdForChdata].debuff) {
            CHDATA.event.maps[this.mapIdForChdata].debuff = {};
        }

        if (additionnalParameters.lastDanceOnly) {
            if (!chGetLastDance()) return;
        }

        if (additionnalParameters.routeUnlockRequired) {
            if (!CHDATA.event.maps[MAPNUM].routes) return;
            if (!CHDATA.event.maps[MAPNUM].routes.length) return;

            if (CHDATA.event.maps[MAPNUM].routes.indexOf(parseInt(additionnalParameters.routeUnlockRequired)) == -1) return;
        }

        if (mapPartNumber) {
            if (mapPartNumber > CHDATA.event.maps[mapNum].part) {
                return;
            }
        }

        for (const gimmick of this.gimmicks) {

            let isGimmickForThisNode = gimmick.node == node || gimmick.node == 'MapWide';
            if (!isGimmickForThisNode) continue;

            let isGimmickForThisMap = gimmick.mapnum == MAPNUM;
            if (!isGimmickForThisMap) continue;

            if (gimmick.mapPartNumber && gimmick.mapPartNumber > CHDATA.event.maps[gimmick.mapnum].part) continue;

            let shouldCountBeIncreased = gimmick.shouldCountBeIncreased(checkGimmickParameters);

            if (shouldCountBeIncreased) {
                if (!CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id]) CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id] = 0;
                
                CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id] += shouldCountBeIncreased;

                if (this.playSoundOnStepDone() && gimmick.gimmickDone()) {
                    playSoundAfterSortie = true;
                }
            }
        }
    }

    /**
     * Check if the debuff is done. 
     * If it is, plays sound
     */
    this.checkIfDebuffed = () => {
        if (!this.gimmickDone()) return;

        let playSound = () => {

            if (this.additionnalParameters.specialSoundOnCompletion) {
                SM.playNew(this.additionnalParameters.specialSoundOnCompletion);
            } else if (!this.playSoundOnStepDone()) {
                SM.play('done');
                alert('DEBUFF');
            }

        }

        if (!mapNum) {
            let atleastOne = false;

            for (const gimmick of this.gimmicks) {
                if (CHDATA.event.maps[gimmick.mapnum].debuffed) continue;

                CHDATA.event.maps[gimmick.mapnum].debuffed = true;

                atleastOne = true;
            }

            if (atleastOne) {
                playSound();
            }

            return;
        }

        if (CHDATA.event.maps[mapNum].debuffed) return;
        
        CHDATA.event.maps[mapNum].debuffed = true;

        playSound();
    }
}

let ChGimmickParameters = {
    node: '',
    /**
     * @type {'battle' | 'NoHPLoss' | 'AirState' | 'ReachNode' | 'MapHP' | 'PartClear'}
     */
    type: 'battle',
    timesRequiredPerDiff: {
        4: 0,
        1: 0,
        2: 0,
        3: 0,
    },
    ranksRequiredPerDiff: {
        4: 'D',
        1: 'D',
        2: 'D',
        3: 'D',
    },
    mapnum: 0,
    mapPartNumber: 0,
    /**
     * Allows to implement custom logic on debuff count increase
     */
    shouldCountBeIncreased: (parameters) => { return false; },
    /**
     * Allows to implement description for the rule
     */
    getDescription: (difficulty) => { return ''; },
    /**
     * You can specify if a certain route unlock must be done before
     */
    routeUnlockRequired: 0,

    /**
     * Only give debuff if fleet is of type
     * @type {null | number[]]
     */
    fleetType: null,

    /**
     * If true, the lbas needs to be sent to this node to validate the gimmick
     */
    needLBAS: false,

    /**
     * @type {number} Part to clear to check gimmick of PartClear type
     */
    partToClear: null,

	/**
	 *  @type {string} Forced node id (used for standard maps)
	 */
	key: '',

	/**
	 * @type {string} Rank to acheive, use ranksRequiredPerDiff if you need to set rank per diff
	 */
	rank: ''
}


/**
 * @param {ChGimmickParameters} parameters 
 */
function ChGimmick(parameters) {

    /**
     * Node 
     */
    this.node = parameters.node;

    this.mapnum = parameters.mapnum;

    this.mapIdForChdata = this.mapnum;

    this.mapPartNumber = parameters.mapPartNumber;

    this.id = `E${this.mapnum}-${this.node}-${parameters.type}`;
	if (parameters.key) this.id += `-${parameters.key}`;

    this.timesRequiredPerDiff = parameters.timesRequiredPerDiff;

    this.ranksRequiredPerDiff = parameters.ranksRequiredPerDiff;
	if (parameters.rank) this.ranksRequiredPerDiff = parameters.ranksRequiredPerDiff = { 4: parameters.rank, 1: parameters.rank, 2: parameters.rank, 3: parameters.rank };
	if (parameters.airState) this.ranksRequiredPerDiff = parameters.ranksRequiredPerDiff = { 4: parameters.airState, 1: parameters.airState, 2: parameters.airState, 3: parameters.airState };

    this.routeUnlockRequired = parameters.routeUnlockRequired;

    this.fleetType = parameters.fleetType;

    this.needLBAS = parameters.needLBAS;

    this.type = parameters.type;

    this.partToClear = parameters.partToClear;

    /**
     * Returns true if this part of the gimmick is done
     */
    this.gimmickDone = () => {
        if (!CHDATA.event.maps[this.mapIdForChdata].debuff) return false;

        if (this.node == 'AB' && CHDATA.config.disableRaidReq) return true;

        let count = CHDATA.event.maps[this.mapIdForChdata].debuff[this.id];
        let requiredCount = this.timesRequiredPerDiff[getDiff()];

        if (!requiredCount) return true;
        if (!count) return false;

        return count >= requiredCount;
    }

    switch (parameters.type) {
        case 'NoHPLoss': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                return checkGimmickParameters.totalHPLost <= 0;
            }

            parameters.getDescription = (diff) => {
                if (!this.timesRequiredPerDiff[diff]) return '-';
                return 'Take no damage' + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
            }

            break;
        }

        case 'ReachNode': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                return true;
            }

            parameters.getDescription = (diff) => {
                if (!this.timesRequiredPerDiff[diff]) return '-';
                return 'Reach' + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
            }
            
            break;
        }
        
        case 'AirState': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                
                let requiredRank = this.ranksRequiredPerDiff[getDiff()];
                let aquiredRank = ChGimmick.ConvertAirStateNumberToString(FLEETS1[0].AS);
                
                if (checkGimmickParameters && checkGimmickParameters.airstate) {
                    aquiredRank = ChGimmick.ConvertAirStateNumberToString(checkGimmickParameters.airstate);
                }

                let ranks = ['AS+', 'AS', 'AP'];
        
                for (const rank of ranks) {
                    if (rank == requiredRank) return aquiredRank == rank;
                    
                    if (rank == aquiredRank) return 1;
                }
        
                return 0;
            }
            
            break;
        }

        case 'MapHP': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                
                let requiredHP = this.ranksRequiredPerDiff[getDiff()];
                let mapHP = CHDATA.event.maps[this.mapnum].hp;
                
                if (requiredHP > mapHP) return 1;
        
                return 0;
            }
            
            parameters.getDescription = (diff) => {
                if (!this.ranksRequiredPerDiff[diff]) return '-';
                return 'Map HP <= ' + this.ranksRequiredPerDiff[diff];
            }
            
            break;
        }

        case 'PartClear': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                
                if (parameters.partToClear >= CHDATA.event.maps[this.mapnum].part) return 0;
        
                return 1;
            }
            
            parameters.getDescription = (diff) => {
                return 'Clear part '+ parameters.partToClear + '        ';
            }
            
            break;
        }
    }

    /**
     * If count should be increased returns 1
     * If you want to increase count multiple time at once you can return the number you want
     */
    this.shouldCountBeIncreased = (checkGimmickParameters) => {
        if (this.gimmickDone()) return 0;

        if (this.routeUnlockRequired) {
            if (!CHDATA.event.maps[MAPNUM].routes) return 0;
            if (!CHDATA.event.maps[MAPNUM].routes.length) return 0;

            if (CHDATA.event.maps[MAPNUM].routes.indexOf(parseInt(this.routeUnlockRequired)) == -1) return 0;
        }

        if (parameters.fleetType) {
            let fleetType = CHDATA.fleets.combined;
            if (!fleetType) fleetType = CHDATA.fleets.sf ? 7 : 0;
            
            if (!parameters.fleetType.includes(fleetType)) return;
        }

        if (parameters.needLBAS) {
            if (!CHDATA.sortie.lbasNodes) return false;
            if (!CHDATA.sortie.lbasNodes[this.node]) return false;
        }

        if (parameters.shouldCountBeIncreased) {
            return parameters.shouldCountBeIncreased(checkGimmickParameters);
        }

        let requiredRank = this.ranksRequiredPerDiff[getDiff()];
        let aquiredRank = CHDATA.temp.rank;

        let ranks = ['S','A','B','C','D'];

        for (const rank of ranks) {
            if (rank == requiredRank) return aquiredRank == rank;
            
            if (rank == aquiredRank) return 1;
        }

        return 0;
    }

    this.getDescription = (diff) => {
        if (parameters.getDescription) {
            return parameters.getDescription(diff);
        }

        if (!this.timesRequiredPerDiff[diff]) return '-';

        return this.ranksRequiredPerDiff[diff] + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
    }
}

ChGimmick.ConvertAirStateNumberToString = (airState) => {
    switch (airState) {
        case 0: return 'AP';
        case 1: return 'AS';
        case 2: return 'AS+';
    }

    return '???';
}

ChGimmick.IsUnlockDone = (routeUnlock) => {
    if (!CHDATA.event.maps[MAPNUM].routes) return false;
    if (!CHDATA.event.maps[MAPNUM].routes.length) return false;

    return CHDATA.event.maps[MAPNUM].routes.indexOf(parseInt(routeUnlock)) != -1;
}