var nav = new Vue({
    el: '#nav',
    data: {
        isOpen: false
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen
        },
        closeNav() {
            this.isOpen = false
        }
    }
})

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
        },
        prevSlide() {
            if (this.index === 0) {
                this.index = this.slides.length - 1
            } else {
                --this.index
            }
        }
    }
})


var FloorplanApp = new Vue({
    el: '#fp-app',
    data() {
        const context = require.context('~/content/floorplan/units/', false, /\.json$/);
        const posts = context.keys().map(key => ({
            ...context(key) 
        }));
        return {
        posts,
        number: 0,
        tweenedNumber: 100000,
        index: 0,
        isOpen: false,
        isExpand: false,
        subIndex: 0,
        categories: [
            {
                title: 'The Studio',
                desc: 'For those who want to own a piece of Brewerytown, but don’t necessarily need all that extra space.',
                price: '219000',
                floorplan: 'images/assets/otto-floorplan-studio.jpg',
                units: [
                    {
                        name: 'Unit 202',
                        price: '219000',
                        floorplan: '202',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 203',
                        price: '219000',
                        floorplan: '203',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 205',
                        price: '219000',
                        floorplan: '205',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    }
                ]
            },
            {
                title: 'Boden',
                desc: '1-bedroom condos that are ideally priced to start building your life from the ground up.',
                price: '299000',
                floorplan: 'images/assets/otto-floorplan-the-boden.jpg',
                units: [
                    {
                        name: 'Unit 302',
                        price: '299000',
                        floorplan: '302',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 304',
                        price: '299000',
                        floorplan: '304',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 402',
                        price: '299000',
                        floorplan: '402',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 404',
                        price: '299000',
                        floorplan: '404',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                ]
            },
            {
                title: 'The Mitte',
                desc: '2-bedroom condos that offer a little extra space for out-of-town visitors or a growing family.',
                price: '339000',
                floorplan: 'images/assets/otto-floorplan-the-mitte.jpg',
                units: [
                    {
                        name: 'Unit 201',
                        price: '339000',
                        floorplan: '201',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 204',
                        price: '339000',
                        floorplan: '204',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 206',
                        price: '339000',
                        floorplan: '206',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 301',
                        price: '339000',
                        floorplan: '301',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 303',
                        price: '339000',
                        floorplan: '303',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 305',
                        price: '339000',
                        floorplan: '305',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 401',
                        price: '339000',
                        floorplan: '401',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 403',
                        price: '339000',
                        floorplan: '403',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Unit 405',
                        price: '339000',
                        floorplan: '405',
                        features: [
                            'Second Floor',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                ]
            },
            {
                title: 'The Oben',
                desc: 'If you’re looking for a more spacious layout, The Oben is for you. Our penthouse condos feature two or three bedroom floorplans and plenty of room to do your thing.',
                price: '000000',
                floorplan: 'images/assets/otto-floorplan-penthouse.jpg',
                units: [
                    {
                        name: 'Penthouse 1',
                        price: '000000',
                        floorplan: 'ph01',
                        features: [
                            '3 Bedroom',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Penthouse 2',
                        price: '000000',
                        floorplan: 'ph02',
                        features: [
                            '2 Bedroom',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Penthouse 3',
                        price: '000000',
                        floorplan: 'ph03',
                        features: [
                            '2 Bedroom',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                    {
                        name: 'Penthouse 4',
                        price: '000000',
                        floorplan: 'ph04',
                        features: [
                            '2 Bedroom',
                            'Roofdeck',
                            'Facing West',
                            'Terrace',
                        ]
                    },
                ]
            }
        ]
        }
    },
    computed: {
        animatedNumber: function() {
            let num = this.tweenedNumber
            let result = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',')
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
            this.index = i
            this.number = this.categories[i].price
            this.subIndex = 0
        },
        changeSlide(dir) {
            if (dir === 'next') {
                if ( this.subIndex >= this.categories[this.index].units.length - 1) {
                    this.subIndex = 0
                } else {
                    ++this.subIndex
                }
            } else {
                if (this.subIndex === 0) {
                    this.subIndex = this.categories[this.index].units.length - 1
                } else {
                    --this.subIndex
                }
            }
        },
        toggleFeatures () {
            this.isOpen = !this.isOpen
        },
        toggleImgExpand () {
            this.isExpand = !this.isExpand
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
                desc: 'Philadelphia Parks & Recreation is partnering with Penn Praxis to more successfully connect East and West Fairmount Park. The result will create new recreational space, greater accessibility, and new or improved amenities throughout the park.',
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
                this.index = 0
            } else{
                ++this.index
            }

        },
        prevSlide() {
            if(this.index <= 0){
                this.index = this.slides.length - 1
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
            {
                img: 'images/assets/otto-brewerytown-storefront.jpg',
                cred: 'Fairmount Bicycles'
            },
            {
                img: 'images/assets/otto-brewerytown-philadelphia-skyline.jpg',
                cred: 'Kenny Wen'
            },
            {
                img: 'images/assets/otto-brewery-schuylkil.jpg',
                cred: 'David Aloisio'
            },
            {
                img: 'images/assets/otto-brewery-hill.jpg',
                cred: 'Kristen Catoe'
            },
            {
                img: 'images/assets/otto-brewery-ariel.jpg',
                cred: 'Greg Fridman'
            }
        ]
    },
    computed: {
        upNext: function() {
            if(this.index >= this.slides.length - 1){
                return 0
            } else{
                return this.index + 1
            }
        }
    },
    methods: {
        nextSlide() {
            if(this.index >= this.slides.length - 1){
                this.index = 0
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
                'images/assets/otto-story-wolf.jpg',
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
    zoom: 15,
    maxBounds: bounds,
    center: [-75.185378, 39.979700],
});

var toggleableLayerIds = [ 'food-drink', 'nature-travel', '31st-street-then', '31st-street-now' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i]

    var link = document.createElement('a')
    link.href = '#'
    if ( i < 4 || i > 5) {
        link.className = 'active';
    }
    else {
        link.className = ''
    }
    link.idName = id
    if (i < 2) {
        var prettyId = id.replace(new RegExp("\\-", "g"), ' & ')
    } else {
        var prettyId = id.replace(new RegExp("\\-","g"),' ')
    }
    link.textContent = prettyId

    link.onclick = function (e) {

        var clickedLayer = this.idName
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility')

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none')
            this.className = '';
            //console.log(clickedLayer);
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible')
            //console.log(i);
        }

        var className = clickedLayer
        for (let i = 0; i < className.length; i++) {
            if ( !isNaN(className.charAt(i)) ) {
                className = clickedLayer.substring(5)
                console.log(className)
            }
        }
        sideBarItems(className)
    };
    map.scrollZoom.disable();

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

function sideBarItems (className) {
    document.querySelectorAll('.' + className).forEach(function(el) {
        if (el.classList.contains('hide')) {
            el.classList.remove('hide')
        } else {
            el.classList.add('hide')
        }
    });
}

// Pre Footer Parallax
var preFooter = document.querySelector('.parallax-layer')

function setParallax(yPos, el) {
    el.style.transform = `translateY(${yPos}px)`
}

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop() {
    var elem = document.querySelector('.parallax-layer')
    var distanceScrolled = document.body.scrollTop
    var elemRect = elem.getBoundingClientRect()
    var elemViewportOffset = elemRect.top

    var totalOffset = Math.floor(distanceScrolled + elemViewportOffset)

    setParallax(totalOffset * -0.2, preFooter)

    requestAnimationFrame(scrollLoop)
}


// Intro Images
ScrollReveal().reveal('.intro-copy-stamp', { delay: 400, distance: '10px', scale: 0.92 })
ScrollReveal().reveal('.intro-collage-img img', { delay: 250, interval: 20, distance: '10px', scale: 0.96 })

// Amenity List
ScrollReveal().reveal('.amenities-main-list li', { delay: 150, interval: 40, distance: '10px'})

// Floorplan
ScrollReveal().reveal('.fp-app-content-floorplan img', { delay: 150, distance: '10px', scale: 0.96 })

// Story images
ScrollReveal().reveal('.story-entry img', { delay: 150, interval: 10, distance: '10px', scale: 0.96 })
ScrollReveal().reveal('.story-entry-logo', { delay: 150, scale: 0.96 })
ScrollReveal().reveal('.story-img', { delay: 150, distance: '10px', scale: 0.96 })

// Brewerytown Drawn Map
ScrollReveal().reveal('.location-main img', { delay: 200, distance: '10px', scale: 0.96 })