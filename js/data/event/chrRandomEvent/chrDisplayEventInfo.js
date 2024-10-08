var CHDATA;
var MAPNUM;
var WORLD;

class ChrDisplayEventInfo {

    constructor () {
        this.root = $(`
        <div>
            <div id="mapButtons"></div>

            <div id="pageContent">
                <div id="mapInfo">
                    <div id="mapInfoMapInfo"></div>
                </div>
                <div id="mapAndCompsContainer">
                    <div id="partButtons"></div>
                    <div id="map"></div>
                    <div id="comp"></div>
                </div>
                <div class="foldable-element" id="routing">
                    <div class="foldable-element-title mapInfoTitle">Routing infos</div>
                    <div id="routingContainer"></div>
                </div>
            </div>
        
        </div>`);
    
        this.Init();
    }

    Comps = {};

    selectedDiff = null;

    LoadCHDATA() {
        let FILE = localStorage.ch_file;
        this.Comps = JSON.parse(localStorage['ch_basic'+FILE]).event.comps;
        CHDATA = JSON.parse(localStorage['ch_basic'+FILE]);
        this.Worlds =  JSON.parse(localStorage['ch_basic'+FILE]).maps;
    }
    
    Init () {
        $('body').append(this.root);

        // --- load comps 
        this.LoadCHDATA();

        // --- Map 
        /**
         * @type {ChrMap}
         */
        this.map = new ChrMap($("#map")[0]);

        this.map.OnNodeClick = (letter) => {
            this.DisplayComps(this.currentMap, letter);
        }

        const initAfterLoad = () => {

            // --- Map buttons
            for (let mapNum = 0; mapNum < ChrDisplayEventInfo.MAP_COUNT; mapNum++) {
                let button = $(`<div class="mapButton">E-${mapNum + 1}</div>`);

                button.click(() => {
                    this.currentMap = mapNum + 1;
                    MAPNUM = this.currentMap;
                    WORLD = this.GetCurrentWorld();

                    if (CHDATA.event.maps[this.currentMap].routes) {
                        this.unlockPart = Math.max(...CHDATA.event.maps[this.currentMap].routes)
                    }
                    else {
                        this.unlockPart = 0;
                    }

                    if (CHDATA.event.maps[4] && CHDATA.event.maps[4].part) {
                        this.lbPart = CHDATA.event.maps[4].part;
                    }
                    else {
                        this.lbPart = 1;
                    }

                    this.LoadMapAndButtons();                

                    // --- Display map infos
                    this.DisplayMapInfos();

                    // --- Routing
                    this.DisplayRouting();

                    this.InitFoldableElement();
                });

                if (CHDATA.event.mapnum == mapNum + 1) {
                    button.click();
                }

                $("#mapButtons").append(button)
            }
        } 

        
        if (CHDATA.event.world == 97) {
            MAPDATA[97].initializeAllMaps(initAfterLoad);
        } else {
            initAfterLoad();
        }

    }

    lbPart = 1;
    unlockPart = 0;

    LoadMapAndButtons() {
        let afterButtonClick = () => {
            $('.part-button').removeClass('part-button-selected');

            this.map.LoadMap(this.GetCurrentWorld(), this.currentMap, this.unlockPart, this.lbPart);

            $($('.part-button-part')[this.lbPart - 1]).addClass("part-button-selected");
            $($('.part-button-unlock')[this.unlockPart]).addClass("part-button-selected");
        };

        this.DisplayPartButtons(afterButtonClick);

        // --- Load the map 
        afterButtonClick();
    }
    
    DisplayPartButtons(afterButtonClick) {

        $('#partButtons').html('');

        if (!MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].hiddenRoutes) return;

        let button = $(`<button>No unlock</button>`);
        button.addClass("part-button part-button-selected part-button-unlock");

        button.click(() => { 
            this.unlockPart = 0; 
            afterButtonClick();
        });
        
        $('#partButtons').append(button);

        for (const key in MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].hiddenRoutes) {
            button = $(`<button>Unlock ${key}</button>`);
            button.addClass("part-button part-button-unlock");

            button.click(() => { 
                this.unlockPart = parseInt(key);  
                afterButtonClick();
            });
            
            $('#partButtons').append(button);
        }

        $('#partButtons').append('<br>');

        let lbParts = [];

        for (const key in MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].nodes) {
            let node = MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].nodes[key];

            if (node.lbPart && !lbParts.includes(node.lbPart)) {
                button = $(`<button>Part ${node.lbPart}</button>`);
                button.addClass("part-button part-button-part");

                if (!lbParts.length) button.addClass("part-button-selected");
                lbParts.push(node.lbPart);

                button.click(() => { 
                    this.lbPart = node.lbPart;
                    afterButtonClick();
                });
                
                $('#partButtons').append(button);
            }
        }        
    };

    GetCurrentWorld() {
        if (CHDATA.event.world > 97) return this.Worlds[this.currentMap].world;
        return CHDATA.event.world;
    }

    GetRoutingRules() {
        let rules = {};

        if (this.GetCurrentWorld() > 53) return {};

        if (MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].startCheckRule) {
            rules.Start = {
                rules: MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].startCheckRule
            };
        }

        let nodes = MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].nodes;

        for (const node in nodes) {
            rules[node] = nodes[node];
        }

        return rules;
    }

    DisplayRouting () {
        let nodes = this.GetRoutingRules();

        let routingEl = $("<table>");
        routingEl.addClass("routingTable foldable-element");

        routingEl.append($(`
        <tr>
            <th>Node</th>
            <th>Routing</th>
        </tr>`));

        //--- nodes routing
        for (const nodeKey in nodes) {
            let rules = nodes[nodeKey].rules;

            if (!rules) continue;

            let line = $("<tr>");

            line.append(`<td class="node-battle">${nodeKey}</td>`);

            line.append(this.MakeRoutingEl(rules));

            routingEl.append(line);
        }

        $("#routingContainer").html(routingEl);
    }

    MakeRoutingEl(rules) {
        let root = $("<td>");

        let nodeRulesTranslatedPerPart = {};

        let priority = 0;
        
        let translateRule = function (rule, nodeRulesTranslated) {
            switch (rule.type) {
                case "fixed":
                    nodeRulesTranslated[rule.fixedNode] = rule.getDescription();
                    break;

                case "random": 
                    let descriptions = rule.GetRandomDescription();

                    for (const node in descriptions) {
                        if (!nodeRulesTranslated[node]) nodeRulesTranslated[node] = "";

                        nodeRulesTranslated[node] += descriptions[node];
                        nodeRulesTranslated[node] += "<br>";
                    }

                    break;

                case "los": 
                    let descriptionsLos = rule.GetLOSDescription();

                    for (const node in descriptionsLos) {
                        if (!nodeRulesTranslated[node]) nodeRulesTranslated[node] = "";

                        nodeRulesTranslated[node] += descriptionsLos[node];
                        nodeRulesTranslated[node] += "<br>";
                    }

                    break;
            
                default:
                    let description = rule.getDescription();

                    if (typeof(description) == "string") {
                        if (!nodeRulesTranslated[rule.conditionCheckedNode]) nodeRulesTranslated[rule.conditionCheckedNode] = "";
                        if (rule.conditionFailedNode && !nodeRulesTranslated[rule.conditionFailedNode]) nodeRulesTranslated[rule.conditionFailedNode] = "";

                        nodeRulesTranslated[rule.conditionCheckedNode] += description;
                        nodeRulesTranslated[rule.conditionCheckedNode] += ` (${++priority})`;
                        nodeRulesTranslated[rule.conditionCheckedNode] += "<br>";
                        nodeRulesTranslated[rule.conditionCheckedNode] += "<br>";
                    } 
                    else {
                        for (const node in description) {
                            if (!nodeRulesTranslated[node]) nodeRulesTranslated[node] = "";

                            nodeRulesTranslated[node] += description[node];
                            nodeRulesTranslated[node] += ` (${++priority})`;
                            nodeRulesTranslated[node] += "<br>";
                            nodeRulesTranslated[node] += "<br>";
                        }
                    }


                    break;
            }
        }
        
        /**
        * @type {ChRule}
        */
        let rule;

        for (rule of rules) {
            if (!rule.mapParts) {
                if (!nodeRulesTranslatedPerPart.noPart) nodeRulesTranslatedPerPart.noPart = {};
                translateRule(rule, nodeRulesTranslatedPerPart.noPart);
            } else {
                for (const part of rule.mapParts) {
                    if (!nodeRulesTranslatedPerPart[part]) nodeRulesTranslatedPerPart[part] = {};
                    translateRule(rule, nodeRulesTranslatedPerPart[part]);
                }
            }
        }

        let nodeRulesTranslatedPerNode = {};

        for (const part in nodeRulesTranslatedPerPart) {
            for (const node in nodeRulesTranslatedPerPart[part]) {
                if (!nodeRulesTranslatedPerNode[node]) nodeRulesTranslatedPerNode[node] = '';

                if (part == 'noPart') nodeRulesTranslatedPerNode[node] += nodeRulesTranslatedPerPart[part][node]
                else nodeRulesTranslatedPerNode[node] += `During part ${part}: <br>${nodeRulesTranslatedPerPart[part][node]}<br><br>`
            }            
        }

        for (const nodeKey in nodeRulesTranslatedPerNode) {
            let routingLine = $("<div>");
            routingLine.addClass("routingLine");

            let description = nodeRulesTranslatedPerNode[nodeKey];
            if (!description) description = "Other requirements not met";

            routingLine.append($(`
                <div class="node-battle">${nodeKey}</div>
                <div>${description}</div>
            `));

            root.append(routingLine);
        }

        return root;
    }
    
    DisplayComps (mapnum, node) {
        let comps = this.GetComps(mapnum, node);

        let compRoot = $(`<table>`)

        let nodeData = MAPDATA[this.GetCurrentWorld()].maps[mapnum].nodes[node];

        let nodeInfos = [];
        
        if (nodeData.night || (Object.values(comps).map(x => x.NB ? 1 : 0).includes(1))) {
            nodeInfos.push(`<span class="yasen-text">Night node</span>`);
        }

        if (nodeData.distance) {
            nodeInfos.push(`Node range : ${nodeData.distance ? nodeData.distance : 0}`);
        }

        compRoot.append($(`
            <tr>
                <th>Formation</th>
                <th>${nodeInfos.join(' - ')}</th>
                <th>AD/AP<br>AS/AS+</th>
            </tr>
            `));

        let compsKeys = null;
        let compsKeysFinal = null;
        let compsKeysCleared = null;
        
        if (this.selectedDiff) {
            let nodeData = MAPDATA[this.GetCurrentWorld()].maps[mapnum].nodes[node];

            compsKeys = Object.keys(this.GetComps(mapnum, node, false, false, this.selectedDiff))

            if (nodeData.compDiffF) {
                compsKeysFinal = Object.keys(this.GetComps(mapnum, node, true, false, this.selectedDiff));
            }
            if (nodeData.compDiffC) {
                compsKeysCleared= Object.keys(this.GetComps(mapnum, node, false, true, this.selectedDiff));
            }
        }

        for (const compKey in comps) {
            if (compsKeys && !compsKeys.includes(compKey)) continue;

            if (Object.hasOwnProperty.call(comps, compKey)) {
                const comp = comps[compKey];

                compRoot.append(this.DisplayComp(comp, compKey, compsKeysFinal && compsKeysFinal.includes(compKey), compsKeysCleared && compsKeysCleared.includes(compKey)));
            }
        }

        $("#comp").html("<div>");

        if (MAPDATA[this.GetCurrentWorld()].diffMode == 1 || MAPDATA[this.GetCurrentWorld()].diffMode == 2) {
            
            let diffButtons = $("<div>");

            for (const diff of MAPDATA[this.GetCurrentWorld()].allowDiffs) {

                let diffTexte = this.GetDiffText(diff);                

                let classes = `diff-button` + (this.selectedDiff == diff ? ` diff-button-selected` : '');
                let button = $(`<button class="${classes}">${diffTexte}</button>`);

                button.click(() => { this.selectedDiff = diff; this.DisplayComps(mapnum, node) });

                diffButtons.append(button)
            }

            $("#comp").append(diffButtons);
        }

        $("#comp").append(compRoot);
    }

    GetDiffText(diff) {
        switch (diff) {
            case 4:
                return "Casual";

            case 1:
                return "Easy";
        
            case 2:
                return "Medium";
                
            case 3:
                return "Hard";
            
            default: 
                return "???";
        }
    }

    STAT_KEYS = ["HP", "FP", "TP", "AA", "AR"];

    GetTableFromComp(ships) {

        let table = $("<div>");
        table.addClass("comp-table");

        for (const shipId of ships) {
            let column = $(`<div>`);
            column.addClass("ship-stat-column");

            // --- Ship image 
            let imgEl = $(`<img>`);
    
            imgEl.attr("src", chGetShipImagePath(shipId));
            imgEl.attr("title", SHIPDATA[shipId].name);

            column.append(imgEl);

            for (const statKey of this.STAT_KEYS) {
                let statEl = $(`<div>`);
    
                statEl.addClass(`stat-line-${statKey}`);
                statEl.append(`${statKey}: ${SHIPDATA[shipId][statKey]}`);

                column.append(statEl);
            }

            table.append(column);
        }

        return table;
    }

    GetFormation(formation) {
        if (this.FORMATIONS_NAMES[formation]) return this.FORMATIONS_NAMES[formation];

        return "unknown";
    }

    FORMATIONS_NAMES = {
        1: "Line ahead",
        2: "Double line",
        3: "Diamond",
        4: "Echelon",
        5: "Line abreast",
        6: "Vanguard", 

        11: "Cruising Formation 1 (Combined LA)", 
        12: "Cruising Formation 2 (Combined DL)", 
        13: "Cruising Formation 3 (Combined diamond)", 
        14: "Cruising Formation 4 (Combined LAb)",

        '111': "Cruising Formation 1 <br>(Combined LAb)",
        '111E': "Cruising Formation 1 <br>(Combined LAb)",
        '112': "Cruising Formation 2 <br>(Combined DL)",
        '112E': "Cruising Formation 2 <br>(Combined DL)",
        '113': "Cruising Formation 3 <br>(Combined diamond)",
        '113E': "Cruising Formation 3 <br>(Combined diamond)",
        '114': "Cruising Formation 4 <br>(Combined LA)",
        '114E': "Cruising Formation 4 <br>(Combined LA)",

        '211': "Cruising Formation 1 <br>(Combined LAb)",     
        '211E': "Cruising Formation 1 <br>(Combined LAb)",
        '212': "Cruising Formation 2 <br>(Combined DL)",
        '212E': "Cruising Formation 2 <br>(Combined DL)",
        '213': "Cruising Formation 3 <br>(Combined diamond)",
        '213E': "Cruising Formation 3 <br>(Combined diamond)",
        '214': "Cruising Formation 4 <br>(Combined LA)",
        '214E': "Cruising Formation 4 <br>(Combined LA)",

        '311': "Cruising Formation 1 <br>(Combined LAb)",     
        '311E': "Cruising Formation 1 <br>(Combined LAb)",
        '312': "Cruising Formation 2 <br>(Combined DL)",
        '312E': "Cruising Formation 2 <br>(Combined DL)",
        '313': "Cruising Formation 3 <br>(Combined diamond)",
        '313E': "Cruising Formation 3 <br>(Combined diamond)",
        '314': "Cruising Formation 4 <br>(Combined LA)",
        '314E': "Cruising Formation 4 <br>(Combined LA)",
    };

    DisplayComp(comp, compKey, isLastDance, isCleared) {
        let line = $("<tr>");

        // --- comp name
        let column = $("<td></td>").append(compKey);
        column.append("<br>");
        column.append(this.GetFormation(comp.f));

        if (isLastDance) { 
            column.append(`<br><span class="last-dance-text">Final</span>`)
        }

        if (isCleared) { 
            column.append(`<br><span class="post-clear-text">Post-Clear</span>`)
        }

        line.append(column);

        column = $("<td>").append(this.GetTableFromComp(comp.c));
        if (comp.ce) {
            column.append(this.GetTableFromComp(comp.ce));
        }

        line.append(column);
        
        column = $(`<td>${this.GetAS(comp)}</td>`);
        line.append(column);

        return line;
        
    }

    GetComps(mapnum, node, finalOnly, clearedOnly, diff) {
        let mapName = 'E-' + mapnum;
        
        let comps = [];
        
        let nodeData = MAPDATA[WORLD].maps[MAPNUM].nodes[node];

        let addComps = (compKeys) => {

            if (Array.isArray(compKeys)) {
                for (const comp of compKeys) {
                    comps[comp] = this.Comps[mapName][nodeData.compName ? nodeData.compName : node][comp];
                }
            }
            else {
                for (const compKey in compKeys) {
                    comps[compKey] = this.Comps[mapName][nodeData.compName ? nodeData.compName : node][compKey];
                }
            }
        }

        let includeFinal = (finalOnly || !clearedOnly);
        let includeCleared = (!finalOnly || clearedOnly);
        let includeNormal = (!finalOnly && !clearedOnly);

        let addCompsOfNode = (nodeDataWithComps) => {

            if (includeNormal) {
                for (const key in nodeDataWithComps.compDiff) {
                    if (diff && key != diff) continue;

                    addComps(nodeDataWithComps.compDiff[key]);
                }
            }
            
            if (includeFinal) {
                if (nodeDataWithComps.compDiffF) {
                    for (const key in nodeDataWithComps.compDiffF) {
                        if (diff && key != diff) continue;

                        addComps(nodeDataWithComps.compDiffF[key]);
                    }
                }
            }
    
            if (includeCleared) {
                if (nodeDataWithComps.compDiffC) {
                    for (const key in nodeDataWithComps.compDiffC) {
                        if (diff && key != diff) continue;

                        addComps(nodeDataWithComps.compDiffC[key]);
                    }
                }
            }
        }

        if (nodeData.compDiffPart) {
            for (const part in nodeData.compDiffPart) {
                addCompsOfNode(nodeData.compDiffPart[part]);
            }
        } else {
            addCompsOfNode(nodeData);
        }
        
        this.Comps[mapName][node];
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    GetAS(compd) {
        var enemies = [];
		var overrideStats = (MAPDATA[this.GetCurrentWorld()].overrideStats)? MAPDATA[this.GetCurrentWorld()].overrideStats[sid] : null;

        for (var i=0; i<compd.c.length; i++) {
            var sid = compd.c[i];
			enemies.push(createDefaultShip(sid, overrideStats));
        }

        let fleet = new Fleet(1);
        fleet.loadShips(enemies);

        let ap = fleet.fleetAirPower('isPlane');

        return `${Math.floor(ap/3)} / ${Math.floor(ap/1.5)}<br>${Math.floor(ap*1.5)} / ${Math.floor(ap*3)}`;
    }

    
    InitFoldableElement() {
        $(".foldable-element-title").off('click');

        $(".foldable-element-title").click((e) => {

            let element = $(e.target);

            if (element.hasClass('foldable-element-hidden')) {
                element.removeClass('foldable-element-hidden');

                let parent = element.parent();
                parent.find(":not(.foldable-element-title)").show();
            } else {
                element.addClass('foldable-element-hidden');
                
                let parent = element.parent();
                parent.find(":not(.foldable-element-title)").hide();
            }
        });
    }

    //#region Map infos
    DisplayMapInfos() {
        let map = MAPDATA[this.GetCurrentWorld()].maps[this.currentMap];

        let mapInfos = map.mapInfo ? map.mapInfo : "";

        if (mapInfos) {
            mapInfos = $(`<div class="foldable-element"><div class="mapInfoTitle foldable-element-title">Informations about this map :</div><div class="mapInfoContent">${mapInfos}</div></div>`);
        }

        $("#mapInfoMapInfo").html(mapInfos);

        // Locks
        if (map.lockInfos) {
            $("#mapInfoMapInfo").append(this.DisplayLockInfos(map, MAPDATA[this.GetCurrentWorld()]));
        }

        // --- Historical routing

        /**
         * @type {ChRule[]}
         */
        let historicalRoutingRules = [];
        let histoGroups = [];

        /**
         * 
         * @param {ChRule} rule 
         */
        function getHistoGroupes (rule) {
            if (rule.type == 'shipIds' && !histoGroups.includes(rule.shipsIdsListName) && rule.historicalGroups) {

                if (Array.isArray(rule.shipsIds) && typeof(rule.shipsIds[0]) != 'number') {
                    for (const subRuleGroupe of rule.shipsIds) {
                        if (histoGroups.includes(subRuleGroupe.shipsIdsListName)) continue;

                        historicalRoutingRules.push(subRuleGroupe);
                        histoGroups.push(subRuleGroupe.shipsIdsListName);
                    }
                } else {
                    historicalRoutingRules.push(rule);
                    histoGroups.push(rule.shipsIdsListName);
                }
            }

            if (rule.type == 'multiRules') {
                for (const rule2 of rule.rules) {
                    getHistoGroupes(rule2);
                }
            }

            if (rule.type == 'ifthenelse' && rule.ifthenelse.if.type == 'shipIds' && rule.ifthenelse.if.historicalGroups) {
                getHistoGroupes(rule.ifthenelse.if);
            }
        }

        for (const nodeKey in map.nodes) {
            let node =  map.nodes[nodeKey];
            if (!node.rules) continue;

            for (const rule of node.rules) {
                getHistoGroupes(rule);
            }
        }

        if (historicalRoutingRules.length) {
            let groupsInfo = $('<div>').addClass("foldable-element");

            groupsInfo.append($(`<div class="mapInfoTitle foldable-element-title">Historical groups for routing :</div>`));

            let groups = $("<div>").addClass("mapInfoContent");

            for (const rule of historicalRoutingRules) {
                let group = $("<div>");

                let groupTitle = $("<div>").addClass("mapInfoContentGroupTitle");
                groupTitle.append(rule.shipsIdsListName)

                let groupContainer = $("<div>").addClass("mapInfoContentGroupContainer");

                for (const shipMid of rule.getShipIds()) {
                    let shipImg = $("<img>");
                    shipImg.attr("src", chGetShipImagePath(shipMid));

                    groupContainer.append(shipImg);
                }

                group.append(groupTitle);
                group.append(groupContainer);

                groups.append(group);
            }

            groupsInfo.append(groups);

            $("#mapInfoMapInfo").append(groupsInfo);
        }

        if (map.hiddenRoutes) {
            for (const part in map.hiddenRoutes) {
                if (map.hiddenRoutes[part].unlockRules && map.hiddenRoutes[part].unlockRules.gimmicks.length)  {
                    for (const rule of map.hiddenRoutes[part].unlockRules.gimmicks) {
                        rule.updateKey(map.hiddenRoutes[part].unlockRules);
                    }
                    
                    $("#mapInfoMapInfo").append(this.DisplayDebuffInfos(map.hiddenRoutes[part].unlockRules, map, MAPDATA[this.GetCurrentWorld()]));
                }
            }
        }

        if (map.debuffRules && map.debuffRules.gimmicks && map.debuffRules.gimmicks.length) {
            for (const rule of map.debuffRules.gimmicks) {
                rule.updateKey(map.debuffRules);
            }

            $("#mapInfoMapInfo").append(this.DisplayDebuffInfos(map.debuffRules, map, MAPDATA[this.GetCurrentWorld()]));
        }

        if (Object.values(map.nodes).find(x => x.bonuses) || map.startBonus) {
            $("#mapInfoMapInfo").append(this.DisplayBonusInfos(map));
        }
    } 

    DisplayLockInfos(mapData, eventData) {
        const el = $("<div>").addClass("foldable-element");
        el.append($(`<div class="mapInfoTitle foldable-element-title">Locks</div>`));
        const lockInfoContent = $("<div>").addClass("mapInfoContent");
        el.append(lockInfoContent);

        const lockInfos = mapData.lockInfos;

        // Difficulties
        if (lockInfos.difficulties && lockInfos.difficulties.length) {
            lockInfoContent.append(`Locks applies to ${lockInfos.difficulties.map(x => this.GetDiffText(x)).join(", ")}`);
        }

        // Tag given

        // Per start
        if (lockInfos.tagGiven.startNode && Object.values(lockInfos.tagGiven.startNode).length) {

            const tagGivenPerStartEl = $("<div>");
            lockInfoContent.append(tagGivenPerStartEl);
            tagGivenPerStartEl.append(`Tag given per start node : `);
            const tagGivenPerStartElList = $(`<ul>`);
            tagGivenPerStartEl.append(tagGivenPerStartElList);

            for (const start in lockInfos.tagGiven.startNode) {
                const lock = lockInfos.tagGiven.startNode[start];

                tagGivenPerStartElList.append(`<li>${start} : <img src="${chGetLockPicture(lock)}" /> ${lock}</li>`);
            }

        }

        // Per fleet type
        if (lockInfos.tagGiven.fleetType && Object.values(lockInfos.tagGiven.fleetType).length) {

            const tagGivenPerStartEl = $("<div>");
            lockInfoContent.append(tagGivenPerStartEl);
            tagGivenPerStartEl.append(`Tag given per fleet type : `);
            const tagGivenPerStartElList = $(`<ul>`);
            tagGivenPerStartEl.append(tagGivenPerStartElList);

            for (const fleetType in lockInfos.tagGiven.fleetType) {
                const lock = lockInfos.tagGiven.fleetType[fleetType];

                tagGivenPerStartElList.append(`<li>${ChrDisplayEventInfo.GetFleetTypeAsString(parseInt(fleetType))} : <img src="${chGetLockPicture(lock)}" /> ${lock}</li>`);
            }

        }

        
        // Tag allowed

        // Per start
        if (lockInfos.isTagAllowed.startNode && Object.values(lockInfos.isTagAllowed.startNode).length) {

            const tagGivenPerStartEl = $("<div>");
            lockInfoContent.append(tagGivenPerStartEl);
            tagGivenPerStartEl.append(`Tag allowed per start node : `);
            const tagGivenPerStartElList = $(`<ul>`);
            tagGivenPerStartEl.append(tagGivenPerStartElList);

            for (const start in lockInfos.isTagAllowed.startNode) {
                const locks = lockInfos.isTagAllowed.startNode[start];

                tagGivenPerStartElList.append(`<li>${start} : ${locks.map(lock => "<img src=\""+chGetLockPicture(lock)+ "\"/>" ). join('')}</li>`);
            }

        }
        

        // Per fleet type
        if (lockInfos.isTagAllowed.fleetType && Object.values(lockInfos.isTagAllowed.fleetType).length) {

            const tagGivenPerStartEl = $("<div>");
            lockInfoContent.append(tagGivenPerStartEl);
            tagGivenPerStartEl.append(`Tag allowed per fleet type : `);
            const tagGivenPerStartElList = $(`<ul>`);
            tagGivenPerStartEl.append(tagGivenPerStartElList);

            for (const fleetType in lockInfos.isTagAllowed.fleetType) {
                const locks = lockInfos.isTagAllowed.fleetType[fleetType];

                tagGivenPerStartElList.append(`<li>${ChrDisplayEventInfo.GetFleetTypeAsString(parseInt(fleetType))}  : ${locks.map(lock => "<img src=\""+chGetLockPicture(lock)+ "\"/>" ). join('')}</li>`);
            }

        }


        return el;
    }

    /**
     * 
     * @param {ChGimmickList} rules 
     * @returns 
     */
    DisplayDebuffInfos(rules, map, event) {

        let diffs = event.allowDiffs ? event.allowDiffs : [4,1,2,3];
        if (rules.additionalParameters.difficultiesAllowed) diffs = rules.additionalParameters.difficultiesAllowed;
        
        let nodeList = [];

        let getUnlockTitle = (lowerCaseFirstLetter) => {
            if (!nodeList.length) return lowerCaseFirstLetter ? 'shortcut' : 'Shortcut';

            return `${(lowerCaseFirstLetter ? 'node' : 'Node')}${nodeList.length > 1 ? 's' : ''} ${nodeList.join(', ')}`;
        }

        /**
         * @type {{rule: ChRule, element: any}[]}
         */
        let ruleAndTdList = [];

        let checkStepsDone = () => {
            for (const value of ruleAndTdList) {                
                if (value.rule.check()) {
                    value.element.addClass('debuff-step-done');
                }
                else {
                    value.element.removeClass('debuff-step-done');
                }
            }
        }

        let debuffInfoRoot = $('<div>').addClass("foldable-element");
        
        if (rules.type == 'debuff') {
            debuffInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">Debuff</div>`));
        }
        
        if (rules.type == 'mapPart' || rules.type == 'route') {
            if (!rules.additionalParameters.partToUnlock) {
                debuffInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">Unlock a new path !</div>`));
            } else {
                for (const node in map.nodes) {
                    if (map.nodes[node].hidden && map.nodes[node].hidden == rules.additionalParameters.partToUnlock) nodeList.push(node);
                }
    
                debuffInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">Unlock ${rules.additionalParameters.partToUnlock} - ${getUnlockTitle(false)}</div>`));
            }
        }
        
        if (rules.type == 'custom') {
            debuffInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">${rules.additionalParameters.title}</div>`));
        }

        let debuffInfoContent = $("<div>").addClass("mapInfoContent");

        if (rules.type == 'debuff') {
            debuffInfoContent.append(`This map can be debuffed after completing `);
        }

        if (rules.type == 'mapPart' || rules.type == 'route') {

            debuffInfoContent.append(`You can unlock ${getUnlockTitle(true)} after completing `);
        }

        if (rules.type == 'custom') {
            debuffInfoContent.append(rules.additionalParameters.description);
        }

        if (rules.additionalParameters && rules.additionalParameters.numberOfStepRequired) {
            debuffInfoContent.append(`${rules.additionalParameters.numberOfStepRequired} of the following steps :`);
        } else if (rules.type != 'custom') {
            debuffInfoContent.append("the following steps :");
        }

        let debuffInfoTable = $('<table>').addClass('gimmick-table');

        let debuffInfoColumns = $('<tr>');
        debuffInfoColumns.append($(`<th>Difficulties</th>`));

        for (const diff of diffs) {
            debuffInfoColumns.append($(`<th>${this.GetDiffText(diff)}</th>`))
        }
        
        debuffInfoColumns.append($(`<th>Notes</th>`))

        debuffInfoTable.append(debuffInfoColumns);

        // --- Map part
        if (rules.mapPartNumber) {
            let debuffLine = $("<tr>");

            let descTd = $('<td>').attr('colspan', 6);

            descTd.append(`Reach part ${rules.mapPartNumber}`);
            debuffLine.append(descTd);

            if (rules.mapPartNumber <= CHDATA.event.maps[rules.mapNum].part) {
                descTd.addClass('debuff-step-done');
            }
            
            debuffInfoTable.append(debuffLine);
        }

        if (rules.additionalParameters.lastDanceOnly) {
            let debuffLine = $("<tr>");

            let descTd = $('<td>').attr('colspan', 6);

            descTd.append(`Reach last dance`);
            debuffLine.append(descTd);

            if (chrGetLastDance()) {
                if (rules.mapPartNumber) {
                    if (rules.mapPartNumber <= CHDATA.event.maps[rules.mapNum].part) {
                        descTd.addClass('debuff-step-done');
                    }
                } else {
                    descTd.addClass('debuff-step-done');
                }
            }
            
            debuffInfoTable.append(debuffLine);
        }

        if (rules.additionalParameters.routeUnlockRequired) {
            let debuffLine = $("<tr>");

            let descTd = $('<td>').attr('colspan', 6);

            descTd.append(`Unlock ${rules.additionalParameters.routeUnlockRequired} done`);
            debuffLine.append(descTd);

            if (ChGimmick.IsUnlockDone(rules.additionalParameters.routeUnlockRequired)) {
                descTd.addClass('debuff-step-done');
            }
            
            debuffInfoTable.append(debuffLine);
        }

        for (const rule of rules.gimmicks) {
            let debuffLine = $("<tr>");

            let nodeName = rule.node;

            // --- Case of mapnum defined in each rule (eg spring 16 with multi map debuff)
            if (!rules.mapNum) {
                nodeName = `E-${rule.mapnum} ${rule.node}`
            }

            debuffLine.append($(`<td>${nodeName}</td>`));

            let previousDesc = ""
            let descTd = $('<td>');
            let colSpan = 1;

            for (let diff of diffs) {

                let desc = rule.getDescription(diff);

                if (desc.length < 20 || desc != previousDesc) {
                    descTd = $('<td>');
                    descTd.append(desc);
                    debuffLine.append(descTd);

                    ruleAndTdList.push({
                        rule: rule,
                        element: descTd
                    });
                } else {
                    descTd.attr('colspan', ++colSpan);
                }
                
                previousDesc = desc;
            }

            let notes = [];

            if (rule.routeUnlockRequired) {
                notes.push(`You need to do unlock ${rule.routeUnlockRequired} before doing this requirement`);
            }

            if (rule.fleetType) {
                notes.push(`Fleet needs to be ${rule.fleetType.map(x => ChrDisplayEventInfo.GetFleetTypeAsString(x)).join(' or ')}`);
            }

            if (rule.needLBAS) {
                notes.push(`You need to send land based aerial support to this node`);
            }

            debuffLine.append($(`<td>${notes.join('<br>')}</td>`));
            
            debuffInfoTable.append(debuffLine);
        }

        debuffInfoContent.append(debuffInfoTable);
        debuffInfoRoot.append(debuffInfoContent);

        let reloadButton = $('<button>');
        reloadButton.addClass('button')
        reloadButton.append('Reload')
        reloadButton.click(() => {
            this.LoadCHDATA();
            checkStepsDone();
        });

        debuffInfoContent.append(reloadButton)
        debuffInfoContent.append('<br>')

        
        if (rules.type == 'debuff') { 
            debuffInfoContent.append('Debuff effects : ')

            let debuffEffects = $('<ul>').addClass('debuff-effects');

            // --- Debuff amount ?
            for (const node in map.nodes) {

                if (!map.nodes[node].debuffAmount) continue;

                let debuffAmount = map.nodes[node].debuffAmount;

                if (typeof debuffAmount === 'object') {                
                    for (const mid in debuffAmount) {
                        debuffEffects.append(`<li>On node ${node}, any ${SHIPDATA[mid].name} will receive an armor break of ${debuffAmount[mid]}</li>`);
                    }
                } else {
                    debuffEffects.append(`<li>On node ${node}, the flagship will receive an armor break of ${debuffAmount}</li>`);
                }
            }
                
            debuffInfoContent.append(debuffEffects);
        }

        checkStepsDone();

        return debuffInfoRoot;
    }

    /**
     * 
     * @param {ChBonuses} rules 
     * @returns 
     */
    DisplayBonusInfos(map) {

        let bonusInfoRoot = $('<div>').addClass("foldable-element");
        
        bonusInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">Bonuses</div>`));

        let bonusInfoContent = $("<div>").addClass("mapInfoContent");

        let bonusInfoTable = $('<table>').addClass('gimmick-table');

        let bonusInfoColumns = $('<tr>');
        bonusInfoColumns.append($(`<th>Groups</th>`));

        let bonusesPerNode = {};
        let bonusesGroupedByGroups = [];


        if (map.startBonus) {
            if (!bonusesPerNode['MapWide'])
                bonusInfoColumns.append($(`<th>MapWide</th>`));

            bonusesPerNode["MapWide"] = map.startBonus;
        }

        for (const node in map.nodes) {
            if (map.nodes[node].bonuses) {
                
                let nodeDisplayName = node; 

                if (!map.nodes[node].bonuses.find(x => !x.parameters.friendFleetOnly)) continue;

                if (!bonusesPerNode[nodeDisplayName])
                    bonusInfoColumns.append($(`<th>${nodeDisplayName}</th>`));

                bonusesPerNode[nodeDisplayName] = map.nodes[node].bonuses;

            }
        }

        bonusInfoTable.append(bonusInfoColumns);

        let compareArrays = (array1, array2) => {
            
            if (!array1 && !array2) return true;
            if (array1 && !array2) return false;
            if (!array1 && array2) return false;

            for (const key in array1) {
               if (!array2[key]) return false; 
               if (array1[key] != array2[key]) return false; 
            }

            return true;
        }

        let compareGroups = (bonus, group) => {
            if (group.type != bonus.bonusType) return false;
            if (group.reqCount != bonus.reqCount) return false;
            if (group.operator != bonus.operator) return false;
            if (!compareArrays(bonus.parameters.onlySpecificShips, group.specificShips)) return false;
            if (!compareArrays(bonus.parameters.excludeSpecificShips, group.excludeShips)) return false;
            if (!compareArrays(bonus.parameters.requiredFlagshipId, group.requiredFlagshipId)) return false;
            if (!compareArrays(bonus.parameters.requiredFlagshipType, group.requiredFlagshipType)) return false;
            if (group.bonuslessShipsOnly != bonus.parameters.bonuslessShipsOnly) return false;

            let ids = bonus.getIds();
                        
            if (group.ids.length != ids.length) return false;

            for (let index in group.ids) {
                if (group.ids[index] != ids[index]) return false;
            }

            return true;
        }

        for (const node in bonusesPerNode) {

            let bonuses = bonusesPerNode[node];
            
            for (const bonus of bonuses) {
                
                bonus.node = node;

                let groupExists = null;
                
                for (let group of bonusesGroupedByGroups)
                {
                    if (compareGroups(bonus, group)) {
                        groupExists = group;
                        break;
                    }
                }

                if (groupExists) {
                    groupExists.bonuses.push(bonus);
                }
                else {

                    bonusesGroupedByGroups.push({
                        type: bonus.bonusType,
                        ids: bonus.getIds(),
                        bonuses: [bonus],
                        reqCount: bonus.reqCount,
                        operator: bonus.operator,
                        specificShips: bonus.parameters.onlySpecificShips,
                        excludeShips: bonus.parameters.excludeSpecificShips,
                        requiredFlagshipId: bonus.parameters.requiredFlagshipId,
                        requiredFlagshipType: bonus.parameters.requiredFlagshipType,
                        bonuslessShipsOnly: bonus.parameters.bonuslessShipsOnly
                    });
                }
            }
        }

        bonusesGroupedByGroups = bonusesGroupedByGroups.sort((x, y) => {
            if (x.type == "ChEquipTypesBonuses") return 1;
            if (x.type == "ChEquipIdsBonuses") return 1;
            if (x.type == "ChCustomBonusEffects") return 1;
            if (x.type == "ChEquipTypesComboBonuses") return 1;

            return x.type > y.type ? 1 : -1;
        });

        for (let currentBonus of bonusesGroupedByGroups) {
            let bonusLine = $("<tr>");
            let bonusGroupColumn = null;

            if (currentBonus.type == 'ChShipIdsBonuses') {
                // --- defined classes
                if (currentBonus.bonuses[0].classIds && typeof(currentBonus.bonuses[0].classIds) == 'string' && currentBonus.bonuses[0].classIds.split('.')[0] == 'class') {
                    let shipClass = ChShipClassBonuses.ShipClasses[currentBonus.bonuses[0].classIds.split('.')[1]];
                    bonusGroupColumn = $(`<td class="bonus-group">${shipClass.name}</td>`);
                }
                else {
                    bonusGroupColumn = $(`<td class="bonus-group">${currentBonus.ids.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")}</td>`);
                }
            }
            else if (currentBonus.type == 'ChShipTypeBonuses') {
                bonusGroupColumn = $(`<td class="bonus-group">${currentBonus.ids.join(', ')}</td>`)
                
            } 
            else if (currentBonus.type == 'ChEquipTypesBonuses')
                bonusGroupColumn = $(`
                <td class="bonus-group">
                
                    <ul>
                        <li>${currentBonus.ids.map((x) => { return `${EQTDATA[x].dname ? EQTDATA[x].dname : EQTDATA[x].name }`; }).join("</li><li>")}
                        </li>
                    </ul>
                    <div class="operator-after-list">Number required ${currentBonus.reqCount ? ` ${currentBonus.operator} ${currentBonus.reqCount}` : ''}</div>
                    ${
                        currentBonus.specificShips && currentBonus.specificShips.length ? 
                        `<br><div>${currentBonus.specificShips.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")} only</div>` :
                        ''
                    }
                    ${
                        currentBonus.excludeShips && currentBonus.excludeShips.length ? 
                        `<br><div>${currentBonus.excludeShips.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")} not included</div>` :
                        ''
                    }
                </td>`);
            else if (currentBonus.type == 'ChEquipIdsBonuses')
                bonusGroupColumn = $(`
                <td class="bonus-group">
                    <ul>
                        <li>${currentBonus.ids.map((x) => { return `${EQDATA[x].name}`; }).join("</li><li>")}
                        </li>
                    </ul>
                    <div class="operator-after-list">Number required ${currentBonus.reqCount ? ` ${currentBonus.operator} ${currentBonus.reqCount}` : ''}</div>
                    ${
                        currentBonus.specificShips && currentBonus.specificShips.length ? 
                        `<br><div>${currentBonus.specificShips.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")} only</div>` :
                        ''
                    }
                    ${
                        currentBonus.excludeShips && currentBonus.excludeShips.length ? 
                        `<br><div>${currentBonus.excludeShips.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")} not included</div>` :
                        ''
                    }
                </td>`);
            else if (currentBonus.type == 'ChShipWithoutBonusesBonuses') {
                bonusGroupColumn = $(`
                    <td class="bonus-group">
                        Any ship without bonus
                    </td>`
                );
            }
            else if (currentBonus.type == 'ChDebuffBonuses') {
                
                let ships = currentBonus.ids == -1 ? 'Whole fleet' : currentBonus.ids.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("");
                
                bonusGroupColumn = $(`
                    <td class="bonus-group">
                        Bonus after completing the debuff : <br><br>
                        ${ships}
                        ${currentBonus.reqCount ? ` ${currentBonus.operator} ${currentBonus.reqCount}` : ''}
                    </td>`
                )
            } 
            else if (currentBonus.type == 'ChEquipTypesComboBonuses') {
                
                let typeNames = [];

                for (const bonus of currentBonus.bonuses) {
                    for (const combo of bonus.comboData) {
                        let types = [];
                        
                        if (combo.types) types.push(...combo.types.map(x => EQTDATA[x].dname ? EQTDATA[x].dname : EQTDATA[x].name));
                        if (combo.bTypes) types.push(...combo.bTypes.map(x => EQBTDATA[x].dname));
                        
                        typeNames.push(types.join(', ') + ' x'+combo.numberRequired);
                    }
                }

                // --- Remove duplicates
                typeNames = [...new Set(typeNames)];

                bonusGroupColumn = $(`
                    <td class="bonus-group">
                        Ship has all of the following :
                        <ul>
                            <li>${typeNames.join("</li><li>")}
                            </li>
                        </ul>
                    </td>`
                )
            }
            else if (currentBonus.type == 'ChWholeFleetBonuses') {
                bonusGroupColumn = $(`
                <td class="bonus-group">
                    Whole fleet
                </td>`)
            }
            else if (currentBonus.type == 'ChCustomBonusEffects') {
                
                let ships = currentBonus.ids == -1 ? 'Whole fleet' : currentBonus.ids.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("");
                
                bonusGroupColumn = $(`
                    <td class="bonus-group">
                        ${currentBonus.debuffOnly ? 'Effects after completing the debuff :<br><br>' : ''} 
                        ${ships}
                        ${currentBonus.reqCount ? ` ${currentBonus.operator} ${currentBonus.reqCount}` : ''}
                    </td>`
                )
            }
            else 
                bonusGroupColumn = $(`<td class="bonus-group"></td>`);

            if (bonusGroupColumn) {

                bonusLine.append(bonusGroupColumn);

                if (currentBonus.requiredFlagshipId && currentBonus.requiredFlagshipId.length) {
                    bonusGroupColumn.append(`<br>If flagship is ${
                        `<br><div>${currentBonus.requiredFlagshipId.map((x) => { return `<img src="${chGetShipImagePath(x)}" />`; }).join("")}</div>` 
                    }`);
                }

                if (currentBonus.requiredFlagshipType && currentBonus.requiredFlagshipType.length) {
                    bonusGroupColumn.append(`<br>If flagship is ${currentBonus.requiredFlagshipType.join(",")}`);
                }

                if (currentBonus.bonuslessShipsOnly) {
                    bonusGroupColumn.append(` (ships without bonus only)`);
                }
            }

            for (let node in bonusesPerNode) {

                let bonuses = currentBonus.bonuses.filter(x => x.node == node && !x.parameters.friendFleetOnly);

                if (!bonuses || !bonuses.length || !bonuses.find(x => x.amount != 1)) bonusLine.append($(`<td> / </td>`));
                else {
                    let bonusCell = $('<td>');
                    
                    let addBonus = (currentBonus) => {
                        let bonusCellPart = $('<div>');
                        bonusCellPart.addClass('bonus-cell');

                        if (currentBonus.parameters.on) {
                            let image = '';
                            let imageEl = $('<div>').addClass('bonus-cell-images');

                            for (const abyssalMid of currentBonus.parameters.on) {
                                if (SHIPDATA[abyssalMid].image == image) continue;

                                image = chGetShipImagePath(abyssalMid);

                                imageEl.append(`<img src="${image}" />`)
                            }

                            bonusCellPart.append(imageEl);
                        }
                        
                        if (currentBonus.parameters.type == "add") {
                            bonusCellPart.addClass("bonus-stacks");
                            bonusCellPart.attr('title', "Stacks with other bonuses");
                        }

                        if (currentBonus.bonusType == 'ChCustomBonusEffects') {
                            bonusCellPart.append(`<span>${currentBonus.description}</span>`);
                        } else {
                            let infos = [];

                            let amountPerLevelInfo = currentBonus.parameters.amountPerLevel ? `+ (x${currentBonus.parameters.amountPerLevel} per level)` : '';
                            if (currentBonus.parameters.part) infos.push(`After part ${currentBonus.parameters.part}`);
                            if (currentBonus.parameters.requireUnlock) infos.push(`After unlock ${currentBonus.parameters.requireUnlock}`);
                            if (currentBonus.parameters.diff) infos.push(`${currentBonus.parameters.diff.map(x => this.GetDiffText(x)).join(', ')} only`);

                            if (currentBonus.parameters.debuffOnly) bonusCellPart.append(`<span>After debuff : x${currentBonus.amount} ${infos.length ? `(${infos.join(', ')})` : ''}</span>`);
                            else if (currentBonus.amount != null) bonusCellPart.append(`<span>x${currentBonus.amount} ${amountPerLevelInfo}${infos.length ? `(${infos.join(', ')})` : ''}</span>`);
                        }

                        bonusCell.append(bonusCellPart);
                    }

                    for (const bonus of bonuses) {
                        addBonus(bonus);
                    }
                

                    bonusLine.append(bonusCell);
                }
            }

            bonusInfoTable.append(bonusLine);
        }

        bonusInfoContent.append(bonusInfoTable);
        bonusInfoRoot.append(bonusInfoContent);

        return bonusInfoRoot;
    }
    //#endregion
}

ChrDisplayEventInfo.MAP_COUNT = 7;

ChrDisplayEventInfo.GetFleetTypeAsString = (type) => {
                    
    switch (type) {
        case 0:
            return 'Single fleet';
        case 1:
            return 'Carrier Task Force';
        case 2:
            return 'Surface Task Force';
        case 3:
            return 'Transport Task Force';
        case 7:
            return 'Strike force';
    }
}

function chGetShipImagePath(id, damaged) {
	if (!id) return 'assets/icons/Kblank.png';
	if (!SHIPDATA[id]) return 'assets/icons/Kblank.png';

	const sData = SHIPDATA[id];
	if (sData.customImage) return sData.customImage;
	
	if (damaged && sData.imageDam) return sData.imageDam;
	return 'assets/icons/' + sData.image;
}

function chGetLockPicture(lockId) {
	if (WORLD == 97) {
		const locks = MAPDATA[97].locksData;

		if (!locks) return 'assets/maps/lock'+lockId+'.png';

		const lock = Object.values(locks).find(lockData => lockData.name == lockId);

		if (!lock || !lock.image) return 'assets/maps/lock'+lockId+'.png';
		return lock.image;
	} 	
	
	return 'assets/maps/lock'+lockId+'.png';
	
}