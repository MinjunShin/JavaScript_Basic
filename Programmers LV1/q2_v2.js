function solution(N, stages) {
  var answer = [];
  let count = 0;

  
  
  stages.sort(function(a, b) { // 오름차순 정렬
  return b - a;    
  });
  
  let result = {};
  stages.forEach((x) => { 
    result[x] = (result[x] || 0)+1; 
  });
      
  return result;
}

let N = 5,
  stages = [2, 1, 2, 6, 2, 4, 3, 3];


console.log(solution(N, stages));