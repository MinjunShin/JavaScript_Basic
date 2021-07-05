let lottos = 	[45, 4, 35, 20, 3, 9];
let win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  var answer = [];
  let sorted_lottos = lottos.sort(function(a,b) {return a - b});
  let sorted_win_nums = win_nums.sort(function(a,b) {return a - b});
  let count_gotcha = 0;
  let count_fail = 0;
  let count_random = 0;
  let max_prize = 0;
  let minimum_prize = 0;
 
  //내 로또 번호와 당첨 번호를 각각 요소별로 비교하여 같은 갯수만큼 count를 반환한다.
  //내 로또 번호가 '0 : 알 수 없음' 이면, 비교하지 않는다.
  sorted_lottos.forEach(function (element){
    for(let i = 0; i < sorted_lottos.length; i++) {
      if(element === 0){
      // 내 로또 번호가 알 수 없음의 갯수를 센다.
        count_random++;
        return
      }
      else if(element === sorted_win_nums[i]){
      // 내 로또 번호가 당첨번호와 같은 갯수를 센다.
        count_gotcha++;
        return
      } else if(element !== sorted_win_nums[i]){   
      // 알 수 없음의 경우를 제외하고, 내 로또 번호가 당첨번호와 다른 수를 센다.     
        count_fail++;
        return
      }
    }
  });

  // console.log(count_random);
  // console.log(count_gotcha);
  // console.log(count_fail);  

  // console.log(`당첨 최대 등수는 : ${6-(count_random + count_gotcha)}`);
  // console.log(`당첨 최소 등수는 : ${count_random+count_fail}`);
  max_prize = 6-(count_random + count_gotcha);
  minimum_prize = count_random+count_fail;
  answer.push(max_prize);
  answer.push(minimum_prize);

  return answer;
}

solution(lottos, win_nums);

