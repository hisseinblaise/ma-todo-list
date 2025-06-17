let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log(tasks);
const addTask = () => {
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
    inputField.value = "";
    /*console.log(li);*/


    const checkbox = li.querySelector("input")
    let span1 = li.querySelector("span");
    const editbtn = li.querySelector(".editbtn");
    console.log(span1.textContent);

    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
    })

    editbtn.addEventListener("click", function(){
      const taskupdate = prompt("éditer une tâche:", span1.textContent);
      if(taskupdate !== null){
        span1.textContent = taskupdate;
        checkbox.checked = false;
        span1.classList.remove("checked");
      }
    })
}