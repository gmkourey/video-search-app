(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),l=a(2),o=a(3),s=a(5),d=a(4),u=a(6),m=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={searchValue:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("input",{className:"search-bar",type:"text",onChange:function(t){return e.handleChange(t)},val:this.state.searchValue}),i.a.createElement("button",{type:"submit",onClick:function(t){return e.props.onSearch(t,e.state.searchValue)}},"Search")))}}]),t}(i.a.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",description:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.video;if(null==e)return i.a.createElement("div",null,"Video is not available");var t="https://www.youtube.com/embed/"+e.id.videoId;return i.a.createElement("div",{className:"col-md-8 video-detail"},i.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},i.a.createElement("iframe",{title:"videoDetail",className:"embed-repsponsive-item",src:t})),i.a.createElement("div",{className:"detail"},i.a.createElement("div",null,i.a.createElement("strong",null,e.snippet.title)),i.a.createElement("div",null,e.snippet.description)))}}]),t}(i.a.Component),h=function(e){var t=e.video,a=t.snippet.thumbnails.default.url;return i.a.createElement("li",{className:"list-group-item",onClick:function(){return e.selectedVideo()}},i.a.createElement("div",{className:"video-list media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("img",{className:"media-object",alt:e.alt,src:a})),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"mediaHeading"},t.snippet.title))))},p=function(e){var t=e.videos.map(function(t){return i.a.createElement(h,{key:t.etag,alt:t.snippet.title,video:t,selectedVideo:function(){return e.selectedVideo(t.id.videoId)}})});return i.a.createElement("ul",{className:"col-md-4 list-group"},t)},f=a(11),b=a.n(f),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.videoSearch("surfing")}},{key:"videoSearch",value:function(e){var t=this;b()({key:"AIzaSyC-zg-J0JYavdkcnuS3_gvHjt_aWWBMMbI",term:e},function(e){t.setState({videos:e,selectedVideo:e[0]})})}},{key:"onSearch",value:function(e,t){e.preventDefault(),this.videoSearch(t)}},{key:"selectedVideo",value:function(e){var t=this.state.videos.find(function(t){return t.id.videoId===e});this.setState({selectedVideo:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m,{onSearch:function(t,a){return e.onSearch(t,a)}}),i.a.createElement("div",{className:"row"},i.a.createElement(v,{video:this.state.selectedVideo}),i.a.createElement(p,{selectedVideo:function(t){return e.selectedVideo(t)},videos:this.state.videos})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.9f0e3227.chunk.js.map