function makeTable(root, name, num, islbas) {
	if (!num) num = 6;
	var table = $('<table id="T' + name + '" class="infotable"></table>');
	var tr = $('<tr></tr>');

	for (var i = 0; i < num; i++)
		tr.append($('<td colspan="4" id="name' + name + i + '"></td>'));
	table.append(tr);
	tr = $('<tr></tr>');

	for (var i = 0; i < num; i++)
		tr.append($('<td colspan="4" style="text-align:center"><img id="img' + name + i + '"/></td>'));
	table.append(tr);
	tr = $('<tr></tr>');

	if (!islbas) {
		for (var i = 0; i < num; i++)
			tr.append($('<td colspan="2"><img src="assets/stats/lv.png"/> <span id="lvl' + name + i + '"></span></td><td colspan="2"><img src="assets/stats/hp.png"/> <span id="hp' + name + i + '"></span></td>'));
		table.append(tr);
		tr = $('<tr></tr>');

		for (var i = 0; i < num; i++)
			tr.append($('<td><img src="assets/stats/fp.png"/> <span id="fp' + name + i + '"></span></td><td><img src="assets/stats/tp.png"/> <span id="tp' + name + i + '"></span></td><td><img src="assets/stats/aa.png"/> <span id="aa' + name + i + '"></span></td><td><img src="assets/stats/ar.png"/> <span id="ar' + name + i + '"></span></td>'));
		table.append(tr);
	}

	var numeq = (islbas)? 4 : 5;
	for (var j = 0; j < numeq; j++) {
		tr = $('<tr></tr>');
		for (var i = 0; i < num; i++)
			tr.append($('<td colspan="4"><span id="eq' + j + name + i + '"></span></td>'));
		table.append(tr);
	}

	$('#' + root).append(table);
	$('#' + root).append($('<br>'));
}

function fillTableF(API, num, combined, translate) {
	var fleet = API['fleet' + num];
	for (var i = 0; i < fleet.length; i++) {
		var b = API.battles[0].data;
		if (!Object.keys(b).length) b = API.battles[0].yasen;
		if (SHIPDATA[fleet[i].mst_id]) {
			if ($('#radJP').prop('checked')) $('#name' + num + i).text(fleet[i].mst_id + '. ' + SHIPDATA[fleet[i].mst_id].nameJP);
			else $('#name' + num + i).text(fleet[i].mst_id + '. ' + SHIPDATA[fleet[i].mst_id].name);
		} else $('#name' + num + i).text(fleet[i].mst_id + '.');
		if (!translate) {
			if (SHIPDATA[fleet[i].mst_id]) $('#img' + num + i).attr('src', chGetShipImagePath(fleet[i].mst_id));
			var maxhps = (combined) ? 'api_maxhps_combined' : 'api_maxhps';
			var fparam = (combined) ? 'api_fParam_combined' : 'api_fParam';
			$('#lvl' + num + i).text(fleet[i].level); $('#hp' + num + i).text(b[maxhps][i + 1]);
			$('#fp' + num + i).text(b[fparam][i][0]); $('#tp' + num + i).text(b[fparam][i][1]); $('#aa' + num + i).text(b[fparam][i][2]); $('#ar' + num + i).text(b[fparam][i][3]);
		}
		for (var j = 0; j < 5; j++) {
			if (!fleet[i].equip[j]) continue;
			if (EQDATA[fleet[i].equip[j]]) $('#eq' + j + num + i).text(EQDATA[fleet[i].equip[j]][$('#radJP').prop('checked') ? 'nameJP' : 'name']);
			else $('#eq' + j + num + i).text(fleet[i].equip[j]);
			$('#eq' + j + num + i).attr('title', fleet[i].equip[j]);
		}
	}
}

function fillTableLBAS(API, num, translate) {
	for (let i=0; i<API.lbas.length; i++) {
		if (!translate) {
			$('#img' + num + i).attr('src', 'assets/icons/LBAS'+(i+1)+'.png');
		}
		let isJP = $('#radJP').prop('checked');
		let name;
		switch(API.lbas[i].action) {
			case 0: name = (isJP)? '待機' : 'Waiting'; break;
			case 1: name = (isJP)? '出撃' : 'Sortie'; break;
			case 2: name = (isJP)? '防空' : 'Defend'; break;
			case 3: name = (isJP)? '退避' : 'Retreat'; break;
			case 4: name = (isJP)? '休息' : 'Rest'; break;
			default: name = '';
		}
		$('#name' + num + i).text(name);
		for (var j = 0; j < 4; j++) {
			if (!API.lbas[i].planes[j]) continue;
			let eqid = API.lbas[i].planes[j].mst_id;
			if (EQDATA[eqid]) $('#eq' + j + num + i).text(EQDATA[eqid][$('#radJP').prop('checked') ? 'nameJP' : 'name']);
			else $('#eq' + j + num + i).text(eqid);
			$('#eq' + j + num + i).attr('title', eqid);
		}
	}
}

function loadFleetInfo(API, translate) {
	if (!started) return;
	if (!translate) {
		makeTable('friendfleetspace', API.fleetnum, API['fleet' + API.fleetnum].length);
		if (API.combined) makeTable('friendfleetspace', 2, API.fleet2.length);
		if (API.lbas && API.lbas.length) makeTable('lbasspace', 5, API.lbas.length, true);
	}
	fillTableF(API, API.fleetnum, false, translate);
	if (API.combined) fillTableF(API, 2, true, translate);
	if (API.lbas && API.lbas.length) fillTableLBAS(API, 5, translate);

	for (var k = 0; k < API.battles.length; k++) {
		var b = API.battles[k].data;
		if (!b.api_ship_ke) b = API.battles[k].yasen;
		if (!translate) {
			var numships = 0; for (var i = 0; i < b.api_ship_ke.length; i++) if (b.api_ship_ke[i] > 0) numships++;
			makeTable('enemyfleetspace', '2' + k, numships);
		}
		for (var i = 0; i < b.api_ship_ke.length; i++) {
			var mid = b.api_ship_ke[i];
			if (mid <= 0) continue;
			if (SHIPDATA[mid]) {
				if ($('#radJP').prop('checked')) $('#name2' + k + i).text(mid + '. ' + SHIPDATA[mid].nameJP);
				else $('#name2' + k + i).text(mid + '. ' + SHIPDATA[mid].name);
			} else $('#name2' + k + i).text(mid + '.');
			if (!translate) {
				if (SHIPDATA[mid]) $('#img2' + k + i).attr('src', chGetShipImagePath(mid));
				$('#lvl2' + k + i).text(b.api_ship_lv[i + 1]); $('#hp2' + k + i).text(b.api_maxhps[i + 7]);
				$('#fp2' + k + i).text(b.api_eParam[i][0]); $('#tp2' + k + i).text(b.api_eParam[i][1]); $('#aa2' + k + i).text(b.api_eParam[i][2]); $('#ar2' + k + i).text(b.api_eParam[i][3]);
			}
			for (var j = 0; j < 4; j++) {
				if (b.api_eSlot[i][j] <= 0) continue;
				if (EQDATA[b.api_eSlot[i][j]]) $('#eq' + j + '2' + k + i).text(EQDATA[b.api_eSlot[i][j]][$('#radJP').prop('checked') ? 'nameJP' : 'name']);
				else $('#eq' + j + '2' + k + i).text(b.api_eSlot[i][j]);
				$('#eq' + j + '2' + k + i).attr('title', b.api_eSlot[i][j]);
			}
		}
		if (b.api_ship_ke_combined) {
			if (!translate) {
				$('#enemyfleetspace > br:last-child').remove();
				var numships = 0; for (var i = 0; i < b.api_ship_ke_combined.length; i++) if (b.api_ship_ke_combined[i] > 0) numships++;
				makeTable('enemyfleetspace', '2c' + k, numships);
			}
			for (var i = 0; i < b.api_ship_ke_combined.length; i++) {
				var mid = b.api_ship_ke_combined[i];
				if (mid <= 0) continue;
				if (SHIPDATA[mid]) {
					if ($('#radJP').prop('checked')) $('#name2c' + k + i).text(mid + '. ' + SHIPDATA[mid].nameJP);
					else $('#name2c' + k + i).text(mid + '. ' + SHIPDATA[mid].name);
				} else $('#name2c' + k + i).text(mid + '.');
				if (!translate) {
					if (SHIPDATA[mid]) $('#img2c' + k + i).attr('src', chGetShipImagePath(mid));
					$('#lvl2c' + k + i).text(b.api_ship_lv_combined[i + 1]); $('#hp2c' + k + i).text(b.api_maxhps_combined[i + 7]);
					$('#fp2c' + k + i).text(b.api_eParam_combined[i][0]); $('#tp2c' + k + i).text(b.api_eParam_combined[i][1]); $('#aa2c' + k + i).text(b.api_eParam_combined[i][2]); $('#ar2c' + k + i).text(b.api_eParam_combined[i][3]);
				}
				for (var j = 0; j < 4; j++) {
					if (b.api_eSlot_combined[i][j] <= 0) continue;
					if (EQDATA[b.api_eSlot_combined[i][j]]) $('#eq' + j + '2c' + k + i).text(EQDATA[b.api_eSlot_combined[i][j]][$('#radJP').prop('checked') ? 'nameJP' : 'name']);
					else $('#eq' + j + '2c' + k + i).text(b.api_eSlot_combined[i][j]);
					$('#eq' + j + '2c' + k + i).attr('title', b.api_eSlot_combined[i][j]);
				}
			}
		}
	}
}

function translateTable(lang) {
	localStorage.replay_lang = lang;
	loadFleetInfo(API, true);
}

function clearTables() {
	$('#friendfleetspace').html('');
	$('#lbasspace').html('');
	$('#enemyfleetspace').html('');
	$('#chrSpace').html('');
}

function showBattleText() {
	var popup = window.open("battleText.html", "battle", "width=640,height=480,resizeable,scrollbars");
	popup.document.close();
	if (window.focus)
		popup.focus();
}

var uri = new URI(window.location.href);
var qs = uri.search(true);
if (qs.fromImg) {
	loadImgURL(qs.fromImg);
} else if (window.location.hash.length > 5) {
	document.getElementById('code').value = decodeURIComponent(window.location.hash.substr(1));
	loadCode();
	window.location.hash = '';
}

$('#textimgurl').on('keypress', function (e) {
	if (e.keyCode === 13 && this.value) loadImgURL(this.value);
});

$('#rad'+(localStorage.replay_lang || 'EN')).prop('checked',true);

if (renderer instanceof PIXI.CanvasRenderer) $('#warningwebgl').show();