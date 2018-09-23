/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var historyChartReference;

$().ready(function(){
    
    populateVariantsHistorySelect();
    
    generateViewsChart();
    
});


function populateVariantsHistorySelect(){
    
    var $prodSelect = $('#productsSelect');
    
    $.get('http://192.168.100.77:8000/get-variants',function(jsonData){
        
        for(var i in jsonData){
            $prodSelect.append('<option value="' + jsonData[i].id + '">' + jsonData[i].name + '</option>');
        }
        
        $prodSelect.on('change',function(){
            generateHistoryChart($(this).val());
        });
        
        $prodSelect.change();
        
    });
}

function generateHistoryChart(prodId){
    
    $.get('http://192.168.100.77:8000/reports/view-variant-history/' + prodId,function(jsonData){
        var dates = [];
        var views = [];
        for(var i in jsonData){
            dates.push(jsonData[i].date);
            views.push(jsonData[i].views);
        }
        try{
            historyChartReference.destroy();
        }
        catch(e){
            console.log(e);
        }
        
        historyChartReference = historyChart(dates,views);
    });
}


function historyChart(dates,views){
    var ctx = document.getElementById('viewsHistory').getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: dates,
            datasets: [{
                label: '# of views per days',
                data: views
            }]
        },
        options: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'black'
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: false,
                        maxRotation: 90,
                        minRotation: 90
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            }
        }
    });
    
    
    return myChart;
}


function generateViewsChart(){
    $.get('http://192.168.100.77:8000/reports/view-products',function(jsonData){
        var prodNames = [];
        var prodViews = [];
        for(var i in jsonData){
            prodNames.push(jsonData[i].product.name);
            prodViews.push(jsonData[i].views);
        }
        prodViewsChart(prodNames,prodViews);
    });
}


function prodViewsChart(prodNames,prodViews){

    var ctx = document.getElementById('viewsChart').getContext('2d');
    
    var gradient = ctx.createLinearGradient(0, 0, 1100, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'green');
    ctx.fillStyle = gradient;
    ctx.fillRect(10,10,200,100);
    
    var myChart = new Chart(ctx, {
        type: 'horizontalBar', 
        barThickness: 15,
        data: {
            labels: prodNames,
            datasets: [{
                label: '# of views',
                data: prodViews,
                backgroundColor: gradient
            }]
        },
        options: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'black'
                }
            }
        }
    });
}


