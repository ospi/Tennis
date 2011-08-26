describe("Tennis", function() {
	var tennis;

	beforeEach(function () {
		tennis = new Tennis();
	});
	
	it("should have normal game", function() {
		expect(tennis).toBeDefined();
	});
	
	it("should have two players", function() {
		expect(tennis.getPlayers().length).toEqual(2);	
	});
	
	it("should have score 0-0 when game begins", function() {
		expect(tennis.score()).toEqual("0-0");
	});
	
	it("should have score 15-15 when both players have scored", function() {
		tennis.scorePointPlayer1();
		tennis.scorePointPlayer2();
		expect(tennis.score()).toEqual("15-15");
	});
	
	it("should have score deuce when both players have three times", function() {
		for (var i = 0; i < 3; i++) {
		  tennis.scorePointPlayer1();
		  tennis.scorePointPlayer2();
		}
		expect(tennis.score()).toEqual("deuce");
	});
});

