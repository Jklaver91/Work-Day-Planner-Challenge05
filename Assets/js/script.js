//on clicking save button grabs sibling class of sveBtn (description) and saves both the parent class (hour__) and the text to be recalled later.
$( ".saveBtn" ).click(function() {
    PlannerText = $(this).siblings(".description").val();
    TimeBlock = $(this).parent().attr("id");
    localStorage.setItem(TimeBlock,PlannerText);
  });

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
