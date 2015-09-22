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
console.log("Decode Section 0: 14382 19081");
console.log(decodeSection0(['14382', '19081']));



  
function decodeGroup11(data){
  
    return {
        idforH8: data[0].substring(0, 1),
		H8: data[0].substring(2, 5)}
}
    
    function decodeGroup12(data){
        var n1 = parseInt(data[0].substring(4, 5));
        var change = parseInt(data[0].substring(2, 4));
    return {
        idforCha: parseInt(data[0].substring(0, 1)),
		change: change,
		n1: n1,
        hasSection1: n1 === 1 || n1 === 2 }
    }
    
     function decodeGroup13(data){
return {
        idforH20: data[0].substring(0,1),
        H20:data[0].substring(2,5),}
    }
    
	function decodeGroup14(data){
        return{
	    WaterAndAirTid: data[0].substring(0,1),
        tt:data[0].substring(1,2),
        TT:data[0].substring(4,5),
}
 }
console.log('decode 10369 20102 30368 44003');

console.log(decodeGroup11(['10369']));


console.log(decodeGroup12(['20102']));


console.log(decodeGroup13(['30368']));


console.log(decodeGroup14(['44003']));