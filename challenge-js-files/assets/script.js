// tableau 1

let data1 = [];
let table1 = document.getElementById('table1');
let tableRows1 = table1.rows;

for (let i = 1; i < tableRows1.length; i++){

    for (let j = 1; j < tableRows1[i].cells.length; j++){
        if ((tableRows1[i].cells[1].innerText !== "")&&(tableRows1[1].cells[j].innerText !== "")&&(tableRows1[i].cells[j].innerText !== ":")){

        data1.push(
            {
                "country": tableRows1[i].cells[1].innerText,
                "year": tableRows1[1].cells[j].innerText,
                "infractions": tableRows1[i].cells[j].innerText.replace(",",".")
            }
        )}
        }
    }


// tableau 2

let data2 = [];
let table2 = document.getElementById('table2');
let tableRows2 = table2.rows;

for (let i = 0; i <tableRows2.length; i++){
    for (let j = 1; j < tableRows2[i].cells.length; j++){
        if ((tableRows2[i].cells[1].innerText !== "Pays")&&(tableRows2[0].cells[j].innerText !== "Pays")){
            data2.push(
                {
                    "country": tableRows2[i].cells[1].innerText,
                    "year": tableRows2[0].cells[j].innerText,
                    "population": tableRows2[i].cells[j].innerText
                }
            )
        }
    }
}

//fetching JSON data

let myRequest = new XMLHttpRequest;
var data3 = [];
myRequest.open('GET', 'https://inside.becode.org/api/v1/data/random.json?min=5&max=50', true);
myRequest.send();
myRequest.onload = function(){
    if (myRequest.status === 200){
        let ajaxData = JSON.parse(myRequest.responseText);

        for (i = 0; i < ajaxData.length; i++){
            let nbr1 = ajaxData[i][0];
            let nbr2 = ajaxData[i][1];
            data3.push(
                {
                    "Jour":nbr1,
                    "Nombre de bébé(s) chat(s) torturé(s) en Belgique en temps réel":nbr2
                }
            )
        };
        drawChart();
    };
}


//create and insert div1

let div1 = document.createElement("div");
div1.id = "chartContainer1";
let parentDiv1 = table1.parentNode;
let beforeDiv1 = table1;
parentDiv1.insertBefore(div1, beforeDiv1);


//create and insert div2

let div2 = document.createElement("div");
div2.id = "chartContainer2";
let parentDiv2 = table2.parentNode;
let beforeDiv2 = table2;
parentDiv2.insertBefore(div2, beforeDiv2);


//create and insert div3

let div3 = document.createElement("div");
div3.id = "chartContainer3";
let parentDiv3 = document.getElementById("mw-content-text").parentNode;
let beforeDiv3 = document.getElementById("mw-content-text");
parentDiv3.insertBefore(div3, beforeDiv3);


//first Chart

let svg1 = dimple.newSvg("#chartContainer1", 800, 800);
let myChart1 = new dimple.chart(svg1, data1);
var myLegend1 = myChart1.addLegend(200, 200, 500, 500);
myChart1.defaultColors = [
    new dimple.color("#FF1493"),
    new dimple.color("#4B0082"),
    new dimple.color("#9370DB"),
    new dimple.color("#F08080"),
    new dimple.color("#FF0000"),
    new dimple.color("#A52A2A"),
    new dimple.color("#FFDAB9"),
    new dimple.color("#FFA500"),
    new dimple.color("#FF8C00"),
    new dimple.color("#D2691E"),
    new dimple.color("#FFFF00"),
    new dimple.color("#9ACD32"),
    new dimple.color("#556B2F"),
    new dimple.color("#00FA9A"),
    new dimple.color("#778899"),
    new dimple.color("#696969"),
    new dimple.color("#C0C0C0"),
    new dimple.color("#CDCD0D"),
    new dimple.color("#960018"),
    new dimple.color("#B36700"),
    new dimple.color("#000010"),
    new dimple.color("#8B6C42"),
    new dimple.color("#B9B276"),
    new dimple.color("#C60800"),
    new dimple.color("#FEA500"),
    new dimple.color("#9966ff"),
    new dimple.color("#ddccff"),
    new dimple.color("#006666"),
    new dimple.color("#ff6600"),
    new dimple.color("#391313"),
    new dimple.color("#FEA700"),
    new dimple.color("#FCA500"),
    new dimple.color("#0000ff"),
    new dimple.color("#FAA500"),
    new dimple.color("#ffff99"),
    new dimple.color("#1a1a00"),
]
myChart1.addCategoryAxis("x", "year");
myChart1.addMeasureAxis("y", "infractions");
myChart1.addSeries("country", dimple.plot.line);
myChart1.draw();


//second Chart

let svg2 = dimple.newSvg("#chartContainer2", 800, 600);
let myChart2 = new dimple.chart(svg2, data2);
var myLegend2 = myChart2.addLegend(200, 140, 500, 500);
myChart2.addCategoryAxis("x", ["country","year"]);
myChart2.addMeasureAxis("y", "population");
myChart2.addSeries("year", dimple.plot.bar);
myChart2.draw();


//Ajax chart

function drawChart(){
    let svg3 = dimple.newSvg("#chartContainer3", 800, 600);
    console.log(data3);
    let myChart3 = new dimple.chart(svg3, data3);
    myChart3.addCategoryAxis("x", "Jour");
    myChart3.addMeasureAxis("y", "Nombre de bébé(s) chat(s) torturé(s) en Belgique en temps réel");
    myChart3.addSeries(null, dimple.plot.line);
    myChart3.draw();
    // myChart.setStoryboard("Date");
    //setTimeout(function(){myChart3.draw()},1000);

}
