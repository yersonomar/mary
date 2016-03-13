/*!CK:807932108!*//*1457322470,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["U+keT"]); }

__d('BaseUnitCarousel',['csx','DOM','tidyEvent','Animation','Ease','Locale','Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=39,j=3;function k(l){'use strict';this.config=l;this.positionProperty=c('Locale').isRTL()?'margin-right':'margin-left';var m=l.elements;this.loggedItems={};this.itemWidth=l.item_width;this.visibleCount=l.visible_count;this.visibleIndex=0;this.slideCount=l.slide_count?l.slide_count:j;this.slideAdjust=l.slide_adjust?l.slide_adjust:i;this.carousel=m.node;this.circularCarousel=l.circular_carousel;this.startOffset=l.start_offset;this.position=this.startOffset;this.grid=m.grid;if(this.grid.childElementCount<=2*this.slideCount)this.circularCarousel=false;if(this.circularCarousel){for(var n=0;n<this.slideCount;n++)this.grid.insertBefore(this.grid.lastChild,this.grid.firstChild);this.$BaseUnitCarousel1(this.slideCount);}this.grid.style[this.positionProperty]=this.position+'px';this.grid.style.width=this.itemWidth*this.visibleCount+'px';this.serviceID=m.service_id;this.location=m.location;this.pager=m.pager;this.enableAutoScrolling=l.enable_auto_scrolling;this.enableLargePager=l.enable_large_pager;this.prevPager=m.prev_pager;this.nextPager=m.next_pager;if(this.enableLargePager){c('tidyEvent')([c('Event').listen(this.nextPager,'click',this.slideLeft.bind(this)),c('Event').listen(this.prevPager,'click',this.slideRight.bind(this))]);}else c('tidyEvent')([this.pager.subscribe('next',this.slideLeft.bind(this)),this.pager.subscribe('prev',this.slideRight.bind(this))]);this.logImpressions();this.tryLoadMore();this.$BaseUnitCarousel2();}k.prototype.$BaseUnitCarousel1=function(l){'use strict';this.position-=l*this.itemWidth;this.grid.style[this.positionProperty]=this.position+'px';this.visibleIndex+=l;};k.prototype.canSlideLeft=function(){'use strict';return this.visibleIndex+this.visibleCount<this.grid.childElementCount;};k.prototype.canSlideRight=function(){'use strict';return this.visibleIndex>=1;};k.prototype.onXout=function(l,m){'use strict';if(!m)return;if(this.grid.childElementCount===0){c('DOM').remove(this.carousel);return;}if(this.grid.childElementCount<=2*this.slideCount&&this.circularCarousel){this.circularCarousel=false;this.position+=this.startOffset;this.grid.style[this.positionProperty]=this.position+'px';}if(this.grid.childElementCount>=this.visibleCount){var n=this.visibleIndex+this.visibleCount,o=this.grid.childElementCount-n;if(o<0)this.slide(-o);}this.$BaseUnitCarousel2();this.logImpressions();this.tryLoadMore();};k.prototype.slide=function(l){'use strict';this.toggleXouts(this.visibleIndex,this.visibleIndex+this.visibleCount,true);var m=this.visibleIndex+l,n=0;if(!this.circularCarousel){if((this.enableAutoScrolling||this.enableLargePager)&&this.visibleIndex===0&&l>0)n=-this.slideAdjust;if(m<=0){m=0;if(this.enableAutoScrolling||this.enableLargePager)n=this.slideAdjust;}}if(m+this.visibleCount>=this.grid.childElementCount)m=this.grid.childElementCount-this.visibleCount;l=m-this.visibleIndex;if(m===this.visibleIndex)return;this.position-=l*this.itemWidth+n;this.visibleIndex=m;var o=Math.abs(l*this.itemWidth);if(this.enableLargePager)this.hidePagerButton();var p=false;if(l>0)p=true;new (c('Animation'))(this.grid).to(this.positionProperty,this.position).duration(o).ease(c('Ease').sineOut).ondone(this.onSlideDone.bind(this,p)).go();};k.prototype.onSlideDone=function(l){'use strict';if(l||this.circularCarousel)this.logImpressions();if(!this.circularCarousel&&l)this.tryLoadMore();this.$BaseUnitCarousel2();};k.prototype.slideRight=function(){'use strict';if(this.circularCarousel){for(var l=0;l<this.slideCount;l++)this.grid.insertBefore(this.grid.lastChild,this.grid.firstChild);this.$BaseUnitCarousel1(this.slideCount);}this.slide(-this.slideCount);};k.prototype.slideLeft=function(){'use strict';if(this.circularCarousel){for(var l=0;l<this.slideCount;l++)this.grid.appendChild(this.grid.firstChild);this.$BaseUnitCarousel1(-this.slideCount);}this.slide(this.slideCount);};k.prototype.onDone=function(l){'use strict';this.hasReq=false;if(l&&l.payload&&l.payload.items){var m=l.payload.items;if(m){var n=c('DOM').find(this.grid,"._34bp");c('DOM').insertBefore(n,m);this.$BaseUnitCarousel2();this.logImpressions();this.tryLoadMore();}}};k.prototype.onError=function(){'use strict';this.hasReq=false;};k.prototype.toggleXouts=function(l,m,n){'use strict';};k.prototype.logImpressions=function(){'use strict';};k.prototype.tryLoadMore=function(){'use strict';};k.prototype.hidePagerButton=function(){'use strict';};k.prototype.$BaseUnitCarousel2=function(){'use strict';this.toggleXouts(this.visibleIndex,this.visibleIndex+this.visibleCount-1,false);if(this.enableAutoScrolling)this.updateAutoSlideListener();if(this.enableLargePager){this.updateLargePager();return;}if(this.grid.childElementCount<this.visibleCount){this.pager.setNextEnabled(false);this.pager.setPrevEnabled(false);return;}this.pager.setNextEnabled(this.canSlideLeft());this.pager.setPrevEnabled(this.canSlideRight());};f.exports=k;},null);
__d("XFeedEgoImpressionLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/impression\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);
__d("XFeedEgoLoadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/load\/",{loading_id:{type:"String",required:true},ids:{type:"IntVector",required:true},service_id:{type:"String",required:true},replace_data:{type:"String",defaultValue:""},location:{type:"String",defaultValue:""},group_size:{type:"Int",defaultValue:1},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);
__d('EgoUnitCarousel',['csx','DOM','XFeedEgoImpressionLoggingController','AsyncRequest','Arbiter','XFeedEgoLoadController','BaseUnitCarousel'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('BaseUnitCarousel'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);c('Arbiter').subscribe('x-out-ego-suggestions',this.onXout.bind(this));}k.prototype.tryLoadMore=function(){'use strict';if(this.hasReq)return;var l=this.grid.childElementCount-this.visibleIndex-this.visibleCount-1;if(l>7)return;var m=c('DOM').scry(this.grid,"._34bp")[0];if(!m)return;var n=m.id,o=[],p=this.grid.childNodes,q=p.length-1,r,s;for(var t=0;t<q;++t){var u=JSON.parse(p[t].getAttribute('data-ft'));if(u.ego_id)o.push(u.ego_id);if(u.qid&&!r)r=u.qid;if(u.mf_story_key&&!s)s=u.mf_story_key;}var v=c('XFeedEgoLoadController').getURIBuilder().setString('service_id',this.serviceID).setString('location',this.location).setString('loading_id',n).setIntVector('ids',o).setInt('qid',r).setInt('mf_story_key',s).getURI();new (c('AsyncRequest'))().setURI(v).setHandler(this.onDone.bind(this)).setErrorHandler(this.onError.bind(this)).send();this.hasReq=true;};k.prototype.logImpressions=function(){'use strict';var l=this.grid.children,m=l.length,n=this.visibleIndex+Math.min(this.visibleCount,m)-1;if(n===m-1)--n;for(var o=this.visibleIndex;o<=n;++o)this.$EgoUnitCarousel1(l[o]);};k.prototype.$EgoUnitCarousel1=function(l){'use strict';var m=JSON.parse(l.getAttribute('data-ft'));if(!m)return;var n=m.ego_id;if(!n)return;if(this.loggedItems[n])return;var o=c('XFeedEgoImpressionLoggingController').getURIBuilder().setInt('ego_id',n).setInt('qid',m.qid).setInt('mf_story_key',m.mf_story_key).getURI();new (c('AsyncRequest'))().setURI(o).send();this.loggedItems[n]=true;};f.exports=k;},null);
__d("XEgoHideLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/xout\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true},service_id:{type:"String",required:true}});},null);
__d('PymkXout',['Event','DOM','CSS','Arbiter','XEgoHideLoggingController','AsyncSignal'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k){c('Event').listen(j,'click',function(event){this._logForItem(i);if(k==='pymk_jewel'||k==='pymk_jewel_first_page'){c('CSS').hide(i);}else c('DOM').remove(i);c('Arbiter').inform('pymk-x-out');var l=event.getTarget().getAttribute('data-pymk-id');if(l)c('Arbiter').inform('x-out-ego-suggestions',{id:l});}.bind(this));},_logForItem:function(i){var j=JSON.parse(i.getAttribute('data-ft'));if(!j)return;if(!j.ego_id)return;var k=c('XEgoHideLoggingController').getURIBuilder().setInt('ego_id',j.ego_id).setInt('qid',j.qid).setInt('mf_story_key',j.mf_story_key).setString('service_id','PYMK').getURI();new (c('AsyncSignal'))(k,{}).send();}};f.exports=h;},null);
__d('FbFeedAttachmentEgoHScroll',['csx','cx','CSS','DOM','Event','debounce','EgoUnitCarousel'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('EgoUnitCarousel'));k=j&&j.prototype;l.prototype.updateAutoSlideListener=function(){'use strict';this.$FbFeedAttachmentEgoHScroll1();if(this.canSlideLeft())this.$FbFeedAttachmentEgoHScroll2('left',this.visibleIndex+this.visibleCount);if(this.canSlideRight())this.$FbFeedAttachmentEgoHScroll2('right',this.visibleIndex-1);};l.prototype.updateLargePager=function(){'use strict';c('CSS').removeClass(this.carousel,"_vxr");this.$FbFeedAttachmentEgoHScroll3(true);this.$FbFeedAttachmentEgoHScroll3(false);c('CSS').conditionClass(this.carousel,"_vxs",this.canSlideLeft()&&this.canSlideRight());};l.prototype.hidePagerButton=function(){'use strict';c('CSS').addClass(this.carousel,"_vxr");};l.prototype.$FbFeedAttachmentEgoHScroll3=function(m){'use strict';var n=m?"_vxt":"_vxu",o=m?"_vxv":"_vxw";if(m?this.canSlideRight():this.canSlideLeft()){c('CSS').removeClass(this.carousel,o);c('CSS').removeClass(this.carousel,n);}else{c('CSS').addClass(this.carousel,o);setTimeout(function(){c('CSS').addClass(this.carousel,n);}.bind(this),500);}};l.prototype.$FbFeedAttachmentEgoHScroll1=function(){'use strict';if(this.$FbFeedAttachmentEgoHScroll4)this.$FbFeedAttachmentEgoHScroll4.remove();this.$FbFeedAttachmentEgoHScroll4=null;if(this.$FbFeedAttachmentEgoHScroll5)this.$FbFeedAttachmentEgoHScroll5.remove();this.$FbFeedAttachmentEgoHScroll5=null;if(this.$FbFeedAttachmentEgoHScroll6)this.$FbFeedAttachmentEgoHScroll6.remove();this.$FbFeedAttachmentEgoHScroll6=null;if(this.$FbFeedAttachmentEgoHScroll7)this.$FbFeedAttachmentEgoHScroll7.remove();this.$FbFeedAttachmentEgoHScroll7=null;};l.prototype.$FbFeedAttachmentEgoHScroll2=function(m,n){'use strict';if(isNaN(n)||m!=='left'&&m!=='right')return;if(m==='left'){var o=c('debounce')(this.slideLeft.bind(this),1000,this);this.$FbFeedAttachmentEgoHScroll4=c('Event').listen(this.grid.children[n],'mouseover',o);this.$FbFeedAttachmentEgoHScroll6=c('Event').listen(this.grid.children[n],'mouseout',function(){o.reset();});}else{var p=c('debounce')(this.slideRight.bind(this),1000,this);this.$FbFeedAttachmentEgoHScroll5=c('Event').listen(this.grid.children[n],'mouseover',p);this.$FbFeedAttachmentEgoHScroll7=c('Event').listen(this.grid.children[n],'mouseout',function(){p.reset();});}};l.prototype.toggleXouts=function(m,n,o){'use strict';var p=Math.min(m,n),q=Math.max(m,n),r=this.grid.children;p=Math.max(p,0);q=Math.min(q,r.length-1);var s;for(var t=p;t<=q;++t){s=r[t];var u=c('DOM').scry(s,"._397t")[0];if(u)if(o){c('CSS').hide(u);}else c('CSS').show(u);}};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);