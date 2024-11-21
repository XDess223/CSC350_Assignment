// HTML DOM elements
const categoryInput = document.getElementById('category');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks-list');

// Initialize an object to store tasks by category
const tasksByCategory = {};

// Add a task to the specified category
function addTask() {
    // Take value from input elements.
    const category = categoryInput.value
    const task = taskInput.value
    // Check category and task
    if (category && task) {
        // If there no input category, create the input category    
        if (!tasksByCategory[category]) {
            tasksByCategory[category] = [];
            // console.log(`${category} has been created`)
        }
        // Add task to the category
        tasksByCategory[category].push(task)
        // console.log(`${task} has been added to ${category}`)
    }
    // Clear input fields and update the displayed tasks
    categoryInput.value = ''
    taskInput.value = ''
    /* *** Display HTML Element Format ***
        <div id="tasks-list">
            <div class="category">
                <h3>House Chore</h3>
                <div class="task"><span>Wash dishes</span><button>Remove</button></div>
            </div>  
            <div class="category">
                <h3>Pets</h3>
                <div class="task"><span>Shower Ruff</span><button>Remove</button></div>
            </div>
        </div>
    */

    // Refresh displayed tasks
    listTasks();
}

// Display all tasks by category
function listTasks() {
    // Clear previous tasks
    tasksList.innerHTML = ''
    // list all tasks by category.
    for (const category in tasksByCategory) {
        const cateDiv = document.createElement('div');
        cateDiv.className = 'category'

        const cateTitle = document.createElement('h3');
        cateTitle.textContent = category;
        cateDiv.append(cateTitle);

        const taskTable = document.createElement('div');
        taskTable.className = 'task'

        tasksByCategory[category].forEach((task, index) => {
            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskTable.append(taskText);
            
            const delButton = document.createElement('button');
            delButton.textContent = 'Remove'
            delButton.onclick = () => removeTask(category, index)
            taskTable.append(delButton);




        });
        
        cateDiv.append(taskTable)
        // show the tasks in DOM element tasksList        
        tasksList.append(cateDiv)
    }

}


// Remove a task from the specified category
function removeTask(category, taskIndex) {

    // remove tasks from object tasksByCategory
    tasksByCategory[category].splice(taskIndex, 1)
    // If the category is empty after removal, delete the category
    if (tasksByCategory[category].length === 0) {
        delete tasksByCategory[category];
        // console.log(`${category} has been deleted`)
    }
    // Refresh displayed tasks
    listTasks(); 
}