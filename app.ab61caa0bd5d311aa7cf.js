webpackJsonp([0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){console.log("Scrolling from "+e+" to "+t)}function r(e){console.log("Scrolled to "+e)}var a=n(1),s=o(a),u=n(28),c=o(u),l=n(171),f=o(l);n(173);var d=n(177),h="giladaya/react-fully-scrolled",p=!0;c.default.render(s.default.createElement("div",null,s.default.createElement(f.default,{href:"https://github.com/"+h,bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),s.default.createElement("div",null,s.default.createElement(d.Scroller,{initialPage:2,totalPages:4,onBeforeScroll:i,onAfterScroll:r,isEnabled:p},s.default.createElement(d.Section,{key:"one"},s.default.createElement("div",{id:"section_one",className:"section"},"One")),s.default.createElement(d.Section,{key:"two"},s.default.createElement("div",{id:"section_two",className:"section"},"Two")),s.default.createElement(d.Section,{key:"three"},s.default.createElement("div",{id:"section_three",className:"section"},"Three")),s.default.createElement(d.Section,{key:"four"},s.default.createElement("div",{id:"section_four",className:"section"},"Four"))))),document.getElementById("app"))},171:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),l=n(172),f=o(l),d="____GITHUB_CORNER_SUPER_SECRET___",h=(0,f.default)(),p=function(e){function t(){return i(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"componentDidMount",value:function(){if(!document.getElementById(d)){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.id=d,t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h)),e.appendChild(t)}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.width,o=e.height,i=e.direction,r=e.octoColor,a=e.bannerColor,s={position:"absolute",top:0,fill:r},u={},l="",f="",d="";return"left"===i?(l="M250 0L135 115h-15l-12 27L0 250V0z",f="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16",d="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z",s.left=0,u.webkitTransformOrigin="120px 144px",u.transformOrigin="120px 144px"):(l="M0 0l115 115h15l12 27 108 108V0z",f="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",s.right=0,u.WebkitTransformOrigin="130px 106px",u.transformOrigin="130px 106px"),c.default.createElement("a",{href:t,className:"github-corner"},c.default.createElement("svg",{width:n,height:o,viewBox:"0 0 250 250",style:s},c.default.createElement("path",{className:"octo-banner",d:l,fill:a}),c.default.createElement("path",{className:"octo-arm",d:f,style:u}),c.default.createElement("path",{className:"octo-body",d:d})))}}]),t}(u.Component);t.default=p,p.defaultProps={href:"/",width:80,height:80,direction:"right",octoColor:"#fff",bannerColor:"#151513"}},172:function(e,t){"use strict";function n(){return"\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  20% {\n    transform: rotate(-25deg);\n  }\n\n  40% {\n    transform: rotate(10deg);\n  }\n\n  60% {\n   transform: rotate(-25deg);\n  }\n\n  80% {\n    transform: rotate(10deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},173:function(e,t){},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(178),r=o(i),a=n(180),s=o(a);e.exports={Scroller:r.default,Section:s.default}},178:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(179),r=o(i);t.default=r.default},179:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),l=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.touchStartPosY=0,n.touchMoveDelta=0,n.isInSwipe=!1,n.reqAnim=null,n.isTransitionEnabled=!1,n.isAnimating=!1,n.supportsPassive=!1,n.containerEl=null,n.animStartTs=Date.now(),n.isScrolling=!1,n.initSupportsPassive=function(){var e=n;try{var t=Object.defineProperty({},"passive",{get:function(){e.supportsPassive=!0}});window.addEventListener("test",null,t)}catch(e){}},n.onWheel=function(e){if(n.props.isEnabled&&!n.isAnimating){var t=0;e.wheelDelta?(t=e.wheelDelta/120,window.opera&&(t=-t)):e.detail&&(t=-e.detail/3),t&&n.handle(t)}},n.handleSwipeEnd=function(e){if(Math.abs(e)>n.props.swipeSensitivity){var t=(1-Math.abs(e)/window.innerHeight)*n.props.transDuration;n.enableTransition(t),e<0?n.state.curPage<n.props.totalPages?n.turnTo(n.state.curPage+1):n.resetTranslateY():n.state.curPage>1?n.turnTo(n.state.curPage-1):n.resetTranslateY()}else Math.abs(e)>10?(n.enableTransition(.5*n.props.transDuration),n.resetTranslateY(!0)):n.resetTranslateY(!1)},n.updateTouchMove=function(){var e=-(window.innerHeight*(n.state.curPage-1)-n.touchMoveDelta),t="translatey("+e+"px)";n.setStyles({transform:t}),n.reqAnim=requestAnimationFrame(n.updateTouchMove)},n.onTouchStart=function(e){!n.props.isEnabled||n.isAnimating||n.isInSwipe||(n.isInSwipe=!0,n.reqAnim=requestAnimationFrame(n.updateTouchMove),n.touchStartPosY=e.touches[0].clientY,n.disableTransition())},n.onTouchMove=function(e){if(n.props.isEnabled&&!n.isAnimating&&n.isInSwipe){var t=e.changedTouches[0].clientY;n.touchMoveDelta=t-n.touchStartPosY}},n.onTouchEnd=function(e){if(cancelAnimationFrame(n.reqAnim),n.touchMoveDelta=0,n.props.isEnabled&&!n.isAnimating&&n.isInSwipe){n.isInSwipe=!1;var t=e.changedTouches[0].clientY,o=t-n.touchStartPosY;n.handleSwipeEnd(o)}},n.setStyles=function(e){var t=n.containerEl;Object.keys(e).forEach(function(n){t.style[n]=e[n]})},n.enableTransition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.transDuration;n.setStyles({transition:"transform "+e+"s "+n.props.easing}),n.isTransitionEnabled=!0},n.disableTransition=function(){n.setStyles({transition:"transform 0s"}),n.isTransitionEnabled=!1},n.setIsAnimating=function(e){e?n.isAnimating=!0:n.isAnimating=!1},n.handleTransitionEnd=function(e){n.setIsAnimating(!1),n.isScrolling&&(n.isScrolling=!1,n.props.onAfterScroll(n.state.curPage))},n.state={curPage:n.props.initialPage},n.initSupportsPassive(),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.resize(),this.enableTransition(),this.addWheelEvent(),this.addTouchEvents(),window.addEventListener("resize",this.resize.bind(this),!1),document.addEventListener("resize",this.resize.bind(this),!1),window.fpTurnTo=document.fpTurnTo=this.turnTo.bind(this)}},{key:"componentWillUnmount",value:function(){this.removeWheelEvent(),this.removeTouchEvents(),window.removeEventListener("resize",this.resize.bind(this),!1),document.removeEventListener("resize",this.resize.bind(this),!1),delete window.fpTurnTo,delete document.fpTurnTo}},{key:"resize",value:function(){var e="translatey(-"+window.innerHeight*(this.state.curPage-1)+"px)";this.setStyles({transform:e,height:window.innerHeight+"px"})}},{key:"handle",value:function(e){e<0&&this.state.curPage<this.props.totalPages?(this.enableTransition(),this.turnTo(this.state.curPage+1)):this.state.curPage>1&&(this.enableTransition(),this.turnTo(this.state.curPage-1))}},{key:"removeWheelEvent",value:function(){window.removeEventListener("wheel",this.onWheel,!!this.supportsPassive&&{passive:!0})}},{key:"addWheelEvent",value:function(){window.addEventListener("wheel",this.onWheel,!!this.supportsPassive&&{passive:!0})}},{key:"resetTranslateY",value:function(e){var t=-(window.innerHeight*(this.state.curPage-1)),n="translatey("+t+"px)";e&&this.setIsAnimating(!0),this.setStyles({transform:n})}},{key:"addTouchEvents",value:function(){document.addEventListener("touchstart",this.onTouchStart,!!this.supportsPassive&&{passive:!0}),document.addEventListener("touchmove",this.onTouchMove,!!this.supportsPassive&&{passive:!0}),document.addEventListener("touchend",this.onTouchEnd,!!this.supportsPassive&&{passive:!0})}},{key:"removeTouchEvents",value:function(){document.removeEventListener("touchstart",this.onTouchStart,!!this.supportsPassive&&{passive:!0}),document.removeEventListener("touchmove",this.onTouchMove,!!this.supportsPassive&&{passive:!0}),document.removeEventListener("touchend",this.onTouchEnd,!!this.supportsPassive&&{passive:!0})}},{key:"turnTo",value:function(e){if(this.state.curPage!==e){this.isScrolling=!0,this.props.onBeforeScroll(this.state.curPage,e);var t="translatey(-"+window.innerHeight*(e-1)+"px)";this.setState({curPage:e}),this.isTransitionEnabled&&this.setIsAnimating(!0),this.setStyles({transform:t})}}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{onTransitionEnd:this.handleTransitionEnd,ref:function(t){e.containerEl=t},style:{width:"100%",height:"100%",position:"fixed"}},this.props.children)}}]),t}(u.Component);l.defaultProps={children:[],easing:"cubic-bezier(0.19, 1, 0.22, 1)",initialPage:1,isEnabled:!0,onAfterScroll:function(){},onBeforeScroll:function(){},swipeSensitivity:100,totalPages:1,transDuration:.5},t.default=l},180:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(181),r=o(i);t.default=r.default},181:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),l=function(e){function t(e,n){i(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.state={},o}return a(t,e),s(t,[{key:"render",value:function(){return c.default.createElement("section",{style:{position:"relative",width:"100%",height:"100%"},className:this.props.className},this.props.children)}}]),t}(u.Component);l.defaultProps={children:{},className:"pagescroll"},t.default=l}});