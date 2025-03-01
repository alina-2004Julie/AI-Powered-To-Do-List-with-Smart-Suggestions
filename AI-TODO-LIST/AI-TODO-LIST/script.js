// Function to add a task (called from add-task.html)
function addTask() {
    // Prevent default form submission behavior
    event.preventDefault();
  
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;
  
    if (title.trim() === "" || dueDate.trim() === "") {
      alert("Please enter a task title and due date.");
      return false;
    }
  
    // Determine task priority based on due date
    const priority = getAIPriority(dueDate);
  
    // Create a task object
    const task = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority.label,
      color: priority.color
    };
  
    // Retrieve existing tasks from localStorage, add the new one, and save back
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    alert("Task added successfully! 🎉");
    window.location.href = "index.html";
    return false;
  }
  
  // Function to determine task priority based on the due date
  function getAIPriority(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const diffTime = due - now;
    const diffDays = diffTime / (1000 * 3600 * 24);
    
    if (diffDays <= 1) {
      return { label: "High", color: "#dc3545" }; // red
    } else if (diffDays <= 3) {
      return { label: "Medium", color: "#ffcc00" }; // yellow
    } else {
      return { label: "Low", color: "#28a745" }; // green
    }
  }
  
  // Function to load tasks on the dashboard (index.html)
  function loadTasks() {
    const container = document.getElementById("tasksContainer");
    if (!container) return;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    container.innerHTML = "";
    tasks.forEach((task, index) => {
      container.innerHTML += `
        <div class="task" style="border-left: 8px solid ${task.color}; padding: 10px; margin: 10px; text-align: left; border-radius: 5px;">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p><strong>Due:</strong> ${task.dueDate}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <button onclick="deleteTask(${index})" class="delete-btn">❌ Delete</button>
        </div>
      `;
    });
  }
  
  // Function to delete a task and update the display
  function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
  
  // Load tasks automatically on the dashboard page
  document.addEventListener("DOMContentLoaded", loadTasks);