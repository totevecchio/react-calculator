(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(6),s=n(8),r=n(2),i=n(3),c=n(5),l=n(4),u=n(1),o=n.n(u),p=n(9),d=n.n(p),j=(n(16),n(10)),h=n(0),y=["value"],f=["onPress","className"],O=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={scale:1},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.state.scale,t=this.node,n=t.parentNode.offsetWidth/t.offsetWidth;e!==n&&(n<1?this.setState({scale:n}):e<1&&this.setState({scale:1}))}},{key:"render",value:function(){var e=this,t=this.state.scale;return Object(h.jsx)("div",{className:"auto-scaling-text",style:{transform:"scale(".concat(t,",").concat(t,")")},ref:function(t){return e.node=t},children:this.props.children})}}]),n}(o.a.Component),v=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=Object(s.a)(e,y),r=navigator.language||"en-US",i=parseFloat(t).toLocaleString(r,{useGrouping:!0,maximumFractionDigits:6}),c=t.match(/\.\d*?(0*)$/);return c&&(i+=/[1-9]/.test(c[0])?c[1]:c[0]),Object(h.jsx)("div",Object(a.a)(Object(a.a)({},n),{},{className:"calculator-display",children:Object(h.jsx)(O,{children:i})}))}}]),n}(o.a.Component),b=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onPress,n=e.className,r=Object(s.a)(e,f);return Object(h.jsx)(j.a,{onPoint:t,children:Object(h.jsx)("button",Object(a.a)({className:"calculator-key ".concat(n)},r))})}}]),n}(o.a.Component),m={"/":function(e,t){return e/t},"*":function(e,t){return e*t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"=":function(e,t){return t}},k=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={value:null,displayValue:"0",operator:null,waitingForOperand:!1},e.handleKeyDown=function(t){var n=t.key;"Enter"===n&&(n="="),/\d/.test(n)?(t.preventDefault(),e.inputDigit(parseInt(n,10))):n in m?(t.preventDefault(),e.performOperation(n)):"."===n?(t.preventDefault(),e.inputDot()):"%"===n?(t.preventDefault(),e.inputPercent()):"Backspace"===n?(t.preventDefault(),e.clearLastChar()):"Clear"===n&&(t.preventDefault(),"0"!==e.state.displayValue?e.clearDisplay():e.clearAll())},e}return Object(i.a)(n,[{key:"clearAll",value:function(){this.setState({value:null,displayValue:"0",operator:null,waitingForOperand:!1})}},{key:"clearDisplay",value:function(){this.setState({displayValue:"0"})}},{key:"clearLastChar",value:function(){var e=this.state.displayValue;this.setState({displayValue:e.substring(0,e.length-1)||"0"})}},{key:"toggleSign",value:function(){var e=this.state.displayValue,t=-1*parseFloat(e);this.setState({displayValue:String(t)})}},{key:"inputPercent",value:function(){var e=this.state.displayValue;if(0!==parseFloat(e)){var t=e.replace(/^-?\d*\.?/,""),n=parseFloat(e)/100;this.setState({displayValue:String(n.toFixed(t.length+2))})}}},{key:"inputDot",value:function(){var e=this.state.displayValue;/\./.test(e)||this.setState({displayValue:e+".",waitingForOperand:!1})}},{key:"inputDigit",value:function(e){var t=this.state,n=t.displayValue;t.waitingForOperand?this.setState({displayValue:String(e),waitingForOperand:!1}):this.setState({displayValue:"0"===n?String(e):n+e})}},{key:"performOperation",value:function(e){var t=this.state,n=t.value,a=t.displayValue,s=t.operator,r=parseFloat(a);if(null==n)this.setState({value:r});else if(s){var i=n||0,c=m[s](i,r);this.setState({value:c,displayValue:String(c)})}this.setState({waitingForOperand:!0,operator:e})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state.displayValue,n="0"!==t,a=n?"C":"AC";return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("div",{className:"calculator",children:[Object(h.jsx)(v,{value:t}),Object(h.jsxs)("div",{className:"calculator-keypad",children:[Object(h.jsxs)("div",{className:"input-keys",children:[Object(h.jsxs)("div",{className:"function-keys",children:[Object(h.jsx)(b,{className:"key-clear",onPress:function(){return n?e.clearDisplay():e.clearAll()},children:a}),Object(h.jsx)(b,{className:"key-sign",onPress:function(){return e.toggleSign()},children:"\xb1"}),Object(h.jsx)(b,{className:"key-percent",onPress:function(){return e.inputPercent()},children:"%"})]}),Object(h.jsxs)("div",{className:"digit-keys",children:[Object(h.jsx)(b,{className:"key-0",onPress:function(){return e.inputDigit(0)},children:"0"}),Object(h.jsx)(b,{className:"key-dot",onPress:function(){return e.inputDot()},children:"\u25cf"}),Object(h.jsx)(b,{className:"key-1",onPress:function(){return e.inputDigit(1)},children:"1"}),Object(h.jsx)(b,{className:"key-2",onPress:function(){return e.inputDigit(2)},children:"2"}),Object(h.jsx)(b,{className:"key-3",onPress:function(){return e.inputDigit(3)},children:"3"}),Object(h.jsx)(b,{className:"key-4",onPress:function(){return e.inputDigit(4)},children:"4"}),Object(h.jsx)(b,{className:"key-5",onPress:function(){return e.inputDigit(5)},children:"5"}),Object(h.jsx)(b,{className:"key-6",onPress:function(){return e.inputDigit(6)},children:"6"}),Object(h.jsx)(b,{className:"key-7",onPress:function(){return e.inputDigit(7)},children:"7"}),Object(h.jsx)(b,{className:"key-8",onPress:function(){return e.inputDigit(8)},children:"8"}),Object(h.jsx)(b,{className:"key-9",onPress:function(){return e.inputDigit(9)},children:"9"})]})]}),Object(h.jsxs)("div",{className:"operator-keys",children:[Object(h.jsx)(b,{className:"key-divide",onPress:function(){return e.performOperation("/")},children:"\xf7"}),Object(h.jsx)(b,{className:"key-multiply",onPress:function(){return e.performOperation("*")},children:"\xd7"}),Object(h.jsx)(b,{className:"key-subtract",onPress:function(){return e.performOperation("-")},children:"\u2212"}),Object(h.jsx)(b,{className:"key-add",onPress:function(){return e.performOperation("+")},children:"+"}),Object(h.jsx)(b,{className:"key-equals",onPress:function(){return e.performOperation("=")},children:"="})]})]})]})})})}}]),n}(o.a.Component);d.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))},16:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.6a056432.chunk.js.map