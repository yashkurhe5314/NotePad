const notes= document.querySelector(".notes");
const createbtn= document.querySelector(".btn");
let note= document.querySelector(".input-Box");

function shownotes(){
    notes.innerHTML= localStorage.getItem("note");
}
shownotes();
function updateStorage(){
    localStorage.setItem("note", notes.innerHTML);
}
createbtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img= document.createElement("img");
    inputbox.className= "input-Box";
    inputbox.setAttribute("contenteditable","true");
    img.src="./delete.png";
    notes.appendChild(inputbox).appendChild(img)
});
//deleting the paragraph
notes.addEventListener('click',function (e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        note = document.querySelectorAll(".input-Box");
        note.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})