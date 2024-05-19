const line_chart = document.getElementById("analytic-chart").getContext("2d");

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  labels,
  datasets: [
    {
      data: [20, 34, 73, 50, 35, 47, 70],
      borderColor: "#3FD0FF",
      tension: 0.4,
    },
    {
      data: [50, 60, 50, 20, 45, 67, 30],
      borderColor: "#D6CF3B",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: "#4C4C5B",
        display: true,
      },
    },
    y: {
      min: 0,
      max: 100,
      beginAtZero: true,
      grid: {
        color: "#4C4C5B",
        display: true,
      },
    },
  },
  animation: {
    duration: 5000,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const config = {
  type: "line",
  data: data,
  options: options,
};

const lineChart = new Chart(line_chart, config);

// function to generate a array with random number between (0 - 100)
// array length will depend on labels length
const generateData = () => {
  const newData = [];
  for (let i = 0; i < labels.length; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    newData.push(randomNumber);
  }
  return newData;
};

let toggle = true; // toggle based on previous updated data

// function to update the chart data
const updateChartData = () => {
  const newDataArr = generateData();
  if (toggle) {
    data.datasets[0].data = newDataArr;
  } else {
    data.datasets[1].data = newDataArr;
  }
  toggle = !toggle;
  lineChart.update();
};

let dataUpdateInterval = setInterval(
  updateChartData,
  options.animation.duration
);

window.addEventListener("resize", () => {
  lineChart.resize();
});
