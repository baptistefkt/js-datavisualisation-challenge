// function construct(c,y,i){
//     this.country = c;
//     this.year = y;
//     this.infractions = i;
// }
let data = [];
let tableRows1 = document.getElementById('table1').rows;
//console.log(tableRows1[1].cells);
for (let i = 1; i < tableRows1.length; i++){
    // console.log(tableRows1[i].cells.length);
    for (let j = 1; j < tableRows1[i].cells.length; j++){
        if ((tableRows1[i].cells[1].innerText !== "")&&(tableRows1[1].cells[j].innerText !== "")){

        data.push(
            {
                "country": tableRows1[i].cells[1].innerText,
                "year": tableRows1[1].cells[j].innerText,
                "infractions": tableRows1[i].cells[j].innerText.replace(",",".")
            }
        )}
        }
    }

console.log(data);
// var svg = dimple.newSvg("body", 600, 400);
// var myChart = new dimple.chart(svg, data);
// myChart.addCategoryAxis("x", "year");
// myChart.addMeasureAxis("y", "infractions");
// myChart.addSeries("country", dimple.plot.line);
// myChart.draw();
