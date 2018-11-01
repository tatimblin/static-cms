var FloorplanApp = new Vue({
    el: '#fp-app',
    data() {
        return {
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