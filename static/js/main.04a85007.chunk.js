(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(1),a=e.n(o),u=e(4),c=e.n(u),s=(e(14),e(7)),b=e(3),i=e(5),r=e(6),l=e(9),h=e(8),d=(e(15),e(0)),j=function(t){Object(l.a)(e,t);var n=Object(h.a)(e);function e(){var t;return Object(i.a)(this,e),(t=n.call(this)).handleOnClick=function(n){for(var e=t.state.counter,o=["X","O"],a=0;a<o.length;a++){var u;if(!t.state[n.target.value]&&e%2===a&&e<9&&!t.state.displayWhoWon)t.setState((u={},Object(b.a)(u,n.target.value,o[a]),Object(b.a)(u,"counter",e+1),u)),t.winner()}},t.winner=function(){for(var n=["button1","button2","button3","button4","button5","button6","button7","button8","button9"],e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],o=0;o<e.length;o++)for(var a=Object(s.a)(e[o],3),u=a[0],c=a[1],b=a[2],i=["X","O"],r=0;r<i.length;r++)t.state[n[u]]===i[r]&&t.state[n[u]]===t.state[n[c]]&&t.state[n[c]]===t.state[n[b]]&&t.setState({displayWhoWon:!0,winner:i[r]});8!==t.state.counter||t.state.displayWhoWon||t.setState({displayWhoWon:!0,winner:"nobody"})},t.restartGame=function(){t.setState({button1:"",button2:"",button3:"",button4:"",button5:"",button6:"",button7:"",button8:"",button9:"",counter:0,displayWhoWon:!1,winner:""})},t.state={button1:"",button2:"",button3:"",button4:"",button5:"",button6:"",button7:"",button8:"",button9:"",counter:0,displayWhoWon:!1,winner:""},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{id:"app",className:"app",children:[Object(d.jsx)("h1",{children:"Here you can play Tic Tac Toe"}),["button1","button2","button3","button4","button5","button6","button7","button8","button9"].map((function(n,e){return t.state[n]?"X"===t.state[n]?Object(d.jsx)("button",{value:n,className:"button",onClick:t.handleOnClick,children:"X"},e):"O"===t.state[n]?Object(d.jsx)("button",{value:n,className:"button",onClick:t.handleOnClick,children:"O"},e):void 0:Object(d.jsx)("button",{value:n,className:"button",onClick:t.handleOnClick,children:"\xb7"},e)})),this.state.displayWhoWon?Object(d.jsxs)("h1",{className:"winnerText",children:["winner is ",this.state.winner]}):Object(d.jsx)("p",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"restartButton",onClick:this.restartGame,children:"restart"})]})}}]),e}(a.a.Component),O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,o=n.getFID,a=n.getFCP,u=n.getLCP,c=n.getTTFB;e(t),o(t),a(t),u(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.04a85007.chunk.js.map