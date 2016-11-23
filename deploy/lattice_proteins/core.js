// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.cell_size = (6);
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate((60));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.background.cljs$core$IFn$_invoke$arity$1((230));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chain,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((20),cljs.core.cst$kw$west),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),cljs.core.cst$kw$north),cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((40),cljs.core.cst$kw$east),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),cljs.core.cst$kw$north),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((20),cljs.core.cst$kw$west)], 0))),cljs.core.cst$kw$cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$frustration,(0),cljs.core.cst$kw$updates,(0)], null);
});
lattice_proteins.core.random_fold = (function lattice_proteins$core$random_fold(chain){
var changed_idx = cljs.core.rand_int(cljs.core.count(chain));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(changed_idx,chain),(function (){var x__7380__auto__ = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$east,cljs.core.cst$kw$west,cljs.core.cst$kw$north,cljs.core.cst$kw$south], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.array_seq([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((changed_idx + (1)),chain)], 0)));
});
lattice_proteins.core.next_ij = (function lattice_proteins$core$next_ij(p__14101,direction){
var vec__14106 = p__14101;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(1),null);
var G__14109 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__14109) {
case "east":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),j], null);

break;
case "south":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null);

break;
case "west":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),j], null);

break;
case "north":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j - (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);

}
});
lattice_proteins.core.all_ij = (function lattice_proteins$core$all_ij(start_ij,chain){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ij_points,next_move){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ij_points,lattice_proteins.core.next_ij(cljs.core.last(ij_points),next_move));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ij], null),chain);
});
lattice_proteins.core.collisions_QMARK_ = (function lattice_proteins$core$collisions_QMARK_(chain){
var points = lattice_proteins.core.all_ij(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),chain);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(points),cljs.core.count(cljs.core.set(points)));
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
var new_fold = lattice_proteins.core.random_fold(cljs.core.cst$kw$chain.cljs$core$IFn$_invoke$arity$1(state));
var bad_QMARK_ = lattice_proteins.core.collisions_QMARK_(new_fold);
var old_frustration = cljs.core.cst$kw$frustration.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chain,(cljs.core.truth_(bad_QMARK_)?cljs.core.cst$kw$chain.cljs$core$IFn$_invoke$arity$1(state):new_fold),cljs.core.cst$kw$cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$frustration,(cljs.core.truth_(bad_QMARK_)?(old_frustration + (1)):old_frustration),cljs.core.cst$kw$updates,(cljs.core.cst$kw$updates.cljs$core$IFn$_invoke$arity$1(state) + (1))], null);
});
lattice_proteins.core.end_point = (function lattice_proteins$core$end_point(dir,scale){
var G__14112 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__14112) {
case "east":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,(0)], null);

break;
case "south":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),scale], null);

break;
case "west":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- scale),(0)], null);

break;
case "north":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- scale)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);

}
});
lattice_proteins.core.draw_state = (function lattice_proteins$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((40),(10),(248));

quil.core.fill.cljs$core$IFn$_invoke$arity$4((130),(255),(200),(150));

var cursor = cljs.core.cst$kw$cursor.cljs$core$IFn$_invoke$arity$1(state);
var chain = cljs.core.cst$kw$chain.cljs$core$IFn$_invoke$arity$1(state);
while(true){
var vec__14117 = cursor;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117,(1),null);
var tr__8120__auto___14120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lattice_proteins.core.cell_size * i) + (quil.core.width() / (2))),((lattice_proteins.core.cell_size * j) + (quil.core.width() / (2)))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__8120__auto___14120);

quil.core.stroke.cljs$core$IFn$_invoke$arity$4((255),(255),(0),(100));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.line,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),lattice_proteins.core.end_point(cljs.core.first(chain),lattice_proteins.core.cell_size)));

quil.core.no_stroke();

quil.core.ellipse((0),(0),(lattice_proteins.core.cell_size - (1)),(lattice_proteins.core.cell_size - (1)));
}finally {quil.core.pop_matrix();
}
if(cljs.core.empty_QMARK_(chain)){
return null;
} else {
var G__14121 = lattice_proteins.core.next_ij(cursor,cljs.core.first(chain));
var G__14122 = cljs.core.rest(chain);
cursor = G__14121;
chain = G__14122;
continue;
}
break;
}
});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"lattice-proteins",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(lattice_proteins.core.update_state))?(function() { 
var G__14123__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lattice_proteins.core.update_state,args);
};
var G__14123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14124__i = 0, G__14124__a = new Array(arguments.length -  0);
while (G__14124__i < G__14124__a.length) {G__14124__a[G__14124__i] = arguments[G__14124__i + 0]; ++G__14124__i;}
  args = new cljs.core.IndexedSeq(G__14124__a,0);
} 
return G__14123__delegate.call(this,args);};
G__14123.cljs$lang$maxFixedArity = 0;
G__14123.cljs$lang$applyTo = (function (arglist__14125){
var args = cljs.core.seq(arglist__14125);
return G__14123__delegate(args);
});
G__14123.cljs$core$IFn$_invoke$arity$variadic = G__14123__delegate;
return G__14123;
})()
:lattice_proteins.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(lattice_proteins.core.setup))?(function() { 
var G__14126__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lattice_proteins.core.setup,args);
};
var G__14126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14127__i = 0, G__14127__a = new Array(arguments.length -  0);
while (G__14127__i < G__14127__a.length) {G__14127__a[G__14127__i] = arguments[G__14127__i + 0]; ++G__14127__i;}
  args = new cljs.core.IndexedSeq(G__14127__a,0);
} 
return G__14126__delegate.call(this,args);};
G__14126.cljs$lang$maxFixedArity = 0;
G__14126.cljs$lang$applyTo = (function (arglist__14128){
var args = cljs.core.seq(arglist__14128);
return G__14126__delegate(args);
});
G__14126.cljs$core$IFn$_invoke$arity$variadic = G__14126__delegate;
return G__14126;
})()
:lattice_proteins.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(lattice_proteins.core.draw_state))?(function() { 
var G__14129__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lattice_proteins.core.draw_state,args);
};
var G__14129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14130__i = 0, G__14130__a = new Array(arguments.length -  0);
while (G__14130__i < G__14130__a.length) {G__14130__a[G__14130__i] = arguments[G__14130__i + 0]; ++G__14130__i;}
  args = new cljs.core.IndexedSeq(G__14130__a,0);
} 
return G__14129__delegate.call(this,args);};
G__14129.cljs$lang$maxFixedArity = 0;
G__14129.cljs$lang$applyTo = (function (arglist__14131){
var args = cljs.core.seq(arglist__14131);
return G__14129__delegate(args);
});
G__14129.cljs$core$IFn$_invoke$arity$variadic = G__14129__delegate;
return G__14129;
})()
:lattice_proteins.core.draw_state)], 0));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some((function (p1__7735__7736__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__7735__7736__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,lattice_proteins.core.lattice_proteins,cljs.core.cst$kw$host_DASH_id,"lattice-proteins"], null));
}
