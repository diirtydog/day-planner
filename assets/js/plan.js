// get todays date and make hour variable
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
var timeCurrent = moment().format("HH")-6;
var tasks = [];
// call the timer function so it loads instantly on the page
timer();
function timer() {
  // loop over rows
  $(".row").each(function() {
      var setTime = parseInt($(this).attr('id'));
      timeCurrent = parseInt(timeCurrent)
      // To check the time and add the classes for background indicators
      if (timeCurrent == setTime) {
        $(this).addClass("present");
        $(this).children(".textarea").addClass("white-text");
      } else if (timeCurrent < setTime) {
        $(this).removeClass("present");
        $(this).children(".textarea").addClass("future");
      } else if (timeCurrent > setTime) {
        $(this).removeClass("future");
        $(this).children(".textarea").addClass("past");
      }
      console.log(setTime, timeCurrent);
  })
};

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
});

// save items 
$(".saveBtn").on('click', function() {
    var userInput = $(this)
    .siblings(".textarea")
    .val();
    var hourSpan = $(this)
    .parent()
    .attr('id')
    localStorage.setItem(hourSpan, userInput);
});

// load items from storage
$("#09 .textarea").val(localStorage.getItem("09"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#13 .textarea").val(localStorage.getItem("13"));
$("#14 .textarea").val(localStorage.getItem("14"));
$("#15 .textarea").val(localStorage.getItem("15"));
$("#16 .textarea").val(localStorage.getItem("16"));
$("#17 .textarea").val(localStorage.getItem("17"));
$("#18 .textarea").val(localStorage.getItem("18"));

// make an interval to audit tasks 
setInterval(function() {
  timer();
}, 35000);