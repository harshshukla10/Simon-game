let gameseq = [];
let userseq = [];

let btn = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Started");
    started = true;
    levelUP();
  }
});
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUP() {
    userseq=[];
  level++;
  h2.innerText = `Level ${level}`;
  let randidx = Math.floor(Math.random() * 3);
  let randcolor = btn[randidx];

  // Update the selector to be more specific
  let randbtn = document.querySelector(`.btn.${randcolor}`);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);


}
function checkans(idx){
if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUP,1000);
    }
}else{
    h2.innerText=`Game over !! your score is ${level}\n Press any key to start the game `;
    resetTo();
}
}


function btnPress() {
  let btn = this;
  gameflash(btn);

  userColor=btn.getAttribute("id");
  userseq.push(userColor);

  checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn1 of allBtns) {
  btn1.addEventListener("click", btnPress);
}
function resetTo(){
    started=false;
    gameseq=[]
    userseq=[];
    level=0;

}