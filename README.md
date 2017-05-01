##### Installation
    npm install flexbox.css --save

##### Api
    require('flexbox.css');


##### CSS Class
    .flex-row               // 主轴为x轴，弹性元素垂直居中
    .flex-row-between       // 主轴为x轴，弹性元素两端对齐，适合做app头部，左端(返回)，中部(标题)，右端(链接)
    .flex-column            // 主轴为y轴，弹性元素垂直居中
    .flex-column-between    // 主轴为y轴，弹性元素两端对齐
    .flex-center            // 弹性元素水平垂直居中
    .flex-item-scroll-x         // 弹性元素flex:1，且设置了overflow-x: auto;
    .flex-item-scroll-y         // 弹性元素flex:1，且设置了overflow-y: auto;

    .flex-cell              // 删格布局，支持10列，flex-wrap:wrap;
    .flex-cell .col-1       // 弹性元素width:100%;
    .flex-cell .col-2       // 弹性元素width:50%; 以此类推
    .flex-cell .col-3       // ...
    .flex-cell .col-4
    .flex-cell .col-5
    .flex-cell .col-6
    .flex-cell .col-7
    .flex-cell .col-8
    .flex-cell .col-9
    .flex-cell .col-10

