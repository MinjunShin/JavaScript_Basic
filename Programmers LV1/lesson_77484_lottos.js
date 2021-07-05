let lottos = 	[44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

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
    for(let i = 0; i < sorted_lottos.length; i++) {
      if(sorted_lottos[i] === 0){
      // 내 로또 번호가 알 수 없음의 갯수를 센다.
        count_random++;        
      }
      else if(sorted_lottos[i] === sorted_win_nums[i]){
      // 내 로또 번호가 당첨번호와 같은 갯수를 센다.
        count_gotcha++;        
      } else if(sorted_lottos[i] !== sorted_win_nums[i]){   
      // 알 수 없음의 경우를 제외하고, 내 로또 번호가 당첨번호와 다른 수를 센다.     
        count_fail++;        
      }
    }

  if(count_gotcha === 6){
    answer.push(1);
    answer.push(1);
    return answer;
  } else if (count_random === 6) {
    answer.push(1);
    answer.push(6);
    return answer;
  } else {
  // console.log(count_random);
  // console.log(count_gotcha);
  // console.log(count_fail);  

  // console.log(`당첨 최대 등수는 : ${(count_random + count_gotcha)}`);
  // console.log(`당첨 최소 등수는 : ${count_random+count_fail}`);

  max_prize = count_random + count_gotcha;
  minimum_prize = count_random+count_fail;
  answer.push(max_prize);
  answer.push(minimum_prize);
  }
  return answer;
}

solution(lottos, win_nums);

//정답 코드
function solution2(lottos, win_nums) {
  var answer = [];
  
  const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
  // lottos배열을 순회하며 당첨배열에 있는 수를 return하고 총 갯수를 correct에 저장
  const zeros = lottos.filter(lotto => lotto === 0).length;
  // lottos배열을 순회하며 0이면 return후 총 갯수를 zeros에 저장
  console.log(correct, zeros);
  
  let min = 7-correct >= 6 ? 6 : 7-correct;
  // 최저 순위는 7에서 맞은 갯수를 빼면되는데 맞은 갯수가 0일 경우 7위가 됨으로 6위로 변경해준다
  let max = min-zeros < 1 ? 1 : min-zeros;
  // 최고 순위는 최저 순위에서 0의 갯수를 빼주면 되는데 모두 다 0일 경우 min은 6, max는 0이 되므로 0을 1로 바꿔주면 된다.
  answer = [max, min]
  return answer;
}