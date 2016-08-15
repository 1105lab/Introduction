//Sliding Effect Control
head.js("assets/js/skin-select/skin-select.js");

// Acordion and Sliding menu

head.js("assets/js/custom/scriptbreaker-multiple-accordion-1.js", function() {

    $(".topnav").accordionze({
        accordionze: true,
        speed: 500,
    });

});


//SEARCH MENU
head.js("assets/js/search/jquery.quicksearch.js", function() {

    $('input.id_search').quicksearch('#menu-showhide li, .menu-left-nest li');

});

//TOOL TIP

head.js("assets/js/tip/jquery.tooltipster.js", function() {

    $('.tooltip-tip-x').tooltipster({
        position: 'right'

    });

    $('.tooltip-tip').tooltipster({
        position: 'right',
        animation: 'slide',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetX: '-12px',
        onlyOne: true

    });
    $('.tooltip-tip2').tooltipster({
        position: 'right',
        animation: 'slide',
        offsetX: '-12px',
        theme: '.tooltipster-shadow',
        onlyOne: true

    });
    $('.tooltip-top').tooltipster({
        position: 'top'
    });
    $('.tooltip-right').tooltipster({
        position: 'right'
    });
    $('.tooltip-left').tooltipster({
        position: 'left'
    });
    $('.tooltip-bottom').tooltipster({
        position: 'bottom'
    });
    $('.tooltip-reload').tooltipster({
        position: 'right',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
    $('.tooltip-fullscreen').tooltipster({
        position: 'left',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
});

//PAGE LOADER
head.js("assets/js/pace/pace.js", function() {

    paceOptions = {
        ajax: false, // disabled
        document: false, // disabled
        eventLag: false, // disabled
        elements: {
            selectors: ['.my-page']
        }
    };

});