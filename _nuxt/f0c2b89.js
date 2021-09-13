(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("52269f99",content,!0,{sourceMap:!1})},279:function(e,t,r){"use strict";r(274)},280:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.playback-slider{\n  z-index:10;\n  height:0.75rem;\n  background-color:transparent;\n  -webkit-appearance:none;\n  width:100%;\n  outline:none;\n  transition:opacity .2s\n}\n.playback-slider::-webkit-slider-thumb{\n  height:0.75rem;\n  width:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 39, 119, var(--tw-bg-opacity));\n  -webkit-appearance:none;\n  appearance:none;\n  border-radius:50%;\n  cursor:pointer\n}\n.playback-slider::-moz-range-thumb{\n  height:0.75rem;\n  width:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 39, 119, var(--tw-bg-opacity));\n  width:10px;\n  height:10px;\n  border-radius:50%;\n  cursor:pointer\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},285:function(e,t,r){"use strict";r.r(t);var n=r(4),l=(r(39),r(273),r(286),r(289),r(40),r(45),r(290),r(137)),o=r(291),c={name:"Player",props:["details","server"],data:function(){return{editPlaybackSpeed:!1,player:null,playing:!1,loading:!1,localremaining:0,current:0,currentFile:{index:0,start:0,duration:0,path:""}}},computed:{image:function(){return this.$store.state.app.book.cover},groupDetails:function(){return this.$store.state.app.groupDetails},playbackSpeed:function(){return Number.parseFloat(this.groupDetails.playback_speed).toFixed(2)},transcode:function(){return this.$store.state.app.transcode},seek:function(){return this.$store.state.app.book.seek},hash:function(){return Object(l.sha256)(this.$route.fullPath)},totalTime:function(){var e=0;return this.details.files.forEach((function(t){e+=t.meta.duration})),e},remaining:function(){var e=this.totalTime-this.seek;return this.secondsToTime(e)+" remaining"},percent:function(){var e=(this.totalTime-this.seek)/this.totalTime*100;return 100-e.toFixed(0)},localpercent:function(){return this.player?100-((this.currentFile.duration-this.current)/this.currentFile.duration*100).toFixed(0):0},localseek:function(){return(this.seek-this.currentFile.start).toFixed(0)}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.currentFile=e.getCurrentFile(),t.next=3,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 3:e.player=t.sent,e.updatePlayerDetails(),e.current=e.localseek;case 6:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){console.log("clean up"),this.player&&this.player.unload(),caches.delete(this.$store.state.app.cacheKey+"temp-"+this.hash)},methods:{updateSeek:function(e){console.log(e.target.value),this.player.playing()?(this.player.pause(),this.player.seek(e.target.value),this.player.play()):(this.player.seek(e.target.value),this.current=e.target.value)},nextFile:function(){return{index:this.currentFile.index+1,start:this.currentFile.start+this.currentFile.duration,duration:this.details.files[this.currentFile.index+1].meta.duration,path:this.details.files[this.currentFile.index+1].path}},prevFile:function(){return{index:this.currentFile.index-1,start:this.currentFile.start-this.currentFile.duration,duration:this.details.files[this.currentFile.index-1].meta.duration,path:this.details.files[this.currentFile.index-1].path}},loadFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var l,c,d,f,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Loading file"),console.log(t.currentFile),l=null,c=null,d={hash:t.hash,file:e},r.next=7,t.$store.dispatch("app/fileIsCached",d);case 7:if(!r.sent){r.next=16;break}return r.next=11,t.$store.dispatch("app/getCachedFile",d);case 11:f=r.sent,c=f.src,l=f.format,r.next=21;break;case 16:return r.next=18,t.$store.dispatch("app/tempCache",{hash:"temp-"+t.hash,file:e});case 18:h=r.sent,c=h.src,l=h.format;case 21:return v=t,r.abrupt("return",new o.Howl({src:c,format:l,html5:!0,onplay:function(){v.loading=!1,v.updatePlayerDetails()},onpause:function(){console.log("pause file")},onloaderror:function(e,t){console.log("load error"),console.log(e),console.log(t)},onend:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("track ended"),v.player.unload(),v.player=null,e.next=5,v.nextTrack();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}));case 23:case"end":return r.stop()}}),r)})))()},nextTrack:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.nextFile(),e.currentFile=r,t.next=4,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 4:e.player=t.sent,e.player.play();case 6:case"end":return t.stop()}}),t)})))()},playTrack:function(e){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},getCurrentFile:function(){for(var e=0,i=0,t=this.details.files.length;i<t;i++){if(console.log(e+this.details.files[i].meta.duration),console.log("seek: "+this.seek),e+this.details.files[i].meta.duration>this.seek)return{index:i,start:e,duration:this.details.files[i].meta.duration,path:this.details.files[i].path};e+=this.details.files[i].meta.duration}return{index:0,start:0,duration:0,path:""}},updatePlayerDetails:function(){if(this.localremaining=this.getLocalRemaining(),this.current=this.getLocalSeek(),!0===this.playing){var e=this;window.requestAnimationFrame((function(){e.updatePlayerDetails()}))}},getLocalRemaining:function(){return this.playing?this.currentFile.duration-this.player.seek():this.currentFile.duration-this.localseek},getLocalSeek:function(){return this.playing?this.player.seek():this.localseek},fullseek:function(e){return this.currentFile.start+e},extension:function(e){return/(?:\.([^.]+))?$/.exec(e)[1]},closePlayer:function(){this.$store.commit("app/player",!1)},togglePlay:function(){this.playing?this.pause():this.play()},secondsToTime:function(e){var t=e%3600;return Math.floor(e/3600)+"h"+Math.floor(t/60)+"m"},secondsToPlayback:function(e){var t=Math.floor(e/3600),r=e%3600,n=Math.floor(r/60),l=r%60,o=Math.ceil(l),output="";return t>0&&(output+=t+":"),output+String(n).padStart(2,"0")+":"+String(o).padStart(2,"0")},play:function(){this.loading=!0,this.current&&(this.player.seek(this.current),this.player.play()),this.playing=!0},pause:function(){this.player.pause(this.soundid),this.$store.dispatch("app/updateBookDetails",{hash:this.hash,book:{seek:this.fullseek(this.player.seek())}}),this.playing=!1},updatePlaybackSpeed:function(e){this.$store.commit("app/playbackSpeed",e.target.value)},increasePlaybackSpeed:function(){var e=parseFloat(this.playbackSpeed)+parseFloat("0.05");this.$store.commit("app/playbackSpeed",e.toFixed(2)),this.player.rate(e.toFixed(2))},decreasePlaybackSpeed:function(){var e=parseFloat(this.playbackSpeed)-parseFloat("0.05");this.$store.commit("app/playbackSpeed",e.toFixed(2)),this.player.rate(e.toFixed(2))},seekForwards:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.player.pause(),r=e.player.seek()+parseInt(e.groupDetails.seekForwards),n=e.player.duration(),!(r>=n)){t.next=12;break}if(!(e.currentFile.index<e.details.files.length)){t.next=12;break}return r-=e.currentFile.duration,e.currentFile=e.nextFile(),t.next=9,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 9:e.player=t.sent,t.next=12;break;case 12:console.log("> skipping to "+r+" from "+e.player.seek()),e.player.seek(r),e.player.play();case 15:case"end":return t.stop()}}),t)})))()},seekBackwards:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.player.pause()._sounds[0],n=r._seek,!((l=n-parseInt(e.groupDetails.seekBackwards))<=0)){t.next=13;break}if(!(e.currentFile.index>0)){t.next=12;break}return e.currentFile=e.prevFile(),l=e.currentFile.duration+l,t.next=9,e.loadFile(e.$store.getters["app/getServerUrl"]+"download/"+e.currentFile.path);case 9:e.player=t.sent,t.next=13;break;case 12:l=0;case 13:console.log("< skipping to "+l+" from "+n),e.player.seek(l),e.player.play();case 16:case"end":return t.stop()}}),t)})))()}}},d=(r(279),r(51)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col justify-between relative sidebar h-screen overflow-auto"},[r("div",{staticClass:"absolute top-0 right-0 w-8 h-8 rounded-bl flex cursor-pointer justify-center items-center",on:{click:e.closePlayer}},[r("i",{staticClass:"fa-thin fa-chevron-down"})]),e._v(" "),r("div",[r("div",{staticClass:"text p-8 pb-5 pt-12 px-12 flex justify-center flex-shrink"},[r("img",{staticClass:"block shadow rounded-md",attrs:{src:e.image}})]),e._v(" "),r("div",{staticClass:"w-full px-8 flex flex-col text-center items-center"},[r("div",{staticClass:" font-semibold flex mb-2"},[e._v("Chapter 1")]),e._v(" "),r("div",{staticClass:"flex py-1 items-center w-full relative mb-1"},[r("div",{staticClass:"relative flex-grow mr-2"},[r("div",{staticClass:"overflow-hidden h-1 text-xs flex rounded bg-pink-200"},[r("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600",style:{width:e.localpercent+"%"}})])]),e._v(" "),r("input",{staticClass:"absolute playback-slider",attrs:{type:"range",min:"0",max:e.currentFile.duration},domProps:{value:e.current},on:{input:e.updateSeek}})]),e._v(" "),r("div",{staticClass:"flex w-full justify-between pointer-events-none"},[r("div",{staticClass:"text-xs"},[e._v(e._s(e.secondsToPlayback(e.current)))]),e._v(" "),r("div",{staticClass:"px-8 text-xs"},[e._v(e._s(e.remaining))]),e._v(" "),r("div",{staticClass:"text-xs"},[e._v("-"+e._s(e.secondsToPlayback(e.localremaining)))])])])]),e._v(" "),r("div",{staticClass:"flex items-center w-full justify-evenly my-2"},[r("div",{},[r("span",{staticClass:"fa-layers fa-fw fa-3x relative",on:{click:e.seekBackwards}},[r("i",{staticClass:"fa-thin fa-circle-notch fa-rotate-by",staticStyle:{"--fa-rotate-angle":"-23deg"}}),e._v(" "),r("i",{staticClass:"fa-solid fa-chevron-left",staticStyle:{"font-size":"12px"},attrs:{"data-fa-transform":"up-30"}}),e._v(" "),r("span",{staticClass:"text-sm absolute inset-0 flex justify-center items-center"},[e._v("30")])])]),e._v(" "),r("div",{staticClass:"cursor-pointer relative"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.playing,expression:"!playing"}],staticClass:"fa-layers fa-fw fa-6x",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-solid fa-play",attrs:{"data-fa-transform":"shrink-10"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.playing,expression:"playing"}],staticClass:"fa-layers fa-fw fa-6x",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-solid fa-pause",attrs:{"data-fa-transform":"shrink-10"}})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa-layers fa-fw fa-6x absolute inset-0 opacity-70",on:{click:e.togglePlay}},[r("i",{staticClass:"fa-solid fa-circle text-gray-600"}),e._v(" "),r("i",{staticClass:"fa-inverse fa-light fa-spinner-third fa-spin",attrs:{"data-fa-transform":"shrink-2"}})])]),e._v(" "),r("div",{},[r("span",{staticClass:"fa-layers fa-fw fa-3x relative",on:{click:e.seekForwards}},[r("i",{staticClass:"fa-thin fa-circle-notch fa-rotate-by",staticStyle:{"--fa-rotate-angle":"23deg"}}),e._v(" "),r("i",{staticClass:"fa-solid fa-chevron-right",staticStyle:{"font-size":"12px"},attrs:{"data-fa-transform":"up-30"}}),e._v(" "),r("span",{staticClass:"text-sm absolute inset-0 flex justify-center items-center"},[e._v("45")])])])]),e._v(" "),r("div",{staticClass:"p-2 w-full"},[r("div",{staticClass:"bg-gray-100 rounded p-3 px-6 w-full relative flex justify-between"},[r("button",{staticClass:"cursor-pointer",on:{click:function(t){e.editPlaybackSpeed=!0}}},[e._v(e._s(e.playbackSpeed)+"x")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e.editPlaybackSpeed?r("div",{staticClass:"absolute inset-0 flex bg-gray-200 rounded justify-between p-3 px-6"},[r("span",[e._v(e._s(e.playbackSpeed)+"x")]),e._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"mx-3 cursor-pointer",on:{click:e.decreasePlaybackSpeed}},[r("i",{staticClass:"fa-solid fa-circle-minus text-gray-600 fa-lg"})]),e._v(" "),r("div",[r("input",{staticClass:"w-12 p-2 text-center",domProps:{value:e.playbackSpeed},on:{input:e.updatePlaybackSpeed}})]),e._v(" "),r("div",{staticClass:"mx-3 cursor-pointer",on:{click:e.increasePlaybackSpeed}},[r("i",{staticClass:"fa-solid fa-circle-plus text-gray-600 fa-lg"})])]),e._v(" "),r("div",{staticClass:"cursor-pointer",on:{click:function(t){e.editPlaybackSpeed=!1}}},[e._v("Close")])]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-alarm-snooze"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-airplay"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"cursor-pointer"},[t("i",{staticClass:"fa-light fa-sliders-up"})])}],!1,null,null,null);t.default=component.exports}}]);