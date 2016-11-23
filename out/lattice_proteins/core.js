// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.cell_size = (6);
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(230));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chain","chain",15631029),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,(20),new cljs.core.Keyword(null,"west","west",708776677)),cljs.core.repeat.call(null,(2),new cljs.core.Keyword(null,"north","north",651323902)),cljs.core.repeat.call(null,(40),new cljs.core.Keyword(null,"east","east",1189821678)),cljs.core.repeat.call(null,(2),new cljs.core.Keyword(null,"north","north",651323902)),cljs.core.repeat.call(null,(20),new cljs.core.Keyword(null,"west","west",708776677)))),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"frustration","frustration",1230008164),(0),new cljs.core.Keyword(null,"updates","updates",2013983452),(0)], null);
});
lattice_proteins.core.random_fold = (function lattice_proteins$core$random_fold(chain){
var changed_idx = cljs.core.rand_int.call(null,cljs.core.count.call(null,chain));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.take.call(null,changed_idx,chain),(function (){var x__7380__auto__ = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.drop.call(null,(changed_idx + (1)),chain)));
});
lattice_proteins.core.next_ij = (function lattice_proteins$core$next_ij(p__8220,direction){
var vec__8225 = p__8220;
var i = cljs.core.nth.call(null,vec__8225,(0),null);
var j = cljs.core.nth.call(null,vec__8225,(1),null);
var G__8228 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__8228) {
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
return cljs.core.reduce.call(null,(function (ij_points,next_move){
return cljs.core.conj.call(null,ij_points,lattice_proteins.core.next_ij.call(null,cljs.core.last.call(null,ij_points),next_move));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ij], null),chain);
});
lattice_proteins.core.collisions_QMARK_ = (function lattice_proteins$core$collisions_QMARK_(chain){
var points = lattice_proteins.core.all_ij.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),chain);
return cljs.core.not_EQ_.call(null,cljs.core.count.call(null,points),cljs.core.count.call(null,cljs.core.set.call(null,points)));
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
var new_fold = lattice_proteins.core.random_fold.call(null,new cljs.core.Keyword(null,"chain","chain",15631029).cljs$core$IFn$_invoke$arity$1(state));
var bad_QMARK_ = lattice_proteins.core.collisions_QMARK_.call(null,new_fold);
var old_frustration = new cljs.core.Keyword(null,"frustration","frustration",1230008164).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chain","chain",15631029),(cljs.core.truth_(bad_QMARK_)?new cljs.core.Keyword(null,"chain","chain",15631029).cljs$core$IFn$_invoke$arity$1(state):new_fold),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"frustration","frustration",1230008164),(cljs.core.truth_(bad_QMARK_)?(old_frustration + (1)):old_frustration),new cljs.core.Keyword(null,"updates","updates",2013983452),(new cljs.core.Keyword(null,"updates","updates",2013983452).cljs$core$IFn$_invoke$arity$1(state) + (1))], null);
});
lattice_proteins.core.end_point = (function lattice_proteins$core$end_point(dir,scale){
var G__8231 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__8231) {
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
quil.core.background.call(null,(40),(10),(248));

quil.core.fill.call(null,(130),(255),(200),(150));

var cursor = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(state);
var chain = new cljs.core.Keyword(null,"chain","chain",15631029).cljs$core$IFn$_invoke$arity$1(state);
while(true){
var vec__8236 = cursor;
var i = cljs.core.nth.call(null,vec__8236,(0),null);
var j = cljs.core.nth.call(null,vec__8236,(1),null);
var tr__8120__auto___8239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lattice_proteins.core.cell_size * i) + (quil.core.width.call(null) / (2))),((lattice_proteins.core.cell_size * j) + (quil.core.width.call(null) / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8120__auto___8239);

quil.core.stroke.call(null,(255),(255),(0),(100));

cljs.core.apply.call(null,quil.core.line,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),lattice_proteins.core.end_point.call(null,cljs.core.first.call(null,chain),lattice_proteins.core.cell_size)));

quil.core.no_stroke.call(null);

quil.core.ellipse.call(null,(0),(0),(lattice_proteins.core.cell_size - (1)),(lattice_proteins.core.cell_size - (1)));
}finally {quil.core.pop_matrix.call(null);
}
if(cljs.core.empty_QMARK_.call(null,chain)){
return null;
} else {
var G__8240 = lattice_proteins.core.next_ij.call(null,cursor,cljs.core.first.call(null,chain));
var G__8241 = cljs.core.rest.call(null,chain);
cursor = G__8240;
chain = G__8241;
continue;
}
break;
}
});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__8242__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__8242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8243__i = 0, G__8243__a = new Array(arguments.length -  0);
while (G__8243__i < G__8243__a.length) {G__8243__a[G__8243__i] = arguments[G__8243__i + 0]; ++G__8243__i;}
  args = new cljs.core.IndexedSeq(G__8243__a,0);
} 
return G__8242__delegate.call(this,args);};
G__8242.cljs$lang$maxFixedArity = 0;
G__8242.cljs$lang$applyTo = (function (arglist__8244){
var args = cljs.core.seq(arglist__8244);
return G__8242__delegate(args);
});
G__8242.cljs$core$IFn$_invoke$arity$variadic = G__8242__delegate;
return G__8242;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__8245__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__8245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8246__i = 0, G__8246__a = new Array(arguments.length -  0);
while (G__8246__i < G__8246__a.length) {G__8246__a[G__8246__i] = arguments[G__8246__i + 0]; ++G__8246__i;}
  args = new cljs.core.IndexedSeq(G__8246__a,0);
} 
return G__8245__delegate.call(this,args);};
G__8245.cljs$lang$maxFixedArity = 0;
G__8245.cljs$lang$applyTo = (function (arglist__8247){
var args = cljs.core.seq(arglist__8247);
return G__8245__delegate(args);
});
G__8245.cljs$core$IFn$_invoke$arity$variadic = G__8245__delegate;
return G__8245;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__8248__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__8248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8249__i = 0, G__8249__a = new Array(arguments.length -  0);
while (G__8249__i < G__8249__a.length) {G__8249__a[G__8249__i] = arguments[G__8249__i + 0]; ++G__8249__i;}
  args = new cljs.core.IndexedSeq(G__8249__a,0);
} 
return G__8248__delegate.call(this,args);};
G__8248.cljs$lang$maxFixedArity = 0;
G__8248.cljs$lang$applyTo = (function (arglist__8250){
var args = cljs.core.seq(arglist__8250);
return G__8248__delegate(args);
});
G__8248.cljs$core$IFn$_invoke$arity$variadic = G__8248__delegate;
return G__8248;
})()
:lattice_proteins.core.draw_state));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7735__7736__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7735__7736__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lattice_proteins.core.lattice_proteins,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lattice-proteins"], null));
}

//# sourceMappingURL=core.js.map