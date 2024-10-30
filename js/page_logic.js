$("#frontPage").hide();
$("#frontPage").show(1700);

$("#view-resume-btn").click(function () {
  $("#frontPage").hide(0);
  $("#resumePage").show(1700);
  shiftToResumeNavBar();
  window.location.href = "#video";
});


function toggleContent(containerId, button) {
  var content = $("#" + containerId);
  var arrow = button.querySelector(".collapseArrow");

  content.slideToggle();
  $(button).toggleClass("collapsed");
}
