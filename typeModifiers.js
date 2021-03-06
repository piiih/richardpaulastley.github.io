var TYPES = {
	"Fire" : {
		"Fire" : .5,
		"Water" : .5,
		"Grass" : 2,
		"Electric" : 1,
		"Ice" : 2,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : .5,
		"Bug" : 2,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : .5
	},
	"Water" : {
		"Fire" : 2,
		"Water" : .5,
		"Grass" : .5,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : 2,
		"Rock" : 2,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : .5
	},
	"Grass" : {
		"Fire" : .5,
		"Water" : 2,
		"Grass" : .5,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : .5,
		"Ground" : 2,
		"Rock" : 2,
		"Bug" : .5,
		"Poison" : .5,
		"Ghost" : 1,
		"Dragon" : .5
	},
	"Electric" : {
		"Fire" : 1,
		"Water" : 2,
		"Grass" : .5,
		"Electric" : .5,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 2,
		"Ground" : .25,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : .5
	},
	"Ice" : {
		"Fire" : .5,
		"Water" : .5,
		"Grass" : 2,
		"Electric" : 1,
		"Ice" : .5,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 2,
		"Ground" : 2,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : 2
	},
	"Psychic" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : .5,
		"Normal" : 1,
		"Fighting" : 2,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 2,
		"Ghost" : 1,
		"Dragon" : 1
	},
	"Normal" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : .5,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : .25,
		"Dragon" : 1
	},
	"Fighting" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 2,
		"Psychic" : .5,
		"Normal" : 2,
		"Fighting" : 1,
		"Flying" : .5,
		"Ground" : 1,
		"Rock" : 2,
		"Bug" : .5,
		"Poison" : .5,
		"Ghost" : .25,
		"Dragon" : 1
	},
	"Flying" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 2,
		"Electric" : .5,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 2,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : .5,
		"Bug" : 2,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : 1
	},
	"Ground" : {
		"Fire" : 2,
		"Water" : 1,
		"Grass" : .5,
		"Electric" : 2,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : .25,
		"Ground" : 1,
		"Rock" : .5,
		"Bug" : 2,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : 1
	},
	"Rock" : {
		"Fire" : 2,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 2,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : .5,
		"Flying" : 2,
		"Ground" : .5,
		"Rock" : 1,
		"Bug" : 2,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : 1
	},
	"Bug" : {
		"Fire" : .5,
		"Water" : 1,
		"Grass" : 2,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 2,
		"Normal" : 1,
		"Fighting" : .5,
		"Flying" : .5,
		"Ground" : 1,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 2,
		"Ghost" : 1,
		"Dragon" : 1
	},
	"Poison" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 2,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : .5,
		"Rock" : .5,
		"Bug" : 2,
		"Poison" : .5,
		"Ghost" : .5,
		"Dragon" : 1
	},
	"Ghost" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 2,
		"Normal" : .25,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : 2,
		"Dragon" : 1
	},
	"Dragon" : {
		"Fire" : 1,
		"Water" : 1,
		"Grass" : 1,
		"Electric" : 1,
		"Ice" : 1,
		"Psychic" : 1,
		"Normal" : 1,
		"Fighting" : 1,
		"Flying" : 1,
		"Ground" : 1,
		"Rock" : 1,
		"Bug" : 1,
		"Poison" : 1,
		"Ghost" : 1,
		"Dragon" : 2
	}
}
