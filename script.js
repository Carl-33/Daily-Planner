// add/change class of ".hour" to ".past" ".present" or ".future" depending on the current time


// add to local storage when save button is clicked
// pull from local storage when page is reloaded

// display the day at "#current-day"


// declare variables
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

var plannerRow = $(".planner-row")

// var hour = 18
var hour = moment().format('H');
console.log("the hour is " + hour)
currentDay.append(moment().format('MMMM Do YYYY'));

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