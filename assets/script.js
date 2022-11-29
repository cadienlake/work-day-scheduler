$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    // Select the parent element by it's id of the button clicked
    let parent = $(this).parent().attr("id");
    // target the value entered in the text entry
    let description = $(this).siblings(".description").val();
    console.log(parent, description);
    // store the hour as key and text as value
    localStorage.setItem(parent, description);
  });

  // display the date by utilizing dayjs
  let date = dayjs().format("MMM D, YYYY");
  $("#currentDay").text(date);

  // apply the correct class for past, present, or future based on the hour provided by dayjs
  $(".time-block").each(function () {
    let hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < dayjs().hour()) {
      $(this).addClass("past");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // retrieve the text stored in local storage for every hour.
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
});
