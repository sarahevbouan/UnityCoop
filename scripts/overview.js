// Monthly transaction rate barchart
let monthlyRateYValues = [50, 30, 20, 12, 46, 43, 18, 20, 30, 32, 24, 31];
barchartBuilder("monthly-rate-bar", "Monthly Rate", monthlyRateYValues);

  

//Pie chart for request status
let requestStatusXValues = ["Approved", "Pending", "Denied"];
let requestStatusYValues = [50, 30, 20];
piechartBuilder("doughnut", "request-status-pie", "Request Status", requestStatusYValues, requestStatusXValues, "40%", "#request-status-legends");