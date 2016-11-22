// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27554__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27551 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__27552 = cljs.core.seq.call(null,vec__27551);
var first__27553 = cljs.core.first.call(null,seq__27552);
var seq__27552__$1 = cljs.core.next.call(null,seq__27552);
var tag = first__27553;
var body = seq__27552__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27555__i = 0, G__27555__a = new Array(arguments.length -  0);
while (G__27555__i < G__27555__a.length) {G__27555__a[G__27555__i] = arguments[G__27555__i + 0]; ++G__27555__i;}
  args = new cljs.core.IndexedSeq(G__27555__a,0);
} 
return G__27554__delegate.call(this,args);};
G__27554.cljs$lang$maxFixedArity = 0;
G__27554.cljs$lang$applyTo = (function (arglist__27556){
var args = cljs.core.seq(arglist__27556);
return G__27554__delegate(args);
});
G__27554.cljs$core$IFn$_invoke$arity$variadic = G__27554__delegate;
return G__27554;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25658__auto__ = (function sablono$core$update_arglists_$_iter__27561(s__27562){
return (new cljs.core.LazySeq(null,(function (){
var s__27562__$1 = s__27562;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27562__$1);
if(temp__4657__auto__){
var s__27562__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27562__$2)){
var c__25656__auto__ = cljs.core.chunk_first.call(null,s__27562__$2);
var size__25657__auto__ = cljs.core.count.call(null,c__25656__auto__);
var b__27564 = cljs.core.chunk_buffer.call(null,size__25657__auto__);
if((function (){var i__27563 = (0);
while(true){
if((i__27563 < size__25657__auto__)){
var args = cljs.core._nth.call(null,c__25656__auto__,i__27563);
cljs.core.chunk_append.call(null,b__27564,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27565 = (i__27563 + (1));
i__27563 = G__27565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27564),sablono$core$update_arglists_$_iter__27561.call(null,cljs.core.chunk_rest.call(null,s__27562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27564),null);
}
} else {
var args = cljs.core.first.call(null,s__27562__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27561.call(null,cljs.core.rest.call(null,s__27562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25658__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25990__auto__ = [];
var len__25983__auto___27571 = arguments.length;
var i__25984__auto___27572 = (0);
while(true){
if((i__25984__auto___27572 < len__25983__auto___27571)){
args__25990__auto__.push((arguments[i__25984__auto___27572]));

var G__27573 = (i__25984__auto___27572 + (1));
i__25984__auto___27572 = G__27573;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25658__auto__ = (function sablono$core$iter__27567(s__27568){
return (new cljs.core.LazySeq(null,(function (){
var s__27568__$1 = s__27568;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27568__$1);
if(temp__4657__auto__){
var s__27568__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27568__$2)){
var c__25656__auto__ = cljs.core.chunk_first.call(null,s__27568__$2);
var size__25657__auto__ = cljs.core.count.call(null,c__25656__auto__);
var b__27570 = cljs.core.chunk_buffer.call(null,size__25657__auto__);
if((function (){var i__27569 = (0);
while(true){
if((i__27569 < size__25657__auto__)){
var style = cljs.core._nth.call(null,c__25656__auto__,i__27569);
cljs.core.chunk_append.call(null,b__27570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27574 = (i__27569 + (1));
i__27569 = G__27574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27570),sablono$core$iter__27567.call(null,cljs.core.chunk_rest.call(null,s__27568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27570),null);
}
} else {
var style = cljs.core.first.call(null,s__27568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27567.call(null,cljs.core.rest.call(null,s__27568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25658__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27566){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27566));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27575 = (function sablono$core$link_to27575(var_args){
var args__25990__auto__ = [];
var len__25983__auto___27578 = arguments.length;
var i__25984__auto___27579 = (0);
while(true){
if((i__25984__auto___27579 < len__25983__auto___27578)){
args__25990__auto__.push((arguments[i__25984__auto___27579]));

var G__27580 = (i__25984__auto___27579 + (1));
i__25984__auto___27579 = G__27580;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27575.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

sablono.core.link_to27575.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27575.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27575.cljs$lang$applyTo = (function (seq27576){
var G__27577 = cljs.core.first.call(null,seq27576);
var seq27576__$1 = cljs.core.next.call(null,seq27576);
return sablono.core.link_to27575.cljs$core$IFn$_invoke$arity$variadic(G__27577,seq27576__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27575);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27581 = (function sablono$core$mail_to27581(var_args){
var args__25990__auto__ = [];
var len__25983__auto___27588 = arguments.length;
var i__25984__auto___27589 = (0);
while(true){
if((i__25984__auto___27589 < len__25983__auto___27588)){
args__25990__auto__.push((arguments[i__25984__auto___27589]));

var G__27590 = (i__25984__auto___27589 + (1));
i__25984__auto___27589 = G__27590;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27581.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

sablono.core.mail_to27581.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27584){
var vec__27585 = p__27584;
var content = cljs.core.nth.call(null,vec__27585,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24875__auto__ = content;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27581.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27581.cljs$lang$applyTo = (function (seq27582){
var G__27583 = cljs.core.first.call(null,seq27582);
var seq27582__$1 = cljs.core.next.call(null,seq27582);
return sablono.core.mail_to27581.cljs$core$IFn$_invoke$arity$variadic(G__27583,seq27582__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27581);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27591 = (function sablono$core$unordered_list27591(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25658__auto__ = (function sablono$core$unordered_list27591_$_iter__27596(s__27597){
return (new cljs.core.LazySeq(null,(function (){
var s__27597__$1 = s__27597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27597__$1);
if(temp__4657__auto__){
var s__27597__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27597__$2)){
var c__25656__auto__ = cljs.core.chunk_first.call(null,s__27597__$2);
var size__25657__auto__ = cljs.core.count.call(null,c__25656__auto__);
var b__27599 = cljs.core.chunk_buffer.call(null,size__25657__auto__);
if((function (){var i__27598 = (0);
while(true){
if((i__27598 < size__25657__auto__)){
var x = cljs.core._nth.call(null,c__25656__auto__,i__27598);
cljs.core.chunk_append.call(null,b__27599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27600 = (i__27598 + (1));
i__27598 = G__27600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27599),sablono$core$unordered_list27591_$_iter__27596.call(null,cljs.core.chunk_rest.call(null,s__27597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27599),null);
}
} else {
var x = cljs.core.first.call(null,s__27597__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27591_$_iter__27596.call(null,cljs.core.rest.call(null,s__27597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25658__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27591);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27601 = (function sablono$core$ordered_list27601(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25658__auto__ = (function sablono$core$ordered_list27601_$_iter__27606(s__27607){
return (new cljs.core.LazySeq(null,(function (){
var s__27607__$1 = s__27607;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27607__$1);
if(temp__4657__auto__){
var s__27607__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27607__$2)){
var c__25656__auto__ = cljs.core.chunk_first.call(null,s__27607__$2);
var size__25657__auto__ = cljs.core.count.call(null,c__25656__auto__);
var b__27609 = cljs.core.chunk_buffer.call(null,size__25657__auto__);
if((function (){var i__27608 = (0);
while(true){
if((i__27608 < size__25657__auto__)){
var x = cljs.core._nth.call(null,c__25656__auto__,i__27608);
cljs.core.chunk_append.call(null,b__27609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27610 = (i__27608 + (1));
i__27608 = G__27610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27609),sablono$core$ordered_list27601_$_iter__27606.call(null,cljs.core.chunk_rest.call(null,s__27607__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27609),null);
}
} else {
var x = cljs.core.first.call(null,s__27607__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27601_$_iter__27606.call(null,cljs.core.rest.call(null,s__27607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25658__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27601);
/**
 * Create an image element.
 */
sablono.core.image27611 = (function sablono$core$image27611(var_args){
var args27612 = [];
var len__25983__auto___27615 = arguments.length;
var i__25984__auto___27616 = (0);
while(true){
if((i__25984__auto___27616 < len__25983__auto___27615)){
args27612.push((arguments[i__25984__auto___27616]));

var G__27617 = (i__25984__auto___27616 + (1));
i__25984__auto___27616 = G__27617;
continue;
} else {
}
break;
}

var G__27614 = args27612.length;
switch (G__27614) {
case 1:
return sablono.core.image27611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27612.length)].join('')));

}
});

sablono.core.image27611.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27611.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27611.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27611);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27619_SHARP_,p2__27620_SHARP_){
return [cljs.core.str(p1__27619_SHARP_),cljs.core.str("["),cljs.core.str(p2__27620_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27621_SHARP_,p2__27622_SHARP_){
return [cljs.core.str(p1__27621_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27622_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24875__auto__ = value;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27623 = (function sablono$core$color_field27623(var_args){
var args27624 = [];
var len__25983__auto___27691 = arguments.length;
var i__25984__auto___27692 = (0);
while(true){
if((i__25984__auto___27692 < len__25983__auto___27691)){
args27624.push((arguments[i__25984__auto___27692]));

var G__27693 = (i__25984__auto___27692 + (1));
i__25984__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var G__27626 = args27624.length;
switch (G__27626) {
case 1:
return sablono.core.color_field27623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27624.length)].join('')));

}
});

sablono.core.color_field27623.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.color_field27623.call(null,name__27538__auto__,null);
});

sablono.core.color_field27623.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.color_field27623.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27623);

/**
 * Creates a date input field.
 */
sablono.core.date_field27627 = (function sablono$core$date_field27627(var_args){
var args27628 = [];
var len__25983__auto___27695 = arguments.length;
var i__25984__auto___27696 = (0);
while(true){
if((i__25984__auto___27696 < len__25983__auto___27695)){
args27628.push((arguments[i__25984__auto___27696]));

var G__27697 = (i__25984__auto___27696 + (1));
i__25984__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var G__27630 = args27628.length;
switch (G__27630) {
case 1:
return sablono.core.date_field27627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27628.length)].join('')));

}
});

sablono.core.date_field27627.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.date_field27627.call(null,name__27538__auto__,null);
});

sablono.core.date_field27627.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.date_field27627.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27627);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27631 = (function sablono$core$datetime_field27631(var_args){
var args27632 = [];
var len__25983__auto___27699 = arguments.length;
var i__25984__auto___27700 = (0);
while(true){
if((i__25984__auto___27700 < len__25983__auto___27699)){
args27632.push((arguments[i__25984__auto___27700]));

var G__27701 = (i__25984__auto___27700 + (1));
i__25984__auto___27700 = G__27701;
continue;
} else {
}
break;
}

var G__27634 = args27632.length;
switch (G__27634) {
case 1:
return sablono.core.datetime_field27631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27632.length)].join('')));

}
});

sablono.core.datetime_field27631.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.datetime_field27631.call(null,name__27538__auto__,null);
});

sablono.core.datetime_field27631.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.datetime_field27631.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27631);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27635 = (function sablono$core$datetime_local_field27635(var_args){
var args27636 = [];
var len__25983__auto___27703 = arguments.length;
var i__25984__auto___27704 = (0);
while(true){
if((i__25984__auto___27704 < len__25983__auto___27703)){
args27636.push((arguments[i__25984__auto___27704]));

var G__27705 = (i__25984__auto___27704 + (1));
i__25984__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var G__27638 = args27636.length;
switch (G__27638) {
case 1:
return sablono.core.datetime_local_field27635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27636.length)].join('')));

}
});

sablono.core.datetime_local_field27635.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.datetime_local_field27635.call(null,name__27538__auto__,null);
});

sablono.core.datetime_local_field27635.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.datetime_local_field27635.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27635);

/**
 * Creates a email input field.
 */
sablono.core.email_field27639 = (function sablono$core$email_field27639(var_args){
var args27640 = [];
var len__25983__auto___27707 = arguments.length;
var i__25984__auto___27708 = (0);
while(true){
if((i__25984__auto___27708 < len__25983__auto___27707)){
args27640.push((arguments[i__25984__auto___27708]));

var G__27709 = (i__25984__auto___27708 + (1));
i__25984__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var G__27642 = args27640.length;
switch (G__27642) {
case 1:
return sablono.core.email_field27639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27640.length)].join('')));

}
});

sablono.core.email_field27639.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.email_field27639.call(null,name__27538__auto__,null);
});

sablono.core.email_field27639.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.email_field27639.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27639);

/**
 * Creates a file input field.
 */
sablono.core.file_field27643 = (function sablono$core$file_field27643(var_args){
var args27644 = [];
var len__25983__auto___27711 = arguments.length;
var i__25984__auto___27712 = (0);
while(true){
if((i__25984__auto___27712 < len__25983__auto___27711)){
args27644.push((arguments[i__25984__auto___27712]));

var G__27713 = (i__25984__auto___27712 + (1));
i__25984__auto___27712 = G__27713;
continue;
} else {
}
break;
}

var G__27646 = args27644.length;
switch (G__27646) {
case 1:
return sablono.core.file_field27643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27644.length)].join('')));

}
});

sablono.core.file_field27643.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.file_field27643.call(null,name__27538__auto__,null);
});

sablono.core.file_field27643.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.file_field27643.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27643);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27647 = (function sablono$core$hidden_field27647(var_args){
var args27648 = [];
var len__25983__auto___27715 = arguments.length;
var i__25984__auto___27716 = (0);
while(true){
if((i__25984__auto___27716 < len__25983__auto___27715)){
args27648.push((arguments[i__25984__auto___27716]));

var G__27717 = (i__25984__auto___27716 + (1));
i__25984__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var G__27650 = args27648.length;
switch (G__27650) {
case 1:
return sablono.core.hidden_field27647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27648.length)].join('')));

}
});

sablono.core.hidden_field27647.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.hidden_field27647.call(null,name__27538__auto__,null);
});

sablono.core.hidden_field27647.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.hidden_field27647.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27647);

/**
 * Creates a month input field.
 */
sablono.core.month_field27651 = (function sablono$core$month_field27651(var_args){
var args27652 = [];
var len__25983__auto___27719 = arguments.length;
var i__25984__auto___27720 = (0);
while(true){
if((i__25984__auto___27720 < len__25983__auto___27719)){
args27652.push((arguments[i__25984__auto___27720]));

var G__27721 = (i__25984__auto___27720 + (1));
i__25984__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var G__27654 = args27652.length;
switch (G__27654) {
case 1:
return sablono.core.month_field27651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27652.length)].join('')));

}
});

sablono.core.month_field27651.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.month_field27651.call(null,name__27538__auto__,null);
});

sablono.core.month_field27651.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.month_field27651.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27651);

/**
 * Creates a number input field.
 */
sablono.core.number_field27655 = (function sablono$core$number_field27655(var_args){
var args27656 = [];
var len__25983__auto___27723 = arguments.length;
var i__25984__auto___27724 = (0);
while(true){
if((i__25984__auto___27724 < len__25983__auto___27723)){
args27656.push((arguments[i__25984__auto___27724]));

var G__27725 = (i__25984__auto___27724 + (1));
i__25984__auto___27724 = G__27725;
continue;
} else {
}
break;
}

var G__27658 = args27656.length;
switch (G__27658) {
case 1:
return sablono.core.number_field27655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27656.length)].join('')));

}
});

sablono.core.number_field27655.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.number_field27655.call(null,name__27538__auto__,null);
});

sablono.core.number_field27655.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.number_field27655.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27655);

/**
 * Creates a password input field.
 */
sablono.core.password_field27659 = (function sablono$core$password_field27659(var_args){
var args27660 = [];
var len__25983__auto___27727 = arguments.length;
var i__25984__auto___27728 = (0);
while(true){
if((i__25984__auto___27728 < len__25983__auto___27727)){
args27660.push((arguments[i__25984__auto___27728]));

var G__27729 = (i__25984__auto___27728 + (1));
i__25984__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var G__27662 = args27660.length;
switch (G__27662) {
case 1:
return sablono.core.password_field27659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27660.length)].join('')));

}
});

sablono.core.password_field27659.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.password_field27659.call(null,name__27538__auto__,null);
});

sablono.core.password_field27659.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.password_field27659.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27659);

/**
 * Creates a range input field.
 */
sablono.core.range_field27663 = (function sablono$core$range_field27663(var_args){
var args27664 = [];
var len__25983__auto___27731 = arguments.length;
var i__25984__auto___27732 = (0);
while(true){
if((i__25984__auto___27732 < len__25983__auto___27731)){
args27664.push((arguments[i__25984__auto___27732]));

var G__27733 = (i__25984__auto___27732 + (1));
i__25984__auto___27732 = G__27733;
continue;
} else {
}
break;
}

var G__27666 = args27664.length;
switch (G__27666) {
case 1:
return sablono.core.range_field27663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27664.length)].join('')));

}
});

sablono.core.range_field27663.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.range_field27663.call(null,name__27538__auto__,null);
});

sablono.core.range_field27663.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.range_field27663.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27663);

/**
 * Creates a search input field.
 */
sablono.core.search_field27667 = (function sablono$core$search_field27667(var_args){
var args27668 = [];
var len__25983__auto___27735 = arguments.length;
var i__25984__auto___27736 = (0);
while(true){
if((i__25984__auto___27736 < len__25983__auto___27735)){
args27668.push((arguments[i__25984__auto___27736]));

var G__27737 = (i__25984__auto___27736 + (1));
i__25984__auto___27736 = G__27737;
continue;
} else {
}
break;
}

var G__27670 = args27668.length;
switch (G__27670) {
case 1:
return sablono.core.search_field27667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27668.length)].join('')));

}
});

sablono.core.search_field27667.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.search_field27667.call(null,name__27538__auto__,null);
});

sablono.core.search_field27667.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.search_field27667.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27667);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27671 = (function sablono$core$tel_field27671(var_args){
var args27672 = [];
var len__25983__auto___27739 = arguments.length;
var i__25984__auto___27740 = (0);
while(true){
if((i__25984__auto___27740 < len__25983__auto___27739)){
args27672.push((arguments[i__25984__auto___27740]));

var G__27741 = (i__25984__auto___27740 + (1));
i__25984__auto___27740 = G__27741;
continue;
} else {
}
break;
}

var G__27674 = args27672.length;
switch (G__27674) {
case 1:
return sablono.core.tel_field27671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27672.length)].join('')));

}
});

sablono.core.tel_field27671.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.tel_field27671.call(null,name__27538__auto__,null);
});

sablono.core.tel_field27671.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.tel_field27671.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27671);

/**
 * Creates a text input field.
 */
sablono.core.text_field27675 = (function sablono$core$text_field27675(var_args){
var args27676 = [];
var len__25983__auto___27743 = arguments.length;
var i__25984__auto___27744 = (0);
while(true){
if((i__25984__auto___27744 < len__25983__auto___27743)){
args27676.push((arguments[i__25984__auto___27744]));

var G__27745 = (i__25984__auto___27744 + (1));
i__25984__auto___27744 = G__27745;
continue;
} else {
}
break;
}

var G__27678 = args27676.length;
switch (G__27678) {
case 1:
return sablono.core.text_field27675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27676.length)].join('')));

}
});

sablono.core.text_field27675.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.text_field27675.call(null,name__27538__auto__,null);
});

sablono.core.text_field27675.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.text_field27675.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27675);

/**
 * Creates a time input field.
 */
sablono.core.time_field27679 = (function sablono$core$time_field27679(var_args){
var args27680 = [];
var len__25983__auto___27747 = arguments.length;
var i__25984__auto___27748 = (0);
while(true){
if((i__25984__auto___27748 < len__25983__auto___27747)){
args27680.push((arguments[i__25984__auto___27748]));

var G__27749 = (i__25984__auto___27748 + (1));
i__25984__auto___27748 = G__27749;
continue;
} else {
}
break;
}

var G__27682 = args27680.length;
switch (G__27682) {
case 1:
return sablono.core.time_field27679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27680.length)].join('')));

}
});

sablono.core.time_field27679.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.time_field27679.call(null,name__27538__auto__,null);
});

sablono.core.time_field27679.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.time_field27679.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27679);

/**
 * Creates a url input field.
 */
sablono.core.url_field27683 = (function sablono$core$url_field27683(var_args){
var args27684 = [];
var len__25983__auto___27751 = arguments.length;
var i__25984__auto___27752 = (0);
while(true){
if((i__25984__auto___27752 < len__25983__auto___27751)){
args27684.push((arguments[i__25984__auto___27752]));

var G__27753 = (i__25984__auto___27752 + (1));
i__25984__auto___27752 = G__27753;
continue;
} else {
}
break;
}

var G__27686 = args27684.length;
switch (G__27686) {
case 1:
return sablono.core.url_field27683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27684.length)].join('')));

}
});

sablono.core.url_field27683.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.url_field27683.call(null,name__27538__auto__,null);
});

sablono.core.url_field27683.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.url_field27683.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27683);

/**
 * Creates a week input field.
 */
sablono.core.week_field27687 = (function sablono$core$week_field27687(var_args){
var args27688 = [];
var len__25983__auto___27755 = arguments.length;
var i__25984__auto___27756 = (0);
while(true){
if((i__25984__auto___27756 < len__25983__auto___27755)){
args27688.push((arguments[i__25984__auto___27756]));

var G__27757 = (i__25984__auto___27756 + (1));
i__25984__auto___27756 = G__27757;
continue;
} else {
}
break;
}

var G__27690 = args27688.length;
switch (G__27690) {
case 1:
return sablono.core.week_field27687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27688.length)].join('')));

}
});

sablono.core.week_field27687.cljs$core$IFn$_invoke$arity$1 = (function (name__27538__auto__){
return sablono.core.week_field27687.call(null,name__27538__auto__,null);
});

sablono.core.week_field27687.cljs$core$IFn$_invoke$arity$2 = (function (name__27538__auto__,value__27539__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27538__auto__,value__27539__auto__);
});

sablono.core.week_field27687.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27687);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27759 = (function sablono$core$check_box27759(var_args){
var args27760 = [];
var len__25983__auto___27763 = arguments.length;
var i__25984__auto___27764 = (0);
while(true){
if((i__25984__auto___27764 < len__25983__auto___27763)){
args27760.push((arguments[i__25984__auto___27764]));

var G__27765 = (i__25984__auto___27764 + (1));
i__25984__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var G__27762 = args27760.length;
switch (G__27762) {
case 1:
return sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27760.length)].join('')));

}
});

sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27759.call(null,name,null);
});

sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27759.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27759.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24875__auto__ = value;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27759.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27759);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27767 = (function sablono$core$radio_button27767(var_args){
var args27768 = [];
var len__25983__auto___27771 = arguments.length;
var i__25984__auto___27772 = (0);
while(true){
if((i__25984__auto___27772 < len__25983__auto___27771)){
args27768.push((arguments[i__25984__auto___27772]));

var G__27773 = (i__25984__auto___27772 + (1));
i__25984__auto___27772 = G__27773;
continue;
} else {
}
break;
}

var G__27770 = args27768.length;
switch (G__27770) {
case 1:
return sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27768.length)].join('')));

}
});

sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27767.call(null,group,null);
});

sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27767.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27767.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24875__auto__ = value;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27767.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27767);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27775 = (function sablono$core$select_options27775(coll){
var iter__25658__auto__ = (function sablono$core$select_options27775_$_iter__27792(s__27793){
return (new cljs.core.LazySeq(null,(function (){
var s__27793__$1 = s__27793;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27793__$1);
if(temp__4657__auto__){
var s__27793__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27793__$2)){
var c__25656__auto__ = cljs.core.chunk_first.call(null,s__27793__$2);
var size__25657__auto__ = cljs.core.count.call(null,c__25656__auto__);
var b__27795 = cljs.core.chunk_buffer.call(null,size__25657__auto__);
if((function (){var i__27794 = (0);
while(true){
if((i__27794 < size__25657__auto__)){
var x = cljs.core._nth.call(null,c__25656__auto__,i__27794);
cljs.core.chunk_append.call(null,b__27795,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27802 = x;
var text = cljs.core.nth.call(null,vec__27802,(0),null);
var val = cljs.core.nth.call(null,vec__27802,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27802,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options27775.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27808 = (i__27794 + (1));
i__27794 = G__27808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27795),sablono$core$select_options27775_$_iter__27792.call(null,cljs.core.chunk_rest.call(null,s__27793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27795),null);
}
} else {
var x = cljs.core.first.call(null,s__27793__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27805 = x;
var text = cljs.core.nth.call(null,vec__27805,(0),null);
var val = cljs.core.nth.call(null,vec__27805,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27805,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options27775.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27775_$_iter__27792.call(null,cljs.core.rest.call(null,s__27793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25658__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27775);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27809 = (function sablono$core$drop_down27809(var_args){
var args27810 = [];
var len__25983__auto___27813 = arguments.length;
var i__25984__auto___27814 = (0);
while(true){
if((i__25984__auto___27814 < len__25983__auto___27813)){
args27810.push((arguments[i__25984__auto___27814]));

var G__27815 = (i__25984__auto___27814 + (1));
i__25984__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var G__27812 = args27810.length;
switch (G__27812) {
case 2:
return sablono.core.drop_down27809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27809.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27810.length)].join('')));

}
});

sablono.core.drop_down27809.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27809.call(null,name,options,null);
});

sablono.core.drop_down27809.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27809.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27809);
/**
 * Creates a text area element.
 */
sablono.core.text_area27817 = (function sablono$core$text_area27817(var_args){
var args27818 = [];
var len__25983__auto___27821 = arguments.length;
var i__25984__auto___27822 = (0);
while(true){
if((i__25984__auto___27822 < len__25983__auto___27821)){
args27818.push((arguments[i__25984__auto___27822]));

var G__27823 = (i__25984__auto___27822 + (1));
i__25984__auto___27822 = G__27823;
continue;
} else {
}
break;
}

var G__27820 = args27818.length;
switch (G__27820) {
case 1:
return sablono.core.text_area27817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27818.length)].join('')));

}
});

sablono.core.text_area27817.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27817.call(null,name,null);
});

sablono.core.text_area27817.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24875__auto__ = value;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area27817.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27817);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27825 = (function sablono$core$label27825(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27825);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27826 = (function sablono$core$submit_button27826(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27826);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27827 = (function sablono$core$reset_button27827(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27827);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27828 = (function sablono$core$form_to27828(var_args){
var args__25990__auto__ = [];
var len__25983__auto___27835 = arguments.length;
var i__25984__auto___27836 = (0);
while(true){
if((i__25984__auto___27836 < len__25983__auto___27835)){
args__25990__auto__.push((arguments[i__25984__auto___27836]));

var G__27837 = (i__25984__auto___27836 + (1));
i__25984__auto___27836 = G__27837;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27828.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

sablono.core.form_to27828.cljs$core$IFn$_invoke$arity$variadic = (function (p__27831,body){
var vec__27832 = p__27831;
var method = cljs.core.nth.call(null,vec__27832,(0),null);
var action = cljs.core.nth.call(null,vec__27832,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27828.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27828.cljs$lang$applyTo = (function (seq27829){
var G__27830 = cljs.core.first.call(null,seq27829);
var seq27829__$1 = cljs.core.next.call(null,seq27829);
return sablono.core.form_to27828.cljs$core$IFn$_invoke$arity$variadic(G__27830,seq27829__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27828);

//# sourceMappingURL=core.js.map?rel=1479816750842