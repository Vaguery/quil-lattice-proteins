// Compiled by ClojureScript 1.9.293 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24875__auto__ = (function (){var and__24863__auto__ = typeof Symbol !== 'undefined';
if(and__24863__auto__){
var and__24863__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24863__auto____$1){
var and__24863__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24863__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24863__auto____$2;
}
} else {
return and__24863__auto____$1;
}
} else {
return and__24863__auto__;
}
})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__29456_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__29456_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args29457 = [];
var len__25983__auto___29460 = arguments.length;
var i__25984__auto___29461 = (0);
while(true){
if((i__25984__auto___29461 < len__25983__auto___29460)){
args29457.push((arguments[i__25984__auto___29461]));

var G__29462 = (i__25984__auto___29461 + (1));
i__25984__auto___29461 = G__29462;
continue;
} else {
}
break;
}

var G__29459 = args29457.length;
switch (G__29459) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29457.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24863__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24863__auto__){
var map__29470 = c;
var map__29470__$1 = ((((!((map__29470 == null)))?((((map__29470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29470):map__29470);
var path = cljs.core.get.call(null,map__29470__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__29470__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24863__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__28830__auto___29476 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24875__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__28830__auto___29476);
}

var seq__29472_29477 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29473_29478 = null;
var count__29474_29479 = (0);
var i__29475_29480 = (0);
while(true){
if((i__29475_29480 < count__29474_29479)){
var property__28831__auto___29481 = cljs.core._nth.call(null,chunk__29473_29478,i__29475_29480);
if(cljs.core.truth_((base__28830__auto___29476[property__28831__auto___29481]))){
(devcards.core.CodeHighlight.prototype[property__28831__auto___29481] = (base__28830__auto___29476[property__28831__auto___29481]));
} else {
}

var G__29482 = seq__29472_29477;
var G__29483 = chunk__29473_29478;
var G__29484 = count__29474_29479;
var G__29485 = (i__29475_29480 + (1));
seq__29472_29477 = G__29482;
chunk__29473_29478 = G__29483;
count__29474_29479 = G__29484;
i__29475_29480 = G__29485;
continue;
} else {
var temp__4657__auto___29486 = cljs.core.seq.call(null,seq__29472_29477);
if(temp__4657__auto___29486){
var seq__29472_29487__$1 = temp__4657__auto___29486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29472_29487__$1)){
var c__25689__auto___29488 = cljs.core.chunk_first.call(null,seq__29472_29487__$1);
var G__29489 = cljs.core.chunk_rest.call(null,seq__29472_29487__$1);
var G__29490 = c__25689__auto___29488;
var G__29491 = cljs.core.count.call(null,c__25689__auto___29488);
var G__29492 = (0);
seq__29472_29477 = G__29489;
chunk__29473_29478 = G__29490;
count__29474_29479 = G__29491;
i__29475_29480 = G__29492;
continue;
} else {
var property__28831__auto___29493 = cljs.core.first.call(null,seq__29472_29487__$1);
if(cljs.core.truth_((base__28830__auto___29476[property__28831__auto___29493]))){
(devcards.core.CodeHighlight.prototype[property__28831__auto___29493] = (base__28830__auto___29476[property__28831__auto___29493]));
} else {
}

var G__29494 = cljs.core.next.call(null,seq__29472_29487__$1);
var G__29495 = null;
var G__29496 = (0);
var G__29497 = (0);
seq__29472_29477 = G__29494;
chunk__29473_29478 = G__29495;
count__29474_29479 = G__29496;
i__29475_29480 = G__29497;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25807__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25807__auto__,method_table__25803__auto__,prefer_table__25804__auto__,method_cache__25805__auto__,cached_hierarchy__25806__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29498){
var map__29499 = p__29498;
var map__29499__$1 = ((((!((map__29499 == null)))?((((map__29499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29499):map__29499);
var content = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__29501){
var map__29502 = p__29501;
var map__29502__$1 = ((((!((map__29502 == null)))?((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29502):map__29502);
var block = map__29502__$1;
var content = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25990__auto__ = [];
var len__25983__auto___29505 = arguments.length;
var i__25984__auto___29506 = (0);
while(true){
if((i__25984__auto___29506 < len__25983__auto___29505)){
args__25990__auto__.push((arguments[i__25984__auto___29506]));

var G__29507 = (i__25984__auto___29506 + (1));
i__25984__auto___29506 = G__29507;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq29504){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29504));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__29509 = devcards.system.devcards_rendered_card_class;
var G__29509__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__29509),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__29509);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__29509__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__29509__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args29510 = [];
var len__25983__auto___29518 = arguments.length;
var i__25984__auto___29519 = (0);
while(true){
if((i__25984__auto___29519 < len__25983__auto___29518)){
args29510.push((arguments[i__25984__auto___29519]));

var G__29520 = (i__25984__auto___29519 + (1));
i__25984__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var G__29512 = args29510.length;
switch (G__29512) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29510.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__29513 = card;
var map__29513__$1 = ((((!((map__29513 == null)))?((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);
var path = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__29513,map__29513__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__29513,map__29513__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs29515 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29515))?sablono.interpreter.attributes.call(null,attrs29515):null),((cljs.core.map_QMARK_.call(null,attrs29515))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29515)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25538__auto__ = (((this$ == null))?null:this$);
var m__25539__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,this$,devcard_opts);
} else {
var m__25539__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25538__auto__ = (((this$ == null))?null:this$);
var m__25539__auto__ = (devcards.core._devcard[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,this$,devcard_opts);
} else {
var m__25539__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__28830__auto___29527 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs29522 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29522))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs29522)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs29522))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29522)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__28830__auto___29527);
}

var seq__29523_29528 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29524_29529 = null;
var count__29525_29530 = (0);
var i__29526_29531 = (0);
while(true){
if((i__29526_29531 < count__29525_29530)){
var property__28831__auto___29532 = cljs.core._nth.call(null,chunk__29524_29529,i__29526_29531);
if(cljs.core.truth_((base__28830__auto___29527[property__28831__auto___29532]))){
(devcards.core.DontUpdate.prototype[property__28831__auto___29532] = (base__28830__auto___29527[property__28831__auto___29532]));
} else {
}

var G__29533 = seq__29523_29528;
var G__29534 = chunk__29524_29529;
var G__29535 = count__29525_29530;
var G__29536 = (i__29526_29531 + (1));
seq__29523_29528 = G__29533;
chunk__29524_29529 = G__29534;
count__29525_29530 = G__29535;
i__29526_29531 = G__29536;
continue;
} else {
var temp__4657__auto___29537 = cljs.core.seq.call(null,seq__29523_29528);
if(temp__4657__auto___29537){
var seq__29523_29538__$1 = temp__4657__auto___29537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29523_29538__$1)){
var c__25689__auto___29539 = cljs.core.chunk_first.call(null,seq__29523_29538__$1);
var G__29540 = cljs.core.chunk_rest.call(null,seq__29523_29538__$1);
var G__29541 = c__25689__auto___29539;
var G__29542 = cljs.core.count.call(null,c__25689__auto___29539);
var G__29543 = (0);
seq__29523_29528 = G__29540;
chunk__29524_29529 = G__29541;
count__29525_29530 = G__29542;
i__29526_29531 = G__29543;
continue;
} else {
var property__28831__auto___29544 = cljs.core.first.call(null,seq__29523_29538__$1);
if(cljs.core.truth_((base__28830__auto___29527[property__28831__auto___29544]))){
(devcards.core.DontUpdate.prototype[property__28831__auto___29544] = (base__28830__auto___29527[property__28831__auto___29544]));
} else {
}

var G__29545 = cljs.core.next.call(null,seq__29523_29538__$1);
var G__29546 = null;
var G__29547 = (0);
var G__29548 = (0);
seq__29523_29528 = G__29545;
chunk__29524_29529 = G__29546;
count__29525_29530 = G__29547;
i__29526_29531 = G__29548;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24875__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25712__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25712__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25712__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25712__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25712__auto____$3);
})(),x__25712__auto____$2);
})(),x__25712__auto____$1);
})(),x__25712__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__28830__auto___29555 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24875__auto__ = (function (){var and__24863__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24863__auto__)){
return this$.state;
} else {
return and__24863__auto__;
}
})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24863__auto__ = data_atom;
if(cljs.core.truth_(and__24863__auto__)){
return id;
} else {
return and__24863__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__28830__auto___29555);
}

var seq__29551_29556 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29552_29557 = null;
var count__29553_29558 = (0);
var i__29554_29559 = (0);
while(true){
if((i__29554_29559 < count__29553_29558)){
var property__28831__auto___29560 = cljs.core._nth.call(null,chunk__29552_29557,i__29554_29559);
if(cljs.core.truth_((base__28830__auto___29555[property__28831__auto___29560]))){
(devcards.core.DevcardBase.prototype[property__28831__auto___29560] = (base__28830__auto___29555[property__28831__auto___29560]));
} else {
}

var G__29561 = seq__29551_29556;
var G__29562 = chunk__29552_29557;
var G__29563 = count__29553_29558;
var G__29564 = (i__29554_29559 + (1));
seq__29551_29556 = G__29561;
chunk__29552_29557 = G__29562;
count__29553_29558 = G__29563;
i__29554_29559 = G__29564;
continue;
} else {
var temp__4657__auto___29565 = cljs.core.seq.call(null,seq__29551_29556);
if(temp__4657__auto___29565){
var seq__29551_29566__$1 = temp__4657__auto___29565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29551_29566__$1)){
var c__25689__auto___29567 = cljs.core.chunk_first.call(null,seq__29551_29566__$1);
var G__29568 = cljs.core.chunk_rest.call(null,seq__29551_29566__$1);
var G__29569 = c__25689__auto___29567;
var G__29570 = cljs.core.count.call(null,c__25689__auto___29567);
var G__29571 = (0);
seq__29551_29556 = G__29568;
chunk__29552_29557 = G__29569;
count__29553_29558 = G__29570;
i__29554_29559 = G__29571;
continue;
} else {
var property__28831__auto___29572 = cljs.core.first.call(null,seq__29551_29566__$1);
if(cljs.core.truth_((base__28830__auto___29555[property__28831__auto___29572]))){
(devcards.core.DevcardBase.prototype[property__28831__auto___29572] = (base__28830__auto___29555[property__28831__auto___29572]));
} else {
}

var G__29573 = cljs.core.next.call(null,seq__29551_29566__$1);
var G__29574 = null;
var G__29575 = (0);
var G__29576 = (0);
seq__29551_29556 = G__29573;
chunk__29552_29557 = G__29574;
count__29553_29558 = G__29575;
i__29554_29559 = G__29576;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__28830__auto___29581 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24863__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24863__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__28830__auto___29581);
}

var seq__29577_29582 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29578_29583 = null;
var count__29579_29584 = (0);
var i__29580_29585 = (0);
while(true){
if((i__29580_29585 < count__29579_29584)){
var property__28831__auto___29586 = cljs.core._nth.call(null,chunk__29578_29583,i__29580_29585);
if(cljs.core.truth_((base__28830__auto___29581[property__28831__auto___29586]))){
(devcards.core.DomComponent.prototype[property__28831__auto___29586] = (base__28830__auto___29581[property__28831__auto___29586]));
} else {
}

var G__29587 = seq__29577_29582;
var G__29588 = chunk__29578_29583;
var G__29589 = count__29579_29584;
var G__29590 = (i__29580_29585 + (1));
seq__29577_29582 = G__29587;
chunk__29578_29583 = G__29588;
count__29579_29584 = G__29589;
i__29580_29585 = G__29590;
continue;
} else {
var temp__4657__auto___29591 = cljs.core.seq.call(null,seq__29577_29582);
if(temp__4657__auto___29591){
var seq__29577_29592__$1 = temp__4657__auto___29591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29577_29592__$1)){
var c__25689__auto___29593 = cljs.core.chunk_first.call(null,seq__29577_29592__$1);
var G__29594 = cljs.core.chunk_rest.call(null,seq__29577_29592__$1);
var G__29595 = c__25689__auto___29593;
var G__29596 = cljs.core.count.call(null,c__25689__auto___29593);
var G__29597 = (0);
seq__29577_29582 = G__29594;
chunk__29578_29583 = G__29595;
count__29579_29584 = G__29596;
i__29580_29585 = G__29597;
continue;
} else {
var property__28831__auto___29598 = cljs.core.first.call(null,seq__29577_29592__$1);
if(cljs.core.truth_((base__28830__auto___29581[property__28831__auto___29598]))){
(devcards.core.DomComponent.prototype[property__28831__auto___29598] = (base__28830__auto___29581[property__28831__auto___29598]));
} else {
}

var G__29599 = cljs.core.next.call(null,seq__29577_29592__$1);
var G__29600 = null;
var G__29601 = (0);
var G__29602 = (0);
seq__29577_29582 = G__29599;
chunk__29578_29583 = G__29600;
count__29579_29584 = G__29601;
i__29580_29585 = G__29602;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24875__auto__ = x === true;
if(or__24875__auto__){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = x === false;
if(or__24875__auto____$1){
return or__24875__auto____$1;
} else {
var or__24875__auto____$2 = (x == null);
if(or__24875__auto____$2){
return or__24875__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24875__auto__ = typeof x === 'string';
if(or__24875__auto__){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = (x == null);
if(or__24875__auto____$1){
return or__24875__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24875__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__29603_SHARP_){
return !(p1__29603_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__29612 = opts;
var map__29612__$1 = ((((!((map__29612 == null)))?((((map__29612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29612):map__29612);
var name = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24875__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24875__auto__){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = (options == null);
if(or__24875__auto____$1){
return or__24875__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24875__auto__ = (initial_data == null);
if(or__24875__auto__){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24875__auto____$1){
return or__24875__auto____$1;
} else {
var or__24875__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24875__auto____$2){
return or__24875__auto____$2;
} else {
var or__24875__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24875__auto____$3){
return or__24875__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__29612,map__29612__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__29604_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__29604_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__29612,map__29612__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs29620 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29620))?sablono.interpreter.attributes.call(null,attrs29620):null),((cljs.core.map_QMARK_.call(null,attrs29620))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29620)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs29624 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29624))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs29624)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs29624))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29624)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs29625 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29625))?sablono.interpreter.attributes.call(null,attrs29625):null),((cljs.core.map_QMARK_.call(null,attrs29625))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29625)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs29626 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29626))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs29626)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs29626))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29626)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__29627_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__29627_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25497__auto__,k__25498__auto__){
var self__ = this;
var this__25497__auto____$1 = this;
return cljs.core._lookup.call(null,this__25497__auto____$1,k__25498__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25499__auto__,k29629,else__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
var G__29631 = (((k29629 instanceof cljs.core.Keyword))?k29629.fqn:null);
switch (G__29631) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29629,else__25500__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25511__auto__,writer__25512__auto__,opts__25513__auto__){
var self__ = this;
var this__25511__auto____$1 = this;
var pr_pair__25514__auto__ = ((function (this__25511__auto____$1){
return (function (keyval__25515__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,cljs.core.pr_writer,""," ","",opts__25513__auto__,keyval__25515__auto__);
});})(this__25511__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,pr_pair__25514__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25513__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29628){
var self__ = this;
var G__29628__$1 = this;
return (new cljs.core.RecordIter((0),G__29628__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25495__auto__){
var self__ = this;
var this__25495__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25491__auto__){
var self__ = this;
var this__25491__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25501__auto__){
var self__ = this;
var this__25501__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
var h__25310__auto__ = self__.__hash;
if(!((h__25310__auto__ == null))){
return h__25310__auto__;
} else {
var h__25310__auto____$1 = cljs.core.hash_imap.call(null,this__25492__auto____$1);
self__.__hash = h__25310__auto____$1;

return h__25310__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25493__auto__,other__25494__auto__){
var self__ = this;
var this__25493__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24863__auto__ = other__25494__auto__;
if(cljs.core.truth_(and__24863__auto__)){
var and__24863__auto____$1 = (this__25493__auto____$1.constructor === other__25494__auto__.constructor);
if(and__24863__auto____$1){
return cljs.core.equiv_map.call(null,this__25493__auto____$1,other__25494__auto__);
} else {
return and__24863__auto____$1;
}
} else {
return and__24863__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25506__auto__,k__25507__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25507__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25506__auto____$1),self__.__meta),k__25507__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25507__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25504__auto__,k__25505__auto__,G__29628){
var self__ = this;
var this__25504__auto____$1 = this;
var pred__29632 = cljs.core.keyword_identical_QMARK_;
var expr__29633 = k__25505__auto__;
if(cljs.core.truth_(pred__29632.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29633))){
return (new devcards.core.IdentiyOptions(G__29628,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25505__auto__,G__29628),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25509__auto__){
var self__ = this;
var this__25509__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25496__auto__,G__29628){
var self__ = this;
var this__25496__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__29628,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25502__auto__,entry__25503__auto__){
var self__ = this;
var this__25502__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25503__auto__)){
return cljs.core._assoc.call(null,this__25502__auto____$1,cljs.core._nth.call(null,entry__25503__auto__,(0)),cljs.core._nth.call(null,entry__25503__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25502__auto____$1,entry__25503__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25531__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25531__auto__,writer__25532__auto__){
return cljs.core._write.call(null,writer__25532__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__29630){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29630),null,cljs.core.dissoc.call(null,G__29630,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__29636){
var map__29639 = p__29636;
var map__29639__$1 = ((((!((map__29639 == null)))?((((map__29639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639):map__29639);
var devcard_opts = map__29639__$1;
var options = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__29639,map__29639__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__29639,map__29639__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25497__auto__,k__25498__auto__){
var self__ = this;
var this__25497__auto____$1 = this;
return cljs.core._lookup.call(null,this__25497__auto____$1,k__25498__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25499__auto__,k29642,else__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
var G__29644 = (((k29642 instanceof cljs.core.Keyword))?k29642.fqn:null);
switch (G__29644) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29642,else__25500__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25511__auto__,writer__25512__auto__,opts__25513__auto__){
var self__ = this;
var this__25511__auto____$1 = this;
var pr_pair__25514__auto__ = ((function (this__25511__auto____$1){
return (function (keyval__25515__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,cljs.core.pr_writer,""," ","",opts__25513__auto__,keyval__25515__auto__);
});})(this__25511__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,pr_pair__25514__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25513__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29641){
var self__ = this;
var G__29641__$1 = this;
return (new cljs.core.RecordIter((0),G__29641__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25495__auto__){
var self__ = this;
var this__25495__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25491__auto__){
var self__ = this;
var this__25491__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25501__auto__){
var self__ = this;
var this__25501__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
var h__25310__auto__ = self__.__hash;
if(!((h__25310__auto__ == null))){
return h__25310__auto__;
} else {
var h__25310__auto____$1 = cljs.core.hash_imap.call(null,this__25492__auto____$1);
self__.__hash = h__25310__auto____$1;

return h__25310__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25493__auto__,other__25494__auto__){
var self__ = this;
var this__25493__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24863__auto__ = other__25494__auto__;
if(cljs.core.truth_(and__24863__auto__)){
var and__24863__auto____$1 = (this__25493__auto____$1.constructor === other__25494__auto__.constructor);
if(and__24863__auto____$1){
return cljs.core.equiv_map.call(null,this__25493__auto____$1,other__25494__auto__);
} else {
return and__24863__auto____$1;
}
} else {
return and__24863__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25506__auto__,k__25507__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25507__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25506__auto____$1),self__.__meta),k__25507__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25507__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25504__auto__,k__25505__auto__,G__29641){
var self__ = this;
var this__25504__auto____$1 = this;
var pred__29645 = cljs.core.keyword_identical_QMARK_;
var expr__29646 = k__25505__auto__;
if(cljs.core.truth_(pred__29645.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29646))){
return (new devcards.core.AtomLikeOptions(G__29641,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25505__auto__,G__29641),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25509__auto__){
var self__ = this;
var this__25509__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25496__auto__,G__29641){
var self__ = this;
var this__25496__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__29641,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25502__auto__,entry__25503__auto__){
var self__ = this;
var this__25502__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25503__auto__)){
return cljs.core._assoc.call(null,this__25502__auto____$1,cljs.core._nth.call(null,entry__25503__auto__,(0)),cljs.core._nth.call(null,entry__25503__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25502__auto____$1,entry__25503__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25531__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25531__auto__,writer__25532__auto__){
return cljs.core._write.call(null,writer__25532__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__29643){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29643),null,cljs.core.dissoc.call(null,G__29643,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25497__auto__,k__25498__auto__){
var self__ = this;
var this__25497__auto____$1 = this;
return cljs.core._lookup.call(null,this__25497__auto____$1,k__25498__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25499__auto__,k29652,else__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
var G__29654 = (((k29652 instanceof cljs.core.Keyword))?k29652.fqn:null);
switch (G__29654) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29652,else__25500__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25511__auto__,writer__25512__auto__,opts__25513__auto__){
var self__ = this;
var this__25511__auto____$1 = this;
var pr_pair__25514__auto__ = ((function (this__25511__auto____$1){
return (function (keyval__25515__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,cljs.core.pr_writer,""," ","",opts__25513__auto__,keyval__25515__auto__);
});})(this__25511__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25512__auto__,pr_pair__25514__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25513__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29651){
var self__ = this;
var G__29651__$1 = this;
return (new cljs.core.RecordIter((0),G__29651__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25495__auto__){
var self__ = this;
var this__25495__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25491__auto__){
var self__ = this;
var this__25491__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25501__auto__){
var self__ = this;
var this__25501__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
var h__25310__auto__ = self__.__hash;
if(!((h__25310__auto__ == null))){
return h__25310__auto__;
} else {
var h__25310__auto____$1 = cljs.core.hash_imap.call(null,this__25492__auto____$1);
self__.__hash = h__25310__auto____$1;

return h__25310__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25493__auto__,other__25494__auto__){
var self__ = this;
var this__25493__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24863__auto__ = other__25494__auto__;
if(cljs.core.truth_(and__24863__auto__)){
var and__24863__auto____$1 = (this__25493__auto____$1.constructor === other__25494__auto__.constructor);
if(and__24863__auto____$1){
return cljs.core.equiv_map.call(null,this__25493__auto____$1,other__25494__auto__);
} else {
return and__24863__auto____$1;
}
} else {
return and__24863__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25506__auto__,k__25507__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25507__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25506__auto____$1),self__.__meta),k__25507__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25507__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25504__auto__,k__25505__auto__,G__29651){
var self__ = this;
var this__25504__auto____$1 = this;
var pred__29655 = cljs.core.keyword_identical_QMARK_;
var expr__29656 = k__25505__auto__;
if(cljs.core.truth_(pred__29655.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29656))){
return (new devcards.core.EdnLikeOptions(G__29651,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25505__auto__,G__29651),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25509__auto__){
var self__ = this;
var this__25509__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25496__auto__,G__29651){
var self__ = this;
var this__25496__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__29651,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25502__auto__,entry__25503__auto__){
var self__ = this;
var this__25502__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25503__auto__)){
return cljs.core._assoc.call(null,this__25502__auto____$1,cljs.core._nth.call(null,entry__25503__auto__,(0)),cljs.core._nth.call(null,entry__25503__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25502__auto____$1,entry__25503__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25531__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25531__auto__,writer__25532__auto__){
return cljs.core._write.call(null,writer__25532__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__29653){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29653),null,cljs.core.dissoc.call(null,G__29653,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24863__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24863__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24863__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__29670 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__29670 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__29670.devcards$core$IDevcard$))){
return true;
} else {
if((!G__29670.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29670);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__29673 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__29673__$1 = ((((!((map__29673 == null)))?((((map__29673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);
var history = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29677 = cljs.core.deref.call(null,history_atom);
var map__29677__$1 = ((((!((map__29677 == null)))?((((map__29677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29677):map__29677);
var history = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29681 = cljs.core.deref.call(null,history_atom);
var map__29681__$1 = ((((!((map__29681 == null)))?((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681):map__29681);
var history = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29685 = cljs.core.deref.call(null,history_atom);
var map__29685__$1 = ((((!((map__29685 == null)))?((((map__29685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29685):map__29685);
var history = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25712__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25712__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24863__auto__ = data_atom;
if(cljs.core.truth_(and__24863__auto__)){
return id;
} else {
return and__24863__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__29687){
var map__29688 = p__29687;
var map__29688__$1 = ((((!((map__29688 == null)))?((((map__29688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29688):map__29688);
var ha = map__29688__$1;
var pointer = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24875__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24875__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_29703 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_29703;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25807__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25807__auto__,method_table__25803__auto__,prefer_table__25804__auto__,method_cache__25805__auto__,cached_hierarchy__25806__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs29704 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29704))?sablono.interpreter.attributes.call(null,attrs29704):null),((cljs.core.map_QMARK_.call(null,attrs29704))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29704)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__29705,body){
var map__29709 = p__29705;
var map__29709__$1 = ((((!((map__29709 == null)))?((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var message = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs29711 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29711))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs29711)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs29711))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29711)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__29712){
var map__29720 = p__29712;
var map__29720__$1 = ((((!((map__29720 == null)))?((((map__29720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29720):map__29720);
var m = map__29720__$1;
var expected = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs29722 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29722))?sablono.interpreter.attributes.call(null,attrs29722):null),((cljs.core.map_QMARK_.call(null,attrs29722))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29722),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs29729 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29729))?sablono.interpreter.attributes.call(null,attrs29729):null),((cljs.core.map_QMARK_.call(null,attrs29729))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29729)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs29730 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29730))?sablono.interpreter.attributes.call(null,attrs29730):null),((cljs.core.map_QMARK_.call(null,attrs29730))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29730)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__29731){
var map__29732 = p__29731;
var map__29732__$1 = ((((!((map__29732 == null)))?((((map__29732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732):map__29732);
var testing_contexts = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs29734 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__29732,map__29732__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__29732,map__29732__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25712__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25712__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29734))?sablono.interpreter.attributes.call(null,attrs29734):null),((cljs.core.map_QMARK_.call(null,attrs29734))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29734)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs29743 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__29744,p__29745){
var map__29746 = p__29744;
var map__29746__$1 = ((((!((map__29746 == null)))?((((map__29746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);
var last_context = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__29747 = p__29745;
var i = cljs.core.nth.call(null,vec__29747,(0),null);
var t = cljs.core.nth.call(null,vec__29747,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25712__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25712__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29743))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs29743)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs29743))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29743)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__29763){
var map__29764 = p__29763;
var map__29764__$1 = ((((!((map__29764 == null)))?((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var type = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__29762 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__29762__$1 = ((((!((map__29762 == null)))?((((map__29762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29762):map__29762);
var fail = cljs.core.get.call(null,map__29762__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__29762__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__29762__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (p__29767){
var map__29768 = p__29767;
var map__29768__$1 = ((((!((map__29768 == null)))?((((map__29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29768):map__29768);
var type = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1){
return (function (p__29770){
var map__29771 = p__29770;
var map__29771__$1 = ((((!((map__29771 == null)))?((((map__29771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var type = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29762,map__29762__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24875__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28735__auto__ = ((function (c__28756__auto__){
return (function (state_29863){
var state_val_29864 = (state_29863[(1)]);
if((state_val_29864 === (7))){
var state_29863__$1 = state_29863;
var statearr_29865_29914 = state_29863__$1;
(statearr_29865_29914[(2)] = false);

(statearr_29865_29914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (20))){
var inst_29801 = (state_29863[(7)]);
var inst_29821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29801);
var state_29863__$1 = state_29863;
var statearr_29866_29915 = state_29863__$1;
(statearr_29866_29915[(2)] = inst_29821);

(statearr_29866_29915[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (27))){
var inst_29826 = (state_29863[(8)]);
var inst_29838 = (state_29863[(9)]);
var inst_29842 = inst_29826.call(null,inst_29838);
var state_29863__$1 = state_29863;
var statearr_29867_29916 = state_29863__$1;
(statearr_29867_29916[(2)] = inst_29842);

(statearr_29867_29916[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (1))){
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29863__$1,(2),devcards.core.test_channel);
} else {
if((state_val_29864 === (24))){
var state_29863__$1 = state_29863;
var statearr_29868_29917 = state_29863__$1;
(statearr_29868_29917[(2)] = null);

(statearr_29868_29917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (4))){
var state_29863__$1 = state_29863;
var statearr_29869_29918 = state_29863__$1;
(statearr_29869_29918[(2)] = false);

(statearr_29869_29918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (15))){
var state_29863__$1 = state_29863;
var statearr_29870_29919 = state_29863__$1;
(statearr_29870_29919[(2)] = false);

(statearr_29870_29919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (21))){
var inst_29801 = (state_29863[(7)]);
var state_29863__$1 = state_29863;
var statearr_29871_29920 = state_29863__$1;
(statearr_29871_29920[(2)] = inst_29801);

(statearr_29871_29920[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (13))){
var inst_29861 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29863__$1,inst_29861);
} else {
if((state_val_29864 === (22))){
var inst_29825 = (state_29863[(10)]);
var inst_29824 = (state_29863[(2)]);
var inst_29825__$1 = cljs.core.get.call(null,inst_29824,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29826 = cljs.core.get.call(null,inst_29824,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_29863__$1 = (function (){var statearr_29872 = state_29863;
(statearr_29872[(8)] = inst_29826);

(statearr_29872[(10)] = inst_29825__$1);

return statearr_29872;
})();
if(cljs.core.truth_(inst_29825__$1)){
var statearr_29873_29921 = state_29863__$1;
(statearr_29873_29921[(1)] = (23));

} else {
var statearr_29874_29922 = state_29863__$1;
(statearr_29874_29922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (29))){
var inst_29852 = (state_29863[(2)]);
var inst_29853 = cljs.test.clear_env_BANG_.call(null);
var state_29863__$1 = (function (){var statearr_29875 = state_29863;
(statearr_29875[(11)] = inst_29852);

(statearr_29875[(12)] = inst_29853);

return statearr_29875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29863__$1,(30),devcards.core.test_channel);
} else {
if((state_val_29864 === (6))){
var state_29863__$1 = state_29863;
var statearr_29876_29923 = state_29863__$1;
(statearr_29876_29923[(2)] = true);

(statearr_29876_29923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (28))){
var inst_29826 = (state_29863[(8)]);
var inst_29844 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_29845 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_29846 = cljs.core.PersistentHashMap.fromArrays(inst_29844,inst_29845);
var inst_29847 = devcards.core.collect_test.call(null,inst_29846);
var inst_29848 = cljs.test.get_current_env.call(null);
var inst_29849 = cljs.core.assoc.call(null,inst_29848,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_29850 = inst_29826.call(null,inst_29849);
var state_29863__$1 = (function (){var statearr_29877 = state_29863;
(statearr_29877[(13)] = inst_29847);

return statearr_29877;
})();
var statearr_29878_29924 = state_29863__$1;
(statearr_29878_29924[(2)] = inst_29850);

(statearr_29878_29924[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (25))){
var inst_29859 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29879_29925 = state_29863__$1;
(statearr_29879_29925[(2)] = inst_29859);

(statearr_29879_29925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (17))){
var state_29863__$1 = state_29863;
var statearr_29880_29926 = state_29863__$1;
(statearr_29880_29926[(2)] = true);

(statearr_29880_29926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (3))){
var inst_29777 = (state_29863[(14)]);
var inst_29782 = inst_29777.cljs$lang$protocol_mask$partition0$;
var inst_29783 = (inst_29782 & (64));
var inst_29784 = inst_29777.cljs$core$ISeq$;
var inst_29785 = (cljs.core.PROTOCOL_SENTINEL === inst_29784);
var inst_29786 = (inst_29783) || (inst_29785);
var state_29863__$1 = state_29863;
if(cljs.core.truth_(inst_29786)){
var statearr_29881_29927 = state_29863__$1;
(statearr_29881_29927[(1)] = (6));

} else {
var statearr_29882_29928 = state_29863__$1;
(statearr_29882_29928[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (12))){
var inst_29801 = (state_29863[(7)]);
var inst_29805 = (inst_29801 == null);
var inst_29806 = cljs.core.not.call(null,inst_29805);
var state_29863__$1 = state_29863;
if(inst_29806){
var statearr_29883_29929 = state_29863__$1;
(statearr_29883_29929[(1)] = (14));

} else {
var statearr_29884_29930 = state_29863__$1;
(statearr_29884_29930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (2))){
var inst_29777 = (state_29863[(14)]);
var inst_29777__$1 = (state_29863[(2)]);
var inst_29779 = (inst_29777__$1 == null);
var inst_29780 = cljs.core.not.call(null,inst_29779);
var state_29863__$1 = (function (){var statearr_29885 = state_29863;
(statearr_29885[(14)] = inst_29777__$1);

return statearr_29885;
})();
if(inst_29780){
var statearr_29886_29931 = state_29863__$1;
(statearr_29886_29931[(1)] = (3));

} else {
var statearr_29887_29932 = state_29863__$1;
(statearr_29887_29932[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (23))){
var inst_29831 = (state_29863[(15)]);
var inst_29825 = (state_29863[(10)]);
var inst_29831__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_29832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29833 = devcards.core.run_card_tests.call(null,inst_29825);
var inst_29834 = [inst_29833,inst_29831__$1];
var inst_29835 = (new cljs.core.PersistentVector(null,2,(5),inst_29832,inst_29834,null));
var state_29863__$1 = (function (){var statearr_29888 = state_29863;
(statearr_29888[(15)] = inst_29831__$1);

return statearr_29888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29863__$1,(26),inst_29835);
} else {
if((state_val_29864 === (19))){
var inst_29816 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29889_29933 = state_29863__$1;
(statearr_29889_29933[(2)] = inst_29816);

(statearr_29889_29933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (11))){
var inst_29777 = (state_29863[(14)]);
var inst_29798 = (state_29863[(2)]);
var inst_29799 = cljs.core.get.call(null,inst_29798,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29800 = cljs.core.get.call(null,inst_29798,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_29801 = inst_29777;
var state_29863__$1 = (function (){var statearr_29890 = state_29863;
(statearr_29890[(16)] = inst_29799);

(statearr_29890[(17)] = inst_29800);

(statearr_29890[(7)] = inst_29801);

return statearr_29890;
})();
var statearr_29891_29934 = state_29863__$1;
(statearr_29891_29934[(2)] = null);

(statearr_29891_29934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (9))){
var inst_29777 = (state_29863[(14)]);
var inst_29795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29777);
var state_29863__$1 = state_29863;
var statearr_29892_29935 = state_29863__$1;
(statearr_29892_29935[(2)] = inst_29795);

(statearr_29892_29935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (5))){
var inst_29793 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
if(cljs.core.truth_(inst_29793)){
var statearr_29893_29936 = state_29863__$1;
(statearr_29893_29936[(1)] = (9));

} else {
var statearr_29894_29937 = state_29863__$1;
(statearr_29894_29937[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (14))){
var inst_29801 = (state_29863[(7)]);
var inst_29808 = inst_29801.cljs$lang$protocol_mask$partition0$;
var inst_29809 = (inst_29808 & (64));
var inst_29810 = inst_29801.cljs$core$ISeq$;
var inst_29811 = (cljs.core.PROTOCOL_SENTINEL === inst_29810);
var inst_29812 = (inst_29809) || (inst_29811);
var state_29863__$1 = state_29863;
if(cljs.core.truth_(inst_29812)){
var statearr_29895_29938 = state_29863__$1;
(statearr_29895_29938[(1)] = (17));

} else {
var statearr_29896_29939 = state_29863__$1;
(statearr_29896_29939[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (26))){
var inst_29831 = (state_29863[(15)]);
var inst_29837 = (state_29863[(2)]);
var inst_29838 = cljs.core.nth.call(null,inst_29837,(0),null);
var inst_29839 = cljs.core.nth.call(null,inst_29837,(1),null);
var inst_29840 = cljs.core.not_EQ_.call(null,inst_29839,inst_29831);
var state_29863__$1 = (function (){var statearr_29897 = state_29863;
(statearr_29897[(9)] = inst_29838);

return statearr_29897;
})();
if(inst_29840){
var statearr_29898_29940 = state_29863__$1;
(statearr_29898_29940[(1)] = (27));

} else {
var statearr_29899_29941 = state_29863__$1;
(statearr_29899_29941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (16))){
var inst_29819 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
if(cljs.core.truth_(inst_29819)){
var statearr_29900_29942 = state_29863__$1;
(statearr_29900_29942[(1)] = (20));

} else {
var statearr_29901_29943 = state_29863__$1;
(statearr_29901_29943[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (30))){
var inst_29855 = (state_29863[(2)]);
var inst_29801 = inst_29855;
var state_29863__$1 = (function (){var statearr_29902 = state_29863;
(statearr_29902[(7)] = inst_29801);

return statearr_29902;
})();
var statearr_29903_29944 = state_29863__$1;
(statearr_29903_29944[(2)] = null);

(statearr_29903_29944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (10))){
var inst_29777 = (state_29863[(14)]);
var state_29863__$1 = state_29863;
var statearr_29904_29945 = state_29863__$1;
(statearr_29904_29945[(2)] = inst_29777);

(statearr_29904_29945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (18))){
var state_29863__$1 = state_29863;
var statearr_29905_29946 = state_29863__$1;
(statearr_29905_29946[(2)] = false);

(statearr_29905_29946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (8))){
var inst_29790 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29906_29947 = state_29863__$1;
(statearr_29906_29947[(2)] = inst_29790);

(statearr_29906_29947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28756__auto__))
;
return ((function (switch__28735__auto__,c__28756__auto__){
return (function() {
var devcards$core$state_machine__28736__auto__ = null;
var devcards$core$state_machine__28736__auto____0 = (function (){
var statearr_29910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29910[(0)] = devcards$core$state_machine__28736__auto__);

(statearr_29910[(1)] = (1));

return statearr_29910;
});
var devcards$core$state_machine__28736__auto____1 = (function (state_29863){
while(true){
var ret_value__28737__auto__ = (function (){try{while(true){
var result__28738__auto__ = switch__28735__auto__.call(null,state_29863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28738__auto__;
}
break;
}
}catch (e29911){if((e29911 instanceof Object)){
var ex__28739__auto__ = e29911;
var statearr_29912_29948 = state_29863;
(statearr_29912_29948[(5)] = ex__28739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29949 = state_29863;
state_29863 = G__29949;
continue;
} else {
return ret_value__28737__auto__;
}
break;
}
});
devcards$core$state_machine__28736__auto__ = function(state_29863){
switch(arguments.length){
case 0:
return devcards$core$state_machine__28736__auto____0.call(this);
case 1:
return devcards$core$state_machine__28736__auto____1.call(this,state_29863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__28736__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__28736__auto____0;
devcards$core$state_machine__28736__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__28736__auto____1;
return devcards$core$state_machine__28736__auto__;
})()
;})(switch__28735__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_29913 = f__28757__auto__.call(null);
(statearr_29913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_29913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__28830__auto___29954 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__28830__auto___29954);
}

var seq__29950_29955 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29951_29956 = null;
var count__29952_29957 = (0);
var i__29953_29958 = (0);
while(true){
if((i__29953_29958 < count__29952_29957)){
var property__28831__auto___29959 = cljs.core._nth.call(null,chunk__29951_29956,i__29953_29958);
if(cljs.core.truth_((base__28830__auto___29954[property__28831__auto___29959]))){
(devcards.core.TestDevcard.prototype[property__28831__auto___29959] = (base__28830__auto___29954[property__28831__auto___29959]));
} else {
}

var G__29960 = seq__29950_29955;
var G__29961 = chunk__29951_29956;
var G__29962 = count__29952_29957;
var G__29963 = (i__29953_29958 + (1));
seq__29950_29955 = G__29960;
chunk__29951_29956 = G__29961;
count__29952_29957 = G__29962;
i__29953_29958 = G__29963;
continue;
} else {
var temp__4657__auto___29964 = cljs.core.seq.call(null,seq__29950_29955);
if(temp__4657__auto___29964){
var seq__29950_29965__$1 = temp__4657__auto___29964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29950_29965__$1)){
var c__25689__auto___29966 = cljs.core.chunk_first.call(null,seq__29950_29965__$1);
var G__29967 = cljs.core.chunk_rest.call(null,seq__29950_29965__$1);
var G__29968 = c__25689__auto___29966;
var G__29969 = cljs.core.count.call(null,c__25689__auto___29966);
var G__29970 = (0);
seq__29950_29955 = G__29967;
chunk__29951_29956 = G__29968;
count__29952_29957 = G__29969;
i__29953_29958 = G__29970;
continue;
} else {
var property__28831__auto___29971 = cljs.core.first.call(null,seq__29950_29965__$1);
if(cljs.core.truth_((base__28830__auto___29954[property__28831__auto___29971]))){
(devcards.core.TestDevcard.prototype[property__28831__auto___29971] = (base__28830__auto___29954[property__28831__auto___29971]));
} else {
}

var G__29972 = cljs.core.next.call(null,seq__29950_29965__$1);
var G__29973 = null;
var G__29974 = (0);
var G__29975 = (0);
seq__29950_29955 = G__29972;
chunk__29951_29956 = G__29973;
count__29952_29957 = G__29974;
i__29953_29958 = G__29975;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25990__auto__ = [];
var len__25983__auto___29980 = arguments.length;
var i__25984__auto___29981 = (0);
while(true){
if((i__25984__auto___29981 < len__25983__auto___29980)){
args__25990__auto__.push((arguments[i__25984__auto___29981]));

var G__29982 = (i__25984__auto___29981 + (1));
i__25984__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core29977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core29977 = (function (test_thunks,meta29978){
this.test_thunks = test_thunks;
this.meta29978 = meta29978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core29977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29979,meta29978__$1){
var self__ = this;
var _29979__$1 = this;
return (new devcards.core.t_devcards$core29977(self__.test_thunks,meta29978__$1));
});

devcards.core.t_devcards$core29977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29979){
var self__ = this;
var _29979__$1 = this;
return self__.meta29978;
});

devcards.core.t_devcards$core29977.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core29977.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core29977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta29978","meta29978",1101277388,null)], null);
});

devcards.core.t_devcards$core29977.cljs$lang$type = true;

devcards.core.t_devcards$core29977.cljs$lang$ctorStr = "devcards.core/t_devcards$core29977";

devcards.core.t_devcards$core29977.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"devcards.core/t_devcards$core29977");
});

devcards.core.__GT_t_devcards$core29977 = (function devcards$core$__GT_t_devcards$core29977(test_thunks__$1,meta29978){
return (new devcards.core.t_devcards$core29977(test_thunks__$1,meta29978));
});

}

return (new devcards.core.t_devcards$core29977(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq29976){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29976));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs29984 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29984))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs29984)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs29984))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29984)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs29986 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29986))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs29986)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs29986))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29986)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28735__auto__ = ((function (c__28756__auto__){
return (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (1))){
var inst_30007 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(2),inst_30007);
} else {
if((state_val_30017 === (2))){
var inst_30009 = (state_30016[(2)]);
var inst_30010 = cljs.core.async.timeout.call(null,(100));
var state_30016__$1 = (function (){var statearr_30018 = state_30016;
(statearr_30018[(7)] = inst_30009);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(3),inst_30010);
} else {
if((state_val_30017 === (3))){
var inst_30012 = (state_30016[(2)]);
var inst_30013 = (function (){return ((function (inst_30012,state_val_30017,c__28756__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_30012,state_val_30017,c__28756__auto__))
})();
var inst_30014 = setTimeout(inst_30013,(0));
var state_30016__$1 = (function (){var statearr_30019 = state_30016;
(statearr_30019[(8)] = inst_30012);

return statearr_30019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30016__$1,inst_30014);
} else {
return null;
}
}
}
});})(c__28756__auto__))
;
return ((function (switch__28735__auto__,c__28756__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__28736__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__28736__auto____0 = (function (){
var statearr_30023 = [null,null,null,null,null,null,null,null,null];
(statearr_30023[(0)] = devcards$core$mount_namespace_$_state_machine__28736__auto__);

(statearr_30023[(1)] = (1));

return statearr_30023;
});
var devcards$core$mount_namespace_$_state_machine__28736__auto____1 = (function (state_30016){
while(true){
var ret_value__28737__auto__ = (function (){try{while(true){
var result__28738__auto__ = switch__28735__auto__.call(null,state_30016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28738__auto__;
}
break;
}
}catch (e30024){if((e30024 instanceof Object)){
var ex__28739__auto__ = e30024;
var statearr_30025_30027 = state_30016;
(statearr_30025_30027[(5)] = ex__28739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30028 = state_30016;
state_30016 = G__30028;
continue;
} else {
return ret_value__28737__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__28736__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__28736__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__28736__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__28736__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__28736__auto____0;
devcards$core$mount_namespace_$_state_machine__28736__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__28736__auto____1;
return devcards$core$mount_namespace_$_state_machine__28736__auto__;
})()
;})(switch__28735__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_30026 = f__28757__auto__.call(null);
(statearr_30026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1479816754915