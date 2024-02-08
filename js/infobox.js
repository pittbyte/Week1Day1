var photos = [
    { name: "winterland1", alt: "Forest with snow", title: "Winter Wonderland 1", caption: "Snowy Forest" },
    { name: "iceball", alt: "Snow ball on a branch", title: "Ice Ball", caption: "See Through Snow Ball" },
    { name: "Icedtrees", alt: "Snow mound with trees", title: "Iced Trees", caption: "Beautiful snow trees" },
    { name: "icytree", alt: "Treebranches with ice on it", title: "Icy Trees", caption: "Iced over branches" },
    { name: "snowcabin", alt: "Cabin out in the snow", title: "Snow Cabin", caption: "Cabin in the snow" },
    { name: "snowdock", alt: "Snow filled trees with a dock", title: "Snow Dock", caption: "Dock covered in snow" },
    { name: "snowdriveway", alt: "Snowy driveway", title: "Snow Driveway", caption: "Drive way with snow" },
    { name: "snowflake", alt: "Sowflake", title: "Snowflake", caption: "Frosted Snowflake" },
    { name: "snowylake", alt: "Snowy Lake", title: "Snowy Lake", caption: "Frosted over lake" },
    { name: "sunny", alt: "Sun shinning through over a snowy path", title: "Sunny Path", caption: "Path covered in snow" },
    { name: "trees", alt: "Snowy Trees", title: "Trees", caption: "Snow covered Trees" },
    { name: "snowcovedtrees", alt: "Trees with snow", title: "Trees", caption: "Trees with snow" },
    
];

var imageList = [];
var openList = "<li class='photo'>";
var closedList = "</li>";

for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var image = openList +
        "<img src='images/" + photo.name + ".jpg' alt='" + photo.alt + "' title='" + photo.title + "'>" +
        "<p class='description' data-index='" + i + "'>" + photo.caption + "</p>" +
        closedList;
    imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join(" ");

// Information Box functionality
var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var closeLink = document.getElementById("closeLink");

document.querySelectorAll('.description').forEach(function (element) {
    element.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        showInfoBox(photos[index]);
    });
});

closeLink.addEventListener('click', function () {
    hideInfoBox();
});

function showInfoBox(photo) {
    infoHeading.innerHTML = photo.caption;
    infoText.innerHTML = "Additional information goes here.";
    infoBox.style.display = "block";
}

function hideInfoBox() {
    infoBox.style.display = "none";
}