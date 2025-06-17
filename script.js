let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log(tasks);
const addTask =() => {
    let task = inputField.value.trim();
    const li = document.createElement("li");
    li.innerHTML = `
    <label>
                <input type="checkbox">
                <span>${task}</span>
            </label>
            <span class="editbtn"><i class="fa-solid fa-pen-to-square"></i></i></span>
            <span class="deletebtn"><i class="fa-solid fa-trash"></i></span>
            `
            tasks.appendChild(li);
            inputField.value="";
/*console.log(li);*/  
}