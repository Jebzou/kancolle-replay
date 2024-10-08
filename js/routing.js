function ChRule () {

    /**
     * @type {"=" | ">=" | "<=" | "<" | ">" | "!="}
     */
    this.operator = "=";

    /**
     * @type {"AND" | "OR"}
     */
    this.logicOperator = "OR";

    /**
     * @type {"shipType" | "random"| "fixed" | "shipCount" | "multiRules" | "random" | "speed" | "custom" | "ifthenelse" 
     * | "LOSCheckIfRuleChecked" | "allShipsMustBe" | 'isLastDance' | "equipType" | "los" | "default" | "shipIds" | 'fleetType' | 'routeSelect' 
     * | 'mapPart' | 'isRouteUnlocked' | 'shipRetreatedCount' | 'difficulty' | 'debuff' | 'speedCount' | 'fleetBeenThrough' | 'isQuestDone' }
     */
    this.type = "fixed";

    /**
     * @type {string[]}
     */
    this.shipTypes = [];

    /**
     * @type {number[]}
     */
    this.shipsIds = [];
    
    /**
     * this.shipsIds shouldn't be read directly, you have to use this accessor
     * @returns {number[]} The list of ship ids
     */
    this.getShipIds = () => {
        return this.shipsIds;
    };

    this.shipsIdsListName = "";

    /**
     * True if the rule should display the historical group in the event info page
     */
    this.historicalGroups = false;

    this.equipData = {
        equipIds: [],
        equipTypes: [],
        LOS: 0,
        haveAllEquips: false,
        /**
         * @type {boolean} Set to true to check if flagship has the equipment
         */
        flagship : false,
    };

    /**
     * @type {ChRule[]} 
     */
    this.rules = [];

    /**
     * Count of the rule
     * Can be an object with a value for each difficulty
     * @type {number | { 1: number, 2: number, 3: number, 4: number }} 
     */
    this.count = 0;

    this.getCountAsText = () => {
        return this.getSpecialCountAsText(this.count);
    };

    this.getSpecialCountAsText = (countObject) => {

        if (typeof(countObject) == 'number') return countObject;

        let countPerDiff = [];

        for (const diff of [4,1,2,3]) {
            if (countObject[diff] != undefined) {
                //countPerDiff.push(`${countObject[diff]} on ${ChRule.getDiffName(diff)}`);
                countPerDiff.push(countObject[diff]);
            }
        }

        return countPerDiff.join('/');
        //return countPerDiff.join(', ');
    };

    this.getCount = () => {
        return this.getSpecialCount(this.count);
    }

    this.getSpecialCount = (countObject) => {
        if (typeof(countObject) == 'number') return countObject;
        if (typeof(countObject) == 'string') return parseInt(countObject);

        let diff = getDiff(3);
        return countObject[diff];
    }

    this.shipWithEquipCount = 0;

    /**
     * if fixed routing, this is the node where you will route
     */
    this.fixedNode = "";

    /**
     * if condition validated, you'll go to this node
     */
    this.conditionCheckedNode = "";

    /**
     * if condition failed, you'll go to this node
     * if empty, routing will try to apply next rule
     */
    this.conditionFailedNode = "";

    /**
     * For random branching, array of chances per nodes
     */
    this.randomNodes = {};

    /**
     * Nodes that can be selected
     */
    this.routeSelect = [];

    this.LOS = {};
    this.LOSCoef = null;

    this.GetLOSArray = () => {
        let key = Object.keys(this.LOS)[0];

        if (typeof(this.LOS[key]) == 'string') {
            return this.LOS;
        } else {
            // --- Multiple diffs
            let diff = getDiff(3);

            return this.LOS[diff];
        }
    }

    this.GetLOSValuesForDisplay = () => {
        let key = Object.keys(this.LOS)[0];

        if (typeof(this.LOS[key]) == 'string') {
            return Object.keys(this.LOS).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
        }

        let LOSs = {};
        let values = [];

        for (const diff of [4,1,2,3]) {
            LOSs[diff] = Object.keys(this.LOS[diff]).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
        }

        for (const key in LOSs[4]) {
            values.push([LOSs[4][key], LOSs[1][key], LOSs[2][key], LOSs[3][key]].join('/'))
        }

        return values;
    }

    /**
     * Speed of fleet
     */
    this.speed = 10;

    this.fleetType = 0;

    this.escortOnly = false;
    this.mainFleetOnly = false;
    this.notOfType = false;
    this.not = false;

    /**
     * If not null, define on which parts of the map the rule is applied
     */
    this.mapParts = null;

    this.difficulties = [];

    /**
     * @type {{if: ChRule,then: ChRule,else: ChRule}} 
     */
    this.ifthenelse = {
        if: null,
        then: null,
        else: null,
    };

    /**
     * Returns the node where you'll route
     * @param {*} ships 
     * @returns 
     */
    this.getRouting = function (ships) {
        switch (this.type) {
            case "fixed":
                return this.fixedNode;
                
            case "default":
                return this.conditionCheckedNode;
        
            case "shipType": {
                let count = 0;

                let shipsToCheck = ships.c;

                if (this.escortOnly) {
                    if (!ships.escort) return this.conditionFailedNode;
                    shipsToCheck = ships.escort;
                }
                if (this.mainFleetOnly) shipsToCheck = ships;

                for (const shipType of this.shipTypes) {
                    count += shipsToCheck[shipType];
                }

                if (this.notOfType) {
                    count = shipsToCheck.total - count;
                }

                switch (this.operator) {
                    case "<":
                        if (count < this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (count <= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (count == this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (count > this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (count >= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (count != this.getCount()) return this.conditionCheckedNode;
                        break;
                }
                
                return this.conditionFailedNode;
            }

            case 'shipIds': {
                let count = 0;

                let shipsToCheck = ships.c.ids;

                if (this.escortOnly) {
                    if (!ships.escort) return this.conditionFailedNode;
                    shipsToCheck = ships.escort.ids;
                }
                if (this.mainFleetOnly) shipsToCheck = ships.ids;

                const shipsRequired = this.getShipIds();

                for (const shipId of shipsRequired) {
                    if (isShipInList(shipsToCheck, shipId)) count++;
                }

                switch (this.operator) {
                    case "<":
                        if (count < this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (count <= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (count == this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (count > this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (count >= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (count != this.getCount()) return this.conditionCheckedNode;
                        break;
                }
                
                return this.conditionFailedNode;
            }

            case 'shipCount' : {
                switch (this.operator) {
                    case "<":
                        if (ships.total < this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (ships.total <= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (ships.total == this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (ships.total > this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (ships.total >= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (ships.total != this.getCount()) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case 'multiRules' : {
                for (const rule of this.rules) {
                    let routingIsOk = !!rule.getRouting(ships);

                    if (!routingIsOk && this.logicOperator == "AND") return this.conditionFailedNode;
                    if (routingIsOk && this.logicOperator == "OR") return this.conditionCheckedNode;
                }

                if (this.logicOperator == "AND") return this.conditionCheckedNode;
                if (this.logicOperator == "OR") return this.conditionFailedNode;
            }

            case 'random' : {
                let nextletter = '';

                var r = Math.random(), sum = 0;

                for (var letter in this.randomNodes) {
                    sum += this.randomNodes[letter];
                    if (r < sum) { nextletter = letter; break; }
                }

                return nextletter;
            }

            case 'speed': {
                let speed = ships.c.speed;

                if (this.escortOnly) {
                    if (!ships.escort) return this.conditionFailedNode;
                    shipsToCheck = ships.escort.speed;
                }
                if (this.mainFleetOnly) speed = ships.speed;

                switch (this.operator) {
                    case "<":
                        if (speed < this.speed) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (speed <= this.speed) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (speed == this.speed) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (speed > this.speed) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (speed >= this.speed) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (speed != this.speed) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case 'speedCount': {
                let count = 0;

                // --- raw speed is speed of the ship without boilers
                let rawSpeed = true;

                if (rawSpeed) {
                    let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);

                    if (this.escortOnly) {
                        if (!FLEETS1[1]) return this.conditionFailedNode;
                        ships = FLEETS1[1].ships;
                    }

                    if (this.mainFleetOnly) ships = FLEETS1[1].ships;

                    for (let ship of ships) {
                        let checked = ChRule.CompareNumbers(SHIPDATA[ship.mid].SPD, this.speed, this.speedOperator, true, false);
                        
                        if (checked) count++;
                    }
                }
                else {
                    alert('Todo');
                    throw 'Todo';
                }

                return ChRule.CompareNumbers(count, this.getCount(), this.operator, this.conditionCheckedNode, this.conditionFailedNode);
            }

            case "ifthenelse":
            case "LOSCheckIfRuleChecked": 
            {
                if (this.ifthenelse.if.getRouting(ships)) {
                    return this.ifthenelse.then.getRouting(ships);
                }
                else {
                    if (!this.ifthenelse.else) return '';
                    return this.ifthenelse.else.getRouting(ships);
                }
            }

            case "allShipsMustBe": {
                let count = 0;

                for (const shipType of this.shipTypes) {
                    count += ships[shipType];
                }

                if (this.not) return count != ships.total ? this.conditionCheckedNode : this.conditionFailedNode;
                return count == ships.total ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            case "isLastDance": {
                return chGetLastDance() ? this.conditionCheckedNode : this.conditionFailedNode;
            }
            
            case 'equipType': {
                let numEquips = 0;
                let numShipsWithEquip = 0;

                let ships = (FLEETS1[1])? FLEETS1[0].ships.concat(FLEETS1[1].ships) : FLEETS1[0].ships;

                let equipTypes = this.equipData.equipTypes && this.equipData.equipTypes.length ? this.equipData.equipTypes : null;
                let equipIds = this.equipData.equipIds && this.equipData.equipIds.length ? this.equipData.equipIds : null;

                let flagship = true;

                for (let ship of ships) {

                    let found = false;
                    let equipsFound = [];

                    for (let eq of ship.equips) {
                        if (equipTypes && !equipTypes.includes(eq.type)) continue;
                        if (equipIds && !equipIds.includes(eq.mid)) continue;
                        if (this.equipData.LOS && (!eq.LOS || eq.LOS < this.equipData.LOS)) continue;
                        {
                            if (this.equipData.haveAllEquips) {
                                if (!equipsFound.includes(eq.mid)) equipsFound.push(eq.mid);
                            } else {
                                numEquips++;
                                found = true;
                            }
                        }
                    }

                    if (this.equipData.haveAllEquips && equipsFound.length == this.equipData.equipIds.length) {
                        numEquips++;
                        found = true;
                    }

                    // --- First loop = check flagship
                    if (this.equipData.flagship && flagship && !found) return this.conditionFailedNode;

                    flagship = false;

                    if (found) numShipsWithEquip++;
                }

                let numEquipsValidated = false;
                let shipWithEquipCountValidated = false;

                switch (this.operator) {
                    case "<":
                        numEquipsValidated = this.getCount() == null || numEquips < this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip < this.getSpecialCount(this.shipWithEquipCount);
                        break;
                    case "<=":
                        numEquipsValidated = this.getCount() == null || numEquips <= this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip <= this.getSpecialCount(this.shipWithEquipCount);
                        break;
                    case "=":
                        numEquipsValidated = this.getCount() == null || numEquips == this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip == this.getSpecialCount(this.shipWithEquipCount);
                        break;
                    case ">":
                        numEquipsValidated = this.getCount() == null || numEquips > this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip > this.getSpecialCount(this.shipWithEquipCount);
                        break;
                        
                    case "!=":
                        numEquipsValidated = this.getCount() == null || numEquips != this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip != this.getSpecialCount(this.shipWithEquipCount);
                        break;

                    default: 
                    case ">=":
                        numEquipsValidated = this.getCount() == null || numEquips >= this.getCount();
                        shipWithEquipCountValidated = this.shipWithEquipCount == null || numShipsWithEquip >= this.getSpecialCount(this.shipWithEquipCount);
                        break;
                }

                if (numEquipsValidated && shipWithEquipCountValidated) return this.conditionCheckedNode;
                return this.conditionFailedNode;
            }

            case 'los': {
                return checkELoS33(getELoS33(1, this.LOSCoef || 1, CHDATA.fleets.combined), this.GetLOSArray());
            }

            case 'fleetType': {

                if (typeof(this.fleetType) == "number") {
                    if (this.fleetType == 0) return (!CHDATA.fleets.combined && !CHDATA.fleets.sf) ? this.conditionCheckedNode : this.conditionFailedNode;
                    if (this.fleetType == 7) return CHDATA.fleets.sf ? this.conditionCheckedNode : this.conditionFailedNode;
                    
                    return CHDATA.fleets.combined == this.fleetType ? this.conditionCheckedNode : this.conditionFailedNode;
                }
                else {
                    for (const type of this.fleetType) {
                        if (type == 0 && !CHDATA.fleets.combined && !CHDATA.fleets.sf) return this.conditionCheckedNode;
                        else if (type == 7 && CHDATA.fleets.sf) return this.conditionCheckedNode;
                        else if (type != 0 && type == CHDATA.fleets.combined) return this.conditionCheckedNode;
                    }

                    return this.conditionFailedNode;
                }
            }

            case 'mapPart': {
                let currentPart = CHDATA.event.maps[MAPNUM].part;

                switch (this.operator) {
                    case "<":
                        if (currentPart < this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (currentPart <= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (currentPart == this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (currentPart > this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (currentPart >= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (currentPart != this.getCount()) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }
            
            case "isRouteUnlocked": {
                if (this.not) {
                    if (!CHDATA.event.maps[MAPNUM].routes) return this.conditionCheckedNode;
                    if (!CHDATA.event.maps[MAPNUM].routes.length) return this.conditionCheckedNode;
                    
                    return CHDATA.event.maps[MAPNUM].routes.indexOf(this.getCount()) == -1 ? this.conditionCheckedNode : this.conditionFailedNode;
                }

                if (!CHDATA.event.maps[MAPNUM].routes) return this.conditionFailedNode;
                if (!CHDATA.event.maps[MAPNUM].routes.length) return this.conditionFailedNode;
                
                return CHDATA.event.maps[MAPNUM].routes.indexOf(this.getCount()) != -1 ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            
            case "isQuestDone": {
                if (this.not) {
                    if (!CHDATA.quests) return this.conditionCheckedNode;
                    
                    return CHDATA.quests.getQuest(this.getCount()).objectives.check() ? this.conditionCheckedNode : this.conditionFailedNode;
                }

                if (!CHDATA.quests) return this.conditionFailedNode;
                
                return CHDATA.quests.getQuest(this.getCount()).objectives.check() ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            case 'shipRetreatedCount': {
                let count = 0

                for (let ship of getAllShips(false)) {
                    if (ship.retreated) count++;
                }

                switch (this.operator) {
                    case "<":
                        if (count < this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (count <= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (count == this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (count > this.getCount()) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (count >= this.getCount()) return this.conditionCheckedNode;
                        break;
                    case "!=":
                        if (count != this.getCount()) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case 'difficulty': {
                return this.difficulties.includes(getDiff(3)) ? this.conditionCheckedNode : this.conditionFailedNode;
            }
            
            case 'debuff': {
                if (this.not) return chrGetIsDebuffed() ? this.conditionFailedNode : this.conditionCheckedNode;
                return chrGetIsDebuffed() ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            case 'routeSelect': 
                return true;

            case 'fleetBeenThrough': {
                if (this.not) return !CHDATA.sortie.beenThrough[this.node] ? this.conditionCheckedNode: this.conditionFailedNode;
                return !!CHDATA.sortie.beenThrough[this.node] ? this.conditionCheckedNode: this.conditionFailedNode;
            }

            default:
                alert("routing error 2");
                return;
        }
    }

    /**
     * Translate rules into something understandable
     */
    this.getDescription = function () {
        switch (this.type) {
            case "fixed":
                return "Fixed routing";

            case "default":
                return "Does not meet the other requirements";

            case "shipType": {
                let shipTypesTranslated = [];

                for (const shipType of this.shipTypes) {
                    if (shipType == "aBB") shipTypesTranslated.push("(F)BB(V)");
                    else if (shipType == "aCV") shipTypesTranslated.push("CV(L/B)");
                    else shipTypesTranslated.push(shipType);
                }

                let shipList = shipTypesTranslated.join(" + ");

                let translatedOperator = this.operator;
                if (translatedOperator == '!=') translatedOperator = 'different than'

                if (this.notOfType) {

                    shipList = shipTypesTranslated.join(', ');

                    if (this.escortOnly) return `Number of ships that are not ${shipList} in escort fleet ${translatedOperator} ${this.getCountAsText()}`;
                    if (this.mainFleetOnly) return `Number of ships that are not ${shipList} in main fleet ${translatedOperator} ${this.getCountAsText()}`;

                    return `Number of ships that are not ${shipList} ${translatedOperator} ${this.getCountAsText()}`;
                }

                if (this.escortOnly) return `Number of ${shipList} in escort fleet ${translatedOperator} ${this.getCountAsText()}`;
                if (this.mainFleetOnly) return `Number of ${shipList} in main fleet ${translatedOperator} ${this.getCountAsText()}`;

                return `Number of ${shipList} ${translatedOperator} ${this.getCountAsText()}`;
            }

            case "shipIds": {
                let names;
                let shipsIds = this.getShipIds();

                if (!this.historicalGroups) {
                    names = '';

                    for (let index = 0; index < this.getShipIds().length; index++) {
                        let shipId = shipsIds[index];

                        if (shipsIds.length > 1 && index ==  shipsIds.length - 1) names += ' and ';
                        else if (index > 0) names += ', ';

                        names += SHIPDATA[shipId].name;
                    }
                }
                else {
                    names = this.shipsIdsListName;
                }
                
                let operator = '???';

                switch (this.operator) {
                    case "<":
                        operator = `Less than ${this.getCountAsText()} ship`;
                        break;
                    case "<=":
                        operator = `${this.getCountAsText()} or less ship`;
                        break;
                    case "=":
                        operator = `Exactly ${this.getCountAsText()} ship`;
                        break;
                    case ">":
                        operator = `More than ${this.getCountAsText()} ship`;
                        break;
                    case ">=":
                        operator = `${this.getCountAsText()} or more ship`;
                        break;
                        
                    case "!=":
                        operator = `number different than ${this.getCountAsText()} of ship`;
                        break;
                }

                if (shipsIds.length == 1) {
                    let not = (this.count == 0 && this.operator == '=') ? 'NOT ' : '';

                    if (this.escortOnly) return `${names} ${not}in the escort fleet`;
                    if (this.mainFleetOnly) return `${names} ${not}in the main fleet`;

                    return `${names} ${not}in the fleet`
                }

                if (this.escortOnly) return `${operator} from ${names} in the escort fleet`;
                if (this.mainFleetOnly) return `${operator} from ${names} in the main fleet`;

                return `${operator} from ${names} in the fleet`;
            }

            case 'shipCount' : {
                return `Number of ship in fleet ${this.operator} ${this.getCountAsText()}`;
            }

            case 'multiRules' : {
                let descriptions = [];
                let randomDesc = "";

                for (const rule of this.rules) {
                    if (rule.type == 'random') {
                        let rd = [];

                        for (var letter in rule.randomNodes) {
                            rd.push(`${letter} (${rule.randomNodes[letter] * 100}%)`);
                        }

                        randomDesc = `<div style="margin-left:20px;">else random ${rd.join(", ")}</div>`;
                    }
                    else descriptions.push(`<div style="margin-left:20px;">${rule.getDescription()}</div>`);
                }

                
                let AnyOrAll = "";
                if (this.logicOperator == "AND") AnyOrAll = "all";
                if (this.logicOperator == "OR") AnyOrAll = "any";
                
                return `Meet ${AnyOrAll} of the following requirements : <br>${descriptions.join(``)}${randomDesc}`;
            }

            case 'random' : {
                let description = [];

                for (const node in this.randomNodes) {
                    if (node) description.push(`${node} ${this.randomNodes[node] * 100}%`);
                }

                return "Random " + description.join(", ");
            }

            case 'speed' : {
                if (this.escortOnly) return `${ChRule.SpeedArray[this.speed][this.operator]} escort fleet`;
                if (this.mainFleetOnly) return `${ChRule.SpeedArray[this.speed][this.operator]} main fleet`;

                return `${ChRule.SpeedArray[this.speed][this.operator]} fleet`;
            }

            case 'speedCount' : {
                if (this.escortOnly) return `Number of ${ChRule.SpeedArray[this.speed][this.speedOperator]} ships in the escort fleet ${this.operator} ${this.count}`;
                if (this.mainFleetOnly) return `Number of ${ChRule.SpeedArray[this.speed][this.speedOperator]} ships in the main fleet ${this.operator} ${this.count}`;

                return `Number of ${ChRule.SpeedArray[this.speed][this.speedOperator]} ships in the fleet ${this.operator} ${this.count}`;
            }

            case "ifthenelse":
            case "LOSCheckIfRuleChecked": 
            {
                let desc = `If ${this.ifthenelse.if.getDescription()}<br>then ${this.ifthenelse.then.getDescription()}`;
                
                if (this.ifthenelse.else) desc += `<br>else ${this.ifthenelse.else.getDescription()}`;

                return desc;
            }

            case "allShipsMustBe": {
                if (this.not) return `Atleast one ship is not a ${this.shipTypes.join(" or ")}`;
                return `All ships must be ${this.shipTypes.join(" or ")}`;
            }

            case "isLastDance": {
                return 'Map is on last dance';
            }

            case 'equipType': {

                let operator = '???';

                switch (this.operator) {
                    case "<":
                        operator = `less than ${this.getCountAsText()}`
                        break;
                    case "<=":
                        operator = `${this.getCountAsText()} or less`
                        break;
                    case "=":
                        operator = `exactly ${this.getCountAsText()}`
                        break;
                    case ">":
                        operator = `more than ${this.getCountAsText()}`
                        break;
                        
                    case "!=":
                        operator = `number different than ${this.getCountAsText()}`;
                        break;

                    default: 
                    case ">=":
                        operator = `${this.getCountAsText()} or more`
                        break;
                }

                let equipmentsDescriptions = [];
                
                if (this.equipData.equipTypes) equipmentsDescriptions.push(...this.equipData.equipTypes.map((x) => EQTDATA[x].dname ? EQTDATA[x].dname : EQTDATA[x].name));
                if (this.equipData.equipIds) equipmentsDescriptions.push(...this.equipData.equipIds.map((x) => EQDATA[x].dname ? EQDATA[x].dname : EQDATA[x].name));

                let description = `Have ${operator} ${equipmentsDescriptions.join(" + ")} equipped`;
                if (this.equipData.haveAllEquips) description = `Have all of ${equipmentsDescriptions.join(", ")} equipped`;
                
                if (this.equipData.LOS) {
                    description += ` (${this.equipData.LOS} LOS each)`;
                }

                if (this.shipWithEquipCount) {
                    description += ` on ${this.getSpecialCountAsText(this.shipWithEquipCount)} different ships`;
                }

                if (this.equipData.flagship) {
                    description += ` (including the flagship)`;
                }

                return description;
            }

            case 'los': {
                let description = '<ul>';

                let losArray = this.GetLOSArray();
                
                var LOSs = Object.keys(losArray).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
                var LOSsPerDiff = this.GetLOSValuesForDisplay();
                
                for (var i=0; i<LOSs.length; i++) {
                    let node = losArray[LOSs[i]];

                    if (!node) continue;

                    let nodeAfter = LOSs[i + 1] ? losArray[LOSs[i + 1]] : null;

                    let currentDescription = `<li>${node} if LOS Cn${this.LOSCoef} >= ${LOSsPerDiff[i]}</li>`;

                    if (nodeAfter) {
                        currentDescription +=  `<li>Random if LOS Cn${this.LOSCoef} bewteen ${LOSsPerDiff[i + 1]} and ${LOSsPerDiff[i]}</li>`;
                    }
                    else {
                        currentDescription =  `<li>${node} if LOS Cn${this.LOSCoef} < ${LOSsPerDiff[i]}</li>`;
                    }

                    description +=  currentDescription;
                }

                return description + '</ul>';
            }

            case 'fleetType': {

                let getFleetType = (type) => {
                    
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

                if (typeof(this.fleetType) == "number") {
                    return getFleetType(this.fleetType);
                }
                else {
                    return this.fleetType.map(x => getFleetType(x)).join(' or ');
                }
            }

            case 'routeSelect': {
                return `Choose between ${this.routeSelect.join(" and ")}`;
            }

            case "mapPart": {
                switch (this.operator) {
                    case "<":
                        return `Part ${this.getCountAsText()} not reached`;
                    case "<=":
                        return `Part ${this.getCountAsText()} or before`;
                    case "=":
                        return `Be on part ${this.getCountAsText()}`;
                    case ">":
                        return `After part ${this.getCountAsText()} has been cleared`;
                    case ">=":
                        return `Part ${this.getCountAsText()} or after`;
                        
                    case "!=":
                        return `Don't be on part ${this.getCountAsText()}`;
                }
            }

            case "isRouteUnlocked": {
                if (this.not) return `Unlock ${this.getCountAsText()} is not done`;
                return `Unlock ${this.getCountAsText()} is done`;
            }

            case "isQuestDone": {
                if (this.not) return `Quest ${this.getCountAsText()} is not done`;
                return `Quest ${this.getCountAsText()} is done`;
            }

            case 'shipRetreatedCount' : {
                return `Number of ship retreated ${this.operator} ${this.getCountAsText()}`;
            }

            case 'difficulty': {
                return this.difficulties.map(w => ChRule.getDiffName(w)).join(', ') + ' difficulty';
            }
            
            case 'debuff': {
                if (this.not) return 'Debuff is not done';
                return "Debuff is done";
            }
            
            case 'fleetBeenThrough': {
                if (this.not) return `Fleet not been through node ${this.node}`;
                return `Fleet been through node ${this.node}`;
            }

            default:
                return "???";
        }
    }

    /**
     * Return the description of a random routing rule as an object
     */
    this.GetRandomDescription = function() {
        let description = {};

        for (const node in this.randomNodes) {
            if (node) description[node] = `Random (${this.randomNodes[node] * 100}%)`;
        }

        return description;
    }

    /**
     * Return the description of a LOS routing rule as an object
     */
     this.GetLOSDescription = function() {
        let description = {};

        let losArray = this.GetLOSArray();
        
        var LOSs = Object.keys(losArray).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
        var LOSsPerDiff = this.GetLOSValuesForDisplay();
        
        for (var i=0; i<LOSs.length; i++) {
            let node = losArray[LOSs[i]];

            if (!node) continue;

            let nodeAfter = LOSs[i + 1] ? losArray[LOSs[i + 1]] : null;

            description[node] =  `LOS Cn${this.LOSCoef} >= ${LOSsPerDiff[i]}`;

            if (nodeAfter) {
                description[node] +=  `<br>Random if LOS Cn${this.LOSCoef} bewteen ${LOSsPerDiff[i + 1]} and ${LOSsPerDiff[i]}`;
            }
            else {
                description[node] =  `LOS Cn${this.LOSCoef} < ${LOSsPerDiff[i]}`;
            }
        }

        return description;
    }

    /**
     * Returns if the compass should be spinned or not
     * @returns true if compass need to be spined
     */
    this.getSpinCompass = function () {
        switch (this.type) {
            case "fixed":
                return false;
        
            default:
                return true;
        }
    }

    /**
     * Returns the rule that got validated
     * Useful for the ifthenelse rule cause it's the then or the else tha contains the information about compass or los plane value
     */
    this.getValidatedRule = function (ships) {
        if (this.type == "ifthenelse" || this.type == "LOSCheckIfRuleChecked" ) 
        {
            if (this.ifthenelse.if.getRouting(ships)) {
                return this.ifthenelse.then;
            }
            else {
                if (!this.ifthenelse.else) return this;
                return this.ifthenelse.else;
            }
        }

        return this;
    }

    /**
     * Returns if LOS plane should be shown or not
     * @returns true if LOS plane need to be shown
     */
    this.getShowLosPlane = () => {
        switch (this.type) {
            case "los":
                return true;

            default:
                return false;
        }
    } 

    this.ruleCanBeChecked = function () {
        if (!this.mapParts || !this.mapParts.length) return true;

        return this.mapParts.includes(CHDATA.event.maps[MAPNUM].part);
    }
}

/**
 * Create a fixed routing rule
 * @param {string} fixedNode 
 * @returns 
 */
function ChFixedRoutingRule(fixedNode) {
    let rule = new ChRule();

    rule.fixedNode = fixedNode;
    rule.type = "fixed";

    return rule;
}

/**
 * Rule that check if ships are in fleet
 * @param {number[] | 'map.property' | 'event.property'} shipsIds 
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipHistoricalRoutingRule(groupName, shipsIds, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipIdsRoutingRule(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.shipsIdsListName = groupName;
    rule.historicalGroups = true;

    return rule;
}

/**
 * Rule that check if ships are in fleet
 * @param {{groupName: string, shipsIds: number[] | 'map.property' | 'event.property'}[]} groups
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipMultipleHistoricalGroupRoutingRule(groups, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipIdsRoutingRule(groups.map(x => 
            ChShipHistoricalRoutingRule(x.groupName, x.shipsIds, operator, count, conditionCheckedNode, conditionFailedNode)
        ), operator, count, conditionCheckedNode, conditionFailedNode);

    rule.shipsIdsListName = groups.map(x => x.groupName).join(' + ');
    rule.historicalGroups = true;

    return rule;
}

/**
 * 
 * @param {number[] | 'map.property' | 'event.property'} shipsIds 
 * @param {*} count 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns {ChRule}
 */
function ChShipIdsRoutingRule(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipIds";

    rule.shipsIds = shipsIds;

    if (typeof(shipsIds) == 'string') {

        // --- [0] = type
        // --- [1] = the property of the object having the id list
        let accessToShipIds = shipsIds.split('.');

        let type = accessToShipIds.shift();
        let ships = null;

        if (type == 'map') {
            rule.getShipIds = () => {

                if (ships) return ships; 
                
                ships = MAPDATA[WORLD].maps[MAPNUM];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                return ships;
            }
        }

        if (type == 'event') {
            rule.getShipIds = () => {

                if (ships) return ships;

                ships = MAPDATA[WORLD];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                return ships;
            }
        }
    } else if (Array.isArray(shipsIds) && typeof(shipsIds[0]) != 'number') {
        rule.getShipIds = () => {
            let shipsToReturn = [];

            for (const rule of shipsIds) {
                shipsToReturn = shipsToReturn.concat(rule.getShipIds());
            }

            return shipsToReturn;
        }
    }

    rule.count = count;
    rule.operator = operator;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Create a ship type routing rule
 * @param {string[]} shipTypes 
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipType";
    rule.shipTypes = shipTypes;
    rule.operator = operator;
    rule.count = count;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Count the ships that are not of the ship types provided
 * @param {string[]} shipTypes 
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipNotOfTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipType";
    rule.shipTypes = shipTypes;
    rule.operator = operator;
    rule.count = count;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.notOfType = true;

    return rule;
}

/**
 * Create a ship count routing rule
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipCountRoutingRule(operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipCount";
    rule.operator = operator;
    rule.count = count;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {ChRule[]} ruleArray 
 * @param {"AND" | "OR"} logicOperator
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChMultipleRulesRule(ruleArray, logicOperator, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "multiRules";

    rule.logicOperator = logicOperator;
    rule.rules = ruleArray;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {any} chances 
 */
 function ChRandomRule(chances) {
    let rule = new ChRule();

    rule.type = "random";

    rule.randomNodes = chances;

    return rule;
}

/**
 * 
 * @param {*} operator 
 * @param {*} speed 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChSpeedRule(operator, speed, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "speed";

    rule.speed = speed;
    rule.operator = operator;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * if rule A is valid then apply rule B else apply rule C
 * @param {ChRule} ruleIf 
 * @param {ChRule} ruleThen 
 * @param {ChRule} ruleElse 
 * @returns 
 */
function ChIfThenElseRule(ruleIf, ruleThen, ruleElse) {
    let rule = new ChRule();

    rule.type = "ifthenelse";

    if (!ruleIf.conditionCheckedNode) ruleIf.conditionCheckedNode = true;
    ruleIf.conditionFailedNode = false;

    rule.ifthenelse = {
        if: ruleIf,
        then: ruleThen,
        else: ruleElse,
    };

    return rule;
}

/**
 * All ships of the fleet must be of the types in shipTypes
 * @param {*} shipTypes 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChAllShipMusteBeOfTypeRule(shipTypes, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "allShipsMustBe";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.shipTypes = shipTypes;

    return rule;
}

/**
 * All ships of the fleet must be of the types in shipTypes
 * @param {*} shipTypes 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
 function ChOneShipNotOfTypeRule(shipTypes, conditionCheckedNode, conditionFailedNode) {
    let rule = ChAllShipMusteBeOfTypeRule(shipTypes, conditionCheckedNode, conditionFailedNode);

    rule.not = true;

    return rule;
}

/**
 * Condition checked if its last dance
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
 function ChIsLastDanceRule(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "isLastDance";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Rule valid if [shipWithEquipCount] ships have the required equipments and there's a total of [count] equipment in the fleet
 * @param {{equipIds: [],equipTypes: [],LOS: number, haveAllEquips: boolean}} equipData 
 * @param {*} count 
 * @param {*} shipWithEquipCount 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChEquipTypeRule(equipData, operator, count, shipWithEquipCount, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "equipType";

    for (const eqKey in equipData.equipIds) {
        equipData.equipIds[eqKey] = +equipData.equipIds[eqKey];
    }
    
    for (const eqKey in equipData.equipTypes) {
        equipData.equipTypes[eqKey] = +equipData.equipTypes[eqKey];
    }

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.count = count;
    rule.operator = operator;
    rule.shipWithEquipCount = shipWithEquipCount;

    rule.equipData = equipData;

    return rule;
}

/**
 * 
 * @param {*} losArray 
 * @param {*} coef 
 * @returns 
 */
 function ChLOSRule(losArray, coef) {
    let rule = new ChRule();

    rule.type = "los";

    let key = Object.keys(losArray)[0];
    
    if (typeof(losArray[key]) == 'string') {
        rule.conditionCheckedNode = losArray[Math.max(...Object.keys(losArray))];
    } else {
        rule.conditionCheckedNode = losArray[key][Math.max(...Object.keys(losArray[key]))];
    }

    if (typeof(losArray[key]) == 'string') {
        rule.conditionFailedNode = losArray[Math.min(...Object.keys(losArray))];
    } else {
        rule.conditionFailedNode = losArray[key][Math.min(...Object.keys(losArray[key]))];
    }

    rule.LOS = losArray;
    rule.LOSCoef = coef ? coef : 1;

    return rule;
}

/**
 * Need to be tested
 * @param {*} losArray 
 * @param {*} coef 
 * @param {ChRule} ruleToCheck 
 * @returns 
 */
 function ChLOSCheckIfRuleChecked(losArray, coef, ruleToCheck) {

    let conditionCheckedNode = ruleToCheck.conditionCheckedNode;

     /**
      * @type {ChRule}
      */
    let rule = new ChIfThenElseRule(ruleToCheck, ChLOSRule(losArray, coef));
    
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = rule.ifthenelse.then.conditionFailedNode;

    rule.type = "LOSCheckIfRuleChecked";

    let key = Object.keys(losArray)[0];

    rule.getDescription = () => {
        let LOSdescription;

        if (typeof(losArray[key]) == 'string') {
            let successIndex = Math.max(...Object.keys(losArray));
            let failNode = losArray[Math.min(...Object.keys(losArray))];

            LOSdescription = ` (Also require LOS Cn${coef} >= ${successIndex}${losArray[failNode] ? `, else ${losArray[failNode]}` : ''})`;
        } else {
            let values = [4,1,2,3].map(x => Math.max(...Object.keys(losArray[x])));
            let failNode = losArray[key][Math.min(...Object.keys(losArray[key]))];

            LOSdescription = ` (Also require LOS Cn${coef} >= ${values.join('/')}${failNode ? `, else ${failNode}` : ''})`;
        }

        return ruleToCheck.getDescription() + LOSdescription;
    }

    rule.LOS = losArray;
    rule.LOSCoef = coef ? coef : 1;

    return rule;
}


/**
 * Returns the rule and making it so that LOS plane wont show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
function ChDontShowLOSPlane(rule) {
    rule.getShowLosPlane = () => { return false; }

    return rule;
}

/**
 * Returns the rule and making it so that LOS plane show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
 function ChShowLOSPlane(rule) {
    rule.getShowLosPlane = () => { return true; }

    return rule;
}

function ChDefaultRouteRule(node) {
    let rule = new ChRule();

    rule.type = "default";

    rule.conditionCheckedNode = node;

    return rule;
}

/**
 * Returns the rule and making it so that compass show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
function ChShowCompass(rule) {
    rule.getSpinCompass = () => { return true; }

    return rule;
}

/**
 * Returns the rule and making it so that compass doesn't show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
 function ChDontShowCompass(rule) {
    rule.getSpinCompass = () => { return false; }
    rule.noCompass = true;

    return rule;
}

function ChFleetTypeRule(fleetType, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "fleetType";

    rule.fleetType = fleetType;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChSelectRouteRule(routeSelection) {
    let rule = new ChRule();

    rule.type = "routeSelect";

    rule.routeSelect = routeSelection;

    return rule;
}

/**
 * Do not use, see ChMapPartRule instead
 * @param {*} operator 
 * @param {*} part 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChMapPartRuleOld(operator, part, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "mapPart";

    rule.count = part;
    rule.operator = operator;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChIsRouteUnlockedRule(routeNumber, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "isRouteUnlocked";

    rule.count = routeNumber;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChIsRouteNotUnlockedRule(routeNumber, conditionCheckedNode, conditionFailedNode) {
    let rule = ChIsRouteUnlockedRule(routeNumber, conditionCheckedNode, conditionFailedNode);

    rule.not = true;

    return rule;
}

function ChIsQuestDoneRule(questId, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "isQuestDone";

    rule.count = questId;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChShipRetreatedCountRule(operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipRetreatedCount";

    rule.operator = operator;
    rule.count = count;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {number[]} difficulties 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChDifficultyRule(difficulties, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "difficulty";

    rule.difficulties = difficulties;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {ChRule} rule 
 * @param {number[]} mapPartNumbers 
 */
function ChMapPartRule(mapPartNumbers, rule) {
    rule.mapParts = mapPartNumbers;

    return rule;
}

function ChDebuffIsNotDoneRule(conditionCheckedNode, conditionFailedNode) {
    let rule = ChDebuffIsDoneRule(conditionCheckedNode, conditionFailedNode);

    rule.not = true;

    return rule;
}

function ChDebuffIsDoneRule(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "debuff";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChNumberOfShipOfSpeedRule(speedOperator, speed, countOperator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "speedCount";

    rule.speed = speed;
    rule.speedOperator = speedOperator;

    rule.count = count;
    rule.operator = countOperator

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChFleetBeenThroughRule(node, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "fleetBeenThrough";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.node = node;

    return rule;
}

function ChFleetNotBeenThroughRule(node, conditionCheckedNode, conditionFailedNode) {
    let rule = ChFleetBeenThroughRule(node, conditionCheckedNode, conditionFailedNode);

    rule.not = true;

    return rule;
}

/**
 * Compare two number and return isTrue if true or isFalse if false
 * @param {*} number1 
 * @param {*} number2 
 * @param {*} operator 
 * @param {*} ifTrue 
 * @param {*} ifFalse 
 * @returns 
 */
ChRule.CompareNumbers = (number1, number2, operator, ifTrue, ifFalse) => {
    switch (operator) {
        case "<":
            if (number1 < number2) return ifTrue;
            break;
        case "<=":
            if (number1 <= number2) return ifTrue;
            break;
        case "=":
            if (number1 == number2) return ifTrue;
            break;
        case ">":
            if (number1 > number2) return ifTrue;
            break;
        case ">=":
            if (number1 >= number2) return ifTrue;
            break;
        case "!=":
            if (number1 != number2) return ifTrue;
            break;
    }

    return ifFalse;
}

ChRule.getDiffName = (diff) => {
    let diffName = {
        4: 'Casual',
        1: 'Easy',
        2: 'Medium',
        3: 'Hard',
    }

    return diffName[diff];
}

ChRule.SpeedArray = {
    5: {
        "<": "Slow",
        "<=": "Slow",
        "=": "Slow",
        ">": "Fast",
        ">=": "Slow or faster",
    },
    10: {
        "<": "Slow",
        "<=": "Fast or slower",
        "=": "Fast",
        ">": "Fast+",
        ">=": "Fast or faster",
    },
    15: {
        "<": "Fast or slower",
        "<=": "Fast+ or slower",
        "=": "Fast+",
        ">": "Fastest",
        ">=": "Fast+ or faster",
    },
    20: {
        "<": "Fast+ or slower",
        "<=": "Fastest or slower",
        "=": "Fastest",
        ">": "Fastest",
        ">=": "Fastest",
    },
};

/**
 * If one rule isn't valid, returns false
 * @param {ChRule[]} rules
 */
ChRule.CheckIfAllRulesAreChecked = (rules, ships) => {
    for (const rule of rules) {
        if (!rule.getRouting(ships)) return false;
    }

    return true;
}