let numbers = 	[2, 1, 3, 4, 1]; 

function solution(numbers) {
  var answer = [];  
  
  for(let i=0; i < numbers.length; i++){
     for(let j=0; j < numbers.length; j++){
         let arrays = 0;
         arrays = numbers[i] + numbers[j];
         answer.push(arrays);
     }        
  }  
  return answer;
}

console.log(solution(numbers));