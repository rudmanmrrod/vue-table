(function(e){function t(t){for(var o,i,l=t[0],u=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/table"}},[e._v("Table")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),l={},u=Object(i["a"])(l,r,a,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("h1",[e._v("Welcome to vue datatable")])])}],d={name:"home"},h=d,m=Object(i["a"])(h,f,p,!1,null,null,null);m.options.__file="Home.vue";var g=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-good-table",{attrs:{columns:e.columns,rows:e.rows,"pagination-options":{enabled:!0,perPageDropdown:[10,20],dropdownAllowAll:!1},mode:"remote",totalRows:e.total},on:{"on-page-change":e.onPageChange,"on-sort-change":e.onSortChange,"on-column-filter":e.onColumnFilter,"on-per-page-change":e.onPerPageChange},scopedSlots:e._u([{key:"table-row",fn:function(t){return["image"==t.column.field?n("span",[n("img",{attrs:{src:t.row.image,width:"150px"}})]):n("span",[e._v("\n\t\t\t      "+e._s(t.formattedRow[t.column.field])+"\n\t\t\t    ")])]}}])})],1)},b=[],w=(n("7f7f"),n("ac4d"),n("8a81"),n("ac6a"),n("bc3a")),_=n.n(w),y={name:"DatatableComponent",data:function(){return{columns:[{label:"Image",field:"image"},{label:"Name",field:"name"},{label:"Description",field:"description"}],rows:[],total:0,limit:10,offset:0,pageDropdown:"[10,20]"}},methods:{getChars:function(){var e=this;this.rows=[];var t={apikey:"6b46e44334a56db24631af8033d776be",ts:"1",hash:"d916d187a1c11858352d75c90ca19823",limit:this.limit,offset:this.offset};_.a.get("https://gateway.marvel.com/v1/public/characters",{params:t}).then(function(t){var n=t.data.data;e.total=n.total/n.count;var o=!0,r=!1,a=void 0;try{for(var i,l=n.results[Symbol.iterator]();!(o=(i=l.next()).done);o=!0){var u=i.value,s={image:u.thumbnail.path+"."+u.thumbnail.extension,name:u.name,description:u.description};e.rows.push(s)}}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}}).catch(function(e){console.log(e.response)})},onPageChange:function(e){e.currentPage>e.prevPage?this.offset+=this.limit:this.offset>0&&(this.offset-=this.limit),this.getChars()},onPerPageChange:function(e){this.limit=e.currentPerPage,this.getChars()},onSortChange:function(e){console.log(e)},onColumnFilter:function(e){console.log(e)}},mounted:function(){this.getChars()}},P=y,C=Object(i["a"])(P,v,b,!1,null,null,null);C.options.__file="DatatableTemplate.vue";var x=C.exports;o["a"].use(c["a"]);var O=new c["a"]({routes:[{path:"/",name:"home",component:g},{path:"/table",name:"table",component:x}]}),j=n("fe82");n("dac4");o["a"].use(j["a"]),o["a"].config.productionTip=!1,new o["a"]({router:O,render:function(e){return e(s)}}).$mount("#app")},c21b:function(e,t,n){},cf05:function(e,t,n){e.exports="dist/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.714f1615.js.map