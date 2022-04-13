import { renderTasks } from "./render.js";
import { initTodoListHandles } from "./todoList.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandles();
});

const onStorageChange = (event) => {
  if (event.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);
