(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(275)},273:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),c=a(18),l=a(19),i=a(21),u=a(20),h=a(22),p=a(26),d=a(23),m="DATA",w="_START",b="_SUCCESS",f="_FAIL",g="RESULT";function y(){return function(e){e({type:m+w}),fetch("https://api.myjson.com/bins/cwc5q").then(function(e){return e.json()}).then(function(t){return e({type:m+b,payload:{response:t}})}).catch(function(t){e({type:m+f,payload:{error:t}})})}}var j=a(35),v=a(279),O=a(106),E=a.n(O),C=a(34),k=a.n(C),A=a(107),x=a.n(A),R=a(66),S=a.n(R),D=a(108),L=a.n(D),T=a(109),N=a.n(T),M=a(65),F=a.n(M),_=a(102),q=a.n(_),B=a(103),I=a.n(B),J=a(105),U=a.n(J),V=a(104),W=a.n(V),P=a(38),Q=Object(P.createMuiTheme)({typography:{useNextVariants:!0}}),$=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose;return r.a.createElement(P.MuiThemeProvider,{theme:Q},r.a.createElement(q.a,{open:t},r.a.createElement(I.a,null,r.a.createElement(W.a,null,"Every unanswered answer is considered incorrect, you are sure that you want Continue?")),r.a.createElement(U.a,null,r.a.createElement(k.a,{onClick:function(){return a("no")},color:"primary"},"Disagree"),r.a.createElement(k.a,{onClick:function(){return a("yes")},color:"primary",autoFocus:!0},"Agree"))))}}]),t}(n.Component),z=a(33),G=a.n(z),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"})}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={answers:{},open:!1},a.handleChangeText=function(e,t){return function(n){var r=n.target.value;a.setState({answers:Object(d.a)({},a.state.answers,Object(p.a)({},e,r===t?"0":null))},function(){null===a.state.answers[e]&&delete a.state.answers[e]})}},a.handleChangeRadio=function(e){return function(t){a.setState({answers:Object(d.a)({},a.state.answers,Object(p.a)({},e,t.target.value))})}},a.handleChangeCheckbox=function(e){return function(t){var n=t.target.value,r=t.target.checked;a.setState({answers:Object(d.a)({},a.state.answers,Object(p.a)({},e,Object(d.a)({},a.state.answers[e],Object(p.a)({},n,n))))},function(){r||(delete a.state.answers[e][n],Object.keys(a.state.answers[e]).length||delete a.state.answers[e])})}},a.handleSubmit=function(){var e=a.state.answers,t=a.props,n=t.data,r=t.history,s=t.getResult;Object.keys(e).length===n.length?(s(e),r.push("/result")):a.setState({open:!0})},a.handleClose=function(e){a.setState({open:!1}),"yes"===e&&(a.props.getResult(a.state.answers),a.props.history.push("/result"))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.isLoading,s=this.state.open;return n?r.a.createElement(H,null):r.a.createElement("div",{className:"wrap"},s&&r.a.createElement($,{handleClose:this.handleClose,open:s}),r.a.createElement("h1",null,"Questions about the story:"),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},a.map(function(t){return r.a.createElement(G.a,{className:"wrap-box",key:t.id},r.a.createElement("p",null,t.question),t.answers.map(function(a,n){return r.a.createElement("div",{key:n},"text"===t.type?r.a.createElement(E.a,{label:"Answer",variant:"outlined",onChange:e.handleChangeText(t.id,t.answers[0])}):"checkbox"===t.type?r.a.createElement(S.a,{control:r.a.createElement(x.a,{checked:e.state.answers[t.id]&&e.state.answers[t.id][n]===n,onChange:e.handleChangeCheckbox(t.id),value:"".concat(n),color:"primary"}),label:a}):"radio"===t.type?r.a.createElement(S.a,{control:r.a.createElement(L.a,{checked:e.state.answers[t.id]==="".concat(n),onChange:e.handleChangeRadio(t.id),value:"".concat(n),color:"primary"}),label:a}):r.a.createElement(F.a,null,r.a.createElement(N.a,{onChange:e.handleChangeRadio(t.id)},r.a.createElement("option",{value:"0"},t.selectAnswer[0]),r.a.createElement("option",{value:"1"},t.selectAnswer[1]),r.a.createElement("option",{value:"2"},t.selectAnswer[2]))))}))}),r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:this.handleSubmit},"Reply")))}}]),t}(n.Component),X=Object(j.b)(function(e){return{data:e.data.data,isLoading:e.data.isLoading}},{getData:y,getResult:function(e){return{type:g,payload:{answers:e}}}})(Object(v.a)(K)),Y=a(112),Z=a.n(Y),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).rightAnswers=0,a.getResult=function(e,t){a.rightAnswers=0;var n=function(n){e.forEach(function(e){if(n===e.id)if("checkbox"===e.type){var r=0;e.answers.forEach(function(a,s){t[n][s]&&(t[n][s]===e.CorrectAnswer[0]||t[n][s]===e.CorrectAnswer[1]?r+=.5:r-=.5)}),r>0&&(a.rightAnswers+=r)}else t[n]===e.CorrectAnswer[0]&&a.rightAnswers++})};for(var r in t)n(r)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.data.length||this.props.getData()}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.answers;this.getResult(t,a);var n=+(12/t.length*this.rightAnswers).toFixed(1);return r.a.createElement("div",{className:"wrap"},r.a.createElement(G.a,{className:"wrap-box result"},r.a.createElement("p",null,"Number of correct answers: ",this.rightAnswers),r.a.createElement(Z.a,null),r.a.createElement("p",null,"Rating: ",n," of 12")))}}]),t}(n.Component),te=Object(j.b)(function(e){return{data:e.data.data,answers:e.data.answers}},{getData:y})(ee),ae=a(277),ne=a(278),re=a(276),se=a(25),oe={data:[],isLoading:!1,answers:{}},ce=Object(se.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m+w:return Object(d.a)({},e,{isLoading:!0});case m+b:return Object(d.a)({},e,{data:n.response.data,isLoading:!1});case g:return Object(d.a)({},e,{answers:n.answers})}return e}}),le=a(113),ie=Object(se.a)(le.a),ue=Object(se.d)(ce,{},ie);window.store=ue;var he=ue,pe=(a(273),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{store:he},r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,{path:"/result",component:te}),r.a.createElement(re.a,{path:"/",component:X}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,2,1]]]);
//# sourceMappingURL=main.e347fd28.chunk.js.map