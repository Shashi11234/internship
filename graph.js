var data = {
    labels: ['20','', '25','', '30','', '35','', '40','', '60','','65'],
    datasets: [
      {
        label: 'employer k12345',
        backgroundColor: '#000080',
        borderRadius: 5,
        data: [25,30,35,40,45,50,50,55,60,65,70,75,80]
      },
      {
        label: 'employee k12345',
        backgroundColor: 'rgb(45, 69, 222)',
        borderRadius: 5,
        data: [25,30,35,40,45,50,55,60,65,70,75,80,85]
      },
      {
        label: 'total intrest k12345',
        backgroundColor: '#9494FF',
        borderRadius: 5,
        data: [25,30,35,40,45,50,55,60,65,70,75,80,85]
      }
    ]
  };
  
  var options = {
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 100,
          callback: function(value) {
            return '$' + value;
          }
        }
      },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top', // You can adjust the position as needed
            labels: {
                boxRadius: 10, // Set the border radius for legend items
                borderRadius: 10, // Set the border radius for the legend container
            }
        }
    }
  };
  
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var stackedBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


//Apex chart render
var options = {
    series: [60],
    chart: {
      height: 160,
      type: 'radialBar',
      
    },
    plotOptions: {  
     
      radialBar: {
        
        hollow: {
          size: '50%',
        },
        track:{
          background:'#b8dcbbe8'
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: true,
            offsetY: 65,
            color: '#00ab41',
          },
         
          value: {
            show: true,
            offsetY:-10,
            color: '#00ab41',
            fontSize: '14px',
          },
          
        }
      },
    },
    
    labels: ["Average"],
    colors:['#00ab41']
    
  };
  
  var chart1 = new ApexCharts(document.querySelector("#circularchart1"), options);
  chart1.render();

  var chart2 = new ApexCharts(document.querySelector("#circularchart2"), options);
  chart2.render();

  var chart3 = new ApexCharts(document.querySelector("#circularchart3"), options);
  chart3.render();


  