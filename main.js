// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("saveBtn");

// VARIABLES FOR TASK
const tasks = [
  {
    name: "Task One",
    status: "TODO",
  },
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function draw() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 m-3">
    <span>${tasks[i].name}</span>
    <div>
        <button class="btn">
        <i class="bi bi-pencil text-white"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash text-danger"></i>
        </button>
    </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
addTaskBtn.addEventListener("click", function () {
  console.log("newTask");
  tasks[1].status = "DONE";
  draw();
  const newTask = { name: "hool hiih", status: "INPROGRESS" };
  tasks.push(newTask);
  console.log("TASKS", tasks);
});

draw();
// floatingInputValue.VALUE: "hool"

// saveBtn.addEventListener("click", function () {
//   const newTask = {
//     name: taskInput.value,
//     status: taskStatus.value,
//   };
//   tasks.push(newTask);
//   zurah();
//   console.log("TASKS", tasks);
// });

// zurah();
