var Class = function() {
	var klass = function() {
		this.init.apply(this, arguments);
	};

	// short cut for prototype
	klass.fn = klass.prototype;

	klass.fn.init = function() {
	};

	klass.extend = function(object) {
		var i;
		for (i in object) {
			if (object.hasOwnProperty(i)) {
				klass[i] = object[i];
			}
		}
	};

	klass.include = function(object) {
		var i;
		for (i in object) {
			if (object.hasOwnProperty(i)) {
				klass.fn[i] = object[i];
			}
		}
	};

	return klass;
};
