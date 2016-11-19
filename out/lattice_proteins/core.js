// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
/**
 * Returns a list of indicated length, containing uniform random integers between 0 and `scale`
 */
lattice_proteins.core.random_marker_chain = (function lattice_proteins$core$random_marker_chain(length,scale){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.call(null,length,(function (){
return cljs.core.rand_int.call(null,scale);
})));
});
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(230));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"markers","markers",-246919693),lattice_proteins.core.random_marker_chain.call(null,(10),(100))], null);
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
var old_markers = new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(20)) - (10)),(cljs.core.rand_int.call(null,(20)) - (10))], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.rest.call(null,old_markers)),cljs.core.first.call(null,old_markers))], null);
});
lattice_proteins.core.draw_state = (function lattice_proteins$core$draw_state(state){
quil.core.no_stroke.call(null);

var vec__36433 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(state);
var i = cljs.core.nth.call(null,vec__36433,(0),null);
var j = cljs.core.nth.call(null,vec__36433,(1),null);
var cell_size = (20);
quil.core.fill.call(null,(255),(200),(10),(50));

var tr__28035__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cell_size * i) + (quil.core.width.call(null) / (2))),((cell_size * j) + (quil.core.width.call(null) / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__28035__auto__);

return quil.core.text.call(null,[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(state)))].join(''),(0),(0));
}finally {quil.core.pop_matrix.call(null);
}});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__36436__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__36436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36437__i = 0, G__36437__a = new Array(arguments.length -  0);
while (G__36437__i < G__36437__a.length) {G__36437__a[G__36437__i] = arguments[G__36437__i + 0]; ++G__36437__i;}
  args = new cljs.core.IndexedSeq(G__36437__a,0);
} 
return G__36436__delegate.call(this,args);};
G__36436.cljs$lang$maxFixedArity = 0;
G__36436.cljs$lang$applyTo = (function (arglist__36438){
var args = cljs.core.seq(arglist__36438);
return G__36436__delegate(args);
});
G__36436.cljs$core$IFn$_invoke$arity$variadic = G__36436__delegate;
return G__36436;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__36439__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__36439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36440__i = 0, G__36440__a = new Array(arguments.length -  0);
while (G__36440__i < G__36440__a.length) {G__36440__a[G__36440__i] = arguments[G__36440__i + 0]; ++G__36440__i;}
  args = new cljs.core.IndexedSeq(G__36440__a,0);
} 
return G__36439__delegate.call(this,args);};
G__36439.cljs$lang$maxFixedArity = 0;
G__36439.cljs$lang$applyTo = (function (arglist__36441){
var args = cljs.core.seq(arglist__36441);
return G__36439__delegate(args);
});
G__36439.cljs$core$IFn$_invoke$arity$variadic = G__36439__delegate;
return G__36439;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__36442__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__36442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36443__i = 0, G__36443__a = new Array(arguments.length -  0);
while (G__36443__i < G__36443__a.length) {G__36443__a[G__36443__i] = arguments[G__36443__i + 0]; ++G__36443__i;}
  args = new cljs.core.IndexedSeq(G__36443__a,0);
} 
return G__36442__delegate.call(this,args);};
G__36442.cljs$lang$maxFixedArity = 0;
G__36442.cljs$lang$applyTo = (function (arglist__36444){
var args = cljs.core.seq(arglist__36444);
return G__36442__delegate(args);
});
G__36442.cljs$core$IFn$_invoke$arity$variadic = G__36442__delegate;
return G__36442;
})()
:lattice_proteins.core.draw_state));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27251__27252__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27251__27252__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lattice_proteins.core.lattice_proteins,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lattice-proteins"], null));
}

//# sourceMappingURL=core.js.map?rel=1479558677671