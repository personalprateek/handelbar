var _ = require('lodash');
var reason_list = [{ name: 'Arc spray', duration: 0, machine: '' },
    { name: 'Coc', duration: 0, machine: '' },
    { name: 'Coil Joint', duration: 0, machine: '' },
    { name: 'Compressor Issues', duration: 0, machine: '' },
    { name: 'Crane Busy', duration: 0, machine: '' },
    { name: 'Electrical Issues', duration: 0, machine: '' },
    { name: 'Holiday', duration: 0, machine: '' },
    { name: 'Impedor Issues', duration: 0, machine: '' },
    { name: 'Lunch', duration: 0, machine: '' },
    { name: 'Mechanical Issues', duration: 0, machine: '' },
    { name: 'Mill Crash', duration: 0, machine: '' },
    { name: 'No Man Power', duration: 0, machine: '' },
    { name: 'No Planning', duration: 0, machine: '' },
    { name: 'No Raw Material', duration: 0, machine: '' },
    { name: 'Power Cut', duration: 0, machine: '' },
    { name: 'Quality Issues', duration: 0, machine: '' },
    { name: 'Roll Marking', duration: 0, machine: '' },
    { name: 'Settings', duration: 0, machine: '' },
    { name: 'Sizzing Correction', duration: 0, machine: '' },
    { name: 'Tool Post Issue', duration: 0, machine: '' },
    { name: 'Work Coil Short', duration: 0, machine: '' }
];

var rawData = [{ name: '-', duration: null, machine: 'M3' },
    { name: 'Arc spray', duration: 108998, machine: 'M1' },
    { name: 'Coc', duration: 3548, machine: 'M1' },
    { name: 'Coil Joint', duration: 4278, machine: 'M2' },
    { name: 'Crane Busy', duration: 4850, machine: 'M2' },
    { name: 'Electrical Issues', duration: 8054, machine: 'M2' },
    { name: 'Holiday', duration: null, machine: 'M2' },
    { name: 'Lunch', duration: 206, machine: 'M2' },
    { name: 'Mill Crash', duration: 5330, machine: 'M1' },
    { name: 'No Raw Material', duration: 596, machine: 'M2' },
    { name: 'Power Cut', duration: 26545, machine: 'M1' },
    { name: 'Quality Issues', duration: null, machine: 'M2' },
    { name: 'Roll Marking', duration: 3492, machine: 'M2' },
    { name: 'Settings', duration: 3812, machine: 'M1' },
    { name: 'Sizzing Correction', duration: 102274, machine: 'M1' }
];


var myNewObj = [];
var newArray = [];
var testArray = [];
transformData();

function callOtherFunction(newArray, diff) {

    myNewObj = _.concat(newArray, diff);
    console.log(myNewObj);
}

function transformData() {
    // console.log('Transform');
    var machineKeyValue = _.uniq(_.map(rawData, 'machine'));
    // console.log(machineKeyValue);
    var arraycount = 0;
    for (var item in machineKeyValue) {
        //    console.log('diff: ', machineKeyValue[item]);
        // console.log(machineKeyValue[item]);
        var newArray = _.filter(rawData, { 'machine': machineKeyValue[item] });
        //myNewObj[machineKeyValue[item]].push(_.filter(rawData, { 'machine': machineKeyValue[item] }));
        var diff = _.differenceBy(reason_list, _.filter(rawData, { 'machine': machineKeyValue[item] }), 'name');
        // callOtherFunction(newArray, diff);
        // console.log(test);
        // var tmp = _.concat(newArray, diff);
        // console.log(tmp[0]);
        // testArray.push(_.filter(tmp, function(val) {
        //     return val;
        // }));
        //  testArray[arraycount] = tmp;
        // arraycount += 1;
        //console.log(tmp);
        // testArray.push(tmp, function(val) {
        //     return val;
        // });


    }
    console.log(testArray);

    // for(var key in rawData){

    // }
    // _.forEach(rawData, function(obj) {
    //     // console.log('Values');
    //     var machineKeyValue = _.map(obj,'machine');
    //     console.log(machineKeyValue);
    //     // for (var key in obj) {
    //     //     if (key === 'machine') {
    //     //         var newValue = _.filter(obj, { 'machine': obj[key] });
    //     //         console.log(newValue);
    //     //     }

    //     // }

    //     //console.log(val);
    // })
}

// var grpByData = _.groupBy(rawData, 'machine');
// var reasonArr = _.map(reason_list, 'name');
// //console.log(m1ReasonList);

// _.forEach(grpByData, function(val, key) {
//     var diff = _.differenceBy(reason_list, val, 'name');
//     // console.log(key);
//     // console.log(diff);
//     _.forEach(diff, function(v, k) {
//         val.push(v);
//     });
//     // console.log(key,val);
// });

// var newObject = {};
// _.forEach(grpByData, function(val, key) {
//     //console.log('====================' + key + '==================================');
//     // console.log(filterValue(val, key));
//     // newObject[key] = [];
//     // newObject[key].push(val, key);
//     // console.log('======================================================');
//     // setM(val, key);
//     // console.log(key, val);
//     _.forEach(_.filter(val, ['machine', '']), function(v) {
//         v.machine = key;

//     });
//     console.log(grpByData);

// });

// function setM(arr, mKey) {
//     var myObj = {};
//     myObj[mKey] = [];
//     console.log(_.filter(arr, ['machine', '']).length);
//     _.forEach(arr, function(val) {
//         if (val.machine == '') {
//             val.machine = mKey;
//         }
//     });
//     myObj[mKey].push(arr);
//     console.log(myObj);
// }

// function filterValue(val) {
//     return setMachineNumber(_.filter(val, ['machine', '']));
//     //return _.filter(val, ['machine', '']);
// }

// function setMachineNumber(obj, mKey) {
//     //console.log('====================' + mKey + '==================================');
//     _.forEach(obj, function(val) {
//         if (val.machine === '') {
//             val.machine = mKey;
//         }
//     });
//     // console.log(obj);
//     return obj;

// }

//var machine1 = _.map(grpByData,)

//console.log(grpByData);

//console.log(grpByData);

//console.log(_.map(reason_list, 'name'));
