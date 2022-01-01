(function() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 5,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();
    var bttHeadroom = new Headroom(document.getElementById("btt"), {
        tolerance : 0,
        offset : 500,
        classes : {
            initial : "slide",
            pinned : "slide--reset",
            unpinned : "slide--down"
        }
    });
    bttHeadroom.init();
}());

    var readobj = {
        readSet: {
            colorStyle: "theme_yellow",
            fontStyle: "Microsoft YaHei",
            fontcolorStyle: "#000000",
            fontSize: parseInt(18),
            pageWidth: parseInt(960),
            scrollMode: parseInt(0),
            scrollSpeed: parseInt(5),
            autoNextPage: parseInt(0)
        },
    }
    Init(readobj);
    