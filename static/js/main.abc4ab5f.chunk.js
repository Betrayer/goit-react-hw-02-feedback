(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=a(3),u=a(4),i=a(5),s=a(7),m=a(6),g=a(8),d=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.percentages;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Statistics"),l.a.createElement("ul",null,l.a.createElement("li",null,"Good: ",l.a.createElement("span",null,t)),l.a.createElement("li",null,"Neutral: ",l.a.createElement("span",null,a)),l.a.createElement("li",null,"Bad: ",l.a.createElement("span",null,n)),l.a.createElement("li",null,"Total: ",l.a.createElement("span",null,r)),l.a.createElement("li",null,"Positive feedback: ",l.a.createElement("span",null,c,"%"))))},E=function(e){var t=e.onHandleClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:t,type:"button",name:"good"},"Good"),l.a.createElement("button",{onClick:t,type:"button",name:"neutral"},"Neutral"),l.a.createElement("button",{onClick:t,type:"button",name:"bad"},"Bad"))},b=function(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t),a)},p=function(e){var t=e.message;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t))},f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.getTotal=function(){var e=a.state;return e.good+e.neutral+e.bad},a.getPercentages=function(){return Math.round(a.state.good/a.getTotal()*100)},a.onHandleClick=function(e){var t=e.target.name;a.setState(Object(o.a)({},t,a.state[t]+1))},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{title:"Please leave feedback"},l.a.createElement(E,{onHandleClick:this.onHandleClick})),0===this.getTotal()?l.a.createElement(p,{message:"No feedback given"}):l.a.createElement(d,Object.assign({title:"Statistics"},this.state,{total:this.getTotal(),percentages:this.getPercentages()})))}}]),t}(n.Component);c.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.abc4ab5f.chunk.js.map