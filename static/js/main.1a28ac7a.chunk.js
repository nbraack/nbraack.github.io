(this.webpackJsonpnbraack_homepage=this.webpackJsonpnbraack_homepage||[]).push([[0],{10:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(10);var a,r=n(0),l=n.n(r),c=n(3),i=n.n(c),u=n(1),o=n(6);!function(e){e.TASKS="tasks",e.CALENDAR="calendar",e.DUTIES="duties",e.REVIEW="review"}(a||(a={}));var s=Object(o.a)({navigation:a.TASKS,events:[],reviewsData:{version:"",reviews:[],since:""},selectedEvent:null}),m=Object(u.a)(s,2),h=m[0],d=m[1],v=n(8),f=n(7),E=n(2),g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return Boolean(e)})).join(" ")},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512;return l.a.createElement("svg",{className:t.className?t.className+" icon":"icon",viewBox:"0 0 ".concat(n," 512")},l.a.createElement("path",{fill:"currentColor",d:f[e]}))},p=function(e){return b("CALENDAR_DAY",e,448)},w=function(e){return b("CHEVRON_RIGHT",e,320)},N=function(e){return b("CHEVRON_RIGHT",Object(v.a)({},e,{className:g("reflect",e.className)}),320)},A=function(e){return b("TIMES",e,352)},k=function(e){return b("UNDO",e)},y=["So","Mo","Di","Mi","Do","Fr","Sa"],D=function(e){return("0"+e).slice(-2)},M=function(e){return"".concat(y[e.getDay()],", ").concat(D(e.getDate()),".").concat(D(e.getMonth()+1),".").concat(e.getFullYear()).concat(function(e){var t=e.getUTCHours(),n=e.getMinutes();return t||n?" um ".concat(t,":").concat(D(n)," Uhr"):""}(e))},C=function(){return d.set({selectedEvent:null})},L=function(e){var t=e.selectedEvent,n=t.title,a=t.start,r=t.end,c=t.desc;return l.a.createElement("div",{className:"selected-event",onClick:C},l.a.createElement("div",{className:"close-btn"},l.a.createElement(A,null)),l.a.createElement("div",{className:"selected-event-container"},l.a.createElement("div",{className:"description"},l.a.createElement("span",{className:"title"},n),l.a.createElement("hr",null),+a===+r?l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null)," ",M(a)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"date-label"},"Beginn:"),M(a),l.a.createElement("hr",null),l.a.createElement("div",{className:"date-label"},"Ende:"),M(r)),c&&l.a.createElement("hr",null),c)))},S=function(e,t,n,a,r){var l,c=Math.min(Math.ceil((+e.end-+t)/864e5),(7-t.getDay())%7+1),i=function(e,t){return e?t?"single":"begin":t?"end":"middle"}(n,a),u="calc(".concat(100*c,"% - ").concat((l=i,"single"===l?1:"middle"===l?.5:.75),"em - ").concat(c>1?.5:0,"em)"),o=n||1===t.getDay();return{title:o?e.title:void 0,zIndex:o?1:void 0,select:function(){return t=e,d.set({selectedEvent:t});var t},width:u,className:i,row:r,backgroundColor:e.color}},z=function(e,t,n){return Object(r.useMemo)((function(){return function(e,t){var n=e.map((function(e){return{date:e,events:new Array(3).fill(void 0)}})),a=!0,r=!1,l=void 0;try{for(var c,i=function(){var t=c.value,a=t.start,r=t.end,l=e.findIndex((function(e){return+a<+e+864e5&&a>e})),i=e.findIndex((function(e){return+r<+e+864e5&&r>e})),u=i<0&&r>e[e.length-1]?e.length-1:i,o=l<0&&a<e[0]?0:l;if(o>=0&&u>=0){var s=n[o].events,m=s.findIndex((function(e){return void 0===e}));if(m>=0){s[m]=S(t,e[o],o===l,o===i,m);for(var h=o+1;h<=u;h++)n[h].events[m]=S(t,e[h],!1,h===i,m)}}},u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)i()}catch(o){r=!0,l=o}finally{try{a||null==u.return||u.return()}finally{if(r)throw l}}return n}(function(e,t){for(var n=(new Date(e,t,1).getDay()+6)%7,a=new Array(n).fill(void 0).map((function(a,r){return new Date(e,t,r-n+1)})),r=1;r<=31;r++){var l=new Date(e,t,r);if(l.getMonth()!==t)break;a.push(l)}var c=7-a[a.length-1].getDay();return a.concat(new Array(c).fill(void 0).map((function(n,a){return new Date(e,t+1,a+1)})))}(e,t),n)}),[e,t,n])},T=function(e){var t=e.event;if(!t)return null;var n=t.title,a=t.zIndex,r=t.width,c=t.className,i=t.row,u=t.select,o=t.backgroundColor;return l.a.createElement("div",{onClick:u,style:{width:r,zIndex:a,backgroundColor:o},className:g("event","event-"+i,c)},n||l.a.createElement(l.a.Fragment,null,"\xa0"))},R=function(e){var t=e.date,n=t.date,a=t.events,r=e.month,c=e.now;return l.a.createElement("div",{className:g("date",n.getMonth()!==r&&"inactive",+n===+c&&"current",1===n.getDay()&&"monday")},l.a.createElement("span",{className:"value"},n.getDate()),a.map((function(e,t){return l.a.createElement(T,{event:e,key:t})})))},I=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],O=["Mo","Di","Mi","Do","Fr","Sa","So"],j=new Date,U=new Date(j.getFullYear(),j.getMonth(),j.getDate()),K=function(e){var t=e.events,n=function(e){var t=Object(r.useState)((function(){return{month:e.getMonth(),year:e.getFullYear()}})),n=Object(u.a)(t,2),a=n[0],l=n[1];return[a,Object(r.useCallback)((function(){return l((function(e){var t=e.month,n=e.year;return{month:0===t?11:t-1,year:0===t?n-1:n}}))}),[]),Object(r.useCallback)((function(){return l((function(e){var t=e.month,n=e.year;return{month:11===t?0:t+1,year:11===t?n+1:n}}))}),[])]}(U),a=Object(u.a)(n,3),c=a[0],i=c.month,o=c.year,s=a[1],m=a[2],h=z(o,i,t);return l.a.createElement("div",{className:"calendar"},l.a.createElement("div",{className:"month"},l.a.createElement("span",{onClick:s,className:"arrow"},l.a.createElement(N,null)),l.a.createElement("span",{className:"value"},I[i]," ",o),l.a.createElement("span",{onClick:m,className:"arrow"},l.a.createElement(w,null))),l.a.createElement("div",{className:"grid"},O.map((function(e){return l.a.createElement("div",{key:e,className:"weekday"},e)})),h.map((function(e){return l.a.createElement(R,{date:e,month:i,now:U,key:+e.date})}))))},H=function(){var e=h((function(e){return{selectedEvent:e.selectedEvent,events:e.events}})),t=e.selectedEvent,n=e.events;return l.a.createElement("div",{className:"calendar-page"},l.a.createElement("h1",null,"Termine"),l.a.createElement(K,{events:n}),t&&l.a.createElement(L,{selectedEvent:t}))},B="Emily,Yoan,Hadia,Wiam,Rehab,Aurel,Jaimie,Mohammad II,Anna,Beyza,Ivan,Kenai,Yusuf,Sabit,Mohammad,Majd,Myron,Irene,Yassin,Hossein,Deswill,Lennart,Jaden,Lisa".split(","),F=Date.now(),V=Math.floor(((F-Date.UTC(2019,0,1))/864e5+1)/7)-[Date.UTC(2019,9,7),Date.UTC(2019,9,14),Date.UTC(2019,11,23),Date.UTC(2019,11,30),Date.UTC(2020,2,2),Date.UTC(2020,2,9),Date.UTC(2020,4,18)].filter((function(e){return e<=F})).length,W="Blumen gie\xdfen,Tafel wischen,Zettel austeilen,M\xfcll wegbringen,Licht ausschalten,Fenster schlie\xdfen,Fegen,Reserve".split(","),G="plant,board,share,trash,light,window,sweep,reserve".split(","),x=W.map((function(e,t){var n=function(e){return n=-2*V+2*t+16+e,a=B.length,(n%a+a)%a;var n,a},a=G[t];return{duty:e,image:"/".concat(a,".jpg"),alt:e,students:[B[n(0)],B[n(1)]]}})),Y=function(e){var t=e.duty,n=e.image,a=e.alt,r=e.students;return l.a.createElement("div",{className:"duty"},l.a.createElement("div",{className:"duty-title"},t),l.a.createElement("div",{className:"duty-image"},l.a.createElement("img",{src:n,alt:a})),r.map((function(e,t){return l.a.createElement("div",{className:"student",key:t},e)})),l.a.createElement("hr",null))},_=function(){return l.a.createElement("div",{className:"duties"},x.map((function(e,t){return l.a.createElement(Y,Object.assign({key:t},e))})))},J=function(e){var t=e.review,n=t.name,a=t.crowns,r=t.warnings,c=t.evils,i=t.necessary,u=t.rewards;return l.a.createElement("tr",{className:i?"evil":void 0},l.a.createElement("td",null,n),l.a.createElement("td",null,a,u?l.a.createElement("span",{className:"rewards"},u):null),l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,i||""))},P=function(){var e=h((function(e){return{reviewsData:e.reviewsData}})).reviewsData,t=e.version,n=e.reviews,a=e.since;return l.a.createElement("div",{className:"reviews"},l.a.createElement("h1",null,"Kronenliste"),l.a.createElement("table",{className:"pure-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,l.a.createElement("span",{role:"img","aria-label":"Kronen"},"\ud83d\udc51")),l.a.createElement("th",null,l.a.createElement("span",{role:"img","aria-label":"Gelbe Karten"},"\ud83d\ude29")),l.a.createElement("th",null,l.a.createElement("span",{role:"img","aria-label":"Rote Karte"},"\ud83d\ude21")),l.a.createElement("th",null,l.a.createElement("span",{role:"img","aria-label":"Fehlende Kronen"},"\ud83d\udeab")))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement(J,{key:e.name,review:e})})))),"Die Liste wird gef\xfchrt seit: ",a,l.a.createElement("br",null),"Aktualisiert am: ",t,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"Kronen"},"\ud83d\udc51")," ","- Anzahl der Kronen"),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"Gelbe Karten"},"\ud83d\ude29")," ","- Anzahl der gelben Karten"),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"Rote Karte"},"\ud83d\ude21")," ","- Anzahl der roten Karten"),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"Fehlende Kronen"},"\ud83d\udeab")," ","- Anzahl der noch fehlenden Kronen")))},$=function(){return l.a.createElement("div",{className:"tasks-page"},l.a.createElement("h1",null,"Aufgaben"),l.a.createElement("p",null,"Bitte entnehmt dem"," ",l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Wochenplan.pdf"},"Wochenplan"),", welche Aufgaben ihr in den kommenden Tagen bearbeiten m\xfcsst.",l.a.createElement("br",null),l.a.createElement("br",null),"Weiter unten findet ihr die Arbeitsbl\xe4tter, die ihr zur Bearbeitung der Aufgaben ben\xf6tigt."),l.a.createElement("h1",null,"Materialien"),l.a.createElement("h2",null,"Mathe"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Mathe/Klasse%207%20Mathematik%20Checkliste%20plus%20ABs%20und%20L%C3%B6sungen.pdf"},"Checkliste")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Mathe/Mathebuchseiten%20f%C3%BCr%20die%20Checkliste.pdf"},"Mathebuch"))),l.a.createElement("h2",null,"Bio"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Bio/Ern%C3%A4hrungs-Mappe.pdf"},"Ern\xe4hrungs-Mappe")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Bio/Arbeitsbl%C3%A4tter%20Ern%C3%A4hrungs-Mappe.pdf"},"Arbeitsbl\xe4tter Ern\xe4hrungs-Mappe")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Bio/Nachweis%20von%20Eiwei%C3%9F.doc"},"Nachweis von Eiwei\xdf")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Bio/Nachweis%20von%20Kohlenhydraten.doc"},"Nachweis von Kohlenhydraten"))),l.a.createElement("h2",null,"Englisch"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Englisch/English%20Assignment%20for%20Monday.docx"},"English Assignment"))),l.a.createElement("h2",null,"Gesellschaft"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Gesellschaft/Geschichte.pdf"},"Geschichte")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/nbraack/nbraack.github.io/raw/master/Aufgaben/Gesellschaft/Planet%20Schule%20Rallye-Mittelalter.pdf"},"Rallye"))))},Z=function(){var e=h((function(e){return{navigation:e.navigation}})).navigation;return e===a.DUTIES?l.a.createElement(_,null):e===a.REVIEW?l.a.createElement(P,null):e===a.CALENDAR?l.a.createElement(H,null):l.a.createElement($,null)},q=n(4);d.set({navigation:function(){var e=q.a.get("navigation");return e===a.DUTIES?a.DUTIES:e===a.REVIEW?a.REVIEW:e===a.CALENDAR?a.CALENDAR:a.TASKS}()});var Q=function(e){return function(){return function(e){q.a.set("navigation",e),d.set({navigation:e})}(e)}},X=[{type:a.TASKS,label:"Aufgaben"},{type:a.CALENDAR,label:"Termine"},{type:a.DUTIES,label:"\xc4mter"},{type:a.REVIEW,label:"Kronen"}],ee=function(){var e=h((function(e){return{navigation:e.navigation}})).navigation,t=Object(r.useMemo)((function(){return X.filter((function(t){return t.type!==e})).map((function(e){return l.a.createElement("button",{onClick:Q(e.type),key:e.type},e.label)}))}),[e]);return l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:"/nb-logo.svg",className:"App-logo",alt:"logo"}),l.a.createElement("div",{className:"navigation"},t))},te={window:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return window})),document:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return document})),navigator:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return navigator})),onLine:function(){return!("onLine"in te.navigator())||te.navigator().onLine},timestamp:function(){return Date.now()}},ne=function(){te.window().open(window.location.href,"_self")},ae=function(){},re=function(){return te.navigator().serviceWorker.register("/sw.js").then((function(e){e.onupdatefound=function(){var t=e.installing,n=e.active;t.onstatechange=function(){"installed"===t.state&&n&&ae()}}})).catch((function(){return te.window().console.error("service worker registration failed")}))},le=function(e,t){return new Promise((function(n){return te.window().setTimeout((function(){t(),n()}),e)}))},ce=function(e){if(e){var t=e.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4}) ([0-9]{1,2}):([0-9]{2})$/),n=e.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/);if(!t&&!n)return;var a=t||[].concat(Object(E.a)(n),[0,0]),r=Number(a[3]),l=Number(a[2])-1,c=Number(a[1]),i=Number(a[4]),u=Number(a[5]),o=new Date(Date.UTC(r,l,c,i,u));if(!(r===o.getFullYear()&&l===o.getMonth()))return;return o}},ie=function(e){var t=e.title,n=e.start,a=e.end,r=e.desc,l=e.color,c=ce(n),i=a?ce(a):c;return c&&i?{title:t,start:c,end:i,desc:r,color:l}:void 0},ue=te.document().getElementById("root");i.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement((function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ee,null),l.a.createElement("div",{className:"App-content"},l.a.createElement(Z,null)))}),null),l.a.createElement((function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useCallback)((function(e,t){return le(e,(function(){return a(t)}))}),[]),i=Object(r.useCallback)((function(){return Promise.all([c(0,"Update gefunden"),c(1e3,"Update anwenden"),c(1300,"Update anwenden."),c(1600,"Update anwenden.."),c(1900,"Update anwenden..."),c(2200,l.a.createElement(k,null)),le(2500,ne)])}),[]);return Object(r.useEffect)((function(){ae=i,"serviceWorker"in navigator&&window.addEventListener("load",re)}),[]),n?l.a.createElement("div",{className:"sw-update"},l.a.createElement("div",{className:"sw-update-overlay"}),l.a.createElement("div",{className:"sw-update-content"},n)):null}),null)),ue),fetch("/events.json",{headers:{"cache-control":"no-cache",pragma:"no-cache"}}).then((function(e){return e.json()})).then((function(e){var t=e.events.map(ie).filter(Boolean);d.set({events:t})})).catch(console.error),fetch("/reviews.json",{headers:{"cache-control":"no-cache",pragma:"no-cache"}}).then((function(e){return e.json()})).then((function(e){var t=e.reviews,n=e.version||"konnte nicht geladen werden",a=e.since||"konnte nicht geladen werden";d.set({reviewsData:{version:n,reviews:t,since:a}})})).catch((function(){}))},7:function(e){e.exports=JSON.parse('{"ALERT":"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z","ARROW_RIGHT":"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z","BAN":"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z","CALENDAR_DAY":"M400 64h-48V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56H128V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V192h384v272zm0-304H32v-48c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v48zM112 384h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm16-96h64v64h-64v-64z","CROWN":"M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z","CHEVRON_RIGHT":"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z","MENU":"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z","UNDO":"M500.333 0h-47.411c-6.853 0-12.314 5.729-11.986 12.574l3.966 82.759C399.416 41.899 331.672 8 256.001 8 119.34 8 7.899 119.526 8 256.187 8.101 393.068 119.096 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-33.971-33.971c-4.466-4.466-11.64-4.717-16.38-.543C341.308 415.448 300.606 432 256 432c-97.267 0-176-78.716-176-176 0-97.267 78.716-176 176-176 60.892 0 114.506 30.858 146.099 77.8l-101.525-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z","SETTINGS":"M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z","TIMES":"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}')},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1a28ac7a.chunk.js.map