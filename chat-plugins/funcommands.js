exports.commands = {
        s: 'spank',
	spank: function(target, room, user) {
		if (!target) return this.sendReply('/spank needs a target.');
		return this.parse('/me spanks ' + target + '!');
	},
	punt: function(target, room, user) {
		if (!target) return this.sendReply('/punt needs a target.');
		return this.parse('/me punts ' + target + ' to the moon!');
	},
	crai: 'cry',
	cry: function(target, room, user) {
		return this.parse('/me starts tearbending dramatically like Katara~!');
	},
	dk: 'dropkick',
	dropkick: function(target, room, user) {
		if (!target) return this.sendReply('/dropkick needs a target.');
		return this.parse('/me dropkicks ' + target + ' across the Pok\u00E9mon Stadium!');
	},
	fart: function(target, room, user) {
		if (!target) return this.sendReply('/fart needs a target.');
		return this.parse('/me farts on ' + target + '\'s face!');
	},
	poke: function(target, room, user) {
		if (!target) return this.sendReply('/poke needs a target.');
		return this.parse('/me pokes ' + target + '.');
	},
	pet: function(target, room, user) {
		if (!target) return this.sendReply('/pet needs a target.');
		return this.parse('/me pets ' + target + ' lavishly.');
	},
};
