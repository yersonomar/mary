/*!CK:1877871481!*//*1457320986,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rk366"]); }

__d("FullViewType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ENTIRE_UNIT:1};},null);
__d('DownsellCursorController',['Event'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={listen:function(i){c('Event').listen(i,'click',function(){document.body.style.cursor='wait';});}};f.exports=h;},null);
__d('EgoAdsObjectSet',['csx','DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){'use strict';this._allEgoUnits=[];this._egoUnits=[];}i.prototype.init=function(k){'use strict';this._allEgoUnits=k;this._egoUnits=[];this._allEgoUnits.forEach(function(l){var m=j(l);if(!m||!m.holdout)this._egoUnits.push(l);},this);};i.prototype.getCount=function(){'use strict';return this._egoUnits.length;};i.prototype.forEach=function(k,l){'use strict';this._egoUnits.forEach(k,l);};i.prototype.getUnit=function(k){'use strict';return this._egoUnits[k];};i.prototype.getHoldoutAdIDsForSpace=function(k,l){'use strict';if(!k||!l)return [];var m=[];for(var n=0;k>0&&n<this._allEgoUnits.length;n++){var o=this._allEgoUnits[n],p=l(o),q=j(o);if(k>=p&&q&&q.holdout)m.push(q.adid);k-=p;}return m;};i.prototype.getHoldoutAdIDsForNumAds=function(k){'use strict';k=Math.min(k,this._allEgoUnits.length);var l=[];for(var m=0;m<k;m++){var n=this._allEgoUnits[m],o=j(n);if(o&&o.holdout)l.push(o.adid);}return l;};function j(k){var l=c('DOM').scry(k,"div._4u8")[0],m=l&&l.getAttribute('data-ad');return m&&JSON.parse(m)||undefined;}f.exports=i;},null);
__d('BrowseClientEventLogger',['Banzai'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browse_client_event_session',i='21.',j={logData:function(event,k,l,m){if(!event||!k)return;m=m||{};m.event=event;m.client_time=Math.floor(Date.now());m.session_id=k;m.vertical=l;this.allData=this.allData||{};this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(k)!==-1)return;if(!this.allData.sessionid)this.allData.sessionid=[];this.allData.sessionid.push(m);if(event==='window_unloaded'||event==='window_transition_to_LHC'||event==='window_transition_to_home_click'||event==='window_transition_to_fb_page'){this._postBatch(this.allData.sessionid);this.processedSessions.push(k);}},logClick:function(k){k.event='click';this.maybeLogVisiblityEvent(k,true);},maybeLogClientViewEvent:function(k){k.event='client_view';this.maybeLogVisiblityEvent(k);},maybeLogVisiblityEvent:function(k,l){if(!k||!k.xt||k.xt.indexOf(i)!==0)return;var m=JSON.parse(k.xt.substring(3));if(l)m.click_type=k.click_type;var event=k.event;if(event==='vpvd'){if(!k.ft)return;m.vpvd_time=k.ft.vpvd_time_delta;}this.logData(event,m.session_id,m.vertical,m);},_postBatch:function(k){c('Banzai').post(h,k,{delay:0,retry:true});}};f.exports=j;},null);
__d('AdBlockerDetectorLogging',['Banzai','ErrorUtils','getElementPosition'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=1,i=2,j='swank',k={doAdBlockCheck:function(l,m){c('ErrorUtils').applyWithGuard(function(){this._doAdBlockImgCheck(l,m.token||m,0);}.bind(this),this);},_doAdBlockImgCheck:function(l,m,n){if(!m||!l)return;var o=l.querySelectorAll('img');if(o.length>0){var p=false;for(var q=0;q<o.length;q++){var r=o[q],s=c('getElementPosition')(r);if(s.width>0||s.height>0){p=true;break;}}if(!p){var t=l,u=0;while(t!==null){if(u++>50)break;if(t.classList.contains('hidden_elem')||t.classList.contains('holdoutAdStory')||t.classList.contains('ego_ads_holdout'))return;t=t.parentElement;}c('Banzai').post('xtrackable:'+j,{token:m});}}else if(o.length===0&&m.startsWith('7.'))if(++n<5)setTimeout(function(){this._doAdBlockImgCheck(l,m,n);}.bind(this).bind(this),2500);},doBrowserExtensionCheck:function(l,m){try{var o=document.getElementsByTagName('head')[0],p=document.documentElement.shadowRoot,q=[];if(p)q=Array.prototype.slice.call(p.querySelectorAll('style'));var r=Array.prototype.slice.call(o.querySelectorAll('style')).filter(function(t){return t&&t.textContent.length==0;}),s={};s[h]=q.length>0;s[i]=r.length>0;if(l)q.forEach(function(t){t.disabled=true;});if(m)r.forEach(function(t){t.disabled=true;});c('Banzai').post('search_check',s);}catch(n){}}};f.exports=k;},null);
__d('FullViewLogger',['Banzai','ScriptPath','SubscriptionsHandler','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.logFromViewableImpressionTracker=function(i){'use strict';var j=new h();j.subscribeToTrackerEvents(i);};h.prototype.subscribeToTrackerEvents=function(i){'use strict';this.subscriptionsHandler=new (c('SubscriptionsHandler'))();this.subscriptionsHandler.addSubscriptions(i.addListener('full_view',this.onFullView,this));};h.prototype.onFullView=function(i){'use strict';if(this.$FullViewLogger1())this.$FullViewLogger2(i);var j={token:i.token,fullViewType:i.fullViewType,scriptPath:c('ScriptPath').getTopViewEndpoint()};c('Banzai').post('xtrackable:full_view',j);if(this.$FullViewLogger1())this.$FullViewLogger3(j);};h.prototype.$FullViewLogger1=function(){'use strict';return 0;};h.prototype.$FullViewLogger2=function(i){'use strict';};h.prototype.$FullViewLogger3=function(i){'use strict';};function h(){'use strict';}f.exports=h;},null);
__d('ViewableImpressionHeatmapLogger',['Banzai'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.logFromViewableImpressionTracker=function(i,j){'use strict';var k=new h(j);k.subscribeToTrackerEvents(i);};function h(i){'use strict';this.loggingDurationMS=i;this.trackingEntries={};}h.prototype.subscribeToTrackerEvents=function(i){'use strict';this.visibleSubscription=i.addListener('visible',this.onElementVisible,this);this.hiddenSubscription=i.addListener('hidden',this.onElementHidden,this);};h.prototype.onElementVisible=function(i){'use strict';var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k){k=this.createTrackingEntry(i);this.beginTracking(i.id,k);j=k.startedTrackingTS;}k.viewportProgressEvents.push({timestamp:j,percentInViewport:i.percentInViewport.toFixed(2)});};h.prototype.onElementHidden=function(i){'use strict';var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k)return;k.viewportProgressEvents.push({timestamp:j,percentInViewport:0});};h.prototype.onTrackingCompleted=function(i){'use strict';var j=this.trackingEntries[i];j.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:j.tracker.getPercentInViewport().toFixed(2)});if(this.$ViewableImpressionHeatmapLogger1())this.$ViewableImpressionHeatmapLogger2(i,j);this.logToServer(j);delete this.trackingEntries[i];};h.prototype.logToServer=function(i){'use strict';var j=i;delete j.tracker;c('Banzai').post('xtrackable:heatmap',j);};h.prototype.beginTracking=function(i,j){'use strict';this.trackingEntries[i]=j;setTimeout(function(){return this.onTrackingCompleted(i);}.bind(this),this.loggingDurationMS);};h.prototype.createTrackingEntry=function(i){'use strict';return {tracker:i.tracker,token:i.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]};};h.prototype.getCurrentTimestamp=function(){'use strict';return (Date.now()/1000).toFixed(2);};h.prototype.$ViewableImpressionHeatmapLogger1=function(){'use strict';return 0;};h.prototype.$ViewableImpressionHeatmapLogger2=function(i,j){'use strict';var k='Completed tracking for id '+i+' token='+j.token+' startedTrackingTS='+j.startedTrackingTS+'\n';j.viewportProgressEvents.forEach(function(l){k+='% in view: '+l.percentInViewport+' timestamp='+l.timestamp+'\n';});};f.exports=h;},null);
__d('ViewableImpressionUtils',['cx','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={isHorizontallyOffscreen:function(j,k,l){var m=Math.max(k.x,0),n=Math.min(k.x+k.width,l.width);return n-m<k.width||c('CSS').hasClass(j,"desktop_hscroll_offscreen");}};f.exports=i;},null);
__d('ViewableImpressionTracker',['Banzai','BrowseClientEventLogger','DOM','FullViewType','NonBlockingIFrame','Style','URI','ViewableImpressionUtils','WebSpeedExperiments','getElementPosition','getViewportDimensions','mixInEventEmitter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.id=i;this.element=j;this.config=k;this.iframe=null;this.viewableTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=false;this.waitForLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.iframeLogged=false;this.banzaiLogged=false;this.topLeftInViewport=false;this.bottomRightInViewport=false;}h.prototype.getID=function(){'use strict';return this.id;};h.prototype.getPercentInViewport=function(){'use strict';var i=c('getViewportDimensions')(),j=c('getElementPosition')(this.element);return this.$ViewableImpressionTracker1(i,j);};h.prototype.$ViewableImpressionTracker1=function(i,j){'use strict';if(j.x<i.width&&j.x+j.width>0&&j.y<i.height&&j.y+j.height>0&&c('Style').get(this.element,'visibility')!=='hidden'&&c('Style').get(this.element,'opacity')!=='0'){var k=Math.max(j.x,0),l=Math.min(j.x+j.width,i.width),m=Math.max(j.y,0),n=Math.min(j.y+j.height,i.height);if(j.height*j.width===0)return 100;if(this.config.require_horizontally_onscreen&&c('ViewableImpressionUtils').isHorizontallyOffscreen(this.element,j,i))return 0;var o=100*(l-k)*(n-m)/(j.height*j.width);return o;}return 0;};h.prototype.$ViewableImpressionTracker2=function(i,j){'use strict';if(c('Style').get(this.element,'visibility')==='hidden'||c('Style').get(this.element,'opacity')==='0')return false;var k=j.x,l=j.y,m=j.x+j.width,n=j.y+j.height;this.topLeftInViewport=this.topLeftInViewport||k>=0&&k<=i.width&&l>=0&&l<=i.height;this.bottomRightInViewport=this.bottomRightInViewport||m>=0&&m<=i.width&&n>=0&&n<=i.height;return this.topLeftInViewport&&this.bottomRightInViewport;};h.prototype.$ViewableImpressionTracker3=function(i,j){'use strict';if(this.hasEmittedFullViewEvent)return;if(this.$ViewableImpressionTracker2(i,j)){this.emit('full_view',{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:c('FullViewType').ENTIRE_UNIT});this.hasEmittedFullViewEvent=true;}};h.prototype.onVisible=function(){'use strict';this.isVisible=true;var i=c('getViewportDimensions')(),j=c('getElementPosition')(this.element),k=this.$ViewableImpressionTracker1(i,j),l=k>this.config.pixel_in_percentage;this.emit('visible',{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:k});this.$ViewableImpressionTracker3(i,j);if(!l){this.$ViewableImpressionTracker4();return;}if(this.isLogged()){this.$ViewableImpressionTracker5();}else this.$ViewableImpressionTracker6();if(!this.waitForLogged&&!this.isLogged()){this.waitForLogged=true;this.viewableTimeout=setTimeout(function(){this.waitForLogged=false;var m=this.getPercentInViewport(),n=m>this.config.pixel_in_percentage;if(!n){this.$ViewableImpressionTracker7();return;}this.logImpression(1,{});this.$ViewableImpressionTracker5();}.bind(this),this.config.duration_in_ms);}};h.prototype.onHidden=function(){'use strict';this.emit('hidden',{id:this.getID(),token:this.getToken()});if(this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged){this.logNonViewableImpression();}else if(!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible)this.logNonViewableImpression();this.isVisible=false;if(this.waitForLogged){this.waitForLogged=false;clearTimeout(this.viewableTimeout);}if(this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0){this.waitForSubsequent=true;this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=false;this.reset();if(this.isVisible)this.onVisible();}.bind(this),this.config.subsequent_gap_in_ms);}this.$ViewableImpressionTracker7();};h.prototype.onRemoved=function(){'use strict';this.isVisible=false;};h.prototype.getToken=function(){'use strict';return this.element.getAttribute('data-xt');};h.prototype.logImpression=function(i,j){'use strict';if(this.isLogged())return;var k=this.getToken(),l=Math.floor(Date.now()/1000),m={xt:k,isv:i,cts:l};if(c('Banzai').isEnabled('xtrackable_clientview_batch')&&this.config.should_batch){this.logWithBanzai(m);}else this.logWithIFrame(Object.assign(m,j));};h.prototype.logNonViewableImpression=function(){'use strict';if(this.config.nonviewableEnabled){var i=this.getToken();c('Banzai').post('xtrackable:nonviewable',{xt:i});}this.isNonViewableLogged=true;};h.prototype.isLogged=function(){'use strict';return this.iframeLogged||this.banzaiLogged;};h.prototype.reset=function(){'use strict';if(this.iframeLogged)this.iframeLogged=false;if(this.iframe){c('DOM').remove(this.iframe);this.iframe=null;}if(this.banzaiLogged)this.banzaiLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.waitForLogged=false;this.waitForSubsequent=false;};h.prototype.logWithBanzai=function(i){'use strict';this.banzaiLogged=true;c('BrowseClientEventLogger').maybeLogClientViewEvent(i);c('Banzai').post('xtrackable:clientview_batch',i);};h.prototype.logWithIFrame=function(i){'use strict';this.iframeLogged=true;if(c('WebSpeedExperiments').non_blocking_tracker){c('NonBlockingIFrame').loadIFrame(new (c('URI'))(this.config.impressionURL).addQueryData(i).toString());}else{this.iframe=c('DOM').create('iframe',{src:new (c('URI'))(this.config.impressionURL).addQueryData(i),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});this.iframe.setAttribute('aria-hidden','true');c('DOM').appendContent(this.element,this.iframe);}};h.prototype.$ViewableImpressionTracker8=function(){'use strict';return 0;};h.prototype.$ViewableImpressionTracker4=function(){'use strict';if(this.$ViewableImpressionTracker8()){c('Style').set(this.element,'background-color','#abab9a');c('Style').set(this.element,'outline','3px solid #abab9a');}};h.prototype.$ViewableImpressionTracker6=function(){'use strict';if(this.$ViewableImpressionTracker8()){c('Style').set(this.element,'background-color','#e4f70a');c('Style').set(this.element,'outline','3px solid #e4f70a');}};h.prototype.$ViewableImpressionTracker7=function(){'use strict';if(this.$ViewableImpressionTracker8()){c('Style').set(this.element,'background-color',null);c('Style').set(this.element,'outline',null);}};h.prototype.$ViewableImpressionTracker5=function(){'use strict';if(this.$ViewableImpressionTracker8()){c('Style').set(this.element,'background-color','#047515');c('Style').set(this.element,'outline','3px solid #047515');}};c('mixInEventEmitter')(h,{visible:true,hidden:true,full_view:true});f.exports=h;},null);
__d('VisibilityTrackingHelper',['Arbiter','DesktopHscrollUnitEventConstants','getViewportDimensions','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getEventListeners:function(i){return [c('Event').listen(document,'DOMContentLoaded',i),c('Event').listen(window,'scroll',i),c('Event').listen(window,'resize',i),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,i)];},getViewportInfo:function(){return c('getViewportDimensions')();}};f.exports=h;},null);
__d('VisibilityTracking',['Banzai','BrowseClientEventLogger','ErrorUtils','ScriptPath','SubscriptionsHandler','Visibility','VisibilityTrackingHelper','collectDataAttributes','getElementPosition','pageID','throttle'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='visibility_tracking',i='[data-vistracking]',j=500,k=50,l=50,m=50,n=50,o={VISIBLE:'visible',HIDDEN:'hidden'},p={DEFAULT:'default',REMOVED:'removed'},q={name:o.VISIBLE,cause:p.DEFAULT},r={name:o.HIDDEN,cause:p.DEFAULT},s={name:o.HIDDEN,cause:p.REMOVED},t=0;function u(v){'use strict';v=v||{};if(!v.bypass_banzai_check&&!c('Banzai').isEnabled(h))return;this.visibleElementInfo={};this.getDataFromConfig(v);c('Visibility').addListener(c('Visibility').VISIBLE,c('ErrorUtils').guard(this.fireEvent,'VisibilityTracking:visible',this));if(!this.skipVisibilityHiddenEvents)c('Visibility').addListener(c('Visibility').HIDDEN,c('ErrorUtils').guard(this.clearAllVisibleElements,'VisibilityTracking:hidden',this));c('ScriptPath').subscribe(c('ErrorUtils').guard(this.updateVisibleElements,'VisibilityTracking:scriptPath',this));c('Banzai').subscribe(c('Banzai').SHUTDOWN,c('ErrorUtils').guard(this.onUnload,'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=c('throttle').acrossTransitions(c('ErrorUtils').guard(this.fireEvent,'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new (c('SubscriptionsHandler'))();c('VisibilityTrackingHelper').getEventListeners(this.fireEventCallback).forEach(function(w){this.listeners.addSubscriptions(w);},this);if(this.extraInit)c('ErrorUtils').applyWithGuard(this.extraInit.bind(this));}u.prototype.getDataFromConfig=function(v){'use strict';this.config=v;this.root=v.root||document.documentElement;this.selector=v.selector||i;this.timeout=typeof v.timeout!=='undefined'?v.timeout:j;this.minOffsetVisibleFromBottom=typeof v.minOffsetVisibleFromBottom!=='undefined'?v.minOffsetVisibleFromBottom:k;this.minOffsetVisibleFromTop=typeof v.minOffsetVisibleFromTop!=='undefined'?v.minOffsetVisibleFromTop:l;this.minOffsetVisibleFromLeft=typeof v.minOffsetVisibleFromLeft!=='undefined'?v.minOffsetVisibleFromLeft:m;this.minOffsetVisibleFromRight=typeof v.minOffsetVisibleFromRight!=='undefined'?v.minOffsetVisibleFromRight:n;this.handleAllHiddenEvents=typeof v.handleAllHiddenEvents!=='undefined'?v.handleAllHiddenEvents:false;this.handleAllVisibleEvents=typeof v.handleAllVisibleEvents!=='undefined'?v.handleAllVisibleEvents:false;this.skipVisibilityHiddenEvents=typeof v.skipVisibilityHiddenEvents!=='undefined'?v.skipVisibilityHiddenEvents:false;this.cacheTrackedElements=typeof v.cacheTrackedElements!=='undefined'?v.cacheTrackedElements:false;};u.prototype.getAllTrackedElements=function(){'use strict';if(!this.allTrackedElements){this.allTrackedElements={};if(this.root.querySelectorAll){var v=this.root.querySelectorAll(this.selector);for(var w=0;w<v.length;w++){var x=this.getElementID(v[w]);this.allTrackedElements[x]=v[w];}}}return this.allTrackedElements;};u.prototype.refreshAllTrackedElements=function(){'use strict';delete this.allTrackedElements;return this.getAllTrackedElements();};u.prototype.getDataToLog=function(v){'use strict';var w=Object.assign(c('collectDataAttributes')(v,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:c('pageID'),script_path:c('ScriptPath').getScriptPath()});return w;};u.prototype.getElementID=function(v){'use strict';var w=v.$VisibilityTracking1;if(w)return w;v.$VisibilityTracking1=++t;return t;};u.prototype.sendDataToLog=function(v){'use strict';c('BrowseClientEventLogger').maybeLogVisiblityEvent(v);c('Banzai').post(h,v);};u.prototype.fireEvent=function(){'use strict';var v=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var w in v){var x=v[w],y=c('VisibilityTrackingHelper').getViewportInfo(),z=this.isVisible(x,y);if(!z&&(w in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(x,r);}else if(z&&(!(w in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(x,q);}this.clearUntrackedVisibleElements();};u.prototype.isVisible=function(v,w){'use strict';var x=c('getElementPosition')(v);return (x.x||x.y||x.width||x.height)&&x.y+x.height>=this.minOffsetVisibleFromTop&&x.y<=w.height-this.minOffsetVisibleFromBottom&&x.x+x.width>=this.minOffsetVisibleFromLeft&&x.x<=w.width-this.minOffsetVisibleFromRight;};u.prototype.handleEvent=function(v,event){'use strict';var w=this.getElementID(v),x=this.getDataToLog(v),y;if(event.name===o.VISIBLE){var z=Math.floor(Date.now()/1000);y=c('pageID').concat(":",z.toString(),":",this.getElementID(v).toString());this.visibleElementInfo[w]={visibility_id:y,elem:v};}else if(event.name===o.HIDDEN)if(w in this.visibleElementInfo){y=this.visibleElementInfo[w].visibility_id;delete this.visibleElementInfo[w];}this.sendDataToLog(Object.assign(x,{event:event.name,visibility_id:y}));};u.prototype.clearUntrackedVisibleElements=function(){'use strict';var v=this.getAllTrackedElements();for(var w in this.visibleElementInfo)if(!(w in v)){var x=this.visibleElementInfo[w];if(x.elem)this.handleEvent(x.elem,s);}};u.prototype.clearAllVisibleElements=function(){'use strict';var v=this.getAllTrackedElements();for(var w in v)if(w in this.visibleElementInfo)this.handleEvent(v[w],r);this.clearUntrackedVisibleElements();};u.prototype.updateVisibleElements=function(){'use strict';this.clearAllVisibleElements();this.fireEvent();};u.prototype.refreshAndFireEvent=function(){'use strict';this.refreshAllTrackedElements();this.fireEventCallback();};u.prototype.onUnload=function(){'use strict';this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)c('ErrorUtils').applyWithGuard(this.extraCleanup.bind(this));};u.init=function(v){'use strict';new u(v);};u.EVENT=o;u.CAUSE=p;f.exports=u;},null);
__d('ViewableImpressionEventHandler',['FullViewLogger','ViewableImpressionHeatmapLogger','ViewableImpressionTracker','VisibilityTracking'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=1;h=babelHelpers.inherits(k,c('VisibilityTracking'));i=h&&h.prototype;k.prototype.extraInit=function(){'use strict';this.impressionTrackers={};};k.prototype.getDataFromConfig=function(l){'use strict';i.getDataFromConfig.call(this,l);this.doHeatmapLogging=l.doHeatmapLogging;this.heatmapLoggingDurationMS=l.heatmapLoggingDurationMS;l.impressionURL=l.impressionURL!==undefined?l.impressionURL:'/xti.php';l.nonviewableEnabled=l.nonviewableEnabled!==undefined?l.nonviewableEnabled:false;};k.prototype.getImpressionTracking=function(l){'use strict';var m=this.getElementID(l),n=babelHelpers['extends']({},this.getConfigFromElement(l),this.config),o=this.impressionTrackers[m];if(!o){o=new (c('ViewableImpressionTracker'))(m,l,n);this.impressionTrackers[m]=o;if(this.doHeatmapLogging)c('ViewableImpressionHeatmapLogger').logFromViewableImpressionTracker(o,this.heatmapLoggingDurationMS);if(n.should_log_full_views)c('FullViewLogger').logFromViewableImpressionTracker(o);}return o;};k.prototype.handleEvent=function(l,event){'use strict';var m=this.getImpressionTracking(l);if(!m)return;if(event.name===c('VisibilityTracking').EVENT.VISIBLE){m.onVisible();if(!this.visibleElementInfo[m.getID()])this.visibleElementInfo[m.getID()]={elem:l};}else if(event.name===c('VisibilityTracking').EVENT.HIDDEN)if(event.cause===c('VisibilityTracking').CAUSE.DEFAULT){m.onHidden();delete this.visibleElementInfo[m.getID()];}else if(event.cause===c('VisibilityTracking').CAUSE.REMOVED){m.onRemoved();delete this.visibleElementInfo[m.getID()];delete this.impressionTrackers[m.getID()];}};k.prototype.getConfigFromElement=function(l){'use strict';return JSON.parse(l.getAttribute('data-xt-vimp'));};k.prototype.getElementID=function(l){'use strict';if(!l.getAttribute('id'))l.setAttribute('id','xt_uniq_'+j++);return l.getAttribute('id');};function k(){'use strict';h.apply(this,arguments);}f.exports=k;},null);
__d("GamesGogglesSwitch",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i={enable:function(){h=true;},isEnabled:function(){return h;}};f.exports=i;},null);
__d('GamesImpressionTracker',['cx','VisibilityTracking','throttle','Event','Banzai','Arbiter','GamesGogglesSwitch'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k='data-gamesegoimp',l='data-gamesrankedimp',m=1000;function n(s){if(c('GamesGogglesSwitch').isEnabled())s.className=s.className+" "+"_1z5y";}function o(s){return function(){if(s){s();s=null;}};}i=babelHelpers.inherits(p,c('VisibilityTracking'));j=i&&i.prototype;p.prototype.handleEvent=function(s,event){'use strict';if(event.name===c('VisibilityTracking').EVENT.VISIBLE){var t=s.getAttribute(l);s.removeAttribute(l);if(t){n(s);t&&c('Banzai').post('games_ranked_imp',{data:t});}c('Event').listen(s,'mouseover',o(function(){c('Banzai').post('games_mouseover',{data:t});c('Event').listen(s,'mouseout',o(function(){c('Banzai').post('games_mouseout',{data:t});}));}));}};function p(){'use strict';i.apply(this,arguments);}var q=new p({selector:'[data-gamesrankedimp]',handleAllVisibleEvents:true,skipVisibilityHiddenEvents:true,cacheTrackedElements:true}),r=c('throttle').acrossTransitions(function(){return q.fireEventCallback();},m,null);q.listeners.addSubscriptions(c('Event').listen(document,'mousemove',r),c('Event').listen(document,'click',r),c('Arbiter').subscribe('games_unit_loaded',function(){return q.refreshAllTrackedElements();}));},null);
__d('legacy:async-signal',['AsyncSignal'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.AsyncSignal=c('AsyncSignal');},3);
__d('ViewableImpressionTracking',['Arbiter','DesktopHscrollUnitEventConstants','ErrorUtils','LitestandMessages','Run','ViewableImpressionEventHandler','ViewableImpressionConfig'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(){if(c('ViewableImpressionEventHandler').instance===undefined){c('ViewableImpressionEventHandler').instance=new (c('ViewableImpressionEventHandler'))(c('ViewableImpressionConfig'));c('ViewableImpressionEventHandler').instance.listeners.addSubscriptions(c('Arbiter').subscribe([c('LitestandMessages').STORIES_INSERTED,'AdsRefreshHandler/AdsLoaded','MPPInsights/ChartView','PhotoSnowliftAds/displayUnits','WebMessengerAdsControl/adjustAds',c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_INSERTED_EVENT,'WebVideoChannelAds/AdsLoaded'],c('ErrorUtils').guard(function(){c('ViewableImpressionEventHandler').instance.refreshAndFireEvent();},'ViewableImpressionTracking')));}c('Run').onLoad(function(){c('ViewableImpressionEventHandler').instance.refreshAndFireEvent();});}};f.exports=h;},null);
__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j=[],k;function l(w){return c('Parent').byClass(w,'uiSelector');}function m(w){return c('Parent').byClass(w,'uiSelectorButton');}function n(){if(!i){i=new (c('ContextualLayer'))({position:'below'},c('DOM').create('div'));c('CSS').addClass(i.getRoot(),'uiSelectorContextualLayer');}return i;}function o(w){return c('DOM').scry(w,'select')[0];}function p(w){return c('DOM').find(w,'div.uiSelectorMenuWrapper');}var q=function(){q=c('emptyFunction');c('MenuDeprecated').subscribe('select',function(w,x){if(!h||!x||x.menu!==v.getSelectorMenu(h))return;var y=r(h),z=s(x.item);if(z){var aa=h,ba=v.isOptionSelected(x.item),ca=v.inform('select',{selector:aa,option:x.item,clone:k});if(ca===false)return;if(y||!ba){v.setSelected(aa,v.getOptionValue(x.item),!ba);v.inform('toggle',{selector:aa,option:x.item});v.inform('change',{selector:aa});c('Arbiter').inform('Form/change',{node:aa});if(t(aa))c('DataStore').set(aa,'dirty',true);}}if(!y||!z)h&&v.toggle(h);});};function r(w){return !!w.getAttribute('data-multiple');}function s(w){return c('CSS').hasClass(w,'uiSelectorOption');}function t(w){return !!w.getAttribute('data-autosubmit');}var u=function(){u=c('emptyFunction');var w={keydown:function(event){var x=event.getTarget();if(c('DOM').isInputNode(x))return;switch(c('Event').getKeyCode(event)){case c('Keys').DOWN:case c('Keys').SPACE:case c('Keys').UP:if(m(x)){var y=l(x);v.toggle(y);return false;}break;case c('Keys').ESC:if(h){var z=v.getSelectorButton(h);v.toggle(h);z&&c('Focus').set(z);return false;}break;}},mouseover:function(event){var x=c('Parent').byAttribute(event.getTarget(),'ajaxify');if(x&&c('CSS').hasClass(x,'uiSelectorButton'))v.loadMenu(l(x));}};c('Event').listen(document.body,w);};c('Toggler').subscribe(['show','hide'],function(w,x){var y=l(x.getActive());if(y){u();q();var z=v.getSelectorButton(y),aa=v.getSelectorMenu(y),ba=w==='show';z.setAttribute('aria-expanded',ba?'true':'false');if(ba){h=y;if(c('CSS').hasClass(z,'uiButtonDisabled')){v.setEnabled(y,false);return false;}aa=aa||v.loadMenu(y);var ca=c('Style').getScrollParent(y),da=ca!==window&&ca!==c('getDocumentScrollElement')();if(da||c('CSS').hasClass(y,'uiSelectorUseLayer')){if(da)j.push(c('Event').listen(ca,'scroll',function(){x.hide();}));k=c('DOM').create('div',{className:y.className});c('CSS').addClass(k,'invisible_elem');c('Vector').getElementDimensions(y).setElementDimensions(k);c('DOM').replace(y,k);var ea=c('CSS').hasClass(y,'uiSelectorRight'),fa=c('CSS').hasClass(y,'uiSelectorBottomUp');n().setContext(k).setContent(y).setPosition(fa?'above':'below').setAlignment(ea?'right':'left').show();}c('MenuDeprecated').register(aa);var ga=c('MenuDeprecated').getCheckedItems(aa);if(!ga.length)ga=c('MenuDeprecated').getEnabledItems(aa);if(ga.length)c('MenuDeprecated').focusItem(ga[0]);}else{h=null;if(k){while(j.length)j.pop().remove();c('DOM').replace(k,y);n().hide();k=null;}aa&&c('MenuDeprecated').unregister(aa);if(t(y)&&c('DataStore').get(y,'dirty')){var ha=c('DOM').scry(y,'input.submitButton')[0];ha&&ha.click();c('DataStore').remove(y,'dirty');}}c('CSS').conditionClass(v.getSelectorButton(y),'selected',ba);v.inform(ba?'open':'close',{selector:y,clone:k});}});var v=Object.assign(new (c('Arbiter'))(),{attachMenu:function(w,x,y){w=l(w);if(w){h&&c('MenuDeprecated').unregister(v.getSelectorMenu(h));c('DOM').setContent(p(w),x);h&&c('MenuDeprecated').register(v.getSelectorMenu(w));k&&n().updatePosition();if(y){var z=w.getAttribute('data-name');z&&y.setAttribute('name',z);if(!r(w))y.setAttribute('multiple',false);var aa=o(w);if(aa){c('DOM').replace(aa,y);}else c('DOM').insertAfter(w.firstChild,y);}return true;}},getOption:function(w,x){var y=v.getOptions(w),z=y.length;while(z--)if(x===v.getOptionValue(y[z]))return y[z];return null;},getOptions:function(w){var x=c('MenuDeprecated').getItems(v.getSelectorMenu(w));return x.filter(s);},getEnabledOptions:function(w){var x=c('MenuDeprecated').getEnabledItems(v.getSelectorMenu(w));return x.filter(s);},getSelectedOptions:function(w){return c('MenuDeprecated').getCheckedItems(v.getSelectorMenu(w));},getOptionText:function(w){return c('MenuDeprecated').getItemLabel(w);},getOptionValue:function(w){var x=l(w),y=o(x),z=v.getOptions(x).indexOf(w);return z>=0?y.options[z+1].value:'';},getSelectorButton:function(w){return c('DOM').find(w,'a.uiSelectorButton');},getSelectorMenu:function(w){return c('DOM').scry(w,'div.uiSelectorMenu')[0];},getValue:function(w){var x=o(w);if(!x)return null;if(!r(w))return x.value;var y=[],z=x.options;for(var aa=1,ba=z.length;aa<ba;aa++)if(z[aa].selected)y.push(z[aa].value);return y;},isOptionSelected:function(w){return c('MenuDeprecated').isItemChecked(w);},listen:function(w,x,y){return this.subscribe(x,function(z,aa){if(aa.selector===w)return y(aa,z);});},loadMenu:function(w,x){var y=v.getSelectorMenu(w);if(!y){var z=v.getSelectorButton(w),aa=z.getAttribute('ajaxify');if(aa){e(['AsyncRequest'],function(ca){var da=new (c('URI'))(aa),ea=da.getQueryData();da.setQueryData({});var fa=new ca(da).setData(ea).setNectarModuleDataSafe(z).setRelativeTo(z);x&&fa.setFinallyHandler(function(){setTimeout(x,0);});fa.send();}.bind(this));var ba=c('HTML')('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');c('DOM').appendContent(z.parentNode,ba);y=v.getSelectorMenu(w);z.removeAttribute('onmouseover');}}else x&&x();return y;},setButtonLabel:function(w,x){var y=v.getSelectorButton(w),z=parseInt(y.getAttribute('data-length'),10);x=x||y.getAttribute('data-label')||'';c('Button').setLabel(y,x);if(typeof x==='string')if(z&&x.length>z){y.setAttribute('title',x);}else y.removeAttribute('title');},setButtonTooltip:function(w,x){var y=v.getSelectorButton(w),z=c('Parent').byTag(y,'a');z&&c('TooltipData').set(z,x||y.getAttribute('data-tooltip')||'');},setEnabled:function(w,x){if(!x&&h&&l(w)===h)v.toggle(w);c('Button').setEnabled(v.getSelectorButton(w),x);},setOptionEnabled:function(w,x){c('MenuDeprecated').setItemEnabled(w,x);},setSelected:function(w,x,y){y=y!==false;var z=v.getOption(w,x);if(!z)return;var aa=v.isOptionSelected(z);if(y!==aa){if(!r(w)&&!aa){var ba=v.getSelectedOptions(w)[0];ba&&c('MenuDeprecated').toggleItem(ba);}c('MenuDeprecated').toggleItem(z);}v.updateSelector(w);},toggle:function(w){c('Toggler').toggle(c('DOM').scry(l(w),'div.wrap')[0]);},updateSelector:function(w){var x=v.getOptions(w),y=v.getSelectedOptions(w),z=o(w).options,aa=[],ba=[];for(var ca=0,da=x.length;ca<da;ca++){var ea=c('arrayContains')(y,x[ca]);z[ca+1].selected=ea;if(ea){var fa=v.getOptionText(x[ca]);aa.push(fa);ba.push(x[ca].getAttribute('data-tooltip')||fa);}}z[0].selected=!y.length;var ga=c('CSS').hasClass(w,'uiSelectorDynamicLabel'),ha=c('CSS').hasClass(w,'uiSelectorDynamicTooltip');if(ga||ha){var ia='';if(r(w)){var ja=v.getSelectorButton(w);ia=ja.getAttribute('data-delimiter')||', ';}aa=aa.join(ia);ba=ba.join(ia);ga&&v.setButtonLabel(w,aa);ha&&v.setButtonTooltip(w,ba);}}});f.exports=v;},null);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function(m){return c('DataStore').get(m,j);},runAfterSlide:function(m,n){var o=c('tidyEvent')(l.subscribe(k,function(p,q){if(q===m){o&&o.unsubscribe();n();}}));},registerSlide:function(m,n){c('Event').listen(m,'click',function(o){var p=c('Parent').bySelector(o.getTarget(),"._5cl_");if(!p)return;var q=c('Parent').byClass(m,'ego_unit'),r=0,s=c('Parent').byClass(q,'ego_unit_container'),t=c('DOM').scry(s,'.ego_unit')[0];if(t===q)if(q.nextSibling){q.nextSibling.style.paddingTop='0px';q.nextSibling.style.borderTop='0px';}c('CSS').addClass(q,"_5cl-");c('DataStore').set(q,j,true);new (c('Animation'))(q).to('height',0).to('padding-top',r).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(s,q);c('DOM').prependContent(q,n);c('DataStore').remove(q,j);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,q);}).go();});}},c('TidyArbiterMixin'));f.exports=l;},null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={setup:function(j){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(k,l){if(j==l.profile_id&&l.origin=='hovercard'||j==l.uid){var m=c('ge')(document.body,'.ego_unit_container');if(m){var n=c('DOM').scry(m,'.ego_unit'),o=n.length;for(var p=0;p<o;p++){var q=n[p].getAttribute('data-ego-fbid');if(q==j){var r=c('DOM').scry(n[p],'.ego_action a')[0];if(r)r.click();break;}}}}});},updateXids:function(j,k){if(j.length==0&&k.length==0)return;var l=function(v){return function(w){var x=w.getAttribute(v);if(!x)return false;var y=new (c('URI'))(x).getQueryData();return !!y.xids;};},m=c('DOM').scry(document.body,'.ego_section a');m=m.filter(l('ajaxify'));if(m.length==0)return;var n=new (c('URI'))(m[0].getAttribute('ajaxify')),o=n.getQueryData();if(!o.xids)return;var p=null;try{p=JSON.parse(o.xids);}catch(q){return;}for(var r=0;r<k.length;++r)p[k[r]]=1;var s=JSON.stringify(p),t=function(v,w){n=new (c('URI'))(v.getAttribute(w));o=n.getQueryData();o.xids=s;n.setQueryData(o);v.setAttribute(w,n.toString());};for(r=0;r<m.length;++r)t(m[r],'ajaxify');var u=c('DOM').scry(document.body,'.ego_unit form');u=u.filter(l('action'));for(r=0;r<u.length;++r)t(u[r],'action');},replaceUnit:function(j,k,l,m){i.replaceUnitCheckParent(j,k,l,m,'');},addUnitsWithSeeMore:function(j,k,l){if(!l)c('CSS').hide(j);var m=j.previousSibling;m&&k&&c('DOM').appendContent(m,k);},replaceUnitCheckParent:function(j,k,l,m,n){var o=c('Parent').byClass(j,'ego_unit_container');if(o&&c('EgoUnitSlideInsert').isSliding(j)){var p=c('DOM').appendContent(o,k);p.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(j,i._replaceUnitElement.bind(null,j,p,n));}else i._replaceUnit(j,k,l,m,n);},_replaceUnit:function(j,k,l,m,n){var o=c('DOM').insertAfter(j,k);o.forEach(c('CSS').hide);if(m!==undefined&&m!==null){setTimeout(function(){i._replaceUnitFadeout(j,o,l,n);},m);}else i._replaceUnitFadeout(j,o,l,n);},_replaceUnitFadeout:function(j,k,l,m){if(l){new (c('Animation'))(j).from('opacity',1).to('opacity',0).duration(l).checkpoint(1,function(){i._replaceUnitElement(j,k,m);}).go();}else i._replaceUnitElement(j,k,m);},_replaceUnitElement:function(j,k,l){var m=c('CSS').hasClass(j,'ego_unit')?j.parentNode:null;if(m&&m.tagName==='LI')m=c('DOM').scry(j.parentNode,'^ul')[0];c('DOM').remove(j);if(k.length)k.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:l,numUnitsRemained:m.childNodes.length});i.clearHeader();},clearHeader:function(){var j=c('DOM').scry(document.body,'.ego_column'),k=[];for(var l=0;l<j.length;++l)k=k.concat(c('DOM').scry(j[l],'.uiHeader'));for(l=0;l<k.length;++l){var m=k[l].nextSibling,n=c('DOM').find(m,"._2xq");if(!n)n=m;if(!n||n.childNodes.length===0){c('DOM').remove(k[l]);}else if(n.childNodes.length===1){var o=n.childNodes[0];if(c('CSS').hasClass(o,'ego_appended_units')&&o.childNodes.length===0)c('DOM').remove(k[l]);}}}};f.exports=i;},null);