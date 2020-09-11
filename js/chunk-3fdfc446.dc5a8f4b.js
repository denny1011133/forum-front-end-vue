(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fdfc446"],{be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},get:function(){return r["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return r["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),s=a("da84"),i=a("5135"),o=a("861d"),c=a("9bf2").f,u=a("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var g=m.prototype=d.prototype;g.constructor=m;var p=g.toString,f="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var a=f?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:m})}},f91c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.categoryName))])]),a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),a("li",[a("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),a("li",[a("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),a("div",{staticClass:"col-md-8"},[a("p",[t._v(t._s(t.restaurant.description))])])]),a("hr"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])],1)},n=[],s=(a("a4d3"),a("e01a"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("2708"),c=a("be6c"),u=a("2fa3"),d=a("2375"),l={name:"AdminRestaurant",components:{Spinner:d["a"]},mixins:[o["a"]],data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},beforeRouteUpdate:function(t,e,a){var r=t.params.id;this.fetchRestaurant(r),a()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,d,l,m,g,p,f,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,c["a"].restaurants.getDetail({restaurantId:t});case 4:if(r=a.sent,n=r.data,"error"!==n.status){a.next=8;break}throw new Error(n.message);case 8:i=n.restaurant,o=i.id,d=i.name,l=i.Category,m=i.image,g=i.opening_hours,p=i.tel,f=i.address,v=i.description,e.restaurant=Object(s["a"])({},e.restaurant,{id:o,name:d,categoryName:l?l.name:"未分類",image:m,openingHours:g,tel:p,address:f,description:v}),e.isLoading=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),console.error(a.t0.message),e.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()}}},m=l,g=a("2877"),p=Object(g["a"])(m,r,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3fdfc446.dc5a8f4b.js.map