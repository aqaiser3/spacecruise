function addTask() {
    // Get the input field and its value
    var input = document.getElementById("task-input");
    var taskText = input.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    var li = document.createElement("li");

    // Add task text to the list item
    li.textContent = taskText;

    // Create a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    // Add an event listener to the delete button
    deleteButton.onclick = function () {
        li.remove();
    };

    // Add the delete button to the list item
    li.appendChild(deleteButton);

    // Add the list item to the task list
    document.getElementById("task-list").appendChild(li);

    // Clear the input field
    input.value = "";
}