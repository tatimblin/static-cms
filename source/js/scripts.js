var heroSlider = new Vue({
    el: '#hero-content',
    data: {
        index: 0,
        slides: [  
            {
                callout: 'Own A Home Stay In The City', 
                img: 'images/assets/otto-hero-community.jpg'
            },
            {
                callout: 'Drive To Work Bike To Dinner', 
                img: 'images/assets/otto-hero-commute.jpg'
            }, 
            {
                callout: 'Urban Living Close To Nature', 
                img: 'images/assets/otto-hero-nature.jpg'
            }
        ]
    },
    methods: {
        nextSlide() {
            if (this.index >= this.slides.length - 1) {
                this.index = 0
            } else {
                ++this.index
            }
            console.log('next');
        },
        prevSlide() {
            if (this.index === 0) {
                this.index = this.slides.length - 1
            } else {
                --this.index
            }
            console.log('next');
        }
    }
})


var FloorplanApp = new Vue({
    el: '#fp-app',
    data: {
        number: 0,
        tweenedNumber: 100000,
        index: 0,
        units: [
            {
                title: 'The Studio',
                desc: 'The Studio is for those who want to own a piece of Brewerytown, but don’t necessarily need all that extra space.',
                price: '100000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'Boden',
                desc: 'The Boden floor plan features 1-bedroom condos that are ideally priced to start building your life from the ground up.',
                price: '200000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'The Mitte',
                desc: 'The Mitte floor plan features 2-bedroom condos—giving you a little extra space for out-of-town visitors or a growing family.',
                price: '350000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'The Oben',
                desc: 'If you’re looking for a more spacious layout, The Oben is for you. Our penthouse condos feature two or three bedroom floor plans and plenty of room to do your thing.',
                price: '600000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            }
        ]
    },
    computed: {

        animatedNumber: function() {
   
            let num = this.tweenedNumber
            let result = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',')
            console.log(result);
            return result
            
        }

      },
      watch: {
        number: function(newValue) {
            
          TweenLite.to(this.$data, 1, { tweenedNumber: newValue });
        }
      },
      methods: {
        countPrice: function(i) {

            console.log(this.number);
            this.index = i
            this.number = this.units[i].price
 
            


        }
      }
    
})



var planSlider = new Vue({
    el: '#plan-slider',
    data: {
        index: 0,
        slides: [  
            {
                title: 'Fairmount Park Penn Praxis',
                image: 'images/assets/otto-plan-fairmount-park.jpg',
                desc: 'Philadelphia Parks & Recreation a partnering with Penn Praxis to more successfully connect East and West Fairmount Park. The result will create new recreational space, greater accessibility, and new or improved amenities throughout the park.',
            },
            {
                title: 'Septa BRT-Lite Plan',
                image: 'images/assets/otto-plan-septa.jpg',
                desc: 'Septa’s proposed bus route offering one-seat rides through University City from Brewerytown and Fairmount. The buses will run every 15 minutes during rush hour and drastically simplify the commute for Brewerytown residents.',
            },
            {
                title: 'Red Bell Brewing',
                image: 'images/assets/otto-plan-glenwood-avenue.jpg',
                desc: 'Neighborhood icon and long-vacant Red Bell Brewing is being revived by MMPartners. When finished, the historic facade will house 147 apartments and ground floor retail space.',
            }
        ]
    },
    methods: {
        nextSlide() {
            if(this.index >= this.slides.length - 1){
                this.index = 0;
            } else{
                ++this.index
            }

        },
        prevSlide() {
            if(this.index <= 0){
                this.index = this.slides.length - 1;
            } else{
                --this.index
            }

        }
        
    },
    watch: {
        
    }
})


var locationSlider = new Vue({
    el: '#location-slider',
    data: {
        index: 0,
        slides: [  
            'images/assets/otto-brewerytown-storefront.jpg',
            'images/assets/otto-brewerytown-philadelphia-skyline.jpg',
        ]
    },
    computed: {
        upNext: function() {
            if(this.index >= this.slides.length - 1){
                return 0;
            } else{
                return this.index + 1
            }
        }
    },
    methods: {
        nextSlide() {
            if(this.index >= this.slides.length - 1){
                this.index = 0;
            } else{
                ++this.index
            }
            


        },
        prevSlide() {
            if(this.index <= 0){
                this.index = this.slides.length - 1;
            } else{
                --this.index
            }

        }
        
    }
})


var StoryImg = new Vue ({
    el: '#story-img-app',
    data: function() {
        return {
            images: [
                'images/assets/otto-story-hist-ext.png',
                'images/assets/otto-story-hist-int.png',
                'images/assets/otto-story-ext.jpg'
            ],
            ticks: 0,
            index: 0
        }
    },
    methods: {
        tick () {
            this.ticks++

            if (this.index === this.images.length - 1) {
                this.index = 0
            } else {
                this.index++
            }
        }
    },
    created () {
        this.$options.interval = setInterval(this.tick, 6000)
    },
    beforeDestroy () {
        clearInterval(this.$options.interval)
    }
})


// Neighborhood Map
mapboxgl.accessToken = 'pk.eyJ1IjoidGF0aW1ibGluIiwiYSI6ImNqM2RkZzNqNDAwMGMzM281dTdqMnNuNnYifQ.f-78RB94egBVWUwbVNYAig';
var bounds = [
    [-75.218, 39.957], // Southwest coordinates
    [-75.142, 40]  // Northeast coordinates
];
var map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/tatimblin/cjlpdu49w3q6s2rrqjeqff1uh',
    zoom: 12,
    maxBounds: bounds,
    center: [-75.185378, 39.979700],
});

var toggleableLayerIds = [ 'food-drink', 'nature-travel', '31st-street-then', '31st-street-now' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    if ( i < 3 || i > 5) {
        link.className = 'active';
    }
    else {
        link.className = '';
    }
    link.idName = id;
    var prettyId = id.replace(new RegExp("\\-","g"),' ');
    link.textContent = prettyId;

    link.onclick = function (e) {

        var clickedLayer = this.idName;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
            //console.log(clickedLayer);
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            //console.log(i);
        }
    };
    map.scrollZoom.disable();

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}


var footer = new Vue ({
    el: '#parallax',
    data () {
        return {
            scrollPos: 0
        }
    },
    methods: {
        parallax () {
            this.scrolled = window.scrollY
            console.log(this.scrollPos)
        }
    },
    created () {
        window.addEventListener('scroll', this.parallax)
    },
    destroyed () {
        window.removeEventListener('scroll', this.parallax)
    }
})


// Intro Images
ScrollReveal().reveal('.intro-copy-stamp', { container: '.smooth-scroll', delay: 400, distance: '10px', scale: 0.92 });
ScrollReveal().reveal('.intro-collage-img img', { container: '.smooth-scroll', delay: 250, interval: 20, distance: '10px', scale: 0.96 });

// Amenity List
ScrollReveal().reveal('.amenities-main-list li', { container: '.smooth-scroll', delay: 150, interval: 40, distance: '10px'});

// Floorplan
ScrollReveal().reveal('.fp-app-content-floorplan img', { container: '.smooth-scroll', delay: 150, distance: '10px', scale: 0.96 });

// Story images
ScrollReveal().reveal('.story-entry img', { container: '.smooth-scroll', delay: 150, interval: 10, distance: '10px', scale: 0.96 });
ScrollReveal().reveal('.story-entry-logo', { container: '.smooth-scroll', delay: 150, scale: 0.96 });
ScrollReveal().reveal('.story-img', { container: '.smooth-scroll', delay: 150, distance: '10px', scale: 0.96 });

// Brewerytown Drawn Map
ScrollReveal().reveal('.location-main img', { container: '.smooth-scroll', delay: 200, distance: '10px', scale: 0.96 });

// Footer
ScrollReveal().reveal('.pre-footer-content', { container: '.smooth-scroll', distance: '30px', scale: 0.8 });