export function createTaskElement(task) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = task.id;

    const taskItemContainer = document.createElement("div");
    taskItemContainer.className = "task-item__main-container";

    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";

    const taskForm = document.createElement("form");
    taskForm.className = "checkbox-form";

    const taskInput = document.createElement("input");
    taskInput.className = "checkbox-form__checkbox";
    taskInput.type = "checkbox";
    taskInput.id = `task-${task.id}`;
    taskInput.checked = task.completed;

    const taskLabel = document.createElement("label");
    taskLabel.htmlFor = `task-${task.id}`;

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-item__text";
    taskSpan.textContent = task.text;

    const completeButton = document.createElement("button");
    completeButton.className =
      "task-item__delete-button default-button delete-button";
    completeButton.textContent = "Удалить";
    completeButton.setAttribute("data-delete-task-id", task.id);

    taskForm.append(taskInput, taskLabel);
    taskItemMainContent.append(taskForm, taskSpan);
    taskItemContainer.append(taskItemMainContent, completeButton);
    taskItem.append(taskItemContainer);

    return taskItem;
  }