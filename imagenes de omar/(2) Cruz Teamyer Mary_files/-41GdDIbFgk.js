/*!CK:324385293!*//*1457636920,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2WiIB"]); }

__d('OGAggregationBling',['cx','fbt','React','NumberFormat'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'OGAggregationBling',render:function(){var k=[];if(this.props.likes)k.push(c('React').createElement('span',{className:"_14a_",key:'likes'},c('React').createElement('i',{className:"_4fx"}),c('React').createElement('span',null,c('NumberFormat').formatIntegerWithDelimiter(this.props.likes,this.props.numberDelimiter)),c('React').createElement('span',{className:'accessible_elem'},i._("me gusta"))));if(this.props.comments){k.push(c('React').createElement('span',{className:"_14a_",key:'comments'},c('React').createElement('i',{className:"_4fy"}),c('React').createElement('span',null,c('NumberFormat').formatIntegerWithDelimiter(this.props.comments,this.props.numberDelimiter)),c('React').createElement('span',{className:'accessible_elem'},i._("comentarios"))));}else{var l=!(this.props.mini&&this.props.likes),m=!this.props.likes&&this.props.alwaysVisible,n="_14a_"+(l?' '+"_4fz":'')+(m?' '+"_55n8":'');k.push(c('React').createElement('span',{className:n,key:'comments'},c('React').createElement('i',{className:"_4fy"})));}return (c('React').createElement('a',{className:"_4f-",href:'#',rel:'toggle'},k));}});f.exports=j;},null);
__d('OGAggregationUFI',['csx','cx','DOM','CSS','OGAggregationBling','React','ReactDOM','UFICentralUpdates','UFIToplevelCommentList','UFIConstants','UFIFeedbackTargets','UFILikeLink.react','UFIUserActions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m){this._root=k;this._id=l.ftentidentifier;this._source=l.source;this._numberDelimiter=l.numberdelimiter||',';this._mini=l.mini;this._alwaysVisible=l.alwaysvisible;this._bling=c('DOM').scry(this._root,"._4f-")[0];this._initializeLikeLink();c('UFICentralUpdates').handleUpdate(c('UFIConstants').UFIPayloadSourceType.INITIAL_SERVER,m);c('UFICentralUpdates').subscribe('feedback-updated',function(n,o){if(this._id in o.updates)this.render();}.bind(this));this.render();}Object.assign(j.prototype,{_initializeLikeLink:function(){if(this._likeLink)throw new Error('OGAggregationUFI attempted to initialize the like link when the like'+' link was already present');var k=c('DOM').scry(this._root,'.like_link')[0];if(k){var l=document.createElement('span');k.parentNode.replaceChild(l,k);this._likeLink=l;l.appendChild(k);}},render:function(){c('UFIFeedbackTargets').getFeedbackTarget(this._id,function(k){if(this._likeLink){var l=!k.hasviewerliked,m=function(event){c('UFIUserActions').changeReaction(this._id,l?c('UFIConstants').LikeReaction:0,{source:this._source,target:event.target});}.bind(this),n=c('React').createElement(c('UFILikeLink.react'),{onClick:m,likeAction:l});c('ReactDOM').render(n,this._likeLink);}if(this._bling){var o=c('UFIToplevelCommentList').getCommentListForFeedbackTargetID_UNSAFE(this._id).getDisplayedCommentCount();c('CSS').conditionClass(this._root,"_93n",this._mini&&(k.likecount||o));var p=c('React').createElement(c('OGAggregationBling'),{alwaysVisible:this._alwaysVisible,mini:this._mini,likes:k.likecount,comments:o,numberDelimiter:this._numberDelimiter});c('ReactDOM').render(p,this._bling);}}.bind(this));}});f.exports=j;},null);