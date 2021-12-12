let update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "dddd, MMM Do, h:mm:ss a"
  );
};
setInterval(update, 1000);

//Clear Btns
// $("#9AMClearBTN").click(function () {
//   $("#9").val("");
//   localStorage.setItem(9, "");
// });

// $("#10AMClearBTN").click(function () {
//   $("#10").val("");
//   localStorage.setItem(10, "");
// });

// $("#11AMClearBTN").click(function () {
//   $("#11").val("");
//   localStorage.setItem(11, "");
// });

// $("#12PMClearBTN").click(function () {
//   $("#12").val("");
//   localStorage.setItem(12, "");
// });

// $("#1PMClearBTN").click(function () {
//   $("#13").val("");
//   localStorage.setItem(13, "");
// });

// $("#2PMClearBTN").click(function () {
//   $("#14").val("");
//   localStorage.setItem(14, "");
// });

// $("#3PMClearBTN").click(function () {
//   $("#15").val("");
//   localStorage.setItem(15, "");
// });

// $("#4PMClearBTN").click(function () {
//   $("#16").val("");
//   localStorage.setItem(16, "");
// });

//Save Btns

$(document).ready(function () {
  let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  function renderPlans() {
    for (let i = 0; i <= timeSlots.length; i++) {
      $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
    }
  }
  renderPlans();

  $(".saveBtn").click(function () {
    let dataHour = $(this).attr("data-hour");
    let inputField = $("#" + dataHour).val();

    localStorage.setItem(dataHour, inputField);
    console.log(inputField);
  });
});

// Change color based on time
const rows = $(".row");
let currentHour = parseInt(moment().hours());

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour < 8) {
    rowHour += 12;
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "lightgreen");
    } else if (currentHour < rowHour) {
      setColor(row, "lightgrey");
    } else if (currentHour > rowHour) {
      setColor(row, "grey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}



// add queryselector for the button click
// var buttonEl = document.querySelector("#save-me");

// // create an open array so the user text has a place to enter
// var tasks = [];

// var textOne = $("#text-1");

// let update = function () {
//   document.getElementById("currentDay").innerHTML = moment().format(
//     "dddd, MMM Do, h:mm:ss a"
//   );
// };
// setInterval(update, 1000);

// // add the ability to edit these blocks
// $(".container").on("click", "span", function() {
//     var text = $(this)
//     .text()
//     .trim();
//     var textInput = $("<textarea>")
//       .addClass("textarea col-8")
//       .val(text)
//     $(this).replaceWith(textInput);
//       textInput.trigger("focus");
// });
//     console.log(this);
//     tasks.push(textInput)
//     //saveTasks();
// });

// $(document).ready(function () {
//   let timeSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   function renderPlans() {
//     for (let i = 0; i <= timeSlots.length; i++) {
//       $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
//     }
//   }
//   renderPlans();

//   $(".saveBtn").click(function () {
//     let dataHour = $(this).attr("data-hour");
//     let inputField = $("#" + dataHour).val();

//     localStorage.setItem(dataHour, inputField);
//     console.log(inputField);
//   });
// });

// const rows = $(".row");
// let currentHour = parseInt(moment().hours());

// Array.from(rows).forEach((row) => {
//   let rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour < 8) {
//     rowHour += 12;
//   }
//   if (rowHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(row, "lightgreen");
//     } else if (currentHour < rowHour) {
//       setColor(row, "lightgrey");
//     } else if (currentHour > rowHour) {
//       setColor(row, "grey");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

// // load activities onto the page
// var loadPage = function() {
//   var loadOne = JSON.parse(localStorage.getItem(".textarea"));
//   textOne.val(loadOne);
// }

// // save user input to load up later
// $("#save-me").click(function() {
//     userInput = $(this).siblings(".textarea").val().trim();
//     hourSpan = $(this).siblings(".time-block").text().trim();
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));
// });

// loadPage();

// // add the ability to save these blocks in the local storage
// // var saveTasks = function() {
// //     localStorage.setItem("tasks", JSON.stringify(tasks));
// // };

// // buttonEl.addEventListener("click", saveTasks);

// //  $(".container").on("click", "textarea", function() {
// //     // get the textarea's current value/text
// //     var text = $(this)
// //       .val()
// //       .trim();
  
// //     // get the parent's id attribute
// //     var status = $(this)
// //       .closest(".container")
// //       .attr("id")
// //       .replace("text-1", "");
  
// //     // get the task's position in the list of other div elements
// //     var index = $(this)
// //       .closest(".container")
// //       .index();
// //     tasks[status][index].text = text;
// //     saveTasks();
  
// //     // recreate p element
// //     var taskP = $("<span>")
// //       .addClass("textarea col-8")
// //       .text(text);
  
// //     // replace textarea with p element
// //     $(this).replaceWith(taskP);
// //     console.log('click');
// // });
  
// // var loadTasks = function() {
// //     var savedTasks = localStorage.getItem("tasks");
  
// //     if (!savedTasks) {
// //       tasks = [];
// //       return false;
// //     }
// //     tasks = JSON.parse(localStorage.getItem("tasks"));
// //     savedTasks = JSON.parse(savedTasks);
// //     // if nothing in localStorage, create a new object to track all task status arrays
// //     if (!tasks) {
// //       tasks = {};
// //     }
    
// //     // loop over object properties
// //     $.each(tasks, function(list, arr) {
// //        //then loop over sub-array
// //         arr.forEach(function(tasks) {
// //             createTask(tasks.text, list);
// //         });
// //     });
// // };
// // loadTasks();
// // // saveTasks();
// // // console.log(tasks)
// // // // make the blocks change color according to past present and future