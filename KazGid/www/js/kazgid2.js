/**
 * Decodes section 0 of the KN15 code.
 * @param data Array with 5 characters data.
 */
function decodeSection0(data) {
	if (data.length !== 2 && data.length !== 3) {
		throw new Error("Please pass array which consists from 2 or 3, 5 character code sequences.");
	}
	
	if (data.length === 3) {
		throw new Error("The information about hydorlogic post is not supported.");
	}
	
	var n = parseInt(data[1].substring(4, 5));
	var term = parseInt(data[1].substring(2, 4));
	return {
		riverBasin: data[0].substring(0, 2),
		postNo: data[0].substring(2, 5),
		day: parseInt(data[1].substring(0, 2)),
		term: term,
		n: n,
		hasSection1: n === 1 || n === 2 || (n === 3 && term !== 8),
		hasOtherSections: (n === 2 && term === 8) || (n === 4 && term === 8) || (n === 5 && term === 8), 
		hasSection7: n === 7
	}
    
}
console.log("Decode Section 0: 14352 19081");
console.log(decodeSection0(['14352', '19081']));

function decodeSection1(data1) {
    if (data1.length !== 2 && data.length !== 3) {
		throw new Error("Please pass array which consists from 2 or 3, 5 character code sequences.");
	}
	
	if (data1.length === 3) {
		throw new Error("The information about hydorlogic level of water is not supported.");
	}
		var d = parseInt(data1[1].substring(4, 5));
	var term1 = parseInt(data1[1].substring(2, 4));
	return {
		h8: data1[0].substring(0, 2),
		: data[0].substring(2, 5),
		day: parseInt(data[1].substring(0, 2)),
		term: term,
		n: n,
		hasSection1: n === 1 || n === 2 || (n === 3 && term !== 8),
		hasOtherSections: (n === 2 && term === 8) || (n === 4 && term === 8) || (n === 5 && term === 8), 
		hasSection7: n === 7
	}
}
    