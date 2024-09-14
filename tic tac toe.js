let box = document.querySelectorAll(".box")
let reset = document.querySelector(".reset-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let newbtn = document.querySelector(".new-btn")
let turnO = true;
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const showwinner = (pos1val) => {
    msg.innerText = `Congratulations the Winner is ${pos1val}`
    msgcontainer.classList.remove("hide")
    disabledbtn()
}
const checkwinner = () => {
    for (let val of winpatterns) {
        let pos1val = box[val[0]].innerText;
        let pos2val = box[val[1]].innerText;
        let pos3val = box[val[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val)
            }
            else {
            //    for(let val in winpatterns){
            //     if(box[val]!=""){
            //             msg.innerText = "Match Will be Draw.Please Reset the Game"
            //     }
            //    }
            }
        }

    }

}

const disabledbtn = () => {
    for (let val of box) {
        val.disabled = true
    }
}
const enabledbtn = () => {
    for (let val of box) {
        val.disabled = false;
        val.innerText = "";
    }
}
const resetgame = () => {
    turnO = true;
    msgcontainer.classList.add("hide")
    enabledbtn();
}
reset.addEventListener("click", resetgame)
newbtn.addEventListener("click", resetgame)
// const draw = () => {
//     for (let val of box) {
//         if (val.innerText != ""  ) {
//             msgcontainer.classList.remove("hide")
//             msg.innerText = "Match Will be Draw.Please Reset the Game"
//             console.log(val)
//         }
        
//     }
// }
// draw()
