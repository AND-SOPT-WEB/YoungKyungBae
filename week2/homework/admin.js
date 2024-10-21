import { members } from './data.js';

const membersData = JSON.parse(localStorage.getItem("membersData")) ?? [];

const searchBtn = document.querySelector(".search");
const resetBtn = document.querySelector(".reset");

const deleteBnt = document.querySelector(".delete");

const getInputValues = () => {
    return {
        name: document.querySelector("input.name").value.trim(),
        englishName: document.querySelector("input.enName").value.trim(),
        github: document.querySelector("input.github").value.trim(),
        gender: document.querySelector("input.gender").value.trim(),
        role: document.querySelector("input.role").value.trim(),
        firstWeekGroup: document.querySelector("input.firstGroup").value.trim(),
        secondWeekGroup: document.querySelector("input.secondGroup").value.trim(),
    };
};

const createTableHeader = () => {
    const memberTable = document.querySelector(".table");

    const memberTr = document.createElement("tr");
    const checkBoxHead = document.createElement("th");
    const checkBox = document.createElement("input");
    const name = document.createElement("th");
    const englishName = document.createElement("th");
    const github = document.createElement("th");
    const gender = document.createElement("th");
    const role = document.createElement("th");
    const firstWeekGroup = document.createElement("th");
    const secondWeekGroup = document.createElement("th");

    checkBoxHead.appendChild(checkBox);
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkAll");
    name.textContent = "이름";
    englishName.textContent = "영문이름";
    github.textContent = "GitHub";
    gender.textContent = "성별";
    role.textContent = "역할";
    firstWeekGroup.textContent = "1주차 금잔디";
    secondWeekGroup.textContent = "2주차 금잔디";

    memberTr.appendChild(checkBoxHead);
    memberTr.appendChild(name);
    memberTr.appendChild(englishName);
    memberTr.appendChild(github);
    memberTr.appendChild(gender);
    memberTr.appendChild(role);
    memberTr.appendChild(firstWeekGroup);
    memberTr.appendChild(secondWeekGroup);
    memberTable.appendChild(memberTr);
};

const renderList = (data) => {
    const memberTable = document.querySelector(".table");
    memberTable.innerHTML = "";
    createTableHeader();
    data.forEach((member, index) => {
        const memberTr = document.createElement("tr");
        const checkBoxHead = document.createElement("td");
        const checkBox = document.createElement("input");
        const name = document.createElement("td");
        const englishName = document.createElement("td");
        const github = document.createElement("td");
        const gender = document.createElement("td");
        const role = document.createElement("td");
        const firstWeekGroup = document.createElement("td");
        const secondWeekGroup = document.createElement("td");

        checkBoxHead.appendChild(checkBox);
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBox");
        name.textContent = member.name;
        englishName.textContent = member.englishName;
        github.textContent = member.github;
        gender.textContent = member.gender;
        role.textContent = member.role;
        firstWeekGroup.textContent = member.firstWeekGroup;
        secondWeekGroup.textContent = member.secondWeekGroup;

        memberTr.appendChild(checkBoxHead);
        memberTr.appendChild(name);
        memberTr.appendChild(englishName);
        memberTr.appendChild(github);
        memberTr.appendChild(gender);
        memberTr.appendChild(role);
        memberTr.appendChild(firstWeekGroup);
        memberTr.appendChild(secondWeekGroup);
        memberTable.appendChild(memberTr);

        deleteBnt.addEventListener("click", () => {
            if(checkBox.checked) {
                data.splice(index, 1);
                localStorage.setItem("membersData", JSON.stringify(data));
                renderList(data);
            }
        });
    });

    const checkAll = document.querySelector(".checkAll");
    checkAll.addEventListener("click", () => checkAllClick(checkAll));

    const checkboxes = document.querySelectorAll('.checkBox');
    for(const checkbox of checkboxes) {
        checkbox.addEventListener("click", () => {
            const totalCnt = checkboxes.length;
            console.log(totalCnt);

            const checkedCnt = document.querySelectorAll('.checkBox:checked').length;
            
            if(totalCnt === checkedCnt){
                checkAll.checked = true;
            }
            else{
            checkAll.checked = false;
            }

        });
    }
};

const checkAllClick = (checkAll) => {
    const isChecked = checkAll.checked;

    if(isChecked){
        const checkboxes = document.querySelectorAll('.checkBox');
        for(const checkbox of checkboxes){
            checkbox.checked = true;
        }
    }

    else{
        const checkboxes = document.querySelectorAll('.checkBox');
        for(const checkbox of checkboxes){
            checkbox.checked = false;
        }
    }
};

const searchClick = () => {
    const filters = getInputValues();

    const filteredMembers = membersData.filter(member => {
        return (
            (!filters.name || member.name.includes(filters.name)) &&
            (!filters.englishName || member.englishName.includes(filters.englishName)) &&
            (!filters.github || member.github.includes(filters.github)) &&
            (!filters.gender || member.gender === filters.gender) &&
            (!filters.role || member.role === filters.role) &&
            (!filters.firstWeekGroup || member.firstWeekGroup == filters.firstWeekGroup) &&
            (!filters.secondWeekGroup || member.secondWeekGroup == filters.secondWeekGroup)
        );
    });
    
    renderList(filteredMembers);
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
};

const resetClick = () => {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    renderList(membersData);
};

const init = () => {
    searchBtn.addEventListener("click", searchClick);
    resetBtn.addEventListener("click", resetClick);
    renderList(membersData);
};

init();