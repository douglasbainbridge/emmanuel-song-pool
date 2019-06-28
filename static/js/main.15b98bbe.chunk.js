(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),r=a.n(s),l=a(29),i=a(30),c=a(33),u=a(31),m=a(34),d=a(11),f=a(53),g=a(4),p=(a(104),a(83)),h=a.n(p),E=a(88),v=a.n(E),w=a(89),b=a(22),S=a(90);b.b.add(S.a);var y=function(e){return"spotify"===e.icon?o.a.createElement("span",null,o.a.createElement(w.a,{icon:{prefix:"fab",iconName:"spotify"}})):null},x=a(91),T=a(15),k=a.n(T),j=function(e){var t=e.fullTitle,a=e.title,n=e.content;return o.a.createElement("span",{className:"mr-2",title:t},a,": ",o.a.createElement("strong",null,n))},N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={expanded:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.song,a=t.title,n=t.artist,s=t.maleKey,r=t.femaleKey,l=t.focusList,i=t.notes,c=t.flowCategories,u=t.flowSubcategories,m=t.spotifyLink;return o.a.createElement("div",{style:{border:"1px solid rgb(234,234,234)",marginBottom:"-1px"}},o.a.createElement("button",{onClick:function(){e.setState({expanded:!e.state.expanded})},className:k()("song-btn","p-1","w-100",{"text-green":l})},o.a.createElement("h4",{className:"mb-0 d-inline-block"},a),o.a.createElement("small",null,"/",n),o.a.createElement("span",{className:"float-right"},s&&o.a.createElement(j,{fullTitle:"Suggested male key",title:"M",content:s}),r&&o.a.createElement(j,{fullTitle:"Suggested female key",title:"F",content:r}))),o.a.createElement("div",{style:{maxHeight:this.state.expanded?"300px":"0px",overflow:"hidden",transition:"max-height 0.5s"}},o.a.createElement("div",{className:"p-1"},m&&o.a.createElement(y,{icon:"spotify"}),o.a.createElement("h5",{className:"mb-0 mt-2"},"Flow Themes:"),c&&c.join(", "),o.a.createElement("h5",{className:"mb-0 mt-2"},"Flow Sub Themes:"),u&&u.join(", "),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(x.documentToHtmlString)(i)}}))))}}]),t}(n.Component),C=a(92);var O=function(e){var t=e.list,a=e.title;return o.a.createElement("div",{className:"mb-4",style:{width:"300px"}},o.a.createElement("h3",null,a),o.a.createElement(C.a,{staggerDelayBy:30,staggerDurationBy:0,duration:300,appearAnimation:"elevator",enterAnimation:"elevator"},t.map(function(e){return o.a.createElement(N,{key:e.title+e.artist,song:e})})))},D=a(35),L=a.n(D),A=a(93),B=a.n(A),H=function(e){return o.a.createElement(B.a,{dots:!0,arrows:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:2,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},e.children)};function P(e){var t=L()(e.songs,"Call To Worship","Declaration & Praise",e.focusSongs),a=L()(e.songs,"Call To Worship","Drawing Near",e.focusSongs),n=L()(e.songs,"Revelation","Assurance in Christ",e.focusSongs);return o.a.createElement(H,null,o.a.createElement("div",null,o.a.createElement("h2",null,"Call to Worship"),o.a.createElement(O,{title:"Declaration and Praise",list:t}),o.a.createElement(O,{title:"Drawing Near",list:a})),o.a.createElement("div",null,o.a.createElement("h2",null,"Revelation"),o.a.createElement(O,{title:"Assurance in Christ",list:n})))}function F(e){return o.a.createElement("div",{className:"d-flex flex-row pt-4"},o.a.createElement("div",{className:"mx-3"},o.a.createElement("h2",null,"Post Preach")))}var W=a(223),M=a(222),I=(a(212),a(213),a(214),Object(g.a)()),J=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={loading:!0,songs:[],error:"",focusSongs:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.getEntries({content_type:"song",limit:1e3}).then(function(t){var a=v()(t);0===a.length?e.setState({error:"There was a problem loading, please try refreshing the page",loading:!1}):e.setState({songs:a,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1,error:"There was an error"})})}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement("div",null,"Loading"):this.state.error?o.a.createElement("div",null,this.state.error):o.a.createElement(d.b,{history:I},o.a.createElement(d.a,{path:"/",render:function(t){var a=t.location;return o.a.createElement("div",{className:"container-fluid pt-3"},o.a.createElement("button",{onClick:function(){e.setState({focusSongs:!e.state.focusSongs})}},e.state.focusSongs?"Show All":"Show Focus List"),o.a.createElement(f.a,{to:"/"},"Pre-preach"),o.a.createElement(f.a,{to:"/post-preach"},"Post-preach"),o.a.createElement(W.a,{appear:!0},o.a.createElement(M.a,{key:a.pathname.split("/")[1],classNames:"fadeRouter",timeout:150},o.a.createElement(d.c,{location:a},o.a.createElement(d.a,{exact:!0,path:"".concat("/emmanuel-song-pool","/")},o.a.createElement(P,{songs:e.state.songs,focusSongs:e.state.focusSongs})),o.a.createElement(d.a,{exact:!0,path:"".concat("/emmanuel-song-pool","/post-preach")},o.a.createElement(F,{songs:e.state.songs,focusSongs:e.state.focusSongs}))))))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t){e.exports=function(e,t,a,n){return e.filter(function(e){return e.flowCategories&&e.flowCategories.includes(t)&&e.flowSubcategories&&e.flowSubcategories.includes(a)&&(e.focusList||!n)})}},50:function(e,t){},83:function(e,t,a){var n;n=a(219).createClient({space:"nkx4mjs43g1a",accessToken:"AJETm98BuwXsHI85-2o5pHoQLyvGYxSH5tGzfFYVTDM"}),e.exports=n},88:function(e,t){e.exports=function(e){return e&&e.items?e.items.map(function(e){return e.fields}):[]}},99:function(e,t,a){e.exports=a(220)}},[[99,1,2]]]);
//# sourceMappingURL=main.15b98bbe.chunk.js.map