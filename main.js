// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("saveBtn");
const taskInput = document.getElementById("floatingInputValue");
const taskStatus = document.getElementById("floatingSelect");

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
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 m-3 ${getStatusColor(
      tasks[i].status
    )}">
    <span>${tasks[i].name}</span>
    <div>
        <button class="btn">
        <i class="bi bi-pencil text-white"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash text-danger" onclick ="deleteTask(${i})"></i>
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

saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  draw();
  console.log("TASKS", tasks);
});

draw();

const deleteTask = (taskIndex) => {
  console.log(tasks);
  tasks.splice(taskIndex, 1);
  draw();
  console.log("Task deleted", taskIndex);
};

//Change border color //

function getStatusColor(status) {
  switch (status) {
    case "TODO": {
      return null;
    }
    case "INPROGRESS": {
      return "border-warning";
    }
    case "DONE": {
      return null;
    }
    case "BLOCKED": {
      return "border-danger";
    }
  }
}
