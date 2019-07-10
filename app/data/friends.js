// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsArray = [
	{
		name: "Tommy",
		photo: "https://milwaukeerecord.com/wp-content/uploads/2018/01/TommyBoyScreening.jpg",
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
		photo: "https://thebrag.com/wp-content/uploads/2018/01/Happy-Gilmore-2-e1517352463131.jpg",
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
		photo: "https://www.thedad.com/wp-content/uploads/2018/01/clark-griswold.png?w=620",
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
	},

	{
		"name": "123",
		"photo": "132",
		"scores": [
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1"
		]
		}
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;