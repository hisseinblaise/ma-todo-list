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
    console.log(li);


    const checkbox = li.querySelector("input")
    let span1 = li.querySelector("span");
    const editbtn = li.querySelector(".editbtn");
    //console.log(span1.textContent);
    const deletebtn = li.querySelector(".deletebtn");

    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        counter();

    })

    editbtn.addEventListener("click", function(){
      const taskupdate = prompt("éditer une tâche:", span1.textContent);
      if(taskupdate !== null){
        span1.textContent = taskupdate;
        checkbox.checked = false;
        span1.classList.remove("checked");
        counter();

      }
    })
    deletebtn.addEventListener("click", function(){
      if(window.confirm("Vous voulez vraiment supprimer cette tâche ?")){
        tasks.removeChild(li);
      }
    })
};
const counter = () => {
  document.querySelectorAll(".checked").length;
  let completedkTasks =  document.querySelectorAll(".checked").length;
  let completedCounter = document.getElementById("allcounter");
  //console.log(completedCounter);
  completedCounter.innerText = completedkTasks;
}

counter();
