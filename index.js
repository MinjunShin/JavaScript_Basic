const a = 221; // 첫사용은 const로, let은 정말 필요할 때만.
let b = a - 5;

console.log(b, a);
console.log(a, b);

const what = "HY";
console.log(what);

const wat = true; // true, false는 text가 아닌 boolean이다.

const floatEx = 55.1;

const PersonInfo = {
	name : "SMJ",
	age : 28,
	gender : "Male",
	isHandsome : true,
	favMovies : ["Along the gods", "End game"],
	favFood : [
		{
				name : "Kimchi", 
				fatty : false
		}, 
		{
				name : "Cheeseburger", 
				fatty : true
		}
	]
}

console.log(PersonInfo);
console.log(PersonInfo.age);

console.log(console);