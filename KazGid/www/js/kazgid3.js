function splitCode(data){
    var mass=[];
    var post=data.substring(0,5);
    var data1=data.substring(5,10);
    var LevelOfWaterAt8=data.substring(10,15);
    var changes=data.substring(15,20);
    var LevelOfWaterAt20=data.substring(20,25);
    var temperatures=data.substring(25,30);
   
     if(data.length>30)
    {
     var intensity=data.substring(30,35);
     return mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures,intensity] ;
    }
     return mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures];}

console.log("Array length", splitCode('123456789012345678901234567890').length); 
console.log("Array length", splitCode('12345678901234567890123456789000000').length);

console.log(splitCode('12345678901234567890123456789000000'));
console.log(splitCode('123456789012345678901234567890'));

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
    IdForH8: data.substring(0, 1),
    H8: data.substring(2, 5)
    }

}
    
function decodeGroup12(data){
    var n1 = parseInt(data.substring(4, 5));
 
    var Change = parseInt(data.substring(2, 4));
    return {
    IdForHCha: parseInt(data.substring(0, 1)),
    Change: Change,
    n1: n1,
    hasSection1: n1 === 1 || n1 === 2 
    } 
}

function decodeGroup13(data){
    return {
    IdForH20: data.substring(0,1),
    H20:data.substring(2,5),}}
    
function decodeGroup14(data){
    return{
    WaterAndAirTid: data.substring(0,1),
    TempOfWater:data.substring(1,2),
    TempOfAir:data.substring(4,5),
    }
}

function decodeGroup16 (data){
    return{
    TheStateOfThePondId:data.substring(0,1),
    TheStateOfThePond:data.substring(1,5),

    }
        
}
 
console.log('decode 10369 20102 30368 44003');

console.log(decodeGroup11('10221'));

console.log(decodeGroup12('20022'));

console.log(decodeGroup13('30223'));

console.log(decodeGroup14('47615'));

console.log(decodeGroup16('60000'));


console.log('decode 10221 20022 30223 47615');

function decodeSection1(data) {
    
    var group1 = decodeGroup11(data[0]);
    var group2 = decodeGroup12(data[1]);
    var group3 = decodeGroup13(data[2]);
    var group4 = decodeGroup14(data[3]);
    
    if(data.length>4)
    {
    var group6 = decodeGroup16(data[4]);
    }
    else
    {
    var group6 = {TheStateOfThePondId:'6',TheStateOfThePond:null}
    }
    
    return {
    IdForH8: group1.IdForH8,
    H8: group1.H8,
    
    IdForHCha: group2.IdForHCha,
    Change: group2.Change,
    n1: group2.n1,
    hasSection1: group2.hasSection1 ,
    
    IdForH20: group3.IdForH20,
    H20:group3.H20,
     
    WaterAndAirTid: group4.WaterAndAirTid,
    TempOfWater: group4.TempOfWater,
    TempOfAir:group4.TempOfAir,
    
    TheStateOfThePondId: group6.TheStateOfThePondId,
    TheStateOfThePond: group6.TheStateOfThePond,
}
 }
console.log(decodeSection1(['10221', '20022', '30223', '47615','60000']));
console.log(decodeSection1(['10369', '20102', '30368', '44003']));
console.log(decodeSection1(['10221', '20022', '30223', '47615']));

