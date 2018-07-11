// tableau 1

let data1 = [];
let tableRows1 = document.getElementById('table1').rows;

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
// create div table1

function makeDiv1(){

}


let svg1 = dimple.newSvg("#chartContainer1", 800, 600);
let myChart1 = new dimple.chart(svg1, data1);
var myLegend1 = myChart1.addLegend(200, 140, 500, 500);
myChart1.addCategoryAxis("x", "year");
myChart1.addMeasureAxis("y", "infractions");
myChart1.addSeries("country", dimple.plot.line);
myChart1.draw();


let svg2 = dimple.newSvg("#chartContainer2", 800, 600);
let myChart2 = new dimple.chart(svg2, data2);
var myLegend2 = myChart2.addLegend(200, 140, 500, 500);
myChart2.addCategoryAxis("x", "year");
myChart2.addMeasureAxis("y", "population");
myChart2.addSeries("country", dimple.plot.bar);
myChart2.draw();
