const todoform = document.querySelector(".form-todo");
// console.log(todoform);
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
const todolist = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  const newtodoText = todoInput.value;
//   console.log(newtodoText);
  const newli = document.createElement("li");
  const newlinehtml = `
         <span class="text">${newtodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
`;
  newli.innerHTML = newlinehtml;
  todolist.append(newli);
  todoInput.value = "";
});


todolist.addEventListener('click', (e)=>{
    // console.log(e.target);
   if(e.target.classList.contains("done")){
    const lispan = e.target.parentNode.previousElementSibling;
     lispan.style.textDecoration = "line-through"
   }
   if(e.target.classList.contains("remove")){
      const tragetli  = e.target.parentNode.parentNode;
       tragetli.remove();
   }
})