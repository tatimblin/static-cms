function preloadImages(srcs) {
    function loadImage(src) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = img.onabort = function() {
                reject(src);
            };
            img.src = src;
        });
    }
    var promises = [];
    for (var i = 0; i < srcs.length; i++) {
        promises.push(loadImage(srcs[i]));
    }
    return Promise.all(promises);
}

preloadImages(
    [
        // Hero Slider
        'images/assets/otto-hero-commute.jpg', 
        'images/assets/otto-hero-nature.jpg', 
        'images/assets/otto-hero-community.jpg',
        // Story Flicker
        'images/assets/otto-story-wolf.jpg',
        'images/assets/otto-story-ext.jpg',
        'images/assets/otto-story-hist-ext.png',
        'images/assets/otto-story-hist-int.png',
        // Brewerytown Slider
        'images/assets/otto-brewerytown-storefront.jpg',
        'images/assets/otto-brewerytown-philadelphia-skyline.jpg',
        // Plan Slider
        'images/assets/otto-plan-fairmount-park.jpg',
        'images/assets/otto-plan-glenwood-avenue.jpg',
        'images/assets/otto-plan-septa.jpg',
        // Floorplan
        'images/assets/floorplan/floorplan-otto-201.jpg',
        'images/assets/floorplan/floorplan-otto-202.jpg',
        'images/assets/floorplan/floorplan-otto-203.jpg',
        'images/assets/floorplan/floorplan-otto-204.jpg',
        'images/assets/floorplan/floorplan-otto-205.jpg',
        'images/assets/floorplan/floorplan-otto-301.jpg',
        'images/assets/floorplan/floorplan-otto-302.jpg',
        'images/assets/floorplan/floorplan-otto-303.jpg',
        'images/assets/floorplan/floorplan-otto-304.jpg',
        'images/assets/floorplan/floorplan-otto-305.jpg',
        'images/assets/floorplan/floorplan-otto-401.jpg',
        'images/assets/floorplan/floorplan-otto-402.jpg',
        'images/assets/floorplan/floorplan-otto-403.jpg',
        'images/assets/floorplan/floorplan-otto-404.jpg',
        'images/assets/floorplan/floorplan-otto-405.jpg',
        'images/assets/floorplan/floorplan-otto-ph01.jpg',
        'images/assets/floorplan/floorplan-otto-ph02.jpg',
        'images/assets/floorplan/floorplan-otto-ph03.jpg',
        'images/assets/floorplan/floorplan-otto-ph04.jpg',
    ]).then(function(imgs) {
    console.log('images loaded');
}, function(errImg) {
    console.log('error loading images');
});