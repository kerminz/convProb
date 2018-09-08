const brain = require('brain.js')

// Fetch Data from "Database -> Json file"
const userData = require('./data.json')

// Create new Neural Network
let net = new brain.NeuralNetwork();

let userArray = [];

// Push user data into new array and determine input/output
for (let i = 1; i < userData.length; i++) {

	userArray.push({
		input: {
			usedSearch: userData[i].usedSearch,
			pdsViews: userData[i].views_productDetailPage,
			//order: userData[i].order,
		},
		output: {
			order: userData[i].order
		}
	})
}

// Train
net.train(userArray, {log: true});

// Run
let result = net.run({
	sedSearch: 0.02,
	pdsViews: 0.06
	//order: 1
});

console.log(result);