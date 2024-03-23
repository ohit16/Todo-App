let lists = document.querySelector("ul");
let tasks = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let alldelete = document.getElementById("alldelete");
let alldone = document.getElementById("alldone");

addbtn.addEventListener("click",()=>{
    let task = document.createElement("li");
    lists.appendChild(task); 
    task.innerHTML= `${ tasks.value}`;

    task.classList.add("todo");

    if(tasks.value==""){
        alert("please enter some task")
        task.style.display="none";
    }
     tasks.value="";

let donebtn = document.createElement("button");
task.appendChild(donebtn); 
donebtn.innerText="done";
donebtn.classList.add("done");

donebtn.addEventListener("click",()=>{
   markasdone();
})
    
let deletebtn = document.createElement("button");
task.appendChild(deletebtn); 
deletebtn.innerText="delete";
deletebtn.classList.add("delete");

deletebtn.addEventListener("click",()=>{
  task.remove();
})

alldelete.addEventListener("click",()=>{
  task.remove();
})

alldone.addEventListener("click",()=>{
  markasdone(); 
})
  
function markasdone(){
  task.style.textDecoration="line-through";   
}
})
