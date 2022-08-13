//on clicking save button grabs sibling class of sveBtn (description) and saves both the parent class (hour__) and the text to be recalled later.
$(".saveBtn").click(function() {
    PlannerText = $(this).siblings(".description").val();
    TimeBlock = $(this).parent().attr("id");
    localStorage.setItem(TimeBlock,PlannerText);
  });

//gets information saved in local storage and populates on click in appropriate time sections.
$(".popBtn").click(function() {
    $("#hour09 .description").val(localStorage.getItem("hour09"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});

//clears local storage as well as refreshing the page to clear textarea.
$(".clearBtn").click(function() {
    localStorage.clear();
    location.reload(true);
});

window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD H:mm:ss'))
}, 1000);

function TimeCompare() {

    $(".time-block").each(function () {
        //sets up planner time by removing "hour" from the Id leaving the number and transforming from a string to an int. 
        PlanTime = parseInt($(this).attr("id").split("hour")[1]);
          //Gets the current hour number 0-23
        LocalTime = moment().hours();
        
        //Comparing planner time with local time and applying appropriate background classes
        if (PlanTime > LocalTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        else if (PlanTime == LocalTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
}

    TimeCompare();
