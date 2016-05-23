exports.commands = {
afk: function (target, room, user) {
		if (!target) {
			this.parse('/away AFK');
		} else {
			this.parse('/away ' + target);
		}
	},
	busy: function (target, room, user) {
		this.parse('/away BUSY');
	},
    working: 'work',
	work: function (target, room, user) {
		this.parse('/away WORK');
	},
	eat: 'eating',
	eating: function (target, room, user) {
		this.parse('/away EATING');
	},
	gaming: function (target, room, user) {
		this.parse('/away GAMING');
	},
    sleeping: 'sleep',
	sleep: function (target, room, user) {
		this.parse('/away SLEEP');
	},
	coding: function(target, room, user) {
	    this.parse('/away CODING');
	},
        happy: function(target, room, user) {
            this.parse('/away HAPPY');
        },
};
