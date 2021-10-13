 var ctxone = document.getElementById("Onechart");
 var myRadarChartOne = new Chart(ctxone, {
   type: 'radar',
   data: {
     labels: ["HTML", "CSS", "javascript", "PHP", "Wordpress"],
     datasets: [{
       label: 'program skill',
       data: [90, 80, 70, 50, 30],
       backgroundColor: 'RGBA(153,204,255, 0.5)',
       borderColor: 'RGBA(51,102,204, 1)',
       borderWidth: 1,
       pointBackgroundColor: 'RGB(46,106,177)',
       pointRadius: 0,
     }],
   },
   options: {
     scales: {
       r: {
         suggestedMin: 0,
         suggestedMax: 100,
       }
     }
   }
 });

 var ctxtwo = document.getElementById("Twochart");
 var myRadarChartTwo = new Chart(ctxtwo, {
   type: 'radar',
   data: {
     labels: ["Photoshop", "Illustrator", "Dreamweaver", "premiere pro", "XD"],
     datasets: [{
       label: 'Design skill',
       data: [80, 30, 60, 60, 60],
       backgroundColor: 'RGBA(153,204,255, 0.5)',
       borderColor: 'RGBA(51,102,204, 1)',
       borderWidth: 1,
       pointBackgroundColor: 'RGB(46,106,177)',
       pointRadius: 0,
     }],
   },
   options: {
     scales: {
       r: {
         suggestedMin: 0,
         suggestedMax: 100,
       }
     }
   }
 });
