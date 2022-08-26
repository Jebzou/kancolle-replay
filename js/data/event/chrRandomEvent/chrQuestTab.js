function chrUpdateQuestTab() {
    let wrap = $('<div>').addClass('ftwrap').width(1000);
    $('#questSpace').html(wrap);

    const questsPerMap = {};

    for (const quest of CHDATA.quests.quests) {
        if (!questsPerMap[quest.objectives.mapNum]) questsPerMap[quest.objectives.mapNum] = [];
        questsPerMap[quest.objectives.mapNum].push(chrMakeQuestDescription(quest));
    }

    for (const map in questsPerMap) {
        const elMap = $("<div>").addClass("quest-map");
        elMap.append(`<div class="quest-map-title">E-${map}</div>`);

        wrap.append(elMap);

        for (const quest of questsPerMap[map]) {
            elMap.append(quest);
        }
    }
}

/**
 * @param {QuestData} questData Data of the quest
 */
function chrMakeQuestDescription(questData) {
    const element = $("<div>");
    element.addClass("quest-element");

    element.append(`<div class="quest-element-title">${questData.name}</div>`);
    element.append(`<div class="quest-element-description">${questData.description}</div>`);
    element.append(`<div class="quest-element-progress">${questData.getProgressText()}</div>`);

    return element;
}

function chrInitQuests() {
    CHDATA.quests = new QuestManager();

    if (MAPDATA[WORLD].quests) CHDATA.quests.loadQuests(MAPDATA[WORLD].quests);

    CHDATA.quests.onReload();
}