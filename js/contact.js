require.config({
    paths: {
        'jquery': 'jquery-1.12.4.min',
        'flexible': 'flexible',
        'swiper': 'swiper.min',
        'wow': 'wow.min',
        'common': 'common',
        'common_m': 'common_m',
        'map': 'https://map.qq.com/api/gljs?v=1.exp&key=JVUBZ-LRWHB-U3SUL-JL5L2-POUFO-JQB7G'
    }
});

define(['flexible', 'jquery', 'swiper', 'wow', 'common', 'common_m', 'map'], function (flexible, $, Swiper, WOW, common, common_m, map) {
    var modal = {};
    modal.init = function () {
        console.log("pc");
        common.bind();

        initMap();

    };
    modal.mInit = function () {
        console.log("mobile");
        common_m.bind();
    };

    function initMap () {
        var container = document.querySelector("#mapWrap");
        var center = new TMap.LatLng(22.592584,113.836156);//设置中心点坐标
//初始化地图
        var map = new TMap.Map(container, {
            center: center,
            zoom: 17
        });

//创建并初始化MultiMarker
        var markerLayer = new TMap.MultiMarker({
            map: map,  //指定地图容器
            //样式定义
            styles: {
                //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
                "myStyle": new TMap.MarkerStyle({
                    "width": 196,  // 点标记样式宽度（像素）
                    "height": 77, // 点标记样式高度（像素）
                    "src": '/statics/new/img/logo.png',  //图片路径
                    //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                    "anchor": { x: 0, y: 100 }
                })
            },
            //点标记数据数组
            geometries: [{
                "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
                "styleId": 'myStyle',  //指定样式id
                "position": new TMap.LatLng(22.592584,113.836156),  //点标记坐标位置
                "properties": {//自定义属性
                    "title": "marker1"
                }
            }
            ]
        });
    }

    return modal;
});
