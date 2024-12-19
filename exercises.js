import { task1 } from './task1.js';
import { createTaskElement } from './createTaskElement.js';
// task1();

// ЗАДАНИЕ 2

function task2() {
  const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript",
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока",
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока",
    },
  ];

  const tasksList = document.querySelector(".tasks-list");
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    tasksList.append(taskElement);
  });

  // ЗАДАНИЕ 3

  const createTaskBlock = document.createElement("form");
  createTaskBlock.className = "create-task-block";

  const taskBlockLabel = document.createElement("input");
  taskBlockLabel.className = "create-task-block__input"; // Добавляем класс
  taskBlockLabel.placeholder = "Введите новую задачу";

  const buttonCreateTask = document.createElement("button");
  buttonCreateTask.type = "submit";
  buttonCreateTask.textContent = "Подтвердить";

  createTaskBlock.append(taskBlockLabel, buttonCreateTask);
  tasksList.append(createTaskBlock);

  createTaskBlock.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskBlockLabel.value.trim();
    const errorBlock = document.querySelector(".error-message-block");

    if (errorBlock) {
      errorBlock.remove();
    }

    if (!taskText) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message-block";
      errorMessage.textContent = "Название задачи не должно быть пустым";
      createTaskBlock.append(errorMessage);
      return;
    }

    const isDuplicate = tasks.some((task) => task.text === taskText);
    if (isDuplicate) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message-block";
      errorMessage.textContent = "Задача с таким названием уже существует";
      createTaskBlock.append(errorMessage);
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      completed: false,
      text: taskText,
    };

    tasks.push(newTask);
    const newTaskElement = createTaskElement(newTask);
    tasksList.append(newTaskElement);

    taskBlockLabel.value = "";
  });

  // ЗАДАНИЕ 4

  let isDarkTheme = true;

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const body = document.body;
      const taskItems = document.querySelectorAll(".task-item");
      const buttons = document.querySelectorAll("button");

      if (isDarkTheme) {
        body.style.background = "#24292E";

        taskItems.forEach((item) => {
          item.style.color = "#ffffff";
        });
        buttons.forEach((button) => {
          button.style.border = "1px solid #ffffff";
        });
      } else {
        body.style.background = "initial";

        taskItems.forEach((item) => {
          item.style.color = "initial";
        });

        buttons.forEach((button) => {
          button.style.border = "none";
        });
      }

      isDarkTheme = !isDarkTheme;
    }
  });
}

task2()