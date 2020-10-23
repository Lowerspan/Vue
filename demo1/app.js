//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "我是谁",
        job: "web开发",
        website: "http://www.baidu.com",
        websiteTag: "<a href='http://www.baidu.com'>百度一下</a>"
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name + "!"
        }
    }
})

/**
 el:element 需要获取的元素，一定是html中的根容器元素
 data:用于数据的存储
 methods:用于存储各种方法
 data-bingding:给属性绑定对应的值
 **/