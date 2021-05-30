(this.webpackJsonpsuntracker=this.webpackJsonpsuntracker||[]).push([[0],{168:function(t,e,a){"use strict";a.r(e);var n=a(8),c=a.n(n),o=a(56),i=a.n(o),s=(a(61),a.p,a(62),a(11)),r=a(12),l=a(14),b=a(13),d=a(40);d.a.initializeApp({apiKey:"AIzaSyDR0Si1LRXBHn9qIWMIyQIA4rbXdGEygkg",authDomain:"dual-axis-sun-tracker.firebaseapp.com",databaseURL:"https://dual-axis-sun-tracker-default-rtdb.firebaseio.com",projectId:"dual-axis-sun-tracker",storageBucket:"dual-axis-sun-tracker.appspot.com",messagingSenderId:"597011271555",appId:"1:597011271555:web:8fa84154b6fc9ef5be70b6",measurementId:"G-3Z8RDCBNTH"});var h=d.a,u=(a(68),a(3)),j=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={wattage:0,current:0,voltage:0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.database().ref("Sensor").on("value",(function(e){var a=[];e.forEach((function(t){a.push(t.val())})),t.setState({sensorData:a,wattage:a[0]*a[2],current:a[0],voltage:a[2]})}))}},{key:"render",value:function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{className:"navbar-brand",children:"Sun Tracker"}),Object(u.jsx)("button",{className:"navbar-toggler float-right",type:"button","data-toggle":"collapse","data-target":"#navbar9",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"navbar-collapse collapse",id:"navbar9",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsxs)("li",{className:"nav-item",children:[Object(u.jsxs)("p",{className:"nav-link",children:["Wattage",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{className:"values",children:[this.state.wattage," W"]})]}),Object(u.jsx)("p",{children:"0 Watts"})]}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)("p",{className:"nav-link",children:["Current",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{className:"values",children:[this.state.current," A"]})]})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)("p",{className:"nav-link",children:["Voltage",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{className:"values",children:[this.state.voltage," V"]})]})})]})})]})})}}]),a}(n.Component),v=(a(70),a(10)),A=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={wattage:0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.refs.chart.chartInstance.data.datasets;console.log(e[0].data),h.database().ref("Sensor").on("value",(function(e){var a=[];e.forEach((function(t){a.push(t.val())})),t.setState({sensorData:a,wattage:a[0]*a[2]})}))}},{key:"render",value:function(){var t={labels:["Wattage"],datasets:[{data:[this.state.wattage,5-this.state.wattage],backgroundColor:["#317de6","#1c202c"],hoverBackgroundColor:["#317de6","#1c202c"],borderWidth:[0,0]}]};return Object(u.jsx)("div",{children:Object(u.jsx)(v.Doughnut,{ref:"chart",width:100,height:350,data:t,options:{cutoutPercentage:70,legend:{labels:{fontColor:"#b3bbc9",fontSize:12}},animation:{animationRotate:!0,duration:2e3},datasetStrokeWidth:3,pointDotStrokeWidth:4,responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},title:{display:!0,text:"Wattage",fontColor:"white"}}})})}}]),a}(n.Component),m=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={current:0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.refs.chart.chartInstance.data.datasets;console.log(e[0].data),h.database().ref("Sensor").on("value",(function(e){var a=[];e.forEach((function(t){a.push(t.val())})),t.setState({sensorData:a,current:a[0]})}))}},{key:"render",value:function(){var t={labels:["Current"],datasets:[{data:[this.state.current,1-this.state.current],backgroundColor:["#22e0a4","#1c202c"],hoverBackgroundColor:["#22e0a4","#1c202c"],borderWidth:[0,0]}]};return Object(u.jsx)("div",{children:Object(u.jsx)(v.Doughnut,{ref:"chart",width:100,height:350,data:t,options:{cutoutPercentage:70,legend:{labels:{fontColor:"#b3bbc9",fontSize:12}},animation:{animationRotate:!0,duration:2e3},datasetStrokeWidth:3,pointDotStrokeWidth:4,responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},title:{display:!0,text:"Current",fontColor:"white"}}})})}}]),a}(n.Component),x={labels:["Temperature"],datasets:[{data:[37,60],backgroundColor:["#ffe64a","#1c202c"],hoverBackgroundColor:["#ffe64a","#1c202c"],borderWidth:[0,0]}]},g={cutoutPercentage:70,legend:{labels:{fontColor:"#b3bbc9",fontSize:12}},animation:{animationRotate:!0,duration:2e3},datasetStrokeWidth:3,pointDotStrokeWidth:4,responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},title:{display:!0,text:"Temperature",fontColor:"white"}},f=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(v.Doughnut,{ref:"chart",width:100,height:350,data:x,options:g})})}},{key:"componentDidMount",value:function(){var t=this.refs.chart.chartInstance.data.datasets;console.log(t[0].data)}}]),a}(n.Component),p=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={luminosity:0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.refs.chart.chartInstance.data.datasets;console.log(e[0].data),h.database().ref("Sensor").on("value",(function(e){var a=[];e.forEach((function(t){a.push(t.val())})),t.setState({sensorData:a,luminosity:a[1]})}))}},{key:"render",value:function(){var t={labels:["Luminosity"],datasets:[{data:[this.state.luminosity,4095-this.state.luminosity],backgroundColor:["#ffbf0f","#1c202c"],hoverBackgroundColor:["#ffbf0f","#1c202c"],borderWidth:[0,0]}]};return Object(u.jsx)("div",{children:Object(u.jsx)(v.Doughnut,{ref:"chart",width:100,height:350,data:t,options:{cutoutPercentage:70,legend:{labels:{fontColor:"#b3bbc9",fontSize:12}},animation:{animationRotate:!0,duration:2e3},datasetStrokeWidth:3,pointDotStrokeWidth:4,responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},title:{display:!0,text:"Luminosity",fontColor:"white"}}})})}}]),a}(n.Component),O=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={voltage:0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.refs.chart.chartInstance.data.datasets;console.log(e[0].data),h.database().ref("Sensor").on("value",(function(e){var a=[];e.forEach((function(t){a.push(t.val())})),t.setState({sensorData:a,voltage:a[2]})}))}},{key:"render",value:function(){var t={labels:["Voltage"],datasets:[{data:[this.state.voltage,5-this.state.voltage],backgroundColor:["#835ae2","#1c202c"],hoverBackgroundColor:["#835ae2","#1c202c"],borderWidth:[0,0]}]};return Object(u.jsx)("div",{children:Object(u.jsx)(v.Doughnut,{ref:"chart",width:100,height:350,data:t,options:{cutoutPercentage:70,legend:{labels:{fontColor:"#b3bbc9",fontSize:12}},animation:{animationRotate:!0,duration:2e3},datasetStrokeWidth:3,pointDotStrokeWidth:4,responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},title:{display:!0,text:"Voltage",fontColor:"white"}}})})}}]),a}(n.Component),G=a.p+"static/media/temperature.68bfee5a.png",M=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"box-1 col-12 offset-md-1 col-md-4 my-4",children:[Object(u.jsx)("h1",{className:"wattageIcon",children:"W"}),Object(u.jsx)(A,{className:"Graph1"})]}),Object(u.jsxs)("div",{className:"box-2 col-12  offset-md-2 col-md-4 my-4",children:[Object(u.jsx)("h1",{className:"currentIcon",children:"I"}),Object(u.jsx)(m,{className:"Graph2"})]}),Object(u.jsxs)("div",{className:"box-2 col-12 offset-md-1 col-md-4 my-4",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAAA+s9J6AAAACXBIWXMAABJ0AAASdAHeZh94AAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTA4VDE0OjQ0OjExKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0wOFQxNDo0NToyMSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0wOFQxNDo0NToyMSswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTQ0NjQ5Mi1hNmMz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",className:"lumiImg"}),Object(u.jsx)(p,{className:"Graph4"})]}),Object(u.jsxs)("div",{className:"box-2 col-12 offset-md-2 col-md-4 my-4",children:[Object(u.jsx)("h1",{className:"voltageIcon",children:"V"}),Object(u.jsx)(O,{className:"Graph5"})]}),Object(u.jsxs)("div",{className:"box-2 col-12 offset-md-4 col-md-4 my-4",children:[Object(u.jsx)("img",{src:G,className:"tempImg"}),Object(u.jsx)(f,{className:"Graph3"})]})]})})};var I=function(){return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(j,{}),Object(u.jsx)(M,{})]})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),o(t),i(t)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),k()},61:function(t,e,a){},62:function(t,e,a){},68:function(t,e,a){},70:function(t,e,a){}},[[168,1,2]]]);
//# sourceMappingURL=main.2aad3c51.chunk.js.map