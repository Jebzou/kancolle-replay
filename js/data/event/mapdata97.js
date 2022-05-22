var RANDOMAPS = true;
// --- todo

MAPDATA[97] = {
    name: 'Random Fiesta',
    date: '2055-02-02',
    diffMode: 2,
    allowDiffs: [2,3],
    allowFleets: [0,1,2,3,7],
    allowLBAS: true,
    allowVanguard: true,
    vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
    newResupplyCosts: true,
    bannerImg: 'assets/maps/98/banner.png',
    bannerImgAlt: 'assets/maps/98/banner.png',
    allowStrongFF: true,
    friendFleetWaves: {
        1: { date: '2020-07-17' },
        2: { date: '2020-08-07' },
    },
    transportCalc: function(ships,rank) {
        rank = rank || 'S';
        let tp = transportCalcStandard(ships,'S');
        for (let ship of ships) {
            if (!ship) continue;
            for (let item of ship.items) {
                if (item <= 0) continue;
                let eq = CHDATA.gears['x'+item];
                let eqd = EQDATA[eq.masterId];
                if (eqd.type == LANDINGTANK) tp += 18;
            }
        }
        tp = Math.floor(tp);
        if (rank == 'A') tp *= 0.7;
        if (rank != 'S' && rank != 'A') return 0;
        return Math.floor(tp);
    },
    friendFleet: {},
    maps: {
    }
}

MAPDATA[97].initializeAllMaps = function () {
    
    CHDATA.event.comps = CHDATA.customEventData.comps;

    for (const key in CHDATA.customEventData.eventData) {
        MAPDATA[97][key] = CHDATA.customEventData.eventData[key];
    }
    
    for (const mapNumber in CHDATA.maps) {
        MAPDATA[97].initializeMap(mapNumber);
    }

    // --- Init Friend fleets (TODO : have it in the file)
    for (const eventId in MAPDATA) {
        if (eventId > 90) continue;
        if (!MAPDATA[eventId].friendFleet) continue;

        for (const FFkey in MAPDATA[eventId].friendFleet) {
            
            MAPDATA[97].friendFleet[FFkey] = MAPDATA[eventId].friendFleet[FFkey];
        }
    }
}

MAPDATA[97].initializeMap = function (mapNum) {

    let mapData = {
        /*name: oriMapData.name,
        nameT: oriMapData.nameT,
        
        bossnode: oriMapData.bossnode,

        hpmode: oriMapData.hpmode,
        maphp: oriMapData.maphp,
        finalhp: oriMapData.finalhp,
        
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT*/
    };

    /*if (mapData.maphp && !mapData.maphp[3]) {
        mapData.maphp[3] = mapData.maphp[2];
    }*/

    /*let combinedAllowed = Math.random() > 0.5;
    let strikeForceAllowed = Math.random() > 0.5;
    let singleAllowed = combinedAllowed || strikeForceAllowed ? Math.random() > 0.5 : true;

    /*mapData.fleetTypes = [];
    
    if (combinedAllowed)  {
        mapData.fleetTypes.push(1, 2, 3);
    }

    if (strikeForceAllowed)  {
        mapData.fleetTypes.push(7);
    }

    if (singleAllowed)  {
        mapData.fleetTypes.push(0);
    }*/

    /*mapData.bgmMap = chrGetRandomBgm("map");
    mapData.bgmDN = mapData.bgmNN = chrGetRandomBgm("battle");
    mapData.bgmDB = mapData.bgmNB = chrGetRandomBgm("boss");*/

    //mapData.fleetTypes = oriMapData.fleetTypes

    //MAPDATA[97].initializeNodes(oriMapData, mapData);

    /*for (const nodeKey in CHDATA.customMaps[mapNum].nodes) {
        
        // --- For each nodes:

        // --- Load original map for now :(
        //MAPDATA[worldNum].maps[mapNum].nodes[nodeKey] = MAPDATA[worldNum].maps[mapNum].nodes[nodeKey];

    }*/
    

    // --- Save some stuff : 
    /*const properties =  [
        "additionalChecks", 
        "getLock",
        "startCheck",
    ];*/

    /*const values = [];

    for (const prop of properties) {
        values[prop] = MAPDATA[worldNum].maps[mapNum][prop];
    }

    // --- Load the map
    MAPDATA[worldNum].maps[mapNum] = customMap;

    // --- Restore some stuff : 
    for (const prop of properties) {
        MAPDATA[worldNum].maps[mapNum][prop] = values[prop];
    }*/
        
    MAPDATA[97].loadUnlockFromChData(MAPDATA[97].maps[mapNum]);
    MAPDATA[97].loadStartCheckFromChData(MAPDATA[97].maps[mapNum]);
    MAPDATA[97].loadStartBonusesFromChData(MAPDATA[97].maps[mapNum]);

    for (const nodeKey in MAPDATA[97].maps[mapNum].nodes) {
        const nodeData = MAPDATA[97].maps[mapNum].nodes[nodeKey];

        try {
            
            MAPDATA[97].loadNodeFromChData(nodeData);

            MAPDATA[97].loadBonusesFromChData(nodeData);
        } catch (error) {
            console.debug(nodeData);
            throw error;
        }
    }
    
}

MAPDATA[97].initializeNodes = function (oriMapData, mapData) {

    mapData.nodes = {};

    for (const nodeKey in oriMapData.nodes) {
        mapData.nodes[nodeKey] = "base_node";
    }
}

MAPDATA[97].loadStartCheckFromChData = function (map) {
    if (!map.startCheckRule) return;
    /*map.startCheckRule = mapSave.startCheckRule;
    return;*/
    let rules = [];

    for (const rule of map.startCheckRule) {
        rules.push(MAPDATA[97].convertRule(rule))
    }

    map.startCheckRule = rules;
}

MAPDATA[97].loadUnlockFromChData = function (map) {
    for (const unlockKey in map.hiddenRoutes) {

        /**
         * @type {ChGimmickList}
         */
        const gimmicks = map.hiddenRoutes[unlockKey].unlockRules;

        map.hiddenRoutes[unlockKey].unlockRules = new ChGimmickList(gimmicks.type, gimmicks.mapPartNumber, gimmicks.mapNum, gimmicks.gimmickData, gimmicks.additionnalParameters);
    }

    const debuff = map.debuffRules;
    if (debuff) map.debuffRules = new ChGimmickList(debuff.type, debuff.mapPartNumber, debuff.mapNum, debuff.gimmickData, debuff.additionnalParameters);
}

MAPDATA[97].loadStartBonusesFromChData = function (map) {
    if (map.startBonus) delete map.startBonus;
}

MAPDATA[97].loadBonusesFromChData = function (nodeData) {

    const bonuses = [];

    if (!nodeData.bonuses) return;

    for (const bonus of nodeData.bonuses) {
        switch (bonus.bonusType) {
            case 'ChShipIdsBonuses':
                bonuses.push(new ChShipIdsBonuses(bonus.parameters, bonus.shipIds.map(x => parseInt(x)), bonus.amount));
                break;

            case 'ChShipTypeBonuses':
                bonuses.push(new ChShipTypeBonuses(bonus.parameters, bonus.shipTypes, bonus.amount));
                break;
        
            default:
                break;
        }
    }

    nodeData.bonuses = bonuses; 
}

/**
 * 
 * @param {ChRule} ruleToConvert 
 * @returns 
 */
MAPDATA[97].convertRule = function (ruleToConvert) {
    switch (ruleToConvert.type) {
        case "fixed":
            return ChFixedRoutingRule(ruleToConvert.fixedNode);
            
        case "routeSelect":
            return ChSelectRouteRule(ruleToConvert.routeSelect);

        case "mapPart":
            return ChMapPartRuleOld(ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            
        case "isRouteUnlocked":
            if (ruleToConvert.not) return ChIsRouteNotUnlockedRule(ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            return ChIsRouteUnlockedRule(ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "default":
            return ChDefaultRouteRule(ruleToConvert.conditionCheckedNode);

        case "shipType":
            return ChShipTypeRoutingRule(ruleToConvert.shipTypes, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "multiRules":
            let rulesArray = [];

            for (const rule of ruleToConvert.rules) {
                rulesArray.push(MAPDATA[97].convertRule(rule));
            }

            return ChMultipleRulesRule(rulesArray, ruleToConvert.logicOperator, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
    
        case "fleetType": 
            return ChFleetTypeRule(ruleToConvert.fleetType, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "random": 
            return ChRandomRule(ruleToConvert.randomNodes);
        
        case "difficulty": 
            return ChDifficultyRule(ruleToConvert.difficulties, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "speed": 
            return ChSpeedRule(ruleToConvert.operator, ruleToConvert.speed, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "ifthenelse": {
            const ruleIf = ruleToConvert.ifthenelse.if ? this.convertRule(ruleToConvert.ifthenelse.if) : null;
            const ruleThen = ruleToConvert.ifthenelse.then ? this.convertRule(ruleToConvert.ifthenelse.then): null;
            const ruleElse = ruleToConvert.ifthenelse.else ? this.convertRule(ruleToConvert.ifthenelse.else): null;

            return ChIfThenElseRule(ruleIf, ruleThen, ruleElse);
        }

        case 'los': 
            return ChLOSRule(ruleToConvert.LOS, ruleToConvert.LOSCoef);

        case "shipIds": 
            return ChShipIdsRoutingRule(ruleToConvert.shipsIds, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "shipCount": 
            return ChShipCountRoutingRule(ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "allShipsMustBe": 
            return ChAllShipMusteBeOfTypeRule(ruleToConvert.shipTypes, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode)

        case "equipType": 
            return ChEquipTypeRule(ruleToConvert.equipData, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.shipWithEquipCount, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);

        case "custom": 
            return ChCreateCustomRuleFromName(ruleToConvert.customRuleName);

        case "speedCount": 
            return ChNumberOfShipOfSpeedRule(ruleToConvert.speedOperator, ruleToConvert.speed, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode)

        default:
            console.debug(ruleToConvert);
            throw 'unhandled rule';
    }
}

MAPDATA[97].loadNodeFromChData = function (nodeData) {

    if (nodeData.rules) {
        let rules = [];

        for (const rule of nodeData.rules) {
            rules.push(MAPDATA[97].convertRule(rule))
        }
    
        nodeData.rules = rules;
    }

    //nodeData.rules = nodeSave.rules;
    
    if (nodeData.endRules) {
        let endRules = [];

        for (const rule of nodeData.endRules) {
            endRules.push(MAPDATA[97].convertRule(rule))
        }

        nodeData.endRules = endRules;
    }
}

/**
 * Returns a random bgm id (doesn't include 2001, 2, 1)
 * @param {"map" | "battle" | "boss"} type 
 */
function chrGetRandomBgm(type) {
    let possibleBgm;
    
    switch (type) {
        case "map":
            possibleBgm = chrGetRandomBgm.possibleBGM.map;
            break;
            
        case "battle":
            possibleBgm = chrGetRandomBgm.possibleBGM.battle;
            break;

        case "boss":
            possibleBgm = chrGetRandomBgm.possibleBGM.boss;
            break;
    
        default:
            possibleBgm = chrGetRandomBgm.possibleBGM;
            break;
    }
    

    return possibleBgm[Math.floor(Math.random()*possibleBgm.length)];

}

chrGetRandomBgm.bannedMap = [2001, 2, 1];
chrGetRandomBgm.bannedBattle = [2001, 2, 1, 97];
chrGetRandomBgm.bannedBoss = [2001, 2, 1, 96, 36, 35, 34, 33, 32, 1000, 1001];

chrGetRandomBgm.possibleBGM = {
    map : [],
    battle : [],
    boss : []
};

for (const eventKey in MAPDATA) {
    if (parseInt(eventKey) > 90) continue;

    for (const mapKey in MAPDATA[eventKey].maps) {
        let map = MAPDATA[eventKey].maps[mapKey];

        if (!chrGetRandomBgm.bannedMap.includes(map.bgmMap) && !chrGetRandomBgm.possibleBGM.map.includes(map.bgmMap)) {
            chrGetRandomBgm.possibleBGM.map.push(map.bgmMap);
        }
        
        if (!chrGetRandomBgm.bannedBattle.includes(map.bgmDN) && !chrGetRandomBgm.possibleBGM.battle.includes(map.bgmDN)) {
            chrGetRandomBgm.possibleBGM.battle.push(map.bgmDN);
        }
        
        if (!chrGetRandomBgm.bannedBoss.includes(map.bgmDB) && !chrGetRandomBgm.possibleBGM.boss.includes(map.bgmDB)) {
            chrGetRandomBgm.possibleBGM.boss.push(map.bgmDB);
        }
    }
}

MAPDATA[97].fixBonuses = function () {
    let getComps = (node, world, mapnum) => {
        let eventName = MAPDATA[world].name;
        let mapName = 'E-' + mapnum;
        
        let comps = ENEMYCOMPS[eventName][mapName][node];
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    let getRandoComps = (node, world, mapnum) => {
        let mapName = 'E-' + mapnum;
        if (CHDATA.maps[mapnum].world != world) return getComps(node, world, mapnum);
        
        let comps = CHDATA.event.comps ? CHDATA.event.comps[mapName][node] : getComps(node, CHDATA.maps[mapnum].world, mapnum);
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    for (const eventId in MAPDATA) {
        for (const mapNum in MAPDATA[eventId].maps) {
            for (const nodeLetter in MAPDATA[eventId].maps[mapNum].nodes) {
                
                let node = MAPDATA[eventId].maps[mapNum].nodes[nodeLetter];

                if (node.bonuses) {
                    let bonuses = node.bonuses;

                    for (const bonus of bonuses) {
                        if (bonus.parameters.on && !bonus.parameters.fixed) {
                            let comps = getComps(nodeLetter, eventId, mapNum);
                            let randoComps = getRandoComps(nodeLetter, eventId, mapNum);
                            let newOn = [];

                            for (const abyssalMid of bonus.parameters.on) {
                                for (const compNum in comps) {
                                    for (const index in comps[compNum].c) {
                                        if (comps[compNum].c[index] == abyssalMid) {
                                            let newMid = randoComps[compNum].c[index];

                                            if (!newOn.includes(newMid)) newOn.push(newMid);
                                        }
                                    }
                                }
                            }

                            bonus.parameters.fixed = true;
                            if (bonus.parameters) bonus.parameters.on = newOn;
                            if (bonus.bonusToApply) bonus.bonusToApply.on = newOn;
                        }
                    }
                }
            }
        }
    }
}



function chrGetLastDance() {
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = false;

    let map = MAPDATA[WORLD].maps[MAPNUM];

    if (MAPDATA[WORLD].maps[MAPNUM].parts) {
        if (!CHDATA.event.maps[MAPNUM].part) return false;
        map = MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part];
    } 
    
    if (map.transport) {
        /*var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
        var tp = transportCalc(chrGetShips(true),'S');
        lastdance = CHDATA.event.maps[MAPNUM].hp <= tp && CHDATA.event.maps[MAPNUM].hp > 0;
        if (!lastdance && map.finaltp) lastdance = (CHDATA.event.maps[MAPNUM].hp <= map.finaltp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);*/
        return false;
    } else {
        lastdance = (map && CHDATA.event.maps[MAPNUM].hp <= map.finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
    }
    
    return lastdance;
}


MAPDATA[97].ChrRandomizeEvent = function () {
return;
    const rando = () => {
        try {
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[1].world, 1);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[2].world, 2);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[3].world, 3);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[4].world, 4);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[5].world, 5);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[6].world, 6);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[7].world, 7);  
        }
        catch (ex) {
            console.error(ex);
            if (confirm('Event Initialization failed, do you want to retry ? (no will refresh without saving changes)')) {
                rando();
            }
            else {
                CHDATA.maps = undefined;
                location.reload();
            }
        }
    }
    rando(); 

    return;
    //loadObject.Hide();
}

MAPDATA[97].saveMapData = function (mapnum, map) {

    // --- Delete useless data
    for (const node in map.nodes) {
        let nodeData = map.nodes[node];

        delete nodeData.fleetsTypes;
    }

    localStorage.setItem('chrRandom-' + mapnum, JSON.stringify(map));
}

MAPDATA[97].ChrRandomizeMap = function (eventNumber, mapNumber) {
    
    console.debug(`Randomizing ${MAPDATA[eventNumber].name} E${mapNumber}`);

    /**
     * @type {ChrRandomizeEventHelper.PathObject[]}
     */
    let paths = [];
    let starts = [];
    
    let map = MAPDATA[eventNumber].maps[mapNumber];

    let countSecurity = 0;
    let checkLoop = () => {
        countSecurity++;
        if (countSecurity > 999999) {
            alert('loop detected');
            throw 'loop detected';
        }
    }

    let constructMapLayout = () => {

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

            checkLoop();

            /**
             * @type {{ rules: ChRule[] }}
             */
            let nodeData = map.nodes[node];

            /**
             * 
             */
            let path = {};

            path.node = node;
            path.nodeData = nodeData;

            // --- Init node data
            if (!path.nodeData) console.debug(node);

            ChrRandomizeEventHelper.InitNodeData(path.nodeData);

            if (!path.nodeData.rules) { 
                path.pathEnd = true;
                return path; 
            }

            path.paths = [];
            let nodesDone = [];

            const constructPathOfPath = (rule) => {
                let nextNode = rule.conditionCheckedNode || rule.fixedNode;

                if (rule.type == 'routeSelect')  {

                    for (const selectNode of rule.routeSelect) {
                        path.paths.push(constructPaths(selectNode, node));
                    }

                    return;
                }

                if (rule.type == 'random')  {

                    for (const randomNode of Object.keys(rule.randomNodes)) {
                        if (randomNode) path.paths.push(constructPaths(randomNode, node));
                    }

                    return;
                }

                if (rule.type == 'ifthenelse')  {

                    constructPathOfPath(rule.ifthenelse.then);

                    if (rule.ifthenelse.else) {
                        constructPathOfPath(rule.ifthenelse.else);
                    }

                    return;
                }
                
                if (!nextNode) {
                    console.debug(rule);
                    throw 'Error reading rule of node ' + node;
                }

                if (nextNode.includes("/")) {
                    for (const nextNodeDetail of nextNode.split('/')) {
                        path.paths.push(constructPaths(nextNodeDetail, node));
                        nodesDone.push(nextNodeDetail);
                    }
                    return;
                }

                if (!nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }

                nextNode = rule.conditionFailedNode;

                if (nextNode && !nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }
            }
            
            for (const rule of path.nodeData.rules) {
                constructPathOfPath(rule);
            }

            return path;
        }

        for (const start of starts) {
            paths.push(constructPaths(start));
        }

        console.debug(starts);
        console.debug(paths);
    }

    let checkMapLayout = () => {
        let nodes = [];

        let checkNode = (path) => {
            nodes.push(path.node);

            if (!path.paths) return;

            for (const nextPath of path.paths) {
                checkNode(nextPath);
            }
        }
        
        for (const path of paths) {
            checkNode(path);
        }

        for (const node in map.nodes) {
            if (!nodes.includes(node)) {
                throw "Error : Node " + node + ` cant be reached`;
            }
        }
    }

    let makeStartRules = () => {
        return;
        map.startCheckRule = ChrRandomizeEventHelper.CreateStartRules(map, paths);
    }

    let makeMapRouting = () => {
        return;
        for (const path of paths) {
            
            /**
             * 
             * @param {ChrRandomizeEventHelper.PathObject} currentPath 
             */
            let makeRouting = (currentPath) => {
                if (!currentPath.paths) return;
                
                for (const nextPath of currentPath.paths) {

                    ChrRandomizeEventHelper.CreateRandomRules(currentPath, nextPath);

                    makeRouting(nextPath);
                }
            }

            ChrRandomizeEventHelper.CreateRandomRules(null, path);
            makeRouting(path);
        }
    }

    const makeGimmicks = () => {

        let unlockRequired = 0;
        let lastPart = null;

        const abPossible = !!map.enemyRaid;

        for (const part in map.hiddenRoutes) {

            let partRequired = null;

            if (map.hiddenRoutes[part].unlockRules && map.hiddenRoutes[part].unlockRules.mapPartNumber) partRequired = map.hiddenRoutes[part].unlockRules.mapPartNumber - 1;
            if (map.hiddenRoutes[part].unlockRules) {
                const unlockRule = map.hiddenRoutes[part].unlockRules.gimmicks.find(gimmick => gimmick.type == "PartClear");

                if (unlockRule) partRequired = unlockRule.partToClear;
            }

            map.hiddenRoutes[part].unlockRules = ChrRandomizeGimmicks.RandomizeGimmicks("mapPart", mapNumber, {
                partToUnlock: part,
                mapPartRequired : partRequired,
                routeUnlockRequired: unlockRequired
            }, map.nodes, abPossible);

            unlockRequired = part;
            lastPart = partRequired && partRequired > lastPart ? partRequired : lastPart;
        }

        map.debuffRules = ChrRandomizeGimmicks.RandomizeGimmicks("debuff", mapNumber, {
            partToUnlock: lastPart,
            mapPartRequired : lastPart,
            routeUnlockRequired: unlockRequired
        }, map.nodes, abPossible);
    }

    const makeBonuses = () => {

        for (const node in map.nodes) {
            const nodeData = map.nodes[node];
            nodeData.bonuses = [];
        }

        ChrRandomizeBonuses.MakeBonusesFromNodes(paths);
    }

    
    constructMapLayout();
    checkMapLayout();
    makeStartRules();
    makeMapRouting();
    makeGimmicks();
    makeBonuses();

    MAPDATA[97].saveMapData(mapNumber, map)
}



MAPDATA[97].chrLoadCustomEventData = function() {
    return new Promise((resolve) => {
        let file = document.getElementById("customEventFile").files[0];
        if (!file) throw 'Event file is required';
    
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            let eventData = JSON.parse(event.target.result);
    
            CHDATA.customEventData = eventData;
    
            // --- Refresh after load
            //chSave = () => null;
            //location.reload();
            resolve();
        });
    
        reader.readAsText(file);
    });
	
}

MAPDATA[97].rerollBonuses = function () {

    const map = MAPDATA[WORLD].maps[MAPNUM];

    for (const node in map.nodes) {
        const nodeData = map.nodes[node];
        nodeData.bonuses = [];
    }

    const paths = MAPDATA[97].constructPaths(map);

    ChrRandomizeBonuses.MakeBonusesFromNodes(paths);
}

MAPDATA[97].constructPaths = function (map) {
    const paths = [];
    const starts = [];
    let countSecurity = 0;

    let checkLoop = () => {
        countSecurity++;
        if (countSecurity > 999999) {
            alert('loop detected');
            throw 'loop detected';
        }
    }

    let constructMapLayout = () => {

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

            checkLoop();

            /**
             * @type {{ rules: ChRule[] }}
             */
            let nodeData = map.nodes[node];

            /**
             * 
             */
            let path = {};

            path.node = node;
            path.nodeData = nodeData;

            // --- Init node data
            ChrRandomizeEventHelper.InitNodeData(path.nodeData);

            if (!path.nodeData.rules) { 
                path.pathEnd = true;
                return path; 
            }

            path.paths = [];
            let nodesDone = [];

            const constructPathOfPath = (rule) => {
                let nextNode = rule.conditionCheckedNode || rule.fixedNode;

                if (rule.type == 'routeSelect')  {

                    for (const selectNode of rule.routeSelect) {
                        path.paths.push(constructPaths(selectNode, node));
                    }

                    return;
                }

                if (rule.type == 'random')  {

                    for (const randomNode of Object.keys(rule.randomNodes)) {
                        if (randomNode) path.paths.push(constructPaths(randomNode, node));
                    }

                    return;
                }

                if (rule.type == 'ifthenelse')  {

                    constructPathOfPath(rule.ifthenelse.then);

                    if (rule.ifthenelse.else) {
                        constructPathOfPath(rule.ifthenelse.else);
                    }

                    return;
                }

                if (!nextNode) {
                    console.debug(rule);
                    throw 'Error reading rule of node ' + node;
                }

                if (!nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }

                nextNode = rule.conditionFailedNode;

                if (nextNode && !nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }
            }
            
            for (const rule of path.nodeData.rules) {
                constructPathOfPath(rule);
            }

            return path;
        }

        for (const start of starts) {
            paths.push(constructPaths(start));
        }
    }

    constructMapLayout();

    return paths;
}