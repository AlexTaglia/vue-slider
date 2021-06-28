Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            contentImg: [
                './img/img1.jpg',
                './img/img2.jpg',
                './img/img3.jpg',
                './img/img4.jpg',
                './img/img5.jpg',
                './img/img6.jpg',
            ],
            imgIndex: 0,
        },
        created() {
            setInterval(() => {
                this.next();
            }, 3000); 
        },
        methods: {
            next: function () {
                if (this.imgIndex === (this.contentImg.length - 1)) {
                    this.imgIndex = 0;
                } else {
                    this.imgIndex++
                }
            },
            previous: function () {
                if (this.imgIndex === 0) {
                    this.imgIndex = this.contentImg.length - 1
                } else {
                    this.imgIndex--
                };
            },
            currentDot: function (index) {
                if (this.imgIndex === index) {
                    return 'current-dot'
                } else {
                    return '';
                }
            },
            goTo: function (index) {
                this.imgIndex = index;
            }
        }
    }

)