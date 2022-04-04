let todos = [];
let button = document.getElementById('addform')
button.addEventListener('click',()=>{test()})
let ele_input = document.getElementById('userinput')
ele_input.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
test()  }
})
function test() {
  if (document.getElementById("userinput").value != "") {
    todos.push(document.getElementById("userinput").value);
    localStorage.setItem("todos", JSON.stringify(todos));
    update();
    document.getElementById("userinput").value = "";
    document.getElementById("userinput").focus();
  }
}

function init() {

  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    update();
  }
}
init();
function update() {
  let htmlstring = [];
  let ele_liste = document.getElementById("liste");
  for (let i = 0; i < todos.length; i += 1) {
    htmlstring.push(
      `<li class='border rounded my-2 px-2 py-1 w-64 hover:bg-gray-200' onclick='rem(${i})'>${todos[i]}</li>`
    );
    ele_liste.innerHTML = htmlstring.join("");
  }
  if (todos.length === 0) {
    ele_liste.innerHTML = "";
  }
}

function rem(i) {
  todos.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  update();
}