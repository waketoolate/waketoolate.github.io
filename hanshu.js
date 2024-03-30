var playerName = "Player"; 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startButton").addEventListener("click", function() {
        playerName = prompt("请问怎么称呼你？", playerName);
        if(playerName != null && playerName.trim() != "") {
            document.getElementById("playerName").textContent = playerName;
        } else {
            document.getElementById("playerName").textContent = "Player";
        }
        startGame(); 
    });

    document.getElementById("playAgainButton").addEventListener("click", function() {
        startGame(); 
    });
});

function startGame() {
    var startingApples = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    document.getElementById("startingApples").textContent = startingApples;

    document.getElementById("game").style.display = "block";
    document.getElementById("playAgainButton").style.display = "none"; 
    document.getElementById("startButton").style.display = "none"; 

    document.getElementById("takeButton").disabled = false;

    var currentPlayer = "player"; 
    var applesLeft = startingApples; 

    showPlayerTurn(); 



    function pandaTurn() {
        var pandaApplesToTake = Math.min(applesLeft, Math.floor(Math.random() * 2) + 1);
        applesLeft -= pandaApplesToTake;
        document.getElementById("applesLeft").textContent = applesLeft;
        document.getElementById("playerAction").textContent = "小熊猫拿取了" + pandaApplesToTake + "个苹果.";
        document.getElementById("pandaApplesTaken").textContent = "小熊猫拿取数: " + pandaApplesToTake;

        if (applesLeft <= 0) {
            document.getElementById("takeButton").disabled = true;
            document.getElementById("playerAction").textContent = "哇, 是小熊猫赢了!";
            document.getElementById("playAgainButton").style.display = "block"; 
        }
        if (applesLeft <= 0) {
            document.getElementById("playerAction").textContent = "哇, 是小熊猫赢了!";
            document.getElementById("playAgainButton").style.display = "block"; 
        } else {
            currentPlayer = "player"; 
            playerTurn(); 
        }
    }

    function takeApples() {
        if (currentPlayer === "player" && applesLeft > 0) {
            var applesToTake = parseInt(document.getElementById("applesToTake").value);
            if (applesToTake === 1 || applesToTake === 2) {
                applesLeft -= applesToTake;
                document.getElementById("applesLeft").textContent = applesLeft;

                showPlayerTurn();

                if (applesLeft <= 0) {
                    document.getElementById("playerAction").textContent = "恭喜, " + playerName + "! 你赢了!";
                    document.getElementById("playAgainButton").style.display = "block"; 
                } else {
                    currentPlayer = "panda"; 
                    pandaTurn(); 
                }
            } else {
                alert("Please choose 1 or 2 apples.");
            }
             
        }
    }

    function showPlayerTurn() {
        document.getElementById("playerAction").textContent = playerName + ", 现在是你的回合， 请拿取1或者2个苹果。";
    }

    document.getElementById("takeButton").addEventListener("click", takeApples);
}