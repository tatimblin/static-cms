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
        // Floorplan
        // Story Flicker
        'images/assets/otto-story-ext.jpg',
        'images/assets/otto-story-hist-ext.jpg',
        'images/assets/otto-story-hist-int.jpg',
        // Brewerytown Slider
        'images/assets/otto-brewerytown-storefront.jpg',
        'images/assets/otto-brewerytown-philadelphia-skyline.jpg',
        // Plan Slider
        'images/assets/otto-plan-fairmount-park.jpg',
        'images/assets/otto-plan-glenwood-avenue.jpg',
        'images/assets/otto-plan-septa.jpg',
    ]).then(function(imgs) {
    console.log('images loaded');
}, function(errImg) {
    console.log('error loading images');
});