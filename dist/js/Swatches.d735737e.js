(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Swatches"],{1830:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-swatches"},t._l(t.colors,function(e,a){return n("Swatch",{key:e.title,attrs:{color:t.colors[a]},on:{active:function(e){t.active=e}}})}),1)},s=[];const c=()=>n.e("Swatch").then(n.bind(null,"fab8"));var i={name:"product-swatches",props:["colors"],components:{Swatch:c},data(){return{active:""}},watch:{active(){this.$router.replace({params:{color:this.active}})}},computed:{}},r=i,o=(n("7b61"),n("2877")),u=Object(o["a"])(r,a,s,!1,null,"585b3b1f",null);u.options.__file="Swatches.vue";e["default"]=u.exports},"28e2":function(t,e,n){"use strict";var a=n("e8ef"),s=n.n(a);s.a},"29d5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-info"},[n("h1",{staticClass:"product-title"},[t._v(t._s(t.item.title)),n("span",{staticClass:"icons"},t._l(t.icon(t.item.upgrade),function(t){return n("i",{staticClass:"fas fa-dollar-sign"})}),0)]),n("h3",{staticClass:"brand"},[t._v(t._s(t.item.brand)+"\t\t")])])},s=[],c={name:"BannerInfo",props:["item"],components:{},data(){return{}},methods:{icon(t){var e=[],n=0;0==t&&(t=1);while(n<t)e.push(n),n++;return e}},computed:{}},i=c,r=(n("28e2"),n("2877")),o=Object(r["a"])(i,a,s,!1,null,"411f3203",null);o.options.__file="Title.vue";e["default"]=o.exports},"7b61":function(t,e,n){"use strict";var a=n("920e"),s=n.n(a);s.a},"920e":function(t,e,n){},e8ef:function(t,e,n){}}]);
//# sourceMappingURL=Swatches.d735737e.js.map