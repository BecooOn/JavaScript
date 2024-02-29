const btn = document.querySelector(".btn");
const text = document.querySelector("#text");
const result = document.querySelector(".result");
const arr = [];

btn.addEventListener("click", () => {
  if (text.value.trim() !== "") {
    arr.push(text.value.trim());
    ekle();
    // text.value = "";
  } else {
    alert("Enter something for 'To-Do'");
    text.focus();
    text.value = "";
  }
});
const ekle = () => {
  result.textContent = "";
  arr.forEach((cur, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    todoItem.textContent = cur;

    const pencil = document.createElement("span");
    pencil.classList.add("pencil");
    pencil.textContent = "✎";
    pencil.onclick = () => change(index);

    const trash = document.createElement("span");
    trash.classList.add("trash");
    trash.textContent = "🗑";
    trash.onclick = () => remove(index);

    todoItem.appendChild(pencil);
    todoItem.appendChild(trash);
    result.appendChild(todoItem);
    text.value = "";
    text.focus();
  });
};
//? Değişiklik için
function change(index) {
  const newItem = prompt("Enter new item for 'to-do'");
  arr.splice(index, 1, newItem);
  ekle(); // bu fonksiyonun yeri sonda da olabilirdi; ancak çağırma işlemini burada yapmayı tercih ettim.
  if (newItem === "") {
    alert("Don't forget to enter something for 'To-Do'");
    change(index);
  }
}
//? Silmek için
function remove(index) {
  const isConfirmed = confirm("Are you sure you want to delete this item?");
  if (isConfirmed) {
    arr.splice(index, 1);
    ekle(); // bu fonksiyon burada olmalıdr. Aksi takdirde array içi boş olduğunda result.textContent içeriğine no item yazısını yazdıramayız.
    if (arr.length === 0) {
      result.textContent = "No item found for to-do";
    }
  }
}

//? Enter, ESC, Backspace, Delete tuşları için
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btn.click();
  } else if (
    event.key == "Escape" ||
    event.key == "Backspace" ||
    event.key == "Delete"
  ) {
    text.click();
  }
});
