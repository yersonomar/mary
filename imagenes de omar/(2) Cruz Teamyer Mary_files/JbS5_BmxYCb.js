/*!CK:513606776!*//*1457473676,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Qg7I6"]); }

__d('LogoutMenu',['csx','DOMQuery','emptyFunction','Event','requireWeak'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i;c('requireWeak')('MenuItem',function(k){i=k;});function j(k,l){var m;if(l)l.subscribe('confirm',function(){c('Event').fire(m,'submit');m.submit();});k.subscribe('itemclick',function(n,o){switch(o.item.getValue()){case 'logout':m=c('DOMQuery').find(k.getRoot(),"._w0d");break;case 'help':if(i)i.prototype.hasAction=c('emptyFunction').thatReturnsFalse;break;default:break;}if(m)if(l){l.show();}else{c('Event').fire(m,'submit');m.submit();}});}f.exports.init=j;},null);
__d("XCrowdLeaderboardsTypeaheadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/editor\/leaderboards\/typeahead\/",{});},null);