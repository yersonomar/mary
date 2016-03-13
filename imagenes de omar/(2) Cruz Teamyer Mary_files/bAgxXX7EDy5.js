/*!CK:1235871407!*//*1457355178,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["J1J4C"]); }

__d('ChatSidebarDropdown.react',['cx','fbt','AppsDivebarDisplayController','Arbiter','AsyncRequest','ChatVisibility','ChatConfig','ChatOptions','ChatSidebarDropdownConstants','ChatTabActions','ContextualDialogArrow','ContextualLayerAutoFlip','FBRTCCallBlockingStore','LayerHideOnBlur','Link.react','LogHistory','MenuSeparator.react','PopoverMenu.react','PresencePrivacy','PresenceState','ReactComponentWithPureRenderMixin','React','ReactXUIMenu','SidebarType','SubscriptionsHandler','TrackingNodes','URI','FBRTCSupport','emptyFunction','ge','joinClasses'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('ReactXUIMenu').Item,k=c('ReactXUIMenu').SelectableItem,l=c('ReactXUIMenu').SelectableMenu,m=c('React').PropTypes,n=c('LogHistory').getInstance('blackbird'),o=c('React').createClass({displayName:'ChatSidebarDropdown',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{className:m.string,onHide:m.func,onShow:m.func,onToggleSidebar:m.func.isRequired,sidebarType:m.string.isRequired},getDefaultProps:function(){return {className:'',onHide:c('emptyFunction'),onShow:c('emptyFunction')};},getInitialState:function(){return {appsVisible:c('AppsDivebarDisplayController').isVisible(),isOnline:c('ChatVisibility').isOnline(),isTickerVisible:this._getTickerVisibility(),isCallBlocked:c('FBRTCCallBlockingStore').getBlockingStatus(),pendingChange:false};},componentDidMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Arbiter').subscribe(['Ticker/resized','ticker/show'],function(){this.setState({isTickerVisible:this._getTickerVisibility()});}.bind(this)),c('Arbiter').subscribe(['AppsDivebar/show-apps','AppsDivebar/hide-apps'],function(){this.setState({appsVisible:c('AppsDivebarDisplayController').isVisible()});}.bind(this)),c('PresencePrivacy').subscribe('privacy-user-presence-changed',function(){this.setState({isOnline:c('ChatVisibility').isOnline()});}.bind(this)),c('Arbiter').subscribe('buddylist/hide',function(){this.refs.menu.hidePopover();}.bind(this)),c('Arbiter').subscribe('sidebar/visibility',function(p,q){if(!q)this.refs.menu.hidePopover();}.bind(this)),c('FBRTCCallBlockingStore').addListener(function(){this.setState({isCallBlocked:c('FBRTCCallBlockingStore').getBlockingStatus()});}.bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},_getTickerVisibility:function(){var p=c('ge')('pagelet_ticker');return !!(p&&p.offsetHeight!==0);},_logVisibilityChange:function(p,q){var r=q?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility';n.debug(r,JSON.stringify({action:p}));},_changeSetting:function(p,q){if(this.state.pendingChange)return;this.setState({pendingChange:true});var r={};r[p]=!q;c('ChatOptions').setSetting(p,!q,'mini_sidebar_menu');new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(c('PresenceState').doSync).setErrorHandler(function(){return c('ChatOptions').setSetting(p,q,'mini_sidebar_menu_error');}).setFinallyHandler(function(){return this.setState({pendingChange:false});}.bind(this)).setData(r).setAllowCrossPageTransition(true).send();},_onClickOption:function(p,q){var r=true;switch(p){case c('ChatSidebarDropdownConstants').SOUND:this._changeSetting(p,q);break;case c('ChatSidebarDropdownConstants').ADVANCED_SETTINGS:case c('ChatSidebarDropdownConstants').TURN_OFF_DIALOG:c('Arbiter').inform('chat/advanced-settings-dialog-opened');this._logVisibilityChange(p,false);break;case c('ChatSidebarDropdownConstants').CLOSE_ALL_TABS:c('ChatTabActions').closeAllTabs();this._logVisibilityChange(p,false);break;case c('ChatSidebarDropdownConstants').HIDE_GROUPS:this._changeSetting(p,q);break;case c('ChatSidebarDropdownConstants').SIDEBAR:this.props.onToggleSidebar();r=false;break;case c('ChatSidebarDropdownConstants').ONLINE:!this.state.isOnline?c('ChatVisibility').goOnline():this._logVisibilityChange(p,true);break;case c('ChatSidebarDropdownConstants').VIDEOCALL_ON:c('FBRTCCallBlockingStore').turnOnVideoCalling();break;case c('ChatSidebarDropdownConstants').VIDEOCALL_OFF:break;case c('ChatSidebarDropdownConstants').PAUSE:break;case c('ChatSidebarDropdownConstants').SHOW_TICKER:c('Arbiter').inform('ChatSidebarDropdown/openTicker');break;case c('ChatSidebarDropdownConstants').HIDE_TICKER:c('Arbiter').inform('ChatSidebarDropdown/closeTicker');break;case c('ChatSidebarDropdownConstants').SHOW_APPS:c('AppsDivebarDisplayController').showApps();break;case c('ChatSidebarDropdownConstants').HIDE_APPS:c('AppsDivebarDisplayController').hideApps();break;}if(r&&this.refs.menu)this.refs.menu.hidePopover();},_onItemClick:function(p,q){var r=q.item.getValue(),s=q.item.isSelected&&q.item.isSelected();this._onClickOption(r,!!s);},_renderChatSoundOption:function(){return (c('React').createElement(k,{value:c('ChatSidebarDropdownConstants').SOUND,selected:c('ChatOptions').getSetting(c('ChatSidebarDropdownConstants').SOUND)},i._("Sonido")));},_renderBlockSettingsOption:function(){return (c('React').createElement(j,{href:new (c('URI'))('/settings?tab=blocking'),value:c('ChatSidebarDropdownConstants').BLOCK_SETTINGS},i._("Block Settings")));},_renderAdvancedSettingsOption:function(){return (c('React').createElement(j,{href:new (c('URI'))('/ajax/chat/privacy/settings_dialog.php'),rel:'dialog',value:c('ChatSidebarDropdownConstants').ADVANCED_SETTINGS},i._("Configuraci\u00f3n avanzada...")));},_renderCloseAllOption:function(){return (c('React').createElement(j,{value:c('ChatSidebarDropdownConstants').CLOSE_ALL_TABS},i._("Cerrar todas las pesta\u00f1as de chat")));},_renderHideSidebarOption:function(){return (c('React').createElement(j,{className:"_2xvi",value:c('ChatSidebarDropdownConstants').SIDEBAR},i._("Ocultar la barra lateral")));},_renderHideGroupsOption:function(){if(this.props.sidebarType===c('SidebarType').MINI_SIDEBAR||this.props.sidebarType===c('SidebarType').BUDDYLIST_NUB)return null;return (c('React').createElement(k,{value:c('ChatSidebarDropdownConstants').HIDE_GROUPS,selected:c('ChatOptions').getSetting(c('ChatSidebarDropdownConstants').HIDE_GROUPS)},i._("Ocultar grupos")));},_renderOnlineOption:function(){var p=c('ChatVisibility').isOnline(),q=p?new (c('URI'))('/ajax/chat/privacy/settings_dialog.php').addQueryData('dialog_type','turn_off_dialog'):'#',r=p?i._("Desactivar el chat"):i._("Activar el chat"),s=p?c('ChatSidebarDropdownConstants').TURN_OFF_DIALOG:c('ChatSidebarDropdownConstants').ONLINE;return (c('React').createElement(j,{href:q,rel:p?'dialog':'',value:s},r));},_renderVideoCallingOption:function(){if(!c('FBRTCSupport').isVideoCallBlockingSupported())return;var p=this.state.isCallBlocked,q=p?'#':new (c('URI'))('/videocall/off/'),r=p?i._("Activar llamadas de voz\/videollamadas"):i._("Desactivar llamadas de voz\/videollamadas"),s=p?c('ChatSidebarDropdownConstants').VIDEOCALL_ON:c('ChatSidebarDropdownConstants').VIDEOCALL_OFF;return (c('React').createElement(j,{href:q,rel:p?'':'dialog',value:s},r));},_renderAppsOption:function(){if(!c('ChatConfig').get('has_apps_option')||this.props.sidebarType!==c('SidebarType').SIDEBAR)return null;var p=this.state.appsVisible,q=p?i._("Ocultar juegos"):i._("Mostrar juegos"),r=p?c('ChatSidebarDropdownConstants').HIDE_APPS:c('ChatSidebarDropdownConstants').SHOW_APPS;return [c('React').createElement(c('MenuSeparator.react'),{key:'apps_separator'}),c('React').createElement(j,{value:r,key:'apps_menu'},q)];},_renderTickerToggleOption:function(){if(!c('ChatConfig').get('has_ticker_toggle_option')||this.props.sidebarType!==c('SidebarType').SIDEBAR)return null;var p=this.state.isTickerVisible,q=p?i._("Ocultar la informaci\u00f3n instant\u00e1nea"):i._("Mostrar la informaci\u00f3n instant\u00e1nea"),r=p?c('ChatSidebarDropdownConstants').HIDE_TICKER:c('ChatSidebarDropdownConstants').SHOW_TICKER;return [c('React').createElement(c('MenuSeparator.react'),{key:'ticker_separator'}),c('React').createElement(j,{value:r,key:'ticker_menu'},q)];},_renderMenu:function(){return (c('React').createElement(l,{className:'fbChatSidebarDropdown/PopoverMenu',multiple:true,onItemClick:this._onItemClick},this._renderChatSoundOption(),this._renderBlockSettingsOption(),this._renderAdvancedSettingsOption(),c('React').createElement(c('MenuSeparator.react'),null),this._renderCloseAllOption(),this._renderHideSidebarOption(),this._renderHideGroupsOption(),this._renderOnlineOption(),this._renderVideoCallingOption(),this._renderAppsOption(),this._renderTickerToggleOption()));},render:function(){var p=i._("Opciones"),q=c('joinClasses')(this.props.className,"_5qth"+(' '+"_5vm9")+(!c('ChatVisibility').isOnline()?' '+"_5vma":'')),r=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.DROPDOWN_BUTTON);return (c('React').createElement(c('PopoverMenu.react'),{alignh:'right',alignv:'top',className:q,layerBehaviors:[c('ContextualLayerAutoFlip'),c('ContextualDialogArrow'),c('LayerHideOnBlur')],menu:this._renderMenu(),onHide:this.props.onHide,onShow:this.props.onShow,ref:'menu'},c('React').createElement(c('Link.react'),{'aria-label':p,className:"_5vmb button",'data-ft':r,'data-hover':'tooltip','data-tooltip-content':p,href:'#'})));}});f.exports=o;},null);