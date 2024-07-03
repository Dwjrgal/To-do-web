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
let isEdited = false;
let editedIndex = -1;

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
    <span>${tasks[i].name}-${i}</span>
    <div>
        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal" onclick="taskEdit(${i})">
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

draw();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  draw();
});

const deleteTask = (taskIndex) => {
  console.log(tasks);
  tasks.splice(taskIndex, 1);
  draw();
  console.log("Task deleted", taskIndex);
};

const taskEdit = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;

  isEdited = true;
  editedIndex = taskIndex;
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
      return "border-success";
    }
    case "BLOCKED": {
      return "border-danger";
    }
  }
}
