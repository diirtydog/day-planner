// create an open array so the user text has a place to enter
var tasks = {};


//<div class="row col-12">
        //<h3 class="time-block col-2 hour">9AM</h3>
        //<span class="textarea col-8">Enter Activities</span>
        //<button class="saveBtn col-2 bi bi-save"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
          //<path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
        //</svg></button>
      //</div>
// generate html blocks for each hour of the day
var createTask = function(tasks) {
    var taskDiv = $("<div>").addClass("row col-12");
    var taskH3 = $('<h3>').addClass('time-block col-2 hour').text("9AM");
    var taskSpan = $('<span>').addClass('textarea col-8').text('Enter Activities');
    var taskBtn = $('<button>').addClass('saveBtn col-2').text();
    $('container').append(taskDiv, taskH3, taskSpan, taskBtn);
}

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
  });

createTask();
console.log(createTask)
// add the ability to edit these blocks

// add the ability to save these blocks in the local storage

// make the blocks change color according to past present and future