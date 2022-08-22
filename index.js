document.addEventListener(`DOMContentLoaded`,()=>{

 let myForm=document.querySelector(`form`);
 myForm.addEventListener(`submit`,(e)=>{
e.preventDefault();
handleToDo(e.target.new_todo.value);
myForm.reset();

 }

 )
}
 )


function handleToDo(todo){

let p=document.createElement(`p`);
let btn =document.createElement(`button`);
btn.addEventListener(`click`,deleteButton)
p.textContent=todo;
btn.textContent=` x`;

p.appendChild(btn);

console.log(p)
document.querySelector(`#todo_container`).appendChild(p);


}

function deleteButton(e){

let parent=document.querySelector(`#todo_container`)
e.target.parentNode.remove();

}

