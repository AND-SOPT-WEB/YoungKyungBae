const todoList = document.querySelector(".todo-list");

const button = document.querySelector(".button");

const buttonClick = () => {
    const li = document.createElement("li");
    const input = document.createElement("span");
    input.textContent = document.querySelector("input").value;
    const deleteBnt = document.createElement("button");
    deleteBnt.textContent = "삭제";
    li.appendChild(input);
    li.appendChild(deleteBnt);
    todoList.appendChild(li);
    document.querySelector("input").value = "";
};

button.addEventListener("click", buttonClick);
