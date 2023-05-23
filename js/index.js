const todoArr = [];

const submitItem = document.querySelector("#submitItem");
const item = document.querySelector("#inputItem");
const display = document.querySelector("#display");
const db = document.querySelectorAll(".delItemBox");
const wrap = document.querySelectorAll("#wrapItemBox");

const addItem = () => {
  // create delete
  const db = document.createElement("button");
  db.setAttribute("type", "button");
  db.className = "delItemBox";
  db.textContent = "X";
  // create cek
  const cb = document.createElement("button");
  cb.setAttribute("type", "button");
  cb.className = "btnItemBox";
  cb.textContent = "✓";
  // create div
  const div = document.createElement("div");
  div.id = "wrapItemBox";
  // create p
  const items = document.createElement("p");
  items.className = "itemBox";
  items.textContent = item.value;

  // set to div
  div.appendChild(db);
  div.appendChild(cb);
  div.appendChild(items);
  display.appendChild(div, display);
  item.value = " ";
  db.addEventListener("click", (e) => {
    div.parentNode.removeChild(div);
  });
  cb.addEventListener("click", (e) => {
    items.classList.toggle("line");
  });
};

submitItem.addEventListener("click", () => {
  addItem();
});
