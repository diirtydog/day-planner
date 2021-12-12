// add queryselector for the button click
//var buttonEl = document.querySelector("#save-me");

// create an open array so the user text has a place to enter
var tasks = [];

// add the ability to edit these blocks
$(".row").on("click", "textarea", function() {
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
    //saveTasks();
});

$(".saveBtn").on('click', function() {
    var userInput = $(this)
    .siblings(".textarea")
    .val();
    var hourSpan = $(this)
    .parent()
    .attr('id')
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

});
// load items from storage
$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#1 .textarea").val(localStorage.getItem("1"));
$("#2 .textarea").val(localStorage.getItem("2"));
$("#3 .textarea").val(localStorage.getItem("3"));
$("#4 .textarea").val(localStorage.getItem("4"));
$("#5 .textarea").val(localStorage.getItem("5"));
$("#6 .textarea").val(localStorage.getItem("6"));
// add the ability to save these blocks in the local storage


//buttonEl.addEventListener("click", saveTasks);

//  $(".container").on("click", "textarea", function() {
//     // get the textarea's current value/text
//     var text = $(this)
//       .val()
//       .trim();
  
//     // get the parent's id attribute
//     var status = $(this)
//       .closest(".container")
//       .attr("id")
//       .replace("text-1", "");
  
//     // get the task's position in the list of other div elements
//     var index = $(this)
//       .closest(".container")
//       .index();
//     tasks[status][index].text = text;
//     saveTasks();
  
//     // recreate p element
//     var taskP = $("<span>")
//       .addClass("textarea col-8")
//       .text(text);
  
//     // replace textarea with p element
//     $(this).replaceWith(taskP);
//     console.log('click');
// });
  
// var loadTasks = function() {
//     var savedTasks = localStorage.getItem("#save-me");
  
//     if (!savedTasks) {
//       tasks = [];
//       return false;
//     }
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//     savedTasks = JSON.parse(savedTasks);
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {};
//     }
    
//     // loop over object properties
//     $.each(tasks, function(list, arr) {
//        //then loop over sub-array
//         arr.forEach(function(tasks) {
//             createTask(tasks.text, list);
//         });
//     });
// };
// loadTasks();
// // saveTasks();
// // console.log(tasks)
// // // make the blocks change color according to past present and future