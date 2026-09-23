// Names: __________________ & __________________


// ===== Part 1: Listening for a click =====



// ===== Part 2: One click, three listeners =====



// ===== Part 3: Tasks added later =====
// This button already works -- it adds a new <li> to the list each time.
// Do NOT change this function.
let taskCount = 3
document.getElementById("add-task").addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = "New task " + taskCount
    document.getElementById("task-list").appendChild(li)
    taskCount++
})



// ===== If you finish early =====
