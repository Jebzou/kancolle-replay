var MAPDATA = {
	22: {
		name: 'Spring 2013',
		date: '2013-05-17',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/yl66bLe.png',
		bannerImgAlt: 'http://i.imgur.com/qEAfodg.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 1,
		disableSupport: true,
		overrideStats: {
			1530: { HP: 24 },
			1531: { HP: 30 },
			1532: { HP: 33 },
			1533: { HP: 39 },
			1522: { EQUIPS: [505,506,525] },
			1524: { EQUIPS: [509,509,512] },
			1527: { EQUIPS: [505,506,515] },
			1529: { EQUIPS: [509,509,509] },
			1541: { EQUIPS: [508,508,512] },
			1542: { EQUIPS: [509,508,512] },
			1543: { EQUIPS: [509,509,512] },
		},
		disableMore: { ships: [110,111] },
		maps: {
			1: {
                name: 'E-1',
                nameT: 'Preliminary Encounter',
                fleetTypes: [0],
                bgmMap: 2001,
                bgmDN: 1,
                bgmNN: 1000,
                bgmDB: 1000,
                bgmNB: 1000,
                bossnode: 6,
                hpmode: 2,
                maphp: {
                    2: { 1: 420 },
                },
                finalhp: {
                    2: 0,
                },
                nodes: {
                    'Start': {
                        type: 0,
                        x: 74,
                        y: 167,
                        rules: [
                            ChFixedRoutingRule("A")
                        ]
                    },
                    'A': {
                        type: 1,
                        x: 161,
                        y: 149,
                        compDiff: {
                            2: ['1','1b','2'],
                        },
                        rules: [
                            ChFixedRoutingRule("B")
                        ]
                    },
                    'B': {
                        type: 4,
                        x: 257,
                        y: 137,
                        resource: 2,
                        rules: [
                            ChFixedRoutingRule("C")
                        ]
                    },
                    'C': {
                        type: 2,
                        x: 330,
                        y: 131,
                        resource: 1,
                        amount: [20,25,30,40,45,60],
                        rules: [
                            ChFixedRoutingRule("D")
                        ]
                    },
                    'D': {
                        type: 1,
                        x: 427,
                        y: 132,
                        subonly: true,
                        compDiff: {
                            2: ['1','1b','2'],
                        },
                        rules: [
                            ChFixedRoutingRule("E")
                        ]
                    },
                    'E': {
                        type: 1,
                        x: 521,
                        y: 152,
                        compDiff: {
                            2: ['1','2','2b','3'],
                        },
                        rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["AV", "CVL"], ">", 0, "F"),
								ChShipTypeRoutingRule(["DD"], ">=", 2, "F"),
								ChShipCountRoutingRule(">=", 6, "F"),
							], "AND", "F", "G")
                        ]
                    },
                    'F': {
                        type: 1,
                        x: 668,
                        y: 179,
                        boss: true,
                        compDiff: {
                            2: ['1','1b','2'],
                        },
                        end: true,
                    },
                    'G': {
                        type: 2,
                        x: 462,
                        y: 277,
                        resource: 1,
                        amount: [80,150,195,240],
                        end: true,
                    },
                }
            },
			2: {
				name: 'E-2',
				nameT: 'Cordon Breakthrough',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1001,
				bgmDB: 1001,
				bgmNB: 1001,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 500 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 73,
						y: 148,
						rules: [
							ChFixedRoutingRule("A"),
						]
					},
					'A': {
						type: 1,
						x: 176,
						y: 249,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule("B"),
						]
					},
					'B': {
						type: 1,
						x: 246,
						y: 270,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule("C"),
						]
					},
					'C': {
						type: 4,
						x: 320,
						y: 277,
						resource: 2,
						rules: [
							ChFixedRoutingRule("D"),
						]
					},
					'D': {
						type: 1,
						x: 444,
						y: 251,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule("E"),
						]
					},
					'E': {
						type: 4,
						x: 552,
						y: 184,
						resource: 1,
						rules: [
							ChMultipleRulesRule([
								ChShipCountRoutingRule(">=", 6, "G"),
								ChShipTypeRoutingRule(["CAV", "CA"], ">=", 2, "G"),
								ChShipTypeRoutingRule(["CL"], ">=", 1, "G")
							], "AND", "G", "F"),
						]
					},
					'F': {
						type: 2,
						x: 428,
						y: 122,
						resource: 2,
						amount: [160,320],
						end: true
					},
					'G': {
						type: 1,
						x: 669,
						y: 218,
						compDiff: {
							2: ['1','2']
						},
						compDiffF: {
							2: ['3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Bay Inrush!',
				fleetTypes: [0],
				bgmMap: 109,
				bgmDN: 164,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,  //x4
				reward: { ships: [110], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 81,
						y: 211,
						rules: [
							ChFixedRoutingRule("A"),
						]
					},
					'A': {
						type: 1,
						x: 185,
						y: 158,
						compDiff: {
							2: ['1']
						},
						rules: [
							ChFixedRoutingRule("B"),
						]
					},
					'B': {
						type: 1,
						x: 279,
						y: 117,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						rules: [
							ChFixedRoutingRule("C"),
						]
					},
					'C': {
						type: 4,
						x: 342,
						y: 191,
						resource: 2,
						rules: [
							ChFixedRoutingRule("D"),
						]
					},
					'D': {
						type: 1,
						x: 423,
						y: 238,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						rules: [
							ChFixedRoutingRule("E"),
						]
					},
					'E': {
						type: 4,
						x: 495,
						y: 171,
						resource: 1,
						rules: [
							ChShipTypeRoutingRule(["BBV"], ">=", 2, "G", "F"),
						]
					},
					'F': {
						type: 2,
						x: 656,
						y: 280,
						resource: 3,
						amount: [100],
						end: true
					},
					'G': {
						type: 1,
						x: 632,
						y: 117,
						compDiff: {
							2: ['1','2']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Enemy Anchorage Assault!',
				fleetTypes: [0],
				bgmMap: 66,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 5,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					items: [56]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 236,
						y: 76,
						rules: [
							ChFixedRoutingRule("A"),
						]
					},
					'A': {
						type: 1,
						x: 310,
						y: 123,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule("B"),
						]
					},
					'B': {
						type: 1,
						x: 406,
						y: 131,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('C'),
						]
					},
					'C': {
						type: 1,
						x: 490,
						y: 173,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('D'),
						]
					},
					'D': {
						type: 2,
						x: 450,
						y: 259,
						resource: 3,
						amount: [150,235,360,425],
						rules: [
							ChFixedRoutingRule('E'),
						]
					},
					'E': {
						type: 1,
						x: 317,
						y: 288,
						compDiff: {
							2: ['1']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	23: {
		name: 'Summer 2013',
		date: '2013-08-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/N0VJyTd.png',
		bannerImgAlt: 'http://i.imgur.com/L3be5aR.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 2,
		overrideStats: {
			1522: { EQUIPS: [1505,1506,1525] },
			1524: { EQUIPS: [1509,1509,1512] },
			1527: { EQUIPS: [1505,1506,1515] },
			1529: { EQUIPS: [1509,1509,1509] },
			1541: { EQUIPS: [1508,1508,1512] },
			1542: { EQUIPS: [1509,1508,1512] },
			1543: { EQUIPS: [1509,1509,1512] },
		},
		disableMore: { ships: [126,124,131] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Break through the cordon!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 6,
				hpmode: 2,
				maphp: {
					2: { 1: 140 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [126], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 76,
						y: 212,
						rules: [
							ChFixedRoutingRule('A'),
						]
					},
					'A': {
						type: 1,
						x: 194,
						y: 231,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'B': .5, 'D': .5 })
						]
					},
					'B': {
						type: 2,
						x: 332,
						y: 162,
						resource: 1,
						amount: [35, 40, 45, 55, 65, 70, 75, 80, 85, 90, 95, 100, 105],
						rules: [
							ChFixedRoutingRule('C'),
						]
					},
					'C': {
						type: 1,
						x: 429,
						y: 78,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('E'),
						]
					},
					'D': {
						type: 1,
						x: 367,
						y: 262,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('E'),
						]
					},
					'E': {
						type: 1,
						x: 563,
						y: 223,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'F': .5, 'G': .5 })
						]
					},
					'F': {
						type: 1,
						x: 658,
						y: 206,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'G': {
						type: 2,
						x: 393,
						y: 352,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Eliminate the enemy naval threat!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 8,
				hpmode: 2,
				maphp: {
					2: { 1: 900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 20,
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 116,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["AV"], ">", 0, "A"),
								ChRandomRule({ 'A': .5, 'E': .5 }),
							], "OR", 'A', 'E')
						]
					},
					'A': {
						type: 1,
						x: 253,
						y: 128,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('B'),
						]
					},
					'B': {
						type: 1,
						x: 433,
						y: 115,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						rules: [
							ChRandomRule({ 'C': .5, 'D': .5 }),
						]
					},
					'C': {
						type: 2,
						x: 608,
						y: 92,
						resource: 3,
						amount: [55,60,65,70,105],
						end: true
					},
					'D': {
						type: 4,
						x: 559,
						y: 236,
						resource: 1,
						rules: [
							ChFixedRoutingRule('H'),
						]
					},
					'E': {
						type: 1,
						x: 172,
						y: 229,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('F'),
						]
					},
					'F': {
						type: 1,
						x: 299,
						y: 346,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'B': .5, 'G': .5 }),
						]
					},
					'G': {
						type: 1,
						x: 483,
						y: 321,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						rules: [
							ChFixedRoutingRule('H'),
						]
					},
					'H': {
						type: 1,
						x: 644,
						y: 338,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Assault the enemy staging area!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1400 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,
				reward: { ships: [124], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 244,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["DD"], ">=", 2, "D"),
								ChRandomRule({ 'A': .5, 'D': .5 }),
							], "OR", 'D', 'A')
						]
					},
					'A': {
						type: 1,
						x: 138,
						y: 166,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 255,
						y: 110,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 4,
						x: 334,
						y: 159,
						resource: 2,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 198,
						y: 328,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'E': .5, 'F': .5 })
						]
					},
					'E': {
						type: 1,
						x: 380,
						y: 343,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 414,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'G': .4, 'H': .3, 'I': .3 })
						]
					},
					'G': {
						type: 1,
						x: 570,
						y: 133,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'H': {
						type: 2,
						x: 435,
						y: 69,
						resource: 4,
						amount: [45,50,55,60,65,75,80,95,105],
						end: true
					},
					'I': {
						type: 2,
						x: 592,
						y: 297,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Strike the enemy super dreadnought battleship!',
				fleetTypes: [0],
				bgmMap: 142,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					ships: [131]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 186,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 172,
						y: 224,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 273,
						y: 220,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["DD"], ">=", 2, "D"),
								ChRandomRule({ 'C': .5, 'D': .5 }),
							], "OR", 'D', 'C')
						]
					},
					'C': {
						type: 4,
						x: 367,
						y: 221,
						resource: 1,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 429,
						y: 343,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 468,
						y: 215,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'F': .5, 'G': .5 })
						]
					},
					'F': {
						type: 2,
						x: 509,
						y: 96,
						resource: 9,
						amount: [1],
						end: true
					},
					'G': {
						type: 1,
						x: 605,
						y: 208,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	24: {
		name: 'Fall 2013',
		date: '2013-11-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/aPx281n.png',
		bannerImgAlt: 'http://i.imgur.com/6WjZOpE.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 2,
		overrideStats: {
			1522: { EQUIPS: [1505,1506,1525] },
			1527: { EQUIPS: [1505,1506,1515] },
			1529: { EQUIPS: [1509,1509,1509,1528] },
			1541: { EQUIPS: [1508,1508,1512] },
			1543: { EQUIPS: [1509,1509,1512,1529] },
		},
		disableMore: { ships: [191,138,128,143] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Solomon Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 240 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [191], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 169,
						rules: [
							ChRandomRule({ 'A': .5, 'B': .5 })
						]
					},
					'A': {
						type: 1,
						x: 267,
						y: 126,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 237,
						y: 176,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 394,
						y: 205,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'D': .2, 'E': .4, 'F': .4 })
						]
					},
					'D': {
						type: 2,
						x: 607,
						y: 174,
						resource: 1,
						amount: [15,20,35,40,45],
						end: true
					},
					'E': {
						type: 1,
						x: 526,
						y: 260,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 3,
						x: 470,
						y: 307,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 1,
						x: 654,
						y: 312,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Lunga Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [138], firstOnly: true },
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 151,
						y: 92,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 272,
						y: 110,
						compDiff: {
							2: ['1','2','3','4']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], "=", 0, 'B'),
								ChRandomRule({ 'B' : 0.5, 'C': 0.5}),
							], "OR", 'B', 'C')
						]
					},
					'B': {
						type: 4,
						x: 387,
						y: 143,
						resource: 2,
						routeC: function(ships) {
							if (ships.aBB >= 3) return 'E';
							return 'F';
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], "<", 3, 'F', 'E')
						]
					},
					'C': {
						type: 1,
						x: 247,
						y: 259,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChRandomRule({ 'D': .5, 'H': .5 }),
						]
					},
					'D': {
						type: 1,
						x: 145,
						y: 316,
						nightToDay: true,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'E': {
						type: 1,
						x: 515,
						y: 121,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'F': {
						type: 2,
						x: 479,
						y: 192,
						resource: 4,
						amount: [5,10,15],
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 3,
						x: 448,
						y: 293,
						rules: [
							ChRandomRule({ 'F': .5, 'I': .5 }),
						]
					},
					'H': {
						type: 2,
						x: 313,
						y: 345,
						resource: 1,
						amount: [10,15],
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'I': {
						type: 1,
						x: 575,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'J': .4, 'K': .6 }),
						]
					},
					'J': {
						type: 1,
						x: 602,
						y: 136,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 638,
						y: 321,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Santa Cruz Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 10,
				hpmode: 2,
				maphp: {
					2: { 1: 1350 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 45,
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 135,
						rules: [
							ChRandomRule({ 'A': .5, 'B': .5 }),
						]
					},
					'A': {
						type: 1,
						x: 214,
						y: 112,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 183,
						y: 209,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CAV', 'BBV', 'CVL'], '>', 0, 'D'),
								ChRandomRule({ 'D': .5, 'G': .5 })
							], 'OR', 'D', 'G')
						]
					},
					'C': {
						type: 1,
						x: 367,
						y: 102,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>', 5, 'E', 'D'),
								ChRandomRule({ 'D': .5, 'E': .5 })
							], "OR", 'E', 'D')
						]
					},
					'D': {
						type: 1,
						x: 327,
						y: 269,
						compDiff: {
							2: ['1','2']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["aCV"], ">=", 2, 'F'),
								ChRandomRule({ 'F': .5, 'H': .5 })
							], 'OR', 'F', 'H')
						]
					},
					'E': {
						type: 1,
						x: 519,
						y: 144,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["BB", 'FBB'], "<", 2, 'J'),
								ChShipTypeRoutingRule(["aBB"], "<", 3, 'J'),
							], 'AND', 'J', 'I')
						]
					},
					'F': {
						type: 3,
						x: 491,
						y: 244,
						rules: [
							ChRandomRule({ 'E': .5, 'J': .5 }),
						]
					},
					'G': {
						type: 1,
						x: 132,
						y: 288,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 431,
						y: 309,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 620,
						y: 89,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'J': {
						type: 1,
						x: 637,
						y: 228,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Ironbottom Sound',
				fleetTypes: [0],
				bgmMap: 43,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				hpmode: 2,
				maphp: {
					2: { 1: 2900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 15,
				reward: { ships: [128], firstOnly: true },
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 125,
						y: 94,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 246,
						y: 131,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 337,
						y: 169,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 448,
						y: 150,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChShipTypeRoutingRule(['FBB'], '>=', 2, 'F', 'D'),
						]
					},
					'D': {
						type: 4,
						x: 534,
						y: 119,
						resource: 2,
						rules: [
							ChShipTypeRoutingRule(['aBB'], '<', 3, 'E', 'G'),
						]
					},
					'E': {
						type: 2,
						x: 614,
						y: 166,
						resource: 3,
						amount: [20,25,40,50],
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 508,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChRandomRule({ 'I': .6, 'H': .4 }),
						]
					},
					'G': {
						type: 1,
						x: 627,
						y: 79,
						nightToDay: true,
						compDiff: {
							2: ['1']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 403,
						y: 338,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 312,
						y: 276,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Ironbottom Sound, Final Stage',
				fleetTypes: [0],
				bgmMap: 43,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 2750 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 12,
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				reward: {
					ships: [143]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 116,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 250,
						y: 153,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChAllShipSameSpeedRule('B', 'C')
						]
					},
					'B': {
						type: 3,
						x: 334,
						y: 181,
						rules: [
							ChShipTypeRoutingRule(['aBB'], '=', 2, 'D', 'E'),
						]
					},
					'C': {
						type: 1,
						x: 307,
						y: 258,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 446,
						y: 132,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'E': {
						type: 1,
						x: 426,
						y: 217,
						compDiff: {
							2: ['1','2','3']
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'F': {
						type: 3,
						x: 404,
						y: 297,
						rules: [
							ChRandomRule({ 'G': .5, 'I': .5 }),
						]
						
					},
					'G': {
						type: 1,
						x: 261,
						y: 332,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 4,
						x: 547,
						y: 177,
						resource: 2,
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRule(["DD"], ">", 0),
								ChRandomRule({ 'K': .7, 'J': .3 }),
								ChRandomRule({ 'K': .5, 'J': .5 })
							)
						]
					},
					'I': {
						type: 1,
						x: 521,
						y: 256,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 624,
						y: 96,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 609,
						y: 300,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	25: {
		name: 'Winter 2013',
		nameT: 'Counterattack! Fleet of Fog',
		date: '2013-12-24',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/WGhBfSf.jpg',
		bannerImgAlt: 'http://i.imgur.com/HGuOC0q.jpg',
		overrideStats: {
			1522: { EQUIPS: [1505,1506,1525] },
			1527: { EQUIPS: [1505,1506,1515] },
			1529: { EQUIPS: [1509,1509,1509,1528] },
			1541: { EQUIPS: [1508,1508,1512] },
			1543: { EQUIPS: [1509,1509,1512,1529] },
		},
		initReward: {
			'ships': [9001],
		},
		disableMore: { ships: [155] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle off Kannonzaki Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 23,
				bgmNN: 23,
				bgmDB: 24,
				bgmNB: 24,
				bossnode: 4,
				hpmode: 1,
				bossHP: 3, //needed for replayer
				maphp: {
					2: { 1: 3 },
					1: { 1: 3 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [9002],
					// 'items': [62],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 289,
						y: 107,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 369,
						y: 178,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						rules: [
							ChMultipleRulesRule([
								ChAllShipMusteBeOfTypeRule(["SS", "SSV"], 'C'),
								ChRandomRule({ B : 0.5, C: 0.5}),
							], "OR", 'C', 'B')
						]
					},
					'B': {
						type: 1,
						x: 422,
						y: 250,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 268,
						y: 228,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 348,
						y: 340,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Iwo-jima Island',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 23,
				bgmNN: 23,
				bgmDB: 24,
				bgmNB: 24,
				bossnode: 7,
				hpmode: 1,
				bossHP: 4,
				maphp: {
					2: { 1: 4 },
					1: { 1: 4 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [9003],
					// 'items': [42]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 114,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 249,
						y: 156,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChAllShipMusteBeOfTypeRule(["SS", "SSV"], 'D'),
								ChRandomRule({ B : 0.5, D: 0.5}),
							], "OR", 'D', 'B')
						]
					},
					'B': {
						type: 1,
						x: 309,
						y: 302,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						rules: [
							ChRandomRule({'C':.5,'F':.5}),
						]
					},
					'C': {
						type: 1,
						x: 481,
						y: 311,
						compDiff: {
							2: ['1','1b'],
							1: ['3'],
						},
						compHQ: {
							30: ['1','1b'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'D': {
						type: 1,
						x: 385,
						y: 84,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 4,
						x: 516,
						y: 175,
						resource: 2,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 2,
						x: 428,
						y: 235,
						resource: 1,
						amount: [35,40,45,65,70,75,80,85,90,95,100,105,110,115,120],
						end: true,
					},
					'G': {
						type: 1,
						x: 561,
						y: 254,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'Fleet of Fog - Decisive Battle!',
				fleetTypes: [0],
				bgmMap: 45,
				bgmDN: 23,
				bgmNN: 23,
				bgmDB: 24,
				bgmNB: 24,
				bossnode: 8,
				hpmode: 1,
				bossHP: 5,
				maphp: {
					2: { 1: 5 },
					1: { 1: 5 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [155],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 207,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 219,
						y: 206,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 4, 'C'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 0, 'D'),
								ChSpeedRule(">=", 10, 'D'),
							], "AND", 'D'),
							ChMultipleRulesRule([
								ChIsLastDanceRule('C'),
								ChRandomRule({ 'B': .75, 'C': .25 })
							], "OR", 'C', 'B'),
						]
					},
					'B': {
						type: 1,
						x: 440,
						y: 207,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						rules: [
							ChRandomAffectedByShipTypes(["CV", 'CVB'], 0.2, 'E', 'H')
						]
					},
					'C': {
						type: 1,
						x: 316,
						y: 119,
						compDiff: {
							2: ['1'],
							1: ['4'],
						},
						compHQ: {
							45: ['1'],
							1: ['4'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'D': {
						type: 1,
						x: 292,
						y: 274,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 2,
						x: 529,
						y: 114,
						resource: 3,
						amount: [50,55,70,80,85,90,100,105,110,115,120,125,130,140,145,150],
						end: true,
					},
					'F': {
						type: 1,
						x: 441,
						y: 317,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						rules: [
							ChRandomRule({'G':.5,'H':.5}),
						]
					},
					'G': {
						type: 1,
						x: 621,
						y: 347,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 633,
						y: 208,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
		},
	},
	26: {
		name: 'Spring 2014',
		date: '2014-04-23',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/txZwlUB.png',
		bannerImgAlt: 'http://i.imgur.com/Xs9uKF7.png',
		disableMore: { ships: [182,181,140] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Southwest of Samewani Sea - Battle of Samewani Sea',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 456 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 106,
						y: 99,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 183,
						y: 184,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(["CV", "CVB"], ">=", 2, 'B'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["CA"], ">=", 2, 'C'),
								ChEquipTypeRule({equipTypes: [DRUM]}, '>=', 3, 2, 'C')
							], "AND", 'C'),
							ChRandomRule({ B: 0.5, C: 0.5 })
						]
					},
					'B': {
						type: 1,
						x: 296,
						y: 127,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 3,
						x: 269,
						y: 220,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 472,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChLOSRule({ 40: 'H', 37: 'F' }),
						]
					},
					'E': {
						type: 1,
						x: 363,
						y: 213,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["CA"], ">=", 2, 'G'),
								ChEquipTypeRule({equipTypes: [DRUM]}, '>=', 3, 2, 'G')
							], "AND", 'G', 'D'),
						]
					},
					'F': {
						type: 3,
						x: 564,
						y: 85,
						end: true
					},
					'G': {
						type: 2,
						x: 444,
						y: 263,
						resource: 3,
						amount: [20],
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 1,
						x: 539,
						y: 271,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Southwest of Zunda Strait - Across The Zunda Strait',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 780 },
					2: { 1: 780 },
					1: { 1: 588 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: { ships: [182], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 353,
						y: 82,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["CV"], ">", 0, 'A'),
								ChShipTypeRoutingRule(["aCV"], "=", 2, 'A')
							], "AND", 'A'),
							ChRandomRule({ A: 0.5, B: 0.5 })
						]
					},
					'A': {
						type: 1,
						x: 265,
						y: 152,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3','4'],
						},
						compHQ: {
							75: ['1'],
							35: ['2'],
							1: ['3','4'],
						},
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRule(["CV"], "=", 1, 'D'),
								ChRandomRule({ D: 0.9, E: 0.1 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(["BBV"], ">", 0, 'D'),
								ChRandomRule({ D: 0.75, E: 0.25 }),
								ChRandomRule({ D: 0.5, E: 0.5 })
							),
						]
					},
					'B': {
						type: 1,
						x: 403,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(["CA"], "=", 2, 'D'),
							ChShipTypeRoutingRule(["CAV"], "=", 2, 'D'),
							ChRandomRule({ D: 0.5, C: 0.5 })
						]
					},
					'C': {
						type: 1,
						x: 479,
						y: 204,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(["CLT"], "=", 0, 'H'),
							ChRandomRule({ H: 0.5, F: 0.5 })
						]
					},
					'D': {
						type: 1,
						x: 354,
						y: 234,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 2,
						x: 112,
						y: 210,
						resource: 4,
						amount: [30],
						end: true
					},
					'F': {
						type: 4,
						x: 581,
						y: 151,
						resource: 1,
						end: true
					},
					'G': {
						type: 3,
						x: 358,
						y: 304,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 1,
						x: 447,
						y: 319,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						rules: [
							ChLOSRule({ 40: 'J', 37: 'I' })
						]
					},
					'I': {
						type: 3,
						x: 562,
						y: 344,
						end: true
					},
					'J': {
						type: 1,
						x: 593,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							50: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Port Wine Area - Assault! Destroy Port Wine Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 12,
				maphp: {
					3: { 1: 2660 },
					2: { 1: 2660 },
					1: { 1: 2660 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: { ships: [181], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 248,
						y: 82,
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], ">=", 2, 'A'),
							ChRandomRule({ 'A': .5, 'B': .5 }),
						]
					},
					'A': {
						type: 1,
						x: 331,
						y: 146,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 194,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 3,
						x: 448,
						y: 109,
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], ">=", 2, 'E'),
							ChRandomRule({ 'E': .5, 'F': .5 }),
						]
					},
					'D': {
						type: 2,
						x: 213,
						y: 285,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 551,
						y: 133,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 431,
						y: 200,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 315,
						y: 325,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 523,
						y: 221,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChLOSRule({ 40: 'L', 37: 'J' })
						]
					},
					'I': {
						type: 1,
						x: 451,
						y: 268,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						rules: [
							ChLOSRule({ 40: 'L', 37: 'K' })
						]
					},
					'J': {
						type: 4,
						x: 636,
						y: 219,
						resource: 1,
						end: true
					},
					'K': {
						type: 3,
						x: 441,
						y: 350,
						end: true
					},
					'L': {
						type: 1,
						x: 562,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Central Pacific Sea - Sweep Against Subs in the Frontline',
				fleetTypes: [0],
				bgmMap: 43,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 315 },
					2: { 1: 315 },
					1: { 1: 315 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 210,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["CL"], "<", 4, 'A'),
								ChShipTypeRoutingRule(["SS", "SSV"], "<", 3, 'A')
							], 'AND', 'A', 'B')
						]
					},
					'A': {
						type: 1,
						x: 210,
						y: 203,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(["DD"], ">=", 2, 'C'),
							ChRandomRule({ 'C': .5, 'B': .5 }),
						]
					},
					'B': {
						type: 1,
						x: 268,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						end: true
					},
					'C': {
						type: 3,
						x: 281,
						y: 143,
						routeC: function(ships) {
							if (ships.DD >= 5 || ships.DD >= 4 && ships.CL >= 1) return 'D';
							return 'E';
						},
						rules: [
							ChShipTypeRoutingRule(["DD"], ">=", 5, 'D'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(["DD"], ">=", 4, 'D'),
								ChShipTypeRoutingRule(["CL"], ">=", 1, 'D')
							], 'AND', 'D', 'E')
						]
					},
					'D': {
						type: 1,
						x: 424,
						y: 114,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChLOSRule({ 5: 'H', 2: 'F' })
						]
					},
					'E': {
						type: 1,
						x: 381,
						y: 281,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						rules: [
							ChRandomRule({ 'D': .5, 'G': .5 }),
						]
					},
					'F': {
						type: 3,
						x: 595,
						y: 78,
						end: true
					},
					'G': {
						type: 1,
						x: 551,
						y: 329,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						end: true
					},
					'H': {
						type: 1,
						x: 558,
						y: 206,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'North Pacific Sea - Capture Peacock Island Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 3600 },
					2: { 1: 3600 },
					1: { 1: 3600 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: {
					ships: [140]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 130,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '<', 3, 'B', 'A'),
						]
					},
					'A': {
						type: 3,
						x: 248,
						y: 101,
						end: true
					},
					'B': {
						type: 1,
						x: 226,
						y: 182,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'C';
							if (ships.CLT >= 2) return 'C';
							return 'D';
						},
						rules: [
							ChSpeedRule(">=", 10, 'C'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'C', 'D'),
						]
					},
					'C': {
						type: 4,
						x: 305,
						y: 129,
						resource: 1,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 3,
						x: 252,
						y: 302,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 376,
						y: 189,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], '=', 3, 'F'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'G'),
								ChShipTypeRoutingRule(['BB'], '>=', 3, 'G'),
							], "AND", 'G'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'G'),
								ChShipTypeRoutingRule(['FBB'], '>=', 3, 'G'),
							], "AND", 'G'),
							ChRandomRule({ 'F': .5, 'G': .5 })
						]
					},
					'F': {
						type: 1,
						x: 464,
						y: 128,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'H'),
							ChLOSRule({ 40: 'J', 37: 'H' })
						]
					},
					'G': {
						type: 1,
						x: 463,
						y: 288,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'I'),
							ChLOSRule({ 40: 'J', 37: 'I' })
						]
					},
					'H': {
						type: 3,
						x: 589,
						y: 89,
						end: true
					},
					'I': {
						type: 3,
						x: 612,
						y: 319,
						end: true
					},
					'J': {
						type: 1,
						x: 553,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	27: {
		name: 'Summer 2014',
		date: '2014-08-08',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/1rQiUHS.jpg',
		bannerImgAlt: 'http://i.imgur.com/TsVcRjn.jpg',
		lockSupport: true,
		disableMore: { ships: [405,183,186,404,167] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Advance to the Northern AL Area!',
				fleetTypes: [0],
				bgmMap: 18,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 528 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				reward: { ships: [405], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 296,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 297,
						y: 252,
						compDiff: {
							3: ['HQ60+ 1','HQ60+ 2'],
							2: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQ: {
							60: ['HQ60+ 1','HQ60+ 2'],
							35: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], ">", 0, 'C'),
							ChShipTypeRoutingRule(['CV','CVL','CVB'], '>=', 3, 'C'),
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'B'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'C'),
								ChShipTypeRoutingRule(['CVL'], '>=', 2, 'C'),
							], 'AND', 'C', 'H')
						]
					},
					'B': {
						type: 1,
						x: 410,
						y: 203,
						night: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 1,
						x: 249,
						y: 165,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						routeC: function(ships) {
							if (ships.CV+ships.CVL+ships.CVB >= 3) return 'F';
							else if (ships.SS+ships.SSV >= 4) return 'F';
							else if (ships.CL) return 'D';
							else return ((Math.random()<.5)? 'B' : 'D');
						},
						rules: [
							ChShipTypeRoutingRule(['CV','CVL','CVB'], '>=', 3, 'F'),
							ChShipTypeRoutingRule(['SS', 'SSV'], ">", 4, 'F'),
							ChShipTypeRoutingRule(['CL'], '>', 0, 'D'),
							ChRandomRule({ B: 0.5, D: 0.5 })
						]
					},
					'D': {
						type: 1,
						x: 364,
						y: 98,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ100+ 1','HQ100+ 2'],
							1:['HQ100+ 1','HQ100+ 2'],
						},
						compHQ:{
							1:['HQ100+ 1','HQ100+ 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 503,
						y: 129,
						rules: [
							ChLOSRule({ 60:'K', 57:'G' })
						]
					},
					'F': {
						type: 3,
						x: 169,
						y: 131,
						end: true,
					},
					'G': {
						type: 3,
						x: 613,
						y: 96,
						end: true,
					},
					'H': {
						type: 1,
						x: 424,
						y: 314,
						night: true,
						compDiff:{
							3:['HQ60+ 1','HQ60+ 2'],
							2:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ60+ 1','HQ60+ 2'],
							50:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 532,
						y: 263,
						compDiff:{
							3:['HQ90+ 1','HQ90+ 2'],
							2:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							90:['HQ90+ 1','HQ90+ 2'],
							50:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD', 'CL', 'CLT', 'CA', 'CAV'], '<', 2, 'J'),
							ChLOSRule({ 60:'K', 57:'J' })
						]
					},
					'J': {
						type: 3,
						x: 619,
						y: 301,
						end: true,
					},
					'K': {
						type: 1,
						x: 584,
						y: 180,
						boss: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							55:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						end: true,
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Diversionary Tactics! Wreck the Northern Harbour!',
				fleetTypes: [0],
				bgmMap: 18,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 2300 },
					2: { 1: 2300 },
					1: { 1: 2300 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				reward: { ships: [183], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 327,
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'C'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB', 'SS', 'SSV'], '=', 0, 'A'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'C'),
								ChShipTypeRoutingRule(['CVL'], '<=', 2, 'C'),
								ChShipTypeRoutingRule(['CA', 'CAV'], '<=', 2, 'C'),
							], "AND", 'C', 'A')
						]
					},
					'A': {
						type: 3,
						x: 107,
						y: 221,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 217,
						y: 129,
						compDiff: {
							3: ['1','1b'],
							2: ['2','2b','3'],
							1: ['4','5'],
						},
						compHQ: {
							70: ['1','1b'],
							40: ['2','2b','3'],
							1: ['4','5'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'F'),
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'F', 'D'),
						]
					},
					'C': {
						type: 1,
						x: 304,
						y: 311,
						compDiff: {
							3: ['1','2'],
							2: ['1','3'],
							1: ['3'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['1','3'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 0, 'D', 'G'),
						]
					},
					'D': {
						type: 1,
						x: 314,
						y: 209,
						compDiff: {
							3: ['1','1b','1c'],
							2: ['2','3'],
							1: ['4','4b'],
						},
						compHQ: {
							60: ['1','1b','1c'],
							40: ['2','3'],
							1: ['4','4b'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 372,
						y: 149,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['4','5'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['2','3'],
							30: ['3','5'],
							1: ['4','5'],
						},
						rules: [
							ChLOSRule({ 70: 'K', 50: 'F' })
						]
					},
					'F': {
						type: 3,
						x: 450,
						y: 83,
						end: true,
					},
					'G': {
						type: 1,
						x: 501,
						y: 291,
						compDiff: {
							3: ['2','2b'],
							2: ['3','2b'],
							1: ['3','1'],
						},
						compHQ: {
							60: ['2','2b'],
							40: ['3','2b'],
							1: ['3','1'],
						},
						rules: [
							ChLOSRule({ 60: 'E', 59: 'I', 40: 'H' })
						]
					},
					'H': {
						type: 3,
						x: 626,
						y: 322,
						end: true,
					},
					'I': {
						type: 1,
						x: 615,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'K'),
							ChRandomRule({ 'K': .5, 'J': .5 })
						]
					},
					'J': {
						type: 2,
						x: 657,
						y: 152,
						resource: 2,
						amount: [30],
						end: true,
					},
					'K': {
						type: 1,
						x: 537,
						y: 143,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							100: ['1'],
							55: ['3'],
							1: ['5'],
						},
						compHQF: {
							100: ['2'],
							55: ['4'],
							1: ['6'],
						},
						boss: true,
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'The Decisive Battle! Starting Operation MI',
				fleetTypes: [1],
				bgmMap: 18,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 250,
					2: 250,
					1: 250,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 211,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 213,
						y: 170,
						rules: [
							ChSpeedRule('<=', 5, 'B'),
							ChShipTypeRoutingRule(['aCV'], '<=', 3, 'D'),
							ChShipTypeRoutingRule(['AV'], '>', 0, 'C'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB'], '>', 0, 'C'),
								ChRandomRule({ 'C': .3, 'D': .3, 'B': .4 }),
								ChRandomRule({ 'C': .5, 'D': .5 }),
							),
						]
					},
					'B': {
						type: 1,
						x: 347,
						y: 111,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','2'],
							1:['2'],
						},
						compHQ: {
							60:['1','2'],
							1:['2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 367,
						y: 204,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 296,
						y: 247,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['3'],
						},
						compHQ: {
							100:['1','2'],
							60:['1','3'],
							1:['3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 477,
						y: 171,
						aironly: true,
						compDiff: {
							3:['1','2','3'],
							2:['1','2'],
							1:['1','2'],
						},
						compHQ: {
							100:['1','2','3'],
							1:['1','2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 3,
						x: 425,
						y: 305,
						rules: [
							ChLOSRule({100:'H',90:'I'})
						]
					},
					'G': {
						type: 3,
						x: 517,
						y: 119,
						end: true,
					},
					'H': {
						type: 1,
						x: 569,
						y: 227,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['1','3'],
						},
						compHQ: {
							100:['1','2'],
							1:['1','3'],
						},
						rules: [
							ChLOSRule({100:'J',90:'G'})
						]
					},
					'I': {
						type: 3,
						x: 603,
						y: 320,
						end: true,
					},
					'J': {
						type: 1,
						x: 617,
						y: 120,
						boss: true,
						compDiff: {
							3:['1','2'],
							2:['4'],
							1:['6','7'],
						},
						compDiffF: {
							3:['3'],
							2:['5'],
							1:['8'],
						},
						compHQ: {
							105:['1','2'],
							70:['4'],
							1:['6','7'],
						},
						compHQF: {
							105:['3'],
							70:['5'],
							1:['8'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Invasion of Midway Island',
				fleetTypes: [1],
				bgmMap: 18,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 11,
				maphp: {
					3: { 1: 5550 },
					2: { 1: 5550 },
					1: { 1: 5550 },
				},
				finalhp: {
					3: 600,
					2: 600,
					1: 600,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				reward: { ships: [186], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 109,
						y: 148,
						rules: [
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'B'),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 4, 'B'),
								ChRandomRule({ 'B': .8, 'A': .2 }),
							),	
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '>=', 2, 'A'),
								ChSpeedRule(">=", 10, 'A')
							], 'AND', 'A'),
							ChRandomRule({ 'B': .5, 'A': .5 }),					
						]
					},
					'A': {
						type: 1,
						x: 259,
						y: 105,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','3'],
							1: ['1','3'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['1','3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 245,
						y: 197,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','2','4'],
							1: ['1','2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['1','2','4'],
						},
						rules: [
							ChRandomRule({'C':.5,'D':.5}),
						]
					},
					'C': {
						type: 1,
						x: 371,
						y: 135,
						subonly: true,
						compDiff: {
							3: ['1','1b','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','1b','2'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.aCV <= 3 && ships.speed>=10) return 'F';
							return (Math.random()<.8)? 'E':'F';
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '<=', 3, 'F'),
								ChSpeedRule('>=', 10, 'F')
							], "AND", 'F'),
							ChRandomRule({'E':.8,'F':.2}),
						]
					},
					'D': {
						type: 1,
						x: 280,
						y: 276,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						rules: [
							ChLOSRule({100:'H',90:'G'})
						]
					},
					'E': {
						type: 1,
						x: 569,
						y: 90,
						aironly: true,
						compDiff: {
							3: ['1','4','5'],
							2: ['1','2','3','4'],
							1: ['1','2'],
						},
						compHQ: {
							100: ['1','4','5'],
							60: ['1','2','3','4'],
							1: ['1','2'],
						},
						end: true,
					},
					'F': {
						type: 3,
						x: 540,
						y: 176,
						rules: [
							ChLOSRule({100:'J',90:'I'})
						]
					},
					'G': {
						type: 3,
						x: 184,
						y: 309,
						end: true,
					},
					'H': {
						type: 1,
						x: 372,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['2','3','3b'],
							1: ['2','3','3b'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','3b'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 3,
						x: 626,
						y: 248,
						end: true,
					},
					'J': {
						type: 1,
						x: 494,
						y: 304,
						aironly: true,
						compDiff: {
							3: ['1','2','4'],
							2: ['1','3','5'],
							1: ['1','3','5'],
						},
						compHQ: {
							100: ['1','2','4'],
							1: ['1','3','5'],
						},
						rules: [
							ChLOSRule({100:'K',90:'H'})
						]
					},
					'K': {
						type: 1,
						x: 392,
						y: 242,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							105: ['1'],
							70: ['3'],
							1: ['5'],
						},
						compHQF: {
							105: ['2'],
							70: ['4'],
							1: ['6'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Securing the MI Islands',
				fleetTypes: [1],
				bgmMap: 18,
				bgmDN: 12,
				bgmNN: 12,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 12,
				maphp: {
					3: { 1: 3150 },
					2: { 1: 3150 },
					1: { 1: 3150 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				reward: { ships: [404], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 141,
						rules: [
							ChRandomRule({'A':.5,'B':.5}),
						]
					},
					'A': {
						type: 1,
						x: 230,
						y: 184,
						subonly: true,
						compDiff: {
							3: ['1','1b'],
							2: ['1','1b'],
							1: ['1','1b'],
						},
						compHQ: {
							1: ['1','1b'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'C'),
							ChRandomRule({'C':.5,'D':.5}),
						]
					},
					'B': {
						type: 1,
						x: 200,
						y: 237,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['2','3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 1,
						x: 361,
						y: 117,
						aironly:true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3'],
							1: ['2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['2','3','4'],
						},
						rules: [
							ChRandomRule({'G':.5,'F':.5}),
						]
					},
					'D': {
						type: 1,
						x: 360,
						y: 199,
						night: true,
						compDiff: {
							3: ['2','2b'],
							2: ['1','2b'],
							1: ['1'],
						},
						compHQ: {
							100: ['2','2b'],
							1: ['1','2b'],
						},
						rules: [
							ChRandomRule({'G':.5,'H':.5}),
						]
					},
					'E': {
						type: 1,
						x: 322,
						y: 301,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						rules: [
							ChRandomRule({'H':.5,'I':.5}),
						]
					},
					'F': {
						type: 3,
						x: 521,
						y: 82,
						end: true,
					},
					'G': {
						type: 1,
						x: 496,
						y: 155,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						rules: [
							ChLOSRule({100:'L',90:'J'})
						]
					},
					'H': {
						type: 1,
						x: 462,
						y: 239,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						compHQ: {
							90: ['1','2'],
							70: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'I': {
						type: 1,
						x: 469,
						y: 299,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3','4'],
							1: ['2','3','4'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['2','3','4'],
						},
						rules: [
							ChLOSRule({100:'L',90:'K'})
						]
					},
					'J': {
						type: 3,
						x: 615,
						y: 124,
						end: true,
					},
					'K': {
						type: 3,
						x: 615,
						y: 324,
						end: true,
					},
					'L': {
						type: 1,
						x: 594,
						y: 230,
						boss: true,
						end: true,
						compDiff: {
							3: ['1'],
							2: ['3','4'],
							1: ['6'],
						},
						compDiffF: {
							3: ['2'],
							2: ['5'],
							1: ['7'],
						},
						compHQ: {
							105: ['1'],
							80: ['3','4'],
							1: ['6'],
						},
						compHQF: {
							105: ['2'],
							80: ['5'],
							1: ['7'],
						},
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counter Attack to AL/MI Operation',
				fleetTypes: [0],
				bgmMap: 18,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 4000 },
					2: { 1: 4000 },
					1: { 1: 4000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				checkLock: ['AL','MI'],
				reward: {
					'ships': [167],
				},
				nodes: {
					'Start': {
						type: 1,
						x: 96,
						y: 122,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 226,
						y: 191,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 2, 'B'),
							ChShipTypeRoutingRule(['CA', 'CAV'], '=', 2, 'C'),
							ChShipTypeRoutingRule(['CVL'], '=', 2, 'C'),
							ChShipTypeRoutingRule(['aCV'], '=', 3, 'C'),
							ChShipTypeRoutingRule(['DD'], '=', 2, 'C'),
							ChRandomRule({ 'C': .5, 'D': .5 }),
						]
					},
					'B': {
						type: 3,
						x: 268,
						y: 315,
						end: true,
					},
					'C': {
						type: 1,
						x: 358,
						y: 174,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['3','4'],
						},
						compHQ: {
							88: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRule(['CVL'], '=', 2, 'E'),
							ChRandomRule({ 'E': .5, 'F': .5 }),
						]
					},
					'D': {
						type: 1,
						x: 354,
						y: 282,
						night: true,
						compDiff: {
							3: ['1'],
							2: ['1','2'],
							1: ['2'],
						},
						compHQ: {
							100: ['1'],
							75: ['1','2'],
							1: ['2'],
						},
						rules: [
							ChRandomRule({'F':.5,'G':.5}),
						]
					},
					'E': {
						type: 3,
						x: 464,
						y: 94,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 484,
						y: 222,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['2','3'],
							1: ['3'],
						},
						rules: [
							ChLOSRule({75: 'J', 50: 'H', 0: 'G' })
						]
					},
					'G': {
						type: 3,
						x: 474,
						y: 323,
						end: true,
					},
					'H': {
						type: 1,
						x: 545,
						y: 104,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5'],
						},
						rules: [
							ChLOSRule({75:'J',0:'I'})
						]
					},
					'I': {
						type: 3,
						x: 645,
						y: 161,
						end: true,
					},
					'J': {
						type: 1,
						x: 592,
						y: 301,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['3'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['4'],
						},
						compHQ: {
							100: ['1'],
							1: ['3'],
						},
						compHQF: {
							100: ['2'],
							1: ['4'],
						},
						end: true,
					},
				},
			},
		}
	},
	28: {
		name: 'Fall 2014',
		date: '2014-11-14',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/N9FDaqh.png',
		bannerImgAlt: 'http://i.imgur.com/JJYgFR8.png',
		disableMore: { ships: [421,176,415] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'First Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 6,
				maphp: {
					3: { 1: 352 },
					2: { 1: 352 },
					1: { 1: 352 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 1,
				checkLock: [2],
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 212,
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['aBB'], ">", 0, 'B'),
								ChRandomRule({ B: 0.75, A: 0.25 }),
								ChRandomRule({ B: 0.5, A: 0.5 }),
							)
						]
					},
					'A': {
						type: 3,
						x: 238,
						y: 197,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 295,
						y: 301,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 322,
						y: 117,
						compDiff: {
							2: ['1','2','3'],
							1: ['2','3'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['2','3'],
						},
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['DD'], ">=", 4, 'E'),
								ChRandomRule({ E: 0.75, D: 0.25 }),
								ChRandomRule({ E: 0.25, D: 0.75 }),
							)
						]
					},
					'D': {
						type: 1,
						x: 399,
						y: 184,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['3','4'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '<=', 3, 'F'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 0, 'F'),
								ChShipTypeRoutingRule(['CVL'], '<=', 1, 'F'),
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 4, 'F'),
							], "AND", 'F', 'E')
						]
					},
					'E': {
						type: 1,
						x: 486,
						y: 156,
						compDiff: {
							2: ['1','3','5'],
							1: ['2','4'],
						},
						compHQ: {
							80: ['1','3','5'],
							1: ['2','4'],
						},
						rules: [
							ChLOSRule({ 100: 'F', 97: 'G' })
						]
					},
					'F': {
						type: 1,
						x: 593,
						y: 249,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['1'],
							1: ['5'],
						},
						compHQF: {
							80: ['1'],
							1: ['5'],
						},
						end: true,
						boss: true
					},
					'G': {
						type: 3,
						x: 610,
						y: 135,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Second Operation Kon',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 9,
				maphp: {
					3: { 1: 850 },
					2: { 1: 850 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 190,
				},
				giveLock: 1,
				checkLock: [2],
				reward: { ships: [421], firstOnly: true },
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				mapInfo: 'You can only sortie CLs and DDs',
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 246,
						rules: [
							ChRandomRule({ 'A': .5, 'C': .5 }),
						]
					},
					'A': {
						type: 1,
						x: 179,
						y: 187,
						subonly: true,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['2','3','4'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'B': {
						type: 3,
						x: 184,
						y: 114,
						end: true
					},
					'C': {
						type: 1,
						x: 271,
						y: 264,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4','5'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '>=', 3, 'E'),
							ChShipTypeRoutingRule(['CL'], '=', 2, 'D'),
							ChLOSRule({ 24: 'G', 21: 'D' })
						]
					},
					'D': {
						type: 1,
						x: 278,
						y: 153,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '>=', 3, 'B'),
							ChLOSRule({ 20: 'G', 17: 'F' })
						]
					},
					'E': {
						type: 3,
						x: 281,
						y: 332,
						end: true
					},
					'F': {
						type: 4,
						x: 388,
						y: 124,
						resource: 1,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 430,
						y: 187,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 490,
						y: 95,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						rules: [
							ChLOSRule({ 15: 'I', 12: 'J' })
						]
					},
					'I': {
						type: 1,
						x: 565,
						y: 158,
						compDiff: {
							2: ['1','2','3'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['4'],
							1: ['7'],
						},
						compHQF: {
							80: ['4'],
							1: ['7'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 593,
						y: 96,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Third Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 9,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 2,
				checkLock: [1],
				reward: { ships: [176], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 131,
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>=', 2, 'A'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'A'),
							ChShipTypeRoutingRule(['LHA','AV','CL','DD'], '<=', 0, 'A'),
							ChShipTypeRoutingRule(['CV','CVB','BB','FBB'], '>', 0, 'B'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['BBV'], '<=', 2, 'C'),
								ChShipTypeRoutingWithWeightRuleEscortOnly({ 
									1: ['CA', 'CAV', 'CLT'], 
									0.5: ['CL', 'DD']
								}, '<=', 3, 'C'),
							], 'AND', 'C'),
							ChDefaultRouteRule('B')
						]
					},
					'A': {
						type: 4,
						x: 94,
						y: 218,
						resource: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 275,
						y: 311,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 287,
						y: 169,
						compDiff: {
							2: ['1','2'],
							1: ['1','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['1','3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 3,
						x: 295,
						y: 89,
						end: true
					},
					'E': {
						type: 4,
						x: 385,
						y: 143,
						resource: 1,
						rules: [
							ChLOSRule({ 100: 'G', 97: 'D' })
						]
					},
					'F': {
						type: 1,
						x: 398,
						y: 319,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						rules: [
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'H'),
							ChShipHistoricalRoutingRuleMainFleetOnly('Myouko and Haguro', [62, 65], ">=", 2, 'H'),
							ChShipHistoricalRoutingRuleEscortOnly('Shimakaze and Noshiro', [50, 138], ">=", 2, 'H'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['BBV'], "=", 2, 'H'),
								ChRandomRule({ 'H': .75, 'E': .25 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['CA'], "=", 2, 'H'),
								ChRandomRule({ 'H': .75, 'E': .25 })
							),
							ChRandomRule({ 'E': .75, 'H': .25 })
						]
					},
					'G': {
						type: 1,
						x: 468,
						y: 86,
						compDiff: {
							2: ['1','2'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'H'),
							ChShipTypeRoutingRuleEscortOnly(['CA', 'CAV'], '>', 0, 'H', 'I'),
						]
					},
					'H': {
						type: 1,
						x: 515,
						y: 168,
						compDiff: {
							2: ['1','2','3'],
							1: ['3','4','5'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['3','4','5'],
						},
						rules: [
							ChLOSRule({ 100: 'I', 97: 'J' })
						]
					},
					'I': {
						type: 1,
						x: 631,
						y: 124,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							85: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							85: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 649,
						y: 226,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Operation Intercept Task Force',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 10,
				maphp: {
					3: { 1: 2420 },
					2: { 1: 2420 },
					1: { 1: 2220 },
				},
				finalhp: {
					3: 390,
					2: 390,
					1: 370,
				},
				reward: {
					ships: [415],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 172,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleEscortOnly(['DD'], '=', 2, 'C'),
								ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'C'),
							], "AND", 'C'),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 5, 'B'),
								ChRandomRule({ 'B': .75, 'C': .25 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['DD'], '=', 4, 'B'),
								ChRandomRule({ 'B': .5, 'C': .5 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['DD'], '=', 3, 'B'),
								ChRandomRule({ 'B': .25, 'C': .75 })
							),
							ChDefaultRouteRule('C')
						]
					},
					'A': {
						type: 3,
						x: 168,
						y: 281,
						end: true
					},
					'B': {
						type: 3,
						x: 232,
						y: 95,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 236,
						y: 168,
						subonly: true,
						compDiff: {
							2: ['1','2','3'],
							1: ['4','5'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['4','5'],
						},
						rules: [
							ChIfLosFailedThenElseRandomRule(ChLOSRule({ 90: '', 87: 'A' }), ChRandomRule({ 'D': .5, 'E': .5 }))
						]
					},
					'D': {
						type: 1,
						x: 356,
						y: 129,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 3, 'E'),
							ChShipTypeRoutingRule(['aBB'], '>=', 5, 'E'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB'], '==', 4, 'G'),
								ChRandomRule({ 'E': .75, 'G': .25 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB'], '==', 3, 'G'),
								ChRandomRule({ 'E': .25, 'G': .75 })
							),
							ChDefaultRouteRule('G')
						]
					},
					'E': {
						type: 1,
						x: 375,
						y: 269,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['1','2','3','4'],
						},
						compHQ: {
							1: ['1','2','3','4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 3,
						x: 422,
						y: 95,
						end: true
					},
					'G': {
						type: 1,
						x: 482,
						y: 175,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChLOSRule({ 90: '', 87: 'F' }),

							ChShowLOSPlane(ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(["aCV"], '<=', 2, 'J'),
								ChShipTypeRoutingRuleMainFleetOnly(["LHA", 'CL'], '>', 0, 'J'),
							], "AND", 'J')),

							ChShowLOSPlane(ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(["aCV"], '>=', 3, 'I'),
								ChShipTypeRoutingRuleMainFleetOnly(["aBB"], '>=', 2, 'I'),
							], "AND", 'I')),
							
							ChShowLOSPlane(ChShipTypeRoutingRuleMainFleetOnly(["CV", "CVB"], '>=', 3, 'I')),

							ChShowLOSPlane(ChIfThenElseRule(
								ChShipTypeRoutingRuleMainFleetOnly(["CVL"], '>=', 4, 'J'),
								ChRandomRule({ 'J': .9, 'I': .1 })
							)),
							
							ChShowLOSPlane(ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(["aCV"], '<=', 3, 'J'),
								ChShipTypeRoutingRuleMainFleetOnly(["CV", "CVB"], '<=', 2, 'J')
							], "AND", 'J')),

							ChShowLOSPlane(ChRandomRule({ 'J': .5, 'H': .5 }))
						]
					},
					'H': {
						type: 1,
						x: 543,
						y: 268,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 578,
						y: 107,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['1','2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 637,
						y: 190,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							90: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	29: {
		name: 'Winter 2015',
		date: '2015-02-06',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/0Hva9QA.png',
		bannerImgAlt: 'http://i.imgur.com/eLlUiO1.png',
		disableMore: { ships: [431,154,331] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Wreck the enemy submarines around our anchorage!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 32,
				bgmNB: 32,
				bossnode: 9,
				maphp: {
					3: { 1: 200 },
					2: { 1: 180 },
					1: { 1: 180 },
				},
				finalhp: {
					3: 48,
					2: 45,
					1: 45,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				mapInfo: 'You can only sortie CLs and DDs',
				nodes: {
					'Start': {
						type: 0,
						x: 355,
						y: 238,
						rules: [
							ChRandomRule({ 'A': .5, 'B': .5 }),
						]
					},
					'A': {
						type: 1,
						x: 338,
						y: 319,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 3,
						x: 252,
						y: 305,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 481,
						y: 340,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 611,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 144,
						y: 257,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 3,
						x: 160,
						y: 147,
						rules: [
							ChLOSRule({ 3: 'H', 0: 'J' })
						]
					},
					'G': {
						type: 1,
						x: 589,
						y: 174,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '<', 5, 'I', 'K'),
						]
					},
					'H': {
						type: 1,
						x: 329,
						y: 88,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '>=', 4, 'J'),
							ChShipTypeRoutingRule(['CL'], '>', 1, 'G'),
							ChLOSRule({ 8: 'I', 5: 'G' })
						]
						
					},
					'I': {
						type: 1,
						x: 546,
						y: 101,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 257,
						y: 200,
						end: true
					},
					'K': {
						type: 3,
						x: 647,
						y: 125,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Bombing of Truk anchorage',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 33,
				bgmNB: 33,
				bossnode: 9,
				maphp: {
					3: { 1: 736 },
					2: { 1: 736 },
					1: { 1: 736 },
				},
				finalhp: {
					3: 160,
					2: 160,
					1: 160,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 247,
						y: 185,
						routeC: function(ships) {
							if (ships.aBB > 2) return 'B';
							if (ships.CV + ships.CVB > 2) return 'B';
							if (ships.CLT > 1) return 'B';
							if (ships.DD + ships.CL + ships.CVL + ships.LHA + ships.AR >= 2) return 'A';
							return 'B';
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>', 2, 'B'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 2, 'B'),
							ChShipTypeRoutingRule(['CLT'], '>', 1, 'B'),
							ChShipTypeRoutingRule(['DD','CL','CVL','LHA','AR'], '>=', 2, 'A'),
							ChDefaultRouteRule('B')
						]
					},
					'A': {
						type: 1,
						x: 336,
						y: 240,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule(">=", 10, 'D'),
								ChShipTypeRoutingRule(['CL'], '>=', 1, 'D'),
								ChShipTypeRoutingRule(['CAV'], '<=', 1, 'D'),
								ChShipTypeRoutingRule(['CAV','DD'], '>=', 4, 'D'),
							], 'AND', 'D', 'F')
						]
					},
					'B': {
						type: 4,
						x: 210,
						y: 108,
						resource: 1,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 3, 'J'),
							ChShipTypeRoutingRule(['DD','CL','CVL','LHA','AR'], '<=', 0, 'J', 'C'),
						]
					},
					'C': {
						type: 1,
						x: 360,
						y: 113,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 3,
						x: 247,
						y: 307,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 423,
						y: 285,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 469,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 1, 'G'),
								ChShipTypeRoutingRule(['aCV'], '<=', 4, 'G'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 1, 'G'),
								ChShipTypeRoutingRule(['CV', 'CVB', 'aBB'], '<=', 2, 'G'),
								ChShipTypeRoutingRule(['CLT'], '<=', 1, 'G'),
							], 'AND', 'G', 'H')
						]
					},
					'G': {
						type: 1,
						x: 557,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 20: 'I', 17: 'L' })
						]
					},
					'H': {
						type: 1,
						x: 565,
						y: 134,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 20: 'I', 17: 'K' })
						]
					},
					'I': {
						type: 1,
						x: 638,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 108,
						y: 192,
						end: true
					},
					'K': {
						type: 3,
						x: 645,
						y: 94,
						end: true
					},
					'L': {
						type: 3,
						x: 659,
						y: 276,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Combined Fleet, sortie now!',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 34,
				bgmNB: 34,
				bossnode: 11,
				maphp: {
					3: { 1: 1080 },
					2: { 1: 1080 },
					1: { 1: 1000 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 210,
				},
				reward: { ships: [431], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 103,
						y: 152,
						rules: [
							ChShipHistoricalRoutingRuleEscortOnly('Naka and Noshiro', [56, 137], ">=", 2, 'C'),
							ChShipTypeRoutingRuleMainFleetOnly(['CAV'], '=', 2, 'C'),
							ChRandomRule({ 'A': .7, 'C': .3 }),
						]
					},
					'A': {
						type: 3,
						x: 235,
						y: 112,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 349,
						y: 178,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'CV', 'CVB'], '>=', 5, 'F'),
							ChShipTypeRoutingRuleEscortOnly(['aBB', 'CLT'], '>', 0, 'F'),
							ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 4, 'C'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '>=', 4, 'F'),
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 4, 'F'),
							ChDefaultRouteRule('C')
						]
					},
					'C': {
						type: 1,
						x: 314,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShowCompass(ChFixedRoutingRule('E'))
						]
					},
					/*'D': {
						type: 3,
						x: 213,
						y: 313,
						end: true
					},*/
					'E': {
						type: 4,
						x: 418,
						y: 330,
						resource: 1,
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'CV', 'CVB'], '>=', 5, 'F'),
							ChShipTypeRoutingRuleEscortOnly(['aBB', 'CLT'], '>', 0, 'F'),
							ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 4, 'H'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '>=', 4, 'F'),
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 4, 'F'),
							ChDefaultRouteRule('H')
						]
					},
					'F': {
						type: 1,
						x: 429,
						y: 265,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'G', 'H'),
						]
					},
					'G': {
						type: 1,
						x: 495,
						y: 150,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						rules: [
							ChLOSRule({ 80: 'I', 77: 'J' })
						]
					},
					'H': {
						type: 1,
						x: 543,
						y: 313,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 1,
						x: 613,
						y: 215,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 3,
						x: 629,
						y: 89,
						end: true
					},
					'K': {
						type: 1,
						x: 655,
						y: 278,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Seize the Enemy Task Force!',
				fleetTypes: [0],
				bgmMap: 178,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 180,
				bgmNB: 180,
				bossnode: 11,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				reward: { ships: [154], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 192,
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'A'),
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'A'),
								ChShipTypeRoutingRule(['aCV'], '>', 0, 'A'),
								ChShipTypeRoutingRule(['CL','DD'], '>=', 3, 'A'),
							],'AND', 'A'),
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'A'),
								ChShipTypeRoutingRule(['aCV'], '>=', 2, 'A'),
							],'AND', 'A'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '=', 1, 'E'),
								ChShipTypeRoutingRule(['DD'], '>=', 4, 'E'),
								ChShipTypeRoutingRule(['CLT','CA','CAV','DD'], '>=', 5, 'E'),
							],'AND', 'E', 'B'),
						]
					},
					'A': {
						type: 1,
						x: 141,
						y: 117,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						rules: [
							ChRandomRule({ 'E': .5, 'C': .5 }),
						]
					},
					'B': {
						type: 3,
						x: 272,
						y: 203,
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'D'),
								ChShipTypeRoutingRule(['aCV', 'CLT'], '<=', 0, 'D'),
							],'AND', 'D'),
							ChShipHistoricalRoutingRule('Naka and Noshiro', [56, 137], ">=", 1, 'D'),
							ChShipHistoricalRoutingRule('Nowaki and Maikaze', [415, 122], ">=", 2, 'D', 'F'),
						]
					},
					'C': {
						type: 3,
						x: 81,
						y: 235,
						end: true
					},
					'D': {
						type: 1,
						x: 328,
						y: 274,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 4,
						x: 400,
						y: 101,
						resource: 1,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 402,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 454,
						y: 314,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 504,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>=', 2, 'J'),
							ChShipTypeRoutingRule(['BBV'], '>=', 2, 'J', 'I'),
						]
					},
					'I': {
						type: 1,
						x: 582,
						y: 291,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 18: 'K', 15: 'M' })
						]
					},
					'J': {
						type: 1,
						x: 611,
						y: 96,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 18: 'K', 15: 'L' })
						]
					},
					'K': {
						type: 1,
						x: 622,
						y: 206,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 662,
						y: 153,
						end: true
					},
					'M': {
						type: 3,
						x: 666,
						y: 257,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Decisive Battle! Combined Fleet, Begin Counterattack!',
				fleetTypes: [1,2],
				bgmMap: 178,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 181,
				bgmNB: 181,
				bossnode: 10,
				maphp: {
					3: { 1: 3000 },
					2: { 1: 3000 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 415,
				},
				reward: {
					ships: [331],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 200,
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 3, 'A'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'A'),
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], '>', 0, 'A'),
							ChSpeedRule('>=', 10, 'B'),
							ChShipHistoricalRoutingRule('Naka and Noshiro', [56, 137], ">=", 1, 'B'),
							ChShipHistoricalRoutingRule('Nowaki and Maikaze', [415, 122], ">=", 2, 'B'),
							ChDefaultRouteRule('A')
						]
					},
					'A': {
						type: 1,
						x: 233,
						y: 207,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['AR','CT'], '>', 0, 'C'),
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], '>', 0, 'C'),
							ChRandomRule({ 'D': .7, 'C': .3 }),
						]
					},
					'B': {
						type: 1,
						x: 220,
						y: 310,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 3,
						x: 313,
						y: 120,
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], '=', 0, 'E', "M"),
						]
					},
					'D': {
						type: 4,
						x: 356,
						y: 274,
						resource: 1,
						rules: [
							ChIfThenElseRule(
								ChFleetTypeRule(2, 'E'),
								ChRandomRule({ 'E': .75, 'F': .25 }),
								ChRandomRule({ 'F': .75, 'E': .25 })
							)
						]
					},
					'E': {
						type: 1,
						x: 453,
						y: 90,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>=', 3, 'L'),
							ChRandomRule({ 'G': .5, 'H': .5 })
						]
					},
					'F': {
						type: 1,
						x: 473,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>=', 3, 'K'),
							ChRandomRule({ 'G': .5, 'I': .5 })
						]
					},
					'G': {
						type: 1,
						x: 521,
						y: 207,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 629,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 628,
						y: 278,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 599,
						y: 208,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 584,
						y: 333,
						end: true
					},
					'L': {
						type: 3,
						x: 635,
						y: 80,
						end: true
					},
					'M': {
						type: 3,
						x: 182,
						y: 108,
						end: true
					},
				}
			}
		}
	},
	30: {
		name: 'Spring 2015',
		date: '2015-04-28',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/Hjh3Gbj.png',
		bannerImgAlt: 'http://i.imgur.com/3NvBtqp.png',
		disableMore: { ships: [332,441,445] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Begin Preparation, Operation No.11!',
				fleetTypes: [0],
				bgmMap: 42,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 8,
				maphp: {
					3: { 1: 440 },
					2: { 1: 440 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				mapInfo: 'You can only sortie CLs and DDs',
				nodes: {
					'Start': {
						type: 0,
						x: 663,
						y: 264,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 591,
						y: 214,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 482,
						y: 246,
						rules: [
							ChSelectRouteRule(['C','D'])
						]
					},
					'C': {
						type: 1,
						x: 395,
						y: 145,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '>=', 4, 'E'),
							ChLOSRule({ 15: 'H', 14: 'E' })
						]
					},
					'D': {
						type: 1,
						x: 355,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 3,
						x: 274,
						y: 102,
						end: true
					},
					'F': {
						type: 1,
						x: 208,
						y: 287,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRule(['CL'], '>=', 5, 'G'),
							ChLOSRule({ 15: 'H', 14: 'G' })
						]
					},
					'G': {
						type: 3,
						x: 129,
						y: 233,
						end: true
					},
					'H': {
						type: 1,
						x: 232,
						y: 185,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: '2nd Curry Ocean Operation',
				fleetTypes: [1,2],
				bgmMap: 42,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 11,
				maphp: {
					3: { 1: 1620 },
					2: { 1: 1620 },
					1: { 1: 1620 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				reward: { ships: [332], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 599,
						y: 316,
						rules: [
							ChFleetTypeRule(2, 'A', 'C'),
						]
					},
					'A': {
						type: 1,
						x: 645,
						y: 217,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 509,
						y: 170,
						rules: [
							ChSelectRouteRule(['D','E'])
						]
					},
					'C': {
						type: 3,
						x: 491,
						y: 287,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 430,
						y: 97,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 382,
						y: 225,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 3,
						x: 370,
						y: 310,
						rules: [
							ChSelectRouteRule(['E','H'])
						]
					},
					'G': {
						type: 1,
						x: 325,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 3: 'K', 0: 'I' })
						]
					},
					'H': {
						type: 4,
						x: 245,
						y: 320,
						resource: 1,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 3,
						x: 240,
						y: 91,
						end: true
					},
					'J': {
						type: 1,
						x: 186,
						y: 284,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'K': {
						type: 1,
						x: 191,
						y: 194,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Disruption of the Bay of Bagel Trade Route',
				fleetTypes: [0],
				bgmMap: 42,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 10,
				maphp: {
					3: { 1: 910 },
					2: { 1: 910 },
					1: { 1: 845 },
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 130,
				},
				giveLock: 1,
				checkLock: [2,3],
				nodes: {
					'Start': {
						type: 0,
						x: 660,
						y: 243,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 5, 'A'),
							ChShipTypeRoutingRule(['aBB', 'CA', 'CAV'], '>=', 4, 'A'),
							ChShipTypeRoutingRule(['CA', 'CAV'], '>=', 3, 'A'),
							ChRandomRule({ 'A': 0.5, 'B': 0.5 })
						]
					},
					'A': {
						type: 3,
						x: 561,
						y: 152,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 518,
						y: 322,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 486,
						y: 230,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 465,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 376,
						y: 98,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChLOSRule({ 18: 'J', 15: 'G' })
						]
					},
					'F': {
						type: 3,
						x: 364,
						y: 286,
						rules: [
							ChSelectRouteRule(['D','H'])
						]
					},
					'G': {
						type: 3,
						x: 304,
						y: 191,
						end: true
					},
					'H': {
						type: 1,
						x: 215,
						y: 320,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 174,
						y: 200,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['3'],
						},
						rules: [
							ChLOSRule({ 18: 'J', 15: 'G' })
						]
					},
					'J': {
						type: 1,
						x: 253,
						y: 94,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Decisive battle! Ri-Ranka Island Tactical Operation',
				fleetTypes: [1,2],
				bgmMap: 42,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 13,
				maphp: {
					3: { 1: 3200 },
					2: { 1: 3200 },
					1: { 1: 2900 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 2,
				checkLock: [1,3],
				reward: { ships: [441], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 661,
						y: 213,
						rules: [
							ChFleetTypeRule(2, 'A', 'B')
						]
					},
					'A': {
						type: 1,
						x: 533,
						y: 127,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['SS', 'SSV'], '>', 0, 'D', 'C'),
						]
					},
					'B': {
						type: 1,
						x: 522,
						y: 305,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 480,
						y: 220,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 3,
						x: 456,
						y: 79,
						end: true
					},
					'E': {
						type: 1,
						x: 441,
						y: 155,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['SS', 'SSV'], '>', 0, 'G'),
							ChLOSRule({ 3: 'M', 0: 'G' })
						]
					},
					'F': {
						type: 3,
						x: 379,
						y: 280,
						rules: [
							ChSelectRouteRule(['E','I'])
						]
					},
					'G': {
						type: 1,
						x: 370,
						y: 126,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						end: true
					},
					'H': {
						type: 3,
						x: 269,
						y: 248,
						rules: [
							ChSelectRouteRule(['J','M'])
						]
					},
					'I': {
						type: 1,
						x: 246,
						y: 331,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 2,
						x: 208,
						y: 153,
						resource: 1,
						amount: [55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150],
						end: true
					},
					'K': {
						type: 1,
						x: 126,
						y: 254,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 3, 'H'),
							ChLOSRule({ 3: 'J', 0: 'L' })
						]
					},
					'L': {
						type: 3,
						x: 82,
						y: 167,
						end: true
					},
					'M': {
						type: 1,
						x: 339,
						y: 176,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Raid on Apricot Atoll Anchorage',
				fleetTypes: [0],
				bgmMap: 43,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				maphp: {
					3: { 1: 2410 },
					2: { 1: 2410 },
					1: { 1: 2110 },
				},
				finalhp: {
					3: 430,
					2: 430,
					1: 430,
				},
				giveLock: 3,
				checkLock: [1,2],
				nodes: {
					'Start': {
						type: 0,
						x: 640,
						y: 114,
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['SS', 'SSV', 'aBB'], '<=', 0, 'B'),
								ChRandomRule({ 'B': .75, 'A' : .25 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['FBB', 'BB', 'BBV'], '>', 0, 'A'),
								ChRandomRule({ 'B': .25, 'A' : .75 }),
								ChRandomRule({ 'B': .5, 'A' : .5 })
							),
						]
					},
					'A': {
						type: 3,
						x: 604,
						y: 250,
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'D'),
							ChShipHistoricalRoutingRule('Mogami and Mikuma', [70, 120], ">=", 2, 'D'),
							ChShipHistoricalRoutingRule('Suzuya and Kumano', [124, 125], ">=", 2, 'D'),
							ChShipHistoricalRoutingRule('Yura, Choukai and Ryuujou', [23, 69, 76], ">=", 2, 'D'),
							ChShipHistoricalRoutingRule('Fubuki and Sendai', [9, 54], ">=", 2, 'D', 'C'),
						]
					},
					'B': {
						type: 4,
						x: 508,
						y: 114,
						resource: 1,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 488,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 446,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Mogami and Mikuma', [70, 120], ">=", 2, 'G'),
							ChShipHistoricalRoutingRule('Suzuya and Kumano', [124, 125], ">=", 2, 'G'),
							ChShipHistoricalRoutingRule('Yura, Choukai and Ryuujou', [23, 69, 76], ">=", 2, 'G'),
							ChShipHistoricalRoutingRule('Fubuki and Sendai', [9, 54], ">=", 2, 'G'),
							ChShipHistoricalRoutingRule('Akagi, Souryuu, Hiryuu', [83, 90, 91], ">=", 3, 'G', 'F'),
						]
					},
					'E': {
						type: 3,
						x: 393,
						y: 325,
						end: true
					},
					'F': {
						type: 1,
						x: 365,
						y: 247,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChLOSRule({ 3: 'H', 0: 'E' })
						]
					},
					'G': {
						type: 2,
						x: 333,
						y: 135,
						resource: 1,
						amount: [50,100,150],
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 3,
						x: 246,
						y: 227,
						rules: [
							ChSelectRouteRule(['I','K'])
						]
					},
					'I': {
						type: 1,
						x: 243,
						y: 337,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 5, 'E'),
							ChShipTypeRoutingRule(['BBV'], '>=', 3, 'E'),
							ChLOSRule({ 3: 'N', 0: 'E' })
						]
					},
					'J': {
						type: 2,
						x: 181,
						y: 72,
						resource: 2,
						amount: [70,100,135],
						end: true
					},
					'K': {
						type: 4,
						x: 167,
						y: 186,
						resource: 1,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 111,
						y: 215,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'J'),
							ChShipTypeRoutingRule(['aBB', 'CV'], '>=', 3, 'J'),
							ChLOSRule({ 3: 'N', 0: 'M' })
						]
					},
					'M': {
						type: 3,
						x: 105,
						y: 111,
						end: true
					},
					'N': {
						type: 1,
						x: 155,
						y: 290,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Relentless Operation! Across the Stebian Sea',
				fleetTypes: [1,2],
				bgmMap: 43,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 15,
				maphp: {
					3: { 1: 3300 },
					2: { 1: 3030 },
					1: { 1: 3030 },
				},
				finalhp: {
					3: 500,
					2: 415,
					1: 415,
				},
				reward: {
					ships: [445],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 489,
						y: 113,
						rules: [
							ChFleetTypeRule(1, 'D'),
							ChSpeedRule('>=', 10, 'B', 'F')
						]
					},
					'A': {
						type: 4,
						x: 638,
						y: 247,
						resource: 1,
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '<', 3, 'E', 'C'),
						]
					},
					'B': {
						type: 3,
						x: 612,
						y: 163,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'C': {
						type: 3,
						x: 593,
						y: 324,
						end: true
					},
					'D': {
						type: 3,
						x: 538,
						y: 233,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 456,
						y: 302,
						rules: [
							ChSelectRouteRule(['H','J'])
						]
					},
					'F': {
						type: 3,
						x: 423,
						y: 213,
						rules: [
							ChSelectRouteRule(['G','H'])
						]
					},
					'G': {
						type: 1,
						x: 332,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 3, 'L'),
							ChLOSRule({ 3: 'I', 0: 'L' })
						]
					},
					'H': {
						type: 1,
						x: 318,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 1,
						x: 247,
						y: 183,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'J': {
						type: 1,
						x: 226,
						y: 331,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'K': {
						type: 1,
						x: 209,
						y: 239,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 3,
						x: 199,
						y: 84,
						end: true
					},
					'M': {
						type: 1,
						x: 144,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['SS', 'SSV'], ">", 0, 'L'),
								ChRandomRule({ '': .5, 'L': .5 }),
							),
							ChLOSRule({ 3: 'O', 0: 'L' })
						]
					},
					'N': {
						type: 1,
						x: 118,
						y: 253,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'O': {
						type: 1,
						x: 76,
						y: 179,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	31: {
		name: 'Summer 2015',
		date: '2015-08-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/2qArUXu.png',
		bannerImgAlt: 'http://i.imgur.com/rB0Q7Z6.png',
		disableMore: { ships: [459,460,443,422] },
		overrideStats: {
			1628: { AR: 273 },
			1629: { AR: 303 },
			1630: { AR: 333 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation for Second Operation SN!',
				fleetTypes: [0],
				bgmMap: 45,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 750 },
					2: { 1: 750 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 150,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				additionalChecks: function(ships,errors) {
					if (!ships.CL) errors.push('Min 1 CL');
					if (ships.DD < 2) errors.push('Min 2 DD');
				},
				mapInfo: 'You need atleast 1 CL and 2 DD to sortie to this map',
				nodes: {
					'Start': {
						type: 0,
						x: 418,
						y: 144,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A':{
						type: 1,
						x: 495,
						y: 208,
						rules: [
							ChShipTypeRoutingRule(['CL'], ">=", 2, 'F'),
							ChShipTypeRoutingRule(['SS','SSV'], ">", 0, 'F'),
							ChShipCountRoutingRule('<', 6, 'F'),
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Kikuzuki', [30], ">=", 1, 'D'),
								ChShipTypeRoutingRule(['aBB'], "<=", 1, 'D'),
								ChShipTypeRoutingRule(['aCV'], "=", 0, 'D'),
							], 'AND', 'D'),
							ChShipTypeRoutingRule(['aCV'], ">", 0, 'C'),
							ChShipTypeRoutingRule(['aBB'], ">", 0, 'B'),
							ChShipTypeRoutingRule(['LHA'], ">", 0, 'D'),
							ChShipTypeRoutingRule(['AV'], ">=", 2, 'D'),
							ChRandomRule({ 'B': .5, 'D': .5 })
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'B':{
						type: 1,
						x: 507,
						y: 301,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						],
					},
					'C':{
						type: 1,
						x: 585,
						y: 133,
						rules: [
							ChFixedRoutingRule('E')
						],
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
						},
					},
					'D':{
						type: 2,
						x: 582,
						y: 268,
						resource: 2,
						amount: [15,45],
						rules: [
							ChFixedRoutingRule('Z')
						],
					},
					'E':{
						type: 1,
						x: 647,
						y: 165,
						rules: [
							ChFixedRoutingRule('Z')
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'F':{
						type: 1,
						x: 380,
						y: 299,
						rules: [
							ChFixedRoutingRule('G')
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
					},
					'G':{
						type: 2,
						x: 247,
						y: 279,
						resource: 1,
						amount: [25,75],
						end: true,
					},
					'Z':{
						type: 1,
						x: 654,
						y: 301,
						boss: true,
						end: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy 1'],
						},
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Combined Fleet, to the Solomon Sea!',
				fleetTypes: [1,2],
				bgmMap: 45,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 1050 },
					2: { 1: 1050 },
					1: { 1: 1050 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				reward: { ships: [459], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 169,
						y: 111,
						rules: [
							ChFixedRoutingRule('A')
						],
					},
					'A': {
						type: 1,
						x: 264,
						y: 181,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'C';
							return 'B';
						},
						rules: [
							ChFleetTypeRule(1, 'C', 'B'),
						],
					},
					'B': {
						type: 1,
						x: 316,
						y: 241,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['SSV', 'SS'], '>', 0, 'K'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 3, 'D', 'E'),
						],
					},
					'C': {
						type: 3,
						x: 336,
						y: 123,
						rules: [
							ChSelectRouteRule(['F','I'])
						]
					},
					'D': {
						type: 1,
						x: 375,
						y: 319,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 430,
						y: 278,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 445,
						y: 170,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 462,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Z')
						]
					},
					'H': {
						type: 1,
						x: 533,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({ 3:'Z', 0:'L' })
						]
					},
					'I': {
						type: 4,
						x: 548,
						y: 101,
						resource: 1,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 619,
						y: 184,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChLOSRule({ 3:'H', 0:'L' })
						]
					},
					'K': {
						type: 3,
						x: 233,
						y: 295,
						end: true,
					},
					'L': {
						type: 3,
						x: 657,
						y: 292,
						end: true,
					},
					'Z': {
						type: 1,
						x: 513,
						y: 327,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						boss: true,
						end: true,
					},

				},
			},
			3: {
				name: 'E-3',
				nameT: 'Clash! Second Southern Pacific Ocean Battle',
				fleetTypes: [1,2],
				bgmMap: 45,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 3,
				bossnode: 26,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 164,
						y: 103,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 239,
						y: 144,
						rules: [
							ChSelectRouteRule(['B','C'])
						]
					},
					'B': {
						type: 1,
						x: 286,
						y: 219,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 330,
						y: 130,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], ">=", 3, 'D'),
							ChShipTypeRoutingRule(['CLT'], ">=", 2, 'D'),
							ChShipTypeRoutingRule(['SS','SSV'], ">", 0, 'D'),
							ChShipTypeRoutingRule(['aBB','CV','CVB'], ">", 4, 'D', 'E'),
						]
					},
					'D': {
						type: 1,
						x: 402,
						y: 228,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], ">=", 4, 'E'),
							ChShipTypeRoutingRule(['CV', 'CVB'], ">=", 3, 'E'),
							ChShipTypeRoutingRule(['CLT'], ">=", 2, 'E'),
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'X'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], "<=", 2, 'X'),
							], 'AND', 'X'),
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], ">", 0, 'X', 'F'),
						]
					},
					'E': {
						type: 1,
						x: 436,
						y: 99,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 3,
						x: 487,
						y: 303,
						rules: [
							ChSelectRouteRule(['G','I'])
						]
					},
					'G': {
						type: 1,
						x: 488,
						y: 200,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChLOSRule({3:'Z',0:'H'})
						]
					},
					'H': {
						type: 1,
						x: 557,
						y: 120,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({3:'Z',0:'J'})
						]
					},
					'I': {
						type: 1,
						x: 588,
						y: 295,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Z')
						]
					},
					'J': {
						type: 3,
						x: 650,
						y: 104,
						end: true,
					},
					'X': {
						type: 1,
						x: 360,
						y: 329,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						end: true,
					},
					'Z': {
						type: 1,
						x: 641,
						y: 214,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Charge into the Strait! Destroy the Enemy Airfield!',
				fleetTypes: [0],
				bgmMap: 45,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 22,
				bgmNB: 5,
				bossnode: 26,
				maphp: {
					3: { 1: 3500 },
					2: { 1: 3500 },
					1: { 1: 3500 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				reward: { ships: [460], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 135,
						y: 97,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>', 4, 'A'),

							ChShipHistoricalRoutingRule('Kongou and Haruna', [78, 79], ">=", 2, 'B'),

							ChShipHistoricalRoutingRule('Hiei and Kirishima', [86, 85], ">=", 2, 'B'),
							ChShipHistoricalRoutingRule('Hiei and Ayanami', [86, 13], ">=", 2, 'B'),

							ChShipHistoricalRoutingRule('Yuudachi and Akatsuki', [45, 34], ">=", 2, 'B'),
							ChShipHistoricalRoutingRule('Yuudachi and Harusame', [45, 405], ">=", 2, 'B'),

							ChShipHistoricalRoutingRule('Fubuki and Hatsuyuki', [9, 32], ">=", 2, 'B'),
							ChShipHistoricalRoutingRule('Fubuki and Furutaka', [9, 59], ">=", 2, 'B'),

							ChShipHistoricalRoutingRule('Furutaka, Choukai and Kako', [59, 69, 60], ">=", 3, 'B'),

							ChDefaultRouteRule('A')
						]
					},
					'A': {
						type: 1,
						x: 136,
						y: 211,
						subonly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 206,
						y: 149,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 208,
						y: 264,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 3,
						x: 278,
						y: 189,
						rules: [
							ChSelectRouteRule(['E','F'])
						]
					},
					'E': {
						type: 1,
						x: 384,
						y: 239,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 403,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Ryuujou', [76], ">=", 1, 'H'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'H')
							], "AND", 'H'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 3, 'I'),
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'H'),
							ChDefaultRouteRule('I')
						]
					},
					'G': {
						type: 1,
						x: 437,
						y: 265,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'K'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'K', 'Z'),
						]
					},
					'H': {
						type: 1,
						x: 530,
						y: 209,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						rules: [
							ChLOSRule({3:'Z',0:'L'})
						]
					},
					'I': {
						type: 4,
						x: 511,
						y: 97,
						resource: 1,
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'H'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 4, 'J'),
							ChDefaultRouteRule('H')
						]
					},
					'J': {
						type: 1,
						x: 649,
						y: 180,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'L', 'H'),
						]
					},
					'K': {
						type: 3,
						x: 388,
						y: 325,
						end: true,
					},
					'L': {
						type: 3,
						x: 672,
						y: 259,
						end: true,
					},
					'Z': {
						type: 1,
						x: 501,
						y: 306,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Hard Battle! Western Region Deployment Fleet',
				fleetTypes: [0],
				bgmMap: 48,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 40,
				bgmNB: 40,
				bossnode: 26,
				maphp: {
					3: { 1: 2450 },
					2: { 1: 2450 },
					1: { 1: 2450 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				reward: { ships: [443], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 608,
						y: 243,
						rules: [
							ChMultipleRulesRule([
								ChShipIdsRoutingRule([445], '>=', 1, 'B'),
								ChShipTypeRoutingRule(['DD'], '>', 0, 'B'),
							], 'AND', 'B'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '>', 0, 'B'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'B'),
							], 'AND', 'B'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CAV'], '>', 0, 'B'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'B'),
							], 'AND', 'B'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'B', 'A'),
						]
					},
					'A': {
						type: 1,
						x: 530,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 3,
						x: 506,
						y: 188,
						rules: [
							ChSelectRouteRule(['C','E'])
						]
					},
					'C': {
						type: 1,
						x: 456,
						y: 314,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 2,
						x: 408,
						y: 224,
						resource: 1,
						amount: [0,0],
						rules: [
							ChShipIdsRoutingRule([445], '>=', 1, 'F'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CAV'], '>', 0, 'F'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'F'),
							], 'AND', 'F'),
							ChRandomRule({ F : 0.5, H: 0.5}),
						]
					},
					'E': {
						type: 1,
						x: 391,
						y: 111,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipIdsRoutingRule([445], '>=', 1, 'D'),
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'G'),
							ChShipTypeRoutingRule(['SS','SSV'], '>=', 4, 'L'),
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'G'),
							ChShipTypeRoutingRule(['DD'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['SS','SSV'], '>', 0, 'G'),
							ChDefaultRouteRule('D'),
						]
					},
					'F': {
						type: 1,
						x: 349,
						y: 331,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 332,
						y: 167,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 318,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 2,
						x: 264,
						y: 316,
						resource: 1,
						amount: [0,0],
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 232,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShowCompass(ChFixedRoutingRule('K'))
						]
					},
					'K': {
						type: 1,
						x: 129,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'M';
							if (ships.DD) return 'Z';
							return 'M';
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'M'),
							ChShipTypeRoutingRule(['DD'], '>', 0, 'Z'),
							ChDefaultRouteRule('M')
						]
					},
					'L': {
						type: 3,
						x: 469,
						y: 76,
						end: true,
					},
					'M': {
						type: 3,
						x: 167,
						y: 194,
						end: true,
					},
					'Z': {
						type: 1,
						x: 82,
						y: 172,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counterattack! Enter the FS Region',
				fleetTypes: [1,2],
				bgmMap: 48,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2800 },
					2: { 1: 2800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 143,
						rules: [
							ChFleetTypeRule(2, 'A'),
							ChShipHistoricalRoutingRule('Ayanami and Yuudachi', [13, 45], ">=", 2, 'A'),
							ChShipHistoricalRoutingRule('Fubuki and Furutaka', [9, 59], ">=", 2, 'A'),
							ChShipHistoricalRoutingRule('Hiei and Kirishima', [86, 85], ">=", 2, 'A', 'C'),
						]
					},
					'A': {
						type: 1,
						x: 181,
						y: 198,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'B'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 3, 'B'),
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '=', 0, 'B'),
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 4, 'B'),
							], 'AND', 'B', 'D')
						]
					},
					'B': {
						type: 1,
						x: 197,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 206,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>', 0, 'O', 'E'),
						]
					},
					'D': {
						type: 1,
						x: 238,
						y: 227,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'F', 'E'),
						]
					},
					'E': {
						type: 1,
						x: 261,
						y: 157,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 290,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'G': {
						type: 3,
						x: 341,
						y: 161,
						rules: [
							ChSelectRouteRule(['F','H'])
						]
					},
					'H': {
						type: 1,
						x: 394,
						y: 88,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 3,
						x: 417,
						y: 306,
						rules: [
							ChSelectRouteRule(['K','M'])
						]
					},
					'K': {
						type: 1,
						x: 491,
						y: 197,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'L'),
							ChFleetTypeRule(2, 'L', 'Z')
						]
					},
					'L': {
						type: 1,
						x: 523,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'P', 'Z'),
						]
					},
					'M': {
						type: 1,
						x: 550,
						y: 267,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'N', 'Z'),
						]
					},
					'N': {
						type: 3,
						x: 634,
						y: 320,
						end: true,
					},
					'O': {
						type: 3,
						x: 307,
						y: 83,
						end: true,
					},
					'P': {
						type: 3,
						x: 649,
						y: 87,
						end: true,
					},
					'Z': {
						type: 1,
						x: 643,
						y: 207,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			7: {
				name: 'E-7',
				nameT: 'Operation FS',
				fleetTypes: [1,2],
				bgmMap: 48,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				checkLock: [4],
				debuffRules: new ChGimmickList("debuff", null, 7, [
					new ChGimmick({
						node: 'C',
						timesRequiredPerDiff: {
							4: 1,
							1: 1,
							2: 1,
							3: 1,
						},
						shouldCountBeIncreased: () => {
							let ships = FLEETS2[0].ships;
							let found = true;

							for (var i=0; i<ships.length; i++) {
								if ([1513,1526,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}

							return found;
						},
						getDescription: (diff) => {
							return 'No Wa-class remaining after the battle'
						} 
					}),
					new ChGimmick({
						node: 'X',
						timesRequiredPerDiff: {
							4: 1,
							1: 1,
							2: 1,
							3: 1,
						},
						shouldCountBeIncreased: () => {
							let ships = FLEETS2[0].ships;
							let found = true;

							for (var i=0; i<ships.length; i++) {
								if ([1513,1526,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}

							return found;
						},
						getDescription: (diff) => {
							return 'No Wa-class remaining after the battle'
						} 
					}),
					new ChGimmick({
						node: 'Y',
						timesRequiredPerDiff: {
							4: 1,
							1: 1,
							2: 1,
							3: 1,
						},
						shouldCountBeIncreased: () => {
							let ships = FLEETS2[0].ships;
							let found = true;

							for (var i=0; i<ships.length; i++) {
								if ([1513,1526,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}

							return found ? 1 : 0;;
						},
						getDescription: (diff) => {
							return 'No Wa-class remaining after the battle'
						} 
					}),
				]),
				reward: {
					'ships': [422],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 162,
						y: 112,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['LHA'], '>', 0, 'B'),
								ChShipTypeRoutingRule(['aCV'], '>', 0, 'B'),
							], 'AND', 'B'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'B'),
							ChIfThenElseRule(
								ChFleetTypeRule(2, 'B'),
								ChRandomRule({ 'B': .75, 'E': .25 }),
								ChRandomRule({ 'B': .25, 'E': .75 })
							)
						]
					},
					'A': {
						type: 2,
						x: 89,
						y: 276,
						resource: 2,
						amount: [25,65],
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 144,
						y: 210,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'A';
							if (ships.escort.CLT) return 'A';
							return (Math.random() < .8)? 'X' : 'A';
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'A'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>', 0, 'A'),
							ChRandomRule({ 'X': .8, 'A': .2 })
						]
					},
					'C': {
						type: 1,
						x: 173,
						y: 326,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
					},
					'D': {
						type: 2,
						x: 242,
						y: 335,
						resource: 2,
						amount: [25,105],
						rules: [
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'H'),
							ChShipIdsRoutingRule([445], '>=', 1, 'H'),
							ChRandomRule({ 'F': .5, 'H': .5 })
						]
					},
					'E': {
						type: 1,
						x: 270,
						y: 114,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 308,
						y: 234,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 3,
						x: 367,
						y: 152,
						rules: [
							ChSelectRouteRule(['I','J'])
						]
					},
					'H': {
						type: 3,
						x: 399,
						y: 303,
						rules: [
							ChSelectRouteRule(['J','Y'])
						]
					},
					'I': {
						type: 1,
						x: 460,
						y: 104,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 466,
						y: 196,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChIfThenElseRule(
								ChFleetTypeRule(2, 'L'),
								ChRandomRule({ L : 0.75, Y: 0.25}),
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 4, 'M'),
								ChRandomRule({ L : 0.2, M: 0.8}),
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'M'),
								ChRandomRule({ Y : 0.4, M: 0.6}),
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['CV', 'CVB'], '=', 2, 'M'),
								ChRandomRule({ Y : 0.15, M: 0.85}),
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'Y'),
								ChRandomRule({ Y : 0.5, '': 0.5 }),
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['CV', 'CVB'], '=', 1, 'M'),
								ChRandomRule({ L : 0.15, M: 0.85 }),
							),
						]
					},
					'K': {
						type: 1,
						x: 535,
						y: 94,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({3:'M',0:'P'})
						]
					},
					'L': {
						type: 1,
						x: 581,
						y: 240,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>', 0, 'O', 'Z'),
						]
					},
					'M': {
						type: 1,
						x: 619,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>', 0, 'N', 'Z'),
						]
					},
					'N': {
						type: 3,
						x: 665,
						y: 130,
						end: true,
					},
					'O': {
						type: 3,
						x: 597,
						y: 321,
						end: true,
					},
					'P': {
						type: 3,
						x: 612,
						y: 90,
						end: true,
					},
					'X': {
						type: 1,
						x: 212,
						y: 282,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						],
					},
					'Y': {
						type: 1,
						x: 484,
						y: 314,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>', 0, 'O', 'L'),
						],
					},
					'Z': {
						type: 1,
						x: 647,
						y: 241,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						debuffAmount: 100,
					},
				},
			},
		}
	},
	32: {
		name: 'Fall 2015',
		date: '2015-11-18',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'https://i.imgur.com/46s7gmq.png',
		bannerImgAlt: 'https://i.imgur.com/JWmN8EI.png',
		ptImpSpecial: 2,
		transportCalc: transportCalcFall15,
		disableMore: { ships: [465,455] },
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Transport operation! Sweep up the front',
				fleetTypes: [1,2],
				bgmMap: 51,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 10,
				maphp: {
					3: { 1: 440},
					2: { 1: 440},
					1: { 1: 400},
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 80,
				},
				giveLock: 2,
				checkLock: [3],
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 195,
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['aBB'], '>=', 2, 'A'),
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], '>=', 2, 'A', 'B'),
						]
					},
					'A': {
						type: 1,
						x: 164,
						y: 136,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 3,
						x: 225,
						y: 244,
						rules: [
							ChSelectRouteRule(['C','E'])
						]
					},
					'C': {
						type: 1,
						x: 253,
						y: 135,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 2,
						x: 348,
						y: 89,
						resource: 2,
						amount: [50],
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 370,
						y: 283,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'F'),
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 4, 'F'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'F', 'H'),
						]
					},
					'F': {
						type: 1,
						x: 458,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 1, 'H'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'H'),
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 3, 'H', 'J'),
						]
					},
					'G': {
						type: 3,
						x: 500,
						y: 321,
						end: true,
					},
					'H': {
						type: 1,
						x: 504,
						y: 234,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 3,
						x: 558,
						y: 97,
						end: true,
					},
					'J': {
						type: 1,
						x: 616,
						y: 169,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true,
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Cornehaikara',
				fleetTypes: [0],
				bgmMap: 51,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 11,
				transport: 'J',
				maphp: {
					3: { 1: 320},
					2: { 1: 200},
					1: { 1: 100},
				},
				giveLock: 2,
				checkLock: [3],
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < ships.total-1) errors.push('Non-flag must be DD');
				},
				mapInfo: 'Flagship must be CL<br>Other ships must be DDs',
				nodes: {
					'Start': {
						type: 0,
						x: 175,
						y: 176,
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Sendai-class', [54, 55, 56], ">=", 1, 'A'),
								ChShipHistoricalRoutingRule('Satsuki, Mikazuki, Yukikaze and Hamakaze', [28, 7, 20, 170], ">=", 2, 'A'),
							], 'AND', 'A', 'B')
						]
					},
					'A': {
						type: 3,
						x: 284,
						y: 223,
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Sendai-class', [54, 55, 56], ">=", 1, 'D'),
								ChShipHistoricalRoutingRule('Satsuki, Mikazuki, Yukikaze and Hamakaze', [28, 7, 20, 170], ">=", 2, 'D'),
							], 'AND', 'D', 'C')
						]
					},
					'B': {
						type: 1,
						x: 304,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 1,
						x: 364,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'D': {
						type: 1,
						x: 365,
						y: 186,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Sendai-class', [54, 55, 56], ">=", 1, 'F'),
								ChShipHistoricalRoutingRule('Satsuki, Mikazuki, Yukikaze and Hamakaze', [28, 7, 20, 170], ">=", 4, 'F'),
							], 'AND', 'F', 'E')
						]
					},
					'E': {
						type: 1,
						x: 399,
						y: 117,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 476,
						y: 192,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 498,
						y: 279,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 510,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Sendai-class', [54, 55, 56], ">=", 1, 'I'),
								ChShipHistoricalRoutingRule('Satsuki, Mikazuki, Yukikaze and Hamakaze', [28, 7, 20, 170], ">=", 2, 'I'),
							], 'AND', 'I'),
							ChRandomRule({ I: .5, F: .3, K: .2 })
						]
					},
					'I': {
						type: 3,
						x: 546,
						y: 266,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 2,
						x: 592,
						y: 257,
						resource: 0,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 1,
						x: 619,
						y: 158,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Weigh anchor! Maritime transport fleet',
				fleetTypes: [3],
				bgmMap: 51,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 800},
					2: { 1: 500},
					1: { 1: 300},
				},
				giveLock: 2,
				checkLock: [3],
				reward: { ships: [465], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 115,
						y: 215,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 241,
						y: 143,
						rules: [
							ChSelectRouteRule(['B','C'])
						]
					},
					'B': {
						type: 1,
						x: 243,
						y: 269,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 306,
						y: 195,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'E'),
							ChShipTypeRoutingRule(['AV'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'D'),
							ChRandomRule({ D:.5, E:.5})
						]
					},
					'D': {
						type: 1,
						x: 377,
						y: 161,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 388,
						y: 256,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 396,
						y: 320,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'G': {
						type: 2,
						x: 442,
						y: 262,
						resource: 0,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 483,
						y: 179,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChLOSRule({ 3: 'K', 0: 'J' })
						]
					},
					'I': {
						type: 3,
						x: 483,
						y: 252,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'J': {
						type: 3,
						x: 579,
						y: 145,
						end: true
					},
					'K': {
						type: 1,
						x: 618,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Western line! Carrier task force deployment',
				fleetTypes: [1,2,3],
				bgmMap: 42,
				bgmDN: 39,
				bgmNN: 39,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 15,
				maphp: {
					3: { 1: 680},
					2: { 1: 570},
					1: { 1: 440},
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 160,
				},
				giveLock: 3,
				checkLock: [2],
				debuffRules: new ChGimmickList("debuff", null, 4, [
					new ChGimmick({
						node: 'J',
						getDescription: (diff) => {
							return 'Sink the flagship of that node';
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						shouldCountBeIncreased: () => {
							return (FLEETS2[0].ships[0].HP <= 0)  ? 1 : 0;
						}
					}),
					new ChGimmick({
						node: 'M',
						getDescription: (diff) => {
							return 'Sink the flagship of that node';
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						shouldCountBeIncreased: () => {
							return (FLEETS2[0].ships[0].HP <= 0) ? 1 : 0;
						}
					}),
				]),
				nodes: {
					'Start': {
						type: 0,
						x: 625,
						y: 99,
						rules: [
							ChFleetTypeRule(1, 'A', 'D'),
						]
					},
					'A': {
						type: 3,
						x: 647,
						y: 234,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 563,
						y: 290,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipHistoricalRoutingRuleMainFleetOnly('Akitsushima', [445], ">=", 1, 'F'),
							ChShipTypeRoutingRule(['CT'], '>=', 2, 'F'),
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRuleMainFleetOnly('Hayasui', [460], ">=", 1, 'F'),
								ChShipTypeRoutingRule(['CT'], '>', 0, 'F'),
							], 'AND', 'F'),
							ChRandomRule({ 'F': .5, 'C': .5 }),
						]
					},
					'C': {
						type: 1,
						x: 535,
						y: 207,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 512,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 454,
						y: 204,
						rules: [
							ChSelectRouteRule(['F','G'])
						]
					},
					'F': {
						type: 1,
						x: 410,
						y: 312,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 399,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 1,
						x: 318,
						y: 173,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipHistoricalRoutingRuleMainFleetOnly('Italians', [443,441,442], ">=", 1, 'J'),
							ChRandomRule({ 'I': .5, 'J': .5 }),
						]
					},
					'I': {
						type: 1,
						x: 303,
						y: 297,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 273,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 3,
						x: 204,
						y: 246,
						rules: [
							ChSelectRouteRule(['M','N'])
						]
					},
					'L': {
						type: 3,
						x: 158,
						y: 116,
						end: true
					},
					'M': {
						type: 1,
						x: 122,
						y: 285,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'N': {
						type: 1,
						x: 119,
						y: 180,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'O', 0: 'L' })
						]
					},
					'O': {
						type: 1,
						x: 76,
						y: 112,
						subonly: true,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Overcome! Nightbattle of Vanilla Gulf!',
				fleetTypes: [0],
				bgmMap: 51,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 55,
				bgmNB: 55,
				bossnode: 14,
				parts: {
					1: {
						maphp: {
							3: { 1: 360},
							2: { 1: 240},
							1: { 1: 120},
						},
						transport: 'K',
					},
					2: {
						maphp: {
							3: { 1: 1060},
							2: { 1: 1000},
							1: { 1: 720},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < 1) errors.push('Min 1 DD');
					if (ships.CL > 2) errors.push('Max 2 CL');
					if (ships.CA + ships.CAV + ships.CLT + ships.CT > 1) errors.push('Max 1 CA, CAV, CLT, or CT');
					if (ships.CL + ships.DD + ships.CA + ships.CAV + ships.CLT + ships.CT < ships.total) errors.push('Only DD, CL, CA, CAV, CLT, CT');
				},
				mapInfo: 'Flagship must be CL<br>Min 1 DD<br>Max 2 CL<br>Max 1 CA, CAV, CLT, or CT<br>Only DD, CL, CA, CAV, CLT, CT allowed',
				debuffRules: new ChGimmickList("debuff", 2, 5, [
					new ChGimmick({
						getDescription: (diff) => {
							return 'Sink 15 pt imps';
						},
						node: 'MapWide',
						timesRequiredPerDiff: {
							1: 15,
							2: 15,
							3: 15,
						},
						shouldCountBeIncreased: () => {
							let num = 0;

							for (var ship of FLEETS2[0].ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							
							return num;
						}
					})
				]),
				reward: {
					'ships': [455],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 193,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 257,
						y: 193,
						rules: [
							ChSelectRouteRule(['B','C'])
						]
					},
					'B': {
						type: 1,
						x: 294,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Shigure', [43], ">=", 1, 'E', 'D')
						]
					},
					'C': {
						type: 3,
						x: 333,
						y: 134,
						rules: [
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Shigure', [43], ">=", 1, 'G'),
								ChShipHistoricalRoutingRule('Sendai and Kawakaze', [54, 459], ">=", 2, 'G')
							], 'AND', 'G'),
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Shigure', [43], ">=", 1, 'E'),
								ChShipHistoricalRoutingRule('Sendai and Kawakaze', [54, 459], ">=", 1, 'E')
							], 'AND', 'E', 'F')
						]
					},
					'D': {
						type: 1,
						x: 366,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 384,
						y: 248,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 396,
						y: 83,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Shigure', [43], ">=", 1, 'G', 'I')
						]
					},
					'G': {
						type: 1,
						x: 459,
						y: 154,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 462,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 510,
						y: 117,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 512,
						y: 233,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 2,
						x: 606,
						y: 267,
						resource: 0,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 651,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'N', 0: 'M' })
						]
					},
					'M': {
						type: 3,
						x: 662,
						y: 158,
						end: true
					},
					'N': {
						type: 1,
						x: 604,
						y: 137,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	33: {
		name: 'Winter 2016',
		date: '2016-02-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/EOmqNW3.png',
		bannerImgAlt: 'http://i.imgur.com/6VkAYeA.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcFall15,
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
		},
		disableMore: { ships: [423,448] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation of "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 57,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 10,
				maphp: {
					3: { 1: 800},
					2: { 1: 650},
					1: { 1: 550},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.FBB) errors.push('Fleet must not contain CV(B), (F)BB');
				},
				mapInfo: 'Fleet must not contain CV(B), (F)BB',
				// Add a debuff to SS Hime added in a silent update by KC devs when the event was realeased
				// Source : https://kancolle.wikia.com/wiki/Winter_2016_Event#/E-1
				// Additional 22.1 damage for SS Hime with 110/130 armor and 16 damage for the 160 armor version.
				// will activate this 12 runs later to simulate "update"
				debuffRules: new ChGimmickList("debuff", null, 1, [
					new ChGimmick({
						getDescription: (diff) => {
							return 'Nothing to do<br>The debuff will activate itself after a while';
						},
						node: 'J',
						timesRequiredPerDiff: {
							1: 12,
							2: 12,
							3: 12,
						},
						shouldCountBeIncreased: () => {
							return 1;
						}
					})
				]),
				finalhp: {
					3: 160,
					2: 130,
					1: 110,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 221,
						y: 197,
						rules: [
							ChShipHistoricalRoutingRule('Kasumi', [49], ">=", 1, 'A'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'A'),
								ChRandomRule({ 'A': .5, 'B': .5})
							),
							ChDefaultRouteRule('B'),
						]
					},
					'A': {
						type: 1,
						x: 323,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'B': {
						type: 1,
						x: 340,
						subonly: true,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 3,
						x: 354,
						y: 331,
						end: true
					},
					'D': {
						type: 1,
						x: 420,
						y: 292,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						//Suppossed to be a LOS check (unknown values) and C is forced if >= 3CVL
						rules: [
							ChShipTypeRoutingRule(['CVL'], '>=', 3, 'C'),
							ChLOSRule({ 3: 'J', 0: 'C' })
						]
					},
					'E': {
						type: 3,
						x: 451,
						y: 151,
						rules: [
							ChSelectRouteRule(['F','G'])
						]
					},
					'F': {
						type: 1,
						x: 486,
						y: 228,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'G': {
						type: 1,
						x: 545,
						y: 124,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 554,
						raid: true,
						y: 296,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'I': {
						type: 1,
						x: 611,
						y: 211,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'J': {
						type: 1,
						x: 318,
						y: 283,
						subonly: true,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2'],
						},
						debuffAmount: { 1644: 22.1, 1645: 22.1, 1646: 16 },
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Sortie! "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 57,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 15,
				maphp: {
					3: { 1: 3000},
					2: { 1: 2830},
					1: { 1: 2780},
				},
				finalhp: {
					3: 600,
					2: 430,
					1: 380,
				},
				reward: { ships: [423], firstOnly: true },
				startCheckRule: [
					ChMultipleRulesRule([
						ChShipIdsRoutingRule([49, 425, 410, 64], '>=', 4, 'Start1'),
						ChShipTypeRoutingRule(['aBB', 'aCV', 'AO', 'LHA'], '=', 0, 'Start1'), 
					], 'AND', 'Start1'),
					ChMultipleRulesRule([
						ChShipTypeRoutingRule(['CL'], '>', 0, 'Start1'), 
						ChShipTypeRoutingRule(['CL'], '<=', 2, 'Start1'), 
						ChShipTypeRoutingRule(['DD'], '>=', 3, 'Start1'), 
						ChShipTypeRoutingRule(['CA','CAV','CLT'], '<=', 2, 'Start1'), 
						ChShipTypeRoutingRule(['aBB', 'aCV', 'AO', 'LHA'], '=', 0, 'Start1'), 
					], 'AND', 'Start1', 'Start2'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 64,
						y: 184,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 111,
						y: 267,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'A': {
						type: 1,
						x: 142,
						y: 97,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						rules : [
							ChShipHistoricalRoutingRule('Rei-Gō', [49, 425, 410, 64, 183], ">=", 4, 'E'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CA'], '=', 1, 'E'), 
								ChShipTypeRoutingRule(['CL'], '=', 1, 'E'), 
								ChShipTypeRoutingRule(['CLT'], '=', 1, 'E'), 
								ChShipTypeRoutingRule(['DD'], '=', 3, 'E'), 
							], 'AND', 'E'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['CA', 'CAV'], '>', 0, 'E'), 
								ChRandomRule({ 'E': .5, 'B': .5 })
							),
							ChDefaultRouteRule('B')
						]
					},
					'B': {
						type: 1,
						x: 193,
						y: 172,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 223,
						y: 318,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						rules : [
							ChShipIdsRoutingRule([131], '>=', 1, 'D'),
							ChShipIdsRoutingRule([143], '>=', 1, 'D'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'D'), 
							ChShipTypeRoutingRule(['aCV'], '>', 1, 'D'), 
							ChMultipleRulesRule([
								ChShipIdsRoutingRule([87], '>=', 1, 'G'),
								ChShipIdsRoutingRule([77], '>=', 1, 'G'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 4, 'G'), 
							], 'AND', 'G'),
							ChMultipleRulesRule([
								ChFlagshipIdRoutingRule(49, 'G'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 3, 'G'), 
							], 'AND', 'G'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 2, 'G'), 
							ChDefaultRouteRule('D')
						]
					},
					'D': {
						type: 1,
						x: 250,
						y: 251,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 3,
						x: 255,
						y: 97,
						rules: [
							ChSelectRouteRule(['I','F'])
						]
					},
					'F': {
						type: 1,
						x: 276,
						y: 179,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 330,
						y: 318,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'H': {
						type: 1,
						x: 346,
						y: 235,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						//Lack of information on wikis. What i've done : if reigo >= 4 -> J if NON reigo + kasumi flag -> J ELSE -> L
						rules: [
							ChShipHistoricalRoutingRule('Rei-Gō', [49, 425, 410, 64, 183], ">=", 4, 'J'),
							ChFlagshipIdRoutingRule(49, 'J', 'L'),
						]
					},
					'I': {
						type: 1,
						x: 342,
						y: 98,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 398,
						y: 169,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'K': {
						type: 1,
						x: 422,
						y: 319,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						rules : [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'L'), 
							ChShipTypeRoutingRule(['DD'], '<', 2, 'L'), 

							ChMultipleRulesRule([
								ChShipIdsRoutingRule([87], '>=', 1, 'N'),
								ChShipIdsRoutingRule([77], '>=', 1, 'N'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 3, 'N'), 
							], 'AND', 'N'),


							ChMultipleRulesRule([
								ChFlagshipIdRoutingRule(49, 'N'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 3, 'N'), 
							], 'AND', 'N'),

							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 2, 'N'), 
							ChDefaultRouteRule('L')
						]
					},
					'L': {
						type: 1,
						x: 433,
						y: 243,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 498,
						y: 180,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'N': {
						type: 1,
						x: 501,
						y: 302,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 546,
						y: 254,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						boss: true,
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'Operation Shou-Go 4',
				fleetTypes: [1,2,3],
				bgmMap: 57,
				bgmDN: 60,
				bgmNN: 60,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: [20,19],
				parts: {
					1: {
						currentBoss: 'S',
						fleetTypes: [3],
						maphp: {
							3: { 1: 500},
							2: { 1: 400},
							1: { 1: 300},
						},
						transport: 'G',
					},
					2: {
						currentBoss: 'T',
						fleetTypes: [1,2,3],
						maphp: {
							3: { 1: 2250},
							2: { 1: 1750},
							1: { 1: 1600},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				reward: {
					'ships': [448],
				},
				startCheckRule: [
					ChFleetTypeRule(3, 'Start1'),
					ChFleetTypeRule(1, 'Start2'),
					ChFleetTypeRule(2, 'Start3')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 65,
						y: 236,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 236,
						y: 266,
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'E'),
							ChShipTypeRoutingRuleMainFleetOnly(['CV'], '>=', 3, 'E'),
							ChShipTypeRoutingRule(['CV', 'CVL'], '>=', 4, 'E'),
							ChShipTypeRoutingRule(['CVB'], '>=', 1, 'E', 'F'),
						]
					},
					'Start3': {
						type: 0,
						x: 426,
						y: 93,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'A': {
						type: 1,
						x: 153,
						y: 197,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 215,
						y: 119,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChSpeedRule('>=', 10, 'D', 'C'),
						]
					},
					'C': {
						type: 1,
						x: 286,
						y: 161,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard 1', 'Hard 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 299,
						y: 87,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 330,
						y: 222,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 331,
						y: 310,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 2,
						x: 379,
						y: 88,
						resource: 0,
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'H': {
						type: 1,
						x: 405,
						y: 244,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 464,
						y: 318,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 3,
						x: 493,
						y: 147,
						rules: [
							ChSelectRouteRule(['K','M'])
						]
					},
					'K': {
						type: 1,
						x: 505,
						y: 226,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'L': {
						type: 1,
						x: 549,
						y: 276,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						compDiffF: {
							1: ['Easy 3'],
							2: ['Medium 4'],
							3: ['Hard 4'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['SS','SSV'], '>=', 1, 'O'),
							ChLOSRule({ 3: 'T', 0: 'O' })
						]
					},
					'M': {
						type: 1,
						x: 575,
						y: 114,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'N': {
						type: 1,
						x: 589,
						y: 217,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'T'),
								ChShipTypeRoutingRuleMainFleetOnly(['BB', 'BBV', 'CV', 'CVB'], '<=', '1', 'T'),
							], 'AND', 'T', 'Q')
						]
					},
					'O': {
						type: 3,
						x: 593,
						y: 327,
						end: true,
					},
					'P': {
						type: 1,
						x: 640,
						y: 152,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						rules: [
							ChSpeedRuleEscortOnly('<', 10, 'R', 'N'),
						]
					},
					'Q': {
						type: 1,
						x: 650,
						y: 210,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard'],
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'R': {
						type: 3,
						x: 654,
						y: 87,
						end: true,
					},
					'S': {
						type: 1,
						x: 405,
						y: 169,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
					},
					'T': {
						type: 1,
						x: 635,
						y: 291,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
					},
				}
			}
		}
	},
	34: {
		name: 'Spring 2016',
		date: '2016-05-02',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		lbasSlotCount: 12,
		lbasRangeMax: true,
		bannerImg: 'http://i.imgur.com/6zdOwyN.png',
		bannerImgAlt: 'http://i.imgur.com/8Di99lM.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
			1687: { HP: 550 },
			1688: { HP: 750 },
			1689: { HP: 850 },
		},
		disableMore: { ships: [471,449,440] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Secure the Frontline Naval Superiority!',
				fleetTypes: [1,2,3],
				bgmMap: 65,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 450 },
					2: { 1: 450 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 90,
					2: 90,
					1: 90,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 143,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'A': {
						type: 1,
						x: 165,
						y: 258,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 196,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 5, 'D', 'A'),
						]
					},
					'C': {
						type: 1,
						x: 264,
						y: 301,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 294,
						y: 104,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 352,
						y: 217,
						rules: [
							ChSelectRouteRule(['F','G'])
						]
					},
					'F': {
						type: 1,
						x: 436,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 462,
						y: 235,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'H', 0: 'K' })
						]
					},
					'H': {
						type: 1,
						x: 521,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 536,
						y: 103,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'J': {
						type: 1,
						x: 616,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 417,
						y: 319,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Land the Engineer Corps!',
				fleetTypes: [0],
				bgmMap: 65,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 1420 },
					1: { 1: 1370 },
				},
				finalhp: {
					3: 480,
					2: 480,
					1: 480,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 140,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>', 0, 'B'),
							ChShipTypeRoutingRule(['CVL'], '>', 1, 'B'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'B'),
							ChShipTypeRoutingRule(['CL'], '<', 1, 'B', 'A'),
						]
					},
					'A': {
						type: 1,
						x: 173,
						y: 210,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 225,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 246,
						y: 290,
						rules: [
							ChSelectRouteRule(['D','E'])
						]
					},
					'D': {
						type: 4,
						x: 332,
						y: 269,
						resource: 2,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 356,
						y: 166,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CLT'], '>=', 2, 'K'),
								ChShipTypeRoutingRule(['CL'], '<=', 0, 'K'),
								ChShipTypeRoutingRule(['DD'], '<=', 1, 'K'),
							], 'AND', 'K'),
							ChShipTypeRoutingRule(['aBB','CV','CVB'], '>', 1, 'K'),
							ChShipTypeRoutingRule(['DD'], '=', 6, 'K'),
							ChSpeedRule('<=', 5, 'F'),
							ChShipTypeRoutingRule(['aCV'], '>=', 2, 'F'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '>', 0, 'H'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'H'),
							], 'AND', 'H'),
							ChDefaultRouteRule('F')
						]
					},
					'F': {
						type: 1,
						x: 422,
						y: 330,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 1,
						x: 529,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'J', 0: 'L' })
						]
					},
					'H': {
						type: 3,
						x: 537,
						y: 113,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 611,
						y: 174,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'J': {
						type: 1,
						x: 446,
						y: 233,
						compDiff: {
							3: ['Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 393,
						y: 88,
						end: true
					},
					'L': {
						type: 3,
						x: 640,
						y: 269,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Construct a Front-line Air Base!',
				fleetTypes: [3],
				bgmMap: 65,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 550 },
					2: { 1: 420 },
					1: { 1: 310 },
				},
				giveLock: 2,
				checkLock: [1,3,4],
				reward: { ships: [471], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 228,
						y: 322,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'A': {
						type: 1,
						x: 92,
						y: 161,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 3,
						x: 130,
						y: 257,
						rules: [
							ChSpeedRule('>=', 10, 'D', 'A')
						]
					},
					'C': {
						type: 1,
						x: 177,
						y: 108,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 2, 'E', 'D')
						]
					},
					'D': {
						type: 1,
						x: 277,
						y: 218,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 285,
						y: 111,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'F': {
						type: 1,
						x: 350,
						y: 299,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 2,
						x: 391,
						y: 153,
						resource: 0,
						rules: [
							ChSpeedRule('<=', 5, 'I'),
							ChRandomRule({ H: .5, J: .5 })
						]
					},
					'H': {
						type: 1,
						x: 485,
						y: 279,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'J', 0: 'L' })
						]
					},
					'I': {
						type: 1,
						x: 497,
						y: 122,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 524,
						y: 198,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'K', 0: 'M' })
						]
					},
					'K': {
						type: 1,
						x: 618,
						y: 233,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 577,
						y: 318,
						end: true
					},
					'M': {
						type: 3,
						x: 629,
						y: 121,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Take-off! Land-based Air Force!',
				fleetTypes: [1,2],
				bgmMap: 65,
				bgmDN: 63,
				bgmNN: 63,
				bgmDB: 67,
				bgmNB: 67,
				bossnode: 11,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 370,
					2: 370,
					1: 370,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2')
				],
				lbas: 1,
				nodes: {
					'Start1': {
						type: 0,
						x: 86,
						y: 221,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 463,
						y: 328,
						rules: [
							ChShipTypeRoutingRule( ['aBB'], '>=', 3, 'C'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'C', 'G'),
						]
					},
					'A': {
						type: 1,
						x: 180,
						y: 165,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 267,
						y: 127,
						distance: 2,
						rules: [
							ChSelectRouteRule(['C','D'])
						]
					},
					'C': {
						type: 1,
						x: 372,
						y: 196,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>=', 2, 'H'),
							ChShipTypeRoutingRule(['CLT'], '>=', 3, 'H'),
							ChRandomRule({ H: .3, E: .7 })
						]
					},
					'D': {
						type: 1,
						x: 384,
						y: 96,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'E'),
							ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'E', 'F'),
						]				
					},
					'E': {
						type: 1,
						x: 461,
						y: 161,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 515,
						y: 95,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'K', 0: 'L' })
						]
					},
					'G': {
						type: 1,
						x: 556,
						y: 323,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'H'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '<=', 1, 'I'),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '=', 2, 'I'),
								ChRandomRule({ H: .4, I: .6 })
							),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '=', 3, 'I'),
								ChRandomRule({ H: .8, I: .2 })
							),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '>=', 4, 'H'),
						]
					},
					'H': {
						type: 1,
						x: 565,
						y: 237,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 635,
						y: 288,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 679,
						y: 223,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'K', 0: 'L' })
						]
					},
					'K': {
						type: 1,
						x: 651,
						y: 114,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 581,
						y: 166,
						distance: 4,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Aerial Extermination Battle of Rabaul',
				fleetTypes: [0],
				bgmMap: 66,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 67,
				bgmNB: 67,
				bgmLB: 62,
				bossnode: 13,
				maphp: {
					3: { 1: 4080 },
					2: { 1: 3960 },
					1: { 1: 3840 },
				},
				finalhp: {
					3: 680,
					2: 680,
					1: 640,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				lbas: 2,
				reward: { ships: [449], firstOnly: true },
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Medium 2','Medium 3','Easy 1'],
					},
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 140,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 216,
						y: 186,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'B'),
							ChShipTypeRoutingRule(['aBB'], '>', 2, 'B'),
							ChShipTypeRoutingRule(['DD'], '<', 3, 'B'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'B', 'C'),
						]
					},
					'B': {
						type: 1,
						x: 267,
						y: 128,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 287,
						y: 253,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['CA', 'CLT'], '>=', 2, 'E'),
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'E'),
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'G'),
								ChShipTypeRoutingRule(['DD'], '>=', 4, 'G'),
							], 'AND', 'G'),
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'G'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'G'),
								ChShipTypeRoutingRule(['AV'], '>', 0, 'G'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'G'),
							], 'AND', 'G'),
							ChDefaultRouteRule('E')
						]
					},
					'D': {
						type: 1,
						x: 338,
						y: 93,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'H'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'F'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<', 4, 'F'),
							], 'AND', 'F'),
							ChDefaultRouteRule('H')
						]
					},
					'E': {
						type: 1,
						x: 368,
						y: 302,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'F': {
						type: 1,
						x: 421,
						y: 193,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 2,
						x: 385,
						y: 230,
						distance: 3,
						resource: 1,
						amount: [50],
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 429,
						y: 84,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 1,
						x: 468,
						y: 251,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 1,
						x: 493,
						y: 202,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'K': {
						type: 1,
						x: 534,
						y: 114,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'O', 'J')
						]
					},
					'L': {
						type: 1,
						x: 553,
						y: 266,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 625,
						y: 292,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'N': {
						type: 3,
						x: 254,
						y: 322,
						distance: 3,
						end: true
					},
					'O': {
						type: 3,
						x: 608,
						y: 139,
						distance: 6,
						end: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Friendly anchorage Recapturing Strategy',
				fleetTypes: [1],
				bgmMap: 66,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 14,
				maphp: {
					3: { 1: 5400 },
					2: { 1: 4800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 900,
					2: 900,
					1: 800,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				startCheckRule: [
					ChShipTypeRoutingRule(['aCV'], '>', 3, 'Start1'),
					ChShipTypeRoutingRule(['aCV'], '=', 3, 'Start3'),
					ChShipTypeRoutingRule(['aCV'], '<', 3, 'Start2'),
				],
				debuffRules: new ChGimmickList('debuff', null, null, [
					{
						node: 'I', 
						mapnum: 5,
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S'
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1
						}
					},
					{
						node: 'A', 
						mapnum: 6,
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S'
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1
						}
					},
					{
						node: 'G', 
						mapnum: 6,
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S'
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1
						}
					},
					{
						node: 'L', 
						mapnum: 6,
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S'
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1
						}
					}
				]),
				nodes: {
					'Start1': {
						type: 0,
						x: 69,
						y: 178,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 193,
						y: 319,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'Start3': {
						type: 0,
						x: 234,
						y: 86,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'A': {
						type: 1,
						x: 176,
						y: 178,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'B', 'C'),
						]
					},
					'B': {
						type: 1,
						x: 265,
						y: 255,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 276,
						y: 177,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 298,
						y: 320,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 354,
						y: 102,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'F': {
						type: 1,
						x: 365,
						y: 216,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 416,
						y: 269,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChLOSRule({ 3: 'F', 0: 'O' })
						]
					},
					'H': {
						type: 1,
						x: 446,
						y: 184,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 4, 'K'),
							ChIfThenElseRule(
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'K'),
								ChRandomRule({ N: 0.2, K: 0.8 }),
								ChRandomRule({ N: 0.8, K: 0.2 }),
							)
						]
					},
					'I': {
						type: 1,
						x: 465,
						y: 116,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 526,
						y: 321,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShowCompass(ChFixedRoutingRule('N'))
						]
					},
					'K': {
						type: 1,
						x: 576,
						y: 131,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShowCompass(ChFixedRoutingRule('M'))
						]
					},
					'L': {
						type: 1,
						x: 613,
						y: 282,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'M': {
						type: 4,
						x: 633,
						y: 195,
						distance: 4,
						resource: 1,
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '<=', 2, 'N'),
							ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'L'),

							ChIfThenElseRule(
								ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '<=', 2, 'N'),
								ChRandomRule({ N: 0.6, L: 0.4 }),
							),

							ChIfThenElseRule(
								ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '<=', 3, 'N'),
								ChRandomRule({ N: 0.4, L: 0.6 }),
								ChRandomRule({ N: 0.2, L: 0.8 }),
							)
						]
					},
					'N': {
						type: 1,
						x: 514,
						y: 239,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						debuffAmount: 100,
						end: true,
						boss: true
					},
					'O': {
						type: 3,
						x: 450,
						y: 325,
						distance: 5,
						end: true
					},
					/*'P': {
						type: 3,
						x: 642,
						y: 102,
						distance: 4,
						end: true
					},*/
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Beyond the Surging Sea',
				fleetTypes: [1,2,3],
				bgmMap: 66,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bgmLB: 62,
				bossnode: 14,
				maphp: {
					3: { 1: 5950 },
					2: { 1: 5250 },
					1: { 1: 3850 },
				},
				finalhp: {
					3: 850,
					2: 850,
					1: 750,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .5, 2: .5, 1: .5 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Hard 2','Hard 3','Medium 1','Medium 2'],
						1: ['Medium 1','Medium 2','Easy 1'],
					},
				},
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2')
				],
				lbas: 3,
				reward: {
					ships: [440]
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 91,
						y: 116,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 125,
						y: 268,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'A': {
						type: 1,
						x: 172,
						y: 168,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 218,
						y: 298,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 258,
						y: 189,
						distance: 2,
						rules: [
							ChSelectRouteRule(['D','F'])
						]
					},
					'D': {
						type: 1,
						x: 298,
						y: 105,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'E': {
						type: 1,
						x: 307,
						y: 263,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 362,
						y: 206,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChRandomRule({ 'H': .5, 'I': .5 }),
						]
					},
					'G': {
						type: 1,
						x: 369,
						y: 324,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 406,
						y: 122,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'I': {
						type: 3,
						x: 421,
						y: 252,
						distance: 4,
						rules: [
							ChSelectRouteRule(['J','K'])
						]
					},
					'J': {
						type: 1,
						x: 496,
						y: 194,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipIdsRoutingRule([445], '>=', 1, 'M'),
							ChRandomRule({ 'M': .1, 'L': .9 }),
						]
					},
					'K': {
						type: 1,
						x: 505,
						y: 315,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 1,
						x: 504,
						y: 94,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'N', 0: 'O' })
						]
					},
					'M': {
						type: 1,
						x: 589,
						y: 278,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'N', 0: 'P' })
						]
					},
					'N': {
						type: 1,
						x: 611,
						y: 160,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'O': {
						type: 3,
						x: 595,
						y: 80,
						distance: 6,
						end: true
					},
					'P': {
						type: 3,
						x: 652,
						y: 239,
						distance: 7,
						end: true
					},

				}
			}
		}
	},
	35: {
		name: 'Summer 2016',
		date: '2016-08-12',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/CSkq7eN.png',
		bannerImgAlt: 'http://i.imgur.com/xjkzbxs.png',
		transportCalc: transportCalcStandard,
		allowLBAS: true,
		ptImpSpecial: 1,
		disableMore: { ships: [481,439] },
		overrideStats: {
			1700: { HP: 600 },
			1701: { HP: 700 },
			1702: { HP: 444 },
			1703: { HP: 544 },
			1704: { HP: 644 },
			1705: { HP: 370 },
			1706: { HP: 430, AR: 169 },
			1707: { HP: 490, AR: 189 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Patrol off Buntan',
				fleetTypes: [0],
				bgmMap: 69,
				bgmDN: 70,
				bgmNN: 70,
				bgmDB: 71,
				bgmNB: 71,
				bossnode: 9,
				maphp: {
					3: { 1: 900 },
					2: { 1: 700 },
					1: { 1: 550 },
				},
				finalhp: {
					3: 180,
					2: 140,
					1: 110,
				},
				giveLock: 1,
				checkLock: [2,3],
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.BBV ) errors.push('No CV(B) or BB(V) allowed.');
				},
				mapInfo: 'No CV(B) or BB(V) allowed.',
				nodes: {
					'Start' : {
						type: 0,
						x: 613,
						y: 97,
						rules: [
							ChShipTypeRoutingRule(['DD'], '<', 2, 'A'),
							ChShipTypeRoutingRule(['DD','CL'], '<=', 2, 'A'),
							ChShipTypeRoutingRule(['CVL'], '>=', 3, 'A', 'B'),
						]
					},
					'A' : {
						type: 1,
						x: 675,
						y: 232,
						compDiff:{
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B' : {
						type: 1,
						x: 581,
						y: 191,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['FBB'], '>', 0, 'C'),
								ChShipTypeRoutingRule(['FBB', 'CVL'], '>=', 2, 'C'),
							], 'AND', 'C'),

							ChShipNotOfTypeRoutingRule(['DD','CL','CLT','CT'], '>=', 2, 'C'),
							
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'D'),
								ChShipTypeRoutingRule(['FBB'], '=', 0, 'D'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'D'),
							], 'AND', 'D', 'E'),
						]
					},
					'C' : {
						type: 1,
						x: 593,
						y: 312,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D' : {
						type: 3,
						x: 518,
						y: 262,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E' : {
						type: 1,
						x: 464,
						y: 190,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F' : {
						type: 1,
						x: 414,
						y: 304,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G' : {
						type: 1,
						x: 284,
						y: 333,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4']
						},
						rules: [
							ChLOSRule({3:"I",0:"H"})
						]
					},
					'H': {
						type: 3,
						x: 218,
						y: 247,
						end: true,
					},
					'I': {
						type: 1,
						x: 170,
						y: 310,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'The Second Battle of Endau',
				fleetTypes: [0],
				bgmMap: 69,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 13,
				transport: 'J',
				maphp: {
					3: { 1: 400},
					2: { 1: 340},
					1: { 1: 280},
				},
				lbas: 1,
				giveLock: 2,
				checkLock: [1,3],
				reward: { ships: [481], firstOnly: true },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 0 },
					chance: { 3: .2, 2: .2, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
					},
				},
				nodes:{
					'Start':{
						type: 0,
						x: 548,
						y: 79,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 0, 'C'),

							// jesus christ
							// From jeb on rewrite : jesus christ indeed 
							ChShipTypeRoutingRule(['DD'], '<=', 2, 'C'),
							ChShipCountRoutingRule('<=', 3, 'C'),

							// --- Can't have CAV and CLT in the same fleet
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CLT'], '>', 0, 'C'),
								ChShipTypeRoutingRule(['CAV'], '>', 0, 'C'),
							], 'AND', 'C'),

							// --- If CAV in the fleet => need AV or historical
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CAV'], '>', 0, 'C'),
								ChShipTypeRoutingRule(['AV'], '=', 0, 'C'),
								ChMultipleRulesRule([
									ChShipHistoricalRoutingRule('Sendai', [54], "=", 0, 'C'),
									ChShipHistoricalRoutingRule('Fubukis', [9,10,32], "=", 0, 'C'),
								], 'OR', 'C'),
							], 'AND', 'C'),

							ChShipTypeRoutingRule(['AV', 'CLT'], '>=', 3, 'C'),

							// --- ships.DD + ships.CL * 2 >= 4
							ChShipTypeRoutingWithWeightRule({ 
								1: ['DD'], 
								2: ['CL']
							}, '<', 4, 'C'),

							ChShipTypeRoutingRule(['AV'], '>=', 2, 'C'),
							ChShipTypeRoutingRule(['CLT','CL'], '>=', 3, 'C', 'F'),
						]
					},
					'A': {
						type: 1,
						x: 678,
						y: 202,
						distance: 2,
						rules: [
							ChFixedRoutingRule('B')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'B':{
						type: 4,
						x: 635,
						y: 264,
						distance: 3,
						rules: [
							ChFixedRoutingRule('E')
						],
						resource: 1,
					},
					'C':{
						type: 3,
						x: 613,
						y: 137,
						distance: 1,
						rules: [
							ChSelectRouteRule(['D','A'])
						]
					},
					'D': {
						type: 1,
						x: 587,
						y: 219,
						distance: 2,
						rules: [
							ChFixedRoutingRule('E')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'E': {
						type: 1,
						x: 565,
						y: 299,
						distance: 3,
						subonly: true,
						rules: [
							ChFixedRoutingRule('G')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'F': {
						type: 1,
						x: 520,
						y: 162,
						distance: 1,
						subonly: true,
						rules: [
							ChFixedRoutingRule('G')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'G': {
						type: 1,
						x: 495,
						y: 232,
						distance: 2,
						rules: [
							ChFixedRoutingRule('H')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'H': {
						type: 1,
						x: 419,
						y: 167,
						raid: true,
						distance: 3,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'I': {
						type: 1,
						x: 340,
						y: 194,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						rules: [
							ChLOSRule({3:"J",0:"L"})
						]
					},
					"J": {
						type: 2,
						x: 313,
						y: 281,
						distance: 5,
						resource: 0,
						rules: [
							ChLOSRule({3:"M",0:"K"})
						]
					},
					"K": {
						type: 3,
						x: 403,
						y: 332,
						distance: 6,
						end: true
					},
					"L": {
						type: 3,
						x: 277,
						y: 123,
						distance: 5,
						end: true
					},
					"M": {
						type: 1,
						x: 401,
						y: 251,
						distance: 6,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
				
			},
			3: {
				name: 'E-3',
				nameT: 'The Second Naval Battle of Malaya',
				fleetTypes: [1,2],
				bgmMap: 69,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 10,
				maphp: {
					3: { 1: 4200 },
					2: { 1: 3600 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 644,
					2: 544,
					1: 444,
				},
				lbas: 2,
				giveLock: 3,
				checkLock: [1,2],
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1 },
					chance: { 3: .25, 2: .25, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
				},
				debuffRules: new ChGimmickList('debuff', null, 3, [
					{
						node: 'A',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
					{
						node: 'D',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
					{
						node: 'AB',
						type: 'NoHPLoss',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
				]),
				nodes:{
					'Start':{
						type: 0,
						x: 652,
						y: 80,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'A':{
						type: 1,
						x: 658,
						y: 242,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B':{
						type: 1,
						x: 641,
						y: 162,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
						rules: [
							ChFleetTypeRule(1, 'C'),
							ChShipHistoricalRoutingRule('Historicals', [78,79,124,125,70,120,69,9,10,32,23,113], ">=", 7, 'C'),
							ChSpeedRule('<=', 5, 'A'),
							ChDefaultRouteRule('C')
						]
					},
					'C':{
						type: 1,
						x: 583,
						y: 231,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						rules: [
							ChShipHistoricalRoutingRule('Historicals', [78,79,124,125,70,120,69,9,10,32,23,113], ">=", 7, 'G'),
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Historicals', [78,79,124,125,70,120,69,9,10,32,23,113], ">=", 3, 'E'),
								ChShipIdsRoutingRule([78], '>=', 1, 'E'),
								ChShipIdsRoutingRule([79], '>=', 1, 'E')
							], 'AND', 'E', 'D')
						]
					},
					'D':{
						type: 1,
						x: 557,
						y: 295,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						routeC: function(ships){
							if (isShipInList(ships.ids,460)) return 'G';
							else if (isShipInList(ships.ids,131) && isShipInList(ships.ids,143) && isShipInList(ships.escorts.ids,171)) 
								{ return 'F'; }
							else if (ships.CV + ships.CVB == 4) return 'F';
							else return 'G';
						},
						rules: [
							ChShipIdsRoutingRuleMainFleetOnly([460], '>=', 1, 'G'),

							ChMultipleRulesRule([
								ChShipIdsRoutingRuleMainFleetOnly([131], '>=', 1, 'F'),
								ChShipIdsRoutingRuleMainFleetOnly([143], '>=', 1, 'F'),
								ChShipIdsRoutingRuleEscortOnly([171], '>=', 1, 'F')
							], 'AND', 'F'),

							ChShipTypeRoutingRule(['CV', 'CVB'], '=', 4, 'F'),
							ChDefaultRouteRule('G')
						]
					},
					'E':{
						type: 4,
						resource: 1,
						x: 538,
						y: 150,
						distance: 3,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F':{
						type: 4,
						resource: 1,
						x: 501,
						y: 330,
						distance: 4,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G' : {
						type: 1,
						x: 471,
						y: 202,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						rules: [
							ChLOSRule({3:"H",0:"I"})
						]
					},
					'H' : {
						type: 1,
						x: 439,
						y: 275,
						distance: 4,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						rules: [
							ChFixedRoutingRule('J')
						],
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'I':{
						type: 3,
						x: 375,
						y: 149,
						distance: 4,
						end: true,
					},
					'J':{
						type: 1,
						x: 370,
						y: 340,
						distance: 5,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
			},
			4:{
				name: 'E-4',
				nameT: 'Night Battle of Malacca Strait',
				fleetTypes: [1,2,3],
				bgmMap: 69,
				bgmDN: 72,
				bgmNN: 72,
				bgmDB: 73,
				bgmNB: 73,
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2')
				],
				bossnode: 17,
				maphp: {
					3: { 1: 3430 },
					2: { 1: 3010 },
					1: { 1: 2590 },
				},
				finalhp: {
					3: 200,
					2: 200,
					1: 200,
				},
				lbas: 3,
				enemyRaid: {
					maxNum: { 3: 3, 2: 2, 1: 2 },
					chance: { 3: .25, 2: .25, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
				},
				debuffRules: new ChGimmickList('debuff', null, 4, [
					{
						node: 'C',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'D',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'H',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'I',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'K',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
				], {
					numberOfStepRequired: 4
				}),
				reward: {
					'ships': [439]
				},
				nodes:{
					'Start1':{
						type: 0,
						x: 659,
						y: 112,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Start2':{
						type: 0,
						x: 690,
						y: 238,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A':{
						type: 1,
						x: 623,
						y: 275,
						distance: 1,
						raid: true,
						rules: [
							ChFixedRoutingRule('C')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'B':{
						type: 3,
						x: 601,
						y: 160,
						distance: 1,
						rules: [
							ChSelectRouteRule(['E','D'])
						]
					},
					'C':{
						type: 1,
						x: 575,
						y: 319,
						distance: 2,
						rules: [
							ChRandomRule({ 'F': .5, 'G': .5 }),
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'D':{
						type: 1,
						x: 563,
						y: 227,
						distance: 2,
						rules: [
							ChFixedRoutingRule('F')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 527,
						y: 158,
						distance: 2,
						rules: [
							ChFixedRoutingRule('H')
						],
					},
					'F':{
						type: 1,
						x: 526,
						y: 277,
						distance: 3,
						subonly: true,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'G':{
						type: 1,
						x: 513,
						y: 338,
						raid: true,
						distance: 3,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
					},
					'H':{
						type: 1,
						x: 484,
						y: 225,
						distance: 3,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'I':{
						type: 1,
						x: 438,
						y: 312,
						distance: 4,
						rules: [
							ChFixedRoutingRule('J')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffAmount: 35,
					},
					'J':{
						type: 3,
						x: 393,
						y: 272,
						distance: 5,
						rules: [
							ChFixedRoutingRule('K')
						],
					},
					'K':{
						type: 1,
						x: 350,
						y: 173,
						distance: 6,
						night: true,
						rules: [
							ChFixedRoutingRule('L')
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'L':{
						type: 1,
						x: 274,
						y: 94,
						raid: true,
						distance: 7,
						rules: [
							ChFleetTypeRule(2, 'M'),
							ChFleetTypeRule(3, 'M'),

							// --- Else if CTF
							ChShipTypeRoutingRuleMainFleetOnly(['SSV', 'AO'], '>', 0, 'N'),

							ChMultipleRulesRule([
								ChShipIdsRoutingRuleMainFleetOnly([78], '>=', 1, 'M'),
								ChShipIdsRoutingRuleMainFleetOnly([79], '>=', 1, 'M'),
								ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '<=', 2, 'M'),
							], 'AND', 'M'),

							ChShipIdsRoutingRuleEscortOnly([171], '>=', 1, 'N'),
							ChShipTypeRoutingRule(['CLT'], '>', 2, 'N'),
							
							ChMultipleRulesRule([
								ChShipIdsRoutingRuleEscortOnly([69], '>=', 1, 'M'),
								ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '<=', 2, 'M'),
							], 'AND', 'M'),

							ChShipTypeRoutingRule(['CLT'], '>', 1, 'N'),

							ChDefaultRouteRule('M'),
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'M':{
						type: 1,
						x: 208,
						y: 190,
						raid: true,
						distance: 8,
						rules: [
							ChLOSRule({ 3:'Q', 0:'P' })
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'N':{
						type: 1,
						x: 195,
						y: 106,
						distance: 8,
						subonly: true,
						rules: [
							ChRandomRule({'M':.75,'O':.25}),
						],
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'O':{
						type: 4,
						resource: 1,
						x: 146,
						y: 152,
						distance: 9,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'P':{
						type: 3,
						x: 214,
						y: 297,
						distance: 9,
						end: true
					},
					'Q':{
						type: 1,
						x: 119,
						y: 239,
						distance: 9,
						end: true,
						boss: true,
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23, 1705: 30, 1706: 30, 1707: 30 },
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
			},
		}
	},
	36: {
		name: 'Fall 2016',
		date: '2016-11-18',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/7IvVhBr.png',
		bannerImgAlt: 'http://i.imgur.com/szScvvM.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		disableMore: { ships: [491,433] },
		overrideStats: {
			1644: { AR: 49 },
			1645: { AR: 69 },
			1646: { AR: 89 },
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
			1711: { AR: 140 },
			1712: { AR: 170 },
			1713: { AR: 190 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Maritime Transport Operation',
				fleetTypes: [0],
				bgmMap: 78,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 12,
				maphp: {
					3: { 1: 420 },
					2: { 1: 280 },
					1: { 1: 200 },
				},
				transport: 'H',
				giveLock: 1,
				checkLock: [2,3,4],
				reward: {
					3: { items: [185,175], firstOnly: true },
					2: { items: [185], firstOnly: true },
					1: { items: [176] },
				},
				nodes: {
					'Start':{
						type: 0,
						x: 91,
						y: 194,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A':{
						type: 3,
						x: 209,
						y: 195,
						rules: [
							ChSelectRouteRule(['B','C'])
						]
					},
					'B':{
						type: 1,
						x: 261,
						y: 270,
						subonly: true,
						rules: [
							ChShipTypeRoutingRule(['AR'], '>', 0, 'E', 'D')
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2']
						}
					},
					'C':{
						type: 1,
						x: 276,
						y: 123,
						rules: [
							ChShipTypeRoutingRule(['CV'], '>', 0, 'E'),
							ChShipTypeRoutingRule(['CVB'], '>', 0, 'E'),
							ChShipTypeRoutingRule(['aBB'], '>=', 2, 'E'),
							ChShipTypeRoutingRule(['DD'], '<', 3, 'E'),
							ChShipTypeRoutingRule(['CL'], '>=', 2, 'E', 'F'),
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'D':{
						type: 1,
						x: 363,
						y: 308,
						rules: [
							ChShipTypeRoutingRule(['FBB'], '>', 0, 'E'),
							ChShipTypeRoutingRule(['CV'], '>', 0, 'E'),
							ChShipTypeRoutingRule(['CVB'], '>', 0, 'E'),

							ChShipTypeRoutingRule(['CVL', 'CA'], '>=', 2, 'E'),
							ChShipTypeRoutingRule(['CVL', 'CA', 'CL'], '>=', 3, 'E'),

							ChShipTypeRoutingRule(['DD'], '<=', 2, 'E'),
							ChShipTypeRoutingRule(['CLT'], '>', 0, 'E', 'H'),
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'E':{
						type: 1,
						x: 394,
						y: 197,
						routeC: function(ships){
							if (ships.CV || CVB) return 'F';
							return 'H';
						},
						rules: [
							ChShipTypeRoutingRule(['CV'], '>', 0, 'F'),
							ChShipTypeRoutingRule(['CVB'], '>', 0, 'F', 'H'),
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'F':{
						type: 1,
						x: 408,
						y: 100,
						subonly: true,
						rules: [
							ChFixedRoutingRule('H')
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'G':{
						type: 2,
						x: 470,
						y: 320,
						rules: [
							ChFixedRoutingRule('I')
						],
						resource: 1,
						amount: [50],
					},
					'H':{
						type: 2,
						x: 527,
						y: 209,
						rules: [
							ChSpeedRule('<=', 5, 'G'),
							ChShipTypeRoutingRule(['DD'], '<=', 1, 'G'),
							ChRandomRule({ 'G': .05, '': .95 }),
							ChShowLOSPlane(ChDefaultRouteRule('L'))
						],
						resource: 0
					},
					'I':{
						type: 4,
						x: 586,
						y: 275,
						rules: [
							ChLOSRule({ 3: 'J', 0: 'K' })
						],
						resource: 1,
					},
					'J':{
						type: 1,
						x: 651,
						y: 202,
						rules: [
							ChFixedRoutingRule('L')
						],
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'K':{
						type: 3,
						x: 650,
						y: 318,
						end: true,
					},
					'L':{
						type: 1,
						x: 608,
						y: 108,
						subonly: true,
						boss: true,
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Mainland Air Defense Battle',
				fleetTypes: [0],
				bgmMap: 78,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 15,
				lbas: 2,
				lbasSortie: 1,
				maphp: {
					3: { 1: 800 },
					2: { 1: 800 },
					1: { 1: 480 },
				},
				finalhp: {
					3: 160,
					2: 160,
					1: 160,
				},
				giveLock: 2,
				checkLock: [1, 3, 4],
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 1 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['1','2'],
						2: ['2','3'],
						1: ['3'],
					},
				},
				startCheckRule: [
					ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'Start2'),
					ChShipTypeRoutingRule(['CA', 'CAV'], '>=', 3, 'Start2'),

					ChMultipleRulesRule([
						ChShipIdsRoutingRule([451], '>=', 1, 'Start1'),
						ChShipTypeRoutingRule(['CVL'], '<=', 1, 'Start1'),
					], 'AND', 'Start1'),

					ChMultipleRulesRule([
						ChShipIdsRoutingRule([74], '>=', 1, 'Start1'),
						ChShipTypeRoutingRule(['CVL'], '<=', 2, 'Start1'),
						ChShipTypeRoutingRule(['CV', 'CVB'], '=', 0, 'Start1'),
						ChShipTypeRoutingRule(['DD'], '>=', 2, 'Start1'),
					], 'AND', 'Start1'),

					ChMultipleRulesRule([
						ChShipTypeRoutingRule(['AV'], '=', 1, 'Start1'),
						ChShipTypeRoutingRule(['CVL'], '=', 1, 'Start1'),
						ChShipTypeRoutingRule(['CV', 'CVB'], '=', 0, 'Start1'),
						ChSpeedRule('>=', 10, 'Start1')
					], 'AND', 'Start1'),

					ChMultipleRulesRule([
						ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'Start3'),
						ChShipTypeRoutingRule(['CVL'], '=', 0, 'Start3'),
						ChShipTypeRoutingRule(['DD'], '>=', 2, 'Start3'),
					], 'AND', 'Start3'),

					ChDefaultRouteRule('Start2')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 214,
						y: 179,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'Start2': {
						type: 0,
						x: 72,
						y: 242,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start3': {
						type: 0,
						x: 176,
						y: 324,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'A': {
						type: 1,
						x: 164,
						y: 243,
						distance: 1,
						rules: [
							ChFixedRoutingRule('B')
						],
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'B': {
						type: 1,
						x: 260,
						y: 243,
						distance: 2,
						rules: [
							ChFixedRoutingRule('F')
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'C': {
						type: 1,
						x: 296,
						y: 293,
						distance: 1,
						rules: [
							ChShipIdsRoutingRule([90, 91], '>=', 2, 'G'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '=', 1, 'G', 'F')
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'D': {
						type: 1,
						x: 314,
						y: 180,
						distance: 1,
						rules: [
							ChShipHistoricalRoutingRule('Historicals', [454, 415, 67, 66, 68, 69, 62, 65, 451, 74], "=", 3, 'E', 'F'),
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'E': {
						type: 1,
						x: 367,
						y: 106,
						distance: 2,
						subonly: true,
						rules: [
							ChFixedRoutingRule('H')
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'F': {
						type: 1,
						x: 377,
						y: 243,
						subonly: true,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5']
						},
						rules: [
							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChShipIdsRoutingRule([74], '=', 1, 'I'),
									ChShipIdsRoutingRule([451], '=', 1, 'I'),
								], 'OR', 'I'),
								ChShipIdsRoutingRule([454], '=', 1, 'I'),
								ChShipIdsRoutingRule([415], '=', 1, 'I'),
							], 'AND', 'I'),
							
							ChMultipleRulesRule([
								ChShipIdsRoutingRule([74], '=', 1, 'I'),
								ChShipIdsRoutingRule([451], '=', 1, 'I'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'I'),
							], 'AND', 'I'),
							
							ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 2, 'G'),
							ChShipTypeRoutingRule(['CVL', 'AV'], '>=', 2, 'H'),
							ChDefaultRouteRule('G')
						]
					},
					'G': {
						type: 1,
						x: 406,
						y: 318,
						rules: [
							ChFixedRoutingRule('J')
						],
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'H': {
						type: 1,
						x: 452,
						y: 91,
						distance: 4,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'I': {
						type: 3,
						x: 490,
						y: 192,
						distance: 6,
						rules: [
							ChSelectRouteRule(['K', 'L'])
						]
					},
					'J': {
						type: 1,
						x: 510,
						y: 302,
						distance: 5,
						rules: [
							ChFixedRoutingRule('I')
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'K': {
						type: 1,
						x: 551,
						y: 143,
						rules: [
							ChLOSRule({ 14: 'O', 12: 'M' })
						],
						raid: true,
						distance: 7,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'L': {
						type: 1,
						x: 566,
						y: 253,
						distance: 7,
						rules: [
							ChLOSRule({ 3: 'O', 0: 'N' })
						],
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'M': {
						type: 3,
						x: 610,
						y: 88,
						distance: 8,
						end: true
					},
					'N': {
						type: 3,
						distance: 8,
						x: 639,
						y: 317,
						end: true
					},
					'O': {
						type: 1,
						x: 642,
						y: 209,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Proclamation! Fleet Strategy Plan #3',
				fleetTypes: [1, 2],
				bgmMap: 78,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 17,
				maphp: {
					3: { 1: 2340 },
					2: { 1: 1900 },
					1: { 1: 1850 },
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				giveLock: 2,
				checkLock: [1, 3, 4],
				reward: { ships: [491], firstOnly: true },
				historicalList: [77,87,90,91,67,68,69,62,65,63,55,101,415],
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2')
				],
				debuffRules: new ChGimmickList('debuff', null, null, [
					// --- E2
					{
						node: 'A',
						mapnum: 2,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'G',
						mapnum: 2,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'K',
						mapnum: 2,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'L',
						mapnum: 2,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'AB',
						mapnum: 2,
						type: "NoHPLoss",
						timesRequiredPerDiff: {
							1: 3,
							2: 3,
							3: 3,
						}
					},
					// --- E3
					{
						node: 'C',
						mapnum: 3,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'D',
						mapnum: 3,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'H',
						mapnum: 3,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'J',
						mapnum: 3,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'K',
						mapnum: 3,
						type: "battle",
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'A',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
				]),
				nodes: {
					'Start1': {
						type: 0,
						x: 131,
						y: 203,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Start2': {
						type: 0,
						x: 66,
						y: 247,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 167,
						y: 272,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipHistoricalRoutingRule('Historicals', 'map.historicalList', '>', 5, 'B'),
							ChShipTypeRoutingRule(['CV', 'CVB', 'aBB'], '>=', 4, 'M'),
							ChShowLOSPlane(ChDefaultRouteRule('C'))
						]
					},
					'B': {
						type: 1,
						x: 213,
						y: 172,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						rules: [
							ChSpeedRule('<=', 5, 'D'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 2, 'D', 'E'),
						]
					},
					'C': {
						type: 1,
						x: 292,
						y: 299,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChSpeedRule('<', 10, 'E'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'E'),
							ChShipTypeRoutingRuleEscortOnly(['FBB'], '>', 0, 'E', 'G'),
						]
					},
					'D': {
						type: 1,
						x: 322,
						y: 134,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'N'),
							ChShipTypeRoutingRuleMainFleetOnly(['CVL'], '<=', 1, 'N'),
							ChShipTypeRoutingRule(['CAV'], '>', 0, 'N'),
							
							ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 3, 'F'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'F'),
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'F'),
							], 'AND', 'F'),

							ChShipHistoricalRoutingRule('Historicals', 'map.historicalList', '>', 5, 'E'),
							ChShipHistoricalRoutingRule('Historicals', 'map.historicalList', '>', 2, 'F'),

							ChRandomRule({ 'E': .5, 'F': .5 }),
						]
					},
					'E': {
						type: 3,
						x: 385,
						y: 218,
						rules: [
							ChSelectRouteRule(['H','I'])
						]
					},
					'F': {
						type: 1,
						x: 405,
						y: 76,
						raid: true,
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'H', 'J'),
						],
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'G': {
						type: 4,
						resource: 1,
						x: 417,
						y: 328,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'H': {
						type: 1,
						x: 448,
						y: 163,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 496,
						y: 251,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipHistoricalRoutingRule('Historicals', 'map.historicalList', '>', 5, 'L'),

							ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB', 'aBB'], '>=', 4, 'H'),

							ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 3, 'L'),

							ChShipHistoricalRoutingRule('Historicals', 'map.historicalList', '>', 0, 'K'),

							ChShipTypeRoutingRule(['DD'], '=', 2, 'K', 'O'),
						]
					},
					'J': {
						type: 1,
						x: 523,
						y: 92,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChLOSRule({ 3: 'Q', 0: 'O' })
						]
					},
					'K': {
						type: 1,
						x: 562,
						y: 309,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChLOSRule({ 3: 'L', 0: 'P' })
						]
					},
					'L': {
						type: 1,
						x: 648,
						y: 227,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'M': {
						type: 3,
						x: 218,
						y: 335,
						end: true,
					},
					'N': {
						type: 3,
						x: 235,
						y: 101,
						end: true
					},
					'O': {
						type: 3,
						x: 574,
						y: 174,
						end: true,
					},
					'P': {
						type: 3,
						x: 661,
						y: 318,
						end: true,
					},
					'Q': {
						type: 1,
						x: 629,
						y: 120,
						boss: true,
						end: true,
						debuffAmount: 23,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					}
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Shangri-la Search-and-Chase, Fleet Forward Placement',
				bgmMap: 79,
				fleetTypes: [0],
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: [22,13],
				giveLock: 4,
				checkLock: [1,2,3],
				parts: {
					1: {
						currentBoss: 'M',
						maphp: {
							3: { 1: 380},
							2: { 1: 260},
							1: { 1: 180},
						},
						transport: 'K',
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 1750},
							2: { 1: 1750},
							1: { 1: 1625},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				startCheckRule: [
					ChMapPartRuleOld('=', 1, 'Start1', 'Start2')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 81,
						y: 99,
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'C', 'A'),
						]
					},
					'Start2': {
						type: 0,
						x: 352,
						y: 302,
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'A': {
						type: 1,
						x: 64,
						y: 201,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 131,
						y: 271,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '=', 0, 'E'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'E'),
							ChShipTypeRoutingRule(['AV','CL','CLT','CVL','CAV','CA',], '=', 2, 'G'),
							ChShipTypeRoutingRule(['AV','CL','CLT','CVL','CAV','CA',], '=', 3, 'G'),
							ChDefaultRouteRule('E')
						]
					},
					'C': {
						type: 1,
						x: 154,
						y: 190,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							// --- Weird rule cause if you bring SS you'll go to H anyway 
							// --- Previous code : 
							/* 	
								if (ships.SS + ships.SSV >= 1 && ships.DD >= 2) return 'H';
								if (ships.SS + ships.SSV == 0) {
									if (ships.aBB + ships.CV + ships.CVB > 0) return 'D';
									if (ships.CL == 0 || ships.CL >= 2) return 'D';
									if (ships.CAV + ships.CA + ships.CLT >= 3) return 'D';
								}
								return 'H';
							*/
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 1, 'H'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'H'),
							], 'AND', 'H'),

							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'H'),

							ChShipTypeRoutingRule(['aBB','CV','CVB'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'D'),
							ChShipTypeRoutingRule(['CL'], '>=', 2, 'D'),
							ChShipTypeRoutingRule(['CAV','CA','CLT'], '>=', 3, 'D'),

							ChDefaultRouteRule('H')
						]
					},
					'D': {
						type: 1,
						x: 199,
						y: 150,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 225,
						y: 239,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 0, 'H'),
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'H'),
								ChShipTypeRoutingRule(['DD'], '=', 1, 'H'),
								ChShipTypeRoutingRule(['CL'], '>=', 1, 'H'),
								ChSpeedRule('>=', 10, 'H')
							], 'AND', 'H', 'G')
						]
					},
					'F': {
						type: 2,
						resource: 2,
						amount: [30],
						x: 242,
						y: 107,
						rules: [
							ChSpeedRule('<=', 5, 'I'),
							ChShipTypeRoutingRule(['CV', 'CVB', 'FBB'], '>=', 2, 'I'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'I', 'J'),
						]
					},
					'G': {
						type: 1,
						x: 270,
						y: 326,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 1,
						x: 308,
						y: 224,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 4,
						x: 320,
						y: 101,
						resource: 1,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 338,
						y: 162,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'K': {
						type: 2,
						resource: 0,
						x: 399,
						y: 253,
						rules: [
							ChLOSRule({ 3: 'M', 0: 'L' })
						]
					},
					'L': {
						type: 3,
						x: 451,
						y: 172,
						end: true,
					},
					'M': {
						type: 1,
						x: 397,
						y: 145,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
					'N': {
						type: 1,
						x: 474,
						y: 128,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'O': {
						type: 1,
						x: 491,
						y: 301,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'P': {
						type: 1,
						x: 532,
						y: 203,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						rules: [
							// --- :sob:
							ChShipTypeRoutingRule(['CV', 'CVB', 'aBB'], '>=', 5, 'N'),

							ChMultipleRulesRule([
								ChSpeedRule('<=', 5, 'N'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'N'),
							], "AND", 'N'),
							
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 4, 'S'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 1, 'R'),
							ChSpeedRule('<=', 5, 'N'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['FBB', 'CV', 'CVB'], '<=', 1, 'S'),
								ChShipTypeRoutingRule(['CVL', 'CAV', 'CLT'], '<=', 2, 'S'),
								ChSpeedRule('>=', 10, 'S'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'S'),
								ChShipTypeRoutingRule(['CL', 'DD'], '>=', 3, 'S'),
							], "AND", 'S'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['FBB'], '=', 1, 'S'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '=', 1, 'S'),
								ChSpeedRule('>=', 10, 'S'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'S'),
								ChShipTypeRoutingRule(['CL', 'DD'], '>=', 4, 'S'),
							], "AND", 'S'),

							ChDefaultRouteRule('R')
						]
					},
					'Q': {
						type: 1,
						x: 545,
						y: 290,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						rules: [
							ChLOSRule({ 3: 'V', 0: 'U' })
						]
					},
					'R': {
						type: 1,
						x: 551,
						y: 80,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipHistoricalRoutingRule('Historicals', [161,113,80,433,176], '>=', 1, 'T', 'S'),
						]
					},
					'S': {
						type: 1,
						x: 605,
						y: 232,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'T': {
						type: 2,
						resource: 1,
						amount: [30],
						x: 651,
						y: 162,
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'U': {
						type: 3,
						x: 612,
						y: 341,
						end: true
					},
					'V': {
						type: 1,
						x: 649,
						y: 296,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Beyond the Shore',
				bgmMap: 79,
				fleetTypes: [1,2,3],
				bgmDN: 81,
				bgmNN: 81,
				bgmDB: 82,
				bgmNB: 82,
				lbas: 3,
				lbasSortie: 2,
				bossnode: 20,
				historicalList: [80, 176, 140, 433],
				checkLockHard: [1,2,4],
				giveLockHard: 3,
				reward: {
					ships: [433]
				},
				maphp: {
					3: { 1: 4800 },
					2: { 1: 4200 },
					1: { 1: 3400 },
				},
				finalhp: {
					3: 800,
					2: 700,
					1: 600,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 1 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
				},
				startCheckRule: [
					ChIsRouteUnlockedRule(1, 'Start2', 'Start1')
				],
				hiddenRoutes: {
					1: {
						images: [
							{ name: '5_1.png', x: 0, y: 0 }
						],
						unlockRules: new ChGimmickList('mapPart', null, 5, [
							{
								node: 'A',
								type: 'battle',
								ranksRequiredPerDiff: {
									1: 'S',
									2: 'S',
									3: 'S',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 2,
									3: 3,
								},
							},
							{
								node: 'AB',
								type: 'NoHPLoss',
								timesRequiredPerDiff: {
									1: 2,
									2: 2,
									3: 2,
								},
							},
						], {
							partToUnlock: 1,
						})
					}
				},
				debuffRules: new ChGimmickList('debuff', null, 5, [
					{
						node: 'AB',
						type: 'NoHPLoss',
						timesRequiredPerDiff: {
							1: 4,
							2: 4,
							3: 4,
						},
						routeUnlockRequired: 1
					},
					{
						node: 'F',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 2,
							3: 3,
						},
					},
					{
						node: 'P',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 2,
							2: 2,
							3: 2,
						},
					},
				]),
				nodes: {
					'Start1': {
						type: 0,
						x: 703,
						y: 252,
						rules: [
							ChFixedRoutingRule('B')
						]

					},
					'Start2': {
						type: 0,
						x: 336,
						y: 313,
						rules: [
							ChFleetTypeRule(1, 'K'),
							ChFleetTypeRule(3, 'M'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'CV', 'CVB'], '<=', 1, 'M'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 4, 'U'),
							ChDefaultRouteRule('K')
						],
						hidden: 1
					},
					'A': {
						type: 1,
						x: 681,
						y: 85,
						distance: 5,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						end: true,
					},
					'B': {
						type: 1,
						x: 624,
						y: 224,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 591,
						y: 312,
						raid: true,
						distance: 2,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChSpeedRule('<=', 5, 'E'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'E', 'G'),
						],
					},
					'D': {
						type: 1,
						x: 576,
						y: 81,
						raid: true,
						distance: 6,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						rules: [
							ChLOSRule({ 3:'A', 0:'Q' })
						]
					},
					'E': {
						type: 1,
						x: 516,
						y: 219,
						raid: true,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 510,
						y: 148,
						distance: 4,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'G': {
						type: 1,
						x: 473,
						y: 289,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 458,
						y: 94,
						distance: 5,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'F', 'D'),
						],
					},
					'I': {
						type: 3,
						x: 441,
						y: 191,
						distance: 5,
						rules: [
							ChSelectRouteRule(['J','H'])
						]
					},
					'J': {
						type: 1,
						x: 382,
						y: 90,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChLOSRule({ 3:'K', 0:'L' } )
						]
					},
					'K': {
						type: 1,
						x: 335,
						y: 198,
						distance: 6,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChSpeedRule('<=', 5, 'M'),
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'M'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'M'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 5, 'N'),
								ChShipTypeRoutingRuleEscortOnly(['CLT'], '=', 1, 'N'),
							], 'AND', 'N'),

							ChDefaultRouteRule('M')
						],
					},
					'L': {
						type: 4,
						x: 297,
						y: 125,
						distance: 7,
						resource: 1,
						rules: [
							ChLOSRule( { 3:'K', 0:'R' } )
						]						
					},
					'M': {
						type: 1,
						x: 250,
						y: 293,
						subonly: true,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						rules: [
							ChSpeedRule('<=', 5, 'N'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'N'),
							ChShipTypeRoutingRule(['DD'], '>=', 4, 'N'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 6, 'N', 'O'),
						],
					},
					'N': {
						type: 1,
						x: 227,
						y: 206,
						raid: true,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 156,
						y: 259,
						distance: 9,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'P': {
						type: 1,
						x: 101,
						y: 191,
						raid: true,
						distance: 10,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						rules: [
							ChLOSRule({ 3:'T', 0:'S' })
						]
					},
					'Q': {
						type: 3,
						x: 622,
						y: 165,
						distance: 5,
						end: true,
					},
					'R': {
						type: 3,
						x: 225,
						y: 88,
						distance: 8,
						end: true,
					},
					'S': {
						type: 3,
						x: 174,
						y: 147,
						distance: 10,
						end: true,
					},
					'T': {
						type: 1,
						x: 138,
						y: 96,
						distance: 11,
						end: true,
						boss: true,
						debuffAmount: 23,
						bonuses: [
							new ChShipIdsBonuses({
								type: 'set'
							}, [80,176,140,433], 2.5),
						],
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
					'U': {
						type: 1,
						x: 418,
						y: 272,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium'],
							1: ['Easy 1', 'Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					}
				}
			}
		}
	},
	37: {
		name: 'Winter 2017',
		date: '2017-02-11',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/hYXVnmU.png',
		bannerImgAlt: 'http://i.imgur.com/g4hutmU.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		disableMore: { ships: [474,495] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation for Operation Hikari',
				bgmMap: 86,
				fleetTypes: [0],
				bgmDN: 87,
				bgmNN: 87,
				bgmDB: 88,
				bgmNB: 88,
				bossnode: 11,
				checkLock: [2],
				giveLock: 1,
				lbas: 1,
				parts: {
					1: {
						maphp: {
							3: { 1: 100 },
							2: { 1: 100 },
							1: { 1: 100 },
						},
						transport: 'K'
					},
					2: {
						maphp: {
							3: { 1: 1 },
							2: { 1: 1 },
							1: { 1: 1 },
						},
						transport: 'N'
					}
				},
				hiddenRoutes: {
					1: {
						images: [
							{ name: '1_3.png', x: 594, y: 69 },
							{ name: '1_1.png', x: 240, y: 248 },
							{ name: '1_2.png', x: 563, y: 105 },
						],
						unlockRules: new ChGimmickList('mapPart', 2, 1, [], {
							partToUnlock: 1,
						})
					}
				},
				mapInfo: `
					The following calculation is used for the amount of TP:<br>
					<br>
					Base value is 5<br>
					<br>
					+4 for Ro-500 or I-401/I-401 Kai, +2 for both<br>
					+5 for Kinu Kai Ni<br>
					+7 for 2+ SSV<br>
					+8 for 3+ SS/SSV, +3 otherwise for 2 SS/SSV<br>
					<br>
					Equipment bonuses:<br>
					<br>
					Drum Canister (Transport Use): 1<br>
					Daihatsu Landing Craft: 2<br>
					Toku Daihatsu Landing Craft: 3<br>
					Daihatsu Landing Craft (Type 89 Medium Tank & Landing Force): 2<br>
					Zuiun variants: 2<br>
					Prototype Seiran: 4<br>
					No bonuses for Special Type 2 Amphibious Tank and Combat Ration<br>
				`,
				transportCalc: function(ships,rank) {
					let tp = 5;
					let hasRo = false, hasShioi = false, numSub = 0, numSSV = 0;
					for (let ship of ships) {
						let mid = ship.masterId;
						hasRo = hasRo || (mid == 436);
						hasShioi = hasShioi || (mid == 155 || mid == 403);
						if (SHIPDATA[mid].type == 'SSV') numSSV++;
						if (SHIPDATA[mid].type == 'SS' || SHIPDATA[mid].type == 'SSV') numSub++;
						if (ship.masterId == 487) tp += 5;
						for (let item of ship.items) {
							if (item <= 0) continue;
							let eq = CHDATA.gears['x'+item];
							let eqd = EQDATA[eq.masterId];
							if (eqd.type == DRUM) tp += 1;
							if (eqd.type == LANDINGCRAFT) tp += 2;
							if (eqd.type == SEAPLANEBOMBER) tp += 2;
							if (eq.masterId == 193) tp += 1;
							if (eq.masterId == 62) tp += 2;
						}
					}
					if (hasRo && hasShioi) tp += 2;
					else if (hasRo || hasShioi) tp += 4;
					if (numSSV >= 2) tp += 7;
					if (numSub >= 3) tp += 8;
					else if (numSub == 2) tp += 3;
					return tp;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 410,
						y: 159,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'A': {
						type: 1,
						x: 114,
						y: 258,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 153,
						y: 146,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 200,
						y: 210,
						distance: 1,
						rules: [
							ChShipTypeRoutingRule(['CL'], '=', 0, 'B'),
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'B', 'F'),
						]
					},
					'D': {
						type: 1,
						x: 213,
						y: 324,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChAllShipMusteBeOfTypeRule(['SS', 'SSV'], 'C'),
								ChShipCountRoutingRule('>=', { 1:1, 2:2, 3:3 }),
							], 'AND', 'C'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'C'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '>=', { 1:1, 2:2, 3:3 }, 'C'),
								ChShipTypeRoutingRule(['aCV'], '<=', 1, 'C'),
							], 'AND', 'C', 'A'),
						]
					},
					'E': {
						type: 3,
						x: 255,
						y: 79,
						distance: 3,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 2,
						x: 268,
						y: 135,
						distance: 1,
						resource: 1,
						amount: [50],
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'G': {
						type: 3,
						x: 328,
						y: 246,
						distance: 1,
						rules: [
							ChDontShowCompass(ChMapPartRuleOld('=', 1, 'D')),

							ChMultipleRulesRule([
								ChIsMapClearedRule('D'),
								ChShipTypeRoutingRule(['CL'], '>=', 1, 'D'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'D'),
								ChShipTypeRoutingRule(['aCV'], '=', 0, 'D'),
								ChSpeedRule('>=', 10, 'D')
							], 'AND', 'D', 'L'),
						]
					},
					'H': {
						type: 3,
						x: 428,
						y: 91,
						distance: 4,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 577,
						y: 91,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChMapPartRuleOld('=', 1, 'J', 'N'))
						]
					},
					'J': {
						type: 3,
						x: 727,
						y: 82,
						distance: 6,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 2,
						x: 708,
						y: 142,
						resource: 0,
						dropoff: true,
						replacedBy: 'K*',
						end: true
					},
					'K*': {
						type: 3,
						x: -100,
						y: -100,
						hidden: 1,
						end: true
					},
					'L': {
						type: 1,
						x: 411,
						y: 266,
						raid: true,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 445,
						y: 328,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'N': {
						type: 2,
						x: 588,
						y: 165,
						hidden: 1,
						resource: 0,
						dropoff: true,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Strengthening the Patrol Line in Ogasawara Islands',
				bgmMap: 86,
				fleetTypes: [1,2,3],
				bgmDN: 87,
				bgmNN: 87,
				bgmDB: 88,
				bgmNB: 88,
				bossnode: 13,
				checkLock: [1],
				giveLock: 2,
				transport: 'K',
				lbas: 1,
				reward: { ships: [474], items: [209,209] },
				maphp: {
					3: { 1: 500 },
					2: { 1: 400 },
					1: { 1: 300 },
				},
				finaltp: {
					3: 124,
					2: 99,
					1: 74,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 159,
						rules: [
							ChFleetTypeRule([1, 2], 'A'),
							ChSpeedRule('<', 10, 'A'),
							ChCreateCustomRuleFromName("37_2_1"),
						]
					},
					'A': {
						type: 1,
						x: 183,
						y: 206,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule([1, 2], 'B'),
							ChSpeedRule('<', 10, 'B', 'D'),
						]
					},
					'B': {
						type: 1,
						x: 230,
						y: 289,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 255,
						y: 134,
						distance: 1,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 3,
						x: 308,
						y: 201,
						distance: 2,
						rules: [
							ChSelectRouteRule(['E','G'])
						]
					},
					'E': {
						type: 1,
						x: 363,
						y: 295,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['AV'], '>', 0, 'G'),
							ChSpeedRule('<', 10, 'G'),
							ChFleetTypeRule([1, 2], 'G'),
							ChShipRetreatedCountRule('>', 0, 'G'),
							ChEquipTypeRule({
								equipTypes: [
									SEAPLANE, SEAPLANEBOMBER, SEAPLANEFIGHTER
								]
							}, '<=', 2, null, 'G', 'H')
						]
					},
					'F': {
						type: 1,
						x: 409,
						y: 109,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 428,
						y: 196,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 5, 'F'),
							ChSpeedRule('<=', 5, 'F'),

							ChShipRetreatedCountRule('>', 0, 'I'),
							ChEquipTypeRule({
								equipTypes: [
									SEAPLANE, SEAPLANEBOMBER, SEAPLANEFIGHTER
								]
							}, '<=', 2, null, 'I', 'J')
						]
					},
					'H': {
						type: 1,
						x: 488,
						y: 304,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFleetBeenThroughRule('J', 'K'),

							ChMultipleRulesRule([
								ChFleetTypeRule(3, 'J'),
								ChIsMapNotClearedRule('J'),
								ChMapHpPercentageRule('<', 0.25, 'J'),
							], 'AND', 'J'),

							ChDefaultRouteRule('K')
						]
					},
					'I': {
						type: 1,
						x: 557,
						y: 80,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({ 3: 'J', 0: 'L' })
						]
					},
					'J': {
						type: 1,
						x: 569,
						y: 196,
						distance: 4,
						setupSpecial: function() { CHDATA.sortie.J = true; },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(3, 'H'),
								ChIsMapNotClearedRule('H'),
								ChMapHpPercentageRule('<', 0.25, 'H'),
							], 'AND', 'H'),

							ChDefaultRouteRule('K')
						]
					},
					'K': {
						type: 2,
						x: 577,
						y: 312,
						distance: 5,
						resource: 0,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 3,
						x: 635,
						y: 139,
						distance: 4,
						end: true
					},
					'M': {
						type: 1,
						x: 648,
						y: 231,
						distance: 6,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Commence! Operation \'Hikari\'',
				bgmMap: 86,
				bgmDN: 88,
				bgmNN: 88,
				bgmDB: 89,
				bgmNB: 89,
				bossnode: [21,9],
				checkLock: [2],
				giveLock: 1,
				reward: { ships: [495] },
				parts: {
					1: {
						currentBoss: 'I',
						fleetTypes: [0],
						lbas: null,
						maphp: {
							3: { 1: 2 },
							2: { 1: 2 },
							1: { 1: 2 },
						},
						transport: 'E'
					},
					2: {
						currentBoss: 'U',
						fleetTypes: [0,1,2],
						lbas: 2,
						maphp: {
							3: { 1: 4800 },
							2: { 1: 4000 },
							1: { 1: 3200 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 660,
					2: 660,
					1: 660,
				},
				transportCalc: function(ships,rank) {
					if (rank != 'A' && rank != 'S') return 0;
					let num = 0;
					for (let ship of ships) {
						if (!ships) continue;
						for (let item of ship.items) {
							if (item <= 0) continue;
							let eq = CHDATA.gears['x'+item];
							if (eq.masterId == 209) num++;
						}
					}
					return num;
				},
				hiddenRoutes: {
					1: {
						images: [
							{ name: '3_1.png', x: 297, y: 151 }
						],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1,
						})
					}
				},
				startCheckRule: [
					ChFleetTypeRule(0, 'Start1', 'Start2')
				],
				mapInfo: `
				You can debuff the boss by S ranking nodes I and J.<br>
				Also this map can only be cleared by doing one of the following : <br>- Sink boss twice in a row <br>- A+ rank J twice after reaching last dance then sink the boss once.
				`,
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					//special case, only map with 2 debuffs, don't return true and play alerts here instead
					//don't use debuffAmount
					if (!debuff.debuffed1 && debuff.I && debuff.J) {
						debuff.debuffed1 = 1;
						SM.play('done');
						alert('DEBUFF');
					}
					if (!debuff.debuffed2 && debuff.J2 >= 2) {
						if (CHDATA.event.maps[3].hp > 660) CHDATA.event.maps[3].hp = 660;
						debuff.debuffed2 = 1;
						SM.play('done');
						alert('DEBUFF');
					}
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 549,
						y: 94,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'Start2': {
						type: 0,
						x: 486,
						y: 327,
						rules: [
							ChFleetTypeRule(2, 'S', 'T')
						],
					},
					'A': {
						type: 1,
						x: 662,
						y: 212,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChAllShipMusteBeOfTypeRule(['SSV', 'SS'], 'D'),

							ChMultipleRulesRule([
								ChDifficultyRule([1], 'D'),
								ChSpeedRule('>=', 10, 'D'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'D'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'D'),
							], 'AND', 'D', 'B')
						],
					},
					'B': {
						type: 1,
						x: 662,
						y: 291,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 608,
						y: 152,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChAllShipMusteBeOfTypeRule(['SSV', 'SS'], 'D'),
								ChSpeedRule('>=', 10, 'D'),
								ChShipCountRoutingRule('>=', 2, 'D')
							], 'AND', 'D', 'A')
						],
					},
					'D': {
						type: 1,
						x: 608,
						y: 310,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 2,
						x: 532,
						y: 310,
						distance: 1,
						resource: 0,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 549,
						y: 252,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMapPartRule([1], ChShipTypeRoutingRule(['aCV','aBB'], '>', 0, 'H')),
							ChMapPartRule([1], ChEquipTypeRule({
								equipIds: [209]
							}, '=', 0, null, 'H')),

							ChShipTypeRoutingRule(['aCV','aBB'], '>=', 4, 'G'),
							ChLOSRule({ 47: 'I', 45: 'G' }, 4)
						]
					},
					'G': {
						type: 3,
						x: 545,
						y: 157,
						distance: 3,
						end: true
					},
					'H': {
						type: 1,
						x: 487,
						y: 177,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 454,
						y: 227,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 2'],
						},
						compDiffC: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 1','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.I = 1;
						},
						end: true
					},
					'J': {
						type: 1,
						x: 385,
						y: 129,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.J = 1;
							if (CHDATA.event.maps[3].debuff.canDebuff2 && CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') {
								CHDATA.event.maps[3].debuff.J2 = CHDATA.event.maps[3].debuff.J2 + 1 || 1;
							}
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 1,
						x: 339,
						y: 85,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'L': {
						type: 1,
						x: 324,
						y: 213,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'M'),
								ChFleetTypeRule(2, 'M'),
								ChSpeedRule('>=', 10, 'M')
							], 'AND', 'M'),
							
							ChMultipleRulesRule([
								ChDifficultyRule([1,2], 'M'),
								ChFleetTypeRule(2, 'M'),
							], 'AND', 'M', 'O'),
						]
					},
					'M': {
						type: 1,
						x: 261,
						y: 288,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4','Easy 5'],
						},
						rules: [
							ChLOSRule({ 3: 'U', 0: 'P' })
						]
					},
					'N': {
						type: 1,
						x: 244,
						y: 112,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'O': {
						type: 1,
						x: 230,
						y: 194,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 7, 'N'),

							ChMultipleRulesRule([
								ChFleetTypeRule(1, 'Q'),
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '=', 0, 'Q'),
								ChSpeedRule('>=', 10, 'Q')
							], 'AND', 'M'),
							
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'Q'),
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '=', 0, 'Q'),
							], 'AND', 'M'),

							ChDefaultRouteRule('N')
						]
					},
					'P': {
						type: 3,
						x: 175,
						y: 326,
						distance: 6,
						end: true
					},
					'Q': {
						type: 1,
						x: 149,
						y: 141,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'U', 0: 'R' })
						]
					},
					'R': {
						type: 3,
						x: 105,
						y: 200,
						distance: 7,
						end: true
					},
					'S': {
						type: 3,
						x: 421,
						y: 278,
						distance: 2,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['V','W'])
						]
					},
					'T': {
						type: 1,
						x: 388,
						y: 326,
						distance: 2,
						raid: true,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'U': {
						type: 1,
						x: 174,
						y: 224,
						distance: 6,
						boss: true,
						setupSpecial: function() {
							if (CHDATA.event.maps[3].debuff.I && CHDATA.event.maps[3].debuff.J) {
								for (let ship of FLEETS2[0].ships) {
									if (ship.mid == 1620) ship.debuff = 23;
								}
							}
							if (CHDATA.event.maps[3].debuff.J2 >= 2) {
								FLEETS2[0].ships[0].debuff = 23;
							} else {
								if (CHDATA.event.maps[3].hp > 660 && CHDATA.event.maps[3].hp <= 800) CHDATA.event.maps[3].hp = 801;
							}
						},
						bonuses: [
							new ChEquipIdsBonuses({type: "add"}, [62], '>=', 1, 1.24),
							new ChEquipTypesBonuses({type: "add"}, [SONARS, SONARL], '>=', 1, 1.15),
						],
						debuffGive: function() {
							//if not debuffed, revert to pre-lastdance if didn't sink
							if (CHDATA.event.maps[3].debuff.debuffed2) return;
							if (CHDATA.event.maps[3].hp <= 660) CHDATA.event.maps[3].debuff.canDebuff2 = 1;
							if ([1719,1720,1721].indexOf(FLEETS2[0].ships[0].mid) != -1 && CHDATA.event.maps[3].hp > 0) {
								CHDATA.event.maps[3].hp = 801;
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'V': {
						type: 1,
						x: 389,
						y: 218,
						distance: 3,
						raid: true,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'W': {
						type: 1,
						x: 357,
						y: 267,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'X': {
						type: 1,
						x: 307,
						y: 323,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					}
				},
			}
		}
	},
	38: {
		name: 'Spring 2017',
		date: '2017-05-02',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/J9DVNwf.png',
		bannerImgAlt: 'http://i.imgur.com/ztzHSkE.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		historical: {
			fifth1: [63,64,100,101,114,15,16,18,49],
			fifth2: [63,101,100,114,16,18,41,49],
			russian: [35,511],
		},
		disableMore: { ships: [521,511] },
		overrideStats: {
			1644: { AR: 49 },
			1645: { AR: 69 },
			1646: { AR: 89 },
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Sortie! Oominato Guard District',
				bgmMap: 90,
				fleetTypes: [0],
				bgmDN: 91,
				bgmNN: 91,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: 13,
				checkLock: [2,3,4],
				giveLock: 1,
				maphp: {
					3: { 1: 520 },
					2: { 1: 440 },
					1: { 1: 330 },
				},
				finalhp: {
					3: 160,
					2: 130,
					1: 110,
				},
				additionalChecks(ships,errors) {
					if (ships.CV + ships.CVB + ships.CVL) errors.push('No CV(L/B)');
				},
				mapInfo: 'No CV(L/B) allowed',
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 260,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'A': {
						type: 1,
						x: 58,
						y: 161,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 34: 'D', 32: 'C' }, 3)
						]
					},
					'B': {
						type: 1,
						x: 74,
						y: 229,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'C': {
						type: 3,
						x: 78,
						y: 87,
						end: true
					},
					'D': {
						type: 1,
						x: 148,
						y: 86,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'E': {
						type: 3,
						x: 166,
						y: 216,
						rules: [
							ChShipTypeRoutingRule(['DD'], '<', 2, 'B'),
							ChShipTypeRoutingRule(['CL'], '<', 1, 'B', 'F'),
						]
					},
					'F': {
						type: 1,
						x: 268,
						y: 226,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 13: 'H', 12: 'G' }, 3)
						]
					},
					'G': {
						type: 3,
						x: 276,
						y: 325,
						end: true
					},
					'H': {
						type: 3,
						x: 341,
						y: 287,
						rules: [
							ChSelectRouteRule(['I','J'])
						]
					},
					'I': {
						type: 1,
						x: 401,
						y: 211,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 483,
						y: 323,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD', 'CL'], '>=', 4, 'L', 'K'),
						]
					},
					'K': {
						type: 1,
						x: 532,
						y: 227,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 15: 'M', 14: 'L' }, 3)
						]
					},
					'L': {
						type: 1,
						x: 588,
						y: 284,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 13: 'M', 12: 'N' }, 3)
						]
					},
					'M': {
						type: 1,
						x: 627,
						y: 150,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'N': {
						type: 3,
						x: 666,
						y: 258,
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Fleet, Assemble! To the Hitokappu Bay Anchorage',
				bgmMap: 90,
				fleetTypes: [0],
				bgmDN: 91,
				bgmNN: 91,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: [20,18],
				checkLock: [1,2,3],
				giveLock: 4,
				lbas: 1,
				parts: {
					1: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 300 },
							2: { 1: 240 },
							1: { 1: 120 },
						},
						transport: 'L'
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 1040 },
							2: { 1: 1040 },
							1: { 1: 1040 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 2, [], {
							partToUnlock: 1
						})
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 256,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'F'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AV'], '<=', 0, 'F'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'F'),
								ChShipTypeRoutingRule(['DD'], '>', 0, 'F'),
							], 'AND', 'F', 'A')
						]
					},
					'A': {
						type: 1,
						x: 53,
						y: 230,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 71,
						y: 155,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'D'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'D'),
							], 'AND', 'D', 'C')
						]
					},
					'C': {
						type: 1,
						x: 91,
						y: 81,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Hard 1','Hard 2','Hard 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 122,
						y: 111,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 2,
						x: 160,
						y: 152,
						dropoff: true,
						resource: 1,
						amount: [150],
						end: true
					},
					'F': {
						type: 3,
						x: 181,
						y: 256,
						distance: 1,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 1,
						x: 251,
						y: 323,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'I'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 2, 'I'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'I'),
							], 'AND', 'I', 'H')
						]
					},
					'H': {
						type: 1,
						x: 309,
						y: 259,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 3,
						x: 367,
						y: 324,
						distance: 3,
						rules: [
							ChSelectRouteRule(['K','M'])
						]
					},
					'J': {
						type: 3,
						x: 392,
						y: 91,
						distance: 3,
						end: true
					},
					'K': {
						type: 1,
						x: 423,
						y: 247,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'O'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'O'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'O'),
							], 'AND', 'O', 'Q')
						]
					},
					'L': {
						type: 2,
						x: 452,
						y: 185,
						distance: 3,
						resource: 0,
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'M': {
						type: 1,
						x: 466,
						y: 324,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'N': {
						type: 1,
						x: 476,
						y: 112,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'R', 0: 'J' })
						]
					},
					'O': {
						type: 1,
						x: 503,
						y: 239,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'P': {
						type: 3,
						x: 509,
						y: 178,
						distance: 4,
						rules: [
							ChMapPartRule([2], ChShowLOSPlane(ChIsMapNotClearedRule('T'))),

							ChMapPartRule([1], 
								ChShowLOSPlane(ChShipHistoricalRoutingRule('Fifth fleet', 'event.historical.fifth1', '>=',  { 1:3, 2:3, 3: 4}, 'R'))
							),

							ChIfThenElseRule(
								ChIsMapClearedRule('R'),
								ChRandomRule({ 'R': .5, 'T': .5 }),
							),

							ChMapPartRule([1], ChDefaultRouteRule('N')),
						]
					},
					'Q': {
						type: 1,
						x: 555,
						y: 291,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMapPartRule([1], ChFixedRoutingRule('O')),
							ChMapPartRule([2], ChShowLOSPlane(ChFixedRoutingRule('T'))),
						]
					},
					'R': {
						type: 1,
						x: 556,
						y: 88,
						distance: 5,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'S': {
						type: 3,
						x: 643,
						y: 258,
						distance: 6,
						end: true
					},
					'T': {
						type: 1,
						x: 598,
						y: 185,
						distance: 5,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Fleet, Head out! Reinforce the Northern Defense Line!',
				bgmMap: 90,
				fleetTypes: [1,2,3],
				bgmDN: 11,
				bgmNN: 11,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: [23,22],
				checkLock: [1,3,4],
				giveLock: 2,
				lbas: 2,
				reward: { ships: [521], firstOnly: true },
				parts: {
					1: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 500 },
							2: { 1: 400 },
							1: { 1: 300 },
						},
						transport: 'U'
					},
					2: {
						currentBoss: 'W',
						maphp: {
							3: { 1: 1920 },
							2: { 1: 1760 },
							1: { 1: 1600 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 480,
					2: 440,
					1: 400,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 3, [
							{
								node: 'B',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							},
							{
								node: 'C',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							},
							{
								node: 'E',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							},
						], {
							partToUnlock: 1,
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part == 2;
						},
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 2,
						})
					}
				},
				debuffRules: new ChGimmickList('debuff', 2, 3, [
					{
						node: 'V',
						type: 'battle',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'P',
						type: 'battle',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
					{
						node: 'R',
						type: 'battle',
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
					},
				]),
				nodes: {
					'Start': {
						type: 0,
						x: 251,
						y: 312,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'A': {
						type: 1,
						x: 42,
						y: 150,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 2,
						x: 70,
						y: 102,
						distance: 3,
						dropoff: true,
						resource: 3,
						amount: [250],
						end: true
					},
					'C': {
						type: 2,
						x: 107,
						y: 149,
						distance: 2,
						dropoff: true,
						resource: 2,
						amount: [200],
						end: true
					},
					'D': {
						type: 3,
						x: 123,
						y: 226,
						distance: 1,
						rules: [
							ChSelectRouteRule(['A','C'])
						]
					},
					'E': {
						type: 2,
						x: 151,
						y: 111,
						distance: 3,
						dropoff: true,
						resource: 1,
						amount: [150],
						end: true
					},
					'F': {
						type: 1,
						x: 190,
						y: 191,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'G': {
						type: 1,
						x: 202,
						y: 142,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'H': {
						type: 3,
						x: 242,
						y: 164,
						distance: 3,
						rules: [
							ChSelectRouteRule(['F','G'])
						]
					},
					'I': {
						type: 1,
						x: 292,
						y: 101,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'O'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'O'),
							], 'AND', 'O', 'L')
						]
					},
					'J': {
						type: 3,
						x: 309,
						y: 288,
						distance: 3,
						rules: [
							ChFleetTypeRule(3, 'K'),
							ChFleetTypeRule(2, 'N'),
							ChRandomRule({ 'K': .5, 'N': .5 }),
						]
					},
					'K': {
						type: 1,
						x: 324,
						y: 212,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'H')),
							ChFleetTypeRule(1, 'I'),
							ChShipTypeRoutingRule(['AV', 'AO', 'LHA'], '>=', 2, 'H'),
							ChSpeedRule('>=', 10, 'M', 'L'),
						]
					},
					'L': {
						type: 1,
						x: 377,
						y: 150,
						distance: 4,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule(1, 'O', 'Q'),
						]
					},
					'M': {
						type: 3,
						x: 433,
						y: 194,
						distance: 5,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'N': {
						type: 3,
						x: 435,
						y: 288,
						distance: 4,
						rules: [
							ChSelectRouteRule(['P','R'])
						]
					},
					'O': {
						type: 1,
						x: 437,
						y: 89,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'P': {
						type: 1,
						x: 493,
						y: 240,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'Q': {
						type: 1,
						x: 532,
						y: 109,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'R': {
						type: 1,
						x: 540,
						y: 324,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'S': {
						type: 1,
						x: 568,
						y: 268,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'T')),
							ChShowLOSPlane(ChIsRouteUnlockedRule(2, 'W'))
						]
					},
					'T': {
						type: 3,
						x: 602,
						y: 199,
						distance: 7,
						end: true
					},
					'U': {
						type: 2,
						x: 636,
						y: 129,
						distance: 8,
						hidden: 1,
						resource: 0,
						rules: [
							ChLOSRule({ 3: 'V', 0: 'T' })
						]
					},
					'V': {
						type: 1,
						x: 668,
						y: 194,
						distance: 9,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 654,
						y: 269,
						distance: 8,
						hidden: 2,
						boss: true,
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Interception! Protection of the Warrior Spirit',
				bgmMap: 90,
				fleetTypes: [0],
				bgmDN: 92,
				bgmNN: 92,
				bgmDB: 19,
				bgmNB: 19,
				bossnode: 9,
				checkLock: [1,2,4],
				giveLock: 3,
				lbas: 3,
				lbasSortie: 2,
				maphp: {
					3: { 1: 3300 },
					2: { 1: 3150 },
					1: { 1: 2900 },
				},
				finalhp: {
					3: 690,
					2: 670,
					1: 650,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 1, 1: 0 },
					chance: { 3: .4, 2: .2, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
					},
				},
				additionalChecks(ships,errors) {
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
				},
				mapInfo: 'No (F)BB(V) allowed',
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 316,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'A'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '<=', 0, 'A'),
								ChSpeedRule('>=', 10, 'A'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'A'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'A'),
							], 'AND', 'A', 'D')
						]
					},
					'A': {
						type: 1,
						x: 88,
						y: 213,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 103,
						y: 132,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 197,
						y: 110,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'E', 0: 'F' })
						]
					},
					'D': {
						type: 1,
						x: 232,
						y: 259,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '=', 0, 'A'),
								ChSpeedRule('>=', 10, 'A'),
							], 'AND', 'A', 'G')
						]
					},
					'E': {
						type: 1,
						x: 244,
						y: 188,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 3,
						x: 298,
						y: 86,
						distance: 3,
						end: true
					},
					'G': {
						type: 1,
						x: 315,
						y: 248,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 344,
						y: 110,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 410,
						y: 134,
						distance: 1,
						boss: true,
						bonuses: [
							new ChEquipIdsBonuses({ type: "add" }, [ 16 ], '>=', 1, 1.4),
							new ChEquipIdsBonuses({ type: "add" }, [ 82 ], '>=', 1, 1.3),
							new ChEquipIdsBonuses({ type: "add" }, [ 93 ], '>=', 1, 1.3),
							new ChEquipIdsBonuses({ type: "add" }, [ 143 ], '>=', 1, 1.3),
							new ChEquipIdsBonuses({ type: "add" }, [ 99 ], '>=', 1, 1.2),
							new ChEquipIdsBonuses({ type: "add" }, [ 100 ], '>=', 1, 1.2),
							new ChEquipIdsBonuses({ type: "add" }, [ 199 ], '>=', 1, 1.3),
							new ChEquipIdsBonuses({ type: "add" }, [ 200 ], '>=', 1, 1.3),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'J': {
						type: 3,
						x: 416,
						y: 253,
						distance: 3,
						rules: [
							ChSelectRouteRule(['L','N'])
						]
					},
					'K': {
						type: 1,
						x: 497,
						y: 158,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'I', 0: 'M' })
						]
					},
					'L': {
						type: 1,
						x: 495,
						y: 218,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'O', 'K'),
						]
					},
					'M': {
						type: 3,
						x: 515,
						y: 86,
						distance: 5,
						end: true
					},
					'N': {
						type: 1,
						x: 522,
						y: 311,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'O', 'Q'),
						]
					},
					'O': {
						type: 1,
						x: 573,
						y: 231,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'P': {
						type: 1,
						x: 628,
						y: 137,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'Q': {
						type: 1,
						x: 649,
						y: 284,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'The Northern Witch',
				bgmMap: 90,
				fleetTypes: [1,2],
				bgmDN: 19,
				bgmNN: 19,
				bgmDB: 93,
				bgmNB: 93,
				bossnode: [20,18],
				lbas: 3,
				reward: { ships: [511] },
				parts: {
					1: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 1200 },
							2: { 1: 1100 },
							1: { 1: 1050 },
						},
						finalhp: {
							3: 400,
							2: 400,
							1: 400,
						},
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 3850 },
							2: { 1: 3080 },
							1: { 1: 3000 },
						},
						finalhp: {
							3: 770,
							2: 770,
							1: 770,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 5, [], {
							partToUnlock: 1
						})
					}
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .4, 2: .4, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Hard 2','Hard 3','Medium 1'],
						1: ['Medium 1','Easy 1'],
					},
					debuffGive: function(airState,totalDamage) {
						if (totalDamage <= 0) CHDATA.event.maps[5].debuff.AB = 1;
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.C && debuff.D && debuff.E && (debuff.AB || CHDATA.event.maps[5].diff == 1 || CHDATA.config.disableRaidReq);
				},
				debuffRules: new ChGimmickList('debuff', null, 5, [
					{
						node: 'AB',
						type: 'NoHPLoss',
						timesRequiredPerDiff: {
							1: 0,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'C',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
					{
						node: 'D',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
					{
						node: 'E',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
					},
				]),
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 667,
						y: 258,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 610,
						y: 199,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'A': {
						type: 3,
						x: 557,
						y: 257,
						distance: 2,
						rules: [
							ChSelectRouteRule(['D','E'])
						]
					},
					'B': {
						type: 1,
						x: 566,
						y: 156,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 510,
						y: 107,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 489,
						y: 289,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 493,
						y: 215,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '>=', 3, 'F'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '>=', 5, 'F', 'H'),
						]
					},
					'F': {
						type: 1,
						x: 433,
						y: 124,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'H')),
							ChIsMapNotClearedRule('J'),
							ChDefaultRouteRule('H')
						]
					},
					'G': {
						type: 1,
						x: 419,
						y: 321,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'CV', 'CVB'], '>=', 4, 'L'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'L', 'M'),
						]
					},
					'H': {
						type: 1,
						x: 400,
						y: 227,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChIsMapNotClearedRule('I'),
								ChShipTypeRoutingRuleMainFleetOnly(['aBB','CV','CVB'], '>=', 6, 'I'),
							], 'AND', 'I'),
							
							ChMultipleRulesRule([
								ChIsMapNotClearedRule('I'),
								ChShipTypeRoutingRuleMainFleetOnly(['CLT'], '>=', 3, 'I'),
							], 'AND', 'I'),
							
							ChMultipleRulesRule([
								ChIsMapNotClearedRule('G'),
								ChShipTypeRoutingRuleMainFleetOnly(['CV','CVB'], '>=', 3, 'G'),
							], 'AND', 'G'),
							
							ChMultipleRulesRule([
								ChIsMapNotClearedRule('G'),
								ChShipTypeRoutingRuleMainFleetOnly(['aBB','CV','CVB'], '>=', 4, 'G'),
							], 'AND', 'G'),
							
							ChMultipleRulesRule([
								ChIsMapNotClearedRule('M'),
								ChShipMultipleHistoricalGroupRoutingRule([
									{ groupName: 'Fifth fleet' , shipsIds: 'event.historical.fifth2' },
									{ groupName: 'Russians' , shipsIds: 'event.historical.russian' },
								], '>=', 5, 'M'),
							], 'AND', 'M'),
							
							ChIsMapNotClearedRule('G'),
							ChShipTypeRoutingRule(['CLT'], '>=', 3, 'I'),
							ChShipTypeRoutingRule(['aBB'], '>=', 4, 'M'),
							ChShipTypeRoutingRule(['AO'], '>', 0, 'M'),
							ChDefaultRouteRule('G')
						]
					},
					'I': {
						type: 4,
						x: 347,
						y: 200,
						distance: 4,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 3,
						x: 343,
						y: 89,
						distance: 4,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['K','N'])
						]
					},
					'K': {
						type: 1,
						x: 293,
						y: 169,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Hard 1'],
							1: ['Easy 1'],
						},
						rules: [
							ChLOSRule({ 3: 'O', 0: 'Q' })
						]
					},
					'L': {
						type: 1,
						x: 289,
						y: 305,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[5].diff != 3) {
								let num = 0;
								for (let mid of MAPDATA[38].historical.fifth2.concat(MAPDATA[38].historical.russian)) {
									if (isShipInList(ships.ids,mid)) num++;
								}
								if (num >= 4) {
									this.showLoSPlane = 'R';
									return checkELoS33(getELoS33(1,1,true),{ 34: 'R', 32: 'P' });
								}
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,1,true),{ 34: 'M', 32: 'P' });
						},
						rules: [
							ChIfThenElseRule(
								ChDifficultyRule([3], 'M'),
								ChLOSRule({ 34: 'M', 32: 'P' })
							),

							ChIfThenElseRule(
								ChShipMultipleHistoricalGroupRoutingRule([
									{ groupName: 'Fifth fleet' , shipsIds: 'event.historical.fifth2' },
									{ groupName: 'Russians' , shipsIds: 'event.historical.russian' },
								], '>=', 4, 'R'),
								ChLOSRule({ 34: 'R', 32: 'P' }),
								ChLOSRule({ 34: 'M', 32: 'P' })
							),
						]
					},
					'M': {
						type: 1,
						x: 287,
						y: 244,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 34: 'R', 32: 'Q' })
						]
					},
					'N': {
						type: 1,
						x: 269,
						y: 81,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 207,
						y: 121,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						rules: [
							ChLOSRule( { 3: 'T', 0: 'S' })
						]
					},
					'P': {
						type: 3,
						x: 203,
						y: 337,
						distance: 6,
						end: true
					},
					'Q': {
						type: 3,
						x: 189,
						y: 191,
						distance: 6,
						end: true
					},
					'R': {
						type: 1,
						x: 158,
						y: 285,
						distance: 6,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.russian', 1.5),
							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.fifth2', 1.2),
							new ChEquipTypesBonuses({ type: 'add' }, [DIVEBOMBER], '>=', 1, 1.5),
						],
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						end: true
					},
					'S': {
						type: 3,
						x: 132,
						y: 81,
						distance: 7,
						end: true
					},
					'T': {
						type: 1,
						x: 117,
						y: 156,
						distance: 7,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.russian', 1.5),
							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.fifth2', 1.2),
							new ChEquipTypesBonuses({ type: 'add' }, [DIVEBOMBER], '>=', 1, 1.5),
						],
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			}
		}
	},
	39: {
		name: 'Summer 2017',
		date: '2017-08-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/DVZX6RR.png',
		bannerImgAlt: 'http://i.imgur.com/nOkdjn2.png',
		transportCalc: transportCalcStandard,
		historical: {
			ceylon: [
				78,79,85,86,
				76,83,90,91,110,111,
				69,70,71,72,120,124,125,
				23,54,114,
				9,10,12,17,18,32,48,49,122,167,168,169,170,455
			],
			european: [
				171,174,175,176,431,432,
				441,442,443,444,448,449,535,
				439,515,
				491,492
			]
		},
		disableMore: { ships: [475,492,515] },
		overrideStats: {
			1700: { HP: 600 },
			1701: { HP: 700 },
			1702: { HP: 444 },
			1703: { HP: 544 },
			1704: { HP: 644 },
			1705: { HP: 370 },
			1706: { HP: 430, AR: 169 },
			1707: { HP: 490, AR: 189 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Commence Recross Operation',
				bgmMap: 95,
				fleetTypes: [0],
				bgmDN: 95,
				bgmNN: 95,
				bgmDB: 96,
				bgmNB: 96,
				bossnode: 16,
				checkLock: [1,2,3,4],
				giveLock: 5,
				maphp: {
					3: { 1: 1700 },
					2: { 1: 1240 },
					1: { 1: 700 },
				},
				finalhp: {
					3: 377,
					2: 277,
					1: 177,
				},
				currentBoss: 'P',
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB) errors.push('No (F)BB');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				mapInfo: 'No (F)BB allowed<br>No CV(B) allowed',
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{
								node: 'M',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							}
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{
								node: 'Q',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							}
						], {
							partToUnlock: 2
						})
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 376,
						y: 215,
						rules: [
							ChShipTypeRoutingRule(['DD', 'DE'], '<', 2, 'F'),
							ChShipTypeRoutingRule(['DD', 'DE', 'CL'], '<', 3, 'F'),
							ChShipTypeRoutingRule(['CVL'], '>', 1, 'F'),
							ChShipTypeRoutingRule(['CT'], '>', 1, 'F'),
							ChShipTypeRoutingRule(['CLT'], '>', 1, 'F'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'F', 'I'),
						]
					},
					'A': {
						type: 3,
						x: 119,
						y: 95,
						end: true
					},
					'B': {
						type: 3,
						x: 136,
						y: 249,
						end: true
					},
					'C': {
						type: 1,
						x: 184,
						y: 102,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 24: 'P', 22: 'A' })
						]
					},
					'D': {
						type: 1,
						x: 218,
						y: 286,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 24: 'P', 22: 'B' })
						]
					},
					'E': {
						type: 1,
						x: 274,
						y: 112,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'F': {
						type: 1,
						x: 315,
						y: 174,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'G': {
						type: 1,
						x: 338,
						y: 339,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'H': {
						type: 1,
						x: 434,
						y: 125,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 3,
						x: 434,
						y: 217,
						rules: [
							ChSelectRouteRule(['H','J'])
						]
					},
					'J': {
						type: 3,
						x: 434,
						y: 313,
						rules: [
							ChSelectRouteRule(['G','L'])
						]
					},
					'K': {
						type: 1,
						x: 509,
						y: 99,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'M')),

							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'Q'),
								ChShipTypeRoutingRule(['CVL', 'BBV'], '<=', 0, 'Q'),
							], 'AND', 'Q'),

							ChDefaultRouteRule('M'),
						]
					},
					'L': {
						type: 1,
						x: 531,
						y: 321,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'N')),

							ChShipTypeRoutingRule(['CVL', 'BBV'], '>', 0, 'N'),

							ChLOSRule({ 16: 'R', 15: 'N' }),
						]
					},
					'M': {
						type: 2,
						x: 547,
						y: 161,
						dropoff: true,
						resource: 4,
						amount: [100],
						end: true
					},
					'N': {
						type: 1,
						x: 593,
						y: 279,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'O')),

							ChShipTypeRoutingRule(['CVL', 'BBV'], '>', 1, 'O'),

							ChLOSRule({ 11: 'R', 10: 'O' }),
						]
					},
					'O': {
						type: 3,
						x: 641,
						y: 174,
						end: true
					},
					'P': {
						type: 1,
						x: 149,
						y: 179,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'Q': {
						type: 2,
						x: 496,
						y: 192,
						hidden: 1,
						dropoff: true,
						resource: 1,
						amount: [130],
						end: true
					},
					'R': {
						type: 1,
						x: 629,
						y: 342,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'S': {
						type: 1,
						x: 712,
						y: 308,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'The Crossing of Ri Lanka',
				bgmMap: 95,
				fleetTypes: [0],
				bgmDN: 96,
				bgmNN: 96,
				bgmDB: 97,
				bgmNB: 97,
				bossnode: 15,
				checkLock: [2,3,4,5],
				giveLock: 1,
				maphp: {
					3: { 1: 1440 },
					2: { 1: 1440 },
					1: { 1: 1440 },
				},
				finalhp: {
					3: 220,
					2: 220,
					1: 220,
				},
				reward: { ships: [475], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{
								node: 'I',
								type: 'battle', 
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								}
							}
						], {
							partToUnlock: 1,
						})
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 632,
						y: 221,
						rules: [
							ChShipTypeRoutingRule(['DD'], '=', 0, 'B'),
							ChShipTypeRoutingRule(['DD', 'CL'], '<', 2, 'B'),

							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'D'),
							
							ChShipTypeRoutingRule(['aBB'], '<=', 1, 'A'),
							ChDifficultyRule([1], 'A'),

							ChDefaultRouteRule('B')
						]
					},
					'A': {
						type: 3,
						x: 695,
						y: 254,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 678,
						y: 173,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'C': {
						type: 1,
						x: 646,
						y: 335,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 569,
						y: 167,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 512,
						y: 107,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 484,
						y: 313,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'J')),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'P'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 1, 'P'),
								ChSpeedRule('>=', 10, 'P'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['AV'], '>', 0, 'P'),
									ChDifficultyRule([1, 2], 'P'),
								], 'OR', 'P'),
							], 'AND', 'P'),

							ChDefaultRouteRule('J')
						]
					},
					'G': {
						type: 3,
						x: 423,
						y: 133,
						rules: [
							ChSelectRouteRule(['H','I']),
						]
					},
					'H': {
						type: 1,
						x: 409,
						y: 261,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 334,
						y: 162,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'J': {
						type: 1,
						x: 316,
						y: 290,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 3, 'M'),
							ChShowLOSPlane(ChDefaultRouteRule('L'))
						]
					},
					'K': {
						type: 1,
						x: 251,
						y: 164,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'L': {
						type: 1,
						x: 227,
						y: 255,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChIsRouteUnlockedRule(1, 'O'),
									ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 1, 'O'),
									ChShipTypeRoutingRule(['BB'], '<=', 1, 'O'),
									ChShipTypeRoutingRule(['CA', 'CAV', 'CLT'], '<=', 0, 'O'),

									ChMultipleRulesRule([
										ChSpeedRule('>=', 10, 'O'),
										ChDifficultyRule([1, 2], 'O'),
									], 'OR', 'O'),
								], 'AND', 'O'),
								ChLOSRule({ 3: 'O', 0: 'N' }),
								ChLOSRule({ 3: 'K', 0: 'N' }),
							)
						]
					},
					'M': {
						type: 3,
						x: 222,
						y: 315,
						end: true
					},
					'N': {
						type: 3,
						x: 131,
						y: 222,
						end: true
					},
					'O': {
						type: 1,
						x: 134,
						y: 123,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'P': {
						type: 1,
						x: 483,
						y: 250,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'Q': {
						type: 1,
						x: 484,
						y: 177,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Beyond the Stebian Sea',
				bgmMap: 95,
				fleetTypes: [1,2,3],
				bgmDN: 96,
				bgmNN: 96,
				bgmDB: 97,
				bgmNB: 97,
				bossnode: [12,17],
				checkLock: [2,3,4,5],
				giveLock: 1,
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 480 },
							2: { 1: 390 },
							1: { 1: 360 },
						},
						transport: 'K'
					},
					2: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 1960 },
							2: { 1: 1720 },
							1: { 1: 1560 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 490,
					2: 430,
					1: 370,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1
						})
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 630,
						y: 102,
						rules: [
							// --- Part 1
							ChMapPartRule([1], ChFleetTypeRule(3, 'A')),
							ChMapPartRule([1], ChDefaultRouteRule('B')),

							// --- Part 2
							ChFleetTypeRule(3, 'A'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 4, 'B'),
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'B'),
							ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '>=', 3, 'B'),
							ChShipTypeRoutingRuleMainFleetOnly(['CLT'], '>=', 2, 'B'),
							
							ChShipHistoricalRoutingRuleMainFleetOnly('Hiryuu and Souryuu', [90,91], '=', 2, 'A'),

							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'A'),
								ChSpeedRule('>=', 10, 'A'),							
							], 'AND', 'A'),	
							
							ChDefaultRouteRule('B')
						]
					},
					'A': {
						type: 3,
						x: 676,
						y: 246,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 618,
						y: 185,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 605,
						y: 277,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 503,
						y: 322,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 417,
						y: 287,
						rules: [
							ChSelectRouteRule(['F','H']),
						]
					},
					'F': {
						type: 1,
						x: 417,
						y: 168,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						setupSpecial: function() {
							CHDATA.sortie.F = true;
						},
						rules: [
							ChFleetTypeRule(3, 'I'),
							ChSpeedRule('>=', 10, 'I', 'G'),
						]
					},
					'G': {
						type: 1,
						x: 374,
						y: 82,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 359,
						y: 213,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'I')),

							ChFleetTypeRule(3, 'I'),

							ChRandomRule({ 'M': .5, 'N': .5 }),
						]
					},
					'I': {
						type: 1,
						x: 312,
						y: 147,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['BB', 'BBV'], '>', 0, 'J'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '>', 2, 'J'),
							ChFleetBeenThroughRule('F', 'K'),

							ChMultipleRulesRule([
								ChFleetTypeRule(3, 'K'),
								ChSpeedRule('>=', 10, 'K'),
							], 'AND', 'K'),

							ChDefaultRouteRule('J')
						]
					},
					'J': {
						type: 1,
						x: 259,
						y: 82,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 2,
						x: 187,
						y: 123,
						resource: 0,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 123,
						y: 160,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'M': {
						type: 1,
						x: 321,
						y: 301,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChCreateCustomRuleFromName("39_3_1"),
						]
					},
					'N': {
						type: 1,
						x: 272,
						y: 212,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'Q', 0: 'P' }),
						]
					},
					'O': {
						type: 3,
						x: 245,
						y: 339,
						hidden: 1,
						end: true
					},
					'P': {
						type: 3,
						x: 174,
						y: 212,
						hidden: 1,
						end: true
					},
					'Q': {
						type: 1,
						x: 183,
						y: 283,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: "set", on: [1705,1706,1707] }, [90, 91], 1.1),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Distant Suez',
				bgmMap: 95,
				fleetTypes: [1,2,3],
				bgmDN: 98,
				bgmNN: 98,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: [14,9],
				checkLock: [1,2,4,5],
				giveLock: 3,
				lbas: 1,
				reward: { ships: [492], firstOnly: true },
				parts: {
					1: {
						currentBoss: 'I',
						maphp: {
							3: { 1: 1190 },
							2: { 1: 1190 },
							1: { 1: 1190 },
						},
						finalhp: {
							3: 340, 
							2: 340, 
							1: 340, 
						}
					},
					2: {
						currentBoss: 'N',
						maphp: {
							3: { 1: 3650 },
							2: { 1: 3650 },
							1: { 1: 3650 },
						},
						finalhp: {
							3: 730, 
							2: 730, 
							1: 730, 
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 4, [], {
							partToUnlock: 1
						})
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 713,
						y: 102,
						rules: [
							ChMapPartRule([2], ChFleetTypeRule([1], 'A')),

							ChMultipleRulesRule([
								ChFleetTypeRule([1], 'A'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 3, 'A'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 4, 'A'),
							], 'AND', 'A', 'D'),
						]
					},
					'A': {
						type: 1,
						x: 703,
						y: 233,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 694,
						y: 328,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'C', 0: 'E' }),
						]
					},
					'C': {
						type: 1,
						x: 647,
						y: 243,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'D': {
						type: 1,
						x: 648,
						y: 153,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChMapPartRule([1], ChFixedRoutingRule('A'))),

							ChShipTypeRoutingRuleMainFleetOnly(['aBB'], '>=', 4, 'A'),
							ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '>=', 2, 'A'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '>=', 5, 'A'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 3, 'A', 'G'),
						]
					},
					'E': {
						type: 3,
						x: 621,
						y: 311,
						distance: 4,
						end: true
					},
					'F': {
						type: 3,
						x: 588,
						y: 128,
						distance: 2,
						end: true
					},
					'G': {
						type: 3,
						x: 574,
						y: 208,
						distance: 2,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'F'),
							ChShowLOSPlane(ChDefaultRouteRule('H'))
						]
					},
					'H': {
						type: 3,
						x: 504,
						y: 244,
						distance: 2,
						rules: [
							ChDontShowCompass(ChMapPartRule([1], ChFixedRoutingRule('I'))),

							ChFleetTypeRule(2, 'J', 'I'),
						]
					},
					'I': {
						type: 1,
						x: 562,
						y: 301,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'J': {
						type: 1,
						x: 392,
						y: 325,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 1,
						x: 315,
						y: 262,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'L'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '>=', 5, 'L'),
							ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '>', 0, 'L'),
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '=', 0, 'M'),

							ChShipHistoricalRoutingRule('Europeans', 'event.historical.european', '>=', { 1:1, 2:2, 3:3}, 'M'),
							ChDefaultRouteRule('L'),
						]
					},
					'L': {
						type: 1,
						x: 252,
						y: 250,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 237,
						y: 194,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 1,
						x: 156,
						y: 125,
						distance: 6,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', on: [1745,1746,1747,1748,1749,1750]}, 'event.historical.european', 1.3),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Invitation to the Mediterranean Sea',
				bgmMap: 98,
				fleetTypes: [0],
				bgmDN: 97,
				bgmNN: 97,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: 13,
				checkLock: [1,2,3,5],
				giveLock: 4,
				lbas: 1,
				maphp: {
					3: { 1: 2120 },
					2: { 1: 1800 },
					1: { 1: 1600 },
				},
				finalhp: {
					3: 530,
					2: 450,
					1: 400,
				},
				debuffRules: new ChGimmickList('debuff',null, 5, [
					{
						node: 'C',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'D',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
				]),
				nodes: {
					'Start': {
						type: 0,
						x: 693,
						y: 310,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 1,
						x: 630,
						y: 277,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 566,
						y: 239,
						distance: 2,
						rules: [
							ChSelectRouteRule(['C','D']),
						]
					},
					'C': {
						type: 1,
						x: 482,
						y: 317,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 470,
						y: 182,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 407,
						y: 236,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '<', 2, 'H'),
							ChShipHistoricalRoutingRule('Europeans', 'event.historical.european', '>=', { 1:1, 2:2, 3:3 }, 'F'),
							ChDefaultRouteRule('H')
						]
					},
					'F': {
						type: 1,
						x: 374,
						y: 181,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>=', 6, 'G'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 2, 'I'),
							ChShipHistoricalRoutingRule('Europeans', 'event.historical.european', '>=', { 1:1, 2:2, 3:3 }, 'I'),
							ChDefaultRouteRule('J')
						]
					},
					'G': {
						type: 4,
						x: 335,
						y: 115,
						distance: 5,
						resource: 1,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 332,
						y: 300,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 2, 'I'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'I'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'I'),
							], 'AND', 'I', 'F')
						]
					},
					'I': {
						type: 1,
						x: 265,
						y: 250,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 259,
						y: 197,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 1,
						x: 190,
						y: 190,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 22: 'M', 20: 'L' }),
						]
					},
					'L': {
						type: 3,
						x: 171,
						y: 264,
						distance: 7,
						end: true
					},
					'M': {
						type: 1,
						x: 133,
						y: 126,
						distance: 8,
						boss: true,
						bonuses: [
							new ChDebuffBonuses({ type: "set" }, 1.2),
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .35;
								}
							}, 'Enemy fleet evasion reduced')
						],
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Battle of Malta Island',
				bgmMap: 98,
				fleetTypes: [1,2,3],
				bgmDN: 97,
				bgmNN: 97,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: [19,8],
				checkLock: [1,3,4,5],
				giveLock: 2,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'H',
						maphp: {
							3: { 1: 2000 },
							2: { 1: 1500 },
							1: { 1: 1350 },
						},
						transport: 'F'
					},
					2: {
						currentBoss: 'S',
						maphp: {
							3: { 1: 2200 },
							2: { 1: 2200 },
							1: { 1: 2000 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 440,
					2: 440,
					1: 440,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '6_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 6, [], {
							partToUnlock: 1
						})
					}
				},
				startCheckRule: [
					ChMapPartRule([1], ChFixedRoutingRule('Start1')),

					ChMapPartRule([2], ChFleetTypeRule(3, 'Start1')),
					ChMapPartRule([2], ChDefaultRouteRule('Start2')),
				],
				debuffRules: new ChGimmickList('debuff', 2, 6, [
					{
						node: 'H',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'A',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
					{
						node: 'O',
						type: 'battle',
						ranksRequiredPerDiff: {
							1: 'S',
							2: 'S',
							3: 'S',
						},
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						}
					},
				]),
				nodes: {
					'Start1': {
						type: 0,
						x: 712,
						y: 326,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 376,
						y: 284,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'A': {
						type: 3,
						x: 655,
						y: 334,
						distance: 3,
						rules: [
							ChSelectRouteRule(['B','C']),
						]
					},
					'B': {
						type: 1,
						x: 621,
						y: 258,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 582,
						y: 317,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'CV', 'CVB'], '>=', 3, 'D'),
							ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '>=', 4, 'D', 'E'),
						]
					},
					'D': {
						type: 1,
						x: 520,
						y: 270,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule(3, 'F'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(['aBB', 'aCV'], '<=', 2, 'F'),
								ChShipTypeRoutingRule(['aCV'], '<=', 3, 'F'),
								ChShipTypeRoutingRuleMainFleetOnly(['DD'], '>=', 2, 'F'),
							], 'AND', 'F', 'G')
						]
					},
					'E': {
						type: 1,
						x: 484,
						y: 335,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule(3, 'I'),
							
							ChShipTypeRoutingRuleMainFleetOnly(['CV', 'CVB'], '>', 0, 'I', 'G'),
						]
					},
					'F': {
						type: 2,
						x: 463,
						y: 180,
						distance: 3,
						dropoff: true,
						resource: 0,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 459,
						y: 263,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'H': {
						type: 1,
						x: 419,
						y: 252,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffC: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'I': {
						type: 2,
						x: 357,
						y: 342,
						distance: 4,
						dropoff: true,
						resource: 2,
						amount: [192],
						rules: [
							ChMapPartRule([1], ChShowCompass(ChFixedRoutingRule('G'))),
							ChMapPartRule([2], ChShowCompass(ChFixedRoutingRule('K'))),
						]
					},
					'J': {
						type: 4,
						x: 353,
						y: 156,
						distance: 1,
						hidden: 1,
						resource: 1,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'K': {
						type: 1,
						x: 326,
						y: 216,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'J'),
								ChDifficultyRule([3], 'J'),
							], 'AND', 'J'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'J'),
								ChSpeedRule('<=', 5, 'J'),
								ChDifficultyRule([2,3], 'J'),
							], 'AND', 'J'),
							
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'J', 'M'),
						]
					},
					'L': {
						type: 1,
						x: 292,
						y: 75,
						distance: 1,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'M': {
						type: 1,
						x: 250,
						y: 220,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'N'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'N', 'P'),
						]
					},
					'N': {
						type: 1,
						x: 232,
						y: 177,
						distance: 1,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['CLT'], '>=', 2, 'O'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'O', 'P'),
						]
					},
					'O': {
						type: 1,
						x: 208,
						y: 123,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'P': {
						type: 1,
						x: 174,
						y: 207,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({ 45: 'S', 42: 'Q' }),
						]
					},
					'Q': {
						type: 3,
						x: 163,
						y: 256,
						distance: 1,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 137,
						y: 165,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'S': {
						type: 1,
						x: 102,
						y: 246,
						distance: 1,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChDebuffBonuses({ type: "set" }, 1.2),
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .35;
								}
							}, 'Enemy fleet evasion reduced')
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Battle of Dover Strait',
				bgmMap: 98,
				fleetTypes: [1,2,3],
				bgmDN: 99,
				bgmNN: 99,
				bgmDB: 100,
				bgmNB: 100,
				bossnode: 21,
				lbas: 3,
				maphp: {
					3: { 1: 5280 },
					2: { 1: 5280 },
					1: { 1: 5280 },
				},
				finalhp: {
					3: 880,
					2: 880,
					1: 880,
				},
				reward: { ships: [515] },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 0 },
					chance: { 3: .15, 2: .15, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '7_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 7, [
							{
								node: 'H',
								type: 'battle',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'S',
									3: 'S',
								}
							},
							{
								node: 'J',
								type: 'battle',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'S',
									3: 'S',
								}
							},
							{
								node: 'K',
								type: 'battle',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'S',
									3: 'S',
								}
							},
							{
								node: 'P',
								type: 'battle',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								}
							},
							{
								node: 'R',
								type: 'battle',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								}
							},
						], {
							partToUnlock: 1
						})
					}
				},
				debuffRules: new ChGimmickList('debuff', null, 7, [
					{
						node: 'P',
						type: 'battle',
						routeUnlockRequired: 1,
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'A',
						}
					},
					{
						node: 'R',
						type: 'battle',
						routeUnlockRequired: 1,
						timesRequiredPerDiff: {
							1: 1,
							2: 1,
							3: 1,
						},
						ranksRequiredPerDiff: {
							1: 'A',
							2: 'A',
							3: 'A',
						}
					},
				]),				
				nodes: {
					'Start': {
						type: 0,
						x: 170,
						y: 311,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'A': {
						type: 1,
						x: 50,
						y: 199,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'E'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'E'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'E'),
							], 'AND', 'E', 'B'),
						]
					},
					'B': {
						type: 1,
						x: 67,
						y: 116,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'C': {
						type: 3,
						x: 110,
						y: 254,
						distance: 1,
						rules: [
							ChSelectRouteRule(['A','G']),
						]
					},
					'D': {
						type: 1,
						x: 137,
						y: 182,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(['CL', 'DD'], '>', 0, 'H'),
								ChDebuffIsDoneRule('H'),
							], 'AND', 'H'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(['CL', 'DD'], '>', 0, 'H'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'H'),
							], 'AND', 'H', 'F'),
						]
					},
					'E': {
						type: 1,
						x: 156,
						y: 76,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChCreateCustomRuleFromName("39_7_1")
						]
					},
					'F': {
						type: 1,
						x: 193,
						y: 125,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 199,
						y: 232,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule(3, 'H'),
							ChSpeedRule('<=', 5, 'D'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleMainFleetOnly(['CL', 'DD'], '>', 0, 'H'),
								ChDebuffIsDoneRule('H'),
							], 'AND', 'H'),

							ChRandomRule({ 'D': .7, 'H': .3 }),
						]
					},
					'H': {
						type: 1,
						x: 270,
						y: 164,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'L')),

							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'O'),
								ChFleetTypeRule(1, 'O'),
							], 'AND', 'O'),	
							
							ChDefaultRouteRule('L'),
						]
					},
					'I': {
						type: 1,
						x: 295,
						y: 123,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 326,
						y: 82,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'K': {
						type: 1,
						x: 374,
						y: 130,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'L': {
						type: 1,
						x: 370,
						y: 213,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFleetTypeRule(3, 'P'),

							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(1, 'P'),
								ChSpeedRule('>=', 10, 'P'),
							], 'AND', 'P'),
							
							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(1, 'M'),
								ChSpeedRule('<', 10, 'M'),
							], 'AND', 'M'),
							
							ChMultipleRulesRule([
								ChDebuffIsNotDoneRule('P'),
								ChFleetTypeRule(2, 'P'),
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'P'),
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 3, 'P'),
								ChSpeedRule('>=', 10, 'P'),
							], 'AND', 'P'),
							
							ChMultipleRulesRule([
								ChDebuffIsNotDoneRule('M'),
								ChFleetTypeRule(2, 'M'),
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'M'),
								ChShipTypeRoutingRuleEscortOnly(['DD'], '>=', 3, 'M'),
								ChSpeedRule('<', 10, 'M'),
							], 'AND', 'M', 'O'),
						]
					},
					'M': {
						type: 1,
						x: 402,
						y: 283,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'N': {
						type: 1,
						x: 407,
						y: 85,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 3,
						x: 456,
						y: 138,
						distance: 5,
						rules: [
							ChSelectRouteRule(['Q','R']),
						]
					},
					'P': {
						type: 1,
						x: 461,
						y: 215,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 506,
						y: 194,
						distance: 6,
						bonuses: [
							new ChDebuffBonuses({ type: 'set' }, 1.3),
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .35;
								}
							}, 'Enemy fleet evasion reduced'),
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let lbas of LBAS) lbas.bonusSpecial = [{ mod: 1.3 }];
							}, 'LBAS gets a 1.3x damage bonus for the rest of the sortie')
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'R': {
						type: 1,
						x: 522,
						y: 122,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'S': {
						type: 3,
						x: 559,
						y: 252,
						distance: 7,
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'T': {
						type: 1,
						x: 619,
						y: 267,
						distance: 8,
						bonuses: [
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .5;
								}
							}, 'Enemy fleet evasion reduced'),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						compDiffF: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 1','Medium 3'],
							1: ['Easy 1','Easy 3'],
						},
						rules: [
							ChLOSRule({ 45: 'U', 42: 'V' }),
						]
					},
					'U': {
						type: 1,
						x: 665,
						y: 210,
						distance: 9,
						boss: true,
						bonuses: [
							new ChCustomBonusEffects({ debuffOnly: true }, () => {
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .35;
								}
							}, 'Enemy fleet evasion reduced'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'V': {
						type: 3,
						x: 670,
						y: 267,
						distance: 9,
						end: true
					}
				}
			}
		}
	},
	40: {
		name: 'Fall 2017',
		date: '2017-11-17',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 25, vanguardEvDD2: 40, vanguardEvOther1: 15, vanguardEvOther2: 25 },
		newResupplyCosts: true,
		bannerImg: 'http://i.imgur.com/Kvt6ikS.png',
		bannerImgAlt: 'http://i.imgur.com/xWMGYCa.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1628: { AR: 193 },
			1629: { AR: 223 },
			1630: { AR: 273 },
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
		},
		voiceSpecial: {
			26: { 'nbattack': 'assets/voice/Fusou_ShoGo_2017_NightAttack.mp3' },
			27: { 'nbattack': 'assets/voice/Yamashiro_ShoGo_2017_NightAttack.mp3' },
			43: { 'attack': 'assets/voice/Shigure_ShoGo_2017_Attack.mp3' },
		},
		historical: {
			shima: [63,64,114,15,16,18,49],
			kurita: [
				131,143,80,78,79,
				66,67,68,69,62,65,71,72,124,125,
				138,139,
				50,135,409,410,452,20,415,167,168,169
			],
			troopTransport: [61,113,486],
			shimaEscort: [38,40,41],
			ozawa: [111, 102,103,116, 77,87, 22,100,183, 421,423],
			nishimura: [26,27,70,43,97,413,414],
		},
		disableMore: { ships: [531,532] },
		maps: {
			1: {
				name: 'E-1',
				nameT: '2nd Striking Force, Set Sail!',
				fleetTypes: [0],
				bgmMap: 103,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: 19,
				checkLock: [5,6],
				giveLock: 4,
				lbas: 1,
				currentBoss: 'S',
				maphp: {
					3: { 1: 590 },
					2: { 1: 440 },
					1: { 1: 420 },
				},
				finalhp: {
					3: 118,
					2: 88,
					1: 84,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{
								node: 'F',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1, 
									2: 1, 
									3: 1, 
								}
							},
							{
								node: 'K',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1, 
									2: 1, 
									3: 1, 
								}
							},
						], 
						{
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{
								node: 'E',
								type: 'AirState',
								timesRequiredPerDiff: {
									3: 1, 
								},
								ranksRequiredPerDiff: {
									3: 'AS'
								},
								routeUnlockRequired: 1,
							},
							{
								node: 'O',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1, 
									2: 1, 
									3: 1, 
								}
							},
							{
								node: 'P',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1, 
									2: 1, 
									3: 1, 
								}
							},
						], 
						{
							partToUnlock: 2,
						})
					}
				},
				additionalCheck: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
				},
				mapInfo: 'No (F)BB(V) allowed<br>No CV(L/B) allowed',
				nodes: {
					'Start': {
						type: 0,
						x: 695,
						y: 116,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 650,
						y: 194,
						distance: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 582,
						y: 258,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 3,
						x: 534,
						y: 336,
						distance: 3,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'D': {
						type: 1,
						x: 522,
						y: 213,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 481,
						y: 150,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showLoSPlane: 'H',
						rules: [
							ChIfThenElseRule(
								ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', ">=", { 1:0, 2:1, 3:2 }, 'H'),
								ChLOSRule({ 20: 'H', 15: 'I' }),
								ChLOSRule({ 80: 'H', 50: 'I' }),
							),
						]
					},
					'F': {
						type: 2,
						x: 456,
						y: 202,
						distance: 3,
						dropoff: true,
						resource: 2,
						amount: [70],
						end: true
					},
					'G': {
						type: 3,
						x: 441,
						y: 317,
						distance: 4,
						rules: [
							ChSelectRouteRule(['D','J']),
						]
					},
					'H': {
						type: 1,
						x: 434,
						y: 157,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'I': {
						type: 3,
						x: 432,
						y: 81,
						distance: 3,
						end: true
					},
					'J': {
						type: 1,
						x: 348,
						y: 298,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'K')),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'M'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'M'),
								ChShipTypeRoutingRule(['CL'], '>=', { 1:0, 2:0, 3:1 }, 'M'),
							], 'AND', 'M'),

							ChDefaultRouteRule('K')
						]
					},
					'K': {
						type: 1,
						x: 300,
						y: 289,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 248,
						y: 279,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'M': {
						type: 3,
						x: 309,
						y: 205,
						distance: 5,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['N','O']),
						]
					},
					'N': {
						type: 1,
						x: 274,
						y: 127,
						distance: 6,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'O': {
						type: 1,
						x: 212,
						y: 256,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(2, 'Q'),
								ChLOSRule({ 20: 'Q', 15: 'R' }),
							),

							ChIfThenElseRule(
								ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', '>=', { 1: 0, 2:1, 3:2 }, 'S'),
								ChLOSRule({ 20: 'S', 15: 'R' }),
							),

							ChLOSRule({ 80: 'S', 50: 'Q', 20: 'Q', 15: 'R' }),
						]
					},
					'P': {
						type: 2,
						x: 176,
						y: 106,
						distance: 7,
						hidden: 1,
						dropoff: true,
						resource: 3,
						amount: [70],
						end: true
					},
					'Q': {
						type: 1,
						x: 176,
						y: 323,
						distance: 8,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'R': {
						type: 3,
						x: 157,
						y: 196,
						distance: 7,
						hidden: 1,
						end: true
					},
					'S': {
						type: 1,
						x: 110,
						y: 253,
						distance: 8,
						hidden: 2,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.2),
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Operation Shō-Ichi-Gō, commence preparation!',
				fleetTypes: [0,7],
				bgmMap: 103,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: 16,
				checkLock: [5,6],
				giveLock: 4,
				transport: 'N',
				lbas: 1,
				reward: {
					3: { ships: [531], items: [269], firstOnly: true },
					2: { ships: [531], items: [269], firstOnly: true },
					1: { ships: [531], firstOnly: true },
				},
				maphp: {
					3: { 1: 400 },
					2: { 1: 370 },
					1: { 1: 330 },
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{
								node: 'C',
								type: 'AirState',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'AS',
									3: 'AS',
								}
							},
							{
								node: 'D',
								timesRequiredPerDiff: {
									3: 1,
								},
								ranksRequiredPerDiff: {
									3: 'AS',
								}
							},
							{
								node: 'J',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									1: 'S',
									2: 'S',
									3: 'S',
								}
							},
						], {
							partToUnlock: 1
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				mapInfo: 'No CV(B) allowed',
				startCheckRule: [
					ChIsRouteNotUnlockedRule(1, 'Start1'),

					ChShipTypeRoutingRule(['SS', 'SSV', 'AV', 'AO'], '=', 0, 'Start2'),
					ChDefaultRouteRule('Start1')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 707,
						y: 161,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 359,
						y: 87,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'A': {
						type: 1,
						x: 627,
						y: 195,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV', 'SS', 'SSV'], '=', 0, 'B'),
								ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'B'),

								ChMultipleRulesRule([
									ChDifficultyRule([1], 'B'),
									ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', '>=', 2, 'B'),
								], 'OR', 'B'),
							], 'AND', 'B', 'D'),
						]
					},
					'B': {
						type: 3,
						x: 556,
						y: 225,
						distance: 3,
						rules: [
							ChSelectRouteRule(['C','F']),
						]
					},
					'C': {
						type: 1,
						x: 556,
						y: 135,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 1,
						x: 552,
						y: 319,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 1,
						x: 495,
						y: 114,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 462,
						y: 264,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['BB', 'BBV'], '=', 0, 'G'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'G'),

								ChMultipleRulesRule([
									ChDifficultyRule([1], 'G'),
									ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', '>=', 2, 'G'),
								], 'OR', 'G'),
							], 'AND', 'G', 'H'),
						]
					},
					'G': {
						type: 3,
						x: 407,
						y: 179,
						distance: 2,
						rules: [
							ChSelectRouteRule(['I','J']),
						]
					},
					'H': {
						type: 1,
						x: 351,
						y: 311,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'I': {
						type: 1,
						x: 291,
						y: 179,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 265,
						y: 225,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'K': {
						type: 1,
						x: 212,
						y: 181,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 119,
						y: 183,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 100,
						y: 279,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 2,
						x: 203,
						y: 341,
						distance: 6,
						dropoff: true,
						resource: 0,
						rules: [
							ChLOSRule({ 3: 'P', 0: 'O' }),
						]
					},
					'O': {
						type: 3,
						x: 218,
						y: 237,
						distance: 4,
						end: true
					},
					'P': {
						type: 1,
						x: 161,
						y: 249,
						distance: 5,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.15),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 258,
						y: 126,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'I'),
							ChShipTypeRoutingRule(['CLT'], '>=', 2, 'I'),

							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', '>=', { 1:0, 2:3, 3:4 }, 'L'),
								ChShipTypeRoutingRule(['DD'], '>=', { 1:1, 2:2, 3:3 }, 'L'),
								ChShipTypeRoutingRule(['aCV', 'aBB'], '=', 0, 'L'),
							], 'AND', 'L'),

							ChShipTypeRoutingRule(['aCV', 'aBB'], '=', 0, 'K'),
							
							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Shima fleet', 'event.historical.shima', '>=', { 1:0, 2:2, 3:3 }, 'K'),
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'K'),
								ChShipTypeRoutingRule(['aCV'], '<=', 1, 'K'),
							], 'AND', 'K'),

							ChDefaultRouteRule('I')
						]
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Commence Operation Shō-Ichi-Gō!',
				fleetTypes: [1,2,3],
				bgmMap: 106,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: [7,10,19],
				checkLock: [4,6],
				giveLock: 5,
				lbas: 2,
				reward: {
					3: { items: [218,270,272], firstOnly: true },
					2: { items: [218,272], firstOnly: true },
					1: { items: [218,272], firstOnly: true },
				},
				parts: {
					1: {
						currentBoss: 'G',
						transport: null,
						maphp: {
							3: { 1: 1020 },
							2: { 1: 765 },
							1: { 1: 660 },
						},
						finalhp: {
							3: 255,
							2: 255,
							1: 255,
						},
						enemyRaid: null,
					},
					2: {
						currentBoss: 'J',
						transport: 'H',
						maphp: {
							3: { 1: 700 },
							2: { 1: 570 },
							1: { 1: 530 },
						},
						finalhp: null,
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 0 },
							chance: { 3: .25, 2: .25, 1: 0 },
							compName: 'Q',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
							},
						}
					},
					3: {
						currentBoss: 'S',
						transport: null,
						maphp: {
							3: { 1: 1575 },
							2: { 1: 1400 },
							1: { 1: 1225 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 0 },
							chance: { 3: .25, 2: .25, 1: 0 },
							compName: 'Q',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
							},
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 3, 3, [
							{
								node: 'AB', 
								type: 'NoHPLoss',
								timesRequiredPerDiff: {
									2: 1,
									3: 1
								}
							}
						], {
							partToUnlock: 2
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[3].part == 1 && CHDATA.fleets.combined != 2) errors.push('STF only');
				},
				mapInfo: 'Only STF is allowed on first part',
				startCheckRule: [
					ChIsRouteNotUnlockedRule(1, 'Start1'),

					ChFleetTypeRule(3, 'Start2'),

					ChMultipleRulesRule([
						ChIsRouteUnlockedRule(2, 'Start3'),
						ChFleetTypeRule(1, 'Start3'),
					], 'AND', 'Start3'),

					ChDefaultRouteRule('Start1')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 276,
						y: 82,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 122,
						y: 90,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Start3': {
						type: 0,
						x: 531,
						y: 83,
						hidden: 2,
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'A': {
						type: 1,
						x: 195,
						y: 115,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 108,
						y: 150,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Troop transport', 'event.historical.troopTransport', '>=', 3, 'D'),
							ChShipHistoricalRoutingRule('Shima escort', 'event.historical.shimaEscort', '>=', 3, 'D'),
							
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'D'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['aBB'], '=', 0, 'D'),
									ChShipTypeRoutingRule(['aBB'], '=', 2, 'D'),
								], 'OR', 'D'),

								ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '=', 0, 'D'),
							
							], 'AND', 'D', 'C'),
						]
					},
					'C': {
						type: 1,
						x: 86,
						y: 216,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'F'),
								ChSpeedRule('>=', 10, 'F'),
								ChShipTypeRoutingRuleMainFleetOnly(['aCV'], '=', 0, 'F'),

								ChMultipleRulesRule([
									ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', 10, 'F'),
									ChShipTypeRoutingRule(['aBB'], '<=', 1, 'F'),
								], 'OR', 'F'),
							], 'AND', 'F', 'D'),
						]
					},
					'D': {
						type: 1,
						x: 182,
						y: 233,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 258,
						y: 251,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'F')),

							ChFleetTypeRule(3, 'H'),

							ChDefaultRouteRule('F')
						]
					},
					'F': {
						type: 1,
						x: 199,
						y: 271,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 1,
						x: 129,
						y: 292,
						distance: 4,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.kurita', 1.15)
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'H': {
						type: 2,
						x: 297,
						y: 207,
						distance: 1,
						hidden: 1,
						dropoff: true,
						resource: 0,
						rules: [
							ChLOSRule({ 3: 'J', 0: 'I' }),
						]
					},
					'I': {
						type: 3,
						x: 226,
						y: 191,
						distance: 2,
						hidden: 1,
						end: true
					},
					'J': {
						type: 1,
						x: 261,
						y: 139,
						distance: 2,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.troopTransport', 1.15)
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'K': {
						type: 1,
						x: 390,
						y: 235,
						distance: 3,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChRandomRule({ 'L': .5, 'N': .5 }),
						]
					},
					'L': {
						type: 1,
						x: 432,
						y: 309,
						distance: 4,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'M': {
						type: 3,
						x: 454,
						y: 191,
						distance: 4,
						hidden: 2,
						rules: [
							ChSelectRouteRule(['K','P']),
						]
					},
					'N': {
						type: 1,
						x: 473,
						y: 263,
						distance: 4,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 6, 'L'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'L'),
								ChSpeedRule('<=', 5, 'L'),
							], 'AND', 'L', 'Q'),
						]
					},
					'O': {
						type: 1,
						x: 495,
						y: 138,
						distance: 4,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'P': {
						type: 1,
						x: 535,
						y: 191,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRuleEscortOnly(['aBB'], '>', 0, 'N'),

							ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '<', { 1:3, 2:4, 3:6 }, 'N'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'R'),
								ChShipTypeRoutingRule(['aBB', 'CV'], '<=', 1, 'R'),
							], 'AND', 'R'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 5, 'Q'),
								ChShipTypeRoutingRule(['aBB', 'CV'], '<=', 2, 'Q'),
							], 'AND', 'Q'),

							ChDefaultRouteRule('N')
						]
					},
					'Q': {
						type: 1,
						x: 535,
						y: 323,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'R': {
						type: 1,
						x: 612,
						y: 296,
						distance: 6,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChLOSRule({ 3: 'S', 0: 'T' }),
						]
					},
					'S': {
						type: 1,
						x: 630,
						y: 190,
						distance: 6,
						hidden: 2,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.ozawa', 1.2)
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'T': {
						type: 3,
						x: 673,
						y: 250,
						distance: 7,
						hidden: 2,
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Ahead of that Strait',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 106,
				bgmDN: 105,
				bgmNN: 105,
				bgmDB: 107,
				bgmNB: 107,
				bossnode: ['ZZ3','ZZ3*'],
				giveLock: 6,
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 2,
				reward: { ships: [532] },
				clearSpecial: function() {
					SM.playNew('assets/voice/Fall_2017_Event_Completion_Lines_2.mp3');
				},
				parts: {
					1: {
						currentBoss: 'ZZ3',
						maphp: {
							3: { 1: 3400 },
							2: { 1: 3200 },
							1: { 1: 3200 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
						}
					},
					2: {
						currentBoss: 'ZZ3*',
						maphp: {
							3: { 1: 2100 },
							2: { 1: 2000 },
							1: { 1: 2000 },
						},
						finalhp: {
							3: 655,
							2: 655,
							1: 655,
						}
					}
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1 },
					chance: { 3: .15, 2: .15, 1: .15 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{
								node: 'AB',
								type: 'NoHPLoss',
								timesRequiredPerDiff: {
									3: 1,
								},
							},
							{
								node: 'N',
								type: 'AirState',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'AS',
									3: 'AS',
								},
							},
							{
								node: 'U',
								type: 'battle',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									1: 'S',
									2: 'S',
									3: 'S',
								},
							},
							{
								node: 'V',
								type: 'AirState',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									2: 'AS',
									3: 'AS',
								},
							},
							{
								node: 'X',
								type: 'ReachNode',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
							},
							{
								node: 'Y',
								type: 'battle',
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1,
								},
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								},
							},
						], {
							partToUnlock: 1,
						})
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{
								node: 'AB',
								type: 'NoHPLoss',
								timesRequiredPerDiff: {
									2: 1,
									3: 1,
								},
								routeUnlockRequired: 1
							},
							{
								node: 'Z1',
								type: 'AirState', 
								ranksRequiredPerDiff: {
									2: 'AS',
									3: 'AS',
								},
								timesRequiredPerDiff: {
									2: 1,
									3: 1 
								}
							},
							{
								node: 'Z2',
								type: 'AirState', 
								ranksRequiredPerDiff: {
									2: 'AS',
									3: 'AS',
								},
								timesRequiredPerDiff: {
									2: 1,
									3: 1 
								}
							},
							{
								node: 'Z4',
								type: 'battle', 
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1 
								}
							},
							{
								node: 'Z6',
								type: 'battle', 
								ranksRequiredPerDiff: {
									1: 'S',
									2: 'S',
									3: 'S',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1 
								}
							},
							{
								node: 'Z8',
								type: 'battle', 
								ranksRequiredPerDiff: {
									1: 'A',
									2: 'A',
									3: 'A',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1 
								}
							},
							{
								node: 'Z9',
								type: 'battle', 
								ranksRequiredPerDiff: {
									1: 'S',
									2: 'S',
									3: 'S',
								},
								timesRequiredPerDiff: {
									1: 1,
									2: 1,
									3: 1 
								}
							},
						], {
							partToUnlock: 2,
						})
					},
				},
				startCheck: function() {

					let start = '';
					let index = 0;

					while (!start) {
						start = MAPDATA[40].maps[4].startCheckRule[index].getRouting(CHSHIPCOUNT);
						index++;
					}

					//give yellow lock only if Start2
					if (start == 'Start2') {
						for (let i=0; i<CHDATA.fleets[1].length; i++) { 
							chGiveLock(1,i+1,6);
						}
					}
				},
				startCheckRule: [
					ChFleetTypeRule([1,2,3], 'Start1'),
					ChFleetTypeRule(0, 'Start3'),

					ChAllHaveTagRule([4], 'Start3', 'Start2')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 83,
						y: 258,
						rules: [
							ChFleetTypeRule([1,3], 'A'),

							ChShipHistoricalRoutingRule('Kurita', 'event.historical.kurita', '>=', { 1:2, 2:4, 3:7 }, 'C'),

							ChDefaultRouteRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 157,
						y: 316,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'Start3': {
						type: 0,
						x: 305,
						y: 80,
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'A': {
						type: 1,
						x: 102,
						y: 167,
						distance: 9,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 119,
						y: 95,
						distance: 9,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'C': {
						type: 3,
						x: 157,
						y: 239,
						distance: 9,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 3,
						x: 174,
						y: 140,
						distance: 8,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 3,
						x: 198,
						y: 277,
						distance: 8,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'F': {
						type: 3,
						x: 218,
						y: 220,
						distance: 8,
						rules: [
							ChSelectRouteRule(['D','H']),
						]
					},
					'G': {
						type: 1,
						x: 234,
						y: 93,
						distance: 8,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 5, 'H'),

							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChDifficultyRule([1], 'L'),
									ChFleetTypeRule(2, 'L'),
								], 'OR', 'L'),

								ChSpeedRule('>=', 10, 'L'),
							], 'AND', 'L', 'J'),
						]
					},
					'H': {
						type: 1,
						x: 256,
						y: 191,
						distance: 7,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 258,
						y: 279,
						distance: 7,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'M'),
								ChShipTypeRoutingRule(['aCV'], '=', 0, 'M'),
							], 'AND', 'M'),

							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:2, 2:4, 3:6 }, 'M', 'K')
						]
					},
					'J': {
						type: 1,
						x: 294,
						y: 161,
						distance: 7,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'K': {
						type: 1,
						x: 310,
						y: 224,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'L': {
						type: 3,
						x: 306,
						y: 123,
						distance: 6,
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'M': {
						type: 1,
						x: 320,
						y: 300,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 1,
						x: 364,
						y: 256,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'O': {
						type: 1,
						x: 378,
						y: 189,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV', 'CLT'], '<=', 0, 'S'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'S'),
							], 'AND', 'S', 'T'),
						]
					},
					'P': {
						type: 3,
						x: 381,
						y: 68,
						distance: 6,
						showNoCompass: true,
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'U', 'U*')),
						]
					},
					'Q': {
						type: 3,
						x: 389,
						y: 109,
						distance: 5,
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'R': {
						type: 1,
						x: 397,
						y: 338,
						distance: 5,
						night2: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						rules: [
							ChIsRouteUnlockedRule(1, 'W', 'W*'),
						]
					},
					'S': {
						type: 1,
						x: 418,
						y: 272,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(1, 'W*'),
								ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:2, 2:5, 3:7 }, 'W*')
							], 'AND', 'W*'),

							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:2, 2:5, 3:7 }, 'W'),
							
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'R'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'R'),

							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(1, 'W*'),
								ChSpeedRule('>=', 10, 'W*')
							], 'AND', 'W*'),
							
							ChSpeedRule('>=', 10, 'W'),

							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['DD'], '>=', 4, 'W*'),
									ChDifficultyRule([1,2], 'W*'),
								], 'OR', 'W*'),
								
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'W*'),
								ChIsRouteUnlockedRule(1, 'W*'),
							], 'AND', 'W*'),

							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['DD'], '>=', 4, 'W'),
									ChDifficultyRule([1,2], 'W'),
								], 'OR', 'W'),
								
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'W'),
							], 'AND', 'W'),

							ChDefaultRouteRule('R')
						]
					},
					'T': {
						type: 1,
						x: 426,
						y: 154,
						distance: 4,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'U': {
						type: 1,
						x: 435,
						y: 79,
						distance: 5,
						replacedBy: 'U*',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'U*': {
						type: 1,
						x: 435,
						y: 79,
						distance: 5,
						hidden: 1,
						compName: 'U',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						rules: [
							ChFixedRoutingRule('Z1')
						]
					},
					'V': {
						type: 1,
						x: 442,
						y: 206,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'S'),
							ChShipTypeRoutingRule(['aBB'], '>', 2, 'S'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'S'),

							ChFleetTypeRule(0, 'X'),

							ChAllHaveTagRule([4], 'X'),

							ChDefaultRouteRule('S')
						]
					},
					'W': {
						type: 1,
						x: 467,
						y: 292,
						distance: 4,
						night2: true,
						replacedBy: 'W*',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Y')
						]
					},
					'W*': {
						type: 3,
						x: 467,
						y: 292,
						hidden: 1,
						distance: 4,
						night2: true,
						rules: [
							ChFixedRoutingRule('Y*')
						]
					},
					'X': {
						type: 1,
						x: 489,
						y: 247,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						rules: [
							ChIsRouteNotUnlockedRule(1, 'Y', 'Y*'),
						]
					},
					'Y': {
						type: 1,
						x: 533,
						y: 266,
						distance: 2,
						replacedBy: 'Y*',
						nightToDay2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.15)
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
						},
						end: true
					},
					'Y*': {
						type: 1,
						x: 533,
						y: 266,
						distance: 2,
						hidden: 1,
						night2: true,
						subonly: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.15)
						],
						compName: 'Y',
						compDiff: {
							3: ['Hard 3','Hard 4'],
							2: ['Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'Z7'),
							ChFleetTypeRule(0, 'Z7'),
							ChAllHaveTagRule([4], 'Z7'),

							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(2, 'Z9*'),
								ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:0, 2:3, 3:6 }, 'Z9*')
							], 'AND', 'Z9*'),
							
							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:0, 2:3, 3:6 }, 'Z9'),

							ChDefaultRouteRule('Z7')							
						]
					},
					'Z1': {
						type: 1,
						x: 459,
						y: 114,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Z2')
						]
					},
					'Z2': {
						type: 1,
						x: 487,
						y: 78,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Z3')
						]
					},
					'Z3': {
						type: 1,
						x: 527,
						y: 103,
						distance: 2,
						hidden: 1,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'Z4', 0: 'Z5' }),
						]
					},
					'Z4': {
						type: 1,
						x: 552,
						y: 74,
						distance: 3,
						hidden: 1,
						night2: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('Z6')
						]
					},
					'Z5': {
						type: 3,
						x: 574,
						y: 135,
						hidden: 1,
						distance: 1,
						end: true
					},
					'Z6': {
						type: 1,
						x: 596,
						y: 94,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'Z7': {
						type: 1,
						x: 565,
						y: 256,
						distance: 1,
						hidden: 1,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						rules: [
							ChIsRouteUnlockedRule(2, 'Z8', 'Z8*'),
						]
					},
					'Z8': {
						type: 1,
						x: 597,
						y: 247,
						distance: 1,
						hidden: 1,
						replacedBy: 'Z8*',
						nightToDay2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.25),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						end: true
					},
					'Z8*': {
						type: 1,
						x: 597,
						y: 247,
						distance: 1,
						hidden: 2,
						night2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.shima', 1.25),
						],
						compName: 'Z8',
						compDiff: {
							3: ['Hard 2','Hard 3','Hard 4'],
							2: ['Medium 2','Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('ZZ1')
						]
					},
					'Z9': {
						type: 1,
						x: 589,
						y: 273,
						distance: 2,
						hidden: 1,
						replacedBy: 'Z9*',
						nightToDay2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.15),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						end: true
					},
					'Z9*': {
						type: 1,
						x: 589,
						y: 273,
						distance: 2,
						hidden: 2,
						night2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.15),
						],
						compName: 'Z9',
						compDiff: {
							3: ['Hard 2'],
							2: ['Medium 2','Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('ZZ1')
						]
					},
					'ZZ1': {
						type: 1,
						x: 629,
						y: 237,
						distance: 2,
						hidden: 2,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								ship.bonusSpecial = null;
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('ZZ2')
						]
					},
					'ZZ2': {
						type: 1,
						x: 643,
						y: 206,
						distance: 2,
						hidden: 2,
						night2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.25),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						rules: [
							ChMapPartRule([1], ChFixedRoutingRule('ZZ3')),
							ChMapPartRule([2], ChFixedRoutingRule('ZZ3*')),
						]
					},
					'ZZ3': {
						type: 1,
						x: 650,
						y: 155,
						distance: 2,
						hidden: 2,
						lbPart: 1,
						nightToDay2: true,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.4375),
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'ZZ3*': {
						type: 1,
						x: 650,
						y: 155,
						distance: 2,
						hidden: 2,
						lbPart: 2,
						nightToDay2: true,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.4375),
						],
						compName: 'ZZ3',
						compDiff: {
							3: ['Hard 4'],
							2: ['Medium 4'],
							1: ['Easy 4'],
						},
						end: true
					}
				}
			}
		}
	},
	41: {
		name: 'Winter 2018',
		date: '2018-02-16',
		diffMode: 2,
		allowDiffs: [3,2,1,4],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		bannerImg: 'http://i.imgur.com/Oj9Svb7.png',
		bannerImgAlt: 'http://i.imgur.com/fRKQ4tM.png',
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
		overrideStats: {
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
		},
		voiceSpecial: {
			24: { 'attack': 'assets/voice/Ooi_Kantai_Kessen_2018_Atk.mp3' },
			25: { 'attack': 'assets/voice/Kitakami_Kantai_Kessen_2018_Atk.mp3' },
			26: { 'nbattack': 'assets/voice/Fusou_ShoGo_2017_NightAttack.mp3' },
			27: { 'nbattack': 'assets/voice/Yamashiro_ShoGo_2017_NightAttack.mp3' },
			43: { 'attack': 'assets/voice/Shigure_ShoGo_2017_Attack.mp3' },
			67: { 'nbattack': 'assets/voice/Atago_Kantai_Kessen_2018_NightAtk.mp3' },
			68: { 'nbattack': 'assets/voice/Maya_Kantai_Kessen_2018_NightAtk.mp3' },
			69: { 'attack': 'assets/voice/Choukai_Kantai_Kessen_2018_Atk.mp3' },
			77: { 'attack': 'assets/voice/Ise_Kantai_Kessen_2018_Atk.mp3' },
			78: { 'attack': 'assets/voice/Kongou_Kantai_Kessen_2018_Atk.mp3', 'nbattack': 'assets/voice/Kongou_Kantai_Kessen_2018_NightAtk.mp3' },
			79: { 'attack': 'assets/voice/Haruna_Kantai_Kessen_2018_Atk.mp3' },
			87: { 'attack': 'assets/voice/Hyuuga_Kantai_Kessen_2018_Atk.mp3' },
			110: { 'attack': 'assets/voice/Shoukaku_Kantai_Kessen_2018_Atk.mp3' },
			111: { 'attack': 'assets/voice/Zuikaku_Kantai_Kessen_2018_Atk.mp3' },
			116: { 'attack': 'assets/voice/Zuihou_Kantai_Kessen_2018_Atk.mp3' },
			143: { 'attack': 'assets/voice/Musashi_Kantai_Kessen_2018_Atk.mp3', 'nbattack': 'assets/voice/Musashi_Kantai_Kessen_2018_NightAtk.mp3' },
			170: { 'nbattack': 'assets/voice/Hamakaze_Kantai_Kessen_2018_NightAtk.mp3' },
		},
		historical: {
			kurita: [
				131,143,80,78,79,
				66,67,68,69,62,65,71,72,124,125,
				138,139,
				50,135,409,410,452,20,415,167,168,169,41
			],
			troopTransport: [61,113,486],
			shimaEscort: [38,40,41],
			ozawa: [111, 102,103,116, 77,87, 22,100,183, 421,423],
			nishimura: [26,27,70,43,97,413,414],
			ormoc: [63,64,113,15,16,49,38,40,41,486,50,135,425,452,517],
			leyteOther: [110,114],
		},
		friendFleet: {
			'desdiv19': { voice: [195,141], ships: [
				{ mid: 195, LVL: 77, FP: 53, TP: 49, AA: 28, AR: 28, equips: [63,63,74] },
				{ mid: 208, LVL: 74, FP: 35, TP: 59, AA: 36, AR: 35, equips: [63,63,101] },
				{ mid: 368, LVL: 71, FP: 23, TP: 58, AA: 27, AR: 34, equips: [2,125,28] },
				{ mid: 206, LVL: 70, FP: 23, TP: 57, AA: 25, AR: 24, equips: [2,125,28] },
			] },
			'desdiv19B': { voice: [208,241], ships: [
				{ mid: 208, LVL: 74, FP: 35, TP: 59, AA: 36, AR: 35, equips: [63,63,101] },
				{ mid: 195, LVL: 77, FP: 53, TP: 49, AA: 28, AR: 28, equips: [63,63,125] },
				{ mid: 368, LVL: 71, FP: 23, TP: 58, AA: 27, AR: 34, equips: [2,125,28] },
				{ mid: 206, LVL: 70, FP: 23, TP: 57, AA: 25, AR: 24, equips: [125,125,125] },
			] },
			'crudiv4': { voice: [427,141], ships: [
				{ mid: 269, LVL: 84, FP: 70, TP: 61, AA: 58, AR: 72, equips: [6,6,15,101], damage: [.65,.75] },
				{ mid: 270, LVL: 84, FP: 75, TP: 68, AA: 57, AR: 68, equips: [6,6,15,88], damage: [.44,.54] },
				{ mid: 427, LVL: 83, FP: 63, TP: 53, AA: 55, AR: 68, equips: [50,50,15,129] },
				{ mid: 428, LVL: 82, FP: 66, TP: 68, AA: 95, AR: 58, equips: [50,50,130,131], damage: [.5,.6] },
			] },
			'crudiv4B': { voice: [427,141], ships: [
				{ mid: 269, LVL: 84, FP: 70, TP: 61, AA: 58, AR: 72, equips: [6,6,15,101], damage: [.7,.8] },
				{ mid: 270, LVL: 84, FP: 75, TP: 68, AA: 57, AR: 68, equips: [6,6,15,88], damage: [.7,.8] },
				{ mid: 427, LVL: 83, FP: 63, TP: 53, AA: 55, AR: 68, equips: [50,50,15,129], damage: [.9,1] },
				{ mid: 428, LVL: 82, FP: 66, TP: 68, AA: 95, AR: 58, equips: [50,50,130,131], damage: [.7,.8] },
			] },
			'ibs': { voice: [150,141], ships: [
				{ mid: 150, LVL: 84, FP: 84, TP: 0, AA: 66, AR: 88, equips: [7,7,74,88] },
				{ mid: 152, LVL: 84, FP: 87, TP: 0, AA: 48, AR: 78, equips: [7,7,35,88] },
				{ mid: 144, LVL: 74, FP: 34, TP: 54, AA: 42, AR: 37, equips: [63,63,15] },
				{ mid: 323, LVL: 65, FP: 32, TP: 55, AA: 24, AR: 33, equips: [63,63,15] },
				{ mid: 228, LVL: 75, FP: 27, TP: 65, AA: 43, AR: 42, equips: [266,266,15] },
				{ mid: 316, LVL: 71, FP: 34, TP: 62, AA: 46, AR: 41, equips: [266,266,15] },
			] },
			'ibs2': { voice: [152,241], ships: [
				{ mid: 152, LVL: 84, FP: 87, TP: 0, AA: 48, AR: 78, equips: [7,7,7,88] },
				{ mid: 150, LVL: 84, FP: 84, TP: 0, AA: 66, AR: 88, equips: [7,7,7,74] },
				{ mid: 228, LVL: 75, FP: 27, TP: 65, AA: 43, AR: 42, equips: [266,266,15] },
				{ mid: 316, LVL: 71, FP: 34, TP: 62, AA: 46, AR: 41, equips: [266,266,15] },
				{ mid: 323, LVL: 65, FP: 32, TP: 55, AA: 24, AR: 33, equips: [63,15,88] },
				{ mid: 144, LVL: 74, FP: 34, TP: 54, AA: 42, AR: 37, equips: [63,63,15] },
			] },
			'nishimura1': { voice: [145,141], ships: [
				{ mid: 412, LVL: 81, FP: 86, TP: 0, AA: 72, AR: 79, equips: [7,7,272,101], damage: [.43,.54] },
				{ mid: 411, LVL: 82, FP: 93, TP: 0, AA: 74, AR: 78, equips: [7,7,88,74], damage: [.43,.54] },
				{ mid: 73, LVL: 76, FP: 61, TP: 58, AA: 53, AR: 59, equips: [50,50,15,26], damage: [.72,.84] },
				{ mid: 327, LVL: 74, FP: 34, TP: 64, AA: 42, AR: 38, equips: [266,15,88], damage: [.48,.58] },
				{ mid: 328, LVL: 73, FP: 36, TP: 55, AA: 43, AR: 35, equips: [266,15,88], damage: [.48,.58] },
				{ mid: 489, LVL: 78, FP: 35, TP: 50, AA: 48, AR: 28, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 145, LVL: 87, FP: 30, TP: 69, AA: 58, AR: 41, equips: [63,63,129], damage: [.9,1] },
			] },
			'nishimura2': { voice: [145,241], ships: [
				{ mid: 73, LVL: 76, FP: 56, TP: 50, AA: 34, AR: 58, equips: [50,50,15,74], damage: [.72,.84] },
				{ mid: 327, LVL: 75, FP: 35, TP: 44, AA: 37, AR: 25, equips: [266,266,101], damage: [.7,.8] },
				{ mid: 328, LVL: 74, FP: 24, TP: 44, AA: 36, AR: 35, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 489, LVL: 79, FP: 35, TP: 51, AA: 35, AR: 28, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 145, LVL: 88, FP: 30, TP: 49, AA: 59, AR: 28, equips: [15,15,15], damage: [.9,1] },
			] },
			'nishimura3': { voice: [145,241], ships: [
				{ mid: 145, LVL: 88, FP: 46, TP: 49, AA: 42, AR: 28, equips: [63,63,74], damage: [.9,1] },
				{ mid: 327, LVL: 75, FP: 35, TP: 44, AA: 27, AR: 36, equips: [266,266,101], damage: [.7,.8] },
				{ mid: 328, LVL: 74, FP: 24, TP: 59, AA: 36, AR: 35, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 489, LVL: 79, FP: 35, TP: 51, AA: 35, AR: 40, equips: [266,15,88], damage: [.7,.8] },
			] },
			'eu': { voice: [364,141], ships: [
				{ mid: 364, LVL: 86, FP: 93, TP: 0, AA: 66, AR: 84, equips: [190,190,190,191] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 52, AR: 43, equips: [244,243,242,242] },
				{ mid: 392, LVL: 62, FP: 85, TP: 0, AA: 41, AR: 88, equips: [245,245,247] },
				{ mid: 519, LVL: 40, FP: 32, TP: 65, AA: 43, AR: 18, equips: [280,280] },
			] },
			'russian1': { voice: [513,141], ships: [
				{ mid: 513, LVL: 82, FP: 74, TP: 22, AA: 61, AR: 79, equips: [232,232,232,74] },
				{ mid: 516, LVL: 40, FP: 45, TP: 34, AA: 51, AR: 31, equips: [282,282,283] },
				{ mid: 147, LVL: 88, FP: 28, TP: 72, AA: 48, AR: 31, equips: [283,283,283] },
			] },
			'russian2': { voice: [516,141], ships: [
				{ mid: 516, LVL: 40, FP: 45, TP: 34, AA: 51, AR: 31, equips: [282,282,283] },
				{ mid: 513, LVL: 82, FP: 74, TP: 22, AA: 61, AR: 79, equips: [232,232,232,74] },
				{ mid: 179, LVL: 74, FP: 35, TP: 41, AA: 34, AR: 29, equips: [78,78,84] },
				{ mid: 180, LVL: 73, FP: 21, TP: 40, AA: 37, AR: 29, equips: [78,78,85] },
				{ mid: 147, LVL: 88, FP: 28, TP: 72, AA: 48, AR: 31, equips: [283,283,283] },
			] },
			'western1': { voice: [440,141], ships: [
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [244,243,244,244] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [64,257,159,259] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85] },
			] },
			'western2': { voice: [392,141], ships: [
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 392, LVL: 62, FP: 79, TP: 0, AA: 41, AR: 88, equips: [245,245,247,247] },
				{ mid: 364, LVL: 86, FP: 100, TP: 0, AA: 66, AR: 84, equips: [190,190,190,191] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [244,243,244,244] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [64,64,158,159] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'western3': { voice: [392,241], ships: [
				{ mid: 392, LVL: 88, FP: 90, TP: 0, AA: 67, AR: 96, equips: [246,246,247,247] },
				{ mid: 360, LVL: 84, FP: 99, TP: 0, AA: 95, AR: 102, equips: [161,161,161,172] },
				{ mid: 178, LVL: 92, FP: 93, TP: 34, AA: 64, AR: 90, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'western2-broken': { voice: [392,141], ships: [ //the one with wrong equips
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [245,245,247,247] },
				{ mid: 392, LVL: 62, FP: 79, TP: 0, AA: 41, AR: 88, equips: [190,190,190,191] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [244,243,244,244] },
				{ mid: 364, LVL: 86, FP: 100, TP: 0, AA: 66, AR: 84, equips: [64,64,158,159], damage: [.65,.75] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'engano1': { voice: [306,141], ships: [
				{ mid: 306, LVL: 70, FP: 51, TP: 56, AA: 50, AR: 42, equips: [139,139,101], damage: [.9,1] },
				{ mid: 229, LVL: 75, FP: 28, TP: 64, AA: 30, AR: 28, equips: [267,58,88], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 34, TP: 49, AA: 48, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 373, LVL: 55, FP: 21, TP: 51, AA: 27, AR: 30, equips: [267,15,88], damage: [.35,.45] },
				{ mid: 359, LVL: 54, FP: 29, TP: 52, AA: 31, AR: 22, equips: [267,15,88], damage: [.35,.45] },
				{ mid: 419, LVL: 77, FP: 26, TP: 64, AA: 64, AR: 26, equips: [15,15,15] },
			] },
			'engano2': { voice: [131,141], ships: [
				{ mid: 131, LVL: 60, FP: 129, TP: 0, AA: 81, AR: 108, equips: [276,276,234,36], damage: [.9,1] },
				{ mid: 541, LVL: 88, FP: 101, TP: 0, AA: 83, AR: 104, equips: [8,105,71,88], damage: [.9,1] },
				{ mid: 319, LVL: 75, FP: 60, TP: 52, AA: 44, AR: 57, equips: [50,50,15,239], damage: [.9,1] },
				{ mid: 194, LVL: 74, FP: 72, TP: 64, AA: 53, AR: 65, equips: [50,50,15,239], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 50, TP: 49, AA: 34, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 419, LVL: 77, FP: 40, TP: 46, AA: 64, AR: 38, equips: [15,15,15], damage: [.9,1] },
			] },
			'engano3': { voice: [149,141], ships: [
				{ mid: 149, LVL: 91, FP: 85, TP: 0, AA: 70, AR: 88, equips: [7,7,7,74], damage: [.8,.9] },
				{ mid: 151, LVL: 90, FP: 91, TP: 0, AA: 79, AR: 79, equips: [7,7,7,101], damage: [.9,1] },
				{ mid: 188, LVL: 88, FP: 69, TP: 68, AA: 68, AR: 71, equips: [50,50,15,239], damage: [.85,.95] },
				{ mid: 189, LVL: 87, FP: 68, TP: 69, AA: 51, AR: 70, equips: [50,50,15,102], damage: [.7,.75] },
			] },
			'engano4': { voice: [307,141], ships: [
				{ mid: 307, LVL: 69, FP: 40, TP: 40, AA: 51, AR: 43, equips: [139,139,74], damage: [.9,1] },
				{ mid: 320, LVL: 76, FP: 24, TP: 44, AA: 49, AR: 36, equips: [266,266,101], damage: [.9,1] },
				{ mid: 312, LVL: 72, FP: 23, TP: 43, AA: 45, AR: 25, equips: [266,15,88], damage: [.9,1] },
				{ mid: 317, LVL: 71, FP: 33, TP: 58, AA: 35, AR: 35, equips: [266,15,88], damage: [.9,1] },
				{ mid: 228, LVL: 77, FP: 27, TP: 66, AA: 30, AR: 42, equips: [15,15,15] },
			] },
			'engano5': { voice: [306,141], ships: [
				{ mid: 306, LVL: 70, FP: 51, TP: 56, AA: 50, AR: 42, equips: [139,139,101], damage: [.9,1] },
				{ mid: 229, LVL: 75, FP: 28, TP: 64, AA: 30, AR: 28, equips: [267,58,88], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 34, TP: 49, AA: 48, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 324, LVL: 55, FP: 21, TP: 52, AA: 32, AR: 22, equips: [267,15,88], damage: [.9,1] },
				{ mid: 325, LVL: 54, FP: 21, TP: 51, AA: 24, AR: 30, equips: [267,15,88], damage: [.9,1] },
				{ mid: 419, LVL: 77, FP: 26, TP: 64, AA: 64, AR: 26, equips: [15,15,15] },
			] },
			'engano6': { voice: [149,141], ships: [
				{ mid: 149, LVL: 91, FP: 85, TP: 0, AA: 70, AR: 88, equips: [7,7,7,74], damage: [.8,.9] },
				{ mid: 151, LVL: 90, FP: 91, TP: 0, AA: 79, AR: 79, equips: [7,7,7,101], damage: [.9,1] },
				{ mid: 504, LVL: 85, FP: 62, TP: 57, AA: 68, AR: 54, equips: [50,50,15,238], damage: [.75,.85] },
				{ mid: 503, LVL: 86, FP: 46, TP: 74, AA: 69, AR: 54, equips: [50,50,15,238], damage: [.85,.95] },
				{ mid: 188, LVL: 88, FP: 69, TP: 68, AA: 68, AR: 71, equips: [50,50,15,239], damage: [.85,.95] },
				{ mid: 189, LVL: 87, FP: 68, TP: 69, AA: 51, AR: 70, equips: [15,15,15,88], damage: [.7,.75] },
			] },
		},
		friendFleetWaves: {
			1: { date: '2018-02-16' },
			2: { date: '2018-03-02' },
		},
		disableMore: { ships: [551,544,549] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle Stations! Perform Thorough Patrols of the Route Ahead!<br>[Battle of the Palawan Passage Route]',
				fleetTypes: [0,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 15,
				checkLock: [4,6,7,8],
				giveLock: 5,
				lbas: 1,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 985 },
					1: { 1: 708 },
					4: { 1: 708 },
				},
				finalhp: {
					3: 377,
					2: 177,
					1: 177,
					4: 177,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{ node: 'B', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'A' } },
							{ node: 'F', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
							{ node: 'K', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
							{ node: 'N', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'A', 3:'A' } },
						], {
							partToUnlock: 1
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					if (ships.SS + ships.SSV) errors.push('No SS(V)');
				},
				mapInfo: 'No CV(B) allowed<br>No SS(V) allowed',
				nodes: {
					'Start': {
						type: 0,
						x: 151,
						y: 268,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'D'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'D'),
								ChShipTypeRoutingRule(['AV', 'AS'], '=', 0, 'D'),
								ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'D'),
							], 'AND', 'D', 'A'),
						]
					},
					'A': {
						type: 1,
						x: 127,
						y: 185,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 147,
						y: 134,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'E', 0: 'C' }),
						]
					},
					'C': {
						type: 3,
						x: 170,
						y: 76,
						distance: 3,
						end: true
					},
					'D': {
						type: 3,
						x: 217,
						y: 218,
						distance: 1,
						rules: [
							ChSelectRouteRule(['E','G']),
						]
					},
					'E': {
						type: 3,
						x: 251,
						y: 148,
						distance: 2,
						rules: [
							ChSelectRouteRule(['F','H']),
						]
					},
					'F': {
						type: 1,
						x: 280,
						y: 89,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'G': {
						type: 1,
						x: 309,
						y: 256,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '=', 0, 'K'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'K'),
							], 'AND', 'K', 'J'),
						]
					},
					'H': {
						type: 1,
						x: 312,
						y: 191,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 376,
						y: 150,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						showNoCompass: true,
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'L')),
							ChLOSRule({ 48: 'O', 46: 'L' }, 3),
						]
					},
					'J': {
						type: 1,
						x: 401,
						y: 226,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 48: 'K', 46: 'M' }, 3),
						]
					},
					'K': {
						type: 1,
						x: 433,
						y: 309,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 48: 'N', 46: 'M' }, 3),
						]
					},
					'L': {
						type: 3,
						x: 439,
						y: 108,
						distance: 5,
						end: true
					},
					'M': {
						type: 3,
						x: 467,
						y: 206,
						distance: 5,
						end: true
					},
					'N': {
						type: 1,
						x: 535,
						y: 279,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'O': {
						type: 1,
						x: 340,
						y: 98,
						distance: 4,
						hidden: 1,
						boss: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 4'],
							1: ['Easy 3'],
							4: ['Casual 1'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'The Kurita Fleet\'s Grand Sortie!<br>[Battle of the Sibuyan Sea]',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 26,
				checkLock: [5,7,8],
				giveLock: [4,6],
				lockSpecial: true,
				lbas: 1,
				maphp: {
					3: { 1: 708 },
					2: { 1: 650 },
					1: { 1: 420 },
					4: { 1: 420 },
				},
				finalhp: {
					3: 118,
					2: 88,
					1: 88,
					4: 84,
				},
				reward: { ships: [551], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{ node: 'S', type: 'battle', timesRequiredPerDiff: {1:1, 2:1, 3:1,}, ranksRequiredPerDiff: { 1:'A', 2:'A', 3:'A'}},
							{ node: 'T', type: 'ReachNode', timesRequiredPerDiff: {4:1, 1:1, 2:1, 3:1,}},
							{ node: 'X', type: 'battle', timesRequiredPerDiff: {1:1, 2:1, 3:1,}, ranksRequiredPerDiff: { 1:'A', 2:'A', 3:'A'}},
							{ node: 'Y', type: 'battle', timesRequiredPerDiff: {1:1, 2:1, 3:1,}, ranksRequiredPerDiff: { 1:'A', 2:'A', 3:'A'}},
						], {
							partToUnlock: 1
						})
					}
				},
				startCheck: function(ships) {
					let lock = 6;
					if (!CHDATA.fleets.sf) lock = 4;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock && CHDATA.ships[sid].lock != 6) lock = 4;
					}
					if (CHDATA.fleets.combined) {
						lock = 4;
						for (let i=0; i<CHDATA.fleets[2].length; i++) {
							chGiveLock(2,i+1,lock);
						}
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,lock);
					}
				},
				startCheckRule: [
					ChIsRouteNotUnlockedRule(1, 'Start1'),
					ChFleetTypeRule(2, 'Start2'),
					ChDefaultRouteRule('Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 109,
						y: 259,
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(7, 'D'),
								ChAllHaveTagRule([6], 'D')
							], 'AND', 'D'),
							
							ChFleetTypeRule(2, 'B', 'A'),
						]
					},
					'Start2': {
						type: 0,
						x: 296,
						y: 94,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'A': {
						type: 1,
						x: 109,
						y: 178,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShowCompass(ChFixedRoutingRule('G'))
						]
					},
					'B': {
						type: 3,
						x: 173,
						y: 219,
						distance: 1,
						rules: [							
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'E'),
								ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 4:0, 1:4, 2:6, 3:8 }, 'E')
							], 'AND', 'E', 'C'),
						]
					},
					'C': {
						type: 1,
						x: 196,
						y: 146,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 3,
						x: 205,
						y: 239,
						distance: 1,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 227,
						y: 199,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 275,
						y: 169,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 280,
						y: 241,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChDifficultyRule([4], 'J'),
							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:2, 2:4, 3:6 }, 'J', 'H')
						]
					},
					'H': {
						type: 1,
						x: 318,
						y: 305,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						rules: [
							ChDifficultyRule([4], 'J'),
							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 1:1, 2:3, 3:5 }, 'J', 'K')
						]
					},
					'I': {
						type: 1,
						x: 323,
						y: 138,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 3,
						x: 371,
						y: 223,
						distance: 4,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'K': {
						type: 1,
						x: 378,
						y: 331,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'L': {
						type: 3,
						x: 395,
						y: 74,
						distance: 5,
						rules: [							
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'P'),
								ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 4:0, 1:2, 2:4, 3:6 }, 'P')
							], 'AND', 'P', 'N'),
						]
					},
					'M': {
						type: 1,
						x: 415,
						y: 286,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'N': {
						type: 1,
						x: 420,
						y: 165,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'O': {
						type: 3,
						x: 461,
						y: 253,
						distance: 6,
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'P': {
						type: 3,
						x: 458,
						y: 80,
						distance: 6,
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'Q': {
						type: 3,
						x: 474,
						y: 117,
						distance: 6,
						rules: [							
							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChSpeedRule('>=', 10, 'T'),
									ChDifficultyRule([4,1,2], 'T')
								], 'OR', 'T'),

								ChFleetTypeRule(2, 'T'),
								ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 4:0, 1:4, 2:6, 3:8 }, 'T')
							], 'AND', 'T', 'R'),
						]
					},
					'R': {
						type: 1,
						x: 499,
						y: 145,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'S': {
						type: 1,
						x: 512,
						y: 286,
						distance: 7,
						night2 :true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'T': {
						type: 1,
						x: 515,
						y: 105,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'U': {
						type: 1,
						x: 556,
						y: 117,
						distance: 8,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'V': {
						type: 1,
						x: 595,
						y: 126,
						distance: 9,
						bonuses: [
							//lasts to W and Z
							new ChShipIdsBonuses({type: 'set'}, 'event.historical.kurita', 1.1)
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'W': {
						type: 1,
						x: 604,
						y: 158,
						distance: 9,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('Z')
						]
					},
					'X': {
						type: 1,
						x: 607,
						y: 282,
						distance: 8,
						night2 :true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('Y')
						]
					},
					'Y': {
						type: 1,
						x: 634,
						y: 241,
						distance: 9,
						nightToDay2 :true,
						bonuses: [
							new ChShipIdsBonuses({type: 'set'}, 'event.historical.nishimura', 1.1)
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'Z': {
						type: 1,
						x: 644,
						y: 121,
						distance: 10,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Ozawa Carrier Task Force, Sortie All Out!<br>[1st Battle of Cape Engaño]',
				fleetTypes: [0,1,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 21,
				checkLock: [4,5,6,8],
				giveLock: 7,
				lbas: 2,
				currentBoss: 'U',
				maphp: {
					3: { 1: 2100 },
					2: { 1: 1750 },
					1: { 1: 1750 },
					4: { 1: 1750 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
					4: 350,
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
					chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3'],
						2: ['4','5','6'],
						1: ['7','8'],
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 3, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'H', type: 'ReachNode', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, },
							{ node: 'S', type: 'ReachNode', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, }
						], {
							partToUnlock: 1
						})
					}
				},
				startCheckRule: [
					ChFleetTypeRule([1], 'Start2', 'Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 96,
						y: 84,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 481,
						y: 84,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'A': {
						type: 1,
						x: 102,
						y: 149,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChDifficultyRule([4], 'D'), 

							ChShipHistoricalRoutingRule('Troop transport', 'event.historical.troopTransport', '>=', 3, 'D'),
							ChShipHistoricalRoutingRule('Shima escort', 'event.historical.shimaEscort', '>=', 3, 'D', 'B'),
						]
					},
					'B': {
						type: 1,
						x: 110,
						y: 215,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['CA', 'aBB', 'aCV'], '>', 0, 'C', 'D'),
						]
					},
					'C': {
						type: 1,
						x: 117,
						y: 277,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 160,
						y: 206,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 3,
						x: 197,
						y: 119,
						distance: 2,
						end: true
					},
					'F': {
						type: 1,
						x: 208,
						y: 191,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChShipCountRoutingRule('<=', 3, 'G'),
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'E'),
							ChRandomRule({ 'G': .5, 'E': .5 }),
						]
					},
					'G': {
						type: 1,
						x: 210,
						y: 228,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'H': {
						type: 3,
						x: 258,
						y: 210,
						distance: 1,
						dropoff: true,
						end: true
					},
					'I': {
						type: 1,
						x: 320,
						y: 232,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 377,
						y: 198,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'I'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 2, 'I'),
							ChShipTypeRoutingRule(['CV', 'CVB', 'aBB'], '>', 4, 'I'),

							ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:3, 2:3, 3:8 }, 'N'),
								ChIsRouteUnlockedRule(1, 'N')
							], 'AND', 'N'),
							
							ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:2, 2:2, 3:5 }, 'K'),

							ChDefaultRouteRule('I')
						]
					},
					'K': {
						type: 1,
						x: 388,
						y: 315,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'L': {
						type: 3,
						x: 426,
						y: 146,
						distance: 4,
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 2, 'M'),
							ChDifficultyRule([4], 'J'),
							ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:3, 2:4, 3:5 }, 'J'),
							ChDefaultRouteRule('M')
						]
					},
					'M': {
						type: 1,
						x: 454,
						y: 188,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'N': {
						type: 1,
						x: 483,
						y: 304,
						distance: 6,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.ozawa', 1.15)
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'Q'),
							ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:4, 2:6, 3:8 }, 'O'),
							ChDefaultRouteRule('Q')
						]
					},
					'O': {
						type: 1,
						x: 498,
						y: 174,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'S', 0: 'R' }),
						]
					},
					'P': {
						type: 1,
						x: 523,
						y: 242,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:3, 2:4, 3:6 }, 'S', 'O'),
						]
					},
					'Q': {
						type: 1,
						x: 547,
						y: 315,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShowLOSPlane(ChMultipleRulesRule([
								ChShipHistoricalRoutingRule('Osawa fleet', 'event.historical.ozawa', '>=', { 4:0, 1:4, 2:6, 3:8 }, 'S'),
								ChShipTypeRoutingRuleEscortOnly(['aBB'], '=', 0, 'S'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 4, 'S'),
							], 'AND', 'S', 'P')),
							ChDefaultRouteRule('T'),
						]
					},
					'R': {
						type: 3,
						x: 557,
						y: 121,
						distance: 6,
						end: true
					},
					'S': {
						type: 1,
						x: 565,
						y: 218,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]						
					},
					'T': {
						type: 3,
						x: 635,
						y: 324,
						distance: 8,
						end: true
					},
					'U': {
						type: 1,
						x: 638,
						y: 191,
						distance: 8,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Beyond the Sea of Samar...<br>[Battle of Leyte Gulf]',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 109,
				bgmDN: 111,
				bgmNN: 111,
				bgmDB: 113,
				bgmNB: 113,
				bossnode: 24,
				checkLock: [5,7,8],
				giveLock: [4,6],
				lockSpecial: true,
				lbas: 2,
				maphp: {
					3: { 1: 4400 },
					2: { 1: 4400 },
					1: { 1: 4400 },
					4: { 1: 4400 },
				},
				finalhp: {
					3: 650,
					2: 650,
					1: 650,
					4: 650,
				},
				reward: { ships: [544], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'M', type: 'ReachNode', timesRequiredPerDiff: { 1:1 } },
							{ node: 'N', type: 'ReachNode', timesRequiredPerDiff: { 1:1 } },
							{ node: 'N', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'B', 3:'A' } }
						], {
							partToUnlock: 1
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[4].diff == 1 || CHDATA.event.maps[4].diff == 4 || CHDATA.config.disablelock) return;
					let lock = null, allSame = true;
					let num = (CHDATA.fleets.combined)? 2 : 1;
					for (let n=1; n<=num; n++) {
						for (let sid of CHDATA.fleets[n]) {
							if (sid && CHDATA.ships[sid].lock) {
								if (!lock) lock = CHDATA.ships[sid].lock;
								if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
							}
						}
					}
					if (!allSame) errors.push('No mixed locks.');
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) {
						for (let n=1; n<=2; n++) {
							for (let i=0; i<CHDATA.fleets[n].length; i++) {
								chGiveLock(n,i+1,4);
							}
						}
						return;
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,6);
					}
					return;
				},	
				startCheckRule: [
					ChFleetTypeRule([1,2,3], 'Start1', 'Start2'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 169,
						y: 121,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 210,
						y: 325,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'A': {
						type: 1,
						x: 227,
						y: 172,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 297,
						y: 112,
						distance: 5,
						rules: [
							ChFleetTypeRule([1,3,7], 'D'),

							ChMultipleRulesRule([
								ChNumberOfShipOfSpeedRule('<=', 5, '<=', 3, 'E'),
								ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 4:0, 1:4, 2:6, 3:8 }, 'E')
							], 'AND', 'E'),

							ChDefaultRouteRule('D'),
						]
					},
					'C': {
						type: 1,
						x: 301,
						y: 305,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 302,
						y: 150,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 335,
						y: 125,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFleetTypeRule([1,3,7], 'G'),

							ChNumberOfShipOfSpeedRule('<=', 5, '<=', 4, 'I'),

							ChDefaultRouteRule('G'),
						]
					},
					'F': {
						type: 1,
						x: 348,
						y: 343,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 368,
						y: 99,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 388,
						y: 333,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChSpeedRule('>=', 10, 'K'),
							ChShipTypeRoutingRule(['aCV', 'SS', 'SSV'], '>', 0, 'J'),
							ChShipTypeRoutingRule(['aBB'], '>', 2, 'J'),

							ChShipHistoricalRoutingRule('Nishimura fleet', 'event.historical.nishimura', '>=', { 4:0, 1:3, 2:4, 3:6 }, 'K'),

							ChDefaultRouteRule('J'),
						]
					},
					'I': {
						type: 1,
						x: 396,
						y: 130,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 1,
						x: 429,
						y: 334,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 3,
						x: 432,
						y: 295,
						distance: 1,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 3,
						x: 441,
						y: 93,
						distance: 5,
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'M': {
						type: 1,
						x: 476,
						y: 292,
						distance: 3,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 1,
						x: 481,
						y: 248,
						distance: 3,
						night2: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.nishimura', 1.2)
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'O': {
						type: 1,
						x: 489,
						y: 93,
						distance: 5,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.kurita', 1.15)
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'P': {
						type: 1,
						x: 515,
						y: 184,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'Q': {
						type: 1,
						x: 518,
						y: 123,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3','Medium 4'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFleetTypeRule([1,3,7], 'T'),
							ChDifficultyRule([4], 'S'),

							ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 1:5, 2:7, 3:10 }, 'S'),
							ChShipHistoricalRoutingRule('Kurita fleet', 'event.historical.kurita', '>=', { 1:3, 2:5, 3:9 }, 'P'),

							ChDefaultRouteRule('T')
						]
					},
					'R': {
						type: 1,
						x: 520,
						y: 230,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'S': {
						type: 3,
						x: 557,
						y: 205,
						distance: 5,
						rules: [
							ChSelectRouteRule(['R','V']),
						]
					},
					'T': {
						type: 1,
						x: 575,
						y: 138,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'U': {
						type: 3,
						x: 592,
						y: 77,
						distance: 7,
						end: true
					},
					'V': {
						type: 1,
						x: 610,
						y: 157,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule( { 3: 'W', 0: 'U' }),
						]
					},
					'W': {
						type: 1,
						x: 648,
						y: 110,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'X': {
						type: 1,
						x: 467,
						y: 210,
						distance: 4,
						hidden: 1,
						boss: true,
						friendFleet: ['desdiv19','crudiv4','ibs','nishimura1','eu'],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Operation Ta-gō Kai',
				fleetTypes: [0,7],
				bgmMap: 112,
				bgmDN: 111,
				bgmNN: 111,
				bgmDB: 114,
				bgmNB: 114,
				bossnode: [20,12],
				checkLock: [4,5,6,7],
				giveLock: 8,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 800 },
							2: { 1: 600 },
							1: { 1: 500 },
							4: { 1: 500 },
						},
						transport: 'I',
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 1400 },
							2: { 1: 1400 },
							1: { 1: 1400 },
							4: { 1: 1400 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
						transport: null,
					}
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
					chance: { 3: .25, 2: .25, 1: .25, 4: 0 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3'],
						2: ['4','5','6'],
						1: ['7','8','9'],
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 5, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'D', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AP', 2:'AP', 3:'AS' } }
						], {
							partToUnlock: 1
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
				},
				mapInfo: 'No (F)BB(V) allowed<br>No CV(L/B) allowed<br>',
				startCheckRule: [
					ChIsRouteNotUnlockedRule(1, 'Start1'),
					ChShipTypeRoutingRule(['SS', 'SSV', 'AV'], '>', 0, 'Start1', 'Start2'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 212,
						y: 114,
						rules: [
							ChShipHistoricalRoutingRule('Operation Ta-gō Kai ships', 'event.historical.ormoc', '>=', { 4:0, 1:2, 2:3, 3:5 }, 'C', 'B')
						]
					},
					'Start2': {
						type: 0,
						x: 461,
						y: 83,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'A': {
						type: 1,
						x: 151,
						y: 268,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'B': {
						type: 1,
						x: 177,
						y: 208,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['CA', 'CAV'], '<=', 1, 'D', 'A'),
						]
					},
					'C': {
						type: 3,
						x: 245,
						y: 198,
						distance: 4,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 272,
						y: 311,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 335,
						y: 314,
						distance: 3,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 1,
						x: 354,
						y: 287,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 3,
						x: 398,
						y: 337,
						distance: 3,
						dropoff: true,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'H': {
						type: 1,
						x: 390,
						y: 228,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 2,
						x: 420,
						y: 204,
						distance: 2,
						resource: 0,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 395,
						y: 166,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'L', 0: 'K' }),
						]
					},
					'K': {
						type: 3,
						x: 414,
						y: 113,
						distance: 3,
						end: true
					},
					'L': {
						type: 1,
						x: 333,
						y: 145,
						distance: 2,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'M': {
						type: 1,
						x: 494,
						y: 249,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'N': {
						type: 1,
						x: 514,
						y: 180,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 3, 'P'),
							ChShipHistoricalRoutingRule('Operation Ta-gō Kai ships', 'event.historical.ormoc', '>=', { 4:0, 1:1, 2:2, 3:3 }, 'P', 'M')
						]
					},
					'O': {
						type: 1,
						x: 533,
						y: 109,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD', 'DE'], '>=', 4, 'N', 'R'),
						]
					},
					'P': {
						type: 1,
						x: 564,
						y: 222,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'T', 0: 'Q' }),
						]
					},
					'Q': {
						type: 3,
						x: 564,
						y: 324,
						distance: 5,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 595,
						y: 132,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChLOSRule({ 3: 'N', 0: 'S' }),
						]
					},
					'S': {
						type: 3,
						x: 664,
						y: 157,
						distance: 7,
						hidden: 1,
						end: true
					},
					'T': {
						type: 1,
						x: 634,
						y: 279,
						distance: 6,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Pursuit! The 2nd Strike Unit',
				fleetTypes: [0,7],
				bgmMap: 112,
				bgmDN: 114,
				bgmNN: 114,
				bgmDB: 113,
				bgmNB: 113,
				bossnode: [21,22,23],
				checkLock: [5,6,7],
				giveLock: 8,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'U',
						maphp: {
							3: { 1: 1050 },
							2: { 1: 1050 },
							1: { 1: 1050 },
							4: { 1: 1050 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
						enemyRaid: null,
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 2100 },
							2: { 1: 2100 },
							1: { 1: 2100 },
							4: { 1: 2100 },
						},
						finalhp: {
							3: 700,
							2: 700,
							1: 700,
							4: 700,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .17, 2: .17, 1: .17, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (airState >= 1) CHDATA.event.maps[6].debuff.AB = CHDATA.event.maps[6].debuff.AB + 1 || 1;
							}
						},
					},
					3: {
						currentBoss: 'W',
						maphp: {
							3: { 1: 1560 },
							2: { 1: 1360 },
							1: { 1: 1170 },
							4: { 1: 1170 },
						},
						finalhp: {
							3: 390,
							2: 390,
							1: 370,
							4: 370,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .17, 2: .17, 1: .17, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '6_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 6, [
							{ node: 'I', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'S', 3:'S' } },
							{ node: 'I', type: 'ReachNode', timesRequiredPerDiff: { 1:1 } },
							{ node: 'K', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'A' } },
							{ node: 'K', type: 'ReachNode', timesRequiredPerDiff: { 2:1 } },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '6_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 3, 6, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:3 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
						], {
							partToUnlock: 2
						})
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
					if (CHDATA.event.maps[6].diff == 1 || CHDATA.event.maps[6].diff == 4 || CHDATA.config.disablelock) return;
					let lock = null, allSame = true;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
						}
					}
					if (!allSame) errors.push('No mixed locks.');
				},
				mapInfo: 'No BB(V) allowed<br>No CV(L/B) allowed',
				startCheckRule: [
					ChAllHaveTagRule([4], 'Start2', 'Start1')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 100,
						y: 107,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 340,
						y: 253,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'A': {
						type: 3,
						x: 166,
						y: 169,
						distance: 2,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 3,
						x: 228,
						y: 131,
						distance: 2,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'C': {
						type: 1,
						x: 292,
						y: 171,
						distance: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 3,
						x: 363,
						y: 142,
						distance: 2,
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					/*'E': {
						type: 3,
						x: 393,
						y: 293,
						distance: 1,
						end: true
					},*/
					'F': {
						type: 3,
						x: 408,
						y: 228,
						distance: 1,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'G': {
						type: 1,
						x: 415,
						y: 182,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'H': {
						type: 1,
						x: 430,
						y: 110,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1'],
						},
						rules: [
							ChLOSRule({ 3: 'G', 0: 'M' }),
						]
					},
					'I': {
						type: 1,
						x: 424,
						y: 335,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						end: true
					},
					'J': {
						type: 1,
						x: 464,
						y: 241,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'K': {
						type: 1,
						x: 473,
						y: 145,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'L': {
						type: 1,
						x: 495,
						y: 314,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShowLOSPlane(ChIsRouteNotUnlockedRule(1, 'I')),
							ChShowLOSPlane(ChShipTypeRoutingRule(['DD'], '>=', 2, 'Q')),
							ChShowLOSPlane(ChDefaultRouteRule('I'))
						]
					},
					'M': {
						type: 3,
						x: 502,
						y: 76,
						distance: 4,
						end: true
					},
					'N': {
						type: 3,
						x: 521,
						y: 253,
						distance: 3,
						rules: [
							ChSelectRouteRule(['L','O']),
						]
					},
					'O': {
						type: 1,
						x: 531,
						y: 206,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChSpeedRule('<=', 5, 'M'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'K'),
							ChAllHaveTagRule([4], 'K'),
							ChIsRouteNotUnlockedRule(2, 'P'),
							ChShipTypeRoutingRule(['AV'], '>', 0, 'P', 'R'),
						]
					},
					'P': {
						type: 1,
						x: 555,
						y: 168,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'Q': {
						type: 1,
						x: 577,
						y: 270,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'V', 0: 'T' }),
						]
					},
					'R': {
						type: 1,
						x: 580,
						y: 219,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'W', 0: 'T' }),
						]
					},
					'T': {
						type: 3,
						x: 658,
						y: 286,
						distance: 6,
						hidden: 1,
						end: true
					},
					'U': {
						type: 1,
						x: 596,
						y: 97,
						distance: 6,
						boss: true,
						friendFleet: ['desdiv19','crudiv4B','russian1','russian2','nishimura2'],
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.ormoc', 1.2)
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'V': {
						type: 1,
						x: 590,
						y: 328,
						distance: 6,
						hidden: 1,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.ormoc', 1.2)
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 658,
						y: 208,
						distance: 6,
						hidden: 2,
						boss: true,
						friendFleet: ['desdiv19','crudiv4B','russian1','russian2','nishimura2'],
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.ormoc', 1.2)
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Victory on the Dawn\'s Horizon...',
				fleetTypes: [1,2,3],
				bgmMap: 112,
				bgmDN: 114,
				bgmNN: 114,
				bgmDB: 115,
				bgmNB: 115,
				bossnode: [22,24],
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 2400 },
							2: { 1: 2400 },
							1: { 1: 2400 },
							4: { 1: 2400 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
							4: 800,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
						},
					},
					2: {
						currentBoss: 'X',
						maphp: {
							3: { 1: 4500 },
							2: { 1: 4500 },
							1: { 1: 4500 },
							4: { 1: 4500 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
							4: 800,
						},
						enemyRaid: null,
					}
				},
				reward: { ships: [549] },
				clearSpecial: function() {
					let offset = 2000;
					setTimeout(function() { SM.playNew('assets/voice/Musashi_ShoGo_2018_End1.mp3'); }, offset);
					setTimeout(function() { SM.playNew('assets/voice/Zuikaku_ShoGo_2018_End1.mp3'); }, 18000+offset);
					setTimeout(function() { SM.playNew('assets/voice/Shoukaku_ShoGo_2018_End1.mp3'); }, 26000+offset);
					setTimeout(function() { SM.playNew('assets/voice/Musashi_ShoGo_2018_End2.mp3'); }, 36000+offset);
					setTimeout(function() { SM.playNew('assets/voice/KanColle_ShoGo_2018_ED.mp3'); }, 50500+offset);
					setTimeout(function() { SM.playNew('assets/voice/Zuikaku_ShoGo_2018_End2.mp3'); }, 244500+offset);
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '7_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 7, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:2, 3:2 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'Q', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '7_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 7, [], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '7_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 7, [
							{ node: 'G', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'S' } },
							{ node: 'H', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'A', 2:'S', 3:'S' } },
							{ node: 'I', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'L', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 3:1 }, ranksRequiredPerDiff: { 4:'B', 1:'B', 3:'S' } },
							{ node: 'D', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A' } },
						], {
							partToUnlock: 3
						})
					}
				},
				debuffRules: new ChGimmickList('debuff', null, 7, [
					{ node: 'Q', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'A', 3:'A' }, routeUnlockRequired: 3 },
					{ node: 'M', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'S', 3:'S' }, routeUnlockRequired: 3 },
					{ node: 'W', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'S', 3:'S' }, routeUnlockRequired: 3 },
				], {
					difficultiesAllowed: [2,3]
				}),
				startCheckRule: [
					ChFleetTypeRule(1, 'Start1', 'Start2')
				],
				startBonus: [
					new ChShipIdsBonuses({ type: 'set', debuffOnly: true }, [111,116,143], 1.8)
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 226,
						y: 84,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Start2': {
						type: 0,
						x: 261,
						y: 322,
						rules: [
							ChSpeedRule('>=', 10, 'E', 'A'),
						]
					},
					'A': {
						type: 1,
						x: 261,
						y: 245,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'B': {
						type: 3,
						x: 273,
						y: 147,
						distance: 2,
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'C')),
							ChSpeedRule('>=', 15, 'D'),
							
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'D'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'D'),
							], 'AND', 'D'),

							ChDefaultRouteRule('C')
						]
					},
					'C': {
						type: 1,
						x: 320,
						y: 212,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChSpeedRule('>=', 15, 'H', 'D'),
						]
					},
					'D': {
						type: 1,
						x: 359,
						y: 150,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChSpeedRule('>=', 15, 'M'),
							ChSpeedRule('>=', 10, 'I', 'G'),
						]
					},
					'E': {
						type: 3,
						x: 364,
						y: 248,
						distance: 4,
						rules: [
							ChSpeedRule('>=', 15, 'K', 'F'),
						]
					},
					'F': {
						type: 1,
						x: 392,
						y: 328,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'G': {
						type: 1,
						x: 401,
						y: 84,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 414,
						y: 188,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'I': {
						type: 1,
						x: 433,
						y: 121,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'J': {
						type: 3,
						x: 454,
						y: 328,
						distance: 7,
						rules: [
							ChSelectRouteRule(['K','N'],),
						]
					},
					'K': {
						type: 1,
						x: 462,
						y: 278,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'L')),
							ChSpeedRule('>=', 10, 'H'),
							ChDefaultRouteRule('L')
						]
					},
					'L': {
						type: 1,
						x: 472,
						y: 217,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShowLOSPlane(ChMultipleRulesRule([
								ChSpeedRule('<=', 5, 'Q'),
								ChShipTypeRoutingRule(['aBB'], '>=', 5, 'Q'),
							], 'AND', 'Q')),
							ChSelectRouteRule(['H','P']),
						]
					},
					'M': {
						type: 1,
						x: 474,
						y: 170,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(2, 'Q'),
								ChShowLOSPlane(ChSelectRouteRule(['Q','O'])),
							),
							
							ChShowLOSPlane(ChShipTypeRoutingRule(['AV', 'AS'], '>', 0, 'Q')),

							ChSelectRouteRule(['W','O']),
						]
					},
					'N': {
						type: 1,
						x: 515,
						y: 328,
						distance: 8,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'R')),

							ChShowLOSPlane(ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'T'),
								ChShipTypeRoutingRule(['aBB'], '<=', 4, 'T'),
							], 'AND', 'T')),

							ChShowLOSPlane(ChDefaultRouteRule('S'))
						]
					},
					'O': {
						type: 3,
						x: 507,
						y: 77,
						distance: 8,
						end: true
					},
					'P': {
						type: 3,
						x: 531,
						y: 244,
						distance: 7,
						end: true
					},
					'Q': {
						type: 1,
						x: 574,
						y: 151,
						distance: 9,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'R': {
						type: 3,
						x: 581,
						y: 328,
						distance: 9,
						end: true
					},
					'S': {
						type: 1,
						x: 502,
						y: 288,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'T': {
						type: 1,
						x: 561,
						y: 288,
						distance: 9,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'U': {
						type: 1,
						x: 605,
						y: 252,
						distance: 10,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'V': {
						type: 1,
						x: 655,
						y: 212,
						distance: 11,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: { friendFleet: null },
							2: { friendFleet: ['desdiv19','engano3','engano4','engano5','engano6'] },
						},
						bonuses: [
							// --- Debuff bonuses on historicals
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.kurita', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.troopTransport', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.shimaEscort', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.ozawa', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.nishimura', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.ormoc', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.leyteOther', 1.15),

							// --- Debuff bonuses on historicals
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.kurita', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.troopTransport', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.shimaEscort', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.ozawa', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.nishimura', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.ormoc', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.leyteOther', 1.6),
							
							// --- Debuff override on specfic ships
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, [110], 2.4),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, [111,116,143], 1.8),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 516,
						y: 133,
						distance: 7,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'X': {
						type: 1,
						x: 564,
						y: 91,
						distance: 9,
						hidden: 2,
						boss: true,
						friendFleetWaves: {
							1: { friendFleet: ['desdiv19B','crudiv4B','ibs2','nishimura2','western1','western2-broken','western3'] },
							2: { friendFleet: ['desdiv19B','crudiv4B','ibs2','nishimura2','western1','western2','western3','engano1','engano2','engano4'] },
						},
						bonuses: [
							// --- Debuff bonuses on historicals
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.kurita', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.troopTransport', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.shimaEscort', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.ozawa', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.nishimura', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.ormoc', 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true }, 'event.historical.leyteOther', 1.15),

							// --- Debuff bonuses on historicals
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.kurita', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.troopTransport', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.shimaEscort', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.ozawa', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.nishimura', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.ormoc', 1.6),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, 'event.historical.leyteOther', 1.6),
							
							// --- Debuff override on specfic ships
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, [110], 2.4),
							new ChShipIdsBonuses({ type: 'set', debuffOnly: true, includeFF: true }, [111,116,143], 1.8),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			}
		},
	},
	42: {
		name: 'Early Fall 2018',
		date: '2018-09-08',
		diffMode: 2,
		allowDiffs: [3,2,1,4],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		bannerImg: 'assets/maps/42/banner1.png',
		bannerImgAlt: 'assets/maps/42/banner2.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1700: { HP: 600 },
			1701: { HP: 700 },
			1702: { HP: 444 },
			1703: { HP: 544 },
			1704: { HP: 644 },
			1705: { HP: 370 },
			1706: { HP: 430, AR: 169 },
			1707: { HP: 490, AR: 189 },
			1834: { AR: 210 },
			1835: { AR: 240 },
			1836: { AR: 280 },
			1837: { AR: 225 },
			1838: { AR: 255 },
			1839: { AR: 305 },
		},
		historical: {
			nagumo: [83,111,91,110,90, 78,79,86,85, 71,72, 114, 48,132,167,168,169,170,17,18,49],
			ozawa: [76,125,124, 69, 23, 479,9,32,33,10],
			italians: [443,575, 449,448, 444, 441,442, 535],
			kriegsmarine: [432, 171, 176, 174,175, 431],
			marineNationaleAndKriegsmarine: [432, 171, 176, 174,175, 431, 492, 491],
			royalnavy: [515, 571,439, 519],
			marinenationale: [492, 491],
			sovietnavy: [511, 516,147],
			europeans: [
				432, 171, 176, 174,175, 431,
				515, 571,439, 519,
				492, 491,
				443,575, 449,448, 444, 441,442, 535,
				511, 516, 147,
				574
			]
		},
		friendFleet: {
			'desdiv31': { voice: [543,142], ships: [
				{ mid: 543, LVL: 84, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,15,240] },
				{ mid: 345, LVL: 80, FP: 51, TP: 80, AA: 50, AR: 49, equips: [267,15,88] },
				{ mid: 359, LVL: 78, FP: 50, TP: 81, AA: 50, AR: 49, equips: [267,15,88] },
			] },
			'USfleet1': { voice: [397,142], ships: [
				{ mid: 397, LVL: 67, FP: 51, TP: 0, AA: 95, AR: 90, equips: [255,257,256,258] },
				{ mid: 545, LVL: 86, FP: 68, TP: 0, AA: 94, AR: 85, equips: [254,257,257,256] },
				{ mid: 396, LVL: 82, FP: 32, TP: 0, AA: 48, AR: 39, equips: [277,257,258] },
				{ mid: 681, LVL: 88, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,284] },
			] },
			'USfleet2': { voice: [396,142], ships: [
				{ mid: 545, LVL: 86, FP: 68, TP: 0, AA: 94, AR: 85, equips: [254,257,257,256] },
				{ mid: 396, LVL: 82, FP: 32, TP: 0, AA: 48, AR: 39, equips: [277,257,258] },
				{ mid: 681, LVL: 88, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,284] },
			] },
			'unassorted1': { voice: [370,142], ships: [
				{ mid: 370, LVL: 89, FP: 42, TP: 69, AA: 52, AR: 37, equips: [293,174,88], },
				{ mid: 363, LVL: 88, FP: 38, TP: 68, AA: 56, AR: 38, equips: [293,174,88], },
				{ mid: 371, LVL: 87, FP: 39, TP: 63, AA: 43, AR: 35, equips: [293,174,88], },
				{ mid: 387, LVL: 86, FP: 38, TP: 52, AA: 38, AR: 35, equips: [174,174,174], },
			] },
			'unassorted2': { voice: [396,142], ships: [
				{ mid: 396, LVL: 82, FP: 32, TP: 0, AA: 48, AR: 39, equips: [277,257,258] },
				{ mid: 681, LVL: 88, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,284] },
				{ mid: 371, LVL: 87, FP: 39, TP: 63, AA: 43, AR: 35, equips: [293,174,88], },
				{ mid: 387, LVL: 86, FP: 38, TP: 52, AA: 38, AR: 35, equips: [174,174,174], },
			] },
			'desdiv31B': { voice: [686,242], ships: [
				{ mid: 359, LVL: 78, FP: 45, TP: 69, AA: 50, AR: 49, equips: [267,267,74] },
				{ mid: 686, LVL: 72, FP: 47, TP: 63, AA: 50, AR: 43, equips: [267,267,101] },
				{ mid: 344, LVL: 80, FP: 41, TP: 61, AA: 51, AR: 40, equips: [267,15,88] },
				{ mid: 543, LVL: 84, FP: 36, TP: 51, AA: 50, AR: 28, equips: [267,15,240] },
			] },
			'europefleet1': { voice: [347,142], ships: [
				{ mid: 365, LVL: 70, FP: 16, TP: 0, AA: 53, AR: 49, equips: [184,305,305] },
				{ mid: 496, LVL: 88, FP: 68, TP: 35, AA: 75, AR: 67, equips: [162,162,162,163] },
				{ mid: 361, LVL: 79, FP: 69, TP: 39, AA: 66, AR: 64, equips: [162,162,162,164] },
				{ mid: 580, LVL: 82, FP: 50, TP: 63, AA: 60, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 38, TP: 60, AA: 48, AR: 45, equips: [147,147,126] },
			] },
			'europefleet2': { voice: [574,242], ships: [
				{ mid: 574, LVL: 82, FP: 48, TP: 68, AA: 58, AR: 46, equips: [303,303,304] },
				{ mid: 179, LVL: 74, FP: 24, TP: 54, AA: 34, AR: 39, equips: [78,78,126] },
				{ mid: 180, LVL: 73, FP: 24, TP: 43, AA: 51, AR: 40, equips: [78,78,126] },
				{ mid: 394, LVL: 88, FP: 52, TP: 90, AA: 70, AR: 50, equips: [280,280,260] },
				{ mid: 395, LVL: 85, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,283,88] },
				{ mid: 580, LVL: 82, FP: 50, TP: 63, AA: 60, AR: 50, equips: [147,283,88] },
			] },
			'europefleet3': { voice: [580,142], ships: [
				{ mid: 446, LVL: 88, FP: 96, TP: 0, AA: 69, AR: 86, equips: [133,133,133,134] },
				{ mid: 447, LVL: 87, FP: 92, TP: 0, AA: 86, AR: 90, equips: [133,133,133,134] },
				{ mid: 580, LVL: 82, FP: 50, TP: 63, AA: 60, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 38, TP: 60, AA: 48, AR: 45, equips: [147,147,126] },
			] },
			'europefleet4': { voice: [580,142], ships: [
				{ mid: 496, LVL: 88, FP: 68, TP: 35, AA: 75, AR: 67, equips: [162,162,162,163] },
				{ mid: 361, LVL: 79, FP: 69, TP: 39, AA: 66, AR: 64, equips: [162,162,162,164] },
				{ mid: 580, LVL: 82, FP: 50, TP: 63, AA: 60, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 38, TP: 60, AA: 48, AR: 45, equips: [147,147,126] },
			] },
			'desdiv31C': { voice: [686,242], ships: [
				{ mid: 686, LVL: 72, FP: 50, TP: 80, AA: 56, AR: 49, equips: [267,267,74] },
				{ mid: 359, LVL: 78, FP: 50, TP: 81, AA: 50, AR: 49, equips: [267,15,88] },
				{ mid: 344, LVL: 80, FP: 50, TP: 78, AA: 62, AR: 51, equips: [267,15,88] },
			] },
			'desdiv31D': { voice: [686,242], ships: [
				{ mid: 686, LVL: 72, FP: 47, TP: 63, AA: 50, AR: 43, equips: [267,267,101] },
				{ mid: 359, LVL: 78, FP: 45, TP: 69, AA: 50, AR: 49, equips: [267,267,74] },
				{ mid: 344, LVL: 80, FP: 41, TP: 61, AA: 51, AR: 40, equips: [267,15,88] },
			] },
			'desdiv31E': { voice: [686,242], ships: [
				{ mid: 686, LVL: 72, FP: 47, TP: 63, AA: 50, AR: 43, equips: [267,267,101] },
				{ mid: 359, LVL: 78, FP: 45, TP: 69, AA: 50, AR: 49, equips: [267,267,74] },
				{ mid: 344, LVL: 80, FP: 41, TP: 61, AA: 51, AR: 40, equips: [267,15,88] },
				{ mid: 543, LVL: 84, FP: 36, TP: 51, AA: 50, AR: 28, equips: [267,15,240] },
			] },
			'desdiv31F': { voice: [543,142], ships: [
				{ mid: 543, LVL: 84, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,15,240] },
				{ mid: 686, LVL: 72, FP: 50, TP: 80, AA: 56, AR: 49, equips: [267,267,74] },
				{ mid: 344, LVL: 80, FP: 50, TP: 78, AA: 62, AR: 51, equips: [267,15,126] },
				{ mid: 359, LVL: 78, FP: 50, TP: 81, AA: 50, AR: 49, equips: [267,267,126] },
				{ mid: 345, LVL: 80, FP: 51, TP: 80, AA: 50, AR: 49, equips: [267,15,88] },
			] },
			'desdiv31G': { voice: [543,142], ships: [
				{ mid: 543, LVL: 84, FP: 36, TP: 51, AA: 50, AR: 28, equips: [267,15,240] },
				{ mid: 686, LVL: 72, FP: 47, TP: 63, AA: 50, AR: 43, equips: [267,267,74] },
				{ mid: 344, LVL: 80, FP: 41, TP: 61, AA: 51, AR: 40, equips: [267,15,126] },
				{ mid: 359, LVL: 78, FP: 45, TP: 69, AA: 50, AR: 49, equips: [267,267,126] },
				{ mid: 345, LVL: 80, FP: 51, TP: 80, AA: 50, AR: 49, equips: [267,15,88] },
			] },
			'europefleet5': { voice: [393,142], ships: [
				{ mid: 393, LVL: 86, FP: 50, TP: 0, AA: 82, AR: 70, equips: [243,244,257,259] },
				{ mid: 576, LVL: 77, FP: 114, TP: 0, AA: 90, AR: 104, equips: [299,299,299,301] },
				{ mid: 364, LVL: 90, FP: 106, TP: 0, AA: 98, AR: 93, equips: [190,190,190,191] },
				{ mid: 394, LVL: 88, FP: 52, TP: 90, AA: 70, AR: 50, equips: [280,58,240] },
			] },
			'europefleet6': { voice: [372,242], ships: [
				{ mid: 372, LVL: 82, FP: 58, TP: 0, AA: 48, AR: 56, equips: [194,126,126,167] },
				{ mid: 392, LVL: 70, FP: 96, TP: 0, AA: 74, AR: 96, equips: [246,246,247,74] },
				{ mid: 179, LVL: 74, FP: 49, TP: 71, AA: 64, AR: 53, equips: [78,78,126] },
				{ mid: 180, LVL: 73, FP: 47, TP: 71, AA: 68, AR: 53, equips: [78,78,126] },
			] },
			'europefleet7': { voice: [372,242], ships: [
				{ mid: 372, LVL: 82, FP: 58, TP: 0, AA: 48, AR: 56, equips: [194,126,126,167] },
				{ mid: 179, LVL: 74, FP: 49, TP: 71, AA: 64, AR: 53, equips: [78,78,126] },
				{ mid: 180, LVL: 73, FP: 47, TP: 71, AA: 68, AR: 53, equips: [78,78,126] },
			] },
			'europefleet8': { voice: [574,242], ships: [
				{ mid: 574, LVL: 82, FP: 48, TP: 68, AA: 58, AR: 46, equips: [303,303,101] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,126] },
				{ mid: 446, LVL: 88, FP: 102, TP: 0, AA: 90, AR: 92, equips: [133,133,133,134] },
				{ mid: 447, LVL: 87, FP: 105, TP: 0, AA: 94, AR: 90, equips: [133,133,133,134] },
			] },
			'europefleet9': { voice: [574,242], ships: [
				{ mid: 574, LVL: 82, FP: 48, TP: 68, AA: 58, AR: 46, equips: [303,303,101] },
				{ mid: 392, LVL: 70, FP: 96, TP: 0, AA: 75, AR: 96, equips: [246,246,247,74] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,126] },
				{ mid: 446, LVL: 88, FP: 102, TP: 0, AA: 90, AR: 92, equips: [133,133,133,134] },
				{ mid: 447, LVL: 87, FP: 105, TP: 0, AA: 94, AR: 90, equips: [133,133,133,134] },
			] },
			'europefleet10': { voice: [579,242], ships: [
				{ mid: 579, LVL: 85, FP: 62, TP: 70, AA: 102, AR: 63, equips: [303,303,303,173] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,101] },
				{ mid: 353, LVL: 80, FP: 50, TP: 0, AA: 80, AR: 80, equips: [159,305,64,259] },
				{ mid: 179, LVL: 74, FP: 49, TP: 71, AA: 64, AR: 53, equips: [78,78,84] },
				{ mid: 180, LVL: 73, FP: 47, TP: 71, AA: 68, AR: 53, equips: [78,78,85] },
			] },
			'europefleet11': { voice: [579,242], ships: [
				{ mid: 579, LVL: 85, FP: 62, TP: 70, AA: 102, AR: 63, equips: [303,303,303,173] },
				{ mid: 496, LVL: 88, FP: 68, TP: 35, AA: 75, AR: 67, equips: [162,162,162,129] },
				{ mid: 361, LVL: 79, FP: 69, TP: 39, AA: 66, AR: 64, equips: [162,162,162,129] },
				{ mid: 365, LVL: 76, FP: 28, TP: 0, AA: 72, AR: 57, equips: [244,257,258] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,74] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,101] },
			] },
			'europefleet12': { voice: [576,142], ships: [
				{ mid: 576, LVL: 77, FP: 114, TP: 0, AA: 92, AR: 104, equips: [299,299,299,301] },
				{ mid: 393, LVL: 86, FP: 50, TP: 0, AA: 82, AR: 70, equips: [243,244,257,259] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,74] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,101] },
				{ mid: 392, LVL: 70, FP: 96, TP: 0, AA: 74, AR: 96, equips: [246,246,247,129] },
			] },
			'europefleet13': { voice: [364,242], ships: [
				{ mid: 364, LVL: 88, FP: 106, TP: 0, AA: 98, AR: 93, equips: [190,190,190,191] },
				{ mid: 576, LVL: 77, FP: 114, TP: 0, AA: 92, AR: 104, equips: [299,299,299,301] },
				{ mid: 149, LVL: 91, FP: 98, TP: 0, AA: 84, AR: 94, equips: [7,7,7,74] },
				{ mid: 150, LVL: 84, FP: 98, TP: 0, AA: 82, AR: 95, equips: [7,7,7,101] },
				{ mid: 394, LVL: 88, FP: 52, TP: 90, AA: 70, AR: 50, equips: [280,58,240] },
			] },
			'europefleet14': { voice: [364,242], ships: [
				{ mid: 364, LVL: 88, FP: 106, TP: 0, AA: 98, AR: 93, equips: [190,190,190,74] },
				{ mid: 392, LVL: 70, FP: 96, TP: 0, AA: 74, AR: 96, equips: [246,246,247,101] },
				{ mid: 372, LVL: 82, FP: 58, TP: 0, AA: 48, AR: 56, equips: [194,126,126,167] },
				{ mid: 394, LVL: 88, FP: 52, TP: 90, AA: 70, AR: 50, equips: [280,58,240] },
			] },
			'europefleet15': { voice: [580,142], ships: [
				{ mid: 496, LVL: 88, FP: 87, TP: 48, AA: 90, AR: 88, equips: [162,162,162,163] },
				{ mid: 361, LVL: 79, FP: 77, TP: 44, AA: 73, AR: 77, equips: [162,162,162,164] },
				{ mid: 580, LVL: 82, FP: 54, TP: 72, AA: 63, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 78, FP: 48, TP: 72, AA: 59, AR: 50, equips: [147,147,126] },
			] },
		},
		disableMore: { ships: [534,527] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Off the Bali Island<br>Strategy preparations! Secure a rear supply line',
				fleetTypes: [0],
				bgmMap: 119,
				bgmDN: 120,
				bgmNN: 120,
				bgmDB: 121,
				bgmNB: 121,
				bossnode: 9,
				checkLock: [2,4,3,9,8],
				giveLock: 5,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 1200 },
					1: { 1: 750 },
					4: { 1: 750 },
				},
				finalhp: {
					3: 388,
					2: 288,
					1: 188,
					4: 188,
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
				},
				mapInfo: 'No CV(L/B) allowed<br>No (F)BB(V) allowed',
				startCheckRule: [
					ChOneShipNotOfTypeRule(['CL', 'CT', 'DD', 'DE'], 'Start1'),
					ChShipTypeRoutingRule(['CL', 'CT'], '>', 2, 'Start1'),
					ChShipTypeRoutingRule(['DD', 'DE'], '>=', 4, 'Start2'),

					ChMultipleRulesRule([
						ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'Start2'),
						ChShipTypeRoutingRule(['CL'], '<=', 1, 'Start2'),
					], 'AND', 'Start2'),

					ChDefaultRouteRule('Start1')
				],
				nodes: {
					'Start1': {
						type: 3,
						x: 97,
						y: 88,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 3,
						x: 561,
						y: 84,
						rules: [
							ChShipCountRoutingRule('<=', 5, 'G'),
							ChShipTypeRoutingRule(['CL', 'CT'], '>=', 2, 'G'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'G'),
							ChRandomRule({ 'G': .6, 'H': .4 }),
						]
					},
					'A': {
						type: 1,
						x: 203,
						y: 107,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CA', 'CAV'], '<=', 2, 'B'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'B'),
							], 'AND', 'B'),
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'B'),
								ChRandomRule({ 'D': .5, 'B': .5 }),
							),
							ChDefaultRouteRule('D')
						]
					},
					'B': {
						type: 3,
						x: 236,
						y: 160,
						rules: [
							ChShipTypeRoutingRule(['DE'], '>=', 3, 'C'),
							ChShipTypeRoutingRule(['AV'], '>=', 2, 'C'),
							ChShipTypeRoutingRule(['AO'], '>=', 1, 'C'),

							ChIfThenElseRule(
								ChShipTypeRoutingRule(['DE'], '=', 2, 'B'),
								ChRandomRule({ 'C': .5, 'E': .5 }),
							),

							ChShipTypeRoutingRule(['CAV', 'CA'], '>', 0, 'E'),
							
							ChRandomRule({ 'C': .5, 'E': .5 }),
						]
					},
					'C': {
						type: 2,
						x: 274,
						y: 222,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'D': {
						type: 4,
						resource: 1,
						x: 315,
						y: 125,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 379,
						y: 193,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 392,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3', 'Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'G': {
						type: 1,
						x: 480,
						y: 254,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipCountRoutingRule('<=', 5, 'F'),
							ChShipTypeRoutingRule(['DE'], '>=', 3, 'F'),
							
							ChRandomRule({ 'E': .3, 'F': .7 }),
						]
					},
					'H': {
						type: 4,
						x: 563,
						y: 209,
						resource: 1,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'I': {
						type: 1,
						boss: true,
						subonly: true,
						end: true,
						x: 554,
						y: 319,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 4'],
							4: ['Casual 3'],
						},
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Northern Straits of Malacca<br>Operation \'Reclaim the Strait\'',
				fleetTypes: [0],
				bgmMap: 119,
				bgmDN: 120,
				bgmNN: 120,
				bgmDB: 121,
				bgmNB: 121,
				bossnode: [9, 15],
				checkLock: [5,2,3,9,8],
				giveLock: 4,
				lbas: 1,
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 2, [], { partToUnlock: 1 })
					},
				},
				parts: {
					1: {
						currentBoss: 'I',
						maphp: {
							3: { 1: 300 },
							2: { 1: 210 },
							1: { 1: 200 },
							4: { 1: 200 },
						},
						transport: 'G',
					},
					2: {
						currentBoss: 'O',
						maphp: {
							3: { 1: 3000 },
							2: { 1: 2600 },
							1: { 1: 2300 },
							4: { 1: 2300 },
						},
						finalhp: {
							3: 720,
							2: 720,
							1: 720,
							4: 720,
						},
						transport: null,
					}
				},
				startCheckRule: [
					ChMapPartRule([1], ChFixedRoutingRule('Start1')),
					ChMapPartRule([2], ChFixedRoutingRule('Start2')),
				],
				nodes: {
					'Start1': {
						type: 3,
						x: 709,
						y: 332,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 3,
						x: 425,
						y: 208,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'A': {
						type: 3,
						x: 551,
						y: 331,
						distance: 3,
						rules: [
							ChShipTypeRoutingRule(['DE', 'DD'], '<', 2, 'B'),
							ChShipTypeRoutingRule(['FBB', 'CVL'], '>', 2, 'B'),
							ChShipTypeRoutingRule(['BB', 'BBV', 'CVB', 'CV'], '>', 0, 'B', 'C'),
						]
					},
					'B': {
						type: 1,
						x: 503,
						y: 345,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 455,
						y: 269,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'D': {
						type: 1,
						x: 382,
						y: 288,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChMapPartRule([1], ChFixedRoutingRule('F')),

							ChShipTypeRoutingRule(['DD', 'CL'], '<', 2, 'J'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 1, 'J'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['BBV'], '>', 0, 'J'),
								ChShipTypeRoutingRule(['CT', 'CLT', 'CA', 'CAV', 'aCV', 'aBB'], '>', 3, 'J'),
							], 'AND', 'J'),
							
							ChShipTypeRoutingRule(['aCV', 'aBB'], '>', 3, 'J'),
							ChDefaultRouteRule('F')
						]
					},
					'E': {
						type: 1,
						x: 280,
						y: 193,
						raid: true,
						distance: 3,
						endRules: [
							ChMapPartRuleOld('=', 1, true),
						],
						rules: [
							ChFixedRoutingRule('K')
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
					},
					'F': {
						type: 3,
						x: 277,
						y: 241,
						distance: 3,
						rules: [
							ChSelectRouteRule(['E', 'G']),
						]
					},
					'G': {
						type: 2,
						x: 269,
						y: 341,
						resource: 0,
						distance: 4,
						rules: [
							ChLOSRule({ 13: 'I', 10.5: 'H' }),
						]
					},
					'H': {
						type: 3,
						x: 222,
						y: 245,
						distance: 4,
						end: true
					},
					'I': {
						type: 1,
						x: 144,
						y: 265,
						end: true,
						boss: true,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
					},
					'J': {
						type: 1,
						x: 351,
						y: 199,
						subonly: true,
						rules: [
							ChFixedRoutingRule('E')
						],
						distance: 2,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'K': {
						type: 3,
						x: 206,
						y: 196,
						distance: 4,
						hidden: 1,
						rules: [
							ChShipTypeRoutingRule(['DD'], '<', 2, 'N'),

							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>', 2, 'N'),
							
							ChShipTypeRoutingRule(['aBB', 'aCV', 'CLT', 'CA'], '>', 3, 'N', 'M'),
						]
					},
					'L': {
						type: 3,
						end: true,
						distance: 5,
						hidden: 1,
						x: 154,
						y: 80,
					},
					'M': {
						type: 1,
						x: 136,
						y: 133,
						rules: [
							ChLOSRule({0: 'L', 3: 'O'}),
						],
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'N': {
						type: 1,
						x: 112,
						y: 209,
						subonly: true,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'O': {
						type: 1,
						x: 246,
						y: 140,
						boss: true,
						end: true,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Battle off South-Western Ceylon<br>Crush the Enemy\'s Western Frontline Anchorage!',
				fleetTypes: [0,1,2,3],
				bgmMap: 119,
				bgmDN: 120,
				bgmNN: 120,
				bgmDB: 123,
				bgmNB: 123,
				bossnode: [13,17],
				checkLock: [5,4,3,9,8],
				giveLock: 2,
				lbas: 2,
				reward: { ships: [534] },
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], { partToUnlock: 1 })
					},
				},
				parts: {
					1: {
						currentBoss: 'M',
						maphp: {
							3: { 1: 2000 },
							2: { 1: 1800 },
							1: { 1: 1700 },
							4: { 1: 1700 },
						},
						finalhp: {
							3: 700,
							2: 600,
							1: 500,
							4: 500,
						},
					},
					2: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 1500 },
							2: { 1: 1400 },
							1: { 1: 1300 },
							4: { 1: 1300 },
						},
						finalhp: {
							3: 490,
							2: 490,
							1: 490,
							4: 490,
						},
					},
					3: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 1400 },
							2: { 1: 1350 },
							1: { 1: 1300 },
							4: { 1: 1300 },
						},
						finalhp: {
							3: 570,
							2: 570,
							1: 570,
							4: 570,
						},
					}
				},
				nodes: {
					'Start': {
						type: 3,
						x: 706,
						y: 112,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 595,
						y: 143,
						distance: 1,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '=', 4, 'B'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '=', 6, 'B'),

							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'E'),
								ChShipCountRoutingRule('<=', 5, 'E'),
								ChShipTypeRoutingRule(['DD'], '=', 4, 'E'),
								ChShipTypeRoutingRule(['CLT'], '=', 0, 'E'),
							], 'AND', 'E', 'C'),
						]
					},
					'B': {
						type: 1,
						x: 586,
						y: 254,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFleetTypeRule(0, 'C'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '=', 6, 'C', 'D'),
						]
					},
					'C': {
						type: 1,
						x: 489,
						y: 173,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'F'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'F'),
							], 'AND', 'F'),

							ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'F', 'D'),
						]
					},
					'D': {
						type: 1,
						x: 485,
						y: 340,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'E': {
						type: 3,
						x: 429,
						y: 119,
						distance: 4,
						rules: [
							ChSelectRouteRule(['F','H']),
						]
					},
					'F': {
						type: 3,
						x: 385,
						y: 250,
						distance: 5,
						rules: [
							ChSelectRouteRule(['I','J']),
						]
					},
					'G': {
						type: 1,
						x: 354,
						y: 181,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 1,
						x: 337,
						y: 107,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'G', 'J'),
						]
					},
					'I': {
						type: 1,
						x: 305,
						y: 308,
						subonly: true,
						endRules: [
							ChMapPartRuleOld('=', 1, true),
						],
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'N', 'O'),
						]
					},
					'J': {
						type: 1,
						x: 232,
						y: 178,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4',],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChShowLOSPlane(ChFleetTypeRule(0, 'M')),
							ChLOSRule({ 0: 'L', 3: 'K' }),
						]						
					},
					'K': {
						type: 1,
						x: 194,
						y: 89,
						subonly: true,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 3,
						x: 132,
						y: 132,
						end: true,
						distance: 8,
					},
					'M': {
						type: 1,
						x: 284,
						y: 95,
						boss: true,
						end: true,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
					'N': {
						type: 1,
						x: 253,
						y: 344,
						hidden: 1,
						raid: true,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'P', 'O'),
						],
						get compDiff() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 1'],
									2: ['Medium 1'],
									1: ['Easy 1'],
									4: ['Casual 1'],
								};
							return {
								3: ['Hard 3'],
								2: ['Medium 3'],
								1: ['Easy 3'],
								4: ['Casual 3'],
							};
						},
						get compDiffF() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 2'],
									2: ['Medium 2'],
									1: ['Easy 2'],
									4: ['Casual 2'],
								};
							return {
								3: ['Hard 4'],
								2: ['Medium 4'],
								1: ['Easy 4'],
								4: ['Casual 4'],
							};
						},
					},
					'O': {
						type: 1,
						x: 214,
						y: 219,
						hidden: 1,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({0: 'L', 3: 'Q'}),
						]
					},
					'P': {
						type: 1,
						x: 148,
						y: 286,
						hidden: 1,
						raid: true,
						distance: 8,
						get compDiff() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 1'],
									2: ['Medium 1'],
									1: ['Easy 1'],
									4: ['Casual 1'],
								};
							return {
								3: ['Hard 3'],
								2: ['Medium 3'],
								1: ['Easy 3'],
								4: ['Casual 3'],
							};
						},
						get compDiffF() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 2'],
									2: ['Medium 2'],
									1: ['Easy 2'],
									4: ['Casual 2'],
								};
							return {
								3: ['Hard 4'],
								2: ['Medium 4'],
								1: ['Easy 4'],
								4: ['Casual 4'],
							};
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'Q': {
						type: 1,
						x: 102,
						y: 219,
						hidden: 1,
						distance: 9,
						boss: true,
						end: true,
						friendFleet: ['desdiv31','USfleet1','USfleet2','unassorted1','unassorted2'],
						bonuses: [
							new ChEquipTypesBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, [TYPE3SHELL], '>', 0, 1.35),
							new ChEquipTypesBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, [SEAPLANEBOMBER,SEAPLANEFIGHTER], '>', 0, 1.3),
							new ChEquipTypesBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, [DIVEBOMBER], '=', 1, 1.4),
							new ChEquipTypesBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, [DIVEBOMBER], '>', 1, 2.1),

							new ChShipIdsBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, 'event.historical.ozawa', 1.2),
							new ChShipIdsBonuses({ type: 'add', on: [1821,1822,1823,1824,1825,1826], includeFF: true, part: 3 }, 'event.historical.nagumo', 1.2),
						],
						get compDiff() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 1'],
									2: ['Medium 1'],
									1: ['Easy 1'],
									4: ['Casual 1'],
								};
							return {
								3: ['Hard 3'],
								2: ['Medium 3'],
								1: ['Easy 3'],
								4: ['Casual 3'],
							};
						},
						get compDiffF() {
							if(CHDATA.event.maps[3].part === 2) 
								return {
									3: ['Hard 2'],
									2: ['Medium 2'],
									1: ['Easy 2'],
									4: ['Casual 2'],
								};
							return {
								3: ['Hard 4'],
								2: ['Medium 4'],
								1: ['Easy 4'],
								4: ['Casual 4'],
							};
						},
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Winds of Genova',
				fleetTypes: [0,1,2,3],
				bgmMap: 122,
				bgmDN: 123,
				bgmNN: 123,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: [12,21],
				checkLock: [5,4,2,9,8],
				giveLock: 3,
				lbasSortie: 2,
				lbas: 3,
				reward: { ships: [575] },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 0, 4: 0 },
					chance: { 3: .25, 2: .15, 1: 0, 4: 0 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3','4'],
						2: ['3','4','5','6','7','8'],
					},
				},
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 400 },
							2: { 1: 280 },
							1: { 1: 220 },
							4: { 1: 220 },
						},
						transport: 'K',
					},
					2: {
						currentBoss: 'U',
						maphp: {
							3: { 1: 3500 },
							2: { 1: 3500 },
							1: { 1: 3500 },
							4: { 1: 3500 },
						},
						finalhp: {
							3: 700,
							2: 700,
							1: 700,
							4: 700,
						},
						transport: null,
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 4, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'O', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
							{ node: 'R', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '4_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'S', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
							{ node: 'G', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 3
						})
					},
				},
				startCheckRule: [
					ChMapPartRule([1], ChFixedRoutingRule("Start1")),
					ChMapPartRule([2], ChFleetTypeRule(0, 'Start2')),
					ChMapPartRule([2], ChDefaultRouteRule('Start1')),
				],
				nodes: {
					'Start1': {
						type: 3,
						x: 715,
						y: 297,
						rules: [
							ChFleetTypeRule([1,2], 'A'),
							ChShipTypeRoutingRuleEscortOnly(['CAV', 'CA'], '>=', 2, 'B'),
							ChShipTypeRoutingRule(['CLT', 'aBB', 'CV', 'CVB', 'SS', 'SSV'], '>', 0, 'B'),

							ChMultipleRulesRule([
								ChFleetTypeRule(3, 'D'),
								ChShipTypeRoutingRuleMainFleetOnly(['CL'], '>', 0, 'D'),
								ChShipTypeRoutingRuleMainFleetOnly(['DD'], '>=', 4, 'D'),
								ChShipTypeRoutingRuleMainFleetOnly(['CAV', 'CVL'], '<=', 1, 'D'),
							], 'AND', 'D'),

							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'D'),
								ChShipTypeRoutingRuleMainFleetOnly(['DD'], '=', 6, 'D'),
							], 'AND', 'D'),

							ChRandomRule({ 'D': .5, 'B': .5 }),
						]
					},
					'Start2': {
						type: 3,
						x: 365,
						y: 214,
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'A': {
						type: 1,
						x: 678,
						y: 224,
						subonly: true,
						distance: 1,
						rules: [
							ChFixedRoutingRule('B')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'B': {
						type: 1,
						x: 608,
						y: 273,
						distance: 2,
						rules: [
							ChShipTypeRoutingRule(['CVL'], '>=', 2, 'C'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'C'),
							ChShipTypeRoutingRule(['aBB'], '>=', 4, 'C'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'C', 'D'),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'C': {
						type: 1,
						x: 546,
						y: 220,
						distance: 3,
						rules: [
							ChFixedRoutingRule('E')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'D': {
						type: 1,
						x: 529,
						y: 329,
						distance: 3,
						rules: [
							ChFleetTypeRule(2, 'E'),

							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'E'),
								ChShipTypeRoutingRule(['DD'], '<=', 1, 'E'),
							], 'AND', 'E'),

							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'F'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'F'),
							], 'AND', 'F', 'H'),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
					},
					'E': {
						type: 4,
						resource: 1,
						x: 478,
						y: 252,
						distance: 3,
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 3,
						x: 430,
						y: 276,
						distance: 4,
						rules: [
							ChSelectRouteRule(['G', 'H']),
						]
					},
					'G': {
						type: 1,
						x: 391,
						y: 176,
						endRules: [
							ChIsRouteNotUnlockedRule(2, true),
						],
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'H': {
						type: 3,
						x: 363,
						y: 310,
						distance: 5,
						rules: [
							ChSelectRouteRule(['J', 'I']),
						]
					},
					'I': {
						type: 1,
						x: 309,
						y: 337,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'J': {
						type: 1,
						x: 298,
						y: 280,
						endRules: [
							ChIsRouteNotUnlockedRule(1, true),
						],
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'K': {
						type: 2,
						resource: 0,
						distance: 6,
						x: 264,
						y: 357,
						rules: [
							ChLOSRule({ 0: 'M', 3: 'L'}),
						]
					},
					'L': {
						type: 1,
						x: 243,
						y: 295,
						distance: 6,
						boss: true,
						end: true,
						bonuses: [
							new ChShipTypeBonuses({ type: 'set' }, ['DD'], 1.2),
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italians', 1.25),
						],
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
					},
					'M': {
						type: 3,
						x: 210,
						y: 337,
						distance: 7,
						end: true,
					},
					'N': {
						type: 1,
						x: 273,
						y: 168,
						hidden: 1,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 245,
						y: 111,
						hidden: 1,
						distance: 6,
						end: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italians', 1.25),
						],
					},
					'P': {
						type: 1,
						x: 227,
						y: 180,
						hidden: 1,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							// --- Before unlock
							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'N'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'N'),
							], 'AND', 'N'),
							
							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'N'),
								ChFleetTypeRule([1,2], 'N'),
							], 'AND', 'N'),

							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'O'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'O'),
							], 'AND', 'O'),

							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(2, 'N'),
								ChRandomRule({ 'N': .5, 'O': .5 }),
							),

							// --- After unlock
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'T'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'T'),
								ChEquipTypeRule({ equipIds: [126,167], haveAllEquips: true }, '=', 2,  2, 'T')
							], 'AND', 'T'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'N'),
								ChEquipTypeRule({ equipIds: [126,167], haveAllEquips: true }, '>=', 3,  3, 'N')
							], 'AND', 'N'),

							ChIfThenElseRule(
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'N'),
								ChRandomRule({ 'N': .5, 'T': .5 }),
								ChRandomRule({ 'N': .5, 'O': .5 }),
							)
						],
					},
					'Q': {
						type: 1,
						x: 195,
						y: 229,
						hidden: 1,
						distance: 7,
						raid: true,
						rules: [
							// --- Before unlock
							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'P'),
								ChFleetTypeRule([1,2,3], 'P'),
							], 'AND', 'P'),
							
							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'P'),
								ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'P'),
							], 'AND', 'P'),

							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(2, 'P'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'P'),
							], 'AND', 'P'),
							
							ChIsRouteNotUnlockedRule(2, 'R'),

							// --- After unlock
							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(3, 'W'),

								ChShipTypeRoutingRule(['DD'], '>=', 2, 'W'),

								ChMultipleRulesRule([
									ChShipHistoricalRoutingRule('Italians', 'event.historical.italians', '>=', 2, 'W'),
									ChSpeedRule('>=', 10, 'W'),
								], 'OR', 'W'),
								
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 1, 'W'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'W'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'W'),

							], 'AND', 'W'),

							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'R'),

								ChShipTypeRoutingRule(['CL'], '=', 0, 'R'),

								ChMultipleRulesRule([
									ChShipHistoricalRoutingRule('Italians', 'event.historical.italians', '>=', 2, 'W'),
									ChSpeedRule('>=', 10, 'W'),
								], 'OR', 'R'),
							], 'AND', 'R'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'T'),
								ChShipTypeRoutingRule(['CL'], '>=', 1, 'T'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'T'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'T'),

							], 'AND', 'T'),

							ChDefaultRouteRule('P')
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
					},
					'R': {
						type: 1,
						x: 90,
						y: 243,
						subonly: true,
						endRules: [
							ChIsRouteNotUnlockedRule(3, true),
						],
						hidden: 1,
						distance: 8,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'S': {
						type: 1,
						x: 334,
						y: 139,
						hidden: 2,
						distance: 5,
						end: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italians', 1.25),
						],
					},
					'T': {
						type: 1,
						x: 185,
						y: 144,
						hidden: 2,
						distance: 7,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italians', 1.25),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'U': {
						type: 1,
						x: 134,
						y: 57,
						hidden: 2,
						distance: 8,
						boss: true,
						end: true,
						friendFleet: ['desdiv31B', 'europefleet1', 'europefleet2', 'europefleet3', 'europefleet4'],
						bonuses: [
							new ChEquipTypesBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832] }, [TYPE3SHELL], '>=', 1, 1.428),
							new ChEquipIdsBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832], amountPerLevel: 0.053 }, [167], '>=', 1, 1.4),
							new ChEquipIdsBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832] }, [166], '>=', 1, 1.715),
							new ChEquipTypesBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832], amountPerLevel: 0.089 }, [B_LC1], '>=', 1, 1.22),
							new ChEquipIdsBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832] }, [230], '>=', 1, 1.75),
							new ChEquipTypesBonuses({ type: "add", includeFF: true, on: [1827,1828,1829,1830,1831,1832] }, [WG42], '>=', 1, 1.46),

							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.italians', 1.25),							
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
					'V': {
						type: 1,
						x: 96,
						y: 119,
						hidden: 3,
						distance: 8,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italians', 1.25),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'W': {
						type: 1,
						x: 90,
						y: 196,
						hidden: 3,
						distance: 8,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Combined Fleet, Sortie!<br> The New Operation Rheinübung!',
				get fleetTypes() {
					if(CHDATA.event.maps[5].part > 1) return [1,2];
					return [1];
				},
				bgmMap: 122,
				bgmDN: 123,
				bgmNN: 123,
				bgmDB: 124,
				bgmNB: 124,
				bossnode: [10,23,'Z2'],
				checkLockHard: [1,2,4],
				giveLock: [8,9],
				lbas: 3,
				reward: { ships: [571] },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .25, 2: .20, 1: 0.15, 4: 0.10 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3'],
						2: ['3','4','5','6'],
						1: ['6','7','8','9'],
						4: ['7','8','9'],
					},
				},
				parts: {
					1: {
						currentBoss: 'J',
						maphp: {
							3: { 1: 2120 },
							2: { 1: 1800 },
							1: { 1: 1600 },
							4: { 1: 1600 },
						},
						finalhp: {
							3: 530,
							2: 450,
							1: 400,
							4: 400,
						},
					},
					2: {
						currentBoss: 'W',
						maphp: {
							3: { 1: 3500 },
							2: { 1: 3080 },
							1: { 1: 3080 },
							4: { 1: 3080 },
						},
						finalhp: {
							3: 770,
							2: 770,
							1: 770,
							4: 770,
						},
					},
					3: {
						currentBoss: 'Z2',
						maphp: {
							3: { 1: 4500 },
							2: { 1: 4500 },
							1: { 1: 4500 },
							4: { 1: 4500 },
						},
						finalhp: {
							3: 900,
							2: 900,
							1: 900,
							4: 900,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 5, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '5_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 3, 5, [
							{ node: 'I', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'S', 2:'S', 3:'S' } },
							{ node: 'H', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'S' } },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '5_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 3, 5, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:2, 2:2, 3:2 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'AB', type: 'NoHPLoss', timesRequiredPerDiff: { 3:2 } },
							{ node: 'T', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'S', 2:'S', 3:'S' } },
							{ node: 'K', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:2 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
						], {
							partToUnlock: 3
						})
					},
				},
				debuffRules:  new ChGimmickList('debuff', 3, 5, [
					{ node: 'Z2', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' }, fleetType: [1] },
					{ node: 'Z2', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' }, fleetType: [2] },
				], {
					lastDanceOnly: true,
				}),
				lockSpecial: true,
				startCheck: function(ships) {
					let lock = 9;
					if (CHDATA.fleets.combined === 2) lock = 8;

					for (let i=0; i<CHDATA.fleets[2].length; i++) {
						chGiveLock(2,i+1,lock);
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,lock);
					}
				},
				startCheckRule: [
					ChFleetTypeRule(2, 'Start2', 'Start1')
				],
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[5].diff != 3 || CHDATA.config.disablelock) return;
					
					let shipsId = CHDATA.fleets[1].concat(CHDATA.fleets[2]);
					let lock = CHDATA.fleets.combined == 1 ? 9 : 8;

					for (shipId of shipsId) {
						let ship = CHDATA.ships[shipId];
						if (!ship) continue;
						if (lock && ship.lock && ship.lock !== lock){
							if (lock == 9) errors.push('Only H-force tagged ship can be used in CTF');
							else errors.push('Only Rheinübung tagged ship can be used in STF');
							return;
						}
					}
				},
				nodes: {
					'Start1': {
						type: 3,
						x: 259,
						y: 337,
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'Start2': {
						type: 3,
						x: 726,
						y: 219,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'A': {
						type: 1,
						x: 119,
						y: 261,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Europeans', 'event.historical.europeans', '>=', { 4:1, 1:2, 2:4, 3:6 }, 'D'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'D'),
								ChShipTypeRoutingRule(['CLT'], '<=', 1, 'D'),
							], 'AND', 'D', 'B'),
						]
					},
					'B': {
						type: 1,
						x: 122,
						y: 202,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 177,
						y: 293,
						subonly: true,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'D': {
						type: 3,
						x: 197,
						y: 186,
						distance: 5,
						rules: [
							ChSelectRouteRule(['E', 'F']),
						]
					},
					'E': {
						type: 1,
						x: 238,
						y: 263,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'J', 0: 'G' }),
						]
					},
					'F': {
						type: 3,
						x: 268,
						y: 167,
						distance: 4,
						rules: [
							ChSelectRouteRule(['H', 'I']),
						]
					},
					'G': {
						type: 3,
						x: 274,
						y: 210,
						distance: 4,
						end: true,
					},
					'H': {
						type: 1,
						x: 295,
						y: 110,
						distance: 4,
						endRules: [
							ChIsRouteNotUnlockedRule(2, true),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'I': {
						type: 1,
						x: 325,
						y: 212,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: '', 0: 'G' }),

							ChShowLOSPlane(ChIsRouteNotUnlockedRule(1, 'J')),

							ChShowLOSPlane(ChFleetTypeRule(2, 'L')),
							ChShowLOSPlane(ChShipTypeRoutingRule(['AO'], '>', 0, 'L')),
							
							ChShowLOSPlane(ChShipHistoricalRoutingRule('Marine nationale and Kriegsmarine', 'event.historical.marineNationaleAndKriegsmarine', '>=', 2, 'L')),

							ChDefaultRouteRule('J')
						]
					},
					'J': {
						type: 1,
						x: 328,
						y: 310,
						distance: 4,
						boss: true,
						end: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
					'K': {
						type: 1,
						x: 344,
						y: 151,
						hidden: 1,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'I')),
							
							ChShipTypeRoutingRule(['LHA'], '>', 0, 'I'),
							
							ChShipTypeRoutingRule(['aBB'], '<=', 2, 'H'),
							ChShipTypeRoutingRule(['CL'], '>=', 2, 'H'),

							ChDefaultRouteRule('I')
						]
					},
					'L': {
						type: 1,
						x: 353,
						y: 262,
						hidden: 1,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [							
							ChShowLOSPlane(ChShipHistoricalRoutingRule('Marine nationale and Kriegsmarine', 'event.historical.marineNationaleAndKriegsmarine', '>=', { 4:1, 1:2, 2:3, 3:4 }, 'O')),

							ChRandomRule({ 'N': .5, 'O': .5 }),
						]
					},
					'M': {
						type: 1,
						x: 368,
						y: 87,
						hidden: 1,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'K')),

							ChShipTypeRoutingRule(['aBB'], '>', 2, 'K'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'K'),

							ChShipTypeRoutingRule(['CVL'], '<=', 1, 'X'),
							ChShipHistoricalRoutingRule('Europeans', 'event.historical.europeans', '>=', { 4:1, 1:2, 2:4, 3:6 }, 'X'),

							ChDefaultRouteRule('I')
						]
					},
					'N': {
						type: 3,
						x: 391,
						y: 343,
						hidden: 1,
						end: true,
						distance: 3,
					},
					'O': {
						type: 3,
						x: 402,
						y: 289,
						hidden: 1,
						distance: 2,
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'P': {
						type: 1,
						x: 419,
						y: 145,
						hidden: 1,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2', 'Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '<=', { 4:4, 1:4, 2:3, 3:2 }, 'L', 'K'),
						]
					},
					'Q': {
						type: 3,
						x: 511,
						y: 59,
						hidden: 1,
						distance: 3,
						rules: [
							ChShipTypeRoutingRule(['AO', 'AV'], '>', 0, 'P'),

							ChMultipleRulesRule([
								ChIsRouteNotUnlockedRule(3, 'P'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', { 4:5, 1:5, 2:4, 3:3 }, 'P'),
							], 'AND', 'P'),

							ChIsRouteNotUnlockedRule(3, 'M'),
							
							ChShipTypeRoutingRule(['CLT'], '>', 2, 'P'),
							ChShipTypeRoutingRule(['DD'], '>', 3, 'M'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', { 4:6, 1:6, 2:5, 3:4 }, 'M'),
							ChDefaultRouteRule('P')
						]
					},
					'R': {
						type: 3,
						x: 571,
						y: 96,
						hidden: 1,
						distance: 2,
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'S': {
						type: 1,
						x: 587,
						y: 197,
						hidden: 1,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'T': {
						type: 1,
						x: 627,
						y: 150,
						hidden: 1,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChShipHistoricalRoutingRule('Europeans', 'event.historical.europeans', '>=', { 4:0, 1:2, 2:4, 3:6 }, 'R'),
							ChShipTypeRoutingRule(['aBB', 'aCV', 'CLT'], '<=', 3, 'R', 'S'),
						]
					},
					'U': {
						type: 3,
						x: 672,
						y: 212,
						hidden: 1,
						distance: 2,
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'V': {
						type: 3,
						x: 689,
						y: 143,
						hidden: 1,
						distance: 3,
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'W': {
						type: 1,
						x: 472,
						y: 322,
						hidden: 1,
						distance: 2,
						boss: true,
						end: true,
						friendFleet: ['desdiv31C','desdiv31F','europefleet6','europefleet7','europefleet8','europefleet9','europefleet14','europefleet15'],
						bonuses: [
							new ChShipIdsBonuses({ type: 'add', includeFF: true, }, 'event.historical.europeans', 1.2),
							new ChShipIdsBonuses({ type: 'add', includeFF: true, }, 'event.historical.kriegsmarine', 1.1),
							new ChShipIdsBonuses({ type: 'add', includeFF: true, }, 'event.historical.marinenationale', 1.1),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
					'X': {
						type: 3,
						x: 242,
						y: 75,
						hidden: 2,
						distance: 5,
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'Y')),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'Y'),
							ChShipTypeRoutingRule(['DE', 'DD', 'CL'], '>=', 5, 'Z3'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CV', 'CVB'], '=', 0, 'Z3'),
								ChSpeedRule('>=', 10, 'Z3'),
							], 'AND', 'Z3'),
							
							ChMultipleRulesRule([
								ChFleetTypeRule(2, 'Z3'),
								ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '<=', 2, 'Z3'),
							], 'AND', 'Z3'),
							
							ChSpeedRule('>=', 15, 'Z3'),

							ChDefaultRouteRule('Y')
						]
					},
					'Y': {
						type: 1,
						x: 202,
						y: 146,
						hidden: 2,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'Z2', 0: 'Z' }),
						]
					},
					'Z': {
						type: 3,
						x: 157,
						y: 119,
						hidden: 2,
						end: true,
						distance: 6,
					},
					'Z2': {
						type: 1,
						x: 96,
						y: 169,
						hidden: 2,
						distance: 7,
						boss: true,
						end: true,
						friendFleet: ['desdiv31D','desdiv31E','desdiv31G','europefleet5','europefleet10','europefleet11','europefleet12','europefleet13'],
						bonuses: [
							// --- Base bonus :
							new ChShipIdsBonuses({ type: 'set', includeFF: true, }, 'event.historical.europeans', 1.2),
							new ChDebuffBonuses({ type: 'set', includeFF: true }, 1.5),

							new ChEquipTypesBonuses({ type: 'add', includeFF: true, }, [SEAPLANEFIGHTER, SEAPLANEBOMBER], '>=', 1, 1.3),
							new ChEquipTypesBonuses({ type: 'add', includeFF: true, }, [TYPE3SHELL], '>=', 1, 1.2),
							new ChEquipTypesBonuses({ type: 'add', includeFF: true, }, [DIVEBOMBER], '>=', 1, 1.2),

							new ChEquipIdsBonuses({ type: 'add', includeFF: true, onlySpecificShips: [515] }, [242,243,244], '=', 1, 1.4),
							new ChEquipIdsBonuses({ type: 'add', includeFF: true, onlySpecificShips: [515] }, [242,243,244], '>=', 2, 1.75),
						],
						compName: 'Z2',
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
					},
					'Z3': {
						type: 1,
						x: 160,
						y: 68,
						hidden: 3,
						distance: 6,
						raid: true,
						compName: 'Z3',
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						rules: [
							ChLOSRule({ 3: 'Z2', 0: 'Z' }),
						]
					},
				}
			}
		}
	},
	43: {
		name: 'Winter 2019',
		date: '2018-12-26',
		diffMode: 2,
		allowDiffs: [3,2,1,4],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		bannerImg: 'assets/maps/43/banner1.jpg',
		bannerImgAlt: 'assets/maps/43/banner2.jpg',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1546: { HP: 210, AR: 118, EQUIPS: [1509, 1505, 1520, 1531] },
			1548: { HP: 380, AR: 188, EQUIPS: [1509, 1509, 1520, 1531] },
		},
		historical: {
			blackett: [44,583],
		},
		friendFleet: {
			'E1-1': { voice: [208,241], ships: [
				{ mid: 208, LVL: 80, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,63,101] },
				{ mid: 195, LVL: 83, FP: 74, TP: 88, AA: 52, AR: 54, equips: [285,285,285] },
			] },
			'E1-2': { voice: [686,242], ships: [
				{ mid: 686, LVL: 65, FP: 50, TP: 72, AA: 56, AR: 47, equips: [267,267,101] },
				{ mid: 359, LVL: 67, FP: 50, TP: 80, AA: 50, AR: 49, equips: [286,15,286] },
			] },
			'E1-3': { voice: [687,243], ships: [
				{ mid: 687, LVL: 76, FP: 51, TP: 77, AA: 50, AR: 49, equips: [266,266,74] },
				{ mid: 327, LVL: 79, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,101] },
				{ mid: 328, LVL: 78, FP: 49, TP: 79, AA: 49, AR: 48, equips: [266,15,88] },
			] },
			'E1-4': { voice: [687,243], ships: [
				{ mid: 687, LVL: 79, FP: 51, TP: 77, AA: 50, AR: 49, equips: [266,266,101] },
				{ mid: 498, LVL: 86, FP: 68, TP: 86, AA: 70, AR: 51, equips: [266,286,88] },
			] },
			'E1-5': { voice: [498,243], ships: [
				{ mid: 498, LVL: 86, FP: 68, TP: 86, AA: 70, AR: 51, equips: [266,286,88], damage: [.45,.58] },
				{ mid: 687, LVL: 79, FP: 51, TP: 77, AA: 50, AR: 49, equips: [286,286,286], damage: [.42,.54] },
			] },
			'E2-1': { voice: [688,243], ships: [
				{ mid: 688, LVL: 81, FP: 51, TP: 80, AA: 58, AR: 49, equips: [267,286,88] },
				{ mid: 373, LVL: 82, FP: 52, TP: 79, AA: 58, AR: 49, equips: [286,286,286] },
			] },
			'E2-2': { voice: [373,243], ships: [
				{ mid: 373, LVL: 82, FP: 52, TP: 79, AA: 58, AR: 49, equips: [267,286,88] },
				{ mid: 680, LVL: 80, FP: 52, TP: 78, AA: 59, AR: 49, equips: [267,286,88] },
				{ mid: 688, LVL: 81, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286] },
			] },
			'E2-3': { voice: [373,243], ships: [
				{ mid: 373, LVL: 82, FP: 52, TP: 79, AA: 58, AR: 49, equips: [267,15,88] },
				{ mid: 688, LVL: 81, FP: 51, TP: 80, AA: 58, AR: 49, equips: [267,15,88] },
				{ mid: 680, LVL: 80, FP: 52, TP: 78, AA: 59, AR: 49, equips: [286,286,286] },
			] },
			'E2-4': { voice: [150,141], ships: [
				{ mid: 150, LVL: 88, FP: 98, TP: 0, AA: 82, AR: 95, equips: [7,7,7,74], damage: [.45,.55] },
				{ mid: 152, LVL: 87, FP: 104, TP: 0, AA: 82, AR: 92, equips: [7,7,7,101], damage: [.65,.75] },
				{ mid: 323, LVL: 72, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,15], damage: [.57,.67] },
				{ mid: 144, LVL: 85, FP: 73, TP: 93, AA: 59, AR: 52, equips: [15,15,15], damage: [.46,.58] },
			] },
			'E3-1': { voice: [536,143], ships: [
				{ mid: 536, LVL: 86, FP: 37, TP: 0, AA: 58, AR: 56, equips: [154,255,259] },
				{ mid: 383, LVL: 88, FP: 37, TP: 0, AA: 54, AR: 33, equips: [229,229,88] },
				{ mid: 386, LVL: 81, FP: 36, TP: 0, AA: 53, AR: 34, equips: [229,229,88] },
			] },
			'E3-2': { voice: [536,143], ships: [
				{ mid: 536, LVL: 86, FP: 37, TP: 0, AA: 58, AR: 56, equips: [154,255,259] },
				{ mid: 383, LVL: 88, FP: 37, TP: 0, AA: 54, AR: 33, equips: [229,229,88] },
				{ mid: 386, LVL: 81, FP: 36, TP: 0, AA: 53, AR: 34, equips: [229,229,88] },
				{ mid: 373, LVL: 82, FP: 52, TP: 79, AA: 58, AR: 49, equips: [267,286,88] },
			] },
			'E3-3': { voice: [349,143], ships: [
				{ mid: 349, LVL: 86, FP: 50, TP: 81, AA: 51, AR: 49, equips: [267,286,88], damage: [.35,.58] },
				{ mid: 301, LVL: 89, FP: 44, TP: 79, AA: 59, AR: 49, equips: [266,286,88], damage: [.25,.4] },
				{ mid: 542, LVL: 88, FP: 67, TP: 87, AA: 66, AR: 53, equips: [267,286,240] },
				{ mid: 563, LVL: 87, FP: 64, TP: 90, AA: 65, AR: 53, equips: [286,286,286] },
			] },
			'E3-4': { voice: [349,143], ships: [
				{ mid: 349, LVL: 86, FP: 50, TP: 81, AA: 51, AR: 49, equips: [267,286,88] },
				{ mid: 301, LVL: 89, FP: 44, TP: 79, AA: 59, AR: 49, equips: [266,266,74] },
				{ mid: 542, LVL: 88, FP: 67, TP: 87, AA: 66, AR: 53, equips: [267,267,101] },
				{ mid: 563, LVL: 87, FP: 64, TP: 90, AA: 65, AR: 53, equips: [267,286,240] },
			] },
			'E3-5': { voice: [586,243], ships: [
				{ mid: 557, LVL: 90, FP: 61, TP: 82, AA: 90, AR: 53, equips: [122,286,88] },
				{ mid: 354, LVL: 88, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,286,88] },
				{ mid: 355, LVL: 87, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,286,88] },
				{ mid: 586, LVL: 84, FP: 60, TP: 79, AA: 65, AR: 47, equips: [309,309,309,101] },
			] },
			'E3-6': { voice: [690,243], ships: [
				{ mid: 330, LVL: 72, FP: 57, TP: 54, AA: 116, AR: 53, equips: [122,122,74] },
				{ mid: 329, LVL: 84, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,286,88] },
				{ mid: 294, LVL: 81, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,286,88] },
				{ mid: 690, LVL: 48, FP: 53, TP: 45, AA: 62, AR: 46, equips: [310,310,101] },
			] },
			'E3-7': { voice: [136,141], ships: [
				{ mid: 136, LVL: 84, FP: 139, TP: 0, AA: 104, AR: 118, equips: [276,276,276,74] },
				{ mid: 321, LVL: 82, FP: 70, TP: 49, AA: 74, AR: 68, equips: [235,235,275,101] },
				{ mid: 369, LVL: 79, FP: 51, TP: 82, AA: 49, AR: 48, equips: [266,286,88] },
				{ mid: 490, LVL: 86, FP: 69, TP: 88, AA: 70, AR: 52, equips: [286,286,286] },
			] },
		},
		friendFleetWaves: {
			1: { date: '2019-01-01' },
			2: { date: '2019-01-11' },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Central Solomon Seas Tokyo Express',
				fleetTypes: [0],
				bgmMap: 126,
				bgmDN: 127,
				bgmNN: 127,
				bgmDB: 128,
				bgmNB: 128,
				bossnode: [7,12],
				checkLock: [4,1,6],
				giveLock: 5,
				parts: {
					1: {
						currentBoss: 'G',
						maphp: {
							3: { 1: 200 },
							2: { 1: 180 },
							1: { 1: 170 },
							4: { 1: 170 },
						},
						transport: 'F',
					},
					2: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 1600 },
							2: { 1: 1600 },
							1: { 1: 1600 },
							4: { 1: 1600 },
						},
						finalhp: {
							3: 490,
							2: 490,
							1: 490,
							4: 490,
						},
						transport: null,
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 1, [], {
							partToUnlock: 1
						})
						
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
				},
				mapInfo: `No CV(L/B) allowed<br>No (F)BB(V) allowed`,
				reward: {
					3: { items: [311], firstOnly: true },
					2: { items: [311], firstOnly: true },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 221,
						y: 145,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'A'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'C'),
								ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', 1, 'C'),
								ChSpeedRule('>=', 15, 'C'),
							], 'AND', 'C'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'C'),
								ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', 1, 'C'),
								ChShipCountRoutingRule('<=', { 4:5, 1:5, 2:4, 3:4 }, 'C'),
								ChDifficultyRule([1,4], 'C'),
							], 'AND', 'C'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'C'),
								ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', 1, 'C'),
								ChShipCountRoutingRule('<=', { 4:5, 1:5, 2:4, 3:4 }, 'C'),
								ChShipIdsRoutingRule('event.historical.blackett', '>=', 1, 'C')
							], 'AND', 'C'),

							ChMapPartRule([1], 
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', 2, 'B'),
									ChShipCountRoutingRule('<=', { 4:6, 1:6, 2:5, 3:5 }, 'B'),
								], 'AND', 'B'),
							),

							ChMapPartRule([2], 
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', { 4:6, 1:2, 2:1, 3:0 }, 'B'),
								], 'AND', 'B'),
							),

							ChDefaultRouteRule('A')
						]
					},
					'A': {
						type: 4,
						x: 283,
						y: 214,
						resource: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 327,
						y: 130,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[1].part == 1) {
								this.showNoCompass = true;
								return 'C';
							}
							this.showNoCompass = false;
							if (ships.total <= 5) return 'C';
							return 'H';
						},
						rules: [
							ChMapPartRule([1], ChFixedRoutingRule('C')),

							ChMapPartRule([2], ChShipCountRoutingRule('<=', 5, 'C')),
							ChDefaultRouteRule('H'),
						]
					},
					'C': {
						type: 1,
						x: 446,
						y: 208,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChMapPartRuleOld('=', 1, 'E'),
									ChShipCountRoutingRule('<=', 5, 'E')
								], 'OR', 'E'),

								ChShipTypeRoutingRule(['CL'], '<=', 2, 'E'),
								ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<=', 1, 'E'),
							], 'AND', 'E'),
							
							ChMultipleRulesRule([
								ChMapPartRuleOld('=', 1, 'D'),
								ChShipCountRoutingRule('<=', 5, 'D')
							], 'OR', 'D'),

							// --- Part 2 only
							ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '<', { 4:2, 1:1, 2:0, 3:0 }, 'E'),
							ChShipTypeRoutingRule(['CL'], '>', 2, 'D'),
							ChShipTypeRoutingRule(['CLT', 'CA', 'CAV'], '>', 2, 'D'),

							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
								flagship: true,
							}, '>=', { 4:0, 1:2, 2:5, 3:5 }, { 4:0, 1:2, 2:5, 3:5 }, 'L', 'I'),
						]
					},
					'D': {
						type: 1,
						x: 434,
						y: 247,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 1,
						x: 462,
						y: 268,
						night2: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 2,
						x: 492,
						y: 287,
						resource: 0,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 1,
						x: 541,
						y: 266,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 5'],
							2: ['Medium 5'],
							1: ['Easy 4'],
							4: ['Casual 3'],
						},
						end: true
					},
					'H': {
						type: 1,
						x: 435,
						y: 162,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'I': {
						type: 1,
						x: 501,
						y: 187,
						hidden: 1,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
								flagship: true,
							}, '>=', { 4:0, 1:1, 2:4, 3:4 }, { 4:0, 1:1, 2:4, 3:4 }, 'L', 'J'),
						]
					},
					'J': {
						type: 1,
						x: 550,
						y: 169,
						hidden: 1,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
								flagship: true,
							}, '>=', { 4:0, 1:0, 2:3, 3:3 }, { 4:0, 1:0, 2:3, 3:3 }, 'L', 'K'),
						]
					},
					'K': {
						type: 3,
						x: 610,
						y: 147,
						hidden: 1,
						end: true
					},
					'L': {
						type: 1,
						x: 550,
						y: 221,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: { friendFleet: null },
							2: { friendFleet: ['E1-1','E1-2','E1-3','E1-4','E1-5'] },
						},
						bonuses: [
							new ChEquipTypesComboBonuses({ type: 'set', includeFF: true, }, [
								{ bTypes: [B_MAINGUN], numberRequired: 2 },
								{ bTypes: [B_RADAR], numberRequired: 1 },
							], 1.15),
							new ChShipIdsBonuses({ type: 'set', includeFF: true, }, [23], 1.25),
							new ChShipIdsBonuses({ type: 'set', includeFF: true, }, [55], 1.44),
							new ChShipClassBonuses({ type: 'set', includeFF: true, }, [18], 1.3),
							new ChShipClassBonuses({ type: 'set', includeFF: true, }, [23], 1.3),
							new ChShipIdsBonuses({ type: 'set', includeFF: true, }, 'event.historical.blackett', 1.5),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 3'],
							4: ['Casual 2'],
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Operation 603',
				fleetTypes: [0,1,2,3],
				bgmMap: 126,
				bgmDN: 127,
				bgmNN: 127,
				bgmDB: 128,
				bgmNB: 128,
				bossnode: [11,16],
				checkLock: [5,6],
				giveLock: [4,1],
				lockSpecial: true,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'K',
						maphp: {
							3: { 1: 1400 },
							2: { 1: 1400 },
							1: { 1: 1400 },
							4: { 1: 1400 },
						},
						finalhp: {
							3: 390,
							2: 380,
							1: 370,
							4: 370,
						},
					},
					2: {
						currentBoss: 'P',
						maphp: {
							3: { 1: 840 },
							2: { 1: 840 },
							1: { 1: 840 },
							4: { 1: 840 },
						},
						finalhp: {
							3: 210,
							2: 210,
							1: 210,
							4: 210,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 2, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '2_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 2, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'A', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' }, needLBAS: true },
							{ node: 'L', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' }, needLBAS: true },
							{ node: 'N', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' }, needLBAS: true },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '2_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							// --- TODO : combine First and Second AB requirements
							{ node: 'AB', type: 'NoHPLoss', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, routeUnlockRequired: 2 },
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS+' }, routeUnlockRequired: 2 },
							{ node: 'R', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 2, needLBAS: true },
							{ node: 'V', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 2, needLBAS: true },
							{ node: 'W', type: 'battle', timesRequiredPerDiff: { 4:2, 1:2, 2:2, 3:2 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' }, routeUnlockRequired: 2 },
						], {
							partToUnlock: 3
						})
					},
					4: {
						images: [{ name: '2_4.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 3 },
							{ node: 'A', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 3, needLBAS: true },
							{ node: 'K', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' }, routeUnlockRequired: 3, needLBAS: true },
							{ node: 'L', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 3, needLBAS: true },
							{ node: 'N', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' }, routeUnlockRequired: 3, needLBAS: true },
							{ node: 'R', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, routeUnlockRequired: 3, needLBAS: true },
						], {
							partToUnlock: 4
						})
						
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .2, 2: .2, 1: .2, 4: .2 },
					compName: 'A',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
						2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
						1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						4: ['Casual 1','Casual 2','Casual 3'],
					},
				},
				startCheck: function(ships) {
					if (CHDATA.fleets.combined) {
						let lock = 1;
						for (let i=0; i<CHDATA.fleets[1].length; i++) {
							chGiveLock(1,i+1,lock);
						}
						for (let i=0; i<CHDATA.fleets[2].length; i++) {
							chGiveLock(2,i+1,lock);
						}
						return;
					} else {
						let lock = 4;
						for (let i=0; i<CHDATA.fleets[1].length; i++) {
							chGiveLock(1,i+1,lock);
						}
						return;
					}
				},
				startCheckRule: [
					ChFleetTypeRule([0], "Start1", 'Start2'),
				],
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					let shipsId = CHDATA.fleets[1], lock = 4;
					if (CHDATA.fleets.combined) {
						if (CHDATA.event.maps[2].routes.indexOf(2) == -1) {
							errors.push('Combined fleet type is not allowed.');
							return;
						}
						shipsId = shipsId.concat(CHDATA.fleets[2]);
						lock = 1;
					}
					if (CHDATA.event.maps[2].diff == 1 || CHDATA.event.maps[2].diff == 4 || CHDATA.config.disablelock) return;
					for (shipId of shipsId) {
						let ship = CHDATA.ships[shipId];
						if (!ship) continue;
						if (lock && ship.lock && ship.lock !== lock){
							errors.push('Locked ship not allowed.');
							return;
						}
					}
				},
				mapInfo: `No CV(B) allowed`,
				reward: {
					3: { items: [312], firstOnly: true },
					2: { items: [312], firstOnly: true },
					1: { items: [311], firstOnly: true },
					4: { items: [311], firstOnly: true },
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 118,
						y: 146,
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'D'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '=', 0, 'D'),
								ChShipTypeRoutingRule(['DD'], '<=', 3, 'D'),
							], 'AND', 'D', 'A'),
						]
					},
					'Start2': {
						type: 0,
						x: 349,
						y: 76,
						rules: [							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['BBV', 'aCV'], '=', 0, 'Q'),
								ChShipTypeRoutingRule(['BB', 'FBB'], '<=', 2, 'Q'),
							], 'AND', 'Q', 'R'),
						]
					},
					'A': {
						type: 1,
						x: 184,
						y: 230,
						distance: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '=', 0, 'F', 'B'),
						]
					},
					'B': {
						type: 1,
						x: 219,
						y: 271,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipCountRoutingRule('<=', 5, 'E'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'E'),
							], 'AND', 'E', 'F'),
						]
					},
					'C': {
						type: 1,
						x: 243,
						y: 192,
						distance: 1,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 259,
						y: 144,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'C'),
							ChShipTypeRoutingRule(['DD'], '<', 2, 'C'),

							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
								flagship: true,
							}, '>=', { 4:1, 1:2, 2:3, 3:4 }, { 4:1, 1:2, 2:3, 3:4 }, 'F'),

							ChDefaultRouteRule('C')
						]
					},
					'E': {
						type: 4,
						x: 281,
						y: 256,
						distance: 2,
						resource: 1,
						rules: [
							ChShowCompass(ChFixedRoutingRule('G'))
						]
					},
					'F': {
						type: 1,
						x: 292,
						y: 202,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'G'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'G'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'G'),
							], 'AND', 'G', 'E'),
						]
					},
					'G': {
						type: 3,
						x: 372,
						y: 255,
						distance: 3,
						rules: [
							ChSelectRouteRule(['I','J']),
						]
					},
					'H': {
						type: 3,
						x: 400,
						y: 332,
						distance: 4,
						end: true
					},
					'I': {
						type: 1,
						x: 418,
						y: 221,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						endRules: [
							ChIsRouteNotUnlockedRule(1, true),
						],
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 1,
						x: 418,
						y: 285,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShowLOSPlane(ChDifficultyRule([4,1,2], 'K')),

							ChShowLOSPlane(ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', 4, 4, 'K')),

							ChDefaultRouteRule('H')
						]
					},
					'K': {
						type: 1,
						x: 483,
						y: 298,
						distance: 5,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, [56,133,135], 1.3),
							new ChShipClassBonuses({ type: 'set' }, [1,5,12], 1.3),
							new ChShipIdsBonuses({ type: 'set' }, [23], 1.4),
							new ChShipIdsBonuses({ type: 'set' }, [55], 1.9),
							new ChShipIdsBonuses({ type: 'set' }, [54], 1.5),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 3'],
						},
						end: true
					},
					'L': {
						type: 1,
						x: 504,
						y: 242,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 573,
						y: 223,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(4, 'N')),
							
							ChFleetTypeRule(0, 'N'),

							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', 6, 6, 'P'),

							ChDefaultRouteRule('N')
						]
					},
					'N': {
						type: 1,
						x: 599,
						y: 271,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFleetTypeRule(0, 'P'),
							ChShowLOSPlane(ChDifficultyRule([4,1], 'P')),

							ChShowLOSPlane(ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', 7, 7, 'P')),

							ChDefaultRouteRule('O')
						]
					},
					'O': {
						type: 3,
						x: 632,
						y: 328,
						distance: 8,
						hidden: 1,
						end: true
					},
					'P': {
						type: 1,
						x: 677,
						y: 271,
						distance: 8,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: { friendFleet: null },
							2: { friendFleet: ['E2-1','E2-2','E2-3','E2-4'] },
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set' }, [56,133,135], 1.3),
							new ChShipClassBonuses({ type: 'set' }, [1,5,12], 1.3),
							new ChShipIdsBonuses({ type: 'set' }, [59], 1.3),
							new ChShipIdsBonuses({ type: 'set' }, [85,86], 1.43),
							new ChShipIdsBonuses({ type: 'set' }, [23], 1.4),
							new ChShipIdsBonuses({ type: 'set' }, [55], 1.9),
							new ChShipIdsBonuses({ type: 'set' }, [54,45,134], 1.5),
							new ChShipIdsBonuses({ type: 'add' }, [13], 1.25),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 394,
						y: 170,
						distance: 3,
						hidden: 2,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'R': {
						type: 1,
						x: 440,
						y: 118,
						distance: 4,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'T'),
							ChIsRouteNotUnlockedRule(3, 'S'),

							// --- If route is unlocked
							ChMultipleRulesRule([

								ChDifficultyRule([2, 3], 'U'),

								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
									flagship: true,
								}, '>=', { 2:6, 3:8 }, { 2:6, 3:8 }, 'U'),
							], 'AND', 'U'),

							ChMultipleRulesRule([
								ChDifficultyRule([4, 1], 'U'),

								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '>=', { 4:2, 1:4 }, { 4:2, 1:4 }, 'U'),
							], 'AND', 'U'),

							ChDefaultRouteRule('S')
						]
					},
					'S': {
						type: 1,
						x: 482,
						y: 181,
						distance: 4,
						hidden: 2,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'T': {
						type: 1,
						x: 515,
						y: 102,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'U': {
						type: 1,
						x: 526,
						y: 157,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFleetTypeRule(1, 'V'),
							ChIsRouteUnlockedRule(3, 'M', 'L'),
						]
					},
					'V': {
						type: 1,
						x: 588,
						y: 150,
						distance: 6,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'W', 0: 'X' }),
						]
					},
					'W': {
						type: 1,
						x: 624,
						y: 94,
						distance: 7,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						end: true
					},
					'X': {
						type: 3,
						x: 647,
						y: 131,
						distance: 7,
						hidden: 2,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'South Seas 4th Garrison Force Transport Operation',
				fleetTypes: [0,1,2,3],
				bgmMap: 129,
				bgmDN: 130,
				bgmNN: 130,
				bgmDB: 131,
				bgmNB: 131,
				bossnode: [19,26],
				checkLock: [1,4,5],
				giveLock: 6,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'S',
						maphp: {
							3: { 1: 380 },
							2: { 1: 380 },
							1: { 1: 380 },
							4: { 1: 380 },
						},
						transport: 'P'
					},
					2: {
						currentBoss: 'Z',
						maphp: {
							3: { 1: 4000 },
							2: { 1: 4000 },
							1: { 1: 4000 },
							4: { 1: 4000 },
						},
						finalhp: {
							3: 888,
							2: 888,
							1: 888,
							4: 888,
						},
						transport: null
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:2, 3:2 }, ranksRequiredPerDiff: { 1:'AS+', 2:'AS+', 3:'AS+' } },
							{ node: 'F', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, needLBAS: true, },
							{ node: 'I', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, needLBAS: true, },
							{ node: 'K', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS+', 1:'AS+', 2:'AS+', 3:'AS+' }, needLBAS: true, },
							{ node: 'N', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS+', 3:'AS+' }, needLBAS: true, },
							{ node: 'S', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'T', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' }, needLBAS: true, },
							{ node: 'U', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' }, needLBAS: true, },
						], {
							partToUnlock: 2
						})
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					compName: 'D',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
						2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
						1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						4: ['Casual 1','Casual 2','Casual 3'],
					},
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.fleets.combined && CHDATA.event.maps[3].part == 1) {
						errors.push('Combined fleet type is not allowed.');
					}
				},
				reward:  { ships: [581] },
				nodes: {
					'Start': {
						type: 3,
						x: 170,
						y: 95,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'A': {
						type: 3,
						x: 237,
						y: 202,
						distance: 1,
						rules: [
							ChSelectRouteRule(['C','F']),
						]
					},
					'B': {
						type: 1,
						x: 300,
						y: 311,
						distance: 4,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'C': {
						type: 1,
						x: 302,
						y: 156,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 2','Hard 4'],
							2: ['Medium 2','Medium 5'],
							1: ['Easy 3','Easy 4'],
							4: ['Casual 2','Casual 3'],
						},
						rules: [
							// --- Single fleet
							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'D'),

								ChMultipleRulesRule([
									ChAllShipMusteBeOfTypeRule(["SS", 'SSV'], 'D'),
									ChAllShipMusteBeOfTypeRule(["DD"], 'D'),
								], 'OR', 'D'),

							], 'AND', 'D'),
							
							ChFleetTypeRule(0, 'F'),

							// --- Combined fleet
							ChMultipleRulesRule([
								ChDifficultyRule([4,1], 'G'),
								ChShipTypeRoutingRule(['AV'], '>', 0, 'G'),
							], 'AND', 'G'),

							ChDefaultRouteRule('D')
						]
					},
					'D': {
						type: 1,
						x: 306,
						y: 98,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 318,
						y: 258,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '<', { 4:0, 1:3, 2:4, 3:5 }, { 4:0, 1:3, 2:4, 3:5 }, 'B'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '>', 0, 'I'),
								ChShipTypeRoutingRule(['DD'], '>=', 2, 'I'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'I'),
							], 'AND', 'I'),

							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['DD'], '>=', 2, 'H'),
									ChDifficultyRule([4,1], 'H'),
								], 'OR', 'H'),

								ChShipTypeRoutingRule(['aBB','aCV'], '<=', 3, 'H'),
							], 'AND', 'H'),

							ChDefaultRouteRule('B')
						]
					},
					'F': {
						type: 1,
						x: 355,
						y: 205,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFleetTypeRule(0, 'E', 'C'),
						]
					},
					'G': {
						type: 3,
						x: 367,
						y: 112,
						distance: 3,
						rules: [
							ChSelectRouteRule(['J','K']),
						]
					},
					'H': {
						type: 4,
						x: 386,
						y: 320,
						distance: 5,
						resource: 1,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 392,
						y: 242,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'J': {
						type: 1,
						x: 418,
						y: 75,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						endRules: [
							ChIsRouteNotUnlockedRule(1, true),
						],
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'K': {
						type: 1,
						x: 428,
						y: 165,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(0, 'N'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'N'),
							], 'AND', 'N', 'O'),
						]
					},
					'L': {
						type: 1,
						x: 452,
						y: 287,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'M': {
						type: 3,
						x: 470,
						y: 335,
						distance: 7,
						end: true
					},
					'N': {
						type: 1,
						x: 482,
						y: 215,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'O': {
						type: 1,
						x: 492,
						y: 176,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(1, 'T'),
								ChFleetTypeRule([1,2], 'T'),
							], 'AND', 'T', 'N'),
						]
					},
					'P': {
						type: 2,
						x: 490,
						y: 272,
						distance: 6,
						resource: 0,
						rules: [
							ChLOSRule({ 3: 'S', 0: 'M' }),
						]
					},
					'Q': {
						type: 1,
						x: 510,
						y: 242,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
								flagship: true,
							}, '>=', { 4:0, 1:1, 2:3, 3:3 }, { 4:0, 1:1, 2:3, 3:3 }, 'P', 'R'),
						]
					},
					'R': {
						type: 1,
						x: 545,
						y: 274,
						distance: 7,
						ambush: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'S': {
						type: 1,
						x: 530,
						y: 321,
						distance: 7,
						boss: true,
						bonuses: [
							new ChShipTypeBonuses({ type: "set" }, ["AV"], 1.15),
							 
							new ChShipClassBonuses({ type: "set" }, [10], 1.3),
							new ChShipClassBonuses({ type: "set" }, [23], 1.3),
							new ChShipClassBonuses({ type: "set" }, [28], 1.3),
							new ChShipClassBonuses({ type: "set" }, [30], 1.3),

							new ChShipIdsBonuses({ type: "set" }, [167,454,455,190,581], 1.75),
							new ChShipIdsBonuses({ type: "set" }, [459], 1.43),
							new ChShipIdsBonuses({ type: "set" }, [133,135], 1.3),
							new ChShipIdsBonuses({ type: "set" }, [54, 62, 65], 1.25),
						],
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						end: true
					},
					'T': {
						type: 1,
						x: 478,
						y: 123,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(2, 'ZZ'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
									flagship: true,
								}, '>=', { 4:1, 1:1, 2:6, 3:6 }, { 4:1, 1:1, 2:6, 3:6 }, 'ZZ'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'ZZ'),
									ChRandomRule({ 'ZZ': .65, '': .35 }),
								], 'OR', 'ZZ'),
							], 'AND', 'ZZ'),

							ChFleetTypeRule(1, 'U'),

							ChCreateCustomRuleFromName("43_3_1")
						]
					},
					'U': {
						type: 1,
						x: 558,
						y: 78,
						distance: 6,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'V': {
						type: 1,
						x: 553,
						y: 184,
						distance: 7,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'Z', 0: 'X' }),
						]
					},
					'W': {
						type: 1,
						x: 600,
						y: 126,
						distance: 7,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 3: 'Z', 0: 'Y' }),
						]
					},
					'X': {
						type: 3,
						x: 614,
						y: 233,
						distance: 8,
						hidden: 1,
						end: true
					},
					'Y': {
						type: 3,
						x: 641,
						y: 96,
						distance: 8,
						hidden: 1,
						end: true
					},
					'Z': {
						type: 1,
						x: 656,
						y: 186,
						distance: 8,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: { friendFleet: ['E3-1','E3-3','E3-4'] },
							2: { friendFleet: ['E3-1','E3-2','E3-3','E3-4','E3-5','E3-6','E3-7'] },
						},
						bonuses: [
							// --- Base bonus
							new ChShipTypeBonuses({ type: "set" }, ["AV"], 1.15),
							 
							new ChShipClassBonuses({ type: "set" }, [10], 1.3),
							new ChShipClassBonuses({ type: "set" }, [23], 1.3),
							new ChShipClassBonuses({ type: "set" }, [28], 1.3),
							new ChShipClassBonuses({ type: "set" }, [30], 1.3),

							new ChShipIdsBonuses({ type: "set" }, [167,454,455,190,581], 1.75),
							new ChShipIdsBonuses({ type: "set" }, [459], 1.43),
							new ChShipIdsBonuses({ type: "set" }, [133,135], 1.3),
							new ChShipIdsBonuses({ type: "set" }, [54, 62, 65], 1.25),

							// --- Unlock bonuses
							new ChShipTypeBonuses({ type: "add", requireUnlock: 2 }, ["AV"], 1.3),
							new ChShipTypeBonuses({ type: "add", requireUnlock: 2 }, ["DD"], 1.15),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'ZZ': {
						type: 1,
						x: 540,
						y: 144,
						distance: 6,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 2','Hard 4'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 3','Easy 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('Z')
						]
					},
				}
			}
		}
	},
	44: {
		name: 'Spring 2019',
		date: '2019-05-21',
		diffMode: 2,
		allowDiffs: [3,2,1,4],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		allowStrongFF: true,
		bannerImg: 'assets/maps/44/banner1.png',
		bannerImgAlt: 'assets/maps/44/banner2.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1660: { HP: 350 },
			1661: { HP: 350 },
			1662: { HP: 370 },
			1663: { HP: 380 },
			1664: { AR: 208 },
			1687: { HP: 600 },
			1688: { HP: 800 },
			1689: { HP: 900 },
			1711: { AR: 133 },
			1712: { AR: 163 },
			1713: { AR: 183 },
			1863: { HP: 490 },
			1864: { HP: 490 },
		},
		friendFleet: {
			'E2-1': { ships: [
				{ mid: 419, LVL: 76, FP: 58, TP: 85, AA: 81, AR: 55, equips: [63,63,101] },
				{ mid: 407, LVL: 74, FP: 55, TP: 78, AA: 73, AR: 56, equips: [63,125,88] },
				{ mid: 235, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [125,125,125] }
			] },
			'E2-2': { ships: [
				{ mid: 419, LVL: 76, FP: 59, TP: 80, AA: 81, AR: 55, equips: [63,63,101] },
				{ mid: 228, LVL: 78, FP: 59, TP: 89, AA: 59, AR: 59, equips: [266,15,88] },
				{ mid: 407, LVL: 74, FP: 54, TP: 80, AA: 75, AR: 56, equips: [63,125,88], damage: [.8,.9] },
				{ mid: 235, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 45, equips: [125,125,125], damage: [.75,.85] }
			] },
			'E2-3': { ships: [
				{ mid: 119, LVL: 84, FP: 63, TP: 139, AA: 49, AR: 63, equips: [285,285,74] },
				{ mid: 558, LVL: 73, FP: 58, TP: 83, AA: 93, AR: 54, equips: [266,266,101], damage: [.8,.9] },
				{ mid: 557, LVL: 77, FP: 61, TP: 78, AA: 88, AR: 53, equips: [266,15,88] },
				{ mid: 228, LVL: 78, FP: 55, TP: 86, AA: 59, AR: 59, equips: [15,15,15] }
			] },
			'E2-4': { ships: [
				{ mid: 119, LVL: 84, FP: 63, TP: 139, AA: 49, AR: 63, equips: [285,285,309] },
				{ mid: 235, LVL: 76, FP: 49, TP: 73, AA: 49, AR: 49, equips: [63,125,88] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 72, AR: 56, equips: [125,125,125] }
			] },
			'E2-5': { ships: [
				{ mid: 119, LVL: 84, FP: 63, TP: 139, AA: 49, AR: 63, equips: [285,285,309] },
				{ mid: 235, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,63,101], damage: [.75,.85] },
				{ mid: 407, LVL: 74, FP: 55, TP: 79, AA: 76, AR: 56, equips: [63,125,88], damage: [.8,.9] },
				{ mid: 228, LVL: 78, FP: 59, TP: 86, AA: 59, AR: 59, equips: [15,15,15] }
			] },
			'E2-6': { ships: [
				{ mid: 119, LVL: 84, FP: 63, TP: 139, AA: 49, AR: 63, equips: [285,285,309] },
				{ mid: 118, LVL: 84, FP: 63, TP: 139, AA: 49, AR: 63, equips: [285,285,309] },
				{ mid: 356, LVL: 70, FP: 37, TP: 39, AA: 60, AR: 39, equips: [310,310,101,74], damage: [.85,.95] },
				{ mid: 235, LVL: 76, FP: 49, TP: 78, AA: 49, AR: 49, equips: [63,125,88], damage: [.75,.85] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [125,125,125], damage: [.8,.9] }
			] },
			'E2-7': { ships: [
				{ mid: 314, LVL: 55, FP: 62, TP: 67, AA: 63, AR: 68, equips: [65,65,74] },
				{ mid: 407, LVL: 74, FP: 54, TP: 80, AA: 76, AR: 56, equips: [63,125,88] },
				{ mid: 235, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [125,125,125] }
			] },
			'E2-8': { ships: [
				{ mid: 314, LVL: 55, FP: 58, TP: 65, AA: 66, AR: 65, equips: [65,65,74], damage: [.81,.91] },
				{ mid: 228, LVL: 78, FP: 59, TP: 89, AA: 59, AR: 59, equips: [266,266,101] },
				{ mid: 419, LVL: 76, FP: 59, TP: 85, AA: 81, AR: 55, equips: [63,15,88] },
				{ mid: 235, LVL: 76, FP: 49, TP: 72, AA: 49, AR: 49, equips: [63,125,88], damage: [.75,.85] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [125,125,125], damage: [.8,.9] }
			] },
			'E2-9': { ships: [
				{ mid: 307, LVL: 80, FP: 70, TP: 79, AA: 74, AR: 69, equips: [139,139,74] },
				{ mid: 558, LVL: 73, FP: 58, TP: 83, AA: 91, AR: 54, equips: [266,266,101], damage: [.61,.71] },
				{ mid: 557, LVL: 77, FP: 61, TP: 82, AA: 85, AR: 53, equips: [266,15,88] },
				{ mid: 464, LVL: 75, FP: 65, TP: 88, AA: 72, AR: 52, equips: [266,15,88], damage: [.65,.75] },
				{ mid: 344, LVL: 65, FP: 50, TP: 78, AA: 62, AR: 51, equips: [267,15,88], damage: [.55,.65] },
				{ mid: 419, LVL: 76, FP: 59, TP: 82, AA: 81, AR: 55, equips: [125,125,125] }
			] },
			'E2-10': { ships: [
				{ mid: 307, LVL: 80, FP: 70, TP: 79, AA: 74, AR: 69, equips: [139,139,74] },
				{ mid: 558, LVL: 73, FP: 58, TP: 83, AA: 91, AR: 54, equips: [266,266,101], damage: [.61,.71] },
				{ mid: 557, LVL: 77, FP: 61, TP: 78, AA: 89, AR: 53, equips: [266,15,88] },
				{ mid: 537, LVL: 60, FP: 56, TP: 52, AA: 116, AR: 55, equips: [122,15,88], damage: [.71,.81] },
				{ mid: 228, LVL: 78, FP: 59, TP: 89, AA: 59, AR: 59, equips: [15,15,15] }
			] },
			'E2-11': { ships: [
				{ mid: 307, LVL: 80, FP: 70, TP: 79, AA: 74, AR: 69, equips: [139,139,74] },
				{ mid: 464, LVL: 75, FP: 65, TP: 87, AA: 72, AR: 52, equips: [266,266,101], damage: [.65,.75] },
				{ mid: 344, LVL: 65, FP: 50, TP: 78, AA: 62, AR: 51, equips: [267,15,88], damage: [.55,.65] },
				{ mid: 419, LVL: 76, FP: 59, TP: 85, AA: 80, AR: 55, equips: [125,125,125] }
			] },
			'E3-1': { ships: [
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,230] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,126,74] },
				{ mid: 147, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,63,101] }
			] },
			'E3-2': { ships: [
				{ mid: 231, LVL: 73, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,63,101] },
				{ mid: 232, LVL: 72, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,63,40] },
				{ mid: 230, LVL: 72, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,63,40] }
			] },
			'E3-3': { ships: [
				{ mid: 231, LVL: 73, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,125,88] },
				{ mid: 407, LVL: 74, FP: 55, TP: 78, AA: 74, AR: 56, equips: [125,125,125] }
			] },
			'E3-4': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,232,74] },
				{ mid: 579, LVL: 70, FP: 62, TP: 70, AA: 102, AR: 60, equips: [303,303,303,101], damage: [.84,.94] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,282,283], damage: [.77,.87] },
				{ mid: 147, LVL: 82, FP: 58, TP: 89, AA: 65, AR: 58, equips: [63,285,88], damage: [.79,.89] }
			] },
			'E3-5': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,35,74] },
				{ mid: 579, LVL: 70, FP: 62, TP: 70, AA: 102, AR: 60, equips: [303,303,126,173], damage: [.7,.8] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,126,101] },
				{ mid: 147, LVL: 82, FP: 58, TP: 89, AA: 65, AR: 58, equips: [63,63,40], damage: [.79,.89] },
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] }
			] },
			'E3-6': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,232,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,282,101], damage: [.77,.87] },
				{ mid: 147, LVL: 82, FP: 58, TP: 86, AA: 65, AR: 58, equips: [63,285,88], damage: [.79,.89] }
			] },
			'E3-7': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,232,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,283,101] },
				{ mid: 147, LVL: 82, FP: 58, TP: 89, AA: 65, AR: 58, equips: [63,285,88], damage: [.79,.89] },
				{ mid: 231, LVL: 73, FP: 49, TP: 75, AA: 49, AR: 49, equips: [63,285,88], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [125,125,125], damage: [.73,.83] }
			] },
			'E3-8': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,35,101] },
				{ mid: 395, LVL: 73, FP: 66, TP: 65, AA: 69, AR: 56, equips: [282,282,126,74] },
				{ mid: 147, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,63,40], damage: [.79,.89] },
				{ mid: 579, LVL: 70, FP: 62, TP: 70, AA: 102, AR: 63, equips: [303,303,126,173], damage: [.7,.8] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] }
			] },
			'E3-9': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,232,101] },
				{ mid: 395, LVL: 73, FP: 66, TP: 65, AA: 69, AR: 56, equips: [282,282,282,283] },
				{ mid: 147, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,285,88], damage: [.79,.89] },
				{ mid: 579, LVL: 70, FP: 62, TP: 70, AA: 102, AR: 63, equips: [303,303,303,74], damage: [.7,.8] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,285,88], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [125,125,125], damage: [.73,.83] }
			] },
			'E3-10': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,35,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,126,101], damage: [.77,.87] },
				{ mid: 147, LVL: 82, FP: 58, TP: 86, AA: 65, AR: 58, equips: [63,63,40], damage: [.79,.89] },
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] }
			] },
			'E3-11': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,35,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,126,101] },
				{ mid: 147, LVL: 82, FP: 58, TP: 89, AA: 65, AR: 58, equips: [63,63,40], damage: [.79,.89] },
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,230] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 500, LVL: 69, FP: 25, TP: 0, AA: 34, AR: 33, equips: [91,91,166] }
			] },
			'E3-12': { ships: [
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] },
				{ mid: 231, LVL: 73, FP: 49, TP: 74, AA: 49, AR: 49, equips: [63,63,101], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [63,125,88], damage: [.73,.83] }
			] },
			'E3-13': { ships: [
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] },
				{ mid: 231, LVL: 73, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,74,101], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [63,125,88], damage: [.73,.83] },
				{ mid: 547, LVL: 85, FP: 59, TP: 86, AA: 83, AR: 69, equips: [15,15,15] }
			] },
			'E3-14': { ships: [
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [268,139,139] },
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,166] },
				{ mid: 500, LVL: 69, FP: 25, TP: 0, AA: 34, AR: 33, equips: [91,91,230] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] }
			] },
			'E3-15': { ships: [
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] },
				{ mid: 500, LVL: 69, FP: 25, TP: 0, AA: 34, AR: 33, equips: [91,91,166] },
				{ mid: 192, LVL: 86, FP: 80, TP: 84, AA: 81, AR: 78, equips: [90,90,74,101] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [268,139,139] },
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,166] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] }
			] },
			'E3-16': { ships: [
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [268,139,139] },
				{ mid: 231, LVL: 73, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,63,101], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [63,63,40], damage: [.73,.83] }
			] },
			'E3-17': { ships: [
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] },
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,167] },
				{ mid: 231, LVL: 73, FP: 49, TP: 77, AA: 49, AR: 49, equips: [63,63,40], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 76, AR: 56, equips: [63,63,40], damage: [.73,.83] }
			] },
			'E3-18': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [268,74,101] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,125,88], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 71, AR: 56, equips: [63,125,88], damage: [.73,.83] }
			] },
			'E3-19': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [268,74,101] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] }
			] },
			'E3-20': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,167] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [268,139,139] },
				{ mid: 586, LVL: 70, FP: 60, TP: 70, AA: 65, AR: 47, equips: [310,310,230,166] }
			] },
			'E3-21': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [91,91,268] },
				{ mid: 192, LVL: 86, FP: 80, TP: 84, AA: 81, AR: 78, equips: [90,90,74,101] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,125,88], damage: [.72,.82] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 75, AR: 56, equips: [63,125,88], damage: [.73,.83] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] }
			] },
			'E3-22': { ships: [
				{ mid: 395, LVL: 73, FP: 66, TP: 68, AA: 69, AR: 56, equips: [282,282,74,101] },
				{ mid: 147, LVL: 82, FP: 58, TP: 89, AA: 65, AR: 58, equips: [285,285,285] }
			] },
			'E3-23': { ships: [
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,63,101] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [125,125,125] }
			] },
			'E3-24': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,36,74] },
				{ mid: 579, LVL: 70, FP: 62, TP: 70, AA: 102, AR: 63, equips: [303,303,101,129] },
				{ mid: 395, LVL: 73, FP: 66, TP: 65, AA: 69, AR: 56, equips: [282,282,283,87] },
				{ mid: 35, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,285,88] }
			] },
			'E3-25': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,36,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 65, AA: 69, AR: 56, equips: [282,282,101,87] },
				{ mid: 35, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,285,88] }
			] },
			'E3-26': { ships: [
				{ mid: 513, LVL: 84, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,36,74] },
				{ mid: 395, LVL: 73, FP: 66, TP: 65, AA: 69, AR: 56, equips: [282,282,283,101] },
				{ mid: 35, LVL: 82, FP: 58, TP: 87, AA: 65, AR: 58, equips: [63,285,88] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,285,88] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [125,125,125] }
			] },
			'E3-27': { ships: [
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,63,74] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [63,63,101] },
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [15,15,15] }
			] },
			'E3-28': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [268,91,91] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,125,88] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [125,125,125] }
			] },
			'E3-29': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [268,91,91] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] }
			] },
			'E3-30': { ships: [
				{ mid: 547, LVL: 85, FP: 59, TP: 91, AA: 83, AR: 69, equips: [268,91,91] },
				{ mid: 192, LVL: 86, FP: 80, TP: 84, AA: 81, AR: 78, equips: [90,90,74,101] },
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,125,88] },
				{ mid: 407, LVL: 74, FP: 55, TP: 80, AA: 74, AR: 56, equips: [63,125,88] },
				{ mid: 146, LVL: 84, FP: 64, TP: 110, AA: 72, AR: 65, equips: [15,15,15] }
			] },
			'E4-1': { ships: [
				{ mid: 200, LVL: 84, FP: 56, TP: 92, AA: 78, AR: 68, equips: [91,91,101] },
				{ mid: 464, LVL: 75, FP: 65, TP: 81, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 87, AA: 63, AR: 53, equips: [15,15,15] }
			] },
			'E4-2': { ships: [
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,101] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] }
			] },
			'E4-3': { ships: [
				{ mid: 231, LVL: 73, FP: 49, TP: 79, AA: 49, AR: 49, equips: [63,125,88] },
				{ mid: 232, LVL: 72, FP: 49, TP: 79, AA: 49, AR: 49, equips: [125,125,125] }
			] },
			'E4-4': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,313,315], damage: [.9,1] },
				{ mid: 681, LVL: 70, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,284,315], damage: [.86,.96] }
			] },
			'E4-5': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 89, AR: 52, equips: [313,314,315], damage: [.9,1] },
				{ mid: 681, LVL: 70, FP: 50, TP: 69, AA: 60, AR: 43, equips: [284,314,315], damage: [.86,.96] }
			] },
			'E4-6': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 86, AR: 52, equips: [313,314,315], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 68, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,.85] },
				{ mid: 200, LVL: 84, FP: 56, TP: 91, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 566, LVL: 74, FP: 68, TP: 90, AA: 62, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 66, TP: 83, AA: 64, AR: 54, equips: [15,15,15] }
			] },
			'E4-7': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 681, LVL: 70, FP: 50, TP: 68, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,.85] },
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,317,74] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,101] },
				{ mid: 566, LVL: 74, FP: 66, TP: 87, AA: 62, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 67, TP: 89, AA: 63, AR: 54, equips: [15,15,15] }
			] },
			'E4-8': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 681, LVL: 70, FP: 50, TP: 68, AA: 60, AR: 43, equips: [284,284,315], damage: [.75,.85] },
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,317,116] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 566, LVL: 74, FP: 66, TP: 87, AA: 62, AR: 53, equips: [266,266,74] },
				{ mid: 567, LVL: 73, FP: 67, TP: 89, AA: 63, AR: 54, equips: [266,266,101] }
			] },
			'E4-9': { ships: [
				{ mid: 151, LVL: 84, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,329,317,116] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.8,.9] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] }
			] },
			'E4-10': { ships: [
				{ mid: 151, LVL: 84, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,329,317,116] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] }
			] },
			'E4-11': { ships: [
				{ mid: 150, LVL: 86, FP: 99, TP: 0, AA: 82, AR: 95, equips: [329,329,317,74] },
				{ mid: 152, LVL: 85, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,317,101] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,183,279], damage: [.8,.9] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 681, LVL: 70, FP: 50, TP: 69, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,.85] }
			] },
			'E4-12': { ships: [
				{ mid: 150, LVL: 86, FP: 99, TP: 0, AA: 82, AR: 95, equips: [329,329,317,74] },
				{ mid: 152, LVL: 85, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,317,116] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.8,.9] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 681, LVL: 70, FP: 50, TP: 69, AA: 60, AR: 43, equips: [284,284,315], damage: [.75,.85] }
			] },
			'E4-13': { ships: [
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,183,279], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,.85] },
				{ mid: 464, LVL: 75, FP: 64, TP: 91, AA: 72, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 65, TP: 86, AA: 63, AR: 53, equips: [15,15,15] }
			] },
			'E4-14': { ships: [
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 89, AR: 52, equips: [313,314,315] },
				{ mid: 681, LVL: 70, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,314,315] }
			] },
			'E4-15': { ships: [
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,313,315] },
				{ mid: 681, LVL: 70, FP: 50, TP: 69, AA: 60, AR: 43, equips: [284,284,315] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] }
			] },
			'E4-16': { ships: [
				{ mid: 566, LVL: 74, FP: 68, TP: 81, AA: 60, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 67, TP: 85, AA: 64, AR: 54, equips: [266,15,88] }
			] },
			'E4-17': { ships: [
				{ mid: 566, LVL: 74, FP: 68, TP: 83, AA: 62, AR: 53, equips: [266,266,74] },
				{ mid: 567, LVL: 73, FP: 67, TP: 85, AA: 64, AR: 54, equips: [266,266,101] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] }
			] },
			'E4-18': { ships: [
				{ mid: 566, LVL: 74, FP: 68, TP: 83, AA: 62, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 67, TP: 85, AA: 64, AR: 54, equips: [266,15,88] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 68, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [15,15,15] }
			] },
			'E4-19': { ships: [
				{ mid: 566, LVL: 74, FP: 68, TP: 83, AA: 62, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 67, TP: 85, AA: 64, AR: 54, equips: [266,15,88] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] }
			] },
			'E4-20': { ships: [
				{ mid: 152, LVL: 85, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,317,74] },
				{ mid: 566, LVL: 74, FP: 68, TP: 87, AA: 62, AR: 53, equips: [266,15,88] },
				{ mid: 567, LVL: 73, FP: 67, TP: 88, AA: 64, AR: 54, equips: [266,15,88] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,.85] }
			] },
			'E4-21': { ships: [
				{ mid: 152, LVL: 85, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,317,74] },
				{ mid: 464, LVL: 75, FP: 65, TP: 92, AA: 71, AR: 52, equips: [266,266,167] },
				{ mid: 198, LVL: 72, FP: 66, TP: 78, AA: 62, AR: 53, equips: [266,266,167] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,313,101], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 70, AA: 60, AR: 43, equips: [284,284,315], damage: [.75,.85] }
			] },
			'E4-22': { ships: [
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,317,74] },
				{ mid: 151, LVL: 84, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,329,317,116] },
				{ mid: 200, LVL: 84, FP: 56, TP: 94, AA: 78, AR: 68, equips: [91,91,167] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 69, AA: 60, AR: 43, equips: [284,284,101], damage: [.75,.85] }
			] },
			'E5-1': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,257,154,108] },
				{ mid: 278, LVL: 92, FP: 50, TP: 0, AA: 79, AR: 79, equips: [338,320,257,259] },
				{ mid: 397, LVL: 77, FP: 54, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259], damage: [.9,1] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.66,.76] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315], damage: [.75,.85] },
				{ mid: 557, LVL: 88, FP: 61, TP: 82, AA: 90, AR: 53, equips: [286,286,286] }
			] },
			'E5-2': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,257,154,108] },
				{ mid: 278, LVL: 92, FP: 50, TP: 0, AA: 79, AR: 79, equips: [338,320,257,259] },
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,116,74] },
				{ mid: 306, LVL: 85, FP: 68, TP: 75, AA: 72, AR: 69, equips: [139,139,101] },
				{ mid: 559, LVL: 86, FP: 59, TP: 84, AA: 80, AR: 51, equips: [15,15,15] },
				{ mid: 557, LVL: 88, FP: 61, TP: 82, AA: 90, AR: 53, equips: [286,286,286] }
			] },
			'E5-3': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,257,154,108] },
				{ mid: 278, LVL: 92, FP: 50, TP: 0, AA: 79, AR: 79, equips: [338,320,257,259] },
				{ mid: 559, LVL: 86, FP: 59, TP: 84, AA: 80, AR: 51, equips: [266,15,240] },
				{ mid: 557, LVL: 88, FP: 61, TP: 82, AA: 90, AR: 53, equips: [286,286,286] }
			] },
			'E5-4': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,257,154,108] },
				{ mid: 145, LVL: 89, FP: 59, TP: 86, AA: 72, AR: 52, equips: [296,286,240] },
				{ mid: 228, LVL: 90, FP: 59, TP: 89, AA: 59, AR: 59, equips: [286,286,286] }
			] },
			'E5-5': { ships: [
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259], damage: [.9,1] },
				{ mid: 397, LVL: 77, FP: 54, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259], damage: [.9,1] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.66,.76] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315], damage: [.75,.85] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315], damage: [.8,.9] }
			] },
			'E5-6': { ships: [
				{ mid: 397, LVL: 77, FP: 54, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259], damage: [.9,1] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315], damage: [.75,.85] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [314,314,314], damage: [.8,.9] }
			] },
			'E5-7': { ships: [
				{ mid: 397, LVL: 77, FP: 54, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259], damage: [.9,1] },
				{ mid: 545, LVL: 90, FP: 66, TP: 0, AA: 94, AR: 85, equips: [255,257,257,257], damage: [.9,1] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315], damage: [.75,.85] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [314,314,314], damage: [.8,.9] }
			] },
			'E5-8': { ships: [
				{ mid: 397, LVL: 77, FP: 54, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259], damage: [.9,1] },
				{ mid: 545, LVL: 90, FP: 66, TP: 0, AA: 94, AR: 85, equips: [255,257,257,257], damage: [.9,1] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259], damage: [.9,1] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.66,.76] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315], damage: [.75,.85] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315], damage: [.8,.9] }
			] },
			'E5-9': { ships: [
				{ mid: 545, LVL: 90, FP: 66, TP: 0, AA: 94, AR: 85, equips: [255,257,257,257], damage: [.9,1] },
				{ mid: 396, LVL: 72, FP: 32, TP: 0, AA: 48, AR: 39, equips: [255,257,259], damage: [.9,1] },
				{ mid: 360, LVL: 75, FP: 115, TP: 0, AA: 120, AR: 107, equips: [183,183,101,279], damage: [.66,.67] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315], damage: [.8,.9] },
				{ mid: 681, LVL: 70, FP: 50, TP: 63, AA: 60, AR: 43, equips: [284,314,315], damage: [.75,85] }
			] },
			'E5-10': { ships: [
				{ mid: 556, LVL: 86, FP: 62, TP: 80, AA: 76, AR: 53, equips: [266,266,101] },
				{ mid: 558, LVL: 87, FP: 58, TP: 83, AA: 93, AR: 54, equips: [266,15,240] },
				{ mid: 557, LVL: 88, FP: 61, TP: 82, AA: 90, AR: 53, equips: [286,286,286] }
			] },
			'E5-11': { ships: [
				{ mid: 556, LVL: 86, FP: 62, TP: 80, AA: 76, AR: 53, equips: [266,266,101] },
				{ mid: 558, LVL: 87, FP: 58, TP: 83, AA: 93, AR: 54, equips: [266,15,240] },
				{ mid: 559, LVL: 86, FP: 59, TP: 84, AA: 80, AR: 51, equips: [15,15,15] },
				{ mid: 557, LVL: 88, FP: 61, TP: 82, AA: 90, AR: 53, equips: [286,286,286] }
			] }
		},
		friendFleetWaves: {
			1: { date: '2019-06-06' },
			2: { date: '2019-06-12' },
		},
		historical: {
			'E2_1': [131,139,20,41,425,532,167,170],
			'E2_2': [49],
			'E2_3': [184,92,140,35,16],
			'E3_1': [511,516,35],
			'E3_2': [63,64,100,101,114,49],
			'E4_1': [83],
			'E4_2': [110,111],
			'E4_3': [84],
			'E4_4': [90,91,86,85,71,72,114,48,49,17,18,167,168,169,170],
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Patrol the Fleet Gathering Area! Hitokappu Bay Anchorage',
				fleetTypes: [0],
				bgmMap: 134,
				bgmDN: 135,
				bgmNN: 135,
				bgmDB: 136,
				bgmNB: 136,
				bossnode: 23,
				currentBoss: 'W',
				checkLock: [3,1,4,6,10],
				giveLock: 5,
				lbas: 1,
				maphp: {
					3: { 1: 650 },
					2: { 1: 330 },
					1: { 1: 330 },
					4: { 1: 330 },
				},
				finalhp: {
					3: 130,
					2: 66,
					1: 48,
					4: 48,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{ node: 'G', type: 'ReachNode', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
							{ node: 'O', type: 'battle', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'S', 3:'S' } },
							{ node: 'S', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'U', type: 'ReachNode', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
						], {
							partToUnlock: 1
						})
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.LHA) errors.push('No LHA');
				},
				mapInfo: 'No CV(L/B) allowed<br>No (F)BB(V) allowed<br>No LHA allowed',
				reward: {
					3: { items: [333], firstOnly: true },
					2: { items: [333], firstOnly: true },
					1: { items: [333], firstOnly: true },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 171,
						y: 282,
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'A': {
						type: 1,
						x: 55,
						y: 162,
						distance: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'B': {
						type: 3,
						x: 95,
						y: 231,
						distance: 3,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'C'),
								ChShipTypeRoutingRule(['CA', 'CAV'], '<=', 1, 'C'),
								ChShipTypeRoutingRule(['CL', 'CT'], '<=', 2, 'C'),
							], 'AND', 'C', 'A'),
						]
					},
					'C': {
						type: 1,
						x: 116,
						y: 92,
						distance: 3,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'F'),
								ChShipTypeRoutingRule(['CA', 'CAV', 'CT'], '<=', 3, 'F'),
							], 'AND', 'F', 'E'),
						]
					},
					'D': {
						type: 3,
						x: 156,
						y: 238,
						distance: 2,
						rules: [
							ChSelectRouteRule(['B','H']),
						]
					},
					'E': {
						type: 1,
						x: 168,
						y: 108,
						distance: 2,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'F': {
						type: 1,
						x: 222,
						y: 60,
						distance: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'G': {
						type: 3,
						x: 231,
						y: 108,
						distance: 1,
						dropoff: true,
						end: true
					},
					'H': {
						type: 3,
						x: 248,
						y: 230,
						distance: 1,
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'I': {
						type: 1,
						x: 312,
						y: 298,
						distance: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'K'),
							ChShipCountRoutingRule('<=', 3, 'K'),
							
							ChMultipleRulesRule([
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['CA', 'CAV'], '=', 0, 'L'),
									ChDifficultyRule([4], 'L'),
								], 'OR', 'L'),

								ChMultipleRulesRule([
									ChMultipleRulesRule([
										ChSpeedRule('>=', 10, 'L'),
										ChShipTypeRoutingRule(['DD'], '>=', 4, 'L'),

										ChMultipleRulesRule([
											ChShipTypeRoutingRule(['CL'], '>', 0, 'L'),
											ChShipCountRoutingRule('<', 6, 'L'),
										], 'OR', 'L'),

									], 'AND', 'L'),

									ChMultipleRulesRule([
										ChSpeedRule('<=', 5, 'L'),
										ChShipCountRoutingRule('>=', 6, 'L'),
										ChShipTypeRoutingRule(['CL', 'CT'], '=', 1, 'L'),
										ChShipTypeRoutingRule(['CLT'], '=', 0, 'L'),
									], 'AND', 'L'),
								], 'OR', 'L'),

							], 'AND', 'L', 'J'),
						]
					},
					'J': {
						type: 1,
						x: 391,
						y: 236,
						distance: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: [],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'K': {
						type: 1,
						x: 404,
						y: 312,
						distance: 3,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'L': {
						type: 3,
						x: 484,
						y: 246,
						distance: 3,
						rules: [
							ChSelectRouteRule(['O','Q']),
						]
					},
					'M': {
						type: 1,
						x: 502,
						y: 324,
						distance: 4,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'N': {
						type: 3,
						x: 526,
						y: 71,
						distance: 4,
						end: true
					},
					'O': {
						type: 1,
						x: 570,
						y: 292,
						distance: 4,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'R')),

							// --- Unlocked
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['DD'], '>=', 2, 'W'),

									ChEquipTypeRule({
										equipTypes: [RADARS, RADARL, RADARXL],
										LOS: 5,
									}, '>=', { 4:0, 1:0, 2:3, 3:3 }, { 4:0, 1:0, 2:3, 3:3 }, 'W'),

									ChMultipleRulesRule([
										ChShipTypeRoutingRule(['CA', 'CAV'], '<=', 1, 'W'),
										ChDifficultyRule([4,1,2], 'W'),
									], 'OR', 'W'),

								], 'AND', 'W'), 

								ChLOSRule({ 50: 'W', 47: 'R' }, 3),
								
								ChLOSRule({ 50: 'V', 47: 'R' }, 3)
							),
						]
					},
					'P': {
						type: 1,
						x: 584,
						y: 104,
						distance: 4,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						routeLC: 2,
						rules: [
							ChLOSRule({ 27: 'S', 24: 'N' }, 2),
						]
					},
					'Q': {
						type: 1,
						x: 608,
						y: 207,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipCountRoutingRule('>=', 6, 'P'),
								ChShipTypeRoutingRule(['CL', 'CT'], '=', 1, 'P'),
								ChShipTypeRoutingRule(['AV'], '=', 0, 'P'),
								
								ChMultipleRulesRule([
									ChMultipleRulesRule([
										ChShipTypeRoutingRule(['CLT'], '>', 0, 'P'),
										ChShipTypeRoutingRule(['CA', 'CAV'], '>', 0, 'P'),
									], 'AND', 'P'),

									ChShipTypeRoutingRule(['CLT'], '=', 0, 'P'),

								], 'OR', 'P'),
							], 'AND', 'P', 'T'),
						]
					},
					'R': {
						type: 3,
						x: 635,
						y: 328,
						distance: 5,
						end: true
					},
					'S': {
						type: 1,
						x: 638,
						y: 68,
						distance: 5,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						end: true
					},
					'T': {
						type: 1,
						x: 666,
						y: 189,
						distance: 5,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'U': {
						type: 3,
						x: 669,
						y: 127,
						distance: 5,
						dropoff: true,
						end: true
					},
					'V': {
						type: 1,
						x: 606,
						y: 244,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'W': {
						type: 1,
						x: 672,
						y: 273,
						distance: 5,
						hidden: 1,
						boss: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 3'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Expand the Defenses! Southwest Islands Defense Operation',
				fleetTypes: [0],
				bgmMap: 134,
				bgmDN: 135,
				bgmNN: 135,
				bgmDB: 136,
				bgmNB: 136,
				bossnode: [12,21],
				checkLock: [5,1,4,6,10],
				giveLock: 3,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 280 },
							2: { 1: 260 },
							1: { 1: 240 },
							4: { 1: 240 },
						},
						finalhp: null,
						transport: 'K',
					},
					2: {
						currentBoss: 'U',
						maphp: {
							3: { 1: 1750 },
							2: { 1: 1750 },
							1: { 1: 1750 },
							4: { 1: 1750 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
						transport: null,
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 2, [
							{ node: 'C', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'B', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
						], {
							partToUnlock: 1
						})
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				mapInfo: 'No CV(B) allowed',
				startCheckRule: [
					ChMultipleRulesRule([
						ChIsRouteUnlockedRule(1, 'Start2'),
						ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'Start2'),
						ChShipTypeRoutingRule(['aBB'], '>', 0, 'Start2'),
						ChShipTypeRoutingRule(['aCV'], '<=', 2, 'Start2'),
					], 'AND', 'Start2', 'Start1'),					
				],
				startBonus: [
					new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_1', '1.15'),
					new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_2', '1.1'),
					new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_3', '1.1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 601,
						y: 73,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 706,
						y: 212,
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'A': {
						type: 3,
						x: 552,
						y: 204,
						distance: 2,
						rules: [
							ChSelectRouteRule(['B','C']),
						]
					},
					'B': {
						type: 1,
						x: 522,
						y: 296,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 459,
						y: 237,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'E'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '>', 0, 'F'),
								ChShipTypeRoutingRule(['aBB'], '=', 0, 'F'),
								ChShipTypeRoutingRule(['LHA', 'aCV', 'CA', 'CAV'], '<=', 1, 'F'),
							], 'AND', 'F'),
							
							ChShipTypeRoutingRule(['aBB', 'aCV', 'CA', 'CAV'], '>', 0, 'D'),

							ChDefaultRouteRule('E')
						]
					},
					'D': {
						type: 1,
						x: 431,
						y: 298,
						distance: 4,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':20,'Hard 4':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 3, 'I', 'G'),
						]
					},
					'E': {
						type: 1,
						x: 410,
						y: 149,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':25,'Hard 3':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 383,
						y: 265,
						distance: 4,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':20,'Hard 4':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChSpeedRule('>=', 10, 'J', 'I'),
						]
					},
					'G': {
						type: 1,
						x: 369,
						y: 339,
						distance: 5,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 319,
						y: 156,
						distance: 5,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'J')),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'T'),
								ChShipTypeRoutingRule(['aBB'], '>', 0, 'T'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'T'),
							], 'AND', 'T'),

							ChDefaultRouteRule('J')
						]
					},
					'I': {
						type: 1,
						x: 255,
						y: 309,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':50,'Hard 4':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 205,
						y: 270,
						distance: 7,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'K': {
						type: 2,
						x: 136,
						y: 212,
						resource: 0,
						distance: 7,
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '<', { 4:0, 1:0, 2:1, 3:2 }, { 4:0, 1:0, 2:1, 3:2 }, 'M'),

							ChLOSRule({ 14: 'L', 12: 'M' }),
						]
					},
					'L': {
						type: 1,
						x: 117,
						y: 270,
						distance: 7,
						boss: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':5,'Hard 3':40,'Hard 4':25},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						end: true
					},
					'M': {
						type: 3,
						x: 86,
						y: 226,
						distance: 7,
						end: true
					},
					'N': {
						type: 1,
						x: 621,
						y: 185,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('O1')
						]
					},
					'O1': {
						type: 3,
						x: 570,
						y: 132,
						distance: 1,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['O2','P1']),
						]
					},
					'O2': {
						type: 3,
						x: 554,
						y: 100,
						distance: 1,
						hidden: 1,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '>', 0, 'P2'),
								ChShipTypeRoutingRule(['aCV'], '=', 0, 'P2'),
							], 'AND', 'P2', 'O3'),
						]
					},
					'O3': {
						type: 1,
						x: 530,
						y: 68,
						distance: 2,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('P3')
						]
					},
					'P1': {
						type: 1,
						x: 531,
						y: 136,
						distance: 2,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('Q1')
						]
					},
					'P2': {
						type: 1,
						x: 514,
						y: 103,
						distance: 2,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('Q2')
						]
					},
					'P3': {
						type: 1,
						x: 458,
						y: 62,
						distance: 3,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('Q3')
						]
					},
					'Q1': {
						type: 1,
						x: 489,
						y: 141,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':30,'Hard 3':25},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL'], '=', 1, 'E'),
								ChShipTypeRoutingRule(['aBB'], '<=', 1, 'E'),
								ChShipTypeRoutingRule(['aCV', 'CA', 'CAV', 'CLT'], '<=', 0, 'E'),
							], 'AND', 'E', 'Q2'),
						]
					},
					'Q2': {
						type: 1,
						x: 474,
						y: 105,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'Q3': {
						type: 1,
						x: 351,
						y: 56,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 5, 'S', 'R'),
						]
					},
					'R': {
						type: 1,
						x: 383,
						y: 110,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([4], 'S'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'S'),
								ChShipTypeRoutingRule(['aBB', "aCV", 'CA', 'CAV'], '<=', 3, 'S'),
							], 'AND', 'S'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '=', 0, 'S'),
								ChShipTypeRoutingRule(['CL'], '>', 0, 'S'),
								ChShipTypeRoutingRule(['aBB', "aCV", 'CA', 'CAV'], '<=', 1, 'S'),
							], 'AND', 'S'),

							ChShipTypeRoutingRule(['aBB', "aCV", 'CA', 'CAV'], '<=', 2, 'H', 'E'),
						]
					},
					'S': {
						type: 1,
						x: 284,
						y: 116,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'T': {
						type: 1,
						x: 232,
						y: 164,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'V'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '<', 1, 1, 'V'),
							], 'AND', 'V'),

							ChLOSRule({ 35: 'U', 33: 'V' }, 2),
						]
					},
					'U': {
						type: 1,
						x: 194,
						y: 202,
						distance: 7,
						hidden: 1,
						boss: true,
						friendFleet: ['E2-1','E2-2','E2-3','E2-4','E2-5','E2-7','E2-11'],
						friendFleetS: ['E2-6','E2-8','E2-9','E2-10'],
						bonuses: [
							// --- Base bonus
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_1', '1.15'),
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_2', '1.1'),

							// --- Cancel bonus
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E2_3', '1'),
						],
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 4'],
							1: ['Easy 5'],
							4: ['Casual 3'],
						},
						end: true
					},
					'V': {
						type: 3,
						x: 160,
						y: 170,
						distance: 7,
						hidden: 1,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Contain the Enemy Forces! The Second Operation AL',
				fleetTypes: [1,2,3],
				bgmMap: 134,
				bgmDN: 135,
				bgmNN: 135,
				bgmDB: 136,
				bgmNB: 136,
				bossnode: [14,18],
				checkLock: [5,3,4,6,10],
				giveLock: 1,
				lbas: 3,
				lbasSortie: 2,
				parts: {
					1: {
						currentBoss: 'N',
						maphp: {
							3: { 1: 1960 },
							2: { 1: 1400 },
							1: { 1: 1400 },
							4: { 1: 1400 },
						},
						finalhp: {
							3: 490,
							2: 390,
							1: 380,
							4: 380,
						},
					},
					2: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 3950 },
							2: { 1: 3950 },
							1: { 1: 3950 },
							4: { 1: 3950 },
						},
						finalhp: {
							3: 790,
							2: 790,
							1: 790,
							4: 790,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [
							{ node: 'O', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'I', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'E', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS+' } },
						], {
							partToUnlock: 2
						})
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .2, 2: .2, 1: .2, 4: .2 },
					compName: 'G',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
						4: ['Casual 1','Casual 2'],
					}
				},
				startCheckRule: [
					// --- Without unlock
					ChIsRouteNotUnlockedRule(2, 'Start1'),

					// --- With unlock
					ChFleetTypeRule(3, 'Start2'),

					ChMultipleRulesRule([
						ChFleetTypeRule(1, 'Start2'),
						ChShipTypeRoutingRule(['AO'], '>', 0, 'Start2'),
					], 'AND', 'Start2'),
					
					ChMultipleRulesRule([
						ChFleetTypeRule(2, 'Start2'),
						ChShipTypeRoutingRule(['CV', 'CVB'], '=', 0, 'Start2'),
						ChShipTypeRoutingRule(['SS', 'SSV'], '=', 0, 'Start2'),
					], 'AND', 'Start2'),
					
					ChDefaultRouteRule('Start1')
				],
				startBonus: [
					new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_1', '1.15'),
					new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_2', '1.1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 63,
						y: 217,
						rules: [
							ChFleetTypeRule(1, 'A', 'B'),
						]
					},
					'Start2': {
						type: 0,
						x: 245,
						y: 183,
						hidden: 2,
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'A': {
						type: 1,
						x: 136,
						y: 174,
						distance: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':25,'Hard 3':10,'Hard 4':25,'Hard 5':30},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'B': {
						type: 1,
						x: 137,
						y: 264,
						distance: 2,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'F'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'F'),
							], 'AND', 'F', 'C'),
						]
					},
					'C': {
						type: 1,
						x: 214,
						y: 306,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'D': {
						type: 1,
						x: 216,
						y: 133,
						distance: 1,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'H'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 2, 'H'),
							], 'AND', 'H', 'E'),
						]
					},
					'E': {
						type: 1,
						x: 296,
						y: 90,
						distance: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							// --- Fast & BB/CV <= 3 : 100% H
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'H'),
								ChSpeedRule('>=', 10, 'H'),
							], 'AND', 'H'),
							
							// --- Slow & BB/CV > 3 : 100% G
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 3, 'G'),
								ChSpeedRule('<', 10, 'G'),
							], 'AND', 'G'),
							
							// --- Slow & BB/CV <= 3 : 50% H 50% G
							// --- Fast & BB/CV > 3 :  50% H 50% G
							ChRandomRule({ 'G': .5, 'H': .5 }),
						]
					},
					'F': {
						type: 3,
						x: 315,
						y: 264,
						distance: 2,
						rules: [
							ChSelectRouteRule(['I','K']),
						]
					},
					'G': {
						type: 1,
						x: 368,
						y: 90,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'H': {
						type: 3,
						x: 382,
						y: 200,
						distance: 3,
						rules: [
							ChSelectRouteRule(['I','J']),
						]
					},
					'I': {
						type: 1,
						x: 414,
						y: 267,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChIfThenElseRule(
								ChSpeedRule('<', 10, 'K'),
								ChRandomRule({ 'K': .5, '': 0.5 }),
							),
							
							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 3, 'K'),
								ChRandomRule({ 'K': .5, '': 0.5 }),
							),
							
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChFleetBeenThroughRule('Start1', 'K'),
									ChShipTypeRoutingRule(['aCV'], '>', 2, 'K'),
								], 'AND', 'K'),
								ChRandomRule({ 'K': .5, '': 0.5 }),
							),
							
							ChDefaultRouteRule('L')
						]
					},
					'J': {
						type: 1,
						x: 442,
						y: 171,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'L')),
							
							ChFleetTypeRule(1, 'P'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 4, 'P'),

							ChDefaultRouteRule('L'),
						]
					},
					'K': {
						type: 1,
						x: 442,
						y: 323,
						distance: 5,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':17,'Hard 3':43,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 539,
						y: 276,
						distance: 6,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(1, 'N'),
								ChLOSRule({ 70: 'N', 62: 'M' }, 2),
							),

							ChIfThenElseRule(
								ChFleetTypeRule(1, 'P'),
								ChLOSRule({ 70: 'P', 62: 'M' }, 2),
							),
							
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChFleetTypeRule(2, 'P'),
									ChShipTypeRoutingRule(['AV', 'AO'], '>', 0, 'P'),
								], 'AND', 'P'),

								ChLOSRule({ 70: 'P', 62: 'M' }, 2),
							),
							
							ChLOSRule({ 70: 'N', 62: 'M' }, 2),
						]
					},
					'M': {
						type: 3,
						x: 629,
						y: 318,
						distance: 7,
						end: true
					},
					'N': {
						type: 1,
						x: 655,
						y: 234,
						distance: 7,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: null,
								friendFleetS: null,
							},
							2: {
								friendFleet: ['E3-23','E3-25','E3-12','E3-28','E3-29','E3-22'],
								friendFleetS: ['E3-24','E3-26','E3-27','E3-30'],
							},
						},
						bonuses: [
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_1', '1.15'),
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_2', '1.1'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'O': {
						type: 1,
						x: 514,
						y: 108,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChLOSRule({ 80: 'R', 70: 'Q' }, 2),
						]
					},
					'P': {
						type: 1,
						x: 525,
						y: 183,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							// --- Without unlock
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'O')),		

							// --- With unlock
							ChFleetTypeRule(3, 'R'),

							ChMultipleRulesRule([
								ChFleetTypeRule(1, 'R'),
								ChSpeedRule('>=', 10, 'R'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 4, 'R'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['AO'], '>', 0, 'R'),
									ChDifficultyRule([4,1], 'R'),
								], 'OR', 'R'),
								
							], 'AND', 'R'),

							ChDefaultRouteRule('O')
						]
					},
					'Q': {
						type: 3,
						x: 562,
						y: 64,
						distance: 6,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 594,
						y: 152,
						distance: 6,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: ['E3-3','E3-4','E3-6','E3-12','E3-13','E3-18','E3-19','E3-22'],
								friendFleetS: ['E3-7','E3-9','E3-21'],
							},
							2: {
								friendFleet: ['E3-2','E3-1','E3-10','E3-14','E3-16','E3-17','E3-20'],
								friendFleetS: ['E3-5','E3-8','E3-11','E3-15'],
							},
						},
						bonuses: [
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_1', '1.15'),
							new ChShipIdsBonuses({ type: "set" }, 'event.historical.E3_2', '1.1'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'S': {
						type: 1,
						x: 312,
						y: 193,
						distance: 2,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The 2nd Hawaii Operation',
				fleetTypes: [1,2,3],
				bgmMap: 137,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 136,
				bgmNB: 136,
				bossnode: 22,
				checkLock: [5,3,1,10],
				giveLock: [4,6],
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 2,
				maphp: {
					3: { 1: 4500 },
					2: { 1: 4000 },
					1: { 1: 3000 },
					4: { 1: 3000 },
				},
				finalhp: {
					3: 900,
					2: 800,
					1: 600,
					4: 600,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'MapWide', type: 'MapHP', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:1200, 1:1000, 2:1333, 3:1500 } },
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'J', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'S', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'L', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'T', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'S', 2:'S', 3:'S' } },
							{ node: 'K', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
						], {
							partToUnlock: 1
						})
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .2, 2: .2, 1: .2, 4: .2 },
					compName: 'L',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[4].diff == 1 || CHDATA.event.maps[4].diff == 4 || CHDATA.config.disablelock) return;
					let lock = (CHDATA.fleets.combined == 1)? 4 : 6;
					let shipIds = CHDATA.fleets[1].concat(CHDATA.fleets[2]);
					for (shipId of shipIds) {
						let ship = CHDATA.ships[shipId];
						if (!ship) continue;
						if (ship.lock && lock != ship.lock) {
							errors.push('Locked ship not allowed.');
							break;
						}
					}
				},
				startCheck: function(ships) {
					let lock = (CHDATA.fleets.combined == 1)? 4 : 6;
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,lock);
					}
					for (let i=0; i<CHDATA.fleets[2].length; i++) {
						chGiveLock(2,i+1,lock);
					}
				},
				startCheckRule: [
					ChMultipleRulesRule([
						ChFleetTypeRule(2, 'Start3'),
						ChIsRouteUnlockedRule(1, 'Start3'),
					], 'AND', 'Start3'),

					ChFleetTypeRule(3, 'Start2', 'Start1'),
				],
				startBonus: [
					new ChWholeFleetBonuses({ type: "add", requireUnlock: 1, excludeFF: true }, '1.15'),
					new ChShipIdsBonuses({ type: "add", excludeFF: true }, 'event.historical.E4_4', '1.15'),
					new ChShipIdsBonuses({ type: "add", excludeFF: true }, 'event.historical.E4_3', '1.2'),
					new ChShipIdsBonuses({ type: "add", excludeFF: true }, 'event.historical.E4_2', '1.25'),
					new ChShipIdsBonuses({ type: "add", excludeFF: true }, 'event.historical.E4_1', '1.3'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 69,
						y: 180,
						rules: [
							ChFleetTypeRule(1, 'A', 'B'),
						]
					},
					'Start2': {
						type: 0,
						x: 199,
						y: 319,
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'Start3': {
						type: 0,
						hidden: 1,
						x: 279,
						y: 195,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 2, 'X'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'X'),

								ChCreateCustomRuleFromName("44_4_1")
							], 'AND', 'X'),
							ChMultipleRulesRule([
								ChShipCountRoutingRule('<=', 3, 'X'),
								ChNumberOfShipOfSpeedRule('<=', 5, '<=', 1, 'X')
							], 'AND', 'X', 'W'),
						]
					},
					'A': {
						type: 3,
						x: 155,
						y: 121,
						distance: 2,
						rules: [
							ChSelectRouteRule(['C','D']),
						]
					},
					'B': {
						type: 1,
						x: 167,
						y: 216,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						rules: [
							ChFixedRoutingRule('F')
						]
					},
					'C': {
						type: 1,
						x: 233,
						y: 70,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 15, 'I'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'I'),
								ChShipTypeRoutingRule(['aCV'], '<=', 2, 'I'),
							], 'AND', 'I', 'G'),
						]
					},
					'D': {
						type: 1,
						x: 262,
						y: 143,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':60,'Casual 2':30,'Casual 3':10},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4'],
							4: {'Casual 1':60,'Casual 2':30,'Casual 3':10},
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'E': {
						type: 1,
						x: 286,
						y: 298,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
							4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 287,
						y: 256,
						distance: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':45},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':75,'Casual 2':25},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'G': {
						type: 1,
						x: 328,
						y: 156,
						distance: 3,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':20,'Hard 3':20},
							2: {'Medium 1':60,'Medium 2':20,'Medium 3':20},
							1: {'Easy 1':40,'Easy 2':20,'Easy 3':10,'Easy 4':15,'Easy 5':15},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						rules: [
							ChSpeedRule('>=', 15, 'J'),
							
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'J'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'J'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 3, 'J'),
							], 'AND', 'J', 'I'),
						]
					},
					'H': {
						type: 1,
						x: 359,
						y: 278,
						distance: 3,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':35,'Medium 2':35,'Medium 3':30},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':10,'Easy 4':30},
							4: {'Casual 1':35,'Casual 2':30,'Casual 3':35},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'K', 'M'),
						]
					},
					'I': {
						type: 1,
						x: 361,
						y: 88,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
						},
						rules: [
							ChSpeedRule('>=', 15, 'L', 'J'),
						]
					},
					'J': {
						type: 1,
						x: 376,
						y: 166,
						distance: 4,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':60,'Hard 3':15},
							2: {'Medium 1':25,'Medium 2':60,'Medium 3':15},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':60,'Casual 2':30,'Casual 3':10},
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'O'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 4, 'O'),
								ChShipTypeRoutingRule(['aCV'], '<=', 3, 'O'),
								ChShipTypeRoutingRule(['CLT'], '<=', 2, 'O'),
							], 'AND', 'O', 'L'),
						]
					},
					'K': {
						type: 1,
						x: 434,
						y: 278,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':30,'Hard 3':25},
							2: {'Medium 1':45,'Medium 2':30,'Medium 3':25},
							1: {'Easy 1':10,'Easy 2':40,'Easy 3':35,'Easy 4':15},
							4: {'Casual 1':55,'Casual 2':30,'Casual 3':15},
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'L': {
						type: 1,
						x: 450,
						y: 100,
						distance: 5,
						raid: true,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':55},
							2: {'Medium 1':45,'Medium 2':55},
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 15, 'Q'),
								ChShipTypeRoutingRule(['AV'], '>', 0, 'Q'),
							], 'AND', 'Q'),
							
							ChSpeedRule('<=', 5, 'Q', 'O'),
						]
					},
					'M': {
						type: 1,
						x: 466,
						y: 316,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Hard 1','Hard 2','Hard 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'N': {
						type: 1,
						x: 494,
						y: 278,
						distance: 5,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':25,'Hard 3':40},
							2: {'Medium 1':35,'Medium 2':25,'Medium 3':40},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':25,'Casual 2':45,'Casual 3':30},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 4, 'P'),
							ChShipTypeRoutingRule(['aBB', 'CV', 'CVB'], '>', 3, 'P', 'S'),
						]
					},
					'O': {
						type: 1,
						x: 517,
						y: 194,
						distance: 6,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':30,'Hard 3':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':15,'Casual 4':10},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':15,'Casual 4':10},
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([2,3], 'R'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '<', 4, 4, 'R'),
							], 'AND', 'R'),

							ChLOSRule({ 78: 'V', 65: 'R' }, 2),
						]
					},
					'P': {
						type: 1,
						x: 520,
						y: 336,
						distance: 6,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':30,'Hard 3':20},
							2: {'Medium 1':50,'Medium 2':30,'Medium 3':20},
							1: {'Easy 1':30,'Easy 2':25,'Easy 3':15,'Easy 4':15,'Easy 5':15},
							4: {'Casual 1':50,'Casual 2':30,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'Q': {
						type: 1,
						x: 576,
						y: 80,
						distance: 7,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':30,'Hard 3':20},
							2: {'Medium 1':45,'Medium 2':35,'Medium 3':20},
							1: {'Easy 1':35,'Easy 2':15,'Easy 3':15,'Easy 4':10,'Easy 5':25},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						rules: [
							ChShipTypeRoutingRule(['AV'], '<=', 0, 'O'),
							ChLOSRule({ 67: 'T', 54: 'O' }, 2),
						]
					},
					'R': {
						type: 1,
						x: 581,
						y: 228,
						distance: 7,
						raid: true,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':55},
							2: {'Medium 1':45,'Medium 2':55},
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([2,3], 'U'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '<', 3, 3, 'U'),
							], 'AND', 'U'),

							ChLOSRule({ 73: 'V', 60: 'U' }, 2),
						]
					},
					'S': {
						type: 1,
						x: 587,
						y: 308,
						distance: 7,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: {'Medium 1':50,'Medium 2':30,'Medium 3':20},
							1: {'Easy 1':30,'Easy 2':10,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':60,'Casual 2':30,'Casual 3':10},
						},
						rules: [
							ChFleetTypeRule(3, 'O'),
							
							ChMultipleRulesRule([
								ChIsRouteUnlockedRule(1, 'R'),
								ChFleetTypeRule(2, 'R'),
							], 'AND', 'R', 'U'),
						]
					},
					'T': {
						type: 1,
						x: 639,
						y: 70,
						distance: 8,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':65,'Easy 2':35},
							4: {'Casual 1':65,'Casual 2':35},
						},
						end: true
					},
					'U': {
						type: 3,
						x: 670,
						y: 273,
						distance: 8,
						end: true
					},
					'V': {
						type: 1,
						x: 574,
						y: 170,
						distance: 7,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: ['E4-3','E4-1','E4-4','E4-13','E4-14','E4-16','E4-18'],
								friendFleetS: ['E4-6','E4-7','E4-11','E4-20'],
							},
							2: {
								friendFleet: ['E4-17','E4-2','E4-5','E4-9','E4-10','E4-15','E4-19'],
								friendFleetS: ['E4-8','E4-12','E4-21','E4-22'],
							},
						},
						bonuses: [
							new ChWholeFleetBonuses({ type: "add", requireUnlock: 1, friendFleetOnly: true }, '1.15'),
							new ChShipIdsBonuses({ type: "add", friendFleetOnly: true }, 'event.historical.E4_4', '1.15'),
							new ChShipIdsBonuses({ type: "add", friendFleetOnly: true }, 'event.historical.E4_3', '1.2'),
							new ChShipIdsBonuses({ type: "add", friendFleetOnly: true }, 'event.historical.E4_2', '1.25'),
							new ChShipIdsBonuses({ type: "add", friendFleetOnly: true }, 'event.historical.E4_1', '1.3'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 364,
						y: 240,
						distance: 3,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':45,'Casual 2':35,'Casual 3':10,'Casual 4':10},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 2, 'X'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'X'),

								ChCreateCustomRuleFromName("44_4_2")
							], 'AND', 'X', 'K'),
						]
					},
					'X': {
						type: 1,
						x: 409,
						y: 217,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':35,'Medium 2':30,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':30,'Easy 4':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 1, 'K'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 3, 'K'),

								ChCreateCustomRuleFromName("44_4_3")
							], 'AND', 'K', 'Y'),
						]
					},
					'Y': {
						type: 1,
						x: 484,
						y: 230,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':65},
							2: {'Medium 1':35,'Medium 2':65},
							1: {'Easy 1':35,'Easy 2':65},
							4: {'Casual 1':55,'Casual 2':45},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChSpeedRule('>=', 10, 'O', 'S'),
						]
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Beyond the Surging Sea...',
				fleetTypes: [1,2,3],
				bgmMap: 137,
				bgmDN: 136,
				bgmNN: 136,
				bgmDB: 138,
				bgmNB: 138,
				bossnode: [17,26],
				checkLock: [5,3,1,4,6],
				giveLock: 10,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 3200 },
							2: { 1: 2800 },
							1: { 1: 2400 },
							4: { 1: 2400 },
						},
						finalhp: {
							3: 800,
							2: 700,
							1: 600,
							4: 600,
						},
					},
					2: {
						currentBoss: 'Z',
						maphp: {
							3: { 1: 4800 },
							2: { 1: 4650 },
							1: { 1: 4500 },
							4: { 1: 4500 },
						},
						finalhp: {
							3: 960,
							2: 930,
							1: 900,
							4: 900,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 5, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '5_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 5, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'E', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AP', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'F', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
							{ node: 'G', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'S', type: 'ReachNode', timesRequiredPerDiff: { 4:1 } },
							{ node: 'V', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'B', 2:'B', 3:'B' } },
							{ node: 'X', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
						], {
							partToUnlock: 2
						}),
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .2, 2: .2, 1: .2, 4: .2 },
					compName: 'E',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Casual 3'],
					},
				},
				reward: { ships: [601] },
				nodes: {
					'Start': {
						type: 0,
						x: 142,
						y: 214,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1 && ships.CV + ships.CVB <= 3 && ships.aCV + ships.escort.aCV <= 4) return 'C';
							if (CHDATA.fleets.combined == 1) return 'A';
							if (CHDATA.event.maps[5].routes.indexOf(2) != -1) return 'D';
							return 'B';
						},
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule(1, 'C'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 3, 'C'),
								ChShipTypeRoutingRule(['aCV'], '<=', 4, 'C'),
							], 'AND', 'C'),
							
							ChFleetTypeRule(1, 'A'),

							ChIsRouteUnlockedRule(2, 'D', 'B'),
						]
					},
					'A': {
						type: 1,
						x: 79,
						y: 147,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 1,
						x: 100,
						y: 267,
						distance: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':15,'Hard 3':15,'Hard 4':15,'Hard 5':35},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':25,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':25,'Easy 3':20,'Easy 4':15,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':15,'Casual 4':15},
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 188,
						y: 110,
						distance: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':15,'Hard 3':15,'Hard 4':15,'Hard 5':35},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':25,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':25,'Easy 3':20,'Easy 4':15,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':15,'Casual 4':15},
						},
						rules: [
							ChShipTypeRoutingRule(['AV'], '>', 0, 'G'),
							
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'H'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'H'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'H'),
							], 'AND', 'H', 'F'),
						]
					},
					'D': {
						type: 3,
						x: 190,
						y: 304,
						distance: 2,
						rules: [
							ChSelectRouteRule(['E','H']),
						]
					},
					'E': {
						type: 1,
						x: 258,
						y: 330,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':40,'Easy 2':60},
							4: {'Casual 1':40,'Casual 2':60},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('J3')
						],
						endRules: [
							ChIsRouteNotUnlockedRule(2, true),
						],
						endRules: [
							ChMapPartRuleOld('=', 1, true),
						],
					},
					'F': {
						type: 1,
						x: 295,
						y: 146,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 3':55,'Hard 2':45},
							2: {'Medium 3':55,'Medium 2':45},
							1: {'Easy 1':40,'Easy 2':40,'Easy 4':20},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 3','Easy 4'],
							4: ['Casual 3'],
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 3, 'H'),
							ChRandomRule({ 'H': .5, 'I': .5 }),
						]
					},
					'G': {
						type: 1,
						x: 298,
						y: 72,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 3':55,'Hard 2':45},
							2: {'Medium 1':45,'Medium 2':55},
							1: {'Easy 1':45,'Easy 2':35,'Easy 3':20},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4'],
							4: ['Casual 3'],
						},
						rules: [
							ChIsRouteUnlockedRule(2, 'J2', 'I'),
						]
					},
					'H': {
						type: 1,
						x: 319,
						y: 270,
						distance: 3,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':55},
							2: {'Medium 1':45,'Medium 2':55},
							1: {'Easy 1':35,'Easy 2':35,'Easy 3':10,'Easy 4':20},
							4: {'Casual 1':55,'Casual 2':35,'Casual 3':10},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4'],
							4: ['Casual 3'],
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'I': {
						type: 1,
						x: 383,
						y: 174,
						distance: 4,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':20,'Hard 3':20},
							2: {'Medium 1':60,'Medium 2':20,'Medium 3':20},
							1: {'Easy 1':40,'Easy 2':20,'Easy 3':10,'Easy 4':15,'Easy 5':15},
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeC: function(ships) {
							if (ships.AO + ships.escort.AO) return 'J';
							if (ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV >= 5) return 'K';
							return (Math.random() < .5)? 'J' : 'K';
						},
						rules: [
							ChShipTypeRoutingRule(['AO'], '>', 0, 'J'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'K'),
							ChRandomRule({ 'J': .5, 'K': .5 }),
						]
					},
					'J': {
						type: 3,
						x: 396,
						y: 249,
						distance: 4,
						rules: [
							ChSelectRouteRule(['K','L']),
						]
					},
					'J2': {
						type: 3,
						x: 388,
						y: 108,
						distance: 4,
						hidden: 2,
						rules: [
							ChSelectRouteRule(['K','M']),
						]
					},
					'J3': {
						type: 3,
						x: 414,
						y: 302,
						distance: 5,
						hidden: 2,
						rules: [
							ChSelectRouteRule(['J','N']),
						]
					},
					'K': {
						type: 1,
						x: 428,
						y: 189,
						distance: 5,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':35,'Easy 2':35,'Easy 3':10,'Easy 4':20},
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							// --- Unlock 1 not done : 
							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(1, 'Q'),
								ChLOSRule({ 40: 'Q', 37: 'M' }),
							),

							// --- Unlock 1 done :
							ChShipTypeRoutingRule(['AV', 'AO'], '>', 0, 'M'),
							ChLOSRule({ 100: 'Q', 60: 'M' }),
						]
					},
					'L': {
						type: 1,
						x: 438,
						y: 239,
						distance: 5,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':25,'Easy 4':10},
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: {'Easy 1':60,'Easy 4':40},
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						rules: [
							// --- Unlock 1 not done : 
							ChIfThenElseRule(
								ChIsRouteNotUnlockedRule(1, 'Q'),
								ChLOSRule({ 40: 'Q', 36: 'N' }),
							),

							// --- Unlock 1 done :
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AV', 'AO'], '>', 0, 'N'),
								ChFleetTypeRule(3, 'N'),
								ChLOSRule({ 37: 'N', 30: '' }),
							], 'AND', 'N'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AV', 'AO'], '>', 0, 'N'),
								ChFleetTypeRule([1,2], 'N'),
								ChLOSRule({ 77: 'N', 60: 'Q', 47: 'N' }),
							], 'AND', 'N'),
							
							ChLOSRule({ 30: 'Q', 20: 'N' }),
						]
					},
					'M': {
						type: 1,
						x: 457,
						y: 136,
						distance: 5,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':20,'Hard 4':20},
							2: {'Medium 1':50,'Medium 2':20,'Medium 3':30},
							1: {'Easy 1':25,'Easy 2':35,'Easy 3':10,'Easy 4':20,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						compDiffF: {
							3: {'Hard 2':40,'Hard 4':60},
							2: ['Medium 3'],
							1: {'Easy 1':25,'Easy 2':35,'Easy 3':10,'Easy 4':20,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'O')),
							ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 3, 'W', 'R'),
						]
					},
					'N': {
						type: 1,
						x: 486,
						y: 288,
						distance: 6,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':30,'Hard 3':25,'Hard 4':20},
							2: {'Medium 1':50,'Medium 2':20,'Medium 3':30},
							1: {'Easy 1':25,'Easy 2':35,'Easy 3':10,'Easy 4':20,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						compDiffF: {
							3: {'Hard 2':48,'Hard 4':52},
							2: ['Medium 3'],
							1: {'Easy 1':25,'Easy 2':35,'Easy 3':10,'Easy 4':20,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						rules: [
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'P')),
							ChDefaultRouteRule('S'),
						]
					},
					'O': {
						type: 3,
						x: 488,
						y: 80,
						distance: 6,
						end: true
					},
					'P': {
						type: 3,
						x: 522,
						y: 326,
						distance: 7,
						end: true
					},
					'Q': {
						type: 1,
						x: 517,
						y: 218,
						distance: 6,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, [562,596,440,433,397,601], '1.25'),
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, [561], '1.3'),
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, 'event.historical.E4_4', '1.1'),
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, 'event.historical.E4_3', '1.2'),
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, 'event.historical.E4_2', '1.1'),
							new ChShipIdsBonuses({ type: "set", excludeFF: true }, 'event.historical.E4_1', '1.25'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'R': {
						type: 1,
						x: 538,
						y: 168,
						distance: 6,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'S': {
						type: 1,
						x: 545,
						y: 276,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':45},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':65,'Casual 2':35},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChFleetTypeRule(3, 'V', 'T'),
						]
					},
					'T': {
						type: 3,
						x: 584,
						y: 229,
						distance: 7,
						hidden: 1,
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', { 4:1, 1:2, 2:4, 3:6 }, { 4:1, 1:2, 2:4, 3:6 }, 'X', 'U'),
						]
					},
					'U': {
						type: 1,
						x: 601,
						y: 171,
						distance: 7,
						hidden: 1,
						ambush: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':45,'Hard 3':30},
							2: {'Medium 1':25,'Medium 2':20,'Medium 3':45,'Medium 4':10},
							1: {'Easy 1':45,'Easy 2':30,'Easy 3':15,'Easy 4':10},
							4: {'Casual 1':45,'Casual 2':30,'Casual 3':25},
						},
						compDiffF: {
							3: ['Hard 4'],
							2: ['Medium 4'],
							1: ['Easy 4'],
							4: {'Casual 1':45,'Casual 2':30,'Casual 3':25},
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'V': {
						type: 1,
						x: 610,
						y: 303,
						distance: 7,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':65,'Hard 2':35},
							2: {'Medium 1':65,'Medium 2':35},
							1: {'Easy 2':40,'Easy 3':60},
							4: {'Casual 2':65,'Casual 3':35},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 1'],
							4:  {'Casual 1':35,'Casual 3':65},
						},
						rules: [
							ChShowLOSPlane(ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', { 4:0, 1:0, 2:4, 3:5 }, { 4:0, 1:0, 2:4, 3:5 }, 'Z')),

							ChDefaultRouteRule('Z1')
						]
					},
					'W': {
						type: 1,
						x: 612,
						y: 90,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':40,'Easy 2':60},
							4: {'Casual 1':55,'Casual 2':45},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 3'],
						},
						rules: [
							ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', { 4:1, 1:2, 2:4, 3:6 }, { 4:1, 1:2, 2:4, 3:6 }, 'X', 'Y')
						]
					},
					'X': {
						type: 1,
						x: 639,
						y: 165,
						distance: 8,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 2':40,'Easy 3':60},
							4: {'Casual 2':65,'Casual 3':35},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 1'],
							4: {'Casual 1':35,'Casual 3':65},
						},
						rules: [
							ChShowLOSPlane(ChEquipTypeRule({
								equipTypes: [RADARS, RADARL, RADARXL],
								LOS: 5,
							}, '>=', { 4:0, 1:0, 2:4, 3:5 }, { 4:0, 1:0, 2:4, 3:5 }, 'Z')),

							ChDefaultRouteRule('Z2')
						]
					},
					'Y': {
						type: 1,
						x: 648,
						y: 106,
						distance: 8,
						hidden: 1,
						ambush: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':45,'Hard 3':30},
							2: {'Medium 1':25,'Medium 2':20,'Medium 3':45,'Medium 4':10},
							1: {'Easy 1':45,'Easy 2':30,'Easy 3':15,'Easy 4':10},
							4: {'Casual 1':45,'Casual 2':30,'Casual 3':25},
						},
						compDiffF: {
							3: ['Hard 4'],
							2: ['Medium 4'],
							1: ['Easy 4'],
							4: {'Casual 1':45,'Casual 2':30,'Casual 3':25},
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'Z': {
						type: 1,
						x: 628,
						y: 254,
						distance: 7,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: null,
								friendFleetS: null,
							},
							2: {
								friendFleet: ['E5-10','E5-3','E5-4','E5-6','E5-7','E5-11'],
								friendFleetS: ['E5-1','E5-2','E5-5','E5-8','E5-9'],
							},
						},
						bonuses: [
							// --- Type bonus
							new ChShipTypeBonuses({ type: 'add', requireUnlock: 2 }, ['DD'], 1.3),
							new ChShipTypeBonuses({ type: 'add', requireUnlock: 2 }, ['CL'], 1.2),
							new ChShipTypeBonuses({ type: 'add', requireUnlock: 2 }, ['CLT'], 1.2),
							new ChShipWithoutBonusesBonuses({ type: 'add', requireUnlock: 2 }, 1.05),

							// --- Base bonuses
							new ChShipIdsBonuses({ type: "add" }, 'event.historical.E4_4', '1.1'),
							new ChShipIdsBonuses({ type: "add" }, 'event.historical.E4_3', '1.2'),
							new ChShipIdsBonuses({ type: "add" }, 'event.historical.E4_2', '1.1'),
							new ChShipIdsBonuses({ type: "add" }, 'event.historical.E4_1', '1.25'),
							new ChShipIdsBonuses({ type: "add" }, [561], '1.3'),
							new ChShipIdsBonuses({ type: "add" }, [562,596,440,433,397,601], '1.25'),
							
							// --- Unlock 2 bonuses
							new ChShipIdsBonuses({ type: "set", requireUnlock: 2 }, [561,562,596], '1.75'),
							new ChShipIdsBonuses({ type: "set", requireUnlock: 2 }, [440,601], '1.38'),
							new ChShipIdsBonuses({ type: "set", requireUnlock: 2 }, [433,549], '1.35'),
						],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'Z1': {
						type: 3,
						x: 666,
						y: 326,
						distance: 8,
						hidden: 1,
						end: true
					},
					'Z2': {
						type: 3,
						x: 683,
						y: 158,
						distance: 8,
						hidden: 1,
						end: true
					},
				}
			}
		}
	}
}

function getMapHP(worldnum,mapnum,diff,part) {
	if (!CHDATA.event) return undefined;
	if (!diff) return undefined;
	var mdata;
	if (part) {
		mdata = MAPDATA[worldnum].maps[mapnum].parts[part];
	} else {
		mdata = MAPDATA[worldnum].maps[mapnum];
	}
	var hqtiers = Object.keys(mdata.maphp[diff]);
	var hqtier = 0;
	for (var i=0; i<hqtiers.length; i++) {
		if (CHDATA.player.level >= hqtiers[i] && hqtier < hqtiers[i]) hqtier = hqtiers[i];
	}
	return mdata.maphp[diff][hqtier];
}
function isShipInList(ships,basemid) {
	if (!ships) return false;
	var ship = SHIPDATA[basemid];
	var done = [];
	while(ship) {
		if (ships.indexOf(basemid.toString())!=-1 || ships.indexOf(basemid) != -1) return true;
		if (!ship.next) break;
		basemid = ship.next;
		ship = SHIPDATA[ship.next];
		if (done.indexOf(basemid) != -1) break;
		done.push(basemid);
	}
	return false;
}
function mapChangePart(worldnum,mapnum,part) {
	if (!MAPDATA[worldnum].maps[mapnum].parts) return;
	for (var key in MAPDATA[worldnum].maps[mapnum].parts[part]) {
		MAPDATA[worldnum].maps[mapnum][key] = MAPDATA[worldnum].maps[mapnum].parts[part][key];
	}
	
	ChGimmickList.updateAllCustom({ node: "MapWide" });
}

function transportCalcStandard(ships,rank) {
	rank = rank || 'S';
	let tp = 0;
	const tpObj = {
		"DD": 5,
		"CL": 2,
		"CT": 6,
		"CAV": 4,
		"BBV": 7,
		"AV": 9,
		"LHA": 12,
		"AO": 15,
		"AS": 7,
		"SSV": 1,
	};
	for (let ship of ships) {
		if (!ship) continue;
		const stype = SHIPDATA[ship.masterId].type;
		if (ship.masterId === 487) tp += 8;
		if (tpObj[stype]) tp += tpObj[stype];
		for (let item of ship.items) {
			if (item <= 0) continue;
			let eq = CHDATA.gears['x'+item];
			let eqd = EQDATA[eq.masterId];
			if (eqd.type == DRUM) tp += 5;
			if (eqd.type == LANDINGCRAFT) tp += 8;
			if (eqd.type == RATION) tp += 1;
			if (eqd.type == LANDINGTANK) tp += 2;
		}
	}
	tp = Math.floor(tp);
	if (RUSH_MODE == 1) tp *= 10;
	if (rank == 'A') tp *= 0.7;
	if (rank != 'S' && rank != 'A') return 0;
	return Math.floor(tp);
}

function transportCalcFall15(ships,rank) {
	rank = rank || 'S';
	let tp = 0;
	for (let ship of ships) {
		if (!ship) continue;
		tp += 3;
		for (let item of ship.items) {
			if (item <= 0) continue;
			let eq = CHDATA.gears['x'+item];
			let eqd = EQDATA[eq.masterId];
			if (eqd.type == DRUM) tp += 3.5;
			if (eqd.type == LANDINGCRAFT) tp += 5.5;
		}
	}
	tp = Math.floor(tp);
	if (RUSH_MODE == 1) tp *= 10;
	if (rank == 'S') tp *= 1.5;
	if (rank != 'S' && rank != 'A') return 0;
	return Math.floor(tp);
}

function getBaseId(mid) {
	var ship = SHIPDATA[mid];
	while(ship) {
		if (!ship.prev) break;
		mid = ship.prev;
		ship = SHIPDATA[ship.prev];
	}
	return mid;
}

function checkHistorical(historicals,ids,numReq,diff) {
	diff = diff || CHDATA.event.maps[MAPNUM].diff;
	let num = 0;
	for (let mid of historicals) {
		if (isShipInList(ids,mid)) num++;
	}
	return num >= numReq[diff-1];
}

function checkSurfaceRadar(ships) {
	let flagship = false, num = 0;
	for (let i=0; i<ships.length; i++) {
		let ship = ships[i];
		if (ship.retreated || ship.HP <= 0) continue;
		for (let eq of ship.equips) {
			if ((eq.type == RADARS || eq.type == RADARL || eq.type == RADARXL) && eq.LOS >= 5) {
				if (i == 0) flagship = true;
				num++;
				break;
			}
		}
	}
	return { flagship: flagship, num: num };
}

function checkRoute(id) {
	return CHDATA.event.maps[MAPNUM].routes.indexOf(id) != -1;
}

function getDiff(defaultValue) {
	if (!window.CHDATA) return defaultValue;
	if (!CHDATA.event.maps[MAPNUM].diff) return defaultValue;
	return CHDATA.event.maps[MAPNUM].diff;
}

function getAllShips(includeFF) {
	let ships = (FLEETS1[1])? FLEETS1[0].ships.concat(FLEETS1[1].ships) : FLEETS1[0].ships;
	if (includeFF && CHDATA.sortie.fleetFriend) {
		ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
	}
	return ships;
}

/**
 * Returns all of the sid of all ships in the fleet
 * @returns 
 */
function getAllShipsShipIds() {
	let ships = (CHDATA.fleets.combined)? CHDATA.fleets[1].concat(CHDATA.fleets[2]) : CHDATA.fleets[1];
	
	return ships;
}

function chApplyBonus(bonuses) {
	for (let ship of getAllShips(true)) {
		let midBase = getBaseId(ship.mid);
		for (let bonus of bonuses) {
			if (bonus.types && !bonus.types.includes(ship.type)) continue;
			if (bonus.ctypes && !bonus.ctypes.includes(ship.sclass)) continue;
			if (bonus.idsBase && !bonus.idsBase.includes(midBase)) continue;
			if (bonus.idsExact && !bonus.idsExact.includes(ship.mid)) continue;
			
			if (bonus.typesExclude && bonus.typesExclude.includes(ship.type)) continue;
			if (bonus.ctypesExclude && bonus.ctypesExclude.includes(ship.sclass)) continue;
			if (bonus.idsBaseExclude && bonus.idsBaseExclude.includes(midBase)) continue;
			if (bonus.idsExactExclude && bonus.idsExactExclude.includes(ship.mid)) continue;
			
			let slots = [];
			if (bonus.reqEquipTypes) {
				for (let i=0; i<ship.equips.length; i++) {
					if (bonus.reqEquipTypes.includes(ship.equips[i].type)) slots.push(i);
				}
				if (slots.length < (bonus.reqEquipTypesNum || 1)) continue;
			} else if (bonus.reqEquipIds) {
				for (let i=0; i<ship.equips.length; i++) {
					if (bonus.reqEquipIds.includes(ship.equips[i].mid)) slots.push(i);
				}
				if (slots.length < (bonus.reqEquipIdsNum || 1)) continue;
			}
			
			for (let keys of [['dmg','bonusSpecial'],['acc','bonusSpecialAcc'],['ev','bonusSpecialEv']]) {
				let keyBonus = keys[0], keyShip = keys[1];
				if (bonus[keyBonus]) {
					if (bonus[keyBonus] == -1) {
						ship[keyShip] = null;
						continue;
					}
					if (!ship[keyShip]) ship[keyShip] = [];
					let n = bonus.multiple ? (slots.length || 1) : 1;
					for (let i=0; i<n; i++) {
						let obj = { mod: bonus[keyBonus] };
						if (bonus.on) obj.on = bonus.on;
						if (bonus.reqSlot && i < slots.length) obj.requireSlot = slots[i];
						ship[keyShip].push(obj);
					}
				}
			}
		}
	}
}

function chResetBonus() {
	for (let ship of getAllShips(true)) {
		ship.bonusSpecial = ship.bonusSpecialAcc = ship.bonusSpecialEv = null;
	}
}

function chCheckLockSpStandard(errors,lock,messageByLock,hardOnly) {
	if (getDiff() == 1 || getDiff() == 4 || (hardOnly && getDiff() == 2) || CHDATA.config.disablelock) return;
	let allSame = true, lockCheck = lock;
	let num = CHDATA.fleets.combined ? 2 : 1;
	for (let n=1; n<=num; n++) {
		for (let sid of CHDATA.fleets[n]) {
			if (sid && CHDATA.ships[sid].lock) {
				if (!lockCheck) lockCheck = CHDATA.ships[sid].lock;
				if (lockCheck != CHDATA.ships[sid].lock) { allSame = false; break; }
			}
		}
	}
	if (!allSame) {
		errors.push(messageByLock[lock]);
	}
}

function chCheckLocks(locks,hardOnly,ignoreException) {
	if (!ignoreException && (getDiff() == 1 || getDiff() == 4 || (hardOnly && getDiff() == 2) || CHDATA.config.disablelock)) return true;
	let allSame = true;
	let num = CHDATA.fleets.combined ? 2 : 1;
	for (let n=1; n<=num; n++) {
		for (let sid of CHDATA.fleets[n]) {
			if (sid && CHDATA.ships[sid].lock) {
				if (!locks.includes(CHDATA.ships[sid].lock)) { return false; }
			}
		}
	}
	return true;
}

function chCheckLoSStandard(valsByDiff,mod) {
	let vals = valsByDiff[getDiff()];
	mod = mod || (CHDATA.fleets.combined ? 2 : 4);
	let los = getELoS33(1,mod) + (CHDATA.fleets.combined ? getELoS33(2,mod) : 0);
	return checkELoS33(los,vals);
}
