(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{2286:function(e,n,t){"use strict";t(7294);var a=t(4292),i=t.n(a),r=t(5893);n.Z=function(e){var n;switch(e.variant){case"light":!0;break;case"dark":n=!0;break;default:!0}return(0,r.jsx)("div",{style:{margin:e.margin},children:(0,r.jsx)("button",{className:"".concat(i().button," ").concat(n?i().dark:""),onClick:e.onClick,children:e.text})})}},561:function(e,n,t){"use strict";t(7294);var a=t(3117),i=t.n(a),r=t(5893);n.Z=function(e){var n,t;switch(e.variant){case"homepage":n=!0;break;case"quiz":t=!0;break;default:n=!0}return(0,r.jsxs)("div",{className:i().navbar,children:[(0,r.jsx)("div",{className:i().left}),(0,r.jsx)("div",{className:i().center,children:(0,r.jsx)("h1",{className:"".concat(t?i().quizPage:""," ").concat(n?i().homePage:""),children:"Life Completeness"})}),(0,r.jsx)("div",{className:i().right})]})}},2102:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a=t(2286),i=t(561),r=t(7294),s=t(9379),c=t.n(s),o=t(1163),u=t(4712),l=t.n(u),_=t(5893);var d=function(e){return(0,_.jsx)("div",{style:{margin:e.margin},children:(0,_.jsx)("input",{className:l().input,onKeyPress:function(e){var n=e.key;new RegExp("^[0-9]+$").test(n)||e.preventDefault()},onChange:function(n){return e.onChange(n.target.value)}})})};var h=function(){var e=(0,o.useRouter)(),n=(0,r.useState)("0"),t=n[0],s=n[1];return(0,_.jsxs)("div",{className:c().container,children:[(0,_.jsx)(i.Z,{variant:"quiz"}),(0,_.jsx)("h1",{className:c().title,children:"Input your age"}),(0,_.jsx)("h2",{className:c().subTitle,children:"We need this information to determine how much of your life you have already lived"}),(0,_.jsx)(d,{margin:"0 0 1.5rem 0",onChange:function(e){return s(e)}}),(0,_.jsx)(a.Z,{text:"Done",variant:"dark",onClick:function(){window.localStorage.setItem("age",t),e.push("/results")}})]})}},1365:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ageSelection",function(){return t(2102)}])},4292:function(e){e.exports={button:"style_button__2yVbz",dark:"style_dark__1x-dB"}},4712:function(e){e.exports={input:"style_input__2QGdl"}},3117:function(e){e.exports={navbar:"style_navbar__2jY3e",center:"style_center__KKasM",homePage:"style_homePage__1h9Y9",quizPage:"style_quizPage__1geWf"}},9379:function(e){e.exports={container:"AgeSelection_container__1TuYK",title:"AgeSelection_title__hYqLB",subTitle:"AgeSelection_subTitle__1e0oq"}},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=1365,e(e.s=n);var n}));var n=e.O();_N_E=n}]);