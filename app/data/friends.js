// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsArray = [
	{
		name: "Tommy",
		photo: "https://thebiglead.com/2015/03/27/tommy-boy-is-20-years-old-here-are-20-fun-facts-about-the-moviehttp://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/9f846717-acf1-4558-b8be-7ec9286d5634/Image677d798f7da8c71afec323bd1bdf32d0/alg-tommy-boy-jpg1.jpg/",
		scores: [
			"5",
			"5",
			"3",
			"3",
			"4",
			"4",
			"3",
			"3",
			"5",
			"4"
		]
	},
	{
		name: "Peter",
		photo: "https://upload.wikimedia.org/wikipedia/en/5/51/Peter_GB1.jpg",
		scores: [
			"5",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2"
		]
	},
	{
		name: "Happy",
		photo: "https://thebrag.com/adam-sandler-happy-gilmore/",
		scores: [
			"5",
			"3",
			"2",
			"2",
			"4",
			"4",
			"5",
			"2",
			"5",
			"2"
		]
	},
	{
		name: "Clark",
		photo: "https://vacation.fandom.com/wiki/Clark_Griswold",
		scores: [
			"5",
			"3",
			"1",
			"1",
			"5",
			"5",
			"1",
			"2",
			"4",
			"2"
		]
	}
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;