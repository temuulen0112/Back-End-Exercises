// var str = "aaaaewewsdeomdifcmod";
// const a = str.replace(new RegExp("[Aa]"), 's');
// console.log('old' + str);
// console.log("new: " + a);



// let word = 'something102asdfkj1948948';
// let numbers = '';
// for(let i = 0; i<word.length; i++) {
//     if(!isNaN(word.charAt(i))) {
//         numbers += word.charAt(i)
//     }
// }
// console.log(word);
// console.log(numbers);



let word = 'something102asdfkj1948948';
let pattern = /\d+/g;

word.match(pattern);
// /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/gm