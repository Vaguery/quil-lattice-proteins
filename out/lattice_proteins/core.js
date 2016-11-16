// Compiled by ClojureScript 1.9.293 {}
goog.provide('lattice_proteins.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
lattice_proteins.core.setup = (function lattice_proteins$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(255));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
lattice_proteins.core.update_state = (function lattice_proteins$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.3),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.01)], null);
});
lattice_proteins.core.draw_state = (function lattice_proteins$core$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255),(1));

quil.core.no_stroke.call(null);

var angle = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.rand.call(null));
var r = ((10) + cljs.core.rand.call(null,(90)));
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__36285__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__36285__auto__);

return quil.core.ellipse.call(null,x,y,r,r);
}finally {quil.core.pop_matrix.call(null);
}});
lattice_proteins.core.lattice_proteins = (function lattice_proteins$core$lattice_proteins(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lattice-proteins",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.update_state))?(function() { 
var G__36828__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.update_state,args);
};
var G__36828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36829__i = 0, G__36829__a = new Array(arguments.length -  0);
while (G__36829__i < G__36829__a.length) {G__36829__a[G__36829__i] = arguments[G__36829__i + 0]; ++G__36829__i;}
  args = new cljs.core.IndexedSeq(G__36829__a,0);
} 
return G__36828__delegate.call(this,args);};
G__36828.cljs$lang$maxFixedArity = 0;
G__36828.cljs$lang$applyTo = (function (arglist__36830){
var args = cljs.core.seq(arglist__36830);
return G__36828__delegate(args);
});
G__36828.cljs$core$IFn$_invoke$arity$variadic = G__36828__delegate;
return G__36828;
})()
:lattice_proteins.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.setup))?(function() { 
var G__36831__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.setup,args);
};
var G__36831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36832__i = 0, G__36832__a = new Array(arguments.length -  0);
while (G__36832__i < G__36832__a.length) {G__36832__a[G__36832__i] = arguments[G__36832__i + 0]; ++G__36832__i;}
  args = new cljs.core.IndexedSeq(G__36832__a,0);
} 
return G__36831__delegate.call(this,args);};
G__36831.cljs$lang$maxFixedArity = 0;
G__36831.cljs$lang$applyTo = (function (arglist__36833){
var args = cljs.core.seq(arglist__36833);
return G__36831__delegate(args);
});
G__36831.cljs$core$IFn$_invoke$arity$variadic = G__36831__delegate;
return G__36831;
})()
:lattice_proteins.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lattice_proteins.core.draw_state))?(function() { 
var G__36834__delegate = function (args){
return cljs.core.apply.call(null,lattice_proteins.core.draw_state,args);
};
var G__36834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36835__i = 0, G__36835__a = new Array(arguments.length -  0);
while (G__36835__i < G__36835__a.length) {G__36835__a[G__36835__i] = arguments[G__36835__i + 0]; ++G__36835__i;}
  args = new cljs.core.IndexedSeq(G__36835__a,0);
} 
return G__36834__delegate.call(this,args);};
G__36834.cljs$lang$maxFixedArity = 0;
G__36834.cljs$lang$applyTo = (function (arglist__36836){
var args = cljs.core.seq(arglist__36836);
return G__36834__delegate(args);
});
G__36834.cljs$core$IFn$_invoke$arity$variadic = G__36834__delegate;
return G__36834;
})()
:lattice_proteins.core.draw_state));
});
goog.exportSymbol('lattice_proteins.core.lattice_proteins', lattice_proteins.core.lattice_proteins);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__35501__35502__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__35501__35502__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lattice_proteins.core.lattice_proteins,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lattice-proteins"], null));
}

//# sourceMappingURL=core.js.map?rel=1479259432709