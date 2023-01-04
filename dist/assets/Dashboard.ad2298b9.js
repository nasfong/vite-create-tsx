import{R as y,r as f,j as z,a as p,b as ze}from"./index.65bb9303.js";var he=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var a=s[i];n.call(r,a[1],a[0])}},t}()}(),ne=typeof window<"u"&&typeof document<"u"&&window.document===document,J=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),De=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(J):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),je=2;function Fe(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&o()}function a(){De(s)}function o(){var c=Date.now();if(n){if(c-i<je)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=c}return o}var Be=20,Ge=["top","right","bottom","left","width","height","size","weight"],Le=typeof MutationObserver<"u",We=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Fe(this.refresh.bind(this),Be)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ne||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Le?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ne||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Ge.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),de=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},G=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||J},ve=ee(0,0,0,0);function V(e){return parseFloat(e)||0}function fe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+V(s)},0)}function Ue(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],a=e["padding-"+s];n[s]=V(a)}return n}function He(e){var t=e.getBBox();return ee(0,0,t.width,t.height)}function qe(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ve;var r=G(e).getComputedStyle(e),i=Ue(r),s=i.left+i.right,a=i.top+i.bottom,o=V(r.width),c=V(r.height);if(r.boxSizing==="border-box"&&(Math.round(o+s)!==t&&(o-=fe(r,"left","right")+s),Math.round(c+a)!==n&&(c-=fe(r,"top","bottom")+a)),!$e(e)){var _=Math.round(o+s)-t,v=Math.round(c+a)-n;Math.abs(_)!==1&&(o-=_),Math.abs(v)!==1&&(c-=v)}return ee(i.left,i.top,o,c)}var Qe=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof G(e).SVGGraphicsElement}:function(e){return e instanceof G(e).SVGElement&&typeof e.getBBox=="function"}}();function $e(e){return e===G(e).document.documentElement}function Ke(e){return ne?Qe(e)?He(e):qe(e):ve}function Xe(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(s.prototype);return de(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function ee(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ze=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ee(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ke(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Ye=function(){function e(t,n){var r=Xe(n);de(this,{target:t,contentRect:r})}return e}(),Je=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new he,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof G(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ze(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof G(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Ye(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),pe=typeof WeakMap<"u"?new WeakMap:new he,_e=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=We.getInstance(),r=new Je(t,n,this);pe.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){_e.prototype[e]=function(){var t;return(t=pe.get(this))[e].apply(t,arguments)}});var ge=function(){return typeof J.ResizeObserver<"u"?J.ResizeObserver:_e}(),q={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-q.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?q.Bounce.In(e*2)*.5:q.Bounce.Out(e*2-1)*.5+.5}}},H;typeof self>"u"&&typeof process<"u"&&process.hrtime?H=function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?H=self.performance.now.bind(self.performance):Date.now!==void 0?H=Date.now:H=function(){return new Date().getTime()};var k=H,be=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,n){t===void 0&&(t=k()),n===void 0&&(n=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var s=this._tweens[r[i]],a=!n;s&&s.update(t,a)===!1&&!n&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),B={Linear:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),s=B.Utils.Linear;return t<0?s(e[0],e[1],r):t>1?s(e[n],e[n-1],n-r):s(e[i],e[i+1>n?n:i+1],r-i)},Bezier:function(e,t){for(var n=0,r=e.length-1,i=Math.pow,s=B.Utils.Bernstein,a=0;a<=r;a++)n+=i(1-t,r-a)*i(t,a)*e[a]*s(r,a);return n},CatmullRom:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),s=B.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(i=Math.floor(r=n*(1+t))),s(e[(i-1+n)%n],e[i],e[(i+1)%n],e[(i+2)%n],r-i)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-r)-e[0]):t>1?e[n]-(s(e[n],e[n],e[n-1],e[n-1],r-n)-e[n]):s(e[i?i-1:0],e[i],e[n<i+1?n:i+1],e[n<i+2?n:i+2],r-i)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=B.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var r=t;r>1;r--)n*=r;return e[t]=n,n}}(),CatmullRom:function(e,t,n,r,i){var s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}}},re=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),ye=new be,Ve=function(){function e(t,n){n===void 0&&(n=ye),this._object=t,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=q.Linear.None,this._interpolationFunction=B.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=re.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,n){return this._valuesEnd=Object.create(t),n!==void 0&&(this._duration=n),this},e.prototype.duration=function(t){return this._duration=t,this},e.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?k()+parseFloat(t):t:k(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},e.prototype._setupProperties=function(t,n,r,i){for(var s in r){var a=t[s],o=Array.isArray(a),c=o?"array":typeof a,_=!o&&Array.isArray(r[s]);if(!(c==="undefined"||c==="function")){if(_){var v=r[s];if(v.length===0)continue;v=v.map(this._handleRelativeValue.bind(this,a)),r[s]=[a].concat(v)}if((c==="object"||o)&&a&&!_){n[s]=o?[]:{};for(var m in a)n[s][m]=a[m];i[s]=o?[]:{},this._setupProperties(a,n[s],r[s],i[s])}else typeof n[s]>"u"&&(n[s]=a),o||(n[s]*=1),_?i[s]=r[s].slice().reverse():i[s]=n[s]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=k()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=k()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return this._group=t,this},e.prototype.delay=function(t){return this._delayTime=t,this},e.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return this._yoyo=t,this},e.prototype.easing=function(t){return this._easingFunction=t,this},e.prototype.interpolation=function(t){return this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,n){if(t===void 0&&(t=k()),n===void 0&&(n=!0),this._isPaused)return!0;var r,i,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;n&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var a=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,n,r,i){for(var s in r)if(n[s]!==void 0){var a=n[s]||0,o=r[s],c=Array.isArray(t[s]),_=Array.isArray(o),v=!c&&_;v?t[s]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(t[s],a,o,i):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[s]=a+(o-a)*i))}},e.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},e.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],r=this._valuesEnd[t];typeof r=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(r):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},e}(),et="18.6.4",tt=re.nextId,x=ye,nt=x.getAll.bind(x),rt=x.removeAll.bind(x),it=x.add.bind(x),st=x.remove.bind(x),at=x.update.bind(x),E={Easing:q,Group:be,Interpolation:B,now:k,Sequence:re,nextId:tt,Tween:Ve,VERSION:et,getAll:nt,removeAll:rt,add:it,remove:st,update:at};function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}var we=function(t,n){return n&&n<y.Children.count(t)?n:0},ot=function(t,n){if(typeof window<"u"&&Array.isArray(n))return n.find(function(r){return r.breakpoint<=t})},le={linear:E.Easing.Linear.None,ease:E.Easing.Quadratic.InOut,"ease-in":E.Easing.Quadratic.In,"ease-out":E.Easing.Quadratic.Out,cubic:E.Easing.Cubic.InOut,"cubic-in":E.Easing.Cubic.In,"cubic-out":E.Easing.Cubic.Out},me=function(t){return t?le[t]:le.linear},Se=function(t,n,r){var i=t.prevArrow,s=t.infinite,a=n<=0&&!s,o={"data-type":"prev","aria-label":"Previous Slide",disabled:a,onClick:r};if(i)return y.cloneElement(i,Q({className:(i.props.className||"")+" nav "+(a?"disabled":"")},o));var c="nav default-nav "+(a?"disabled":"");return p("button",{...Object.assign({type:"button",className:c},o),children:p("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:p("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})})})},Te=function(t,n,r){var i=t.nextArrow,s=t.infinite,a=t.children,o=1;"slidesToScroll"in t&&(o=t.slidesToScroll||1);var c=n>=y.Children.count(a)-o&&!s,_={"data-type":"next","aria-label":"Next Slide",disabled:c,onClick:r};if(i)return y.cloneElement(i,Q({className:(i.props.className||"")+" nav "+(c?"disabled":"")},_));var v="nav default-nav "+(c?"disabled":"");return p("button",{...Object.assign({type:"button",className:v},_),children:p("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:p("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})})})},ut=function(t,n,r){return p("li",{children:p("button",{...Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},r)})},n)},ct=function(t,n,r,i){return y.cloneElement(i,Q({className:i.props.className+" "+(t?"active":""),key:n},r))},Oe=function(t,n,r,i){var s=t.children,a=t.indicators,o=1;i?o=i==null?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(o=t.slidesToScroll||1);var c=Math.ceil(y.Children.count(s)/o);return p("ul",{className:"indicators",children:Array.from({length:c},function(_,v){var m={"data-key":v,"aria-label":"Go to slide "+(v+1),onClick:r},w=Math.floor((n+o-1)/o)===v;return typeof a=="function"?ct(w,v,m,a(v)):ut(w,v,m)})})},te={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},ie=y.forwardRef(function(e,t){var n=f.exports.useState(we(e.children,e.defaultIndex)),r=n[0],i=n[1],s=f.exports.useRef(null),a=f.exports.useRef(null),o=f.exports.useRef(new E.Group),c=f.exports.useRef(),_=f.exports.useRef(),v=f.exports.useMemo(function(){return y.Children.count(e.children)},[e.children]),m=f.exports.useCallback(function(){if(a.current&&s.current){var g=s.current.clientWidth,l=g*v;a.current.style.width=l+"px";for(var b=0;b<a.current.children.length;b++){var S=a.current.children[b];S&&(S.style.width=g+"px",S.style.left=b*-g+"px",S.style.display="block")}}},[s,a,v]),w=f.exports.useCallback(function(){s.current&&(_.current=new ge(function(g){!g||m()}),_.current.observe(s.current))},[s,m]),O=f.exports.useCallback(function(){var g=e.autoplay,l=e.children,b=e.duration,S=e.infinite;g&&y.Children.count(l)>1&&(S||r<y.Children.count(l)-1)&&(c.current=setTimeout(R,b))},[e,r]);f.exports.useEffect(function(){return w(),function(){o.current.removeAll(),clearTimeout(c.current),T()}},[w,o]),f.exports.useEffect(function(){clearTimeout(c.current),O()},[r,e.autoplay,O]),f.exports.useEffect(function(){m()},[v,m]),f.exports.useImperativeHandle(t,function(){return{goNext:function(){R()},goBack:function(){P()},goTo:function(l,b){b!=null&&b.skipTransition?i(l):L(l)}}});var T=function(){_.current&&s.current&&_.current.unobserve(s.current)},A=function(){e.pauseOnHover&&clearTimeout(c.current)},C=function(){var l=e.pauseOnHover,b=e.autoplay,S=e.duration;l&&b&&(c.current=setTimeout(function(){return R()},S))},R=function(){var l=e.children,b=e.infinite;!b&&r===y.Children.count(l)-1||D((r+1)%y.Children.count(l))},P=function(){var l=e.children,b=e.infinite;!b&&r===0||D(r===0?y.Children.count(l)-1:r-1)},N=function(l){var b=l.currentTarget;b.dataset.type==="prev"?P():R()},M=function g(){requestAnimationFrame(g),o.current.update()},D=function(l){var b=o.current.getAll();if(!b.length){var S;(S=a.current)!=null&&S.children[l]||(l=0),clearTimeout(c.current);var W={opacity:0,scale:1};M();var K=new E.Tween(W,o.current).to({opacity:1,scale:e.scale},e.transitionDuration).onUpdate(function(j){!a.current||(a.current.children[l].style.opacity=j.opacity,a.current.children[r].style.opacity=1-j.opacity,a.current.children[r].style.transform="scale("+j.scale+")")}).start();K.easing(me(e.easing)),K.onComplete(function(){a.current&&(i(l),a.current.children[r].style.transform="scale(1)"),typeof e.onChange=="function"&&e.onChange(r,l)})}},L=function(l){l!==r&&D(l)},$=function(l){var b=l.currentTarget;!b.dataset.key||parseInt(b.dataset.key)!==r&&L(parseInt(b.dataset.key))};return z("div",{dir:"ltr","aria-roledescription":"carousel",children:[z("div",{className:"react-slideshow-container "+(e.cssClass||""),onMouseEnter:A,onMouseOver:A,onMouseLeave:C,children:[e.arrows&&Se(e,r,N),p("div",{className:"react-slideshow-fadezoom-wrapper "+e.cssClass,ref:s,children:p("div",{className:"react-slideshow-fadezoom-images-wrap",ref:a,children:(y.Children.map(e.children,function(g){return g})||[]).map(function(g,l){return p("div",{style:{opacity:l===r?"1":"0",zIndex:l===r?"1":"0"},"data-index":l,"aria-roledescription":"slide","aria-hidden":l===r?"false":"true",children:g},l)})})}),e.arrows&&Te(e,r,N)]}),e.indicators&&Oe(e,r,$)]})});ie.defaultProps=te;var Ee=y.forwardRef(function(e,t){return p(ie,{...Object.assign({},e,{scale:1,ref:t})})});Ee.defaultProps=te;var ft=y.forwardRef(function(e,t){return p(ie,{...Object.assign({},e,{ref:t})})});ft.defaultProps=te;var lt=y.forwardRef(function(e,t){var n=f.exports.useState(we(e.children,e.defaultIndex)),r=n[0],i=n[1],s=f.exports.useState(0),a=s[0],o=s[1],c=f.exports.useRef(null),_=f.exports.useRef(null),v=f.exports.useRef(new E.Group),m=f.exports.useMemo(function(){return ot(a,e.responsive)},[a,e.responsive]),w=f.exports.useMemo(function(){return m?m.settings.slidesToScroll:e.slidesToScroll||1},[m,e.slidesToScroll]),O=f.exports.useMemo(function(){return m?m.settings.slidesToShow:e.slidesToShow||1},[m,e.slidesToShow]),T=f.exports.useMemo(function(){return y.Children.count(e.children)},[e.children]),A=f.exports.useMemo(function(){return a/O},[a,O]),C=f.exports.useRef(),R=f.exports.useRef(),P,N=!1,M=0,D=f.exports.useCallback(function(){if(_.current){var h=a*_.current.children.length;_.current.style.width=h+"px";for(var u=0;u<_.current.children.length;u++){var d=_.current.children[u];d&&(d.style.width=A+"px",d.style.display="block")}}},[a,A]),L=f.exports.useCallback(function(){c.current&&(R.current=new ge(function(h){!h||Me()}),R.current.observe(c.current))},[c]),$=f.exports.useCallback(function(){var h=e.autoplay,u=e.infinite,d=e.duration;h&&(u||r<T-1)&&(C.current=setTimeout(S,d))},[e,T,r]);f.exports.useEffect(function(){D()},[a,D]),f.exports.useEffect(function(){return L(),function(){v.current.removeAll(),clearTimeout(C.current),g()}},[c,L,v]),f.exports.useEffect(function(){clearTimeout(C.current),$()},[r,a,e.autoplay,$]),f.exports.useImperativeHandle(t,function(){return{goNext:function(){S()},goBack:function(){W()},goTo:function(u,d){d!=null&&d.skipTransition?i(u):j(u)}}});var g=function(){R&&c.current&&R.current.unobserve(c.current)},l=function(){e.pauseOnHover&&clearTimeout(C.current)},b=function(u){if(e.canSwipe&&N){var d;if(window.TouchEvent&&u.nativeEvent instanceof TouchEvent?d=u.nativeEvent.touches[0].pageX:u.nativeEvent instanceof MouseEvent&&(d=u.nativeEvent.clientX),d&&P){var F=A*(r+Y()),U=d-P;if(!e.infinite&&r===T-w&&U<0||!e.infinite&&r===0&&U>0)return;M=U,F-=M,_.current.style.transform="translate(-"+F+"px)"}}},S=function(){if(!(!e.infinite&&r===T-w)){var u=se(r+w);Z(u)}},W=function(){if(!(!e.infinite&&r===0)){var u=r-w;u%w&&(u=Math.ceil(u/w)*w),Z(u)}},K=function(u){var d=u.currentTarget;if(!!d.dataset.key){var F=parseInt(d.dataset.key);j(F*w)}},j=function(u){Z(se(u))},se=function(u){return u<T&&u+w>T&&(T-w)%w?T-w:u},xe=function(){N?X():e.pauseOnHover&&e.autoplay&&(C.current=setTimeout(S,e.duration))},ae=function(u){var d=u.currentTarget.dataset;d.type==="next"?S():W()},Ce=function(){return y.Children.toArray(e.children).slice(-O).map(function(u,d){return p("div",{"data-index":d-O,"aria-roledescription":"slide","aria-hidden":"true",children:u},d-O)})},Re=function(){if(!(!e.infinite&&O===w))return y.Children.toArray(e.children).slice(0,O).map(function(u,d){return p("div",{"data-index":T+d,"aria-roledescription":"slide","aria-hidden":"true",children:u},T+d)})},Me=function(){c.current&&o(c.current.clientWidth)},oe=function(u){e.canSwipe&&(window.TouchEvent&&u.nativeEvent instanceof TouchEvent?P=u.nativeEvent.touches[0].pageX:u.nativeEvent instanceof MouseEvent&&(P=u.nativeEvent.clientX),clearTimeout(C.current),N=!0)},X=function(){e.canSwipe&&(N=!1,Math.abs(M)/a>.2?M<0?S():W():Math.abs(M)>0&&Z(r,300))},Ie=function h(){requestAnimationFrame(h),v.current.update()},Z=function(u,d){var F=d||e.transitionDuration,U=r,Ne=v.current.getAll();if(!!c.current){var ue=c.current.clientWidth/O;if(!Ne.length){clearTimeout(C.current);var ke={margin:-ue*(U+Y())+M},ce=new E.Tween(ke,v.current).to({margin:-ue*(u+Y())},F).onUpdate(function(I){_.current&&(_.current.style.transform="translate("+I.margin+"px)")}).start();ce.easing(me(e.easing)),Ie(),ce.onComplete(function(){M=0;var I=u;I<0?I=T-w:I>=T&&(I=0),typeof e.onChange=="function"&&e.onChange(r,I),i(I)})}}},Ae=function(u){return u<r+O&&u>=r},Y=function(){return e.infinite?O:0},Pe={transform:"translate(-"+(r+Y())*A+"px)"};return z("div",{dir:"ltr","aria-roledescription":"carousel",children:[z("div",{className:"react-slideshow-container",onMouseEnter:l,onMouseOver:l,onMouseLeave:xe,onMouseDown:oe,onMouseUp:X,onMouseMove:b,onTouchStart:oe,onTouchEnd:X,onTouchCancel:X,onTouchMove:b,children:[e.arrows&&Se(e,r,ae),p("div",{className:"react-slideshow-wrapper slide "+(e.cssClass||""),ref:c,children:z("div",{className:"images-wrap",style:Pe,ref:_,children:[e.infinite&&Ce(),(y.Children.map(e.children,function(h){return h})||[]).map(function(h,u){var d=Ae(u);return p("div",{"data-index":u,className:d?"active":"","aria-roledescription":"slide","aria-hidden":d?"false":"true",children:h},u)}),Re()]})}),e.arrows&&Te(e,r,ae)]}),e.indicators&&Oe(e,r,K,m)]})});lt.defaultProps=te;const ht={duration:1e3,transitionDuration:1e3,infinite:!0,indicators:!1,scale:.4,arrows:!1},dt="/images/noImage.jpg",vt=()=>{const[e,t]=f.exports.useState(!1),[n,r]=f.exports.useState([{image:dt}]);return f.exports.useEffect(()=>{t(!0),ze.get("/game").then(i=>{r(i.data.data),t(!1)}).catch(i=>console.log(i.message))},[]),p("div",{className:"slide-container w-75 h-400px",children:e?p("div",{className:"position-absolute top-50 start-50 spinner-border text-primary "}):p(Ee,{...ht,children:n.map((i,s)=>z("div",{className:"each-fade ",children:[p("div",{className:"image-container",children:p("img",{src:i.image,className:"img-dash"})}),p("h2",{className:"text-center",children:i.name})]},s))})})},_t=()=>(f.exports.useState([]),f.exports.useEffect(()=>{},[]),p("div",{className:"m-1",children:z("div",{className:"row",children:[p("div",{className:"card card-body col-6 border",children:p(vt,{})}),p("div",{className:"card card-body col-6"})]})}));export{_t as default};