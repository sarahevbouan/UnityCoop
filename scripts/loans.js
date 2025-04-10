//Navigation toggler
let loansOverview = document.querySelector(".loans-overview");
let loansOverviewDisplayBtn = document.querySelector("#loans-overview-display-btn");
let manageLoans = document.querySelector(".manage-loans");
let manageLoansDisplayBtn = document.querySelector("#manage-loans-display-btn");

manageLoansDisplayBtn.addEventListener("click", () => {
    manageLoans.classList.remove("not-displayed");
    loansOverview.classList.add("not-displayed");
});

loansOverviewDisplayBtn.addEventListener("click", () => {
    manageLoans.classList.add("not-displayed");
    loansOverview.classList.remove("not-displayed");
});


//Line and Progress charts
try {
let paymentStatusChart = document.getElementById("payment-status-piechart");
   let paymentStatusDataset1Labels = ["Completed", ""];
  let paymentStatusDataset2Labels = ["Overdue", ""];
  let completedpaymentBgColor = "#4D83EB";
  let overduepaymentBgColor = "#4d83eb99";

  const calcPercentage = (dataIndex, dataset) => {
    let totalLoans = dataset.data[0] + dataset.data[1];
    let loanProportion = dataset.data[dataIndex] / totalLoans;
    let loanPercent = Math.round(loanProportion * 100);
    return loanPercent;
  };

  const customTextPlugin = {
    id: "customTextPlugin",
    beforeDraw: (chart) => {
      const {ctx} = chart;
      ctx.save();
      let dataIndex = 0;
      let dataset = chart.data.datasets[0];
      let text =`${calcPercentage(dataIndex, dataset)}%`;
      let fontSize = chart.height * 0.1;
      ctx.font = `${fontSize}px poppins`;
      ctx.fillStyle = "#000781";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, chart.width / 2, chart.height / 2);
    }
  };

      new Chart(paymentStatusChart, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [150, 20],
              backgroundColor: [completedpaymentBgColor, "#ECECEC"],
              borderRadius: 8,
              cutout: "70%",
              borderWidth: 0,
            },

            {
              data: [68, 32],
              backgroundColor: [overduepaymentBgColor, "#ECECEC"],
              borderRadius: 8,
              cutout: "70%",
              borderWidth: 0,
            }
          ],
        },

        plugins: [customTextPlugin],

        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
            filter: (tooltipItem) => tooltipItem.dataIndex === 0,
            callbacks: {
              label: (tooltipItem) => {
              const {dataIndex, dataset, datasetIndex} = tooltipItem;
              let loanPercentage = calcPercentage(dataIndex, dataset);
              if (datasetIndex === 0){
                return `${paymentStatusDataset1Labels[dataIndex]}: ${loanPercentage}%`;
              }
              else if(datasetIndex === 1){
                return `${paymentStatusDataset2Labels[dataIndex]}: ${loanPercentage}%`;
              }
             },
            },
          },
          },
        },
      });

//Progress chart legend
let customPieLegend = document.querySelectorAll("#payment-status-legends > .piechart-legends");
let legendArray = Array.from(customPieLegend);
let [legend1, legend2] = legendArray;

const legendStyle = (legendName, bgColor, dataLabel) => {
  legendName.children[0].style.backgroundColor = bgColor;
  legendName.children[1].textContent = dataLabel[0];
};

legendStyle(legend1, completedpaymentBgColor, paymentStatusDataset1Labels);
legendStyle(legend2, overduepaymentBgColor, paymentStatusDataset2Labels);


//Return Summary Line Chart
let returnSummaryChart = document.getElementById("return-summary-linechart");
    let returnSummaryXValues = ["Jan", "Feb", "Mar", "April", "May", "Jun"];
    let returnSummaryYValues = [50, 150, 30, 170, 46, 130];
      
    new Chart(returnSummaryChart, {
        type: "line",
        data: {
            labels: returnSummaryXValues,
            datasets: [
                {
                  label: "Return Summary",
                  data: returnSummaryYValues,
                  tension: 0.4,
                  borderColor: "#4D83EB",

                }
            ]
        },

        options: {
          scales: {
            y: {
              border: {
                display: false,
              },
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
} catch(error){
  console.log("Error loading charts");
} 


//Bar Chart for total loan by month
let monthlyLoanYValues = [40, 30, 40, 22, 26, 13, 18, 20, 30, 10, 24, 31];
barchartBuilder("total-loan-barchart", "Monthly Rate", monthlyLoanYValues);

//Pie chart for loan status
let loanStatusXValues = ["Approved", "Pending", "Rejected"];
let loanStatusYValues = [40, 30, 20];
piechartBuilder("pie", "loan-status-piechart", "Loan Status", loanStatusYValues, loanStatusXValues, 0, "#loan-status-legends");
