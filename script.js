function addTask() {
  let input = document.getElementById("addWork").value;

  if (input === "") {
    alert("Please enter a task");
    return;
  }

  let ul = document.getElementById("taskList");
  let li = document.createElement("li");
  li.innerText = input;

  // delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.style.marginLeft = "10px";

  // delete button click remove li
  delBtn.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(delBtn);
  ul.appendChild(li);
  document.getElementById("addWork").value = "";
}
