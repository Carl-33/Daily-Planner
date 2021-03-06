
$(document).ready(function () {
    // declaring variables
    var saveBtn = $(".saveBtn")
    var currentDay = $("#currentDay")
    var nineAM = $('#9AM')
    var tenAM = $("#10AM")
    var elevenAM = $("#11AM")
    var twelvePM = $("#12PM")
    var onePM = $("#1PM")
    var twoPM = $("#2PM")
    var threePM = $("#3PM")
    var fourPM = $("#4PM")
    var fivePM = $("#5PM")
    var timeBlock = $(".time-block")
    var save9 = $("#save-button-9AM")
    var save10 = $("#save-button-10AM")
    var save11 = $("#save-button-11AM")
    var save12 = $("#save-button-12PM")
    var save1 = $("#save-button-1PM")
    var save2 = $("#save-button-2PM")
    var save3 = $("#save-button-3PM")
    var save4 = $("#save-button-4PM")
    var save5 = $("#save-button-5PM")
    var textArea9 = $("#text-area-9AM")
    var textArea10 = $("#text-area-10AM")
    var textArea11 = $("#text-area-11AM")
    var textArea12 = $("#text-area-12PM")
    var textArea1 = $("#text-area-1PM")
    var textArea2 = $("#text-area-2PM")
    var textArea3 = $("#text-area-3PM")
    var textArea4 = $("#text-area-4PM")
    var textArea5 = $("#text-area-5PM")
    // Setting the current hour
    // var time = moment().format('H');
    var time = 10
    var hour = parseInt(time);
    // Setting all save buttons and text areas into arrays
    var textAreaArray = [textArea9, textArea10, textArea11, textArea12, textArea1, textArea2, textArea3, textArea4, textArea5]
    var saveBtnArray = [save9, save10, save11, save12, save1, save2, save3, save4, save5]
    var plannerRow = $(".planner-row")
    // Setting the current day.
    currentDay.append(moment().format('MMMM Do YYYY'));
    // Changing the coloring of the rows depending on the hour.  Gray for past, red for current, and green for future.
    if (hour < 9) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
    }
    if (hour === 9) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("present")
        nineAM.removeClass("future")
    }
    if (hour === 10) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("present")
    }
    if (hour === 11) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.removeClass("future")
        elevenAM.addClass("present")
    }
    if (hour === 12) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.addClass("past")
        elevenAM.removeClass("future")
        twelvePM.removeClass("future")
        twelvePM.addClass("present")
    }
    if (hour === 13) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.removeClass("future")
        elevenAM.addClass("past")
        twelvePM.removeClass("future")
        twelvePM.addClass("past")
        onePM.removeClass("future")
        onePM.addClass("present")
    }
    if (hour === 14) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.removeClass("future")
        elevenAM.addClass("past")
        twelvePM.removeClass("future")
        twelvePM.addClass("past")
        onePM.removeClass("future")
        onePM.addClass("past")
        twoPM.removeClass("future")
        twoPM.addClass("present")
    }
    if (hour === 15) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.removeClass("future")
        elevenAM.addClass("past")
        twelvePM.removeClass("future")
        twelvePM.addClass("past")
        onePM.removeClass("future")
        onePM.addClass("past")
        twoPM.removeClass("future")
        twoPM.addClass("past")
        threePM.removeClass("future")
        threePM.addClass("present")
    }
    if (hour === 16) {
        plannerRow.removeClass("past")
        plannerRow.removeClass("present")
        nineAM.addClass("past")
        nineAM.removeClass("future")
        tenAM.removeClass("future")
        tenAM.addClass("past")
        elevenAM.removeClass("future")
        elevenAM.addClass("past")
        twelvePM.removeClass("future")
        twelvePM.addClass("past")
        onePM.removeClass("future")
        onePM.addClass("past")
        twoPM.removeClass("future")
        twoPM.addClass("past")
        threePM.removeClass("future")
        threePM.addClass("past")
        fourPM.removeClass("future")
        fourPM.addClass("present")
    }
    if (hour === 17) {
        plannerRow.addClass("past")
        plannerRow.removeClass("present")
        plannerRow.removeClass("future")
        fivePM.removeClass("past")
        fivePM.addClass("present")
    }
    if (hour > 17) {
        plannerRow.removeClass("future")
        plannerRow.addClass("past")
    }
    // setting item to local storage whenever the corresponding save button is pressed
    for (let i = 0; i < saveBtnArray.length; i++) {
        saveBtnArray[i].on("click", function () {

            var schedule = textAreaArray[i].val();
            localStorage.setItem("schedule " + i, schedule)
        });

    }
    // Getting items from local storage for each hour
    var schedule0 = localStorage.getItem("schedule 0")
    var schedule1 = localStorage.getItem("schedule 1")
    var schedule2 = localStorage.getItem("schedule 2")
    var schedule3 = localStorage.getItem("schedule 3")
    var schedule4 = localStorage.getItem("schedule 4")
    var schedule5 = localStorage.getItem("schedule 5")
    var schedule6 = localStorage.getItem("schedule 6")
    var schedule7 = localStorage.getItem("schedule 7")
    var schedule8 = localStorage.getItem("schedule 8")
// if the local storage doesn't equal null, the saved value will be appended 
    if (schedule0 != null) {
        textArea9.append(schedule0)
    }
    if (schedule1 != null) {
        textArea10.append(schedule1)
    }
    if (schedule2 != null) {
        textArea11.append(schedule2)
    }
    if (schedule3 != null) {
        textArea12.append(schedule3)
    }
    if (schedule4 != null) {
        textArea1.append(schedule4)
    }
    if (schedule5 != null) {
        textArea2.append(schedule5)
    }
    if (schedule6 != null) {
        textArea3.append(schedule6)
    }
    if (schedule7 != null) {
        textArea4.append(schedule7)
    }
    if (schedule8 != null) {
        textArea5.append(schedule8)
    } else {
        textArea5.text('');
    }
    // Creating and appending clear buttons to each row
    var clearButton9 = $("<button>")
    clearButton9.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton9.text("Clear")
    $("#9AM").append(clearButton9)

    var clearButton10 = $("<button>")
    clearButton10.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton10.text("Clear")
    $("#10AM").append(clearButton10)

    var clearButton11 = $("<button>")
    clearButton11.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton11.text("Clear")
    $("#11AM").append(clearButton11)

    var clearButton12 = $("<button>")
    clearButton12.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton12.text("Clear")
    $("#12PM").append(clearButton12)

    var clearButton1 = $("<button>")
    clearButton1.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton1.text("Clear")
    $("#1PM").append(clearButton1)

    var clearButton2 = $("<button>")
    clearButton2.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton2.text("Clear")
    $("#2PM").append(clearButton2)

    var clearButton3 = $("<button>")
    clearButton3.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton3.text("Clear")
    $("#3PM").append(clearButton3)

    var clearButton4 = $("<button>")
    clearButton4.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton4.text("Clear")
    $("#4PM").append(clearButton4)

    var clearButton5 = $("<button>")
    clearButton5.addClass("clear col-lg-1 col-md-1 col-sm-1 col-1")
    clearButton5.text("Clear")
    $("#5PM").append(clearButton5)
// array of all the clear buttons
    var clearBtnArray = [clearButton9, clearButton10, clearButton11, clearButton12, clearButton1, clearButton2, clearButton3, clearButton4, clearButton5]
// Sets local storage for the coresponding hour to ""
    for (let j = 0; j < clearBtnArray.length; j++) {
        clearBtnArray[j].on("click", function () {
            var schedule = ""
            localStorage.setItem("schedule " + j, schedule)
        });
    }
});