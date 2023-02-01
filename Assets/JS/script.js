var today = dayjs();
$("#currentDay").text(today.format('MMM D, YYYY'));

$(document).ready ($(function () {

// Function to save time block and task user inputs
  $(".saveBtn").click(function(){
      var hour = $(this).parent().attr("id");
      var hourlyTask = $(this).siblings(".description").val();
      localStorage.setItem(hour,hourlyTask);
  })}))
