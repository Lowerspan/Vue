//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc) {
            this.age += inc
        },
        subtract: function(dec) {
            this.age -= dec
        },
        updataXY: function(event) {
            // console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving: function(event) {
            event.stopPropagation()
        },
        alert: function() {
            alert('百度一下！')
        }
    }
})