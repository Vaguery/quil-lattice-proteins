// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32397){
var map__32422 = p__32397;
var map__32422__$1 = ((((!((map__32422 == null)))?((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32422):map__32422);
var m = map__32422__$1;
var n = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32424_32446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32425_32447 = null;
var count__32426_32448 = (0);
var i__32427_32449 = (0);
while(true){
if((i__32427_32449 < count__32426_32448)){
var f_32450 = cljs.core._nth.call(null,chunk__32425_32447,i__32427_32449);
cljs.core.println.call(null,"  ",f_32450);

var G__32451 = seq__32424_32446;
var G__32452 = chunk__32425_32447;
var G__32453 = count__32426_32448;
var G__32454 = (i__32427_32449 + (1));
seq__32424_32446 = G__32451;
chunk__32425_32447 = G__32452;
count__32426_32448 = G__32453;
i__32427_32449 = G__32454;
continue;
} else {
var temp__4657__auto___32455 = cljs.core.seq.call(null,seq__32424_32446);
if(temp__4657__auto___32455){
var seq__32424_32456__$1 = temp__4657__auto___32455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32424_32456__$1)){
var c__25689__auto___32457 = cljs.core.chunk_first.call(null,seq__32424_32456__$1);
var G__32458 = cljs.core.chunk_rest.call(null,seq__32424_32456__$1);
var G__32459 = c__25689__auto___32457;
var G__32460 = cljs.core.count.call(null,c__25689__auto___32457);
var G__32461 = (0);
seq__32424_32446 = G__32458;
chunk__32425_32447 = G__32459;
count__32426_32448 = G__32460;
i__32427_32449 = G__32461;
continue;
} else {
var f_32462 = cljs.core.first.call(null,seq__32424_32456__$1);
cljs.core.println.call(null,"  ",f_32462);

var G__32463 = cljs.core.next.call(null,seq__32424_32456__$1);
var G__32464 = null;
var G__32465 = (0);
var G__32466 = (0);
seq__32424_32446 = G__32463;
chunk__32425_32447 = G__32464;
count__32426_32448 = G__32465;
i__32427_32449 = G__32466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24875__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32467)))?cljs.core.second.call(null,arglists_32467):arglists_32467));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32428_32468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32429_32469 = null;
var count__32430_32470 = (0);
var i__32431_32471 = (0);
while(true){
if((i__32431_32471 < count__32430_32470)){
var vec__32432_32472 = cljs.core._nth.call(null,chunk__32429_32469,i__32431_32471);
var name_32473 = cljs.core.nth.call(null,vec__32432_32472,(0),null);
var map__32435_32474 = cljs.core.nth.call(null,vec__32432_32472,(1),null);
var map__32435_32475__$1 = ((((!((map__32435_32474 == null)))?((((map__32435_32474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32435_32474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32435_32474):map__32435_32474);
var doc_32476 = cljs.core.get.call(null,map__32435_32475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32477 = cljs.core.get.call(null,map__32435_32475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32473);

cljs.core.println.call(null," ",arglists_32477);

if(cljs.core.truth_(doc_32476)){
cljs.core.println.call(null," ",doc_32476);
} else {
}

var G__32478 = seq__32428_32468;
var G__32479 = chunk__32429_32469;
var G__32480 = count__32430_32470;
var G__32481 = (i__32431_32471 + (1));
seq__32428_32468 = G__32478;
chunk__32429_32469 = G__32479;
count__32430_32470 = G__32480;
i__32431_32471 = G__32481;
continue;
} else {
var temp__4657__auto___32482 = cljs.core.seq.call(null,seq__32428_32468);
if(temp__4657__auto___32482){
var seq__32428_32483__$1 = temp__4657__auto___32482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32428_32483__$1)){
var c__25689__auto___32484 = cljs.core.chunk_first.call(null,seq__32428_32483__$1);
var G__32485 = cljs.core.chunk_rest.call(null,seq__32428_32483__$1);
var G__32486 = c__25689__auto___32484;
var G__32487 = cljs.core.count.call(null,c__25689__auto___32484);
var G__32488 = (0);
seq__32428_32468 = G__32485;
chunk__32429_32469 = G__32486;
count__32430_32470 = G__32487;
i__32431_32471 = G__32488;
continue;
} else {
var vec__32437_32489 = cljs.core.first.call(null,seq__32428_32483__$1);
var name_32490 = cljs.core.nth.call(null,vec__32437_32489,(0),null);
var map__32440_32491 = cljs.core.nth.call(null,vec__32437_32489,(1),null);
var map__32440_32492__$1 = ((((!((map__32440_32491 == null)))?((((map__32440_32491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32440_32491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440_32491):map__32440_32491);
var doc_32493 = cljs.core.get.call(null,map__32440_32492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32494 = cljs.core.get.call(null,map__32440_32492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32490);

cljs.core.println.call(null," ",arglists_32494);

if(cljs.core.truth_(doc_32493)){
cljs.core.println.call(null," ",doc_32493);
} else {
}

var G__32495 = cljs.core.next.call(null,seq__32428_32483__$1);
var G__32496 = null;
var G__32497 = (0);
var G__32498 = (0);
seq__32428_32468 = G__32495;
chunk__32429_32469 = G__32496;
count__32430_32470 = G__32497;
i__32431_32471 = G__32498;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32442 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32443 = null;
var count__32444 = (0);
var i__32445 = (0);
while(true){
if((i__32445 < count__32444)){
var role = cljs.core._nth.call(null,chunk__32443,i__32445);
var temp__4657__auto___32499__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32499__$1)){
var spec_32500 = temp__4657__auto___32499__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32500));
} else {
}

var G__32501 = seq__32442;
var G__32502 = chunk__32443;
var G__32503 = count__32444;
var G__32504 = (i__32445 + (1));
seq__32442 = G__32501;
chunk__32443 = G__32502;
count__32444 = G__32503;
i__32445 = G__32504;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32442);
if(temp__4657__auto____$1){
var seq__32442__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32442__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__32442__$1);
var G__32505 = cljs.core.chunk_rest.call(null,seq__32442__$1);
var G__32506 = c__25689__auto__;
var G__32507 = cljs.core.count.call(null,c__25689__auto__);
var G__32508 = (0);
seq__32442 = G__32505;
chunk__32443 = G__32506;
count__32444 = G__32507;
i__32445 = G__32508;
continue;
} else {
var role = cljs.core.first.call(null,seq__32442__$1);
var temp__4657__auto___32509__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32509__$2)){
var spec_32510 = temp__4657__auto___32509__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32510));
} else {
}

var G__32511 = cljs.core.next.call(null,seq__32442__$1);
var G__32512 = null;
var G__32513 = (0);
var G__32514 = (0);
seq__32442 = G__32511;
chunk__32443 = G__32512;
count__32444 = G__32513;
i__32445 = G__32514;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479258321539