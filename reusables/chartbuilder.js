//Barchart builder
const barchartBuilder = (canvasId, chartLabel, barchartYValues) => {
    try {
        let canvasObject = document.getElementById(canvasId);
        if(canvasObject !== null){
            let monthlyRateXValues = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let otherBarColors = new Array(10).fill("#E0E0E0");
            let barColors2 = ["#E0E0E0", "#000781", ...otherBarColors];
            let monthlyRateData = {
                labels: monthlyRateXValues,
                    datasets: [
                        {
                        label: chartLabel,
                        backgroundColor: barColors2,
                        data: barchartYValues,
                        borderColor: barColors2,
                        borderSkipped: false,
                        maxBarThickness: 15,
                        barPercentage: 0.7,
                        borderRadius: 20,
                        }
                    ],
                };
            new Chart(canvasObject, {
                type: "bar",
                data: monthlyRateData,
                options: {
                    scales: {
                        y: {
                            display: false,
                            grid: {
                            display: false,
                            }
                        },
                        x: {
                        border: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            
                            autoSkip: false,
                            textStrokeWidth: 9,
                        }
                        }
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                },
            }
            );
        } 
}catch (error){
    console.log(error.message);
}
};

// Pie/Doughnut chart builder
const piechartBuilder = (chartType, canvasId, chartLabel, piechartYValues, piechartXValues, cutout, legendClass) => {
    try{
      let canvasObject = document.getElementById(canvasId);
      let pieColors = ["#4D83EB", "#4d83eb99", "#4d83eb4d"];
      let piechartData = {
          labels: piechartXValues,
          datasets: [
            {
              label: chartLabel,
              backgroundColor: pieColors,
              data: piechartYValues,
              borderWidth: 0,
              cutout: cutout,
            }
          ],
        };

      new Chart(canvasObject, {
        type: chartType,
        data: piechartData,
        options: {
          maintainAspectRatio: false,
          plugins: {
              legend: {
                display: false,
              }
            }
        },
      });

    //    Custom styles for legends
    let customPieLegend = document.querySelectorAll(`${legendClass} > .piechart-legends`);
    let legendArray = Array.from(customPieLegend);
    let [legend1, legend2, legend3] = legendArray;

    const legendStyles = (legendName, legendPosition) => {
        legendName.children[0].style.backgroundColor = pieColors[legendPosition];
        legendName.children[1].textContent = piechartXValues[legendPosition];
    };

    legendStyles(legend1, 0);
    legendStyles(legend2, 1);
    legendStyles(legend3, 2);
}catch(error){
        console.log(error.message);
    }
};


