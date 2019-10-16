(window["webpackJsonpmy-react-project"]=window["webpackJsonpmy-react-project"]||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=(a(29),a(10)),i=a(11),m=a(13),s=a(12),u=a(3),d=a(14),g=a(2),p=a(7),h=(a(30),function(){return l.a.createElement("div",{className:"homeMain"},l.a.createElement("img",{src:"https://laurapareja.github.io/My-Health-Log/images/wallpaper.png",alt:"homewallpaper",className:"homepage_img"}))}),f=function(e){var t=e.classButton,a=e.nameButton;return l.a.createElement("button",{className:"button ".concat(t)},a)},E=function(e){var t=e.classImage,a=e.image,n=e.titlePage;return l.a.createElement("div",{className:"main"},l.a.createElement("img",{src:a,alt:"pill",className:t}),l.a.createElement("h2",{className:"main_title"},n),l.a.createElement("h3",{className:"main_subtitle"},"Here you can register and see your flare-ups treatment"),l.a.createElement("div",{className:"treatmentPage_button--container"},l.a.createElement(g.b,{to:"/My-Health-Log/treatmentList"},l.a.createElement(f,{nameButton:"TREATMENT LIST",classButton:"treatmentPage_button"})),l.a.createElement(f,{nameButton:"REGISTER",classButton:"treatmentPage_button"})))},v=(a(36),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null," \xa9 2019 / ",l.a.createElement("a",{className:"footer_link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/laurapareja/"},"Laura Pareja"),"/ Licencia"))}),N=(a(37),function(e){var t=e.flareTreatment,a=e.titlePage,n=e.image,r=e.classImage,o=e.colorSelected,c=e.medicationName;return l.a.createElement("div",{className:"main"},l.a.createElement("img",{src:n,alt:"pill",className:"treatmentPageListImp ".concat(r)}),l.a.createElement("h2",{className:"main_title"},a),l.a.createElement("div",null,function(e,t,a){return e.map(function(e){return e.map(function(e,n){var r=e.treatment.map(function(e,n){return e.pill===a?l.a.createElement("div",{className:"medication_dose--container",key:n},l.a.createElement("div",{className:"pill ".concat(t)}),l.a.createElement("h4",{className:"doseTime"},e.time," "),l.a.createElement("p",{className:"pillName"},e.pill)):l.a.createElement("div",{className:"medication_dose--container",key:n},l.a.createElement("div",{className:"pill ".concat(e.pill)}),l.a.createElement("h4",{className:"doseTime"},e.time," "),l.a.createElement("p",{className:"pillName"},e.pill))}),o=function(e){var t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+n}(new Date(e.date));return l.a.createElement("div",{key:n,className:"medication_dose--day"},l.a.createElement("p",{className:"dateListItem"}," ",o),r)})})}(t,o,c)),l.a.createElement(g.b,{to:"/My-Health-Log/treatment"},l.a.createElement(f,{nameButton:"Back",classButton:"treatmentPage_button"})),l.a.createElement(v,null))}),y=function(e){var t=e.classImage,a=e.image,n=e.titlePage;return l.a.createElement("div",{className:"main"},l.a.createElement("img",{src:a,alt:"pill",className:t}),l.a.createElement("h2",{className:"main_title"},n),l.a.createElement("h3",{className:"main_subtitle"},"Here you can register and see your doctor appointments"),l.a.createElement("div",{className:"treatmentPage_button--container"},l.a.createElement(g.b,{to:"/My-Health-Log/appointmentsList"},l.a.createElement(f,{nameButton:"APPOINTMENT LIST",classButton:"treatmentPage_button"})),l.a.createElement(f,{nameButton:"REGISTER",classButton:"treatmentPage_button"})))},b=(a(38),function(e){var t=e.renderMonthName,a=e.classImage,n=e.image,r=e.titlePage;return l.a.createElement("div",{className:"main appointments"},l.a.createElement("img",{src:n,alt:"appointment",className:"treatmentPageListImp ".concat(a)}),l.a.createElement("h2",{className:"main_title"},r),t,l.a.createElement("ul",null,l.a.createElement("li",null,"Monday 21 October"),l.a.createElement("li",null,"Tuesday 22 October"),l.a.createElement("li",null,"Wednesday 23 October"),l.a.createElement("li",null,"Thursday 24 October")),l.a.createElement(g.b,{to:"/My-Health-Log/appointments"},l.a.createElement(f,{nameButton:"Back",classButton:"treatmentPage_button buttonAppointment"})))}),S=a(23),D=function(){return l.a.createElement("header",null,l.a.createElement("h2",{className:"main_title"},"Doses Calculator"))},I=function(e){var t=e.medicationName;return l.a.createElement("main",{className:"medicationName"},l.a.createElement("label",{className:"inputContent",htmlFor:"medicationName"},"Medication Name"),l.a.createElement("input",{type:"text",id:"medicationName",placeholder:"Name",onChange:function(t){e.getInfoState(t,"medicationName")},value:t}))},T=function(e){var t=e.colorSelected;return l.a.createElement("div",{className:"inputContainer"},l.a.createElement("label",{className:"inputContent",htmlFor:"medicationColor"},"Select a color"),l.a.createElement("select",{name:"colors",id:"medicationColor",onChange:function(t){e.getInfoState(t,"colorSelected")},className:"".concat(t," colorselector"),value:t},l.a.createElement("option",{value:"blue",className:"blue colorselector"}),l.a.createElement("option",{value:"yellow",className:"yellow colorselector"}),l.a.createElement("option",{value:"orange",className:"orange colorselector"}),l.a.createElement("option",{value:"purple",className:"purple colorselector"}),l.a.createElement("option",{value:"green",className:"green colorselector"}),l.a.createElement("option",{value:"red",className:"red colorselector"})))},M=function(e){var t=e.medicationInstruction;return l.a.createElement("div",{className:"inputContainer"},l.a.createElement("label",{htmlFor:"medicationInstruction",className:"inputContent"},"each"),l.a.createElement("select",{name:"guidelineDose",id:"guidelineDose",onChange:function(t){e.getInfoState(t,"medicationInstruction")},value:t},l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"12"},"12"),l.a.createElement("option",{value:"24"},"24")),l.a.createElement("label",{htmlFor:"medicationInstruction"},"    hours"))},_=function(e){for(var t=e.firstDose,a=[],n=0;n<=24;n++)a.push(n);return l.a.createElement("div",{className:"inputContainer"},l.a.createElement("label",{className:"inputContent",htmlFor:"startTiming"},"First Dose"),l.a.createElement("select",{name:"startTiming",id:"startTiming",onChange:function(t){e.getInfoState(t,"firstDose")},value:t},a.map(function(e,t){var a="".concat(e);return e<10&&(a="0".concat(e)),l.a.createElement("option",{key:t,value:e},a,":00")})))},k=function(e){var t=e.info,a=e.color,n=e.medicationName;return l.a.createElement("div",null,l.a.createElement("div",{className:"example__container"},void 0!==t?t.map(function(e,t){return e<10?l.a.createElement("div",{key:t,className:"example__time--container"},l.a.createElement("h4",null,"0",e,":00 "),l.a.createElement("div",{className:"hour ".concat(a)}),n):l.a.createElement("div",{key:t,className:"example__time--container"},l.a.createElement("h4",null,e,":00 "),l.a.createElement("div",{className:"hour ".concat(a)}),n)}):void 0===t?l.a.createElement("div",null,"No content"):void 0))},O=(a(39),function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).getData();return a.state=null===n?a._getInitialState():n,a.saveData=a.saveData.bind(Object(u.a)(a)),a.getDays=a.getDays.bind(Object(u.a)(a)),a.getHoursMedication=a.getHoursMedication.bind(Object(u.a)(a)),a.getInfoState=a.getInfoState.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDays(),this.saveData()}},{key:"getData",value:function(){return JSON.parse(localStorage.getItem("infoMedication"))}},{key:"saveData",value:function(){localStorage.setItem("infoMedication",JSON.stringify(this.state))}},{key:"_getInitialState",value:function(){return{dayHours:[],dayHoursMedication:[],medicationName:"",firstDose:"",medicationInstruction:"",colorSelected:""}}},{key:"getDays",value:function(){for(var e=[],t=1;t<24;t++)e.push(t);return this.setState({dayHours:e},this.saveData)}},{key:"getHoursMedication",value:function(){if(""!==this.state.firstDose&&""!==this.state.medicationInstruction){for(var e=parseInt(this.state.firstDose),t=parseInt(this.state.medicationInstruction),a=24/t,n=[],l=0;l<a;l++)n.push(l);var r=e,o=[];return n.forEach(function(e){if(0===e)o.push(r);else{var a=r+=t;if(a>24){var n=a-24;o.push(n)}else o.push(a)}}),o}}},{key:"getInfoState",value:function(e,t){this.setState(Object(S.a)({},t,e.currentTarget.value),this.saveData)}},{key:"render",value:function(){var e=this.getHoursMedication(),t=this.state.colorSelected,a=this.state.medicationName;return this.props.actionColorSelector(t,a),l.a.createElement("div",{className:"mainCalculator"},l.a.createElement(D,null),l.a.createElement("div",{className:"mainCalculator_content"},l.a.createElement(I,{getInfoState:this.getInfoState,medicationName:this.state.medicationName}),l.a.createElement(T,{getInfoState:this.getInfoState,colorSelected:this.state.colorSelected}),l.a.createElement(_,{getInfoState:this.getInfoState,firstDose:this.state.firstDose}),l.a.createElement(M,{getInfoState:this.getInfoState,medicationInstruction:this.state.medicationInstruction}),l.a.createElement(k,{info:e,color:this.state.colorSelected,medicationName:this.state.medicationName})))}}]),t}(l.a.Component)),j=(a(40),function(){return l.a.createElement("div",{className:"navigator"},l.a.createElement(g.b,{className:"navigator_link",to:"/My-Health-Log/"},l.a.createElement("i",{className:"fas fa-home icon",samesite:"none"}),"Home"),l.a.createElement(g.b,{className:"navigator_link",to:"/My-Health-Log/treatment"},l.a.createElement("i",{className:"fas fa-pills icon",samesite:"none"}),"Treatment"),l.a.createElement(g.b,{className:"navigator_link",to:"/My-Health-Log/appointments"},l.a.createElement("i",{className:"fas fa-calendar-check icon",samesite:"none"}),"Appointments"),l.a.createElement(g.b,{className:"navigator_link",to:"/My-Health-Log/calculator"},l.a.createElement("i",{className:"fas fa-clock icon",samesite:"none"}),"Timer"))}),H=(a(41),function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).getData();return a.state=null===n?a._getInitialState():n,a.saveData=a.saveData.bind(Object(u.a)(a)),a.getFlareTreatmentInfo=a.getFlareTreatmentInfo.bind(Object(u.a)(a)),a.includeDayTreatmentToData=a.includeDayTreatmentToData.bind(Object(u.a)(a)),a.includeDataOrderedToState=a.includeDataOrderedToState.bind(Object(u.a)(a)),a.actionColorSelector=a.actionColorSelector.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getFlareTreatmentInfo(),this.saveData()}},{key:"getData",value:function(){return JSON.parse(localStorage.getItem("infoMyHealth"))}},{key:"saveData",value:function(){localStorage.setItem("infoMyHealth",JSON.stringify(this.state))}},{key:"_getInitialState",value:function(){return{flareTreatment:[],colorSelected:"",medicationName:""}}},{key:"getFlareTreatmentInfo",value:function(){var e=this;fetch("https://laurapareja.github.io/My-Health-Log/services/info.json").then(function(e){return e.json()}).then(function(t){e.includeDayTreatmentToData(t),e.includeDataOrderedToState(t)})}},{key:"includeDayTreatmentToData",value:function(e){return e[0].treatment.push({date:"2019-06-16",treatment:[{time:"08:00",pill:"paracetamol"},{time:"12:45",pill:"ibuprofeno"},{time:"18:45",pill:"paracetamol"}]}),e}},{key:"includeDataOrderedToState",value:function(e){var t=e.sort(function(e,t){return new Date(t.name)-new Date(e.name)}).map(function(e){return e.treatment.sort(function(e,t){return new Date(t.date)-new Date(e.date)})});return this.setState({flareTreatment:t},this.saveData)}},{key:"actionColorSelector",value:function(e,t){this.state.colorSelected!==e&&this.setState({colorSelected:e},this.saveData);var a=t.toLowerCase();this.state.medicationName!==a&&this.setState({medicationName:a},this.saveData)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body"},l.a.createElement(g.a,null,l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/",render:function(){return l.a.createElement(h,null)}}),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/treatment",render:function(){return l.a.createElement(E,{titlePage:"Treatment",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/treatmentList",render:function(){return l.a.createElement(N,{flareTreatment:e.state.flareTreatment,titlePage:"Treatment",classImage:"page_image",colorSelected:e.state.colorSelected,medicationName:e.state.medicationName,image:"https://laurapareja.github.io/My-Health-Log/images/pills.png"})}}),l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/appointments",render:function(){return l.a.createElement(y,{titlePage:"Appointments",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/doctorDates.png"})}}),l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/appointmentsList",render:function(){return l.a.createElement(b,{titlePage:"Appointments",classImage:"page_image",image:"https://laurapareja.github.io/My-Health-Log/images/doctorDates.png"})}}),l.a.createElement(p.a,{exact:!0,path:"/My-Health-Log/calculator",render:function(){return l.a.createElement(O,{actionColorSelector:e.actionColorSelector})}})),l.a.createElement(j,null)))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.055ca253.chunk.js.map