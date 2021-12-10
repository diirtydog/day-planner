// add queryselector for the button click
var buttonEl = document.querySelector("#save-me");

// create an open array so the user text has a place to enter
var tasks = [];

// add the ability to edit these blocks
$(".container").on("click", "span", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
      .addClass("textarea col-8")
      .val(text);
    $(this).replaceWith(textInput);
      textInput.trigger("focus");
    console.log(this);
    tasks.push(textInput)
    saveTasks();
});

$("#save-me").click(function() {
    var taskText = $("<textarea>").val();

    if (taskText) {
        loadTasks;

    }
})

// add the ability to save these blocks in the local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

buttonEl.addEventListener("click", saveTasks);

 $(".container").on("click", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
  
    // get the parent's id attribute
    var status = $(this)
      .closest(".container")
      .attr("id")
      .replace("text-1", "");
  
    // get the task's position in the list of other div elements
    var index = $(this)
      .closest(".container")
      .index();
    tasks[status][index].text = text;
    saveTasks();
  
    // recreate p element
    var taskP = $("<span>")
      .addClass("textarea col-8")
      .text(text);
  
    // replace textarea with p element
    $(this).replaceWith(taskP);
    console.log('click');
});
  
var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");
  
    if (!savedTasks) {
      tasks = [];
      return false;
    }
    tasks = JSON.parse(localStorage.getItem("tasks"));
    savedTasks = JSON.parse(savedTasks);
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {};
    }
    
    // loop over object properties
    $.each(tasks, function(list, arr) {
       //then loop over sub-array
        arr.forEach(function(tasks) {
            createTask(tasks.text, list);
        });
    });
};
loadTasks();
// saveTasks();
// console.log(tasks)
// // make the blocks change color according to past present and future