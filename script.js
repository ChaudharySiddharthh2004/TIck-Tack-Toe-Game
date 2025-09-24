 let boxes = document.querySelectorAll(".box"); //accesing all the boxes button of game in javascript
 let resetbtn = document.querySelector(".reset-btn"); //accessing reset btn;
 let newgamebtn = document.querySelector(".newgame-btn"); //accessing newgame button
 let msgcontainer = document.querySelector(".msg-container"); //accessing msg container
 let msg = document.querySelector(".msg"); //
let turnO = true; //playerx, player0

const winpatterns = [ // all the 8 winnig pattern include horizontal,vertical,diagonal winnig pattern
    [0,1,2],
    [0,3,6],   
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>
{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
        // console.log("box was clicked");
        if(turnO === true)
        {
            box.innerText = "0";
            turnO = false
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true;
       checkwinner();
    })
});
const dissableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>
{
   msg.innerText = `Congratulation,winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   dissableboxes();
}
const checkwinner = () =>
{
    for(pattern of winpatterns)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    } 
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)
