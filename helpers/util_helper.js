'use strict'

var util_helper = () => {}

util_helper.__getText = (value) => {
	let regex  = /(<([^>]+)>)/ig,
	    result = null;
	if(value != '') {
		value = value.trim();
        result = value.replace(regex, '');
	}
    return result;
}

module.exports = util_helper;

