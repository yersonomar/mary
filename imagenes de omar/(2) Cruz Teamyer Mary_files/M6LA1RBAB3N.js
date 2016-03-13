/*!CK:2868737534!*//*1457321399,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fPUE6"]); }

__d('BlueBarFocusListener',['CSS','Deferred','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='f_key',i='f_click',j=null,k=function(){j=null;};function l(r){c('CSS').removeClass(r,h);c('CSS').removeClass(r,i);}function m(r){if(j)j.reject();j=new (c('Deferred'))();j.then(function(s){l(r);c('CSS').addClass(r,s);}).done(k,k);}function n(){if(j)j.resolve(h);}function o(r){if(j)j.reject();c('CSS').removeClass(r,h);c('CSS').addClass(r,i);}function p(r){return function(event){r(event.getTarget());};}var q={listen:function(r){if(!r)return;c('Event').listen(r,'focusout',p(l));c('Event').listen(r,'focusin',p(m));c('Event').listen(r,'click',p(o));c('Event').listen(r,'keyup',n);}};f.exports=q;},null);
__d('RoyalBluebar',['Arbiter','Event','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={_subscriptionHandler:null,_getSubscriptionHandler:function(){if(!this._subscriptionHandler){this._subscriptionHandler=new (c('SubscriptionsHandler'))();c('Run').onUnload(function(){this._subscriptionHandler.release();this._subscriptionHandler=null;}.bind(this));}return this._subscriptionHandler;},informOnClick:function(i){this._getSubscriptionHandler().addSubscriptions(c('Event').listen(i,'click',function(event){if(c('Arbiter').inform('BlueBar/homeClick',event)===false)event.preventDefault();}));}};f.exports=h;},null);
__d('NotificationSeenState',['NotificationConstants','NotificationUpdates','createObjectFrom'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=1,j=2,k=0,l=i,m=i|j,n=c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,o={UNSEEN_AND_UNREAD:k,SEEN_BUT_UNREAD:l,SEEN_AND_READ:m};function p(s){var t=[],u=[];Object.keys(s).forEach(function(v){var w=s[v],x=h[v];h[v]=w;if(x===undefined){t.push(v);u.push(v);return;}var y=x^w;if(y&i)t.push(v);if(y&j)u.push(v);});t.length&&c('NotificationUpdates').didUpdateSeenState(t);u.length&&c('NotificationUpdates').didUpdateReadState(u);}c('NotificationUpdates').subscribe('update-notifications',function(s,t){var u=t.nodes;if(!u||!u.length)return;var v=t.payloadsource,w=c('NotificationConstants').PayloadSourceType,x=v==w.ENDPOINT,y={};t.nodes.forEach(function(z){var aa=z.alert_id;if(!x||h[aa]===undefined)y[aa]=o[z.seen_state];});p(y);});c('NotificationUpdates').subscribe('update-seen',function(s,t){if(!t.seenState)return;var u=[],v={};Object.keys(t.seenState).forEach(function(x){if(!t.seenState[x]){u.push(x);return;}var y=h[x];if(y!==undefined)v[x]=y|i;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,k),v);p(w);});c('NotificationUpdates').subscribe('update-read',function(s,t){if(!t.readState)return;var u=[],v={};Object.keys(t.readState).forEach(function(x){if(t.readState[x]){u.push(x);return;}var y=h[x];if(y!==undefined){v[x]=y&~j;}else if(t.payloadsource==n)v[x]=l;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,m),v);p(w);});function q(s){var t=h[s];return t;}var r={isRead:function(s){return q(s)===m;},isSeen:function(s){return q(s)!==k;},getUnseenCount:function(){return r.getUnseenIDs().length;},getUnseenIDs:function(){return Object.keys(h).filter(function(s){return h[s]===k;});},getUnreadCount:function(){return r.getUnreadIDs().length;},getUnreadIDs:function(){return Object.keys(h).filter(function(s){return h[s]!==m;});}};f.exports=r;},null);
__d('NotificaionJewelControllerModuleLoader',['JSResource','NotificationSeenState','NotificationStore','NotificationUpdates'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('NotificationSeenState');c('NotificationStore');c('NotificationUpdates');f.exports=c('JSResource')('NotificationJewelController');},null);
__d('NotificationJewelHeaderController',['DOM','Event','NotificationSeenState','NotificationUserActions','NotificationUpdates'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';c('Event').listen(i,'click',function(){var k=c('NotificationSeenState').getUnreadIDs();if(k.length)c('NotificationUserActions').markNotificationsAsRead(k);});c('NotificationUpdates').subscribe('read-state-updated',function(){if(j)c('DOM').setContent(j,c('NotificationSeenState').getUnreadCount());});}f.exports=h;},null);
__d('NotificationJewelListController',['Bootloader','React','ReactDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=null;function j(k,l){'use strict';this.$NotificationJewelListController1=k;this.$NotificationJewelListController2=l;this.$NotificationJewelListController3=false;this.$NotificationJewelListController4=false;}j.prototype.open=function(){'use strict';this.$NotificationJewelListController3=true;this.$NotificationJewelListController5();};j.prototype.pause=function(){'use strict';this.$NotificationJewelListController4=true;this.$NotificationJewelListController5();};j.prototype.unpause=function(){'use strict';this.$NotificationJewelListController4=false;this.$NotificationJewelListController5();};j.prototype.$NotificationJewelListController5=function(){'use strict';if(!h||!i){c('Bootloader').loadModules(["NotificationList.react","NotificationJewelList.react"],function(k,l){h=k;i=l;this.$NotificationJewelListController6();}.bind(this));}else this.$NotificationJewelListController6();};j.prototype.$NotificationJewelListController6=function(){'use strict';c('ReactDOM').render(c('React').createElement(h,{hasEverBeenOpened:this.$NotificationJewelListController3,paused:this.$NotificationJewelListController4,tracking:this.$NotificationJewelListController2.tracking,negativeTracking:this.$NotificationJewelListController2.negativeTracking,shortenTimestamp:this.$NotificationJewelListController2.shortenTimestamp,businessID:this.$NotificationJewelListController2.businessID,maxHeight:this.$NotificationJewelListController2.maxHeight,useChevron:this.$NotificationJewelListController2.useChevron,chevronType:this.$NotificationJewelListController2.chevronType,numPerPage:5,listRenderer:i,upsell:this.$NotificationJewelListController2.upsell||null,endpoint:this.$NotificationJewelListController2.endpoint}),this.$NotificationJewelListController1);};f.exports=j;},null);
__d('IdleCallbackImplementation',['performanceNow','requestAnimationFrameAcrossTransitions','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i=0,j=0,k=-1,l=false,m=1000/60,n=2;function o(y,z){var aa=j++;h[aa]=y;q();if(z!=null&&z.timeout>0)c('setTimeoutAcrossTransitions')(function(){return w(aa);},z.timeout);return aa;}function p(y){h[y]=null;}function q(){if(!l){l=true;c('requestAnimationFrameAcrossTransitions')(function(y){l=false;s(c('performanceNow')()-y);});}}function r(y){var z=m-n;if(y<z)return z-y;var aa=y%m;if(aa>z||aa<n){return 0;}else return z-aa;}function s(y){var z=c('performanceNow')();if(z>k){var aa=r(y);if(aa>0){var ba=z+aa;v(ba);k=ba;}}if(t())q();}function t(){return i<h.length;}function u(){while(t()){var y=h[i];i++;if(y)return y;}}function v(y){var z=undefined;while(c('performanceNow')()<y&&(z=u()))z(new x(y));}function w(y){var z=h[y];if(z){p(y);z(new x(null));}}function x(y){'use strict';this.didTimeout=y==null;this.$IdleCallbackDeadline1=y;}x.prototype.timeRemaining=function(){'use strict';var y=this.$IdleCallbackDeadline1;if(y!=null){var z=c('performanceNow')();if(z<y)return y-z;}return 0;};f.exports={requestIdleCallback:o,cancelIdleCallback:p};},null);
__d('cancelIdleCallback',['TimerStorage','IdleCallbackImplementation'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK,i[0]);return Function.prototype.apply.call(c('IdleCallbackImplementation').cancelIdleCallback,b,i);};},null);
__d('replaceNativeTimer',['clearInterval','clearTimeout','setInterval','setTimeout'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(){if(!h){h=true;c('setTimeout').nativeBackup=b.setTimeout;c('clearTimeout').nativeBackup=b.clearTimeout;c('setInterval').nativeBackup=b.setInterval;c('clearInterval').nativeBackup=b.clearInterval;b.setTimeout=c('setTimeout');b.clearTimeout=c('clearTimeout');b.setInterval=c('setInterval');b.clearInterval=c('clearInterval');}}f.exports=i;},null);
__d('ContextualHelpSearchController',['Event','AsyncRequest','DOM','CSS','Focus','Input'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=400;function i(j,k,l,m,n,o){this._token=null;this._timerID=0;this._lastQuery=null;this.loader=j;this.search_box=k;this.topics_area=l;this.results_area=m;this.clear_button=n;this.typing_listener=c('Event').listen(this.search_box,'keyup',this.setTimer.bind(this));this.clear_listener=c('Event').listen(this.clear_button,'click',this.clearResults.bind(this));if(o==null||o.focusSearchBox==null||o.focusSearchBox)c('Focus').set(this.search_box);this.async_request=null;}Object.assign(i.prototype,{source:'contextual_help',clearResults:function(){this.show(this.topics_area);this._lastQuery='';c('Input').reset(this.search_box);c('Focus').set(this.search_box);if(this.async_request!==null){this.async_request.abort();this.async_request=null;}c('CSS').addClass(this.clear_button,'hidden_elem');},update:function(){var j=c('Input').getValue(this.search_box);if(j===this._lastQuery)return;this._lastQuery=j;if(j===''){this.clearResults();return;}this.show(this.loader);var k={query:j,width:this._width||h,source:this.source};this.async_request=new (c('AsyncRequest'))('/help/ajax/search/').setData(k).setHandler(function(l){this._update(l);}.bind(this));this.async_request.send();},_update:function(j){this.async_request=null;var k=j.getPayload().results;c('DOM').setContent(this.results_area,k);this.show(this.results_area);if(c('Input').getValue(this.search_box)===''){this.clearResults();}else c('CSS').removeClass(this.clear_button,'hidden_elem');},setTimer:function(){if(this._timerID!==0)clearTimeout(this._timerID);this._timerID=setTimeout(this.update.bind(this),300);if(this.async_request!=null){this.async_request.abort();this.async_request=null;}},show:function(j){var k=[this.loader,this.topics_area,this.results_area];for(var l=0;l<k.length;l++)c('CSS').addClass(k[l],'hidden_elem');c('CSS').removeClass(j,'hidden_elem');}});f.exports=i;},null);
__d('RequestsJewelLoader',['JSResource'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('JSResource')('RequestsJewel');},null);
__d('JewelPlaceholder',['CSS','Toggler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(j,k,l){'use strict';this.jewelNode=j;this.jewelParent=l;this.$JewelPlaceholder1=k;this.$JewelPlaceholder2=false;this.$JewelPlaceholder3=c('Toggler').getInstance(j).setSticky(false);c('Toggler').listen('show',j,function(){this.$JewelPlaceholder2=true;c('CSS').addClass(this.jewelParent,'openToggler');}.bind(this));c('Toggler').listen('hide',j,function(){this.$JewelPlaceholder2=false;c('CSS').removeClass(this.jewelParent,'openToggler');}.bind(this));}i.prototype.isOpened=function(){'use strict';return this.$JewelPlaceholder2;};i.registerJewel=function(j,k,l){'use strict';var m=new this(j,k,l);h[k]=m;return m;};i.switchOutJewel=function(j,k){'use strict';if(h[j]){var l=h[j].isOpened();delete h[j];return l;}return false;};f.exports=i;},null);
__d('JewelBase',['csx','Promise','Event','Arbiter','ArbiterMixin','CSS','DOM','HTML','JewelPlaceholder','Keys','TabIsolation','Toggler','TooltipData','Run','emptyFunction','reportData'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function(j,k){j&&k&&this.init(j,k);};Object.assign(i,{_instancesByName:{}});Object.assign(i.prototype,c('ArbiterMixin'),{init:function(j,k){this.name=k.name;this.label=k.label;this.root=j;this.badge=k.badge;this.countNew=0;this.initialCount=0;this.escHandler=null;this.bootload_module=k.bootload_module;this.bootload_args=k.bootload_args;this.bootloading=null;this.togglerInstance=c('Toggler').getInstance(j).setSticky(false);c('Run').onAfterLoad(function(){return this._setupBootload();}.bind(this));if(k.keepOpenForSnowlift)this.togglerInstance.setPrePageTransitionCallback(this._onPrePageTransition.bind(this));i._instancesByName[this.name]=this;var l=this.getFlyout(),m=new (c('TabIsolation'))(l);c('Toggler').createInstance(l).setSticky(false);this._addTooltip();c('Toggler').listen('show',this.root,function(n){this._logFirstClick();this.hasNew()&&this.markSeen();this.reset();c('Arbiter').inform('layer_shown',{type:'Jewel'});m.enable();this.setupEvents();this._removeTooltip();return this._setupBootload().then(function(){this.inform('opened');}.bind(this));}.bind(this));c('Toggler').listen('hide',this.root,function(n,o){this.hasNew()&&this.markSeen();this.reset();this.inform('closed');c('Arbiter').inform('layer_hidden',{type:'Jewel'});m.disable();this.removeEvents();this._addTooltip();}.bind(this));c('Arbiter').subscribe('jewel/count-updated',function(n,o){o.jewel==this.name&&this.update(o);}.bind(this));c('Arbiter').subscribe('jewel/focus',function(n,o){if(this.isOpen())c('Toggler').hide(this.root);}.bind(this));if(c('JewelPlaceholder').switchOutJewel(this.name))c('Toggler').show(this.root);},getRoot:function(){return this.root;},getFlyout:function(){if(typeof this._flyout==='undefined')this._flyout=c('DOM').find(this.root,".__tw");return this._flyout;},hasNew:function(){return c('CSS').hasClass(this.root,'hasNew');},isOpen:function(){return c('CSS').hasClass(this.root,'openToggler');},reset:function(){c('CSS').removeClass(this.root,'hasNew');},setContent:function(j){var k=c('DOM').find(this.root,'ul.jewelItemList');c('DOM').setContent(k,c('HTML')(j));},update:function(j){this.countNew=j.count;if(typeof this.countNew==='number'&&this.countNew<0)this.countNew=0;this.badge.setLegacyContent(this.countNew);var k=isNaN(this.countNew)||this.countNew>0;c('CSS').conditionClass(this.root,'hasNew',k);this.inform('updated',j);},setupEvents:function(){this.escHandler=c('Event').listen(document.documentElement,'keydown',function(j){if(j.keyCode===c('Keys').ESC&&this.isOpen())c('Toggler').hide(this.root);}.bind(this));},removeEvents:function(){if(this.escHandler){this.escHandler.remove();this.escHandler=null;}},markSeen:function(){c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:0},c('Arbiter').BEHAVIOR_STATE);this.inform('marked-seen');},_getButton:function(){if(typeof this._button==='undefined')this._button=c('DOM').find(this.root,"a.jewelButton");return this._button;},_addTooltip:function(){var j=this._getButton();c('TooltipData').set(j,this.label);j.setAttribute('data-tooltip-delay','500');},_removeTooltip:function(){c('TooltipData').remove(this._getButton());},_onPrePageTransition:function(j,k){if(!this._isSnowliftURI(k.from)&&!this._isSnowliftURI(k.to))this.togglerInstance&&this.togglerInstance.hide();},_isSnowliftURI:function(j){return j&&j.getQueryData().hasOwnProperty('theater');},_logFirstClick:function(){this._logFirstClick=c('emptyFunction');c('reportData')('jewel_click',{gt:{count:this.countNew,initial:this.initialCount,jewel:this.name}});},_setupBootload:function(){if(!this.bootload_module)return c('Promise').resolve();if(!this.bootloading)this.bootloading=new (c('Promise'))(function(j,k){this.bootload_module.load().then(function(l){new l(this,this.bootload_args);j();}.bind(this))['catch'](k);}.bind(this));return this.bootloading;}});f.exports=i;},null);
__d('ModalMask',['DOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=0,j={show:function(){i++;if(!h){h=c('DOM').create('div',{id:'modalMaskOverlay'});c('DOM').appendContent(document.body,h);}},hide:function(){if(i){i--;if(!i&&h){c('DOM').remove(h);h=null;}}},getNode:function(){return h;}};f.exports=j;},null);
__d('LitestandChromeHomeCount',['cx','Arbiter','AsyncRequest','CSS','DOM','Event','LitestandMessages','Style','UserAgent'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=300000,j={},k,l;function m(){l&&clearTimeout(l);if(k)return;l=setTimeout(n,i);}function n(){if(k)return;new (c('AsyncRequest'))().setURI('/ajax/litestand/newsfeed_count').setHandler(function(q){if(k)return;p.setCount(q.getPayload());m();}).setAllowCrossPageTransition(true).send();}function o(q){c('Style').set(j.wrapNode,'max-width',q===0?'0':null);c('CSS').conditionClass(j.wrapNode,"_461d",q>0);var r=q>j.max?j.max+'+':q;c('DOM').setContent(j.countNode,r);}var p={init:function(q){j=q;c('Event').listen(j.homeNode,'click',function(event){var r=event.getModifiers(),s=r.shift,t=r.meta,u=r.control;if(s||c('UserAgent').isPlatform('Mac OS X')&&t||c('UserAgent').isPlatform('Windows')&&u)o(0);});c('Arbiter').subscribe(c('LitestandMessages').NEWSFEED_LOAD,function(){k=true;this.setCount(0);}.bind(this));c('Arbiter').subscribe(c('LitestandMessages').LEAVE_HOME,function(){k=false;m();});m();},setCount:function(q){o(k?0:q);}};f.exports=p;},null);
__d('MercuryJewelModuleLoader',['JSResource'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('JSResource')('MercuryJewel');},null);
__d('AccessibilityShortcut',['AccessibilityLogger','Event','Focus','ge','onEnclosingPageletDestroy','warning'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j){var k=c('Event').listen(i,'click',function(l){l.preventDefault();var m=c('ge')(j);if(m){c('Focus').set(m);c('AccessibilityLogger').logSRKey();}else c('warning')(m,'Failed to set focus on element with ID: %s',j);});c('onEnclosingPageletDestroy')(i,function(){return k.remove();});}};f.exports=h;},null);
__d('QuicklingAugmenter',['URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=new (c('URI'))(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};f.exports=i;},null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','cancelIdleCallback','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','replaceNativeTimer','requireWeak'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j;c('requireWeak')('PageTransitions',function(w){j=w;});var k=c('QuicklingConfig').version,l=c('QuicklingConfig').sessionLength,m=new RegExp(c('QuicklingConfig').inactivePageRegex),n=0,o,p='',q={isActive:function(){return true;},isPageActive:function(w){if(w=='#')return false;w=new (c('URI'))(w);if(w.getDomain()&&w.getDomain()!=new (c('URI'))(window.location.href).getDomain())return false;if(w.getPath()=='/l.php'){var x=w.getQueryData().u;if(x){x=new (c('URI'))(unescape(x)).getDomain();if(x&&x!=new (c('URI'))(window.location.href).getDomain())return false;}}var y=w.getPath(),z=w.getQueryData();if(!c('isEmpty')(z))y+='?'+c('PHPQuerySerializer').serialize(z);return !m.test(y);},getLoadCount:function(){return n;}};function r(w){w=w||'Facebook';c('DocumentTitle').set(w);if(c('UserAgent_DEPRECATED').ie()){p=w;if(!o)o=window.setInterval(function(){var x=p,y=c('DocumentTitle').get();if(x!=y)c('DocumentTitle').set(x);},5000,false);}}function s(w){var x=document.getElementsByTagName('link');for(var y=0;y<x.length;++y){if(x[y].rel!='alternate')continue;c('DOM').remove(x[y]);}if(w.length){var z=c('DOM').find(document,'head');z&&c('DOM').appendContent(z,c('HTML')(w[0]));}}h=babelHelpers.inherits(t,c('AjaxPipeRequest'));i=h&&h.prototype;function t(w){'use strict';var x={version:k};i.constructor.call(this,w,{quickling:x});this._isQuickling=true;}t.prototype._preBootloadFirstResponse=function(w){'use strict';return true;};t.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(j)j.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);i._fireDomContentCallback.call(this);};t.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}i._fireOnloadCallback.call(this);};t.prototype.isPageActive=function(w){'use strict';return q.isPageActive(w);};t.prototype._versionCheck=function(w){'use strict';if(w.version==k)return true;var x=['quickling','ajaxpipe','ajaxpipe_token'];c('goOrReplace')(window.location,new (c('URI'))(w.uri).removeQueryData(x),true);return false;};t.prototype._processFirstResponse=function(w){'use strict';var x=w.getPayload();r(x.title);s(x.syndication||[]);window.scrollTo(0,0);c('CSSClassTransition').go(document.body,x.body_class||'',j.getMostRecentURI(),w.getRequest().getURI());c('Arbiter').inform('quickling/response');};t.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};function u(){n++;return n>=l;}function v(w){c('AjaxPipeRequest').setCurrentRequest(null);if(u())return false;w=c('QuicklingAugmenter').augmentURI(w);if(!q.isPageActive(w))return false;c('TimerStorage').clearAll(c('TimerStorage').ANIMATION_FRAME,c('cancelAnimationFrame'));c('TimerStorage').clearAll(c('TimerStorage').IDLE_CALLBACK,c('cancelIdleCallback'));c('TimerStorage').clearAll(c('TimerStorage').IMMEDIATE,c('clearImmediate'));c('TimerStorage').clearAll(c('TimerStorage').INTERVAL,c('clearInterval'));c('TimerStorage').clearAll(c('TimerStorage').TIMEOUT,c('clearTimeout'));window.ExitTime=Date.now();c('Run').__removeHook(c('PageHooks').ONLOAD_HOOK);c('Run').__removeHook(c('PageHooks').DOMREADY_HOOK);c('PageHooks').runHooks('onleavehooks');c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD,true);new t(w).setCanvasId('content').send();var x=window.__bodyWrapper;if(x.getCodeUsage)x.clearCodeUsage();return true;}c('replaceNativeTimer')();c('Run').onAfterLoad(function w(){c('PageTransitionsRegistrar').registerHandler(v,1);});f.exports=b.Quickling=q;},null);
__d('PagesVoiceBar',['$','Arbiter','AsyncRequest','BlueBar','ChannelConstants','DOM','URI','ViewportBounds'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='PagesVoiceBar/initialized',i='PagesVoiceBar/switchVoice',j='page_transition',k='pages_voice_bar_sync',l=null,m=null,n=false,o=c('ViewportBounds').addTop(0);function p(v,w){new (c('AsyncRequest'))('/ajax/pages/switch_voice.php').setData(w).setHandler(function(x){t();}).send();}function q(){l=null;}function r(v,w){if(w.obj.profile_id&&w.obj.profile_id===l)t();}function s(v){c('Arbiter').subscribe(h,v);}function t(){c('URI').getNextURI().go();}var u={initVoiceBar:function(){if(n)return;m=c('$')('pagesVoiceBarContent');c('Arbiter').subscribe(i,p);c('Arbiter').subscribe(j,q);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(k),r);n=true;c('Arbiter').inform(h,null,c('Arbiter').BEHAVIOR_STATE);},update:function(v,w){s(function(){l=w;c('DOM').setContent(m,v);var x=m.offsetHeight;if(o.getSize()!==x){o.remove();o=c('ViewportBounds').addTop(c('ViewportBounds').getTop()+x);}});}};f.exports=u;},null);
__d('PrivacyLiteFlyoutBootloader',['regeneratorRuntime','Promise','Deferred','JSResource'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i={loadFlyout:function j(){var k,l,m,n,o,p,q,r,event,s,t;return c('regeneratorRuntime').async(function u(v){while(1)switch(v.prev=v.next){case 0:if(!h){v.next=2;break;}return v.abrupt('return');case 2:h=true;v.next=5;return c('regeneratorRuntime').awrap(c('Promise').all([c('JSResource')('PrivacyLiteFlyout').load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:k=v.sent;l=k[0];m=k[1];n=m.flyout;o=m.flyoutRoot;p=m.badge;q=k[2];r=q.footer;event=q.event;s=q.settingsExitPoint;t=q.basicsExitPoint;l.registerFlyoutToggler(n,o,p?p():null);l.registerSettingsAndBasicsLinkLogging(r,event,s,t);l.loadBody();case 19:case 'end':return v.stop();}},null,this);},_getDeferredFlyoutElements:function(){if(this._deferredFlyoutElements==null)this._deferredFlyoutElements=new (c('Deferred'))();return this._deferredFlyoutElements;},registerFlyoutElements:function(j,k,l){this._getDeferredFlyoutElements().resolve({flyout:j,flyoutRoot:k,badge:l});},_getDeferredFooterElements:function(){if(this._deferredFooterElements==null)this._deferredFooterElements=new (c('Deferred'))();return this._deferredFooterElements;},registerFooterElements:function(j,event,k,l){this._getDeferredFooterElements().resolve({footer:j,event:event,settingsExitPoint:k,basicsExitPoint:l});}};f.exports=i;},null);
__d('PrivacyLiteFlyoutHelp',['csx','cx','Arbiter','AsyncRequest','Banzai','ContextualHelpSearchController','CSS','DOM','Event','Parent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;function l(m,n,o,p,q){this._width=315;k=c('DOM').find(n,'input');var r=c('DOM').create('div');c('ContextualHelpSearchController').call(this,m,k,r,o,p,{focusSearchBox:false});j=c('Parent').bySelector(n,"._8-a");c('Event').listen(q,'click',function(){this._hideSearch(this);c('Banzai').post('privacy_lite',{event:'plite_search_collapse',exit_point:null});}.bind(this));c('Arbiter').subscribe('PrivacyLiteFlyout/expandingSection',this._hideSearch.bind(this));var s=c('DOM').scry(j,"._d1r")[0];s&&c('Event').listen(s,'click',function(){c('CSS').addClass(j,"_aw6");k.focus();c('Banzai').post('privacy_lite',{event:'plite_search_expand',exit_point:null});if(!this.suggestedResults)new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/help_suggestions').setHandler(function(t){var u=t.getPayload().searchSuggestions,v=c('DOM').find(j,"._4_8m");c('DOM').setContent(v,u);c('CSS').addClass(j,"_4_8l");}.bind(this)).send();}.bind(this));}Object.assign(l.prototype,c('ContextualHelpSearchController').prototype,{source:'privacy_shortcuts',_hideSearch:function(){this.clearResults();c('CSS').removeClass(j,"_aw6");},show:function(m){if(m===this.topics_area){c('CSS').removeClass(j,"_aw7");return;}else if(m===this.loader){c('CSS').addClass(j,"_aw7");c('CSS').hide(this.results_area);}else c('CSS').hide(this.loader);c('CSS').show(m);}});f.exports=l;},null);
__d('ViewasChromeBar',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','Focus','ModalMask','PageTransitionsRegistrar','Parent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='ViewasChromeBar/initialized',k=null,l=false;function m(p){c('Arbiter').subscribe(j,p);}function n(p){c('CSS').addClass(p,"_7g7");var q=c('DOM').find(p,"._7g0");c('Focus').set(c('DOM').find(q,'.textInput'));}var o={initChromeBar:function(p){if(l)return;k=p;l=true;c('Arbiter').inform(j,null,c('Arbiter').BEHAVIOR_STATE);},update:function(p,q){m(function(){c('DOM').setContent(k,p);if(q)new (c('AsyncRequest'))('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function(p){c('Event').listen(p,'click',n.bind(null,c('Parent').bySelector(p,"._7f-")));},registerFlyoutModalMask:function(){c('ModalMask').show();c('PageTransitionsRegistrar').registerHandler(c('ModalMask').hide,10);}};f.exports=o;},null);