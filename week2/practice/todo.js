const button = document.querySelector(".button");

const input = document.querySelector("input")

const todoListData = JSON.parse(localStorage.getItem("todoList")) ?? [];

// const buttonClick = () => {
//     const li = document.createElement("li");
//     const input = document.createElement("span");
//     input.textContent = document.querySelector("input").value;
//     const deleteBnt = document.createElement("button");
//     deleteBnt.textContent = "삭제";
//     li.appendChild(input);
//     li.appendChild(deleteBnt);
//     todoList.appendChild(li);
//     document.querySelector("input").value = "";
//     localStorage.setItem("input", JSON.stringify(input,value));
//     localStorage.setItem("button", JSON.stringify(deleteBnt));

//     deleteBnt.addEventListener("click", () => {todoList.removeChild(li)});
// };

const renderList = () => {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";
    todoListData.forEach((todo, index) => {
        const li = document.createElement("li");
        const input = document.createElement("span");
        const deleteBnt = document.createElement("button");
        
        input.textContent = todo;
        deleteBnt.textContent = "삭제";
        li.appendChild(input);
        li.appendChild(deleteBnt);
        todoList.appendChild(li);

        deleteBnt.addEventListener("click", () => {
            todoListData.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(todoListData));
            renderList();
        });
    });
}

const buttonClick = () => {
    const inputValue = input.value;
    if(!inputValue) {
        return;
    }
    todoListData.push(inputValue);
    localStorage.setItem("todoList", JSON.stringify(todoListData));
    renderList();
    input.value = "";
};

const init = () => {
    button.addEventListener("click", buttonClick);
    renderList();
};

init();