var heroSlider = new Vue({
    el: '#hero-content-slider',
    data: {
        index: 0,
        slides: [  
            'images/assets/otto-hero-commute.jpg', 
            'images/assets/otto-hero-nature.jpg',
            'images/assets/otto-hero-community.jpg'
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
        index: 0,
        units: [
            {
                title: 'The Studio',
                desc: 'The Studio is for those who want to own a piece of Brewerytown, but don’t necessarily need all that extra space.',
                price: '100,000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'Boden',
                desc: 'The Boden floor plan features 1-bedroom condos that are ideally priced to start building your life from the ground up.',
                price: '200,000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'The Mitte',
                desc: 'The Mitte floor plan features 2-bedroom condos—giving you a little extra space for out-of-town visitors or a growing family.',
                price: '350,000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            },
            {
                title: 'The Oben',
                desc: 'If you’re looking for a more spacious layout, The Oben is for you. Our penthouse condos feature two or three bedroom floor plans and plenty of room to do your thing.',
                price: '600,000',
                floorplan: 'https://adair-homes.s3.us-west-2.amazonaws.com/website/models/1634/1634-whidbey-floorplan.png'
            }
        ]
    }
})

var planSlider = new Vue({
    el: '#plan-slider',
    data: {
        index: 0,
        slides: [  
            {
                title: 'Fairmount Park Penn Praxis',
                image: 'http://www.agentlady.com/wp-content/gallery/brewerytown/Brewerytown-015915.jpg',
                desc: 'If you’re looking for a more spacious layout, The Oben is for you. Our penthouse condos feature two or three bedroom floor plans and plenty of room to do your thing.',
            },
            {
                title: 'Park Penn Praxis',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53KX-Pkszzwa0MQmHMIqdT2S-k_7SsrSG--f5PrKlsUNaTaplog',
                desc: 'The Oben is for you. Our penthouse condos feature two or three bedroom floor plans and plenty of room to do your thing.',
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
        price: function(this.slides[index].price) {

        }
    }
})


var locationSlider = new Vue({
    el: '#location-slider',
    data: {
        index: 0,
        slides: [  
            'http://www.agentlady.com/wp-content/gallery/brewerytown/Brewerytown-015915.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53KX-Pkszzwa0MQmHMIqdT2S-k_7SsrSG--f5PrKlsUNaTaplog',
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