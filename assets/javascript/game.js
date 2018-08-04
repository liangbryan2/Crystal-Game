var game = {

    goal: 0,
    value: 0,
    score: 0,
    wins: 0,
    losses: 0,

    randomGoal: function () {
        goal = Math.floor(Math.random() * 101) + 19
        $("#goal").text(goal);
        $("#goal").val(goal);
        game.goal = goal;
    },

    newCrystalValue: function () {
        value = Math.floor(Math.random() * 12) + 1
        game.value = value;
        return value;
    },

    setCrystalValue: function () {
        $("#red").text(game.newCrystalValue());
        $("#red").val(game.newCrystalValue());
        $("#blue").text(game.newCrystalValue());
        $("#blue").val(game.newCrystalValue());
        $("#yellow").text(game.newCrystalValue());
        $("#yellow").val(game.newCrystalValue());
        $("#green").text(game.newCrystalValue());
        $("#green").val(game.newCrystalValue());
    },

    checkIfWin: function (goal, score) {
        if (game.goal === game.score) {
            game.wins++;
            game.initialize();
        }
        if (game.goal <= game.score) {
            game.losses++;
            game.initialize();
        }
    },

    addScore: function (gemValue) {
        game.score = game.score + parseInt(gemValue);
        $("#score").text(game.score);
    },

    initialize: function () {
        game.randomGoal();
        game.score = 0;
        $("#wins").text(game.wins);
        $("#losses").text(game.losses);
        $("#score").text("0")
        $("#score").val(0);
        $(".button").val(0);
        game.setCrystalValue();
        game.newGame = false;
    }

};



$(document).ready(function () {
    game.initialize();
    $(".button").on("click", function () {
        game.addScore(this.value);
        game.checkIfWin();
    });

});