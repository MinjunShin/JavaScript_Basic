let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

// function solution(lottos, win_nums) {
//   var answer = [];
//   let sorted_lottos = lottos.sort();
//   let sorted_win_nums = win_nums.sort();

//   return answer;
// }

let sorted_lottos = lottos.sort(function(a,b) {return a - b});
let sorted_win_nums = win_nums.sort(function(a,b) {return a - b});

console.log(sorted_win_nums);
console.log(sorted_lottos);
