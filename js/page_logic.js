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

$("#pictureHomeBtn,#nav-about,#portfolioRet").click(function () {
    $("#portfolioSelect").show(100);
    $("#about").show(100);
    $("#programming").hide(0);
    $("#video").hide(0);
    $("#music").hide(0);
    $("#animation").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").hide(0);
    $("#resumePage").hide(0);
    $("#frontPage").show(1700);
    shiftToGalleryNavBar();
    window.location.href = "#about";
});


// handle nav-bar

function shiftToGalleryNavBar() {
    $("#portfolioRet").hide(500);

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
    extra2.attr("href", "#live-production");
    extra2.text("Live Production");

    var extra3 = $("a[href='#extra3']");
    extra3.attr("href", "#gamedesign");
    extra3.text("Game Design");

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

    $("#portfolioRet").show(500);

    var animation = $("a[href='#animation']");
    animation.attr("href", "#extra1");
    animation.text("");

    var liveProduction = $("a[href='#live-production']");
    liveProduction.attr("href", "#extra2");
    liveProduction.text("");

    var gamedesign = $("a[href='#gamedesign']");
    gamedesign.attr("href", "#extra3");
    gamedesign.text("");

}

$("#nav-programming").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#video").hide(0);
    $("#music").hide(0);
    $("#animation").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").hide(0);
    $("#programming").show(1700);
});

$("#nav-video").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#programming").hide(0);
    $("#music").hide(0);
    $("#animation").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").hide(0);
    $("#video").show(1700);
});

$("#nav-music").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#programming").hide(0);
    $("#video").hide(0);
    $("#animation").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").hide(0);
    $("#music").show(1700);
});
$("#nav-animation").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#programming").hide(0);
    $("#video").hide(0);
    $("#music").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").hide(0);
    $("#animation").show(1700);
});
$("#nav-live-production").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#programming").hide(0);
    $("#video").hide(0);
    $("#music").hide(0);
    $("#animation").hide(0);
    $("#gamedesign").hide(0);
    $("#live-production").show(1700);
});
$("#nav-gamedesign").click(function () {
    $("#portfolioSelect").hide(0);
    $("#about").hide(0);
    $("#programming").hide(0);
    $("#video").hide(0);
    $("#music").hide(0);
    $("#animation").hide(0);
    $("#live-production").hide(0);
    $("#gamedesign").show(1700);
});