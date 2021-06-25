const quest = ["/a/v/b/a.t", "/d/b/a_v1.t", "/f/a_v2.t", "/e/r/b.t", "q/v/h.f"];

function solution(parma) {
  let tempArray = [];
  let solutionArray = [];
  let number = /[0-9]/g;
  let finalArray = [];
  
  for (i = 0; i < quest.length; i++) {
    tempArray.push(quest[i].slice(quest[i].lastIndexOf("/")));
  }
  
  for (j = 0; j < tempArray.length; j++) {
    tempArray[j] = tempArray[j].replace(/_v/gi, "");
    tempArray[j] = tempArray[j].replace(number, "");
    //solutionArray.push(tempArray[j]);
  }
  // const reducer = (acc, cur) => {   
  //   acc[cur] = (acc[cur] || 0) + 1; 
  // }, {};
  
  tempObject = tempArray.reduce(function (files, name) {
    if(name in files) {
      files[name]++;
    } else {
      files[name] = 1;
    }
    return files
  }, {});

  solutionArray = Object.entries(tempObject);
  for(i = 0; i < solutionArray.length; i++){
    if(solutionArray[i][1] !== 1){
      finalArray.push(solutionArray[i][0]);
      finalArray.push(String(solutionArray[i][1]));
    } 
  }  
  return finalArray;
}

console.log(solution(quest));
