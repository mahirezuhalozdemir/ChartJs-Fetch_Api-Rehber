window.onload = () => getData()
var userNames = []
var userWeights = []
var userHeights = []

async function getData() {
    await fetch('users.json')
        .then(response => response.json())
        .then(json => {
            json.users.forEach(item => {
                userNames.push(item.user)
                userHeights.push(item.height)
                userWeights.push(item.weight)
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

function lineChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5' id='myChart'></canvas>");

    new Chart("myChart", {
        type: "line",
        data: {
            labels: userNames,
            datasets: [{
                label: 'User Heights',
                fill: false, //çizginin altının doldurulup doldurulmayacağını seçer
                lineTension: 0, //çizginin esnekliğidir(gerilim değeri)
                backgroundColor: "rgba(0,0,255,1)", //a,bizim saydamlık değerimizdir
                borderColor: "rgba(0,0,255,1)",
                data: userHeights
            }]
        },
        options: {
            legend: {
                display: false, //açıklamanın grafikte gösterilip gösterilmeyeceğini seçer
                position: "left", //legend konumu
            },

            plugins: { //eklentiler
                title: {
                    display: true,
                    text: 'User Chart Title', //grafik başlığı
                    align: 'center', //başlık hizalamadır=> start,center,end parametrelerini alabilir
                    color: 'red', //başlık rengi
                    // fullSize:true,
                    position: 'top', // başlık konumudur.Bu parametreleri alabilir=>top,left,bottom,right
                    font: {
                        weight: 'bold', //font kalınlığı
                        size: 18, //font büyüklüğü
                        family: 'Helvetica Neue', //font tipi
                        style: 'italic', //yazım türü =>normal, italic, oblique, initial, inherit
                        lineHeight: 1.2, //başlık satırının yüksekliği =>sayısal değerler alır
                    },
                    padding: {
                        top: 50,  //bu şekilde eklediğimizde sadece top ve bottom padding vermiş oluruz
                        bottom: 50
                    },
                    // left ve right padding vermek için
                    layout: {
                        padding: {
                            left: 50
                        }
                    }
                },
                // SUBSTITLE
                subtitle: {
                    display: true,
                    text: 'User Chart Subtitle' //grafik alt başlığı
                },
                // tooltips
                tooltip: {
                    callbacks: {
                        labelColor: function (context) {
                            return {
                                borderColor: 'rgb(0, 0, 255)',
                                backgroundColor: 'rgb(255, 0, 0)',
                                borderWidth: 2,
                                borderDash: [2, 2],
                                borderRadius: 2,
                            };
                        },
                        labelTextColor: function (context) {
                            return '#543453';
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: { min: 10, max: 16 },
                    }],
                }

            },
            scales: {
                y: {
                    max: 200,
                    beginAtZero: true
                }
            }
        }
    });
}

function barChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5' id='myChart'></canvas>");

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: userNames,
            datasets: [{
                label: "User Heights",
                barPercentage: 0.5,
                barThickness: 20, //grafik çubuğu kalınlığını ayarlar
                maxBarThickness: 10,
                minBarLength: 1,
                borderSkipped: true, // kenarlık yarıçapını devre dışı bırakır =>'start','end','middle','bottom','left','top','right',false,true
                fill: false,
                borderRadius: 8,
                lineTension: 0,
                borderColor: "rgba(0,0,255,0.1)",
                data: userHeights,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)'
                ],
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 6, max: 16 } }],
                x: {
                    title: {
                        display: true,
                        text: 'USERS',
                        font: { size: 18 },
                        color: '#4bc0c0'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'HEIGHTS',
                        font: { size: 18 },
                        color: '#4bc0c0'
                    }
                }
            }
        }
    });

}

function scatterChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5' id='myChart'></canvas>");

    var dataScatter = []
    for (let i = 0; i < userNames.length; i++) {
        dataScatter.push({ x: userHeights[i], y: userWeights[i] });
    }

    new Chart("myChart", {
        type: 'scatter',
    data: {
        datasets: [{
            label: 'Heights and Weights',
            data: dataScatter, //x ve y değerlerinden oluşan tek bir array girmelisiniz. x ve y değerleri sayısal olmalı
            backgroundColor: 'rgba(255, 99, 132, 1)'
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
    });


}

function pieChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5'  id='myChart'></canvas>");

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: userNames,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)'
                ],
                // generateColor(userNames.length),
                borderColor: "rgba(0,0,255,0.1)",
                data: userHeights,
            }]
        },
        options: {
            legend: { display: false },
        }
    });
}

function areaChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5' id='myChart'></canvas>");

    new Chart("myChart", {
        type: "line",
        data: {
            labels: userNames,
            datasets: [{
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0)',   // herhangi bir renk seçilmemişse grafiğin arka plan rengi olarak ayarlanır
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                },
                lineTension: 0, //çizginin esnekliğidir(gerilim değeri)
                backgroundColor: "rgba(0,0,255,1)", //a,bizim saydamlık değerimizdir
                borderColor: "rgba(0,0,255,1)",
                data: userHeights
            }]
        },
        options: {
            legend: {
                display: false, //açıklamanın grafikte gösterilip gösterilmeyeceğini seçer
                position: "left", //legend konumu
            },
            plugins: { //eklentiler
                filler: {
                    propagate: true
                },
                title: {
                    display: true,
                    text: 'Custom Chart Title', //grafik başlığı
                    align: 'center', //başlık hizalamadır=> start,center,end parametrelerini alabilir
                    color: 'red', //başlık rengi
                    // fullSize:true,
                    position: 'top', // başlık konumudur.Bu parametreleri alabilir=>top,left,bottom,right
                    font: {
                        weight: 'bold', //font kalınlığı
                        size: 18, //font büyüklüğü
                        family: 'Helvetica Neue', //font tipi
                        style: 'italic', //yazım türü =>normal, italic, oblique, initial, inherit
                        lineHeight: 1.2, //başlık satırının yüksekliği =>sayısal değerler alır
                    },
                    padding: {
                        top: 50,  //bu şekilde eklediğimizde sadece top ve bottom padding vermiş oluruz
                        bottom: 50
                    },
                    // left ve right padding vermek için
                    layout: {
                        padding: {
                            left: 50
                        }
                    }
                },
                // SUBSTITLE
                subtitle: {
                    display: true,
                    text: 'Custom Chart Subtitle' //grafik alt başlığı
                },
                // tooltips
                tooltip: {
                    callbacks: {
                        labelColor: function (context) {
                            return {
                                borderColor: 'rgb(0, 0, 255)',
                                backgroundColor: 'rgb(255, 0, 0)',
                                borderWidth: 2,
                                borderDash: [2, 2],
                                borderRadius: 2,
                            };
                        },
                        labelTextColor: function (context) {
                            return '#543453';
                        }
                    }
                },


            }
        }
    });
}

function bubbleChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5'  id='myChart'></canvas>");

    new Chart("myChart", {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Bubble Chart',
                data: [
                    { x: 10, y: 20, r: 5 },
                    { x: 15, y: 10, r: 10 },
                    { x: 7, y: 25, r: 8 },
                    { x: 20, y: 18, r: 12 }
                ],
                backgroundColor: 'rgba(201, 203, 207, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    });
}

function radarChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5'  id='myChart'></canvas>");

    new Chart("myChart", {
        type: 'radar',
        data: {
            labels: userNames,
            datasets: [{
                label: 'User Weights',
                data: userWeights,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 50,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
}

function donutChart()
{
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5'  id='myChart'></canvas>");

    new Chart("myChart", {
    type: 'doughnut',
    data: {
        labels: userNames,
        datasets: [{
            label: 'User Weights',
            data: userWeights,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }]
    },
    options: {}
})
}
function mixedChart() {
    $("#myChart").remove()
    $('#chartDiv').append("<canvas class='mt-5'  id='myChart'></canvas>");

    new Chart("myChart", {
        type: 'bar',
        data: {
            labels: userNames, //bu kısımda label'in ortak kullanıldığına dikkat edin.
            datasets: [{
                label: 'User Weights',
                data: userWeights,
                type: 'line',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }, {
                label: 'User Heights',
                data: userHeights,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function generateColor(number) {
    var colors = []
    var letters = '0123456789ABCDEF';
    for (let i = 0; i < number; i++) {
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color = color.toString()
        colors[i] = color
    }
    return colors;
    /*
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
    */
}

