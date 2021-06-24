const quest = ["/a/v/b/a.t", "/d/b/a_v1.t", "/f/a_v2.t", "/e/r/b.t", "q/v/h.f"];

function solution(parma) {
  let tempArray = [];
  let solutionArray = [];
  let number = /[0-9]/g;

  for (i = 0; i < quest.length; i++) {
    tempArray.push(quest[i].slice(quest[i].lastIndexOf("/")));
  }

  for (j = 0; j < tempArray.length; j++) {
    tempArray[j] = tempArray[j].replace(/_v/gi, "");
    tempArray[j] = tempArray[j].replace(number, "");
    solutionArray.push(tempArray[j]);
  }
  return solutionArray;
}

console.log(solution(quest));
