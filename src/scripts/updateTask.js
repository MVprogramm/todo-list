import { getTasks } from "./storage.js";
import { renderTasks } from "./render.js";

export const onToggleTask = (event) => {
  let tasksList = getTasks();
  let eventId;

  if (event.target.classList.contains("list__item-checkbox")) {
    eventId = event.target.dataset.id;
  }

  if (event.target.classList.contains("list__item")) {
    eventId = event.target.firstChild.dataset.id;
  }

  tasksList = tasksList.map((task) => {
    if (task.id === eventId) {
      task.done = !task.done;
      task.act = new Date();
    }

    return task;
  });

  localStorage.setItem("tasksList", JSON.stringify(tasksList));

  renderTasks();
};
