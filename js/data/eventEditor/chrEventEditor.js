Vue.createApp({

  data: () => ({
    eventData: new ChEventData(),

    selectedMap: {},
    selectedMapNumber: 0,

    selectedEventToLoad: null,

    isMapSelected: false,
    isAssetSelected: false,
    isEventSelected: false,

    /**
     * Custom file = create your own event, import and export it
     * Played event = load and edit the current played event in event.html
     */
    fileMode: localStorage.getItem("editorMode") ? localStorage.getItem("editorMode") : 'customFile',

    chData: null,
    chFile: null,
  }),

  computed: {

  },

  mounted() {
    this.loadEvent();
    
    const _saveEvent = this.saveEvent;

    window.onbeforeunload = () => {
      _saveEvent();
    };
  },
  
  methods: {

    fileModeChanged(newFileMode) {
      this.saveEvent();
      this.fileMode = newFileMode;
      this.loadEvent();
    },

    beforeSave() {
      for (const map of Object.values(this.eventData.maps)) {
        map.bossnode = [];
        
        for (const node of Object.values(map.nodes)) {
          node.boss = false;
          if (node.hidden) node.hidden = parseInt(node.hidden);
        }

        for (const part of Object.values(map.parts)) {
          if (part.currentBoss) {
            map.nodes[part.currentBoss].boss = true;
            map.bossnode.push(part.currentBoss);
          }

        }
      }
    },

    saveEvent() {
      this.beforeSave();

      if (this.fileMode == "customFile") localStorage.setItem("event_editor_current_event", JSON.stringify(this.eventData));

      if (this.fileMode == "playedEvent") {
        if (!this.chData.event) return;
        
        var basic = {};
        basic.event = this.chData.event;
        basic.config = this.chData.config;
        basic.player = this.chData.player;

        if (this.chData.customEventData) {
          basic.customEventData = this.chData.customEventData;

          // --- Override normal load
          localStorage.setItem('customEventDataToLoad', JSON.stringify(this.chData.customEventData));
        }

        basic.maps = this.chData.maps;

        localStorage.setItem('ch_basic'+this.chFile,JSON.stringify(basic));
      }

      localStorage.setItem("event_editor_selected_map", this.selectedMapNumber);
      localStorage.setItem("editorMode", this.fileMode);
    },


    exportEventData() {
      this.beforeSave();

      const dataToExportBeforeConversion = {
          eventData: this.eventData
      };
      
      const dataToExport = JSON.stringify(MAPDATA[97].ConvertMapEditorFormatToSimulatorFormat(dataToExportBeforeConversion));

      let a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(new Blob([dataToExport], {type: 'application/json'}));
      a.download = this.eventData.name.replace(/[^a-zA-Z0-9-]/g, '_') + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  },

    loadEvent() {
      if (this.fileMode == "customFile" && localStorage.getItem("event_editor_current_event")) this.eventData = JSON.parse(localStorage.getItem("event_editor_current_event"));
      
      if (this.fileMode == "playedEvent") {
        this.chFile = localStorage.ch_file;

        if (this.chFile) {
          var basic = JSON.parse(localStorage['ch_basic'+this.chFile]);
          let ch_data = localStorage['ch_data'+this.chFile];
          if (ch_data[0] != '{') ch_data = LZString.decompressFromBase64(ch_data);
          this.chData = JSON.parse(ch_data);
          for (var key in basic) this.chData[key] = basic[key];

          if (this.chData.customEventData) this.eventData = this.chData.customEventData.eventData;
          if (!this.eventData.comps) this.eventData.comps = {};
          if (!this.eventData.assets) this.eventData.assets = {};
        }
      }

      if (localStorage.getItem("event_editor_selected_map")) this.selectedMapNumber = parseInt(localStorage.getItem("event_editor_selected_map"));

      // --- Load rules (to access its methods)
      for (const mapNum in this.eventData.maps) {

        for (const nodeKey in this.eventData.maps[mapNum].nodes) {
          const nodeData = this.eventData.maps[mapNum].nodes[nodeKey];
          if (!nodeData.endRules) nodeData.endRules = [];
          if (!nodeData.rules) nodeData.rules = [];
        }

        try {
          MAPDATA[97].initializeMap(this.eventData.maps[mapNum]);
        } catch (error) {
          console.error(error);
        }
        
        if (this.eventData.maps[mapNum].rewardPerDiff && this.eventData.maps[mapNum].rewardPerDiff) {

          for (const diff of [1,2,3,4]) {
            
              for (const slot of this.eventData.maps[mapNum].rewardPerDiff[diff].items) {
                const slotId = slot.id;
      
                if (slotId && !EQDATA[slotId] && EQDATA[slotId + 1000]) {
                  slot.id = slotId + 1000;
                }
              }
          }
        }

      }
      
      // --- Load assets
      if (this.eventData.assets && this.eventData.assets.equipments) {
        for (const equipment of this.eventData.assets.equipments) {
          COMMON.addCustomEquipment(equipment);
        }
      }

      if (this.eventData.assets && this.eventData.assets.ships) {
        for (const ship of this.eventData.assets.ships) {
          COMMON.addCustomShip(ship);
        }
      }

      window.debugEvent = this.eventData;
    },

    addMap() {

        const lastMap = Object.keys(this.eventData.maps).length + 1;

        const newMap = new ChMapData();
        newMap.name = `E${lastMap}`;

        this.eventData.maps[lastMap] = newMap; 
        
    },

    elementChanged(mapNumber) {

      this.selectedMapNumber = mapNumber;
    },
        
    changeSelectedMap(elementData, eventSettingClicked, assetsClicked) {
        
        this.isAssetSelected = !!assetsClicked;
        this.isEventSelected = !!eventSettingClicked;
        this.isMapSelected = !eventSettingClicked && !assetsClicked;

        if (!eventSettingClicked) this.selectedMap = elementData;
    },

    onMapDeleted() {
      this.selectedMapNumber = 0;

      this.recomputeMapsNumbers();
    },

    recomputeMapsNumbers() {
      // --- recompute map numbers
      const maps = {};

      let count = 0;

      for (const mapKey in this.eventData.maps) {
        ++count;

        maps[count] = this.eventData.maps[mapKey];
        maps[count].name = `E${count}`;
      }

      this.eventData.maps = maps;
    }
  },

  watch: {
    selectedMapNumber() {
      if (this.selectedMapNumber == 0) this.changeSelectedMap(null, true);
      else if (this.selectedMapNumber == -1) this.changeSelectedMap(null, false, true);
      else this.changeSelectedMap(this.eventData.maps[this.selectedMapNumber], false);
    }
  }
})
.component('vmodal', ModalComponent)
.component('vshipselector', ShipSelectorComponent)
.component('vequipselector', EquipSelectorComponent)
.component('vequipeditor', EquipEditorComponent)
.component('vshipeditor', ShipEditorComponent)
.component('vfleeteditor', FleetEditorComponent)
.component('vmapnodeplacer', MapNodePlacerComponent)
.component('MultiCheckboxesEditor', MultiCheckboxesEditorComponent)
.component('MapSelection', MapSelectionComponent)
.component('MapEditor', MapEditorComponent)
.component('EventEditor', EventEditorComponent)
.component('vcomboboxeditor', ComboBoxEditorComponent)
.component('vnodelist', NodeListComponent)
.component('vnode', NodeComponent)
.component('vroutinglist', RoutingListComponent)
.component('vrouting', RoutingComponent)
.component('velementlist', ElementListEditorComponent)
.component('vchanceseditor', ChancesEditorComponent)
.component('vloseditor', LOSEditorComponent)
.component('vequipdataruleeditor', EquipmentDataRuleEditorComponent)
.component('vequiplisteditor', EquipmentListEditorComponent)
.component('vcountruleeditor', CountRuleEditorComponent)
.component('vshipidslisteditor', ShipIdsListEditorComponent)
.component('vshipdatalisteditor', ShipDataListEditorComponent)
.component('vhiddenrouteeditor', HiddenRoutesEditorComponent)
.component('vmaplockeditor', MapLockEditorComponent)
.component('vhistoricalgroups', HistoricalGroupsComponent)

// --- UI
.component('uigroup', GroupComponent)

// --- Gimmicks
.component('vgimmicklist', GimmickListComponent)
.component('vgimmickeditor', GimmickEditorComponent)
.component('vdebuffeditor', DebuffEditorComponent)

// --- Enemy comps
.component('vnodeenemycompeditor', NodeEnemyCompEditorComponent)
.component('vnodeenemycompobjectseditor', NodeEnemyCompObjectsEditorComponent)

.component('venemycomplist', EnemyCompListEditorComponent)
.component('venemycomplistperdiff', EnemyCompListPerDiffEditorComponent)

// --- Bonuses
.component('vbonuslist', BonusListComponent)
.component('vbonuseditor', BonusEditorComponent)

// --- Custom assets
.component('vassetseditor', AssetsEditorComponent)
.component('vcustomequipmenteditor', CustomEquipmentComponent)
.component('vcustomequipmentlist', CustomEquipmentListComponent)
.component('vcustomshipeditor', CustomShipComponent)
.component('vcustomshiplist', CustomShipListComponent)

// --- Quests
.component('vquestlist', QuestListComponent)
.component('vquestdetail', QuestDetailComponent)

.use(COMMON.i18n)
.mount('#eventEditor');