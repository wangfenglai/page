var option2 = {
    tooltip: {
        trigger: 'axis'
    },
    /*legend:{
     data:['森林覆盖率']
     },*/
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataZoom: {show: true},
            dataView: {show: true},
            magicType: {show: true, type: ['bar', 'line']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: function (params) {
            // console.log(params);
            console.log(params);
            return params.name + '<br/>森林覆盖率：' + params.value + '%';


        }
    },
    /*dataZoom : {
     show : true,
     realtime : true,
     start : 0,
     end : 40
     },*/
    xAxis: [
        {
            type: 'category',
            data: [1990, 2000, 2005, 2010, 2015]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '森林覆盖率',
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '森林覆盖率',
            type: 'line',
            data: [30, 34, 37, 40, 43]
        }
    ],
    calculable: false
};
var myChart = echarts.init(document.getElementById('echarts2'));
// console.log(myChart);
myChart.setOption(option2, true);
document.getElementById('county').onchange = function () {
    console.log(this.value.txt)
    loadOption(this.value);
};
resetSelectWidth(document.getElementById('county'));
function resetSelectWidth(obj){
    // alert(1);

    var tempObj=document.createElement("select");

    tempObj.style.fontSize = '18px';
    tempObj.length=1;


    tempObj.options[0].text=obj.options[obj.selectedIndex].text;


    obj.parentNode.appendChild(tempObj);

    console.log(tempObj.offsetWidth);
    obj.style.width=(tempObj.offsetWidth)+'px';


    obj.parentNode.removeChild(tempObj);


}
/*document.getElementById('county').getElementsByTagName('option').onclick = function(){
    console.log('1');
}
console.log(document.getElementById('county').getElementsByTagName('option')[1]);*/
function loadOption(str) {

    // console.log(myChart);
    var val = getData(str);
    // console.log(val);
    var option2 = myChart._option;
    option2.series[0].data = val;
    myChart.setOption(option2, true);
    var option = app._option;
    // console.log(app);
    /*option.series[0].data = val;
     app.setOption(option,true);*/
}

function getMapData(str) {
    var arr = [];

}

function getData(str) {
    var value1 = 0;
    var value2 = 0;
    var value3 = 0;
    var value4 = 0;
    var value5 = 0;
    for (var i = 0; i < map_Data_1990.length; i++) {
        if (map_Data_1990[i].name == str) {
            value1 = map_Data_1990[i].value;
        }
    }
    ;
    for (var i = 0; i < map_Data_2000.length; i++) {
        if (map_Data_2000[i].name == str) {
            value2 = map_Data_2000[i].value;
        }
    }
    ;
    for (var i = 0; i < map_Data_2005.length; i++) {
        if (map_Data_2005[i].name == str) {
            value3 = map_Data_2005[i].value;
        }
    }
    ;
    for (var i = 0; i < map_Data_2010.length; i++) {
        if (map_Data_2010[i].name == str) {
            value4 = map_Data_2010[i].value;
        }
    }
    ;
    for (var i = 0; i < map_Data_2015.length; i++) {
        if (map_Data_2015[i].name == str) {
            value5 = map_Data_2015[i].value;
        }
    }
    ;

    return [value1, value2, value3, value4, value5];
}