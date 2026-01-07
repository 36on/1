const hands = ["グー", "チョキ", "パー"];
let playerHands = [];

function emoji(hand) {
  if (hand === "グー") return "✊";
  if (hand === "チョキ") return "✌";
  return "✋";
}

function randomHand() {
  return hands[Math.floor(Math.random() * 3)];
}

function judge(player, cpu) {
  if (player === cpu) return "draw";
  if (
    (player === "グー" && cpu === "チョキ") ||
    (player === "チョキ" && cpu === "パー") ||
    (player === "パー" && cpu === "グー")
  ) {
    return "win";
  }
  return "lose";
}

function addHand(hand) {
  if (playerHands.length >= 100) return;

  playerHands.push(hand);
  document.getElementById("count").textContent =
    `選んだ数：${playerHands.length} / 100`;

  document.getElementById("player-hands").textContent += emoji(hand) + " ";
}

function play() {
  if (playerHands.length !== 100) {
    alert("100手ちょうど選んでね！");
    return;
  }

  let win = 0, lose = 0, draw = 0;
  let cpuText = "";

  for (let i = 0; i < 100; i++) {
    const cpuHand = randomHand();
    const result = judge(playerHands[i], cpuHand);

    if (result === "win") win++;
    else if (result === "lose") lose++;
    else draw++;

    cpuText += emoji(cpuHand) + " ";
  }

  document.getElementById("cpu-hands").textContent = cpuText;
  document.getElementById("result").textContent =
    `結果：勝ち ${win} / 負け ${lose} / あいこ ${draw}`;
}
