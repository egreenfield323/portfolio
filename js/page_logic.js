$("#resumePage").hide();
$("#frontPage").hide();
$("#frontPage").show(1700);

$("#view-resume-btn").click(function () {
    $("#frontPage").hide(0);
    $("#resumePage").show(1700);
    shiftToResumeNavBar();
    window.location.href = "#video";
});

$("#view-gallery-btn").click(function () {
    $("#resumePage").hide(0);
    $("#frontPage").show(1700);
    shiftToGalleryNavBar();
    window.location.href = "#about";
});

$("#pictureHomeBtn").click(function () {
    $("#resumePage").hide(0);
    $("#frontPage").show(1700);
    shiftToGalleryNavBar();
    window.location.href = "#about";
});


// handle nav-bar

function shiftToGalleryNavBar() {
    var experience = $("a[href='#experience']");
    experience.attr("href", "#about");
    experience.text("About");

    var education = $("a[href='#education']");
    education.attr("href", "#programming");
    education.text("Programming");

    var interests = $("a[href='#interests']");
    interests.attr("href", "#video");
    interests.text("Video");
    
    var skills = $("a[href='#skills']");
    skills.attr("href", "#music");
    skills.text("Music");
    
    var extra1 = $("a[href='#extra1']");
    extra1.attr("href", "#animation");
    extra1.text("Animation");
    
    var extra2 = $("a[href='#extra2']");
    extra2.attr("href", "#service");
    extra2.text("Service");

    var extra3 = $("a[href='#extra3']");
    extra3.attr("href", "#school");
    extra3.text("School Activities");

}

function shiftToResumeNavBar() {
    var about = $("a[href='#about']");
    about.attr("href", "#experience");
    about.text("Experience");

    var programming = $("a[href='#programming']");
    programming.attr("href", "#education");
    programming.text("Education");

    var video = $("a[href='#video']");
    video.attr("href", "#interests");
    video.text("Interests");

    var music = $("a[href='#music']");
    music.attr("href", "#skills");
    music.text("Skills");

    var animation = $("a[href='#animation']");
    animation.attr("href", "#extra1");
    animation.text("");

    var service = $("a[href='#service']");
    service.attr("href", "#extra2");
    service.text("");

    var school = $("a[href='#school']");
    school.attr("href", "#extra3");
    school.text("");

}