// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24875__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24875__auto__){
return or__24875__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24875__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30012_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30012_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30017 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30018 = null;
var count__30019 = (0);
var i__30020 = (0);
while(true){
if((i__30020 < count__30019)){
var n = cljs.core._nth.call(null,chunk__30018,i__30020);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30021 = seq__30017;
var G__30022 = chunk__30018;
var G__30023 = count__30019;
var G__30024 = (i__30020 + (1));
seq__30017 = G__30021;
chunk__30018 = G__30022;
count__30019 = G__30023;
i__30020 = G__30024;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30017);
if(temp__4657__auto__){
var seq__30017__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30017__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__30017__$1);
var G__30025 = cljs.core.chunk_rest.call(null,seq__30017__$1);
var G__30026 = c__25689__auto__;
var G__30027 = cljs.core.count.call(null,c__25689__auto__);
var G__30028 = (0);
seq__30017 = G__30025;
chunk__30018 = G__30026;
count__30019 = G__30027;
i__30020 = G__30028;
continue;
} else {
var n = cljs.core.first.call(null,seq__30017__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30029 = cljs.core.next.call(null,seq__30017__$1);
var G__30030 = null;
var G__30031 = (0);
var G__30032 = (0);
seq__30017 = G__30029;
chunk__30018 = G__30030;
count__30019 = G__30031;
i__30020 = G__30032;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30083_30094 = cljs.core.seq.call(null,deps);
var chunk__30084_30095 = null;
var count__30085_30096 = (0);
var i__30086_30097 = (0);
while(true){
if((i__30086_30097 < count__30085_30096)){
var dep_30098 = cljs.core._nth.call(null,chunk__30084_30095,i__30086_30097);
topo_sort_helper_STAR_.call(null,dep_30098,(depth + (1)),state);

var G__30099 = seq__30083_30094;
var G__30100 = chunk__30084_30095;
var G__30101 = count__30085_30096;
var G__30102 = (i__30086_30097 + (1));
seq__30083_30094 = G__30099;
chunk__30084_30095 = G__30100;
count__30085_30096 = G__30101;
i__30086_30097 = G__30102;
continue;
} else {
var temp__4657__auto___30103 = cljs.core.seq.call(null,seq__30083_30094);
if(temp__4657__auto___30103){
var seq__30083_30104__$1 = temp__4657__auto___30103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30083_30104__$1)){
var c__25689__auto___30105 = cljs.core.chunk_first.call(null,seq__30083_30104__$1);
var G__30106 = cljs.core.chunk_rest.call(null,seq__30083_30104__$1);
var G__30107 = c__25689__auto___30105;
var G__30108 = cljs.core.count.call(null,c__25689__auto___30105);
var G__30109 = (0);
seq__30083_30094 = G__30106;
chunk__30084_30095 = G__30107;
count__30085_30096 = G__30108;
i__30086_30097 = G__30109;
continue;
} else {
var dep_30110 = cljs.core.first.call(null,seq__30083_30104__$1);
topo_sort_helper_STAR_.call(null,dep_30110,(depth + (1)),state);

var G__30111 = cljs.core.next.call(null,seq__30083_30104__$1);
var G__30112 = null;
var G__30113 = (0);
var G__30114 = (0);
seq__30083_30094 = G__30111;
chunk__30084_30095 = G__30112;
count__30085_30096 = G__30113;
i__30086_30097 = G__30114;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30087){
var vec__30091 = p__30087;
var seq__30092 = cljs.core.seq.call(null,vec__30091);
var first__30093 = cljs.core.first.call(null,seq__30092);
var seq__30092__$1 = cljs.core.next.call(null,seq__30092);
var x = first__30093;
var xs = seq__30092__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30091,seq__30092,first__30093,seq__30092__$1,x,xs,get_deps__$1){
return (function (p1__30033_SHARP_){
return clojure.set.difference.call(null,p1__30033_SHARP_,x);
});})(vec__30091,seq__30092,first__30093,seq__30092__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30127 = cljs.core.seq.call(null,provides);
var chunk__30128 = null;
var count__30129 = (0);
var i__30130 = (0);
while(true){
if((i__30130 < count__30129)){
var prov = cljs.core._nth.call(null,chunk__30128,i__30130);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30131_30139 = cljs.core.seq.call(null,requires);
var chunk__30132_30140 = null;
var count__30133_30141 = (0);
var i__30134_30142 = (0);
while(true){
if((i__30134_30142 < count__30133_30141)){
var req_30143 = cljs.core._nth.call(null,chunk__30132_30140,i__30134_30142);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30143,prov);

var G__30144 = seq__30131_30139;
var G__30145 = chunk__30132_30140;
var G__30146 = count__30133_30141;
var G__30147 = (i__30134_30142 + (1));
seq__30131_30139 = G__30144;
chunk__30132_30140 = G__30145;
count__30133_30141 = G__30146;
i__30134_30142 = G__30147;
continue;
} else {
var temp__4657__auto___30148 = cljs.core.seq.call(null,seq__30131_30139);
if(temp__4657__auto___30148){
var seq__30131_30149__$1 = temp__4657__auto___30148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30131_30149__$1)){
var c__25689__auto___30150 = cljs.core.chunk_first.call(null,seq__30131_30149__$1);
var G__30151 = cljs.core.chunk_rest.call(null,seq__30131_30149__$1);
var G__30152 = c__25689__auto___30150;
var G__30153 = cljs.core.count.call(null,c__25689__auto___30150);
var G__30154 = (0);
seq__30131_30139 = G__30151;
chunk__30132_30140 = G__30152;
count__30133_30141 = G__30153;
i__30134_30142 = G__30154;
continue;
} else {
var req_30155 = cljs.core.first.call(null,seq__30131_30149__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30155,prov);

var G__30156 = cljs.core.next.call(null,seq__30131_30149__$1);
var G__30157 = null;
var G__30158 = (0);
var G__30159 = (0);
seq__30131_30139 = G__30156;
chunk__30132_30140 = G__30157;
count__30133_30141 = G__30158;
i__30134_30142 = G__30159;
continue;
}
} else {
}
}
break;
}

var G__30160 = seq__30127;
var G__30161 = chunk__30128;
var G__30162 = count__30129;
var G__30163 = (i__30130 + (1));
seq__30127 = G__30160;
chunk__30128 = G__30161;
count__30129 = G__30162;
i__30130 = G__30163;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30127);
if(temp__4657__auto__){
var seq__30127__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30127__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__30127__$1);
var G__30164 = cljs.core.chunk_rest.call(null,seq__30127__$1);
var G__30165 = c__25689__auto__;
var G__30166 = cljs.core.count.call(null,c__25689__auto__);
var G__30167 = (0);
seq__30127 = G__30164;
chunk__30128 = G__30165;
count__30129 = G__30166;
i__30130 = G__30167;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30127__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30135_30168 = cljs.core.seq.call(null,requires);
var chunk__30136_30169 = null;
var count__30137_30170 = (0);
var i__30138_30171 = (0);
while(true){
if((i__30138_30171 < count__30137_30170)){
var req_30172 = cljs.core._nth.call(null,chunk__30136_30169,i__30138_30171);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30172,prov);

var G__30173 = seq__30135_30168;
var G__30174 = chunk__30136_30169;
var G__30175 = count__30137_30170;
var G__30176 = (i__30138_30171 + (1));
seq__30135_30168 = G__30173;
chunk__30136_30169 = G__30174;
count__30137_30170 = G__30175;
i__30138_30171 = G__30176;
continue;
} else {
var temp__4657__auto___30177__$1 = cljs.core.seq.call(null,seq__30135_30168);
if(temp__4657__auto___30177__$1){
var seq__30135_30178__$1 = temp__4657__auto___30177__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30135_30178__$1)){
var c__25689__auto___30179 = cljs.core.chunk_first.call(null,seq__30135_30178__$1);
var G__30180 = cljs.core.chunk_rest.call(null,seq__30135_30178__$1);
var G__30181 = c__25689__auto___30179;
var G__30182 = cljs.core.count.call(null,c__25689__auto___30179);
var G__30183 = (0);
seq__30135_30168 = G__30180;
chunk__30136_30169 = G__30181;
count__30137_30170 = G__30182;
i__30138_30171 = G__30183;
continue;
} else {
var req_30184 = cljs.core.first.call(null,seq__30135_30178__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30184,prov);

var G__30185 = cljs.core.next.call(null,seq__30135_30178__$1);
var G__30186 = null;
var G__30187 = (0);
var G__30188 = (0);
seq__30135_30168 = G__30185;
chunk__30136_30169 = G__30186;
count__30137_30170 = G__30187;
i__30138_30171 = G__30188;
continue;
}
} else {
}
}
break;
}

var G__30189 = cljs.core.next.call(null,seq__30127__$1);
var G__30190 = null;
var G__30191 = (0);
var G__30192 = (0);
seq__30127 = G__30189;
chunk__30128 = G__30190;
count__30129 = G__30191;
i__30130 = G__30192;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30197_30201 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30198_30202 = null;
var count__30199_30203 = (0);
var i__30200_30204 = (0);
while(true){
if((i__30200_30204 < count__30199_30203)){
var ns_30205 = cljs.core._nth.call(null,chunk__30198_30202,i__30200_30204);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30205);

var G__30206 = seq__30197_30201;
var G__30207 = chunk__30198_30202;
var G__30208 = count__30199_30203;
var G__30209 = (i__30200_30204 + (1));
seq__30197_30201 = G__30206;
chunk__30198_30202 = G__30207;
count__30199_30203 = G__30208;
i__30200_30204 = G__30209;
continue;
} else {
var temp__4657__auto___30210 = cljs.core.seq.call(null,seq__30197_30201);
if(temp__4657__auto___30210){
var seq__30197_30211__$1 = temp__4657__auto___30210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30197_30211__$1)){
var c__25689__auto___30212 = cljs.core.chunk_first.call(null,seq__30197_30211__$1);
var G__30213 = cljs.core.chunk_rest.call(null,seq__30197_30211__$1);
var G__30214 = c__25689__auto___30212;
var G__30215 = cljs.core.count.call(null,c__25689__auto___30212);
var G__30216 = (0);
seq__30197_30201 = G__30213;
chunk__30198_30202 = G__30214;
count__30199_30203 = G__30215;
i__30200_30204 = G__30216;
continue;
} else {
var ns_30217 = cljs.core.first.call(null,seq__30197_30211__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30217);

var G__30218 = cljs.core.next.call(null,seq__30197_30211__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__30197_30201 = G__30218;
chunk__30198_30202 = G__30219;
count__30199_30203 = G__30220;
i__30200_30204 = G__30221;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24875__auto__ = goog.require__;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30222__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30223__i = 0, G__30223__a = new Array(arguments.length -  0);
while (G__30223__i < G__30223__a.length) {G__30223__a[G__30223__i] = arguments[G__30223__i + 0]; ++G__30223__i;}
  args = new cljs.core.IndexedSeq(G__30223__a,0);
} 
return G__30222__delegate.call(this,args);};
G__30222.cljs$lang$maxFixedArity = 0;
G__30222.cljs$lang$applyTo = (function (arglist__30224){
var args = cljs.core.seq(arglist__30224);
return G__30222__delegate(args);
});
G__30222.cljs$core$IFn$_invoke$arity$variadic = G__30222__delegate;
return G__30222;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30226 = cljs.core._EQ_;
var expr__30227 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30226.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30227))){
var path_parts = ((function (pred__30226,expr__30227){
return (function (p1__30225_SHARP_){
return clojure.string.split.call(null,p1__30225_SHARP_,/[\/\\]/);
});})(pred__30226,expr__30227))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30226,expr__30227){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30229){if((e30229 instanceof Error)){
var e = e30229;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30229;

}
}})());
});
;})(path_parts,sep,root,pred__30226,expr__30227))
} else {
if(cljs.core.truth_(pred__30226.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30227))){
return ((function (pred__30226,expr__30227){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30226,expr__30227){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30226,expr__30227))
);

return deferred.addErrback(((function (deferred,pred__30226,expr__30227){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30226,expr__30227))
);
});
;})(pred__30226,expr__30227))
} else {
return ((function (pred__30226,expr__30227){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30226,expr__30227))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30230,callback){
var map__30233 = p__30230;
var map__30233__$1 = ((((!((map__30233 == null)))?((((map__30233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);
var file_msg = map__30233__$1;
var request_url = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30233,map__30233__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30233,map__30233__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__){
return (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (7))){
var inst_30253 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30259_30279 = state_30257__$1;
(statearr_30259_30279[(2)] = inst_30253);

(statearr_30259_30279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (1))){
var state_30257__$1 = state_30257;
var statearr_30260_30280 = state_30257__$1;
(statearr_30260_30280[(2)] = null);

(statearr_30260_30280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (4))){
var inst_30237 = (state_30257[(7)]);
var inst_30237__$1 = (state_30257[(2)]);
var state_30257__$1 = (function (){var statearr_30261 = state_30257;
(statearr_30261[(7)] = inst_30237__$1);

return statearr_30261;
})();
if(cljs.core.truth_(inst_30237__$1)){
var statearr_30262_30281 = state_30257__$1;
(statearr_30262_30281[(1)] = (5));

} else {
var statearr_30263_30282 = state_30257__$1;
(statearr_30263_30282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (6))){
var state_30257__$1 = state_30257;
var statearr_30264_30283 = state_30257__$1;
(statearr_30264_30283[(2)] = null);

(statearr_30264_30283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (3))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30257__$1,inst_30255);
} else {
if((state_val_30258 === (2))){
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30258 === (11))){
var inst_30249 = (state_30257[(2)]);
var state_30257__$1 = (function (){var statearr_30265 = state_30257;
(statearr_30265[(8)] = inst_30249);

return statearr_30265;
})();
var statearr_30266_30284 = state_30257__$1;
(statearr_30266_30284[(2)] = null);

(statearr_30266_30284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (9))){
var inst_30243 = (state_30257[(9)]);
var inst_30241 = (state_30257[(10)]);
var inst_30245 = inst_30243.call(null,inst_30241);
var state_30257__$1 = state_30257;
var statearr_30267_30285 = state_30257__$1;
(statearr_30267_30285[(2)] = inst_30245);

(statearr_30267_30285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (5))){
var inst_30237 = (state_30257[(7)]);
var inst_30239 = figwheel.client.file_reloading.blocking_load.call(null,inst_30237);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(8),inst_30239);
} else {
if((state_val_30258 === (10))){
var inst_30241 = (state_30257[(10)]);
var inst_30247 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30241);
var state_30257__$1 = state_30257;
var statearr_30268_30286 = state_30257__$1;
(statearr_30268_30286[(2)] = inst_30247);

(statearr_30268_30286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (8))){
var inst_30243 = (state_30257[(9)]);
var inst_30237 = (state_30257[(7)]);
var inst_30241 = (state_30257[(2)]);
var inst_30242 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30243__$1 = cljs.core.get.call(null,inst_30242,inst_30237);
var state_30257__$1 = (function (){var statearr_30269 = state_30257;
(statearr_30269[(9)] = inst_30243__$1);

(statearr_30269[(10)] = inst_30241);

return statearr_30269;
})();
if(cljs.core.truth_(inst_30243__$1)){
var statearr_30270_30287 = state_30257__$1;
(statearr_30270_30287[(1)] = (9));

} else {
var statearr_30271_30288 = state_30257__$1;
(statearr_30271_30288[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27153__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27042__auto__ = null;
var figwheel$client$file_reloading$state_machine__27042__auto____0 = (function (){
var statearr_30275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30275[(0)] = figwheel$client$file_reloading$state_machine__27042__auto__);

(statearr_30275[(1)] = (1));

return statearr_30275;
});
var figwheel$client$file_reloading$state_machine__27042__auto____1 = (function (state_30257){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_30257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e30276){if((e30276 instanceof Object)){
var ex__27045__auto__ = e30276;
var statearr_30277_30289 = state_30257;
(statearr_30277_30289[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30290 = state_30257;
state_30257 = G__30290;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27042__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27042__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27042__auto____0;
figwheel$client$file_reloading$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27042__auto____1;
return figwheel$client$file_reloading$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__))
})();
var state__27155__auto__ = (function (){var statearr_30278 = f__27154__auto__.call(null);
(statearr_30278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__))
);

return c__27153__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30291,callback){
var map__30294 = p__30291;
var map__30294__$1 = ((((!((map__30294 == null)))?((((map__30294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30294):map__30294);
var file_msg = map__30294__$1;
var namespace = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30294,map__30294__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30294,map__30294__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30296){
var map__30299 = p__30296;
var map__30299__$1 = ((((!((map__30299 == null)))?((((map__30299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);
var file_msg = map__30299__$1;
var namespace = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24863__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24863__auto__){
var or__24875__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto____$1)){
return or__24875__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24863__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30301,callback){
var map__30304 = p__30301;
var map__30304__$1 = ((((!((map__30304 == null)))?((((map__30304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30304):map__30304);
var file_msg = map__30304__$1;
var request_url = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27153__auto___30408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___30408,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___30408,out){
return (function (state_30390){
var state_val_30391 = (state_30390[(1)]);
if((state_val_30391 === (1))){
var inst_30364 = cljs.core.seq.call(null,files);
var inst_30365 = cljs.core.first.call(null,inst_30364);
var inst_30366 = cljs.core.next.call(null,inst_30364);
var inst_30367 = files;
var state_30390__$1 = (function (){var statearr_30392 = state_30390;
(statearr_30392[(7)] = inst_30365);

(statearr_30392[(8)] = inst_30367);

(statearr_30392[(9)] = inst_30366);

return statearr_30392;
})();
var statearr_30393_30409 = state_30390__$1;
(statearr_30393_30409[(2)] = null);

(statearr_30393_30409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (2))){
var inst_30367 = (state_30390[(8)]);
var inst_30373 = (state_30390[(10)]);
var inst_30372 = cljs.core.seq.call(null,inst_30367);
var inst_30373__$1 = cljs.core.first.call(null,inst_30372);
var inst_30374 = cljs.core.next.call(null,inst_30372);
var inst_30375 = (inst_30373__$1 == null);
var inst_30376 = cljs.core.not.call(null,inst_30375);
var state_30390__$1 = (function (){var statearr_30394 = state_30390;
(statearr_30394[(11)] = inst_30374);

(statearr_30394[(10)] = inst_30373__$1);

return statearr_30394;
})();
if(inst_30376){
var statearr_30395_30410 = state_30390__$1;
(statearr_30395_30410[(1)] = (4));

} else {
var statearr_30396_30411 = state_30390__$1;
(statearr_30396_30411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (3))){
var inst_30388 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30390__$1,inst_30388);
} else {
if((state_val_30391 === (4))){
var inst_30373 = (state_30390[(10)]);
var inst_30378 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30373);
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30390__$1,(7),inst_30378);
} else {
if((state_val_30391 === (5))){
var inst_30384 = cljs.core.async.close_BANG_.call(null,out);
var state_30390__$1 = state_30390;
var statearr_30397_30412 = state_30390__$1;
(statearr_30397_30412[(2)] = inst_30384);

(statearr_30397_30412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (6))){
var inst_30386 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30398_30413 = state_30390__$1;
(statearr_30398_30413[(2)] = inst_30386);

(statearr_30398_30413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (7))){
var inst_30374 = (state_30390[(11)]);
var inst_30380 = (state_30390[(2)]);
var inst_30381 = cljs.core.async.put_BANG_.call(null,out,inst_30380);
var inst_30367 = inst_30374;
var state_30390__$1 = (function (){var statearr_30399 = state_30390;
(statearr_30399[(12)] = inst_30381);

(statearr_30399[(8)] = inst_30367);

return statearr_30399;
})();
var statearr_30400_30414 = state_30390__$1;
(statearr_30400_30414[(2)] = null);

(statearr_30400_30414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27153__auto___30408,out))
;
return ((function (switch__27041__auto__,c__27153__auto___30408,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____0 = (function (){
var statearr_30404 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30404[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__);

(statearr_30404[(1)] = (1));

return statearr_30404;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____1 = (function (state_30390){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_30390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e30405){if((e30405 instanceof Object)){
var ex__27045__auto__ = e30405;
var statearr_30406_30415 = state_30390;
(statearr_30406_30415[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30416 = state_30390;
state_30390 = G__30416;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__ = function(state_30390){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____1.call(this,state_30390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___30408,out))
})();
var state__27155__auto__ = (function (){var statearr_30407 = f__27154__auto__.call(null);
(statearr_30407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___30408);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___30408,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30417,opts){
var map__30421 = p__30417;
var map__30421__$1 = ((((!((map__30421 == null)))?((((map__30421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30421):map__30421);
var eval_body = cljs.core.get.call(null,map__30421__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24863__auto__ = eval_body;
if(cljs.core.truth_(and__24863__auto__)){
return typeof eval_body === 'string';
} else {
return and__24863__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30423){var e = e30423;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30424_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30424_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30433){
var vec__30434 = p__30433;
var k = cljs.core.nth.call(null,vec__30434,(0),null);
var v = cljs.core.nth.call(null,vec__30434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30437){
var vec__30438 = p__30437;
var k = cljs.core.nth.call(null,vec__30438,(0),null);
var v = cljs.core.nth.call(null,vec__30438,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30444,p__30445){
var map__30693 = p__30444;
var map__30693__$1 = ((((!((map__30693 == null)))?((((map__30693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);
var opts = map__30693__$1;
var before_jsload = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30694 = p__30445;
var map__30694__$1 = ((((!((map__30694 == null)))?((((map__30694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);
var msg = map__30694__$1;
var files = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30848){
var state_val_30849 = (state_30848[(1)]);
if((state_val_30849 === (7))){
var inst_30709 = (state_30848[(7)]);
var inst_30711 = (state_30848[(8)]);
var inst_30710 = (state_30848[(9)]);
var inst_30708 = (state_30848[(10)]);
var inst_30716 = cljs.core._nth.call(null,inst_30709,inst_30711);
var inst_30717 = figwheel.client.file_reloading.eval_body.call(null,inst_30716,opts);
var inst_30718 = (inst_30711 + (1));
var tmp30850 = inst_30709;
var tmp30851 = inst_30710;
var tmp30852 = inst_30708;
var inst_30708__$1 = tmp30852;
var inst_30709__$1 = tmp30850;
var inst_30710__$1 = tmp30851;
var inst_30711__$1 = inst_30718;
var state_30848__$1 = (function (){var statearr_30853 = state_30848;
(statearr_30853[(7)] = inst_30709__$1);

(statearr_30853[(8)] = inst_30711__$1);

(statearr_30853[(11)] = inst_30717);

(statearr_30853[(9)] = inst_30710__$1);

(statearr_30853[(10)] = inst_30708__$1);

return statearr_30853;
})();
var statearr_30854_30940 = state_30848__$1;
(statearr_30854_30940[(2)] = null);

(statearr_30854_30940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (20))){
var inst_30751 = (state_30848[(12)]);
var inst_30759 = figwheel.client.file_reloading.sort_files.call(null,inst_30751);
var state_30848__$1 = state_30848;
var statearr_30855_30941 = state_30848__$1;
(statearr_30855_30941[(2)] = inst_30759);

(statearr_30855_30941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (27))){
var state_30848__$1 = state_30848;
var statearr_30856_30942 = state_30848__$1;
(statearr_30856_30942[(2)] = null);

(statearr_30856_30942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (1))){
var inst_30700 = (state_30848[(13)]);
var inst_30697 = before_jsload.call(null,files);
var inst_30698 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30699 = (function (){return ((function (inst_30700,inst_30697,inst_30698,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30441_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30441_SHARP_);
});
;})(inst_30700,inst_30697,inst_30698,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30700__$1 = cljs.core.filter.call(null,inst_30699,files);
var inst_30701 = cljs.core.not_empty.call(null,inst_30700__$1);
var state_30848__$1 = (function (){var statearr_30857 = state_30848;
(statearr_30857[(14)] = inst_30697);

(statearr_30857[(15)] = inst_30698);

(statearr_30857[(13)] = inst_30700__$1);

return statearr_30857;
})();
if(cljs.core.truth_(inst_30701)){
var statearr_30858_30943 = state_30848__$1;
(statearr_30858_30943[(1)] = (2));

} else {
var statearr_30859_30944 = state_30848__$1;
(statearr_30859_30944[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (24))){
var state_30848__$1 = state_30848;
var statearr_30860_30945 = state_30848__$1;
(statearr_30860_30945[(2)] = null);

(statearr_30860_30945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (39))){
var inst_30801 = (state_30848[(16)]);
var state_30848__$1 = state_30848;
var statearr_30861_30946 = state_30848__$1;
(statearr_30861_30946[(2)] = inst_30801);

(statearr_30861_30946[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (46))){
var inst_30843 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30862_30947 = state_30848__$1;
(statearr_30862_30947[(2)] = inst_30843);

(statearr_30862_30947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (4))){
var inst_30745 = (state_30848[(2)]);
var inst_30746 = cljs.core.List.EMPTY;
var inst_30747 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30746);
var inst_30748 = (function (){return ((function (inst_30745,inst_30746,inst_30747,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30442_SHARP_){
var and__24863__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30442_SHARP_);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30442_SHARP_));
} else {
return and__24863__auto__;
}
});
;})(inst_30745,inst_30746,inst_30747,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30749 = cljs.core.filter.call(null,inst_30748,files);
var inst_30750 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30751 = cljs.core.concat.call(null,inst_30749,inst_30750);
var state_30848__$1 = (function (){var statearr_30863 = state_30848;
(statearr_30863[(17)] = inst_30747);

(statearr_30863[(18)] = inst_30745);

(statearr_30863[(12)] = inst_30751);

return statearr_30863;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30864_30948 = state_30848__$1;
(statearr_30864_30948[(1)] = (16));

} else {
var statearr_30865_30949 = state_30848__$1;
(statearr_30865_30949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (15))){
var inst_30735 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30866_30950 = state_30848__$1;
(statearr_30866_30950[(2)] = inst_30735);

(statearr_30866_30950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (21))){
var inst_30761 = (state_30848[(19)]);
var inst_30761__$1 = (state_30848[(2)]);
var inst_30762 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30761__$1);
var state_30848__$1 = (function (){var statearr_30867 = state_30848;
(statearr_30867[(19)] = inst_30761__$1);

return statearr_30867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(22),inst_30762);
} else {
if((state_val_30849 === (31))){
var inst_30846 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30848__$1,inst_30846);
} else {
if((state_val_30849 === (32))){
var inst_30801 = (state_30848[(16)]);
var inst_30806 = inst_30801.cljs$lang$protocol_mask$partition0$;
var inst_30807 = (inst_30806 & (64));
var inst_30808 = inst_30801.cljs$core$ISeq$;
var inst_30809 = (cljs.core.PROTOCOL_SENTINEL === inst_30808);
var inst_30810 = (inst_30807) || (inst_30809);
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30810)){
var statearr_30868_30951 = state_30848__$1;
(statearr_30868_30951[(1)] = (35));

} else {
var statearr_30869_30952 = state_30848__$1;
(statearr_30869_30952[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (40))){
var inst_30823 = (state_30848[(20)]);
var inst_30822 = (state_30848[(2)]);
var inst_30823__$1 = cljs.core.get.call(null,inst_30822,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30824 = cljs.core.get.call(null,inst_30822,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30825 = cljs.core.not_empty.call(null,inst_30823__$1);
var state_30848__$1 = (function (){var statearr_30870 = state_30848;
(statearr_30870[(21)] = inst_30824);

(statearr_30870[(20)] = inst_30823__$1);

return statearr_30870;
})();
if(cljs.core.truth_(inst_30825)){
var statearr_30871_30953 = state_30848__$1;
(statearr_30871_30953[(1)] = (41));

} else {
var statearr_30872_30954 = state_30848__$1;
(statearr_30872_30954[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (33))){
var state_30848__$1 = state_30848;
var statearr_30873_30955 = state_30848__$1;
(statearr_30873_30955[(2)] = false);

(statearr_30873_30955[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (13))){
var inst_30721 = (state_30848[(22)]);
var inst_30725 = cljs.core.chunk_first.call(null,inst_30721);
var inst_30726 = cljs.core.chunk_rest.call(null,inst_30721);
var inst_30727 = cljs.core.count.call(null,inst_30725);
var inst_30708 = inst_30726;
var inst_30709 = inst_30725;
var inst_30710 = inst_30727;
var inst_30711 = (0);
var state_30848__$1 = (function (){var statearr_30874 = state_30848;
(statearr_30874[(7)] = inst_30709);

(statearr_30874[(8)] = inst_30711);

(statearr_30874[(9)] = inst_30710);

(statearr_30874[(10)] = inst_30708);

return statearr_30874;
})();
var statearr_30875_30956 = state_30848__$1;
(statearr_30875_30956[(2)] = null);

(statearr_30875_30956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (22))){
var inst_30764 = (state_30848[(23)]);
var inst_30761 = (state_30848[(19)]);
var inst_30769 = (state_30848[(24)]);
var inst_30765 = (state_30848[(25)]);
var inst_30764__$1 = (state_30848[(2)]);
var inst_30765__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30764__$1);
var inst_30766 = (function (){var all_files = inst_30761;
var res_SINGLEQUOTE_ = inst_30764__$1;
var res = inst_30765__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30764,inst_30761,inst_30769,inst_30765,inst_30764__$1,inst_30765__$1,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30443_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30443_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30764,inst_30761,inst_30769,inst_30765,inst_30764__$1,inst_30765__$1,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30767 = cljs.core.filter.call(null,inst_30766,inst_30764__$1);
var inst_30768 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30769__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30768);
var inst_30770 = cljs.core.not_empty.call(null,inst_30769__$1);
var state_30848__$1 = (function (){var statearr_30876 = state_30848;
(statearr_30876[(23)] = inst_30764__$1);

(statearr_30876[(24)] = inst_30769__$1);

(statearr_30876[(26)] = inst_30767);

(statearr_30876[(25)] = inst_30765__$1);

return statearr_30876;
})();
if(cljs.core.truth_(inst_30770)){
var statearr_30877_30957 = state_30848__$1;
(statearr_30877_30957[(1)] = (23));

} else {
var statearr_30878_30958 = state_30848__$1;
(statearr_30878_30958[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (36))){
var state_30848__$1 = state_30848;
var statearr_30879_30959 = state_30848__$1;
(statearr_30879_30959[(2)] = false);

(statearr_30879_30959[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (41))){
var inst_30823 = (state_30848[(20)]);
var inst_30827 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30828 = cljs.core.map.call(null,inst_30827,inst_30823);
var inst_30829 = cljs.core.pr_str.call(null,inst_30828);
var inst_30830 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30829)].join('');
var inst_30831 = figwheel.client.utils.log.call(null,inst_30830);
var state_30848__$1 = state_30848;
var statearr_30880_30960 = state_30848__$1;
(statearr_30880_30960[(2)] = inst_30831);

(statearr_30880_30960[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (43))){
var inst_30824 = (state_30848[(21)]);
var inst_30834 = (state_30848[(2)]);
var inst_30835 = cljs.core.not_empty.call(null,inst_30824);
var state_30848__$1 = (function (){var statearr_30881 = state_30848;
(statearr_30881[(27)] = inst_30834);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30835)){
var statearr_30882_30961 = state_30848__$1;
(statearr_30882_30961[(1)] = (44));

} else {
var statearr_30883_30962 = state_30848__$1;
(statearr_30883_30962[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (29))){
var inst_30764 = (state_30848[(23)]);
var inst_30761 = (state_30848[(19)]);
var inst_30769 = (state_30848[(24)]);
var inst_30767 = (state_30848[(26)]);
var inst_30801 = (state_30848[(16)]);
var inst_30765 = (state_30848[(25)]);
var inst_30797 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30800 = (function (){var all_files = inst_30761;
var res_SINGLEQUOTE_ = inst_30764;
var res = inst_30765;
var files_not_loaded = inst_30767;
var dependencies_that_loaded = inst_30769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30801,inst_30765,inst_30797,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30799){
var map__30884 = p__30799;
var map__30884__$1 = ((((!((map__30884 == null)))?((((map__30884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30884):map__30884);
var namespace = cljs.core.get.call(null,map__30884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30801,inst_30765,inst_30797,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30801__$1 = cljs.core.group_by.call(null,inst_30800,inst_30767);
var inst_30803 = (inst_30801__$1 == null);
var inst_30804 = cljs.core.not.call(null,inst_30803);
var state_30848__$1 = (function (){var statearr_30886 = state_30848;
(statearr_30886[(28)] = inst_30797);

(statearr_30886[(16)] = inst_30801__$1);

return statearr_30886;
})();
if(inst_30804){
var statearr_30887_30963 = state_30848__$1;
(statearr_30887_30963[(1)] = (32));

} else {
var statearr_30888_30964 = state_30848__$1;
(statearr_30888_30964[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (44))){
var inst_30824 = (state_30848[(21)]);
var inst_30837 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30824);
var inst_30838 = cljs.core.pr_str.call(null,inst_30837);
var inst_30839 = [cljs.core.str("not required: "),cljs.core.str(inst_30838)].join('');
var inst_30840 = figwheel.client.utils.log.call(null,inst_30839);
var state_30848__$1 = state_30848;
var statearr_30889_30965 = state_30848__$1;
(statearr_30889_30965[(2)] = inst_30840);

(statearr_30889_30965[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (6))){
var inst_30742 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30890_30966 = state_30848__$1;
(statearr_30890_30966[(2)] = inst_30742);

(statearr_30890_30966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (28))){
var inst_30767 = (state_30848[(26)]);
var inst_30794 = (state_30848[(2)]);
var inst_30795 = cljs.core.not_empty.call(null,inst_30767);
var state_30848__$1 = (function (){var statearr_30891 = state_30848;
(statearr_30891[(29)] = inst_30794);

return statearr_30891;
})();
if(cljs.core.truth_(inst_30795)){
var statearr_30892_30967 = state_30848__$1;
(statearr_30892_30967[(1)] = (29));

} else {
var statearr_30893_30968 = state_30848__$1;
(statearr_30893_30968[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (25))){
var inst_30765 = (state_30848[(25)]);
var inst_30781 = (state_30848[(2)]);
var inst_30782 = cljs.core.not_empty.call(null,inst_30765);
var state_30848__$1 = (function (){var statearr_30894 = state_30848;
(statearr_30894[(30)] = inst_30781);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30782)){
var statearr_30895_30969 = state_30848__$1;
(statearr_30895_30969[(1)] = (26));

} else {
var statearr_30896_30970 = state_30848__$1;
(statearr_30896_30970[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (34))){
var inst_30817 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30817)){
var statearr_30897_30971 = state_30848__$1;
(statearr_30897_30971[(1)] = (38));

} else {
var statearr_30898_30972 = state_30848__$1;
(statearr_30898_30972[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (17))){
var state_30848__$1 = state_30848;
var statearr_30899_30973 = state_30848__$1;
(statearr_30899_30973[(2)] = recompile_dependents);

(statearr_30899_30973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (3))){
var state_30848__$1 = state_30848;
var statearr_30900_30974 = state_30848__$1;
(statearr_30900_30974[(2)] = null);

(statearr_30900_30974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (12))){
var inst_30738 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30901_30975 = state_30848__$1;
(statearr_30901_30975[(2)] = inst_30738);

(statearr_30901_30975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (2))){
var inst_30700 = (state_30848[(13)]);
var inst_30707 = cljs.core.seq.call(null,inst_30700);
var inst_30708 = inst_30707;
var inst_30709 = null;
var inst_30710 = (0);
var inst_30711 = (0);
var state_30848__$1 = (function (){var statearr_30902 = state_30848;
(statearr_30902[(7)] = inst_30709);

(statearr_30902[(8)] = inst_30711);

(statearr_30902[(9)] = inst_30710);

(statearr_30902[(10)] = inst_30708);

return statearr_30902;
})();
var statearr_30903_30976 = state_30848__$1;
(statearr_30903_30976[(2)] = null);

(statearr_30903_30976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (23))){
var inst_30764 = (state_30848[(23)]);
var inst_30761 = (state_30848[(19)]);
var inst_30769 = (state_30848[(24)]);
var inst_30767 = (state_30848[(26)]);
var inst_30765 = (state_30848[(25)]);
var inst_30772 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30774 = (function (){var all_files = inst_30761;
var res_SINGLEQUOTE_ = inst_30764;
var res = inst_30765;
var files_not_loaded = inst_30767;
var dependencies_that_loaded = inst_30769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30772,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30773){
var map__30904 = p__30773;
var map__30904__$1 = ((((!((map__30904 == null)))?((((map__30904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30904):map__30904);
var request_url = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30772,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30775 = cljs.core.reverse.call(null,inst_30769);
var inst_30776 = cljs.core.map.call(null,inst_30774,inst_30775);
var inst_30777 = cljs.core.pr_str.call(null,inst_30776);
var inst_30778 = figwheel.client.utils.log.call(null,inst_30777);
var state_30848__$1 = (function (){var statearr_30906 = state_30848;
(statearr_30906[(31)] = inst_30772);

return statearr_30906;
})();
var statearr_30907_30977 = state_30848__$1;
(statearr_30907_30977[(2)] = inst_30778);

(statearr_30907_30977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (35))){
var state_30848__$1 = state_30848;
var statearr_30908_30978 = state_30848__$1;
(statearr_30908_30978[(2)] = true);

(statearr_30908_30978[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (19))){
var inst_30751 = (state_30848[(12)]);
var inst_30757 = figwheel.client.file_reloading.expand_files.call(null,inst_30751);
var state_30848__$1 = state_30848;
var statearr_30909_30979 = state_30848__$1;
(statearr_30909_30979[(2)] = inst_30757);

(statearr_30909_30979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (11))){
var state_30848__$1 = state_30848;
var statearr_30910_30980 = state_30848__$1;
(statearr_30910_30980[(2)] = null);

(statearr_30910_30980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (9))){
var inst_30740 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30911_30981 = state_30848__$1;
(statearr_30911_30981[(2)] = inst_30740);

(statearr_30911_30981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (5))){
var inst_30711 = (state_30848[(8)]);
var inst_30710 = (state_30848[(9)]);
var inst_30713 = (inst_30711 < inst_30710);
var inst_30714 = inst_30713;
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30714)){
var statearr_30912_30982 = state_30848__$1;
(statearr_30912_30982[(1)] = (7));

} else {
var statearr_30913_30983 = state_30848__$1;
(statearr_30913_30983[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (14))){
var inst_30721 = (state_30848[(22)]);
var inst_30730 = cljs.core.first.call(null,inst_30721);
var inst_30731 = figwheel.client.file_reloading.eval_body.call(null,inst_30730,opts);
var inst_30732 = cljs.core.next.call(null,inst_30721);
var inst_30708 = inst_30732;
var inst_30709 = null;
var inst_30710 = (0);
var inst_30711 = (0);
var state_30848__$1 = (function (){var statearr_30914 = state_30848;
(statearr_30914[(7)] = inst_30709);

(statearr_30914[(8)] = inst_30711);

(statearr_30914[(32)] = inst_30731);

(statearr_30914[(9)] = inst_30710);

(statearr_30914[(10)] = inst_30708);

return statearr_30914;
})();
var statearr_30915_30984 = state_30848__$1;
(statearr_30915_30984[(2)] = null);

(statearr_30915_30984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (45))){
var state_30848__$1 = state_30848;
var statearr_30916_30985 = state_30848__$1;
(statearr_30916_30985[(2)] = null);

(statearr_30916_30985[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (26))){
var inst_30764 = (state_30848[(23)]);
var inst_30761 = (state_30848[(19)]);
var inst_30769 = (state_30848[(24)]);
var inst_30767 = (state_30848[(26)]);
var inst_30765 = (state_30848[(25)]);
var inst_30784 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30786 = (function (){var all_files = inst_30761;
var res_SINGLEQUOTE_ = inst_30764;
var res = inst_30765;
var files_not_loaded = inst_30767;
var dependencies_that_loaded = inst_30769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30784,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30785){
var map__30917 = p__30785;
var map__30917__$1 = ((((!((map__30917 == null)))?((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var namespace = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30784,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30787 = cljs.core.map.call(null,inst_30786,inst_30765);
var inst_30788 = cljs.core.pr_str.call(null,inst_30787);
var inst_30789 = figwheel.client.utils.log.call(null,inst_30788);
var inst_30790 = (function (){var all_files = inst_30761;
var res_SINGLEQUOTE_ = inst_30764;
var res = inst_30765;
var files_not_loaded = inst_30767;
var dependencies_that_loaded = inst_30769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30784,inst_30786,inst_30787,inst_30788,inst_30789,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30764,inst_30761,inst_30769,inst_30767,inst_30765,inst_30784,inst_30786,inst_30787,inst_30788,inst_30789,state_val_30849,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30791 = setTimeout(inst_30790,(10));
var state_30848__$1 = (function (){var statearr_30919 = state_30848;
(statearr_30919[(33)] = inst_30789);

(statearr_30919[(34)] = inst_30784);

return statearr_30919;
})();
var statearr_30920_30986 = state_30848__$1;
(statearr_30920_30986[(2)] = inst_30791);

(statearr_30920_30986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (16))){
var state_30848__$1 = state_30848;
var statearr_30921_30987 = state_30848__$1;
(statearr_30921_30987[(2)] = reload_dependents);

(statearr_30921_30987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (38))){
var inst_30801 = (state_30848[(16)]);
var inst_30819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30801);
var state_30848__$1 = state_30848;
var statearr_30922_30988 = state_30848__$1;
(statearr_30922_30988[(2)] = inst_30819);

(statearr_30922_30988[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (30))){
var state_30848__$1 = state_30848;
var statearr_30923_30989 = state_30848__$1;
(statearr_30923_30989[(2)] = null);

(statearr_30923_30989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (10))){
var inst_30721 = (state_30848[(22)]);
var inst_30723 = cljs.core.chunked_seq_QMARK_.call(null,inst_30721);
var state_30848__$1 = state_30848;
if(inst_30723){
var statearr_30924_30990 = state_30848__$1;
(statearr_30924_30990[(1)] = (13));

} else {
var statearr_30925_30991 = state_30848__$1;
(statearr_30925_30991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (18))){
var inst_30755 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30755)){
var statearr_30926_30992 = state_30848__$1;
(statearr_30926_30992[(1)] = (19));

} else {
var statearr_30927_30993 = state_30848__$1;
(statearr_30927_30993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (42))){
var state_30848__$1 = state_30848;
var statearr_30928_30994 = state_30848__$1;
(statearr_30928_30994[(2)] = null);

(statearr_30928_30994[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (37))){
var inst_30814 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30929_30995 = state_30848__$1;
(statearr_30929_30995[(2)] = inst_30814);

(statearr_30929_30995[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (8))){
var inst_30721 = (state_30848[(22)]);
var inst_30708 = (state_30848[(10)]);
var inst_30721__$1 = cljs.core.seq.call(null,inst_30708);
var state_30848__$1 = (function (){var statearr_30930 = state_30848;
(statearr_30930[(22)] = inst_30721__$1);

return statearr_30930;
})();
if(inst_30721__$1){
var statearr_30931_30996 = state_30848__$1;
(statearr_30931_30996[(1)] = (10));

} else {
var statearr_30932_30997 = state_30848__$1;
(statearr_30932_30997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27041__auto__,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30936[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____1 = (function (state_30848){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_30848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e30937){if((e30937 instanceof Object)){
var ex__27045__auto__ = e30937;
var statearr_30938_30998 = state_30848;
(statearr_30938_30998[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30999 = state_30848;
state_30848 = G__30999;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__ = function(state_30848){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____1.call(this,state_30848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27155__auto__ = (function (){var statearr_30939 = f__27154__auto__.call(null);
(statearr_30939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__,map__30693,map__30693__$1,opts,before_jsload,on_jsload,reload_dependents,map__30694,map__30694__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27153__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31002,link){
var map__31005 = p__31002;
var map__31005__$1 = ((((!((map__31005 == null)))?((((map__31005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31005):map__31005);
var file = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31005,map__31005__$1,file){
return (function (p1__31000_SHARP_,p2__31001_SHARP_){
if(cljs.core._EQ_.call(null,p1__31000_SHARP_,p2__31001_SHARP_)){
return p1__31000_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31005,map__31005__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31011){
var map__31012 = p__31011;
var map__31012__$1 = ((((!((map__31012 == null)))?((((map__31012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31012):map__31012);
var match_length = cljs.core.get.call(null,map__31012__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31012__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31007_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31007_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31014 = [];
var len__25983__auto___31017 = arguments.length;
var i__25984__auto___31018 = (0);
while(true){
if((i__25984__auto___31018 < len__25983__auto___31017)){
args31014.push((arguments[i__25984__auto___31018]));

var G__31019 = (i__25984__auto___31018 + (1));
i__25984__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var G__31016 = args31014.length;
switch (G__31016) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31014.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31021_SHARP_,p2__31022_SHARP_){
return cljs.core.assoc.call(null,p1__31021_SHARP_,cljs.core.get.call(null,p2__31022_SHARP_,key),p2__31022_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31023){
var map__31026 = p__31023;
var map__31026__$1 = ((((!((map__31026 == null)))?((((map__31026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31026):map__31026);
var f_data = map__31026__$1;
var file = cljs.core.get.call(null,map__31026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31028,p__31029){
var map__31038 = p__31028;
var map__31038__$1 = ((((!((map__31038 == null)))?((((map__31038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31038):map__31038);
var opts = map__31038__$1;
var on_cssload = cljs.core.get.call(null,map__31038__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31039 = p__31029;
var map__31039__$1 = ((((!((map__31039 == null)))?((((map__31039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);
var files_msg = map__31039__$1;
var files = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31042_31046 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31043_31047 = null;
var count__31044_31048 = (0);
var i__31045_31049 = (0);
while(true){
if((i__31045_31049 < count__31044_31048)){
var f_31050 = cljs.core._nth.call(null,chunk__31043_31047,i__31045_31049);
figwheel.client.file_reloading.reload_css_file.call(null,f_31050);

var G__31051 = seq__31042_31046;
var G__31052 = chunk__31043_31047;
var G__31053 = count__31044_31048;
var G__31054 = (i__31045_31049 + (1));
seq__31042_31046 = G__31051;
chunk__31043_31047 = G__31052;
count__31044_31048 = G__31053;
i__31045_31049 = G__31054;
continue;
} else {
var temp__4657__auto___31055 = cljs.core.seq.call(null,seq__31042_31046);
if(temp__4657__auto___31055){
var seq__31042_31056__$1 = temp__4657__auto___31055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31042_31056__$1)){
var c__25689__auto___31057 = cljs.core.chunk_first.call(null,seq__31042_31056__$1);
var G__31058 = cljs.core.chunk_rest.call(null,seq__31042_31056__$1);
var G__31059 = c__25689__auto___31057;
var G__31060 = cljs.core.count.call(null,c__25689__auto___31057);
var G__31061 = (0);
seq__31042_31046 = G__31058;
chunk__31043_31047 = G__31059;
count__31044_31048 = G__31060;
i__31045_31049 = G__31061;
continue;
} else {
var f_31062 = cljs.core.first.call(null,seq__31042_31056__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31062);

var G__31063 = cljs.core.next.call(null,seq__31042_31056__$1);
var G__31064 = null;
var G__31065 = (0);
var G__31066 = (0);
seq__31042_31046 = G__31063;
chunk__31043_31047 = G__31064;
count__31044_31048 = G__31065;
i__31045_31049 = G__31066;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31038,map__31038__$1,opts,on_cssload,map__31039,map__31039__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31038,map__31038__$1,opts,on_cssload,map__31039,map__31039__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479258318185