// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(230));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(10)),cljs.core.rand_int.call(null,(10))], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.3),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.01)], null);
});
lattice_proteins.core.draw_state = (function lattice_proteins$core$draw_state(state){
quil.core.no_stroke.call(null);

var vec__36108 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(state);
var i = cljs.core.nth.call(null,vec__36108,(0),null);
var j = cljs.core.nth.call(null,vec__36108,(1),null);
var cell_size = (20);
quil.core.fill.call(null,cljs.core.rand_int.call(null,(255)),(200),(200));

var tr__28035__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cell_size * i) + (quil.core.width.call(null) / (2))),((cell_size * j) + (quil.core.width.call(null) / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__28035__auto__);

return quil.core.ellipse.call(null,(0),(0),(10),(10));
}finally {quil.core.pop_matrix.call(null);
}});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__36111__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__36111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36112__i = 0, G__36112__a = new Array(arguments.length -  0);
while (G__36112__i < G__36112__a.length) {G__36112__a[G__36112__i] = arguments[G__36112__i + 0]; ++G__36112__i;}
  args = new cljs.core.IndexedSeq(G__36112__a,0);
} 
return G__36111__delegate.call(this,args);};
G__36111.cljs$lang$maxFixedArity = 0;
G__36111.cljs$lang$applyTo = (function (arglist__36113){
var args = cljs.core.seq(arglist__36113);
return G__36111__delegate(args);
});
G__36111.cljs$core$IFn$_invoke$arity$variadic = G__36111__delegate;
return G__36111;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__36114__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__36114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36115__i = 0, G__36115__a = new Array(arguments.length -  0);
while (G__36115__i < G__36115__a.length) {G__36115__a[G__36115__i] = arguments[G__36115__i + 0]; ++G__36115__i;}
  args = new cljs.core.IndexedSeq(G__36115__a,0);
} 
return G__36114__delegate.call(this,args);};
G__36114.cljs$lang$maxFixedArity = 0;
G__36114.cljs$lang$applyTo = (function (arglist__36116){
var args = cljs.core.seq(arglist__36116);
return G__36114__delegate(args);
});
G__36114.cljs$core$IFn$_invoke$arity$variadic = G__36114__delegate;
return G__36114;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__36117__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__36117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36118__i = 0, G__36118__a = new Array(arguments.length -  0);
while (G__36118__i < G__36118__a.length) {G__36118__a[G__36118__i] = arguments[G__36118__i + 0]; ++G__36118__i;}
  args = new cljs.core.IndexedSeq(G__36118__a,0);
} 
return G__36117__delegate.call(this,args);};
G__36117.cljs$lang$maxFixedArity = 0;
G__36117.cljs$lang$applyTo = (function (arglist__36119){
var args = cljs.core.seq(arglist__36119);
return G__36117__delegate(args);
});
G__36117.cljs$core$IFn$_invoke$arity$variadic = G__36117__delegate;
return G__36117;
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

//# sourceMappingURL=core.js.map?rel=1479557585873