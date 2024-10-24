import { members } from './data.js';

const searchBtn = document.querySelector(".search");
const resetBtn = document.querySelector(".reset");

const deleteBnt = document.querySelector(".delete");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".add");
const modalClose = document.querySelector(".closeModal");
const addMember = document.querySelector(".addBtn");

const getMembersData = () => {
    return JSON.parse(localStorage.getItem("membersData")) ?? [];
};

const getInputValues = () => {
    return {
        name: document.querySelector("input.name").value.trim(),
        englishName: document.querySelector("input.enName").value.trim(),
        github: document.querySelector("input.github").value.trim(),
        gender: document.querySelector("select.gender").value.trim(),
        role: document.querySelector("select.role").value.trim(),
        firstWeekGroup: document.querySelector("input.firstGroup").value.trim(),
        secondWeekGroup: document.querySelector("input.secondGroup").value.trim(),
    };
};

const getModalInputValues = () => {
    return {
        name: document.querySelector(".modal input.name").value.trim(),
        englishName: document.querySelector(".modal input.enName").value.trim(),
        github: document.querySelector(".modal input.github").value.trim(),
        gender: document.querySelector(".modal select.gender").value.trim(),
        role: document.querySelector(".modal select.role").value.trim(),
        firstWeekGroup: document.querySelector(".modal input.firstGroup").value.trim(),
        secondWeekGroup: document.querySelector(".modal input.secondGroup").value.trim(),
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
    data.forEach((member) => {
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
        checkBox.setAttribute("data-id", member.id);
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
    });

    const checkAll = document.querySelector(".checkAll");
    checkAll.addEventListener("click", () => checkAllClick(checkAll));

    // 전체 체크박스에서 하나라도 해제되면 맨위 체크박스도 같이 해제
    const checkboxes = document.querySelectorAll('.checkBox');
    for(const checkbox of checkboxes) {
        checkbox.addEventListener("click", () => {
            const totalCnt = checkboxes.length;

            const checkedCnt = document.querySelectorAll('.checkBox:checked').length;
            
            if(totalCnt === checkedCnt){
                checkAll.checked = true;
            }
            else{
            checkAll.checked = false;
            }

        });
    }

    deleteBnt.addEventListener("click", () => deleteClick());
};

const deleteClick = () => {
    const checkedBoxes = document.querySelectorAll(".checkBox:checked");
    const idToDelete = Array.from(checkedBoxes).map(checkbox => Number(checkbox.getAttribute("data-id")));

    const filteredData = getMembersData().filter(member => !idToDelete.includes(member.id));

    localStorage.setItem("membersData", JSON.stringify(filteredData));
    searchClick();
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

    const filteredMembers = getMembersData().filter(member => {
        return (
            //포함하는 값으로 필터링하기 위해 includes()
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
};

// 초기화 버튼
const resetClick = () => {
    document.querySelectorAll(".filter input").forEach(input => {
        input.value = "";
    });
    document.querySelectorAll(".filter select").forEach(input => {
        input.value = "";
    });
    renderList(getMembersData());
};

const addClick = () => {
    modal.style.display = 'block';
};

const closeClick = () => {
    document.querySelectorAll(".modal input").forEach(input => {
        input.value = "";
    });
    document.querySelectorAll(".modal select").forEach(input => {
        input.value = "";
    });
    modal.style.display = 'none';
};

// 백드롭 클릭시 모달 닫힘
window.addEventListener('click', (e) => {
    e.target === document.querySelector(".modal") ?  closeClick() : false
    });

const addMemberClick = () => {
    const member = getModalInputValues();
    const membersData = getMembersData();

    if(!member.name || !member.englishName || !member.github ||
        !member.gender || !member.role || !member.firstWeekGroup || !member.secondWeekGroup) {
            alert("모든 필드를 입력해주세요.")
        }
    else {
        member.id = membersData[membersData.length - 1].id + 1;
        membersData.push(member);
        localStorage.setItem("membersData", JSON.stringify(membersData));
        renderList(membersData);
        closeClick();
    }
};

const filterGender = document.querySelector('.filter select.gender');
const filterRole = document.querySelector('.filter select.role');
const modalGender = document.querySelector('.modal select.gender');
const modalRole = document.querySelector('.modal select.role');

const hideDefaultOption = (select) => {
    const defaultOption = select.querySelector('option[value=""]');
    defaultOption.style.display = 'none';
};

const init = () => {
    // 초기화 시점에 기본 옵션 숨김 처리
    hideDefaultOption(filterGender);
    hideDefaultOption(filterRole);
    hideDefaultOption(modalGender);
    hideDefaultOption(modalRole);
    searchBtn.addEventListener("click", searchClick);
    resetBtn.addEventListener("click", resetClick);
    renderList(getMembersData());
    modalOpen.addEventListener("click", addClick);
    modalClose.addEventListener("click", closeClick);
    addMember.addEventListener("click", addMemberClick);

};

init();