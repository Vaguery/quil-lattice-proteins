// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.cell_size = (20);
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(230));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"west","west",708776677)], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
return state;
});
lattice_proteins.core.move_cursor = (function lattice_proteins$core$move_cursor(p__35620,direction){
var vec__35625 = p__35620;
var i = cljs.core.nth.call(null,vec__35625,(0),null);
var j = cljs.core.nth.call(null,vec__35625,(1),null);
var G__35628 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__35628) {
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
lattice_proteins.core.connector_line = (function lattice_proteins$core$connector_line(dir,scale){
var G__35631 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__35631) {
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
quil.core.background.call(null,(230));

quil.core.fill.call(null,(20),(255),(200));

quil.core.stroke.call(null,(255),(255),(0),(120));

var cursor = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(state);
var chain = new cljs.core.Keyword(null,"chain","chain",15631029).cljs$core$IFn$_invoke$arity$1(state);
while(true){
var vec__35636 = cursor;
var i = cljs.core.nth.call(null,vec__35636,(0),null);
var j = cljs.core.nth.call(null,vec__35636,(1),null);
var tr__26453__auto___35639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lattice_proteins.core.cell_size * i) + (quil.core.width.call(null) / (2))),((lattice_proteins.core.cell_size * j) + (quil.core.width.call(null) / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26453__auto___35639);

cljs.core.apply.call(null,quil.core.line,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),lattice_proteins.core.connector_line.call(null,cljs.core.first.call(null,chain),lattice_proteins.core.cell_size)));

quil.core.ellipse.call(null,(0),(0),(10),(10));
}finally {quil.core.pop_matrix.call(null);
}
if(cljs.core.empty_QMARK_.call(null,chain)){
return null;
} else {
var G__35640 = lattice_proteins.core.move_cursor.call(null,cursor,cljs.core.first.call(null,chain));
var G__35641 = cljs.core.rest.call(null,chain);
cursor = G__35640;
chain = G__35641;
continue;
}
break;
}
});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__35642__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__35642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35643__i = 0, G__35643__a = new Array(arguments.length -  0);
while (G__35643__i < G__35643__a.length) {G__35643__a[G__35643__i] = arguments[G__35643__i + 0]; ++G__35643__i;}
  args = new cljs.core.IndexedSeq(G__35643__a,0);
} 
return G__35642__delegate.call(this,args);};
G__35642.cljs$lang$maxFixedArity = 0;
G__35642.cljs$lang$applyTo = (function (arglist__35644){
var args = cljs.core.seq(arglist__35644);
return G__35642__delegate(args);
});
G__35642.cljs$core$IFn$_invoke$arity$variadic = G__35642__delegate;
return G__35642;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__35645__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__35645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35646__i = 0, G__35646__a = new Array(arguments.length -  0);
while (G__35646__i < G__35646__a.length) {G__35646__a[G__35646__i] = arguments[G__35646__i + 0]; ++G__35646__i;}
  args = new cljs.core.IndexedSeq(G__35646__a,0);
} 
return G__35645__delegate.call(this,args);};
G__35645.cljs$lang$maxFixedArity = 0;
G__35645.cljs$lang$applyTo = (function (arglist__35647){
var args = cljs.core.seq(arglist__35647);
return G__35645__delegate(args);
});
G__35645.cljs$core$IFn$_invoke$arity$variadic = G__35645__delegate;
return G__35645;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__35648__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__35648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35649__i = 0, G__35649__a = new Array(arguments.length -  0);
while (G__35649__i < G__35649__a.length) {G__35649__a[G__35649__i] = arguments[G__35649__i + 0]; ++G__35649__i;}
  args = new cljs.core.IndexedSeq(G__35649__a,0);
} 
return G__35648__delegate.call(this,args);};
G__35648.cljs$lang$maxFixedArity = 0;
G__35648.cljs$lang$applyTo = (function (arglist__35650){
var args = cljs.core.seq(arglist__35650);
return G__35648__delegate(args);
});
G__35648.cljs$core$IFn$_invoke$arity$variadic = G__35648__delegate;
return G__35648;
})()
:lattice_proteins.core.draw_state));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26068__26069__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26068__26069__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lattice_proteins.core.lattice_proteins,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lattice-proteins"], null));
}

//# sourceMappingURL=core.js.map?rel=1479730369012