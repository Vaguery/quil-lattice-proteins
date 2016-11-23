// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args13232 = [];
var len__7651__auto___13235 = arguments.length;
var i__7652__auto___13236 = (0);
while(true){
if((i__7652__auto___13236 < len__7651__auto___13235)){
args13232.push((arguments[i__7652__auto___13236]));

var G__13237 = (i__7652__auto___13236 + (1));
i__7652__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var G__13234 = args13232.length;
switch (G__13234) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13232.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__13251 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__13252 = null;
var count__13253 = (0);
var i__13254 = (0);
while(true){
if((i__13254 < count__13253)){
var vec__13255 = chunk__13252.cljs$core$IIndexed$_nth$arity$2(null,i__13254);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13255,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13255,(1),null);
var temp__4657__auto___13263 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13263)){
var handler_13264 = temp__4657__auto___13263;
(prc[cljs.core.name(processing_name)] = ((function (seq__13251,chunk__13252,count__13253,i__13254,handler_13264,temp__4657__auto___13263,vec__13255,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_13258 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13264.cljs$core$IFn$_invoke$arity$0 ? handler_13264.cljs$core$IFn$_invoke$arity$0() : handler_13264.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13258;
}});})(seq__13251,chunk__13252,count__13253,i__13254,handler_13264,temp__4657__auto___13263,vec__13255,processing_name,quil_name))
);
} else {
}

var G__13265 = seq__13251;
var G__13266 = chunk__13252;
var G__13267 = count__13253;
var G__13268 = (i__13254 + (1));
seq__13251 = G__13265;
chunk__13252 = G__13266;
count__13253 = G__13267;
i__13254 = G__13268;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13251);
if(temp__4657__auto__){
var seq__13251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13251__$1)){
var c__7357__auto__ = cljs.core.chunk_first(seq__13251__$1);
var G__13269 = cljs.core.chunk_rest(seq__13251__$1);
var G__13270 = c__7357__auto__;
var G__13271 = cljs.core.count(c__7357__auto__);
var G__13272 = (0);
seq__13251 = G__13269;
chunk__13252 = G__13270;
count__13253 = G__13271;
i__13254 = G__13272;
continue;
} else {
var vec__13259 = cljs.core.first(seq__13251__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13259,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13259,(1),null);
var temp__4657__auto___13273__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13273__$1)){
var handler_13274 = temp__4657__auto___13273__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__13251,chunk__13252,count__13253,i__13254,handler_13274,temp__4657__auto___13273__$1,vec__13259,processing_name,quil_name,seq__13251__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_13262 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13274.cljs$core$IFn$_invoke$arity$0 ? handler_13274.cljs$core$IFn$_invoke$arity$0() : handler_13274.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13262;
}});})(seq__13251,chunk__13252,count__13253,i__13254,handler_13274,temp__4657__auto___13273__$1,vec__13259,processing_name,quil_name,seq__13251__$1,temp__4657__auto__))
);
} else {
}

var G__13275 = cljs.core.next(seq__13251__$1);
var G__13276 = null;
var G__13277 = (0);
var G__13278 = (0);
seq__13251 = G__13275;
chunk__13252 = G__13276;
count__13253 = G__13277;
i__13254 = G__13278;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__13279_SHARP_){
return (p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__13279_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__6543__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.array_seq([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7658__auto__ = [];
var len__7651__auto___13282 = arguments.length;
var i__7652__auto___13283 = (0);
while(true){
if((i__7652__auto___13283 < len__7651__auto___13282)){
args__7658__auto__.push((arguments[i__7652__auto___13283]));

var G__13284 = (i__7652__auto___13283 + (1));
i__7652__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__13281 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__13281);
})();
var renderer = (function (){var or__6543__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq13280){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13280));
});

quil.sketch.sketch_init_list = (function (){var G__13285 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13285) : cljs.core.atom.call(null,G__13285));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__13298 = quil.sketch.empty_body_QMARK_();
var seq__13292_13299 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__13293_13300 = null;
var count__13294_13301 = (0);
var i__13295_13302 = (0);
while(true){
if((i__13295_13302 < count__13294_13301)){
var sk_13303 = chunk__13293_13300.cljs$core$IIndexed$_nth$arity$2(null,i__13295_13302);
if(cljs.core.truth_(add_elem_QMARK__13298)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13303));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13303).call(null);

var G__13304 = seq__13292_13299;
var G__13305 = chunk__13293_13300;
var G__13306 = count__13294_13301;
var G__13307 = (i__13295_13302 + (1));
seq__13292_13299 = G__13304;
chunk__13293_13300 = G__13305;
count__13294_13301 = G__13306;
i__13295_13302 = G__13307;
continue;
} else {
var temp__4657__auto___13308 = cljs.core.seq(seq__13292_13299);
if(temp__4657__auto___13308){
var seq__13292_13309__$1 = temp__4657__auto___13308;
if(cljs.core.chunked_seq_QMARK_(seq__13292_13309__$1)){
var c__7357__auto___13310 = cljs.core.chunk_first(seq__13292_13309__$1);
var G__13311 = cljs.core.chunk_rest(seq__13292_13309__$1);
var G__13312 = c__7357__auto___13310;
var G__13313 = cljs.core.count(c__7357__auto___13310);
var G__13314 = (0);
seq__13292_13299 = G__13311;
chunk__13293_13300 = G__13312;
count__13294_13301 = G__13313;
i__13295_13302 = G__13314;
continue;
} else {
var sk_13315 = cljs.core.first(seq__13292_13309__$1);
if(cljs.core.truth_(add_elem_QMARK__13298)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13315));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13315).call(null);

var G__13316 = cljs.core.next(seq__13292_13309__$1);
var G__13317 = null;
var G__13318 = (0);
var G__13319 = (0);
seq__13292_13299 = G__13316;
chunk__13293_13300 = G__13317;
count__13294_13301 = G__13318;
i__13295_13302 = G__13319;
continue;
}
} else {
}
}
break;
}

var G__13296 = quil.sketch.sketch_init_list;
var G__13297 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13296,G__13297) : cljs.core.reset_BANG_.call(null,G__13296,G__13297));
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
