(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(t,e,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("d48b1a92",content,!0,{sourceMap:!1})},276:function(t,e,r){"use strict";r(272)},277:function(t,e,r){var n=r(78)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.description-text p{\n  margin:15px 0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},283:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(39),r(24),r(32),r(14),r(21),r(25),r(136),r(61)),c=r.n(o),l={name:"FolderDetails",props:["details","name","server"],data:function(){return{image:null}},computed:{description:function(){return this.$store.state.app.folderDescription}},watch:{details:function(t,e){console.log(t),console.log(e),t!==e&&t.description&&(console.log("update description"),this.$store.dispatch("app/getFolderDescription",this.details.description.path)),t.image||t.description?this.$store.commit("app/rightbar",!0):this.$store.commit("app/rightbar",!1),this.image=null,this.getImage()}},mounted:function(){(this.image||this.description)&&(this.$store.commit("app/rightbar",!0),this.getImage())},methods:{getImage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.details||!t.details.cover){e.next=10;break}return r=t.$store.getters["app/getServerUrl"]+"cover/"+t.details.cover.path,e.next=4,fetch(r,{headers:{Authorization:"Bearer "+c.a.get("audioserve_token")}});case 4:return n=e.sent,e.next=7,n.blob();case 7:o=e.sent,l=URL.createObjectURL(o),t.image=l;case 10:case"end":return e.stop()}}),e)})))()}}},d=(r(276),r(51)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col overflow-auto"},[r("div",{staticClass:"text p-8 pb-5 flex flex-col justify-center"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:t.image}})]),t._v(" "),r("div",{staticClass:"text-xl flex justify-center px-8 font-bold"},[t._v(t._s(t.name))]),t._v(" "),r("div",{staticClass:"text px-8 description-text text-sm prose",domProps:{innerHTML:t._s(t.description)}})])}),[],!1,null,null,null);e.default=component.exports}}]);