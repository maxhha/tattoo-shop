(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.99ea3e58.png"},39:function(e,t,a){a(40),e.exports=a(78)},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),o=a.n(r),i=(a(46),a(36)),s=a(9),l=(a(47),Object(n.createContext)({})),m=a(37),u=a(14),d=function(e,t){switch(t.type){case"add":return Object(u.a)({},e,{items:[].concat(Object(m.a)(e.items),[Object(u.a)({},t.item,{hidden:!1})]),price:e.price+t.item.price});case"remove":var a=e.items.find(function(e){return e.id===t.id});return Object(u.a)({},e,{items:e.items.filter(function(e){return e!==a}),price:a?e.price-a.price:e.price});case"show":var n=e.price;return t.item.hidden&&(n+=t.item.price,t.item.hidden=!1),Object(u.a)({},e,{price:n});case"hide":var c=e.price;return t.item.hidden||(c-=t.item.price,t.item.hidden=!1),t.item.hidden=!0,Object(u.a)({},e,{price:c})}},p=Object(n.createContext)([{items:[],price:0},function(e){}]),_=a(2),f=a(6),h=a(32),b=Object(f.g)(function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),n=e.onClick,r=e.replace,o=Object(h.a)(e,["history","location","match","staticContext","to","onClick","replace"]);return c.a.createElement("button",Object.assign({},o,{onClick:function(e){n&&n(e),(r?t.replace:t.push)(a)}}))}),v=a(3),E=a.n(v),N=(a(52),function(e){var t=Object(n.useState)(!1),a=Object(_.a)(t,2),r=a[0],o=a[1],i=Object(n.createRef)();Object(n.useEffect)(function(){var e=function(e){e.target&&i.current&&!i.current.contains(e.target)&&o(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}});var s=function(){return o(!1)};return c.a.createElement("div",{className:E()("menu",e.className),ref:i},c.a.createElement("div",{className:"menu__title",onClick:function(){return o(!0)}},e.title),c.a.createElement("ul",{className:E()("menu__popup-list",{"menu__popup-list_active":r})},e.children.map(function(e){var t=e(s,!r);return c.a.createElement("li",{className:"menu__item",key:t.key},t)})))}),g=a(35),O=a.n(g),j=(a(53),function(e){var t=c.a.useState([]),a=Object(_.a)(t,2),n=a[0],r=a[1],o=c.a.useContext(l).getSections;return c.a.useEffect(function(){o().then(function(e){return r(e)})},[o]),c.a.createElement("header",{className:E()("header",e.className)},c.a.createElement("nav",{className:"nav header__side header__nav"},c.a.createElement(N,{className:"nav__menu",title:"\u041a\u0430\u0442\u0435\u0433\u0440\u043e\u0438\u0438"},n.map(function(e){var t=e.id,a=e.title;return function(e,n){return c.a.createElement(b,{to:"/section/".concat(t),className:"nav__button nav__menu-item",key:t,onClick:e,disabled:n},a)}})),c.a.createElement(b,{to:"/about",className:"button nav__button"},"\u041e \u043d\u0430\u0441"),c.a.createElement(b,{to:"/contacts",className:"button nav__button"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),c.a.createElement(f.b,{render:function(e){var t=e.history;return c.a.createElement("img",{className:"header__logo",onClick:function(){return t.push("/")},src:O.a,alt:"Logo"})}}),c.a.createElement("nav",{className:"nav header__side header__nav"},c.a.createElement(b,{to:"/cart",className:"button nav__button"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement(b,{to:"/payment",className:"button nav__button"},"\u041e\u043f\u043b\u0430\u0442\u0430"),c.a.createElement(b,{to:"/delivery",className:"button nav__button"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430")))}),y=(a(54),a(12)),w=a(13),k=a(18),x=a(17),S=a(19),C=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(k.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(c)))).previousLocation=a.props.location,a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"componentWillUpdate",value:function(e){var t=this.props.location,a=!t.state||!t.state.modal;"POP"!==e.history.action&&a&&(this.previousLocation=this.props.location)}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.switchChildren,n=e.modalRoute,r=!(!t.state||!t.state.modal||this.previousLocation===t);return c.a.createElement("div",null,c.a.createElement(f.d,{location:r?this.previousLocation:t,children:a}),r?n:null)}}]),t}(c.a.Component),L=function(e){return c.a.createElement(f.b,{render:function(t){return c.a.createElement(C,Object.assign({},t,e))}})},P=a(80),I=(a(55),a(27),a(56),Object(f.g)(function(e){var t=(e.match&&e.match.params||{id:void 0}).id,a=Object(n.useState)({item:null,loading:!0}),r=Object(_.a)(a,2),o=r[0],i=o.item,s=o.loading,m=r[1],u=Object(n.useContext)(l).findItem,d=Object(n.useContext)(p),f=Object(_.a)(d,2),h=f[0],b=f[1],v=!!t&&!!h.items.find(function(e){return e.id===t});Object(n.useEffect)(function(){t&&u(t).then(function(e){return m({item:e,loading:!1})})},[u,m,t]);var N=!e.location.state||!e.location.state.modal;return t&&!s&&i?c.a.createElement("div",{className:E()("tattoo-page",e.className),onClick:function(e){return e.stopPropagation()}},c.a.createElement("div",{className:"tattoo-page__image-wrapper"},c.a.createElement("img",{className:"tattoo-page__image",src:"".concat(i.imageUrl,"?auto=format&fit=crop&w=640&q=90"),alt:i.title})),c.a.createElement("div",{className:"tattoo-page__info"},c.a.createElement("h2",{className:"tattoo-page__title"},i.title),c.a.createElement("h3",{className:"tattoo-page__price"},i.price+"\u0440"),c.a.createElement("button",{className:"cart-button tattoo-page__to-cart",onClick:function(){v?b({type:"remove",id:i.id}):s||b({type:"add",item:i})}},v?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),c.a.createElement("p",{className:"tattoo-page__description"}," \u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432\u043e\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u0439 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0442\u043a\u0438\u043c \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0444\u0430\u043a\u0442\u0430: \u0441\u043f\u043b\u043e\u0447\u0451\u043d\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432 \u0432 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u043e\u0431\u0443\u0441\u043b\u043e\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0430\u043a\u0442\u0438\u0432\u0438\u0437\u0430\u0446\u0438\u0438. \u0410 \u0435\u0449\u0451 \u0441\u0442\u0440\u0435\u043c\u044f\u0449\u0438\u0435\u0441\u044f \u0432\u044b\u0442\u0435\u0441\u043d\u0438\u0442\u044c \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e, \u043d\u0430\u043d\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u044b \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f. ")),N&&c.a.createElement("button",{className:"tattoo-page__close",onClick:function(t){t.stopPropagation(),e.history.goBack()}})):t&&s?c.a.createElement("h2",null,"Loading..."):c.a.createElement("h2",null,"Oops... something broke")})),D=function(e){var t=e.match&&e.match.params;return t&&t.id?c.a.createElement("div",{className:E()("tattoo-modal",e.className,P.a.classNames.fullWidth),onClick:function(t){t.stopPropagation(),e.history.goBack()}},c.a.createElement(P.a,{className:"tattoo-modal__inner"},c.a.createElement(I,null)," ")):c.a.createElement(f.a,{to:"/"})},R=function(){return c.a.createElement("div",{className:"content__inner"},c.a.createElement("section",{className:"section content__section"},c.a.createElement("h2",{className:"section__title"},"\u041e \u043d\u0430\u0441"),c.a.createElement("p",{className:"text-about"},"\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043d\u0430\u0441."),c.a.createElement("p",{className:"text-about"},"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d ",c.a.createElement("a",{href:"https://github.com/maxhha"},"\u043c\u043d\u043e\u0439"),", \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0441\u0432\u044f\u0437\u043a\u0443 ",c.a.createElement("a",{href:"https://reactjs.org/"},"React")," + ",c.a.createElement("a",{href:"https://www.typescriptlang.org/"},"Typescript"),". \u041f\u043e\u043f\u0443\u0442\u043d\u043e \u043c\u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f c ",c.a.createElement("a",{href:"https://webpack.js.org/"},"Webpack"),"'\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u043a\u0443 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412\u043e\u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u044f \u0441\u0442\u0430\u0440\u0430\u043b\u0441\u044f \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c best practices, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0433\u0443\u0433\u043b\u044f \u0432\u0441\u044f\u043a\u0438\u0435 \u043c\u0435\u043b\u043e\u0447\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0444\u0430\u0439\u043b\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u043f\u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u043e\u0443\u0442\u0435\u0440-\u043a\u043d\u043e\u043f\u043a\u0443 \u0438 \u0442.\u0434. \u0412 \u043e\u0431\u0449\u0435\u043c, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u0440\u043e\u043a\u0430\u0447\u0430\u043b \u0441\u0432\u043e\u0438 \u0441\u043a\u0438\u043b\u044b \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043d\u0430 React."),c.a.createElement("p",{className:"text-about"},"\u0412 \u0446\u0435\u043b\u043e\u043c, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Typescript, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u044f \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u043d\u0430\u043b, \u043a\u0430\u043a\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c, \u043d\u043e \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435, \u0443\u0432\u0435\u0440\u0435\u043d, \u043e\u043d \u0441\u044b\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043d\u0443\u044e \u0440\u043e\u043b\u044c. \u041d\u0435 \u043c\u043e\u0433\u043b\u043e \u043d\u0435 \u0440\u0430\u0434\u043e\u0432\u0430\u0442\u044c \u0442\u043e, \u0447\u0442\u043e, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0442\u0440\u043e\u0433\u043e\u0439 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u043e\u0441\u043b\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043d\u0443\u0436\u043d\u043e ",">w<","."),c.a.createElement("p",{className:"text-about"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u044f \u0432\u0437\u044f\u043b \u0438\u0437 \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439, \u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0438\u0437 ",c.a.createElement("a",{href:"https://unsplash.com"},"Unspash"),". \u0414\u0438\u0437\u0430\u0439\u043d \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b \u0441\u0430\u043c.")))},J=(a(57),a(58),function(e){var t=e.item,a=t.id,n=t.imageUrl,r=t.title,o=t.price;return c.a.createElement("li",{className:"tattoos-list__item"},c.a.createElement(s.b,{to:{pathname:"/tattoo/".concat(a),state:{modal:!0}}},c.a.createElement("div",{className:"tattoo aspect-ratio-square"},c.a.createElement("img",{className:"tattoo__image",src:"".concat(n,"?auto=format&fit=crop&w=640&q=80"),alt:n}),c.a.createElement("div",{className:"tattoo__description"},c.a.createElement("h2",{className:"tattoo__title"},r),c.a.createElement("div",{className:"tattoo__price-wrapper"},c.a.createElement("h2",{className:"tattoo__price"},o+"\u0440"))))))}),U=function(e){function t(){return Object(y.a)(this,t),Object(k.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.title,n=e.items;return c.a.createElement("section",{className:E()("section",t)},c.a.createElement("h2",{className:"section__title"},a),c.a.createElement("ul",{className:"tattoos-list"},n.map(function(e){return c.a.createElement(J,{item:e,key:e.id})})))}}]),t}(c.a.Component),T=function(e){var t=e.sections,a=Object(n.useState)([]),r=Object(_.a)(a,2),o=r[0],i=r[1],s=Object(n.useContext)(l).getItems;return Object(n.useEffect)(function(){Promise.all(t.map(function(e){return s(e)})).then(function(e){return i(e)})},[t,s]),c.a.createElement("div",{className:"content__inner"},c.a.createElement("div",{className:"face-image"},c.a.createElement("div",{className:"face-image__title"},"\u041a\u0420\u0423\u0422\u042b\u0415 \u0422\u0410\u0422\u0423\u0425\u0418 \u0414\u0415\u041b\u0410\u042e\u0422 \u0422\u0415\u0411\u042f \u041a\u0420\u0423\u0422\u042b\u041c!")),o.length>0&&t.map(function(e,t){var a=e.id,n=e.title;return c.a.createElement(U,{className:"content__section",title:n,key:a,items:o[t].slice(0,8)})}))},W=(a(59),function(e){var t=e.item,a=e.onRemove,n=e.onHide,r=e.onShow;return c.a.createElement("div",{className:E()("cart-item",t.hidden&&"cart-item_hidden")},c.a.createElement("div",{className:"cart-item__image-wrapper"},c.a.createElement("img",{className:"cart-item__image",src:t.imageUrl+"&auto=format&fit=crop&w=320&q=80",alt:"Tattoo"})),c.a.createElement("div",{className:"cart-item__description"},c.a.createElement("h2",{className:"cart-item__title"},t.title),c.a.createElement("h3",{className:"cart-item__price"},t.price,"\u0440")),c.a.createElement("div",{className:"cart-item__panel"},c.a.createElement("button",{className:"cart-button cart-item__button",onClick:function(){return a(t)}},"\u0423\u0431\u0440\u0430\u0442\u044c"),c.a.createElement("button",{className:"cart-button cart-item__button",onClick:function(){return t.hidden?r(t):n(t)}},t.hidden?"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c":"\u0421\u043a\u0440\u044b\u0442\u044c")))}),q=function(){var e=Object(n.useContext)(p),t=Object(_.a)(e,2),a=t[0],r=a.items,o=a.price,i=t[1],s=function(e){return i({type:"hide",item:e})},l=function(e){return i({type:"show",item:e})},m=function(e){return i({type:"remove",id:e.id})};return c.a.createElement("div",{className:"content__inner"},c.a.createElement("div",{className:"seciton content__section cart"},c.a.createElement("h2",{className:"section__title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"cart-list"},r.map(function(e){return c.a.createElement(W,{item:e,onHide:s,onShow:l,onRemove:m,key:e.id})})),c.a.createElement("div",{className:"cart__summary"},c.a.createElement("h2",{className:"cart__price"},"\u0412\u0441\u0435\u0433\u043e: ",o,"\u0440"),c.a.createElement(b,{className:"cart-button",to:"/payment"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"))))},B=function(){return c.a.createElement("div",{className:"content__inner"},c.a.createElement("section",{className:"section content__section"},c.a.createElement("h2",{className:"section__title"},"\u041e\u043f\u043b\u0430\u0442\u0430"),c.a.createElement("p",{className:"text-about"},"\u0423\u0432\u044b, \u044d\u0442\u043e \u043d\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u0438 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0434\u0435\u0441\u044c \u043d\u0435\u0442.")))},F=function(){return c.a.createElement("div",{className:"content__inner"},c.a.createElement("section",{className:"section content__section"},c.a.createElement("h2",{className:"section__title"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),c.a.createElement("p",{className:"text-about"},"\u0423\u0432\u044b, \u044d\u0442\u043e \u043d\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0437\u0434\u0435\u0441\u044c \u0442\u043e\u0436\u0435 \u043d\u0435\u0442.")))},$=function(){return c.a.createElement("div",{className:"content__inner"},c.a.createElement("section",{className:"section content__section"},c.a.createElement("h2",{className:"section__title"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),c.a.createElement("p",{className:"text-about"},"Github: ",c.a.createElement("a",{href:"https://github.com/maxhha"},"maxhha")),c.a.createElement("p",{className:"text-about"},"Mail: ",c.a.createElement("a",{href:"mailto:devmaxhha@gmail.com",target:"_self"},"devmaxhha@gmail.com"))))},M=function(e){var t=e.sectionId,a=Object(n.useState)(null),r=Object(_.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)([]),m=Object(_.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(!1),f=Object(_.a)(p,2),h=f[0],b=f[1],v=Object(n.useContext)(l),E=v.findSection,N=v.getItems;return Object(n.useEffect)(function(){E(t).then(function(e){return e?(i(e),N(e)):(b(!0),[])}).then(function(e){d(e),b(!0)})},[t,E,N]),h&&o&&u.length?c.a.createElement("div",{className:"content__inner"},c.a.createElement(U,{className:"content__section",title:o.title,items:u})):h&&!o?c.a.createElement("div",{className:"content__inner"},c.a.createElement("h2",null,"Not found")):c.a.createElement("div",{className:"content__inner"},c.a.createElement("h2",null,"Loading..."))},H=function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),r=a[0],o=a[1],i=Object(n.useContext)(l).getSections;return Object(n.useEffect)(function(){i().then(function(e){return o(e)})},[i]),c.a.createElement("div",{className:E()("content",e.className)},c.a.createElement(L,{switchChildren:[c.a.createElement(f.b,{exact:!0,path:"/",render:function(){return c.a.createElement(T,{sections:r.slice(0,3)})}}),c.a.createElement(f.b,{path:"/about",component:R}),c.a.createElement(f.b,{path:"/cart",component:q}),c.a.createElement(f.b,{path:"/payment",component:B}),c.a.createElement(f.b,{path:"/delivery",component:F}),c.a.createElement(f.b,{path:"/contacts",component:$}),c.a.createElement(f.b,{path:"/section/:id",render:function(e){var t=e.match;return t.params.id?c.a.createElement(M,{sectionId:t.params.id}):c.a.createElement(f.a,{to:"/"})}}),c.a.createElement(f.b,{render:function(){return c.a.createElement(f.a,{to:"/"})}})],modalRoute:c.a.createElement(f.b,{path:"/tattoo/:id",render:function(e){return c.a.createElement(D,Object.assign({},e,{className:"content__tattoo-modal"}))}})}))},V=(a(60),function(){return c.a.createElement("div",{className:"footer app__footer"},c.a.createElement("p",null,"Test shop project"),"made by ",c.a.createElement("a",{href:"https://github.com/maxhha"},"max_hha"))});var z=Object(i.hot)(function(e){var t=e.store;t.setVersion("1.02");var a,r,o=Object(n.useReducer)((a="cart",r=d,function(){var e=r.apply(void 0,arguments);try{window.localStorage.setItem(a,JSON.stringify(e))}catch(t){console.error(t)}return e}),{items:[],price:0},function(e){return function(t){var a=t;try{var n=window.localStorage.getItem(e);n&&(a=JSON.parse(n))}catch(c){console.error(c)}return a}}("cart"));return c.a.createElement("div",{className:"app"},c.a.createElement(l.Provider,{value:t},c.a.createElement(p.Provider,{value:o},c.a.createElement(s.a,null,c.a.createElement(j,null),c.a.createElement(H,null),c.a.createElement(V,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(5),G=a.n(A),K=a(11),Q=a(24),X=a.n(Q),Y=a(20),Z="\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435;\u041d\u043e\u0432\u044b\u0435;\u042f\u0440\u043a\u0438\u0435;\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0443 \u0434\u0435\u0432\u0443\u0448\u0435\u043a;\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0443 \u043c\u0443\u0436\u0447\u0438\u043d;\u0414\u0435\u0442\u0441\u043a\u0438\u0435;\u0427\u0435\u0440\u043d\u044b\u0435;\u0421\u0442\u043e\u0439\u043a\u0438\u0435;\u041a\u0440\u0443\u043f\u043d\u044b\u0435;\u0421\u043e \u0441\u043c\u044b\u0441\u043b\u043e\u043c".split(";"),ee=";\u0413\u043b\u0443\u0431\u0438\u043d\u043d \u044b\u0439\u0430\u0439;\u0412\u044b\u0441\u043e\u043a \u0438\u0439\u0430\u044f;\u0428\u0438\u0440\u043e\u043a \u0438\u0439\u0430\u044f;\u0421\u0438\u043b\u044c\u043d \u044b\u0439\u0430\u044f;\u041a\u0440\u0435\u043f\u043a \u0438\u0439\u0430\u044f;\u0423\u0437\u043a \u0438\u0439\u0430\u044f;\u0414\u043b\u0438\u043d\u043d \u044b\u0439\u0430\u044f;\u041a\u043e\u043b\u044e\u0447 \u0438\u0439\u0430\u044f;\u041d\u0435\u043c\u044b\u0441\u043b\u0438\u043c \u044b\u0439\u0430\u044f;\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d \u044b\u0439\u0430\u044f;\u0425\u043e\u043b\u043e\u0434\u043d \u044b\u0439\u0430\u044f;\u0413\u043e\u0440\u044f\u0447 \u044b\u0439\u0430\u044f;\u041c\u0440\u0430\u0447\u043d \u044b\u0439\u0430\u044f;\u0427\u0435\u0440\u043d \u044b\u0439\u044f\u044f;\u041a\u0440\u043e\u0432\u0430\u0432 \u044b\u0439\u0430\u044f;\u041c\u043b\u0435\u0447\u043d \u044b\u0439\u0430\u044f;\u0411\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d \u044b\u0439\u0430\u044f;\u0412\u0435\u0441\u0451\u043b \u044b\u0439\u0430\u044f;\u0421\u0432\u0435\u0442\u043b \u044b\u0439\u0430\u044f".split(";"),te="\u043c \u0434\u0435\u043d\u044c;\u043c \u0434\u0436\u0435\u043a;\u043c \u043f\u0443\u0442\u044c;\u043c \u0411\u043e\u0433;\u043c \u043a\u043e\u043d\u0451\u043a;\u043c \u043a\u0440\u0435\u0441\u0442;\u0436 \u043a\u043e\u0441\u0430;\u0436 \u0433\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0430;\u0436 \u0437\u0430\u0433\u0430\u0434\u043a\u0430;\u0436 \u0431\u0430\u0431\u043e\u0447\u043a\u0430;\u043c \u0447\u0435\u0440\u0435\u043f;\u043c \u0433\u0440\u043e\u0431;\u043c \u0446\u0432\u0435\u0442\u043e\u043a;\u0436 \u0432\u0430\u0437\u0430;\u043c \u043c\u0430\u044f\u043a;\u043c \u0434\u0440\u0430\u043a\u043e\u043d;\u043c \u043a\u043e\u0442;\u0436 \u043f\u0442\u0438\u0447\u043a\u0430;\u0436 \u043f\u0438\u0440\u0430\u0442\u043a\u0430;\u043c \u043f\u0438\u0440\u0430\u0442;\u043c \u0431\u0440\u0438\u043b\u043b\u0438\u0430\u043d\u0442".split(";");function ae(){var e=Object(Y.sample)(ee),t=Object(Y.sample)(te);return Object(Y.capitalize)((e.replace(/.(..)(..)$/,"\u043c"===t[0]?"$1":"$2")+t.replace(/[\u043c\u0436]/,"")).trim())}var ne=new(function(){function e(t,a,n){var c=this;if(Object(y.a)(this,e),this.__version=n,this.__unsplash=void 0,this.__database=void 0,this.__databaseLoadPromise=void 0,this.setVersion=function(e){c.__version!==e&&(c.__version=e,c.__databaseLoadPromise=c.__loadDatabase())},this.getSections=Object(K.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.__databaseLoadPromise.then(function(){return c.__database?c.__database.sections:[]}));case 1:case"end":return e.stop()}},e)})),this.findSection=function(){var e=Object(K.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.__databaseLoadPromise.then(function(){return c.__database&&c.__database.sections.find(function(e){return e.id===t})||null}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getItems=function(){var e=Object(K.a)(G.a.mark(function e(t){var a;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.abrupt("return",c.__databaseLoadPromise.then(function(){return c.__database?c.__database.items[a]:[]}));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.findItem=function(){var e=Object(K.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.__databaseLoadPromise.then(function(){return c.__database&&Object.values(c.__database.items).flat().find(function(e){return e.id===t})||null}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),void 0===t||void 0===a)throw Error("Unsplash key or secret is undefined");this.__unsplash=new X.a({applicationId:t,secret:a}),this.__databaseLoadPromise=this.__loadDatabase()}return Object(w.a)(e,[{key:"__loadDatabase",value:function(){var e=Object(K.a)(G.a.mark(function e(){var t,a,n=this;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.__getDatabaseFromLocalStorage())){e.next=7;break}return console.log("Database was loaded from localStorage."),this.__database=t,e.abrupt("return",Promise.resolve());case 7:return console.log("Loading database from server..."),(a=this.__loadDatabaseFromService()).then(function(){return n.__saveDatabaseToLocalStorage()}),e.abrupt("return",a);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"__getDatabaseFromLocalStorage",value:function(){var e;try{e=localStorage.getItem("db")||"{}",e=JSON.parse(e)}catch(a){console.error(a),e={}}this.__version||(this.__version=e.v);var t="v"in e&&e.v===this.__version;if("data"in e&&t)return e.data}},{key:"__saveDatabaseToLocalStorage",value:function(){try{var e=JSON.stringify({data:this.__database,v:this.__version});localStorage.setItem("db",e)}catch(t){console.error(t)}}},{key:"__loadDatabaseFromService",value:function(){var e=Object(K.a)(G.a.mark(function e(){var t=this;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.__unsplash.search.photos("tattoos",0,250).then(Q.toJson).then(function(e){for(var a={sections:[],items:{}},n=0;n<10;n++){var c=n.toString();a.sections.push({id:c,title:Z[n]}),a.items[c]=[]}return e.results.forEach(function(e,t){var n=e.urls.raw,c=e.id,r=a.sections[t%10].id;a.items[r].push({id:c,imageUrl:n,title:ae(),price:25*Math.floor(60*Math.random()+2)})}),t.__database=a,Promise.resolve()}).catch(function(e){return console.error(e),Promise.resolve()}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}())("ea73a5c1573f04cbf4c56f552a2ddf8450fe16f5e2be00f11aae75d1182957cb","8bafe4ac42926e5f61a17b5e9ebe60874dfb16fe01d5f68b9b9f30d7608e0e65");o.a.render(c.a.createElement(z,{store:ne}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.83e81662.chunk.js.map