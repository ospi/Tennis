function Tennis() {
	this.pointPlayer1 = 0;
	this.pointPlayer2 = 0;
}
Tennis.prototype.getPlayers = function() {
	var players = new Array();
	players.push("player1");
	players.push("player2");
	return players;
};

Tennis.prototype.scorePointPlayer1 = function() {
	this.pointPlayer1 = this.pointPlayer1 + 1;	
};

Tennis.prototype.scorePointPlayer2 = function() {
	this.pointPlayer2++;
};

Tennis.prototype.score = function() { 
	
	var mapping = [ 0, 15, 30, 40]; 
	var scorePlayer1 = mapping[this.pointPlayer1];
	var scorePlayer2 = mapping[this.pointPlayer2];
	
	return scorePlayer1 + "-" + scorePlayer2;
};