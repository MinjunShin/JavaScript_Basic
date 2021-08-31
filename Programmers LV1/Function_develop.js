function solution(progresses, speeds) {
  var answer = [];

  let stackArr = [];

  for(let i = 0; i < progresses.length; i++) {
    let works = progresses[i];
    while(works >= 100) {
      works += speeds[i]
    }
    stackArr.push[works]
  }


  return answer;
}