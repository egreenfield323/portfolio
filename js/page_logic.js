$("#resumePage").hide();
$("#frontPage").hide();
$("#frontPage").show(2200);

$("#view-resume-btn").click(function () {
    $("#frontPage").hide(0);
    $("#resumePage").show(2200);
    shiftToResumeNavBar();
    window.location.href = "#video";
});

$("#view-gallery-btn").click(function () {
    $("#resumePage").hide(0);
    $("#frontPage").show(2200);
    shiftToGalleryNavBar();
    window.location.href = "#about";
});

$("#pictureHomeBtn").click(function () {
    $("#resumePage").hide(0);
    $("#frontPage").show(2200);
    shiftToGalleryNavBar();
    window.location.href = "#about";
});


// handle nav-bar

function shiftToGalleryNavBar() {
    var experience = $("a[href='#experience']");
    experience.attr("href", "#about");
    experience.text("About");

    var education = $("a[href='#education']");
    education.attr("href", "#video");
    education.text("Video");

    var interests = $("a[href='#interests']");
    interests.attr("href", "#music");
    interests.text("Music");

    var skills = $("a[href='#skills']");
    skills.attr("href", "#animation");
    skills.text("Animation");

    var extra1 = $("a[href='#extra1']");
    extra1.attr("href", "#service");
    extra1.text("Service");

    var extra2 = $("a[href='#skills']");
    extra2.attr("href", "#school");
    extra2.text("School Activities");
}

function shiftToResumeNavBar() {
    var about = $("a[href='#about']");
    about.attr("href", "#experience");
    about.text("Experience");

    var video = $("a[href='#video']");
    video.attr("href", "#education");
    video.text("Education");

    var music = $("a[href='#music']");
    music.attr("href", "#interests");
    music.text("Interests");

    var animation = $("a[href='#animation']");
    animation.attr("href", "#skills");
    animation.text("Skills");

    var service = $("a[href='#service']");
    service.attr("href", "#extra1");
    service.text("");

    var school = $("a[href='#school']");
    school.attr("href", "#extra2");
    school.text("");

}