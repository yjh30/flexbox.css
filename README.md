##### Installation
    npm install flexbox.css --save

##### Api
    require('flexbox.css');


##### CSS Class
    .flex-row-box               // 主轴为x轴，弹性元素垂直居中
    .flex-row-between-box       // 主轴为x轴，弹性元素两端对齐，适合做app头部，左端(返回)，中部(标题)，右端(链接)
    .flex-column-box            // 主轴为y轴，弹性元素垂直居中
    .flex-column-between-box    // 主轴为y轴，弹性元素两端对齐
    .flex-center-box            // 弹性元素水平垂直居中
    .flex-item-scroll-x         // 弹性元素flex:1，且设置了overflow-x: auto;
    .flex-item-scroll-y         // 弹性元素flex:1，且设置了overflow-y: auto;

    .flex-cell-box              // 删格布局，支持10列，flex-wrap:wrap;
    .flex-cell-box .col-1       // 弹性元素width:100%;
    .flex-cell-box .col-2       // 弹性元素width:50%; 以此类推
    .flex-cell-box .col-3       // ...
    .flex-cell-box .col-4
    .flex-cell-box .col-5
    .flex-cell-box .col-6
    .flex-cell-box .col-7
    .flex-cell-box .col-8
    .flex-cell-box .col-9
    .flex-cell-box .col-10

