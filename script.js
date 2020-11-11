var politicianResults = function(politicianName, partyColor){

	var politician = {};

	politician.name=politicianName;
	politician.electionResults = [];
	politician.totalVotes = 0;
	politician.partyColor = partyColor;

	politician.election = function()
		{
				console.log(this.name);
		};

	politician.election();

  //tally votes
  politician.totalResults = function(){

	this.totalVotes = 0;

	for(var i=0; i<this.electionResults.length; i++)
		{
			this.totalVotes=this.totalVotes+this.electionResults[i];
		}
};


	return politician;
}


var jane = politicianResults("Jane Doe", [245, 141, 136]);
var jill = politicianResults("Jill Fawn",[132, 17, 11]);

jane.electionResults =[5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jill.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jane.electionResults[9] = 1;
jane.electionResults[4] = 17;
jane.electionResults[43]= 11;

jill.electionResults[9] =28;
jill.electionResults[4]=38;
jill.electionResults[43]=27;

//console.log(jane.electionResults);

//method for election results totals



//setting the states results
 var setStateResults = function(state){
	theStates[state].winner = null;
	if (jane.electionResults[state]>jill.electionResults[state]){
		theStates[state].winner = jane;
	}else if(jill.electionResults[state]>jane.electionResults[state]){
		theStates[state].winner = jill;


	}


	//states change color bases in results
	var stateWinner = theStates[state].winner;
	if(stateWinner !== null){
		theStates[state].rgbColor=stateWinner.partyColor;
	}else{
		theStates[state].rgbColor=[11,32,57];
	}

	 //Table for State Results
var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];

var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];

var janeName = body.children[0].children[0];
var janeResults = body.children[0].children[1];

var jillName = body.children[1].children[0];
var jillResults = body.children[1].children[1];

var winnerName = body.children[2].children[1];

//Display in State Results Table's Nodes

stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = "("+theStates[state].nameAbbrev+")";
janeName.innerText = jane.name;
janeResults.innerText =jane.electionResults[state];

jillName.innerText = jill.name;
jillResults.innerText = jill.electionResults[state];

	if (theStates[state].winner === null){
    winnerName.innerText = "DRAW";
} else {
    winnerName.innerText = theStates[state].winner.name;
}


 }


//Tally Up Votes

jane.totalResults();
jill.totalResults();

console.log(jane.totalVotes);
console.log(jill.totalVotes);

//Declare the Winner
var winner="???";

	if (jane.totalVotes > jill.totalVotes){
			winner = jane.name;
	}else if(jane.totalVotes < jill.totalVotes){
		winner = jill.name;
	}
		else{
		winner="Draw";
	}

console.log(winner);


 //Table for Country Results

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = jill.name;
row.children[3].innerText = jill.totalVotes;
row.children[5].innerText = winner;
