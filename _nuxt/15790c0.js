(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,6,7,8,9],{272:function(e,t,r){"use strict";r.r(t);var n={name:"FloatingLabelInput",props:["value","title"],data:function(){return{}}},l=r(51),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative border border-gray-100 rounded-2xl appearance-none label-floating lg:block max-w-xl flex-grow"},[r("input",{staticClass:"w-full py-3 px-5 bg-gray-300 shadow-inner leading-normal rounded-2xl max-w-xl",attrs:{type:"text",placeholder:e.title},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e._v(" "),r("label",{staticClass:"pointer-events-none font-normal select-none absolute block top-0 left-0 w-full px-5 py-3 leading-normal"},[e._v("\n    "+e._s(e.title)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},273:function(e,t,r){"use strict";r.r(t);var n={name:"Login",props:[],components:{FloatingLabelInput:r(272).default},data:function(){return{}},computed:{loginStatus:function(){return this.$store.state.app.loginStatus},server:{get:function(){return this.$store.state.app.server},set:function(e){this.$store.commit("app/server",e)}},group:{get:function(){return this.$store.state.app.group},set:function(e){this.$store.commit("app/group",e)}},secret:{get:function(){return this.$store.state.app.secret},set:function(e){this.$store.commit("app/secret",e)}}},methods:{login:function(){this.$store.dispatch("app/login",{server:this.server,group:this.group,secret:this.secret})}}},l=r(51),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return!1===e.loginStatus?r("div",{staticClass:"fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center"},[r("div",{staticClass:"rounded-lg flex bg-gray-100 flex-col p-8 w-full max-w-md m-4"},[r("div",{staticClass:"flex justify-center mb-5"},[r("NuxtLink",{staticClass:"flex items-center",attrs:{to:"/"}},[r("i",{staticClass:"fa-light text-5xl fa-computer-speaker mr-2 text-gray-600"}),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"font-semibold uppercase text-pink-600 text-2xl leading-none"},[e._v("\n            Audio"),r("span",{staticClass:"font-bold text-gray-600"},[e._v("Serve")])])])])],1),e._v(" "),r("floating-label-input",{staticClass:"my-2",attrs:{title:"Server"},model:{value:e.server,callback:function(t){e.server=t},expression:"server"}}),e._v(" "),r("floating-label-input",{staticClass:"my-2",attrs:{title:"Shared Secret"},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}}),e._v(" "),r("floating-label-input",{staticClass:"my-2",attrs:{title:"Group"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}}),e._v(" "),r("button",{staticClass:"bg-pink-600 text-white w-full mt-3 p-3 rounded-xl text-lg",on:{click:e.login}},[e._v("\n      Login\n    ")])],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FloatingLabelInput:r(272).default})},274:function(e,t,r){"use strict";r.r(t);r(40),r(100);var n={name:"Header",props:[],components:{},data:function(){return{}},computed:{group:function(){return this.$store.state.app.group},search:{get:function(){return this.$store.state.app.search},set:function(e){this.$store.commit("app/search",e)}},menu:{get:function(){return this.$store.state.app.menu},set:function(e){this.$store.commit("app/menu",e)}},searchterm:{get:function(){return this.$store.state.app.searchterm},set:function(e){this.$store.commit("app/searchterm",e)}}}},l=r(51),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-top h-screen w-full"},[r("div",{staticClass:"flex items-center w-full h-20 lg:h-24 border-b border-gray-300 lg:border-b-0 relative"},[r("div",{staticClass:"lg:w-80 flex-shrink-0 flex-grow-0 lg:border-r lg:border-b border-gray-300 p-3 px-6 lg:px-10 h-20 lg:h-24 flex items-center"},[r("NuxtLink",{staticClass:"flex items-center",attrs:{to:"/"}},[r("svg",{staticClass:"svg-inline--fa fa-computer-speaker text-gray-600 fa-w-20 fa-2xl mr-2",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"computer-speaker",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512","data-fa-i2svg":""}},[r("path",{attrs:{fill:"currentColor",d:"M480 192c26.5 0 48-21.5 48-48S506.5 96 480 96s-48 21.5-48 48S453.5 192 480 192zM480 128c8.875 0 16 7.125 16 16S488.9 160 480 160s-16-7.125-16-16S471.1 128 480 128zM480 224c-53 0-96 43-96 96s43 96 96 96s96-43 96-96S533 224 480 224zM480 384c-35.38 0-64-28.62-64-64s28.62-64 64-64s64 28.62 64 64S515.4 384 480 384zM480 296c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S493.3 296 480 296zM576 32h-192c-35.35 0-64 28.65-64 64v320c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V96C640 60.65 611.3 32 576 32zM608 416c0 17.67-14.33 32-32 32h-192c-17.67 0-32-14.33-32-32V96c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32V416zM48 64h224C280.8 64 288 56.84 288 48S280.8 32 272 32H47.1c-26.47 0-48 21.53-48 48L0 336C0 362.5 21.53 384 48 384h224C280.8 384 288 376.8 288 368S280.8 352 272 352h-224C39.17 352 32 344.8 32 336v-256C32 71.19 39.17 64 48 64zM272 448h-160C103.2 448 96 455.2 96 464S103.2 480 112 480h160C280.8 480 288 472.8 288 464S280.8 448 272 448z"}})]),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"font-semibold text-lg uppercase text-pink-600 leading-none"},[e._v("\n            Audio"),r("span",{staticClass:"font-bold text-gray-600"},[e._v("Serve")])]),e._v(" "),r("div",{staticClass:"leading-none text-xs font-normal text-gray-500"},[e._v("\n            "+e._s(e.group)+"\n          ")])])])],1),e._v(" "),r("div",{staticClass:"px-0 lg:px-12 w-full items-center",class:{mobilesearch:e.search,flex:e.search}},[r("floating-label-input",{class:{block:e.search,hidden:!e.search},attrs:{title:"Search..."},model:{value:e.searchterm,callback:function(t){e.searchterm=t},expression:"searchterm"}}),e._v(" "),r("div",{staticClass:"ml-3"},[r("div",{staticClass:"rounded-full bg-gray-300 w-8 h-8 justify-center items-center",class:{flex:e.search,hidden:!e.search},on:{click:function(t){e.search=!1}}},[r("i",{staticClass:"fa-thin fa-times fa-fw"})])]),e._v(" "),r("div",{staticClass:"flex lg:hidden justify-end text-lg mr-1",class:{hidden:e.search}},[r("div",{staticClass:"bg-gray-200 rounded w-10 h-10 flex justify-center items-center mx-1",on:{click:function(t){e.search=!0}}},[r("i",{staticClass:"fa-light fa-magnifying-glass"})]),e._v(" "),r("div",{staticClass:"bg-gray-200 rounded w-10 h-10 flex justify-center items-center mx-1",on:{click:function(t){e.menu=!e.menu}}},[r("i",{staticClass:"fa-light fa-bars"})])])],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FloatingLabelInput:r(272).default})},275:function(e,t,r){"use strict";r.r(t);var n={name:"Nav",props:[],computed:{group:function(){return this.$store.state.app.group},collections:function(){return this.$store.state.app.collections},menu:function(){return this.$store.state.app.menu},activepage:function(){return this.$store.state.app.activepage}},methods:{logout:function(){this.$store.commit("app/loginStatus",!1)}}},l=r(51),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"transition-all z-40 bg-gray-200 flex-shrink-0 flex-grow-0 w-screen transform lg:translate-x-0 lg:w-80 p-8 px-6 h-(screen-80) lg:h-(screen-96) border-r border-gray-300 absolute inset-0 lg:relative",class:{"-translate-x-full":!e.menu,"translate-x-0":e.menu}},[e.collections.length>1?r("div",{staticClass:"relative border border-gray-100 rounded-2xl appearance-none -mt-8 -mx-6 max-w-xl flex-grow"},[r("select",{staticClass:"w-full py-1 px-10 bg-gray-200 text-sm leading-normal max-w-xl",domProps:{value:e.currentCollection},on:{change:e.changeCollection}},e._l(e.collections,(function(option,t){return r("option",{key:t,domProps:{value:t}},[e._v("\n        "+e._s(option)+"\n      ")])})),0)]):e._e(),e._v(" "),r("NuxtLink",{staticClass:"flex items-center my-2 p-3 px-5 rounded-lg nav",class:{active:"library"===e.activepage},attrs:{to:"/"}},[r("i",{staticClass:"fa-light fa-rectangle-vertical-history mr-2 fa-lg"}),e._v("\n    Library\n  ")]),e._v(" "),r("NuxtLink",{staticClass:"flex items-center my-2 p-3 px-5 rounded-lg nav",class:{active:"settings"===e.activepage},attrs:{to:"/settings"}},[r("i",{staticClass:"fa-light fa-gear mr-2 fa-lg"}),e._v("\n    Settings\n  ")]),e._v(" "),r("NuxtLink",{staticClass:"flex items-center my-2 p-3 px-5 rounded-lg nav",class:{active:"cached"===e.activepage},attrs:{to:"/cached"}},[r("i",{staticClass:"fa-light fa-box-archive mr-2 fa-lg"}),e._v("\n    Cached\n  ")]),e._v(" "),r("div",{staticClass:"flex cursor-pointer absolute bottom-0 left-0 border-t border-gray-300 w-full items-center p-5 px-10",on:{click:e.logout}},[r("i",{staticClass:"fa-light fa-right-from-bracket mr-2 fa-lg"}),e._v("\n    Logout\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},276:function(e,t,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("d48b1a92",content,!0,{sourceMap:!1})},278:function(e,t,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("52269f99",content,!0,{sourceMap:!1})},279:function(e,t,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("51cd7b17",content,!0,{sourceMap:!1})},280:function(e,t,r){"use strict";r(276)},281:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.description-text p{\n  margin:15px 0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},283:function(e,t,r){"use strict";r(278)},284:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.playback-slider{\n  z-index:10;\n  height:0.75rem;\n  background-color:transparent;\n  -webkit-appearance:none;\n  width:100%;\n  outline:none;\n  transition:opacity .2s\n}\n.playback-slider::-webkit-slider-thumb{\n  height:0.75rem;\n  width:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 39, 119, var(--tw-bg-opacity));\n  -webkit-appearance:none;\n  appearance:none;\n  border-radius:50%;\n  cursor:pointer\n}\n.playback-slider::-moz-range-thumb{\n  height:0.75rem;\n  width:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 39, 119, var(--tw-bg-opacity));\n  width:10px;\n  height:10px;\n  border-radius:50%;\n  cursor:pointer\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},285:function(e,t,r){"use strict";r(279)},286:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.description-text p{\n  margin:15px 0\n}\n.readmore{\n  height:95px;\n  overflow:hidden\n}\n.readmore.active{\n  height:auto;\n  overflow:visible\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},287:function(e,t,r){"use strict";r.r(t);var n=r(4),l=(r(39),r(24),r(32),r(14),r(21),r(25),r(137),r(63)),o=r.n(l),c={name:"FolderDetails",props:["details","name","server"],data:function(){return{image:null}},computed:{description:function(){return this.$store.state.app.folderDescription}},watch:{details:function(e,t){console.log(e),console.log(t),e!==t&&e.description&&(console.log("update description"),this.$store.dispatch("app/getFolderDescription",this.details.description.path)),e.image||e.description?this.$store.commit("app/rightbar",!0):this.$store.commit("app/rightbar",!1),this.image=null,this.getImage()}},mounted:function(){(this.image||this.description)&&(this.$store.commit("app/rightbar",!0),this.getImage())},methods:{getImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.details||!e.details.cover){t.next=10;break}return r=e.$store.getters["app/getServerUrl"]+"cover/"+e.details.cover.path,t.next=4,fetch(r,{headers:{Authorization:"Bearer "+o.a.get("audioserve_token")}});case 4:return n=t.sent,t.next=7,n.blob();case 7:l=t.sent,c=URL.createObjectURL(l),e.image=c;case 10:case"end":return t.stop()}}),t)})))()}}},f=(r(280),r(51)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col overflow-auto"},[r("div",{staticClass:"text p-8 pb-5 flex flex-col justify-center"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:e.image}})]),e._v(" "),r("div",{staticClass:"text-xl flex justify-center px-8 font-bold"},[e._v(e._s(e.name))]),e._v(" "),r("div",{staticClass:"text px-8 description-text text-sm prose",domProps:{innerHTML:e._s(e.description)}})])}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,r){"use strict";r.r(t);var n=r(4),l=(r(39),r(277),r(289),r(292),r(41),r(40),r(293),r(138)),o=r(294),c={name:"Player",props:["details","server"],data:function(){return{editPlaybackSpeed:!1,player:null,playing:!1,loading:!1,localremaining:0,current:0,currentFile:{index:0,start:0,duration:0,path:""}}},computed:{image:function(){return this.$store.state.app.book.cover},groupDetails:function(){return this.$store.state.app.groupDetails},playbackSpeed:function(){return Number.parseFloat(this.groupDetails.playback_speed).toFixed(2)},transcode:function(){return this.$store.state.app.transcode},seek:function(){return this.$store.state.app.book.seek},hash:function(){return Object(l.sha256)(this.$route.fullPath)},totalTime:function(){var e=0;return this.details.files.forEach((function(t){e+=t.meta.duration})),e},remaining:function(){var e=this.totalTime-this.seek;return this.secondsToTime(e)+" remaining"},percent:function(){var e=(this.totalTime-this.seek)/this.totalTime*100;return 100-e.toFixed(0)},localpercent:function(){return this.player?100-((this.currentFile.duration-this.current)/this.currentFile.duration*100).toFixed(0):0},localseek:function(){return(this.seek-this.currentFile.start).toFixed(0)}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.currentFile=e.getCurrentFile(),t.next=3,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 3:e.player=t.sent,e.updatePlayerDetails(),e.current=e.localseek;case 6:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){console.log("clean up"),this.player&&this.player.unload(),caches.delete(this.$store.state.app.cacheKey+"temp-"+this.hash)},methods:{updateSeek:function(e){console.log(e.target.value),this.player.playing()?(this.player.pause(),this.player.seek(e.target.value),this.player.play()):(this.player.seek(e.target.value),this.current=e.target.value)},nextFile:function(){return{index:this.currentFile.index+1,start:this.currentFile.start+this.currentFile.duration,duration:this.details.files[this.currentFile.index+1].meta.duration,path:this.details.files[this.currentFile.index+1].path}},prevFile:function(){return{index:this.currentFile.index-1,start:this.currentFile.start-this.currentFile.duration,duration:this.details.files[this.currentFile.index-1].meta.duration,path:this.details.files[this.currentFile.index-1].path}},loadFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var l,c,f,d,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Loading file"),console.log(t.currentFile),l=null,c=null,f={hash:t.hash,file:e},r.next=7,t.$store.dispatch("app/fileIsCached",f);case 7:if(!r.sent){r.next=16;break}return r.next=11,t.$store.dispatch("app/getCachedFile",f);case 11:d=r.sent,c=d.src,l=d.format,r.next=21;break;case 16:return r.next=18,t.$store.dispatch("app/tempCache",{hash:"temp-"+t.hash,file:e});case 18:h=r.sent,c=h.src,l=h.format;case 21:return v=t,r.abrupt("return",new o.Howl({src:c,format:l,html5:!0,onplay:function(){v.loading=!1,v.updatePlayerDetails()},onpause:function(){console.log("pause file")},onloaderror:function(e,t){console.log("load error"),console.log(e),console.log(t)},onend:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("track ended"),v.player.unload(),v.player=null,e.next=5,v.nextTrack();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}));case 23:case"end":return r.stop()}}),r)})))()},nextTrack:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.nextFile(),e.currentFile=r,t.next=4,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 4:e.player=t.sent,e.player.play();case 6:case"end":return t.stop()}}),t)})))()},playTrack:function(e){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},getCurrentFile:function(){for(var e=0,i=0,t=this.details.files.length;i<t;i++){if(console.log(e+this.details.files[i].meta.duration),console.log("seek: "+this.seek),e+this.details.files[i].meta.duration>this.seek)return{index:i,start:e,duration:this.details.files[i].meta.duration,path:this.details.files[i].path};e+=this.details.files[i].meta.duration}return{index:0,start:0,duration:0,path:""}},updatePlayerDetails:function(){if(this.localremaining=this.getLocalRemaining(),this.current=this.getLocalSeek(),!0===this.playing){var e=this;window.requestAnimationFrame((function(){e.updatePlayerDetails()}))}},getLocalRemaining:function(){return this.playing?this.currentFile.duration-this.player.seek():this.currentFile.duration-this.localseek},getLocalSeek:function(){return this.playing?this.player.seek():this.localseek},fullseek:function(e){return this.currentFile.start+e},extension:function(e){return/(?:\.([^.]+))?$/.exec(e)[1]},closePlayer:function(){this.$store.commit("app/player",!1)},togglePlay:function(){this.playing?this.pause():this.play()},secondsToTime:function(e){var t=e%3600;return Math.floor(e/3600)+"h"+Math.floor(t/60)+"m"},secondsToPlayback:function(e){var t=Math.floor(e/3600),r=e%3600,n=Math.floor(r/60),l=r%60,o=Math.ceil(l),output="";return t>0&&(output+=t+":"),output+String(n).padStart(2,"0")+":"+String(o).padStart(2,"0")},play:function(){this.loading=!0,this.current&&(this.player.seek(this.current),this.player.play()),this.playing=!0},pause:function(){this.player.pause(this.soundid),this.$store.dispatch("app/updateBookDetails",{hash:this.hash,book:{seek:this.fullseek(this.player.seek())}}),this.playing=!1},updatePlaybackSpeed:function(e){this.$store.commit("app/playbackSpeed",e.target.value)},increasePlaybackSpeed:function(){var e=parseFloat(this.playbackSpeed)+parseFloat("0.05");this.$store.commit("app/playbackSpeed",e.toFixed(2)),this.player.rate(e.toFixed(2))},decreasePlaybackSpeed:function(){var e=parseFloat(this.playbackSpeed)-parseFloat("0.05");this.$store.commit("app/playbackSpeed",e.toFixed(2)),this.player.rate(e.toFixed(2))},seekForwards:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.player.pause(),r=e.player.seek()+parseInt(e.groupDetails.seekForwards),n=e.player.duration(),!(r>=n)){t.next=12;break}if(!(e.currentFile.index<e.details.files.length)){t.next=12;break}return r-=e.currentFile.duration,e.currentFile=e.nextFile(),t.next=9,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 9:e.player=t.sent,t.next=12;break;case 12:console.log("> skipping to "+r+" from "+e.player.seek()),e.player.seek(r),e.player.play();case 15:case"end":return t.stop()}}),t)})))()},seekBackwards:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.player.pause()._sounds[0],n=r._seek,!((l=n-parseInt(e.groupDetails.seekBackwards))<=0)){t.next=13;break}if(!(e.currentFile.index>0)){t.next=12;break}return e.currentFile=e.prevFile(),l=e.currentFile.duration+l,t.next=9,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 9:e.player=t.sent,t.next=13;break;case 12:l=0;case 13:console.log("< skipping to "+l+" from "+n),e.player.seek(l),e.player.play();case 16:case"end":return t.stop()}}),t)})))()}}},f=(r(283),r(51)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col justify-between relative bg-gray-100 h-screen overflow-auto"},[r("div",{staticClass:"absolute top-0 right-0 w-8 h-8 rounded-bl flex cursor-pointer justify-center items-center",on:{click:e.closePlayer}},[r("i",{staticClass:"fa-thin fa-chevron-down"})]),e._v(" "),r("div",[r("div",{staticClass:"text p-8 pb-5 pt-12 px-12 flex justify-center flex-shrink"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:e.image}})]),e._v(" "),r("div",{staticClass:"w-full px-8 flex flex-col text-center items-center"},[r("div",{staticClass:" font-semibold flex mb-2"},[e._v("Chapter 1")]),e._v(" "),r("div",{staticClass:"flex py-1 items-center w-full relative mb-1"},[r("div",{staticClass:"relative flex-grow mr-2"},[r("div",{staticClass:"overflow-hidden h-1 text-xs flex rounded bg-gray-300"},[r("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600",style:{width:e.localpercent+"%"}})])]),e._v(" "),r("input",{staticClass:"absolute playback-slider",attrs:{type:"range",min:"0",max:e.currentFile.duration},domProps:{value:e.current},on:{input:e.updateSeek}})]),e._v(" "),r("div",{staticClass:"flex w-full justify-between pointer-events-none"},[r("div",{staticClass:"text-xs"},[e._v(e._s(e.secondsToPlayback(e.current)))]),e._v(" "),r("div",{staticClass:"px-8 text-xs"},[e._v(e._s(e.remaining))]),e._v(" "),r("div",{staticClass:"text-xs"},[e._v("-"+e._s(e.secondsToPlayback(e.localremaining)))])])])]),e._v(" "),r("div",{staticClass:"flex items-center w-full justify-evenly my-2"},[r("div",{},[r("span",{staticClass:"fa-layers fa-fw fa-3x relative",on:{click:e.seekBackwards}},[r("i",{staticClass:"fa-thin fa-circle-notch fa-rotate-by",staticStyle:{"--fa-rotate-angle":"-23deg"}}),e._v(" "),r("i",{staticClass:"fa-solid fa-chevron-left",staticStyle:{"font-size":"12px"},attrs:{"data-fa-transform":"up-30"}}),e._v(" "),r("span",{staticClass:"text-sm absolute inset-0 flex justify-center items-center"},[e._v("30")])])]),e._v(" "),r("div",{staticClass:"cursor-pointer relative"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.playing,expression:"!playing"}],staticClass:"fa-layers fa-fw fa-6x",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-solid fa-play",attrs:{"data-fa-transform":"shrink-10"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.playing,expression:"playing"}],staticClass:"fa-layers fa-fw fa-6x",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-solid fa-pause",attrs:{"data-fa-transform":"shrink-10"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa-layers fa-fw fa-6x absolute inset-0 opacity-70",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-spinner-third fa-spin",attrs:{"data-fa-transform":"shrink-2"}})])]),e._v(" "),r("div",{},[r("span",{staticClass:"fa-layers fa-fw fa-3x relative",on:{click:e.seekForwards}},[r("i",{staticClass:"fa-thin fa-circle-notch fa-rotate-by",staticStyle:{"--fa-rotate-angle":"23deg"}}),e._v(" "),r("i",{staticClass:"fa-solid fa-chevron-right",staticStyle:{"font-size":"12px"},attrs:{"data-fa-transform":"up-30"}}),e._v(" "),r("span",{staticClass:"text-sm absolute inset-0 flex justify-center items-center"},[e._v("45")])])])]),e._v(" "),r("div",{staticClass:"p-2 w-full"},[r("div",{staticClass:"bg-gray-200 rounded p-3 px-6 w-full relative flex justify-between"},[r("button",{staticClass:"cursor-pointer",on:{click:function(t){e.editPlaybackSpeed=!0}}},[e._v(e._s(e.playbackSpeed)+"x")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e.editPlaybackSpeed?r("div",{staticClass:"absolute inset-0 flex bg-gray-200 rounded justify-between p-3 px-6"},[r("span",[e._v(e._s(e.playbackSpeed)+"x")]),e._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"mx-3 cursor-pointer",on:{click:e.decreasePlaybackSpeed}},[r("i",{staticClass:"fa-solid fa-circle-minus text-gray-600 fa-lg"})]),e._v(" "),r("div",[r("input",{staticClass:"w-12 p-2 text-center",domProps:{value:e.playbackSpeed},on:{input:e.updatePlaybackSpeed}})]),e._v(" "),r("div",{staticClass:"mx-3 cursor-pointer",on:{click:e.increasePlaybackSpeed}},[r("i",{staticClass:"fa-solid fa-circle-plus text-gray-600 fa-lg"})])]),e._v(" "),r("div",{staticClass:"cursor-pointer",on:{click:function(t){e.editPlaybackSpeed=!1}}},[e._v("Close")])]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-alarm-snooze"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-airplay"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-sliders-up"})])}],!1,null,null,null);t.default=component.exports},295:function(e,t,r){"use strict";r.r(t);var n=r(4),l=(r(39),r(24),r(32),r(41),r(277),r(14),r(25),r(21),r(137),r(52),r(138)),o=r(63),c=r.n(o),f={name:"BookDetails",props:["details","name","server"],data:function(){return{readmore:!1,cached:!1,downloading:!1,image:null}},computed:{moretext:function(){return this.readmore?"Less..":"More.."},description:function(){return this.$store.state.app.book.description},transcode:function(){return this.$store.state.app.transcode},seek:function(){return this.$store.state.app.book.seek},hash:function(){return Object(l.sha256)(this.$route.fullPath)},totalTime:function(){var e=0;return this.details.files.forEach((function(t){e+=t.meta.duration})),e},remaining:function(){var e=this.totalTime-this.seek;return this.secondsToTime(e)+" remaining"},percent:function(){var e=(this.totalTime-this.seek)/this.totalTime*100;return 100-e.toFixed(0)}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("app/rightbar",!0),t.next=3,caches.keys();case 3:r=t.sent,console.log("keys"),console.log(r),e.getImage(),e.$store.dispatch("app/getBookDetails",Object(l.sha256)(e.$route.fullPath));case 8:case"end":return t.stop()}}),t)})))()},methods:{listen:function(){this.$store.commit("app/player",!0)},secondsToTime:function(e){var t=e%3600;return Math.floor(e/3600)+"h"+Math.floor(t/60)+"m"},getImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.details||!e.details.cover){t.next=10;break}return r=e.$store.getters["app/getServerUrl"]+"cover/"+e.details.cover.path,t.next=4,fetch(r,{headers:{Authorization:"Bearer "+c.a.get("audioserve_token")}});case 4:return n=t.sent,t.next=7,n.blob();case 7:l=t.sent,o=URL.createObjectURL(l),e.image=o;case 10:case"end":return t.stop()}}),t)})))()},download:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("download"),e.downloading=!0,t.next=4,navigator.storage.persist();case 4:return r=t.sent,console.log("Persisted storage granted: ".concat(r)),n="audioserv-".concat(e.hash),t.next=9,caches.delete(n);case 9:return t.next=11,caches.open(n);case 11:return l=t.sent,t.next=14,Promise.all(e.details.files.map((function(t){return l.add(e.$store.getters["app/getServerUrl"]+"download/"+t.path)})));case 14:e.downloading=!1,e.cached=!0,console.log("files cached "+n);case 17:case"end":return t.stop()}}),t)})))()}}},d=(r(285),r(51)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col overflow-auto pb-8"},[r("div",{staticClass:"text p-8 pb-5 px-12 flex flex-col justify-center"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:e.image}})]),e._v(" "),r("div",{staticClass:"text-xl flex justify-center px-8 font-bold"},[e._v(e._s(e.name))]),e._v(" "),r("button",{staticClass:"text-white bg-pink-600 font-normal rounded-lg mx-8 my-4 p-3",on:{click:e.listen}},[r("i",{staticClass:"fa-light fa-circle-play"}),e._v(" Listen")]),e._v(" "),e.description?[r("div",{staticClass:"text px-8 description-text text-sm readmore",class:{active:e.readmore},domProps:{innerHTML:e._s(e.description)}}),e._v(" "),r("div",{staticClass:"px-8 text-pink-600 font-normal text-sm cursor-pointer",on:{click:function(t){e.readmore=!e.readmore}}},[e._v(e._s(e.moretext))])]:e._e(),e._v(" "),r("div",{staticClass:"px-8 mt-3 font-normal text-sm"},[e._v("Progress")]),e._v(" "),r("div",{staticClass:"flex px-8 pt-1 items-center"},[r("div",{staticClass:"relative flex-grow mr-2"},[r("div",{staticClass:"overflow-hidden h-1 text-xs flex rounded bg-gray-300"},[r("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600",style:{width:e.percent+"%"}})])]),e._v(" "),r("div",{staticClass:"text-sm"},[e._v(e._s(e.percent)+"%")])]),e._v(" "),r("div",{staticClass:"px-8 text-xs"},[e._v(e._s(e.remaining))]),e._v(" "),r("div",{staticClass:"px-8 pt-8"},[r("div",{staticClass:"cursor-pointer relative"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.cached&&!e.downloading,expression:"!cached && !downloading"}],staticClass:"fa-layers fa-fw fa-2x",on:{click:e.download}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-arrow-down-to-line",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.downloading,expression:"downloading"}],staticClass:"fa-layers fa-fw fa-2x"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-thin fa-down-to-line fa-beat",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.cached,expression:"cached"}],staticClass:"fa-layers fa-fw fa-2x"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-thin fa-trash-can",attrs:{"data-fa-transform":"shrink-8"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.downloading,expression:"downloading"}],staticClass:"fa-layers fa-fw fa-2x absolute inset-0 opacity-70"},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-spinner-third fa-spin",attrs:{"data-fa-transform":"shrink-2"}})])])])],2)}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,r){"use strict";r.r(t);var n=r(4),l=(r(39),r(40),r(102),r(140),r(42),r(14),r(63)),o=r.n(l),c=r(287),f=r(288),d=r(274),h=r(275),v=r(273),m={name:"App",components:{Header:d.default,Nav:h.default,FolderDetails:c.default,Player:f.default,LoginStatus:v.default},data:function(){return{foldername:"",corsproxy:"",secret:""}},computed:{currentFolder:function(){return this.$route.query.folder||""},loginStatus:function(){return this.$store.state.app.loginStatus},server:function(){return this.$store.state.app.server},folder:function(){return this.$store.state.app.folder},group:function(){return this.$store.state.app.group},rightbar:function(){return this.$store.state.app.rightbar},collections:function(){return this.$store.state.app.collections},currentCollection:function(){return this.$store.state.app.currentCollection},loginsecret:function(){return this.$store.state.app.loginsecret},player:function(){return this.$store.state.app.player},breadcrumbs:function(){var e=[{name:"Home",link:"/",active:!1}];if(this.$route.query.folder&&"/"!==this.$route.query.folder)for(var t=this.$route.query.folder.split("/"),i=0;i<t.length;i++)e.push({name:t[i],link:t.slice(0,i+1).join("/"),active:i===t.length-1});return e}},watch:{$route:function(e,t){console.log("watch route triggered"),e!==t&&(e.query.collection>0?this.$store.commit("app/currentCollection",e.query.collection):this.$store.commit("app/currentCollection",0),e.query.folder?this.fetchFolder(e.query.folder):this.fetchFolder())},loginStatus:function(e,t){console.log("login status updated"),e!==t&&!1!==e&&(this.$route.query.collection>0?this.$store.commit("app/currentCollection",this.$route.query.collection):this.$store.commit("app/currentCollection",0),this.fetchFolder(this.currentFolder))},currentCollection:function(e,t){e!==t&&this.selectFolder({path:"/"})}},mounted:function(){this.$store.dispatch("app/initialiseApp"),this.$store.commit("app/activepage","library"),this.fetchFolder()},methods:{fetchFolder:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",r.next=3,fetch(t.$store.getters["app/getServerUrl"]+"folder/"+n,{headers:{Authorization:"Bearer "+o.a.get("audioserve_token")}});case 3:if(200===(l=r.sent).status){r.next=7;break}return t.$store.commit("app/loginStatus",!1),r.abrupt("return",!1);case 7:return r.next=9,l.json();case 9:(c=r.sent)&&t.$store.commit("app/folder",c);case 11:case"end":return r.stop()}}),r)})))()},changeCollection:function(e){this.$store.commit("app/currentCollection",e.target.value)},updateServer:function(input){this.$store.commit("app/server",input)},selectFolder:function(e){this.$store.commit("app/folderDescription",""),this.$store.commit("app/player",!1);var t={path:"/",query:{folder:e.path}};this.currentCollection>0&&(t.query.collection=this.currentCollection),this.$router.push(t),this.fetchFolder(encodeURIComponent(e.path))}}},x=r(51),component=Object(x.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative flex items-top min-h-screen bg-gray-200 w-full overflow-hidden"},[r("div",{staticClass:"flex flex-col items-top h-screen w-full"},[r("Header"),e._v(" "),r("div",{staticClass:"flex w-full relative h-screen"},[r("Nav"),e._v(" "),r("div",{staticClass:"p-3 px-6 lg:px-12 w-screen lg:w-full content-area overflow-auto"},[e.folder&&e.folder.subfolders?r("div",[e.folder.subfolders.length>0?r("div",{staticClass:"my-6 text-xl font-bold text-gray-600"},[e._v("\n            Folders\n            "),e.breadcrumbs.length>1?r("div",{staticClass:"breadcrumbs flex-col lg:flex-row"},e._l(e.breadcrumbs,(function(t,n){return r("span",{key:n,class:{active:t.active},on:{click:function(r){return e.selectFolder({path:t.link})}}},[e._v("\n                "+e._s(t.name)+"\n              ")])})),0):e._e()]):e._e(),e._v(" "),e._l(e.folder.subfolders,(function(t,n){return r("div",{key:n,staticClass:"bg-gray-50 filter drop-shadow p-5 rounded-lg my-2 w-full text-gray-600 max-w-xl cursor-pointer",on:{click:function(r){return e.selectFolder(t)}}},[r("i",{staticClass:"fa-light fa-folder mr-2 fa-lg"}),e._v("\n            "+e._s(t.name)+"\n          ")])}))],2):e._e(),e._v(" "),e.folder&&e.folder.files?r("div",[e.folder.files.length>0?r("div",{staticClass:"mt-8 text-xl font-bold text-gray-600"},[e._v("\n            Files\n            "),e.breadcrumbs.length>1?r("div",{staticClass:"breadcrumbs flex-col lg:flex-row"},e._l(e.breadcrumbs,(function(t,n){return r("span",{key:n,class:{active:t.active},on:{click:function(r){return e.selectFolder({path:t.link})}}},[e._v("\n                "+e._s(t.name)+"\n              ")])})),0):e._e()]):e._e(),e._v(" "),e._l(e.folder.files,(function(t,n){return r("div",{key:n,staticClass:"bg-gray-50 filter drop-shadow p-5 rounded-lg my-2 w-full text-gray-600 max-w-xl cursor-pointer",on:{click:function(r){return e.selectFile(t)}}},[r("svg",{staticClass:"svg-inline--fa fa-book mr-2 fa-lg",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"book",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M448 368v-320C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16S440.8 480 432 480H416v-66.95C434.6 406.4 448 388.8 448 368zM32 80C32 53.49 53.49 32 80 32H96v352H64c-11.71 0-22.55 3.389-32 8.9V80zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM400 384H128V32h272C408.8 32 416 39.17 416 48v320C416 376.8 408.8 384 400 384zM352 128H192C183.2 128 176 135.2 176 144S183.2 160 192 160h160c8.844 0 16-7.156 16-16S360.8 128 352 128zM352 224H192C183.2 224 176 231.2 176 240S183.2 256 192 256h160c8.844 0 16-7.156 16-16S360.8 224 352 224z"}})]),e._v("\n            "+e._s(t.name)+"\n          ")])}))],2):e._e()])],1),e._v(" "),r("LoginStatus")],1),e._v(" "),r("div",{staticClass:"transform transition-all border-l h-screen border-gray-300 w-full max-w-sm items-top absolute lg:relative inset-0 flex bg-gray-100 flex-col",class:{"-mr-96":!1===e.rightbar,"translate-x-full":!1===e.rightbar}},[null!==e.folder&&e.folder.files&&0===e.folder.files.length?r("folder-details",{attrs:{server:e.server,details:e.folder,name:e.foldername}}):e._e(),e._v(" "),null!==e.folder&&e.folder.files&&e.folder.files.length>0?r("book-details",{attrs:{server:e.server,details:e.folder,name:e.foldername}}):e._e()],1),e._v(" "),r("div",{staticClass:"transition-all transform absolute right-0 border-l h-screen border-gray-300 w-full max-w-sm items-top flex flex-col",class:{"translate-y-full":!1===e.player}},[null!==e.folder&&!1!==e.player?r("player",{attrs:{server:e.server,details:e.folder}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:r(274).default,Nav:r(275).default,LoginStatus:r(273).default,FolderDetails:r(287).default,BookDetails:r(295).default,Player:r(288).default})}}]);