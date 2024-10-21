import { members } from './data.js';

const membersData = JSON.parse(localStorage.getItem("membersData")) ?? [];

const searchBtn = document.querySelector(".search");
const resetBtn = document.querySelector(".reset");

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

const renderList = (data) => {
    const memberTable = document.querySelector(".table");
    memberTable.innerHTML = "";
    data.forEach((member, index) => {
        const memberTr = document.createElement("tr");
        const name = document.createElement("td");
        const englishName = document.createElement("td");
        const github = document.createElement("td");
        const gender = document.createElement("td");
        const role = document.createElement("td");
        const firstWeekGroup = document.createElement("td");
        const secondWeekGroup = document.createElement("td");

        name.textContent = member.name;
        englishName.textContent = member.englishName;
        github.textContent = member.github;
        gender.textContent = member.gender;
        role.textContent = member.role;
        firstWeekGroup.textContent = member.firstWeekGroup;
        secondWeekGroup.textContent = member.secondWeekGroup;

        memberTr.appendChild(name);
        memberTr.appendChild(englishName);
        memberTr.appendChild(github);
        memberTr.appendChild(gender);
        memberTr.appendChild(role);
        memberTr.appendChild(firstWeekGroup);
        memberTr.appendChild(secondWeekGroup);
        memberTable.appendChild(memberTr);
    });
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