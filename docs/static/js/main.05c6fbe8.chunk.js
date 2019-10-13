(window["webpackJsonpmy-react-project"]=window["webpackJsonpmy-react-project"]||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(30),a(10)),i=a(11),m=a(13),s=a(12),u=a(4),p=a(14),d=a(7),E=a(6),f=function(){return r.a.createElement("div",{className:"homeMain"},r.a.createElement("img",{src:"https://laurapareja.github.io/My-Health-Log/images/wallpaper.png",alt:"homewallpaper",className:"homepage_img"}))},g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null," \xa9 2019 / ",r.a.createElement("a",{className:"footer_link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/laurapareja/"},"Laura Pareja"),"/ Licencia"))},h=function(e){var t=e.classImage,a=e.image,n=e.titlePage,l=e.flareTreatment;return r.a.createElement("div",{className:"main"},r.a.createElement("h2",{className:"main_title"},n),r.a.createElement("img",{src:a,alt:"pill",className:t}),r.a.createElement("div",null,function(e){return e.map(function(e){return e.map(function(e,t){var a=e.treatment.map(function(e,t){return r.a.createElement("div",{className:"medication_dose--container",key:t},r.a.createElement("div",{className:"pill ".concat(e.pill)}),r.a.createElement("h4",{className:"doseTime"},e.time," "),r.a.createElement("p",{className:"pillName"},e.pill))}),n=function(e){var t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n}(new Date(e.date));return r.a.createElement("div",{key:t,className:"medication_dose--day"},r.a.createElement("p",{className:"dateListItem"}," ",n),a)})})}(l)),r.a.createElement(g,null))},v=function(e){var t=e.renderMonthName,a=e.classImage,n=e.image,l=e.titlePage;return r.a.createElement("div",{className:"main appointments"},r.a.createElement("h2",{className:"main_title"},l),r.a.createElement("img",{src:n,alt:"appointment",className:a}),t,r.a.createElement("ul",null,r.a.createElement("li",null,"Monday 21 October"),r.a.createElement("li",null,"Tuesday 22 October"),r.a.createElement("li",null,"Wednesday 23 October"),r.a.createElement("li",null,"Thursday 24 October")))},N=a(22),y=function(){return r.a.createElement("header",null,r.a.createElement("h2",{className:"main_title"},"Doses Calculator"))},b=function(e){return r.a.createElement("main",{className:"medicationName"},r.a.createElement("label",{className:"inputContent",htmlFor:"medicationName"},"Medication Name"),r.a.createElement("input",{type:"text",id:"medicationName",placeholder:"Name",onChange:function(t){e.getInfoState(t,"medicationName")}}))},D=function(e){return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{className:"inputContent",htmlFor:"medicationColor"},"Select a color"),r.a.createElement("select",{name:"colors",id:"medicationColor",onChange:function(t){e.getInfoState(t,"colorSelected")}},r.a.createElement("option",{value:"color"}),r.a.createElement("option",{value:"blue"},"blue"),r.a.createElement("option",{value:"yellow"},"yellow"),r.a.createElement("option",{value:"orange"},"orange"),r.a.createElement("option",{value:"purple"},"purple"),r.a.createElement("option",{value:"green"},"green"),r.a.createElement("option",{value:"red"},"red")))},I=function(e){return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"medicationInstruction",className:"inputContent"},"each"),r.a.createElement("select",{name:"guidelineDose",id:"guidelineDose",onChange:function(t){e.getInfoState(t,"medicationInstruction")}},r.a.createElement("option",{value:"cantidad"}),r.a.createElement("option",{value:"24"},"24"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"3"},"3")),r.a.createElement("label",{htmlFor:"medicationInstruction"},"    hours"))},T=function(e){return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{className:"inputContent",htmlFor:"startTiming"},"First Dose"),r.a.createElement("select",{name:"startTiming",id:"startTiming",onChange:function(t){e.getInfoState(t,"firstDose")}},r.a.createElement("option",{value:"hora"}),r.a.createElement("option",{value:"8"},"08:00"),r.a.createElement("option",{value:"9"},"09:00"),r.a.createElement("option",{value:"10"},"10:00"),r.a.createElement("option",{value:"11"},"11:00"),r.a.createElement("option",{value:"12"},"12:00"),r.a.createElement("option",{value:"13"},"13:00"),r.a.createElement("option",{value:"14"},"14:00"),r.a.createElement("option",{value:"15"},"15:00"),r.a.createElement("option",{value:"16"},"16:00"),r.a.createElement("option",{value:"17"},"17:00"),r.a.createElement("option",{value:"18"},"18:00"),r.a.createElement("option",{value:"19"},"19:00"),r.a.createElement("option",{value:"20"},"20:00"),r.a.createElement("option",{value:"21"},"21:00"),r.a.createElement("option",{value:"22"},"22:00")))},j=function(e){var t=e.info,a=e.color,n=e.medicationName;return r.a.createElement("div",null,r.a.createElement("div",{className:"example__container"},void 0!==t?t.map(function(e,t){return e<10?r.a.createElement("div",{key:t,className:"example__time--container"},r.a.createElement("h4",null,"0",e,":00 "),r.a.createElement("div",{className:"hour ".concat(a)}),n):r.a.createElement("div",{key:t,className:"example__time--container"},r.a.createElement("h4",null,e,":00 "),r.a.createElement("div",{className:"hour ".concat(a)}),n)}):void 0===t?r.a.createElement("div",null,"No content"):void 0))},k=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={dayHours:[],dayHoursMedication:[],medicationName:"",firstDose:"",medicationInstruction:"",colorSelected:""},a.getDays=a.getDays.bind(Object(u.a)(a)),a.getHoursMedication=a.getHoursMedication.bind(Object(u.a)(a)),a.getInfoState=a.getInfoState.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDays()}},{key:"getDays",value:function(){for(var e=[],t=1;t<24;t++)e.push(t);return this.setState({dayHours:e})}},{key:"getHoursMedication",value:function(){if(""!==this.state.firstDose&&""!==this.state.medicationInstruction){for(var e=parseInt(this.state.firstDose),t=parseInt(this.state.medicationInstruction),a=24/t,n=[],r=0;r<a;r++)n.push(r);var l=e,o=[];return n.forEach(function(e){if(0===e)o.push(l);else{var a=l+=t;if(a>24){var n=a-24;o.push(n)}else o.push(a)}}),o}}},{key:"getInfoState",value:function(e,t){this.setState(Object(N.a)({},t,e.currentTarget.value))}},{key:"render",value:function(){var e=this.getHoursMedication();return r.a.createElement("div",{className:"mainCalculator"},r.a.createElement(y,null),r.a.createElement("div",{className:"mainCalculator_content"},r.a.createElement(b,{getInfoState:this.getInfoState}),r.a.createElement(D,{getInfoState:this.getInfoState}),r.a.createElement(T,{getInfoState:this.getInfoState}),r.a.createElement(I,{getInfoState:this.getInfoState}),r.a.createElement(j,{info:e,color:this.state.colorSelected,medicationName:this.state.medicationName})))}}]),t}(r.a.Component)),S=function(){return r.a.createElement("div",{className:"navigator"},r.a.createElement(d.b,{className:"navigator_link",to:"/My-Health-Log/"},r.a.createElement("i",{className:"fas fa-home icon"}),"Home"),r.a.createElement(d.b,{className:"navigator_link",to:"/My-Health-Log/treatment"},r.a.createElement("i",{className:"fas fa-pills icon"}),"Treatment"),r.a.createElement(d.b,{className:"navigator_link",to:"/My-Health-Log/appointments"},r.a.createElement("i",{className:"fas fa-calendar-check icon"}),"Appointments"),r.a.createElement(d.b,{className:"navigator_link",to:"/My-Health-Log/calculator"},r.a.createElement("i",{className:"fas fa-clock icon"}),"Timer"))},M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={flareTreatment:[]},a.getFlareTreatmentInfo=a.getFlareTreatmentInfo.bind(Object(u.a)(a)),a.includeDayTreatmentToData=a.includeDayTreatmentToData.bind(Object(u.a)(a)),a.includeDataOrderedToState=a.includeDataOrderedToState.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getFlareTreatmentInfo()}},{key:"getFlareTreatmentInfo",value:function(){var e=this;fetch("https://laurapareja.github.io/My-Health-Log/services/info.json").then(function(e){return e.json()}).then(function(t){e.includeDayTreatmentToData(t),e.includeDataOrderedToState(t)})}},{key:"includeDayTreatmentToData",value:function(e){return e[0].treatment.push({date:"2019-06-16",treatment:[{time:"08:00",pill:"paracetamol"},{time:"12:45",pill:"ibuprofeno"},{time:"18:45",pill:"paracetamol"}]}),e}},{key:"includeDataOrderedToState",value:function(e){e.sort(function(e,t){return new Date(t.name)-new Date(e.name)});var t=e.map(function(e){return e.treatment.sort(function(e,t){return new Date(t.date)-new Date(e.date)})});return this.setState({flareTreatment:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"body"},r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/My-Health-Log/",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/My-Health-Log/treatment",render:function(){return r.a.createElement(h,{flareTreatment:e.state.flareTreatment,titlePage:"Treatment",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),r.a.createElement(E.a,{exact:!0,path:"/My-Health-Log/appointments",render:function(){return r.a.createElement(v,{titlePage:"Appointments",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/doctorDates.png"})}}),r.a.createElement(E.a,{exact:!0,path:"/My-Health-Log/calculator",render:function(){return r.a.createElement(k,null)}})),r.a.createElement(S,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.05c6fbe8.chunk.js.map