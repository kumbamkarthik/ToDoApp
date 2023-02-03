document.getElementById("button").addEventListener("click", submit);
var clear1 = document.querySelector(".bt1");
var clear2 = document.querySelector(".bt2");
var special = document.querySelector("ul");
var it = document.querySelector(".ct1");
var cbox = document.querySelector(".pt2");
it.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit(event);
  }
});
let btns = document.querySelector(".btns");
btns.children[0].style.display = "none";
btns.children[1].style.display = "none";
// if (count === 0) {
function countEl() {
  btns.children[0].style.display = "block";
  btns.children[1].style.display = "block";
}
let ul = document.querySelector("ul");
if (ul.innerHTML === "") {
  let stmt = document.createElement("h3");
  stmt.innerText = "List is empty";
  h3.style.color = "white";
}
function submit(e) {
  countEl();
  let list;
  let input = document.querySelector(".ct1");
  if (input.value != "") Task(input.value);
  input.value = "";
}
function Task(value) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `<label class="pt1"><h4>${value}</h4></label
    ><input type="checkbox" class="pt2" />
    <span class="material-symbols-outlined">
    delete
    </span>`;
  ul.appendChild(li);
  ul.className = "eachTasks";
  li.className = "eachLi";
  document.querySelector(".tasks").style.display = "block";
  console.log();
}
clear2.addEventListener("click", DeleteAll);
function DeleteAll() {
  ul.innerHTML = "";
  btns.children[0].style.display = "none";
  btns.children[1].style.display = "none";
}
special.addEventListener("click", deleteItem);
function deleteItem(event) {
  if (event.target.className === "material-symbols-outlined") {
    let remove = event.target.parentNode;
    let parent = remove.parentNode;
    parent.removeChild(remove);
    var len = document.querySelectorAll("li").length;
    if (len === 0) {
      btns.children[0].style.display = "none";
      btns.children[1].style.display = "none";
    }
  }
}
clear1.addEventListener("click", clearSpecial);
function clearSpecial(event) {
  var items = special.getElementsByClassName("pt2");
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      let remove = items[i].parentNode;
      let parent = remove.parentNode;
      parent.removeChild(remove);
      i--;
    }
  }
  var len = document.querySelectorAll("li").length;
    if (len === 0) {
      btns.children[0].style.display = "none";
      btns.children[1].style.display = "none";
    }
}
