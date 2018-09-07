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
        'images/assets/otto-story-hist-ext.png',
        'images/assets/otto-story-hist-int.png'
        // Brewerytown Slider
        // Plan Slider
    ]).then(function(imgs) {
    console.log('images loaded');
}, function(errImg) {
    console.log('error loading images');
});