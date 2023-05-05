var toggle = document.getElementById("toggle");
var inputs = document.getElementById("input-text");
var itemundone = document.querySelector(".item-remain span");
var userinput = document.querySelector(".todo-display-input span");
var list = document.querySelector(".todo-list .display");

toggle.onchange = (e) => {
  if (toggle.checked === true) {
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.classList.add("light-theme");
  }
};

userinput.addEventListener("click", () => {
  if (inputs.value.length > 0) {
    newToDo(inputs.value);
    inputs.value = "";
  }
});

inputs.addEventListener("keypress", (i) => {
  if (i.charCode === 13 && inputs.value.length > 0) {
    newToDo(inputs.value);
    inputs.value = "";
  }
});

function newToDo(element) {
  var newElement = document.createElement("div");
  newElement.classList.add("todo-display-input-li");

  newElement.innerHTML = `<span class="label">
                    <input type="checkbox">
                    <span class="ticked"></span>
                    <span class="text">${element}</span>
                </span>
                <span class="cancel"></span>`;
  list.append(newElement);
  itemsCount(1);
}

function itemsCount(number) {
  itemundone.innerText = +itemundone.innerText + number;
}

function removeTodo(element) {
  element.remove();
  itemsCount(-1);
}

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("cancel")) {
    removeTodo(event.target.parentElement);
  }
});
