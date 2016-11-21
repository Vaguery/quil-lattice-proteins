// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.cell_size = (20);
lattice_proteins.core.random_fold = (function lattice_proteins$core$random_fold(length){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.call(null,length,(function (){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"north","north",651323902)], null));
})));
});
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(230));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chain","chain",15631029),lattice_proteins.core.random_fold.call(null,(3)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
return state;
});
lattice_proteins.core.move_cursor = (function lattice_proteins$core$move_cursor(p__34099,direction){
var vec__34104 = p__34099;
var i = cljs.core.nth.call(null,vec__34104,(0),null);
var j = cljs.core.nth.call(null,vec__34104,(1),null);
var G__34107 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__34107) {
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
var G__34110 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__34110) {
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
var vec__34115 = cursor;
var i = cljs.core.nth.call(null,vec__34115,(0),null);
var j = cljs.core.nth.call(null,vec__34115,(1),null);
var tr__26452__auto___34118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lattice_proteins.core.cell_size * i) + (quil.core.width.call(null) / (2))),((lattice_proteins.core.cell_size * j) + (quil.core.width.call(null) / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26452__auto___34118);

cljs.core.apply.call(null,quil.core.line,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),lattice_proteins.core.connector_line.call(null,cljs.core.first.call(null,chain),lattice_proteins.core.cell_size)));

quil.core.ellipse.call(null,(0),(0),(10),(10));
}finally {quil.core.pop_matrix.call(null);
}
if(cljs.core.empty_QMARK_.call(null,chain)){
return null;
} else {
var G__34119 = lattice_proteins.core.move_cursor.call(null,cursor,cljs.core.first.call(null,chain));
var G__34120 = cljs.core.rest.call(null,chain);
cursor = G__34119;
chain = G__34120;
continue;
}
break;
}
});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__34121__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__34121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34122__i = 0, G__34122__a = new Array(arguments.length -  0);
while (G__34122__i < G__34122__a.length) {G__34122__a[G__34122__i] = arguments[G__34122__i + 0]; ++G__34122__i;}
  args = new cljs.core.IndexedSeq(G__34122__a,0);
} 
return G__34121__delegate.call(this,args);};
G__34121.cljs$lang$maxFixedArity = 0;
G__34121.cljs$lang$applyTo = (function (arglist__34123){
var args = cljs.core.seq(arglist__34123);
return G__34121__delegate(args);
});
G__34121.cljs$core$IFn$_invoke$arity$variadic = G__34121__delegate;
return G__34121;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__34124__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__34124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34125__i = 0, G__34125__a = new Array(arguments.length -  0);
while (G__34125__i < G__34125__a.length) {G__34125__a[G__34125__i] = arguments[G__34125__i + 0]; ++G__34125__i;}
  args = new cljs.core.IndexedSeq(G__34125__a,0);
} 
return G__34124__delegate.call(this,args);};
G__34124.cljs$lang$maxFixedArity = 0;
G__34124.cljs$lang$applyTo = (function (arglist__34126){
var args = cljs.core.seq(arglist__34126);
return G__34124__delegate(args);
});
G__34124.cljs$core$IFn$_invoke$arity$variadic = G__34124__delegate;
return G__34124;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__34127__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__34127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34128__i = 0, G__34128__a = new Array(arguments.length -  0);
while (G__34128__i < G__34128__a.length) {G__34128__a[G__34128__i] = arguments[G__34128__i + 0]; ++G__34128__i;}
  args = new cljs.core.IndexedSeq(G__34128__a,0);
} 
return G__34127__delegate.call(this,args);};
G__34127.cljs$lang$maxFixedArity = 0;
G__34127.cljs$lang$applyTo = (function (arglist__34129){
var args = cljs.core.seq(arglist__34129);
return G__34127__delegate(args);
});
G__34127.cljs$core$IFn$_invoke$arity$variadic = G__34127__delegate;
return G__34127;
})()
:lattice_proteins.core.draw_state));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26067__26068__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26067__26068__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lattice_proteins.core.lattice_proteins,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lattice-proteins"], null));
}

//# sourceMappingURL=core.js.map?rel=1479730999848