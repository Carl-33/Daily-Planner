// add/change class of ".hour" to ".past" ".present" or ".future" depending on the current time  DONE


// add to local storage when save button is clicked
// pull from local storage when page is reloaded

// display the day at "#current-day" DONE


// declare variables

$(document).ready(function() {


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

var textAreaArray = [textArea9, textArea10, textArea11, textArea12, textArea1, textArea2, textArea3, textArea4, textArea5]
var saveBtnArray = [save9, save10, save11, save12, save1, save2, save3, save4, save5]
var plannerRow = $(".planner-row")

// var hour = 18
var hour = moment().format('H');
console.log("the hour is " + hour)
currentDay.append(moment().format('MMMM Do YYYY'));


save9.on("click",function(event) {
    event.preventDefault();

    var schedule = textArea9.text;
    localStorage.setItem("schedule", schedule);
    console.log(schedule)

    renderPlanner();

});

function renderPlanner () {
    var schedule = localStorage.getItem("Schedule" )

    timeBlock.textContent = schedule
};


if (hour < 9 ){
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
if (hour === 14){
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
if (hour === 15){
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
if(hour === 16) {
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
if(hour === 17){
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
    fourPM.addClass("past")
    fivePM.removeClass("future")
    fivePM.addClass("present")
}
if (hour > 17) {
    plannerRow.removeClass("future")
    plannerRow.addClass("past")
}



});