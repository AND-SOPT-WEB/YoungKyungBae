import { members } from './data.js';

const membersData = JSON.parse(localStorage.getItem("membersData")) ?? [];

const test = () => {
    const memberTable = document.querySelector(".table");
    membersData.forEach((member, index) => {
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
}

test();