(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["browse"],{ac86:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"browse"},[e("product-list",{attrs:{items:t.items}})],1)},o=[];const i=()=>e.e("product-list").then(e.bind(null,"1c14"));var n={name:"Browse",props:["products"],components:{ProductList:i},data(){return{}},methods:{},computed:{styles(){var t,s={};for(t=0;t<this.products.length;t++)this.products[t].title==this.$route.params.category&&(s=this.products[t]);return s.styles},items(){var t,s={};for(t=0;t<this.styles.length;t++)this.styles[t].title==this.$route.params.style&&(s=this.styles[t].items);return s}}},c=n,u=(e("bd55"),e("2877")),a=Object(u["a"])(c,r,o,!1,null,"52cfc05c",null);a.options.__file="Browse.vue";s["default"]=a.exports},bd55:function(t,s,e){"use strict";var r=e("d0f0"),o=e.n(r);o.a},d0f0:function(t,s,e){}}]);
//# sourceMappingURL=browse.f87ee4ac.js.map