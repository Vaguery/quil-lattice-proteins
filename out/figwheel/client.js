// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34550 = [];
var len__25983__auto___34553 = arguments.length;
var i__25984__auto___34554 = (0);
while(true){
if((i__25984__auto___34554 < len__25983__auto___34553)){
args34550.push((arguments[i__25984__auto___34554]));

var G__34555 = (i__25984__auto___34554 + (1));
i__25984__auto___34554 = G__34555;
continue;
} else {
}
break;
}

var G__34552 = args34550.length;
switch (G__34552) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34550.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34558 = arguments.length;
var i__25984__auto___34559 = (0);
while(true){
if((i__25984__auto___34559 < len__25983__auto___34558)){
args__25990__auto__.push((arguments[i__25984__auto___34559]));

var G__34560 = (i__25984__auto___34559 + (1));
i__25984__auto___34559 = G__34560;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34557){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34557));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34562 = arguments.length;
var i__25984__auto___34563 = (0);
while(true){
if((i__25984__auto___34563 < len__25983__auto___34562)){
args__25990__auto__.push((arguments[i__25984__auto___34563]));

var G__34564 = (i__25984__auto___34563 + (1));
i__25984__auto___34563 = G__34564;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34561){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34561));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34565 = cljs.core._EQ_;
var expr__34566 = (function (){var or__24875__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34569){if((e34569 instanceof Error)){
var e = e34569;
return false;
} else {
throw e34569;

}
}})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34565.call(null,"true",expr__34566))){
return true;
} else {
if(cljs.core.truth_(pred__34565.call(null,"false",expr__34566))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34566)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34571){if((e34571 instanceof Error)){
var e = e34571;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34571;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34572){
var map__34575 = p__34572;
var map__34575__$1 = ((((!((map__34575 == null)))?((((map__34575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34575):map__34575);
var message = cljs.core.get.call(null,map__34575__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34575__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24875__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24863__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24863__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24863__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27153__auto___34737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___34737,ch){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___34737,ch){
return (function (state_34706){
var state_val_34707 = (state_34706[(1)]);
if((state_val_34707 === (7))){
var inst_34702 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34708_34738 = state_34706__$1;
(statearr_34708_34738[(2)] = inst_34702);

(statearr_34708_34738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (1))){
var state_34706__$1 = state_34706;
var statearr_34709_34739 = state_34706__$1;
(statearr_34709_34739[(2)] = null);

(statearr_34709_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (4))){
var inst_34659 = (state_34706[(7)]);
var inst_34659__$1 = (state_34706[(2)]);
var state_34706__$1 = (function (){var statearr_34710 = state_34706;
(statearr_34710[(7)] = inst_34659__$1);

return statearr_34710;
})();
if(cljs.core.truth_(inst_34659__$1)){
var statearr_34711_34740 = state_34706__$1;
(statearr_34711_34740[(1)] = (5));

} else {
var statearr_34712_34741 = state_34706__$1;
(statearr_34712_34741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (15))){
var inst_34666 = (state_34706[(8)]);
var inst_34681 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34666);
var inst_34682 = cljs.core.first.call(null,inst_34681);
var inst_34683 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34682);
var inst_34684 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34683)].join('');
var inst_34685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34684);
var state_34706__$1 = state_34706;
var statearr_34713_34742 = state_34706__$1;
(statearr_34713_34742[(2)] = inst_34685);

(statearr_34713_34742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (13))){
var inst_34690 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34714_34743 = state_34706__$1;
(statearr_34714_34743[(2)] = inst_34690);

(statearr_34714_34743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (6))){
var state_34706__$1 = state_34706;
var statearr_34715_34744 = state_34706__$1;
(statearr_34715_34744[(2)] = null);

(statearr_34715_34744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (17))){
var inst_34688 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34716_34745 = state_34706__$1;
(statearr_34716_34745[(2)] = inst_34688);

(statearr_34716_34745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (3))){
var inst_34704 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34706__$1,inst_34704);
} else {
if((state_val_34707 === (12))){
var inst_34665 = (state_34706[(9)]);
var inst_34679 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34665,opts);
var state_34706__$1 = state_34706;
if(cljs.core.truth_(inst_34679)){
var statearr_34717_34746 = state_34706__$1;
(statearr_34717_34746[(1)] = (15));

} else {
var statearr_34718_34747 = state_34706__$1;
(statearr_34718_34747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (2))){
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34706__$1,(4),ch);
} else {
if((state_val_34707 === (11))){
var inst_34666 = (state_34706[(8)]);
var inst_34671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34672 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34666);
var inst_34673 = cljs.core.async.timeout.call(null,(1000));
var inst_34674 = [inst_34672,inst_34673];
var inst_34675 = (new cljs.core.PersistentVector(null,2,(5),inst_34671,inst_34674,null));
var state_34706__$1 = state_34706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34706__$1,(14),inst_34675);
} else {
if((state_val_34707 === (9))){
var inst_34666 = (state_34706[(8)]);
var inst_34692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34693 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34666);
var inst_34694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34693);
var inst_34695 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34694)].join('');
var inst_34696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34695);
var state_34706__$1 = (function (){var statearr_34719 = state_34706;
(statearr_34719[(10)] = inst_34692);

return statearr_34719;
})();
var statearr_34720_34748 = state_34706__$1;
(statearr_34720_34748[(2)] = inst_34696);

(statearr_34720_34748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (5))){
var inst_34659 = (state_34706[(7)]);
var inst_34661 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34662 = (new cljs.core.PersistentArrayMap(null,2,inst_34661,null));
var inst_34663 = (new cljs.core.PersistentHashSet(null,inst_34662,null));
var inst_34664 = figwheel.client.focus_msgs.call(null,inst_34663,inst_34659);
var inst_34665 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34664);
var inst_34666 = cljs.core.first.call(null,inst_34664);
var inst_34667 = figwheel.client.autoload_QMARK_.call(null);
var state_34706__$1 = (function (){var statearr_34721 = state_34706;
(statearr_34721[(9)] = inst_34665);

(statearr_34721[(8)] = inst_34666);

return statearr_34721;
})();
if(cljs.core.truth_(inst_34667)){
var statearr_34722_34749 = state_34706__$1;
(statearr_34722_34749[(1)] = (8));

} else {
var statearr_34723_34750 = state_34706__$1;
(statearr_34723_34750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (14))){
var inst_34677 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34724_34751 = state_34706__$1;
(statearr_34724_34751[(2)] = inst_34677);

(statearr_34724_34751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (16))){
var state_34706__$1 = state_34706;
var statearr_34725_34752 = state_34706__$1;
(statearr_34725_34752[(2)] = null);

(statearr_34725_34752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (10))){
var inst_34698 = (state_34706[(2)]);
var state_34706__$1 = (function (){var statearr_34726 = state_34706;
(statearr_34726[(11)] = inst_34698);

return statearr_34726;
})();
var statearr_34727_34753 = state_34706__$1;
(statearr_34727_34753[(2)] = null);

(statearr_34727_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (8))){
var inst_34665 = (state_34706[(9)]);
var inst_34669 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34665,opts);
var state_34706__$1 = state_34706;
if(cljs.core.truth_(inst_34669)){
var statearr_34728_34754 = state_34706__$1;
(statearr_34728_34754[(1)] = (11));

} else {
var statearr_34729_34755 = state_34706__$1;
(statearr_34729_34755[(1)] = (12));

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
});})(c__27153__auto___34737,ch))
;
return ((function (switch__27041__auto__,c__27153__auto___34737,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____0 = (function (){
var statearr_34733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34733[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__);

(statearr_34733[(1)] = (1));

return statearr_34733;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____1 = (function (state_34706){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_34706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e34734){if((e34734 instanceof Object)){
var ex__27045__auto__ = e34734;
var statearr_34735_34756 = state_34706;
(statearr_34735_34756[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34757 = state_34706;
state_34706 = G__34757;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__ = function(state_34706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____1.call(this,state_34706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27042__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___34737,ch))
})();
var state__27155__auto__ = (function (){var statearr_34736 = f__27154__auto__.call(null);
(statearr_34736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___34737);

return statearr_34736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___34737,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34758_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34758_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34761 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34761){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34760){if((e34760 instanceof Error)){
var e = e34760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34761], null));
} else {
var e = e34760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34761))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34762){
var map__34771 = p__34762;
var map__34771__$1 = ((((!((map__34771 == null)))?((((map__34771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34771):map__34771);
var opts = map__34771__$1;
var build_id = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34771,map__34771__$1,opts,build_id){
return (function (p__34773){
var vec__34774 = p__34773;
var seq__34775 = cljs.core.seq.call(null,vec__34774);
var first__34776 = cljs.core.first.call(null,seq__34775);
var seq__34775__$1 = cljs.core.next.call(null,seq__34775);
var map__34777 = first__34776;
var map__34777__$1 = ((((!((map__34777 == null)))?((((map__34777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34777):map__34777);
var msg = map__34777__$1;
var msg_name = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34775__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34774,seq__34775,first__34776,seq__34775__$1,map__34777,map__34777__$1,msg,msg_name,_,map__34771,map__34771__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34774,seq__34775,first__34776,seq__34775__$1,map__34777,map__34777__$1,msg,msg_name,_,map__34771,map__34771__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34771,map__34771__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34785){
var vec__34786 = p__34785;
var seq__34787 = cljs.core.seq.call(null,vec__34786);
var first__34788 = cljs.core.first.call(null,seq__34787);
var seq__34787__$1 = cljs.core.next.call(null,seq__34787);
var map__34789 = first__34788;
var map__34789__$1 = ((((!((map__34789 == null)))?((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34789):map__34789);
var msg = map__34789__$1;
var msg_name = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34787__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34791){
var map__34803 = p__34791;
var map__34803__$1 = ((((!((map__34803 == null)))?((((map__34803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34803):map__34803);
var on_compile_warning = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34803,map__34803__$1,on_compile_warning,on_compile_fail){
return (function (p__34805){
var vec__34806 = p__34805;
var seq__34807 = cljs.core.seq.call(null,vec__34806);
var first__34808 = cljs.core.first.call(null,seq__34807);
var seq__34807__$1 = cljs.core.next.call(null,seq__34807);
var map__34809 = first__34808;
var map__34809__$1 = ((((!((map__34809 == null)))?((((map__34809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34809):map__34809);
var msg = map__34809__$1;
var msg_name = cljs.core.get.call(null,map__34809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34807__$1;
var pred__34811 = cljs.core._EQ_;
var expr__34812 = msg_name;
if(cljs.core.truth_(pred__34811.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34812))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34811.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34812))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34803,map__34803__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__,msg_hist,msg_names,msg){
return (function (state_35040){
var state_val_35041 = (state_35040[(1)]);
if((state_val_35041 === (7))){
var inst_34960 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34960)){
var statearr_35042_35092 = state_35040__$1;
(statearr_35042_35092[(1)] = (8));

} else {
var statearr_35043_35093 = state_35040__$1;
(statearr_35043_35093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (20))){
var inst_35034 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35044_35094 = state_35040__$1;
(statearr_35044_35094[(2)] = inst_35034);

(statearr_35044_35094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (27))){
var inst_35030 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35045_35095 = state_35040__$1;
(statearr_35045_35095[(2)] = inst_35030);

(statearr_35045_35095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (1))){
var inst_34953 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34953)){
var statearr_35046_35096 = state_35040__$1;
(statearr_35046_35096[(1)] = (2));

} else {
var statearr_35047_35097 = state_35040__$1;
(statearr_35047_35097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (24))){
var inst_35032 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35048_35098 = state_35040__$1;
(statearr_35048_35098[(2)] = inst_35032);

(statearr_35048_35098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (4))){
var inst_35038 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35040__$1,inst_35038);
} else {
if((state_val_35041 === (15))){
var inst_35036 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35049_35099 = state_35040__$1;
(statearr_35049_35099[(2)] = inst_35036);

(statearr_35049_35099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (21))){
var inst_34989 = (state_35040[(2)]);
var inst_34990 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34991 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34990);
var state_35040__$1 = (function (){var statearr_35050 = state_35040;
(statearr_35050[(7)] = inst_34989);

return statearr_35050;
})();
var statearr_35051_35100 = state_35040__$1;
(statearr_35051_35100[(2)] = inst_34991);

(statearr_35051_35100[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (31))){
var inst_35019 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_35019)){
var statearr_35052_35101 = state_35040__$1;
(statearr_35052_35101[(1)] = (34));

} else {
var statearr_35053_35102 = state_35040__$1;
(statearr_35053_35102[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (32))){
var inst_35028 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35054_35103 = state_35040__$1;
(statearr_35054_35103[(2)] = inst_35028);

(statearr_35054_35103[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (33))){
var inst_35015 = (state_35040[(2)]);
var inst_35016 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35017 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35016);
var state_35040__$1 = (function (){var statearr_35055 = state_35040;
(statearr_35055[(8)] = inst_35015);

return statearr_35055;
})();
var statearr_35056_35104 = state_35040__$1;
(statearr_35056_35104[(2)] = inst_35017);

(statearr_35056_35104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (13))){
var inst_34974 = figwheel.client.heads_up.clear.call(null);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(16),inst_34974);
} else {
if((state_val_35041 === (22))){
var inst_34995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34996 = figwheel.client.heads_up.append_warning_message.call(null,inst_34995);
var state_35040__$1 = state_35040;
var statearr_35057_35105 = state_35040__$1;
(statearr_35057_35105[(2)] = inst_34996);

(statearr_35057_35105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (36))){
var inst_35026 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35058_35106 = state_35040__$1;
(statearr_35058_35106[(2)] = inst_35026);

(statearr_35058_35106[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (29))){
var inst_35006 = (state_35040[(2)]);
var inst_35007 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35008 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35007);
var state_35040__$1 = (function (){var statearr_35059 = state_35040;
(statearr_35059[(9)] = inst_35006);

return statearr_35059;
})();
var statearr_35060_35107 = state_35040__$1;
(statearr_35060_35107[(2)] = inst_35008);

(statearr_35060_35107[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (6))){
var inst_34955 = (state_35040[(10)]);
var state_35040__$1 = state_35040;
var statearr_35061_35108 = state_35040__$1;
(statearr_35061_35108[(2)] = inst_34955);

(statearr_35061_35108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (28))){
var inst_35002 = (state_35040[(2)]);
var inst_35003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35004 = figwheel.client.heads_up.display_warning.call(null,inst_35003);
var state_35040__$1 = (function (){var statearr_35062 = state_35040;
(statearr_35062[(11)] = inst_35002);

return statearr_35062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(29),inst_35004);
} else {
if((state_val_35041 === (25))){
var inst_35000 = figwheel.client.heads_up.clear.call(null);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(28),inst_35000);
} else {
if((state_val_35041 === (34))){
var inst_35021 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(37),inst_35021);
} else {
if((state_val_35041 === (17))){
var inst_34980 = (state_35040[(2)]);
var inst_34981 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34982 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34981);
var state_35040__$1 = (function (){var statearr_35063 = state_35040;
(statearr_35063[(12)] = inst_34980);

return statearr_35063;
})();
var statearr_35064_35109 = state_35040__$1;
(statearr_35064_35109[(2)] = inst_34982);

(statearr_35064_35109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (3))){
var inst_34972 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34972)){
var statearr_35065_35110 = state_35040__$1;
(statearr_35065_35110[(1)] = (13));

} else {
var statearr_35066_35111 = state_35040__$1;
(statearr_35066_35111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (12))){
var inst_34968 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35067_35112 = state_35040__$1;
(statearr_35067_35112[(2)] = inst_34968);

(statearr_35067_35112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (2))){
var inst_34955 = (state_35040[(10)]);
var inst_34955__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35040__$1 = (function (){var statearr_35068 = state_35040;
(statearr_35068[(10)] = inst_34955__$1);

return statearr_35068;
})();
if(cljs.core.truth_(inst_34955__$1)){
var statearr_35069_35113 = state_35040__$1;
(statearr_35069_35113[(1)] = (5));

} else {
var statearr_35070_35114 = state_35040__$1;
(statearr_35070_35114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (23))){
var inst_34998 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34998)){
var statearr_35071_35115 = state_35040__$1;
(statearr_35071_35115[(1)] = (25));

} else {
var statearr_35072_35116 = state_35040__$1;
(statearr_35072_35116[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (35))){
var state_35040__$1 = state_35040;
var statearr_35073_35117 = state_35040__$1;
(statearr_35073_35117[(2)] = null);

(statearr_35073_35117[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (19))){
var inst_34993 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34993)){
var statearr_35074_35118 = state_35040__$1;
(statearr_35074_35118[(1)] = (22));

} else {
var statearr_35075_35119 = state_35040__$1;
(statearr_35075_35119[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (11))){
var inst_34964 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35076_35120 = state_35040__$1;
(statearr_35076_35120[(2)] = inst_34964);

(statearr_35076_35120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (9))){
var inst_34966 = figwheel.client.heads_up.clear.call(null);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(12),inst_34966);
} else {
if((state_val_35041 === (5))){
var inst_34957 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35040__$1 = state_35040;
var statearr_35077_35121 = state_35040__$1;
(statearr_35077_35121[(2)] = inst_34957);

(statearr_35077_35121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (14))){
var inst_34984 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_34984)){
var statearr_35078_35122 = state_35040__$1;
(statearr_35078_35122[(1)] = (18));

} else {
var statearr_35079_35123 = state_35040__$1;
(statearr_35079_35123[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (26))){
var inst_35010 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_35010)){
var statearr_35080_35124 = state_35040__$1;
(statearr_35080_35124[(1)] = (30));

} else {
var statearr_35081_35125 = state_35040__$1;
(statearr_35081_35125[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (16))){
var inst_34976 = (state_35040[(2)]);
var inst_34977 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34978 = figwheel.client.heads_up.display_exception.call(null,inst_34977);
var state_35040__$1 = (function (){var statearr_35082 = state_35040;
(statearr_35082[(13)] = inst_34976);

return statearr_35082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(17),inst_34978);
} else {
if((state_val_35041 === (30))){
var inst_35012 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35013 = figwheel.client.heads_up.display_warning.call(null,inst_35012);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(33),inst_35013);
} else {
if((state_val_35041 === (10))){
var inst_34970 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35083_35126 = state_35040__$1;
(statearr_35083_35126[(2)] = inst_34970);

(statearr_35083_35126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (18))){
var inst_34986 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34987 = figwheel.client.heads_up.display_exception.call(null,inst_34986);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(21),inst_34987);
} else {
if((state_val_35041 === (37))){
var inst_35023 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35084_35127 = state_35040__$1;
(statearr_35084_35127[(2)] = inst_35023);

(statearr_35084_35127[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (8))){
var inst_34962 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(11),inst_34962);
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
});})(c__27153__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27041__auto__,c__27153__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____0 = (function (){
var statearr_35088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35088[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__);

(statearr_35088[(1)] = (1));

return statearr_35088;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____1 = (function (state_35040){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_35040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e35089){if((e35089 instanceof Object)){
var ex__27045__auto__ = e35089;
var statearr_35090_35128 = state_35040;
(statearr_35090_35128[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35129 = state_35040;
state_35040 = G__35129;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__ = function(state_35040){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____1.call(this,state_35040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__,msg_hist,msg_names,msg))
})();
var state__27155__auto__ = (function (){var statearr_35091 = f__27154__auto__.call(null);
(statearr_35091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_35091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__,msg_hist,msg_names,msg))
);

return c__27153__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27153__auto___35192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___35192,ch){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___35192,ch){
return (function (state_35175){
var state_val_35176 = (state_35175[(1)]);
if((state_val_35176 === (1))){
var state_35175__$1 = state_35175;
var statearr_35177_35193 = state_35175__$1;
(statearr_35177_35193[(2)] = null);

(statearr_35177_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35176 === (2))){
var state_35175__$1 = state_35175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35175__$1,(4),ch);
} else {
if((state_val_35176 === (3))){
var inst_35173 = (state_35175[(2)]);
var state_35175__$1 = state_35175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35175__$1,inst_35173);
} else {
if((state_val_35176 === (4))){
var inst_35163 = (state_35175[(7)]);
var inst_35163__$1 = (state_35175[(2)]);
var state_35175__$1 = (function (){var statearr_35178 = state_35175;
(statearr_35178[(7)] = inst_35163__$1);

return statearr_35178;
})();
if(cljs.core.truth_(inst_35163__$1)){
var statearr_35179_35194 = state_35175__$1;
(statearr_35179_35194[(1)] = (5));

} else {
var statearr_35180_35195 = state_35175__$1;
(statearr_35180_35195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35176 === (5))){
var inst_35163 = (state_35175[(7)]);
var inst_35165 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35163);
var state_35175__$1 = state_35175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35175__$1,(8),inst_35165);
} else {
if((state_val_35176 === (6))){
var state_35175__$1 = state_35175;
var statearr_35181_35196 = state_35175__$1;
(statearr_35181_35196[(2)] = null);

(statearr_35181_35196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35176 === (7))){
var inst_35171 = (state_35175[(2)]);
var state_35175__$1 = state_35175;
var statearr_35182_35197 = state_35175__$1;
(statearr_35182_35197[(2)] = inst_35171);

(statearr_35182_35197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35176 === (8))){
var inst_35167 = (state_35175[(2)]);
var state_35175__$1 = (function (){var statearr_35183 = state_35175;
(statearr_35183[(8)] = inst_35167);

return statearr_35183;
})();
var statearr_35184_35198 = state_35175__$1;
(statearr_35184_35198[(2)] = null);

(statearr_35184_35198[(1)] = (2));


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
});})(c__27153__auto___35192,ch))
;
return ((function (switch__27041__auto__,c__27153__auto___35192,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27042__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27042__auto____0 = (function (){
var statearr_35188 = [null,null,null,null,null,null,null,null,null];
(statearr_35188[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27042__auto__);

(statearr_35188[(1)] = (1));

return statearr_35188;
});
var figwheel$client$heads_up_plugin_$_state_machine__27042__auto____1 = (function (state_35175){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_35175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e35189){if((e35189 instanceof Object)){
var ex__27045__auto__ = e35189;
var statearr_35190_35199 = state_35175;
(statearr_35190_35199[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35200 = state_35175;
state_35175 = G__35200;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27042__auto__ = function(state_35175){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27042__auto____1.call(this,state_35175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27042__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27042__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___35192,ch))
})();
var state__27155__auto__ = (function (){var statearr_35191 = f__27154__auto__.call(null);
(statearr_35191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___35192);

return statearr_35191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___35192,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__){
return (function (state_35221){
var state_val_35222 = (state_35221[(1)]);
if((state_val_35222 === (1))){
var inst_35216 = cljs.core.async.timeout.call(null,(3000));
var state_35221__$1 = state_35221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35221__$1,(2),inst_35216);
} else {
if((state_val_35222 === (2))){
var inst_35218 = (state_35221[(2)]);
var inst_35219 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35221__$1 = (function (){var statearr_35223 = state_35221;
(statearr_35223[(7)] = inst_35218);

return statearr_35223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35221__$1,inst_35219);
} else {
return null;
}
}
});})(c__27153__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____0 = (function (){
var statearr_35227 = [null,null,null,null,null,null,null,null];
(statearr_35227[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__);

(statearr_35227[(1)] = (1));

return statearr_35227;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____1 = (function (state_35221){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_35221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e35228){if((e35228 instanceof Object)){
var ex__27045__auto__ = e35228;
var statearr_35229_35231 = state_35221;
(statearr_35229_35231[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35232 = state_35221;
state_35221 = G__35232;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__ = function(state_35221){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____1.call(this,state_35221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27042__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__))
})();
var state__27155__auto__ = (function (){var statearr_35230 = f__27154__auto__.call(null);
(statearr_35230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_35230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__))
);

return c__27153__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (1))){
var inst_35249 = cljs.core.async.timeout.call(null,(2000));
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(2),inst_35249);
} else {
if((state_val_35256 === (2))){
var inst_35251 = (state_35255[(2)]);
var inst_35252 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35253 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35252);
var state_35255__$1 = (function (){var statearr_35257 = state_35255;
(statearr_35257[(7)] = inst_35251);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
return null;
}
}
});})(c__27153__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____0 = (function (){
var statearr_35261 = [null,null,null,null,null,null,null,null];
(statearr_35261[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__);

(statearr_35261[(1)] = (1));

return statearr_35261;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____1 = (function (state_35255){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e35262){if((e35262 instanceof Object)){
var ex__27045__auto__ = e35262;
var statearr_35263_35265 = state_35255;
(statearr_35263_35265[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35266 = state_35255;
state_35255 = G__35266;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27155__auto__ = (function (){var statearr_35264 = f__27154__auto__.call(null);
(statearr_35264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_35264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__,figwheel_version,temp__4657__auto__))
);

return c__27153__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35267){
var map__35271 = p__35267;
var map__35271__$1 = ((((!((map__35271 == null)))?((((map__35271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35271):map__35271);
var file = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35273 = "";
var G__35273__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35273),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35273);
var G__35273__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35273__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35273__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = line;
if(cljs.core.truth_(and__24863__auto__)){
return column;
} else {
return and__24863__auto__;
}
})())){
return [cljs.core.str(G__35273__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35273__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35274){
var map__35281 = p__35274;
var map__35281__$1 = ((((!((map__35281 == null)))?((((map__35281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35281):map__35281);
var ed = map__35281__$1;
var formatted_exception = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35283_35287 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35284_35288 = null;
var count__35285_35289 = (0);
var i__35286_35290 = (0);
while(true){
if((i__35286_35290 < count__35285_35289)){
var msg_35291 = cljs.core._nth.call(null,chunk__35284_35288,i__35286_35290);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35291);

var G__35292 = seq__35283_35287;
var G__35293 = chunk__35284_35288;
var G__35294 = count__35285_35289;
var G__35295 = (i__35286_35290 + (1));
seq__35283_35287 = G__35292;
chunk__35284_35288 = G__35293;
count__35285_35289 = G__35294;
i__35286_35290 = G__35295;
continue;
} else {
var temp__4657__auto___35296 = cljs.core.seq.call(null,seq__35283_35287);
if(temp__4657__auto___35296){
var seq__35283_35297__$1 = temp__4657__auto___35296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35283_35297__$1)){
var c__25689__auto___35298 = cljs.core.chunk_first.call(null,seq__35283_35297__$1);
var G__35299 = cljs.core.chunk_rest.call(null,seq__35283_35297__$1);
var G__35300 = c__25689__auto___35298;
var G__35301 = cljs.core.count.call(null,c__25689__auto___35298);
var G__35302 = (0);
seq__35283_35287 = G__35299;
chunk__35284_35288 = G__35300;
count__35285_35289 = G__35301;
i__35286_35290 = G__35302;
continue;
} else {
var msg_35303 = cljs.core.first.call(null,seq__35283_35297__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35303);

var G__35304 = cljs.core.next.call(null,seq__35283_35297__$1);
var G__35305 = null;
var G__35306 = (0);
var G__35307 = (0);
seq__35283_35287 = G__35304;
chunk__35284_35288 = G__35305;
count__35285_35289 = G__35306;
i__35286_35290 = G__35307;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35308){
var map__35311 = p__35308;
var map__35311__$1 = ((((!((map__35311 == null)))?((((map__35311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35311):map__35311);
var w = map__35311__$1;
var message = cljs.core.get.call(null,map__35311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24863__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24863__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35323 = cljs.core.seq.call(null,plugins);
var chunk__35324 = null;
var count__35325 = (0);
var i__35326 = (0);
while(true){
if((i__35326 < count__35325)){
var vec__35327 = cljs.core._nth.call(null,chunk__35324,i__35326);
var k = cljs.core.nth.call(null,vec__35327,(0),null);
var plugin = cljs.core.nth.call(null,vec__35327,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35333 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35323,chunk__35324,count__35325,i__35326,pl_35333,vec__35327,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35333.call(null,msg_hist);
});})(seq__35323,chunk__35324,count__35325,i__35326,pl_35333,vec__35327,k,plugin))
);
} else {
}

var G__35334 = seq__35323;
var G__35335 = chunk__35324;
var G__35336 = count__35325;
var G__35337 = (i__35326 + (1));
seq__35323 = G__35334;
chunk__35324 = G__35335;
count__35325 = G__35336;
i__35326 = G__35337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35323);
if(temp__4657__auto__){
var seq__35323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35323__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__35323__$1);
var G__35338 = cljs.core.chunk_rest.call(null,seq__35323__$1);
var G__35339 = c__25689__auto__;
var G__35340 = cljs.core.count.call(null,c__25689__auto__);
var G__35341 = (0);
seq__35323 = G__35338;
chunk__35324 = G__35339;
count__35325 = G__35340;
i__35326 = G__35341;
continue;
} else {
var vec__35330 = cljs.core.first.call(null,seq__35323__$1);
var k = cljs.core.nth.call(null,vec__35330,(0),null);
var plugin = cljs.core.nth.call(null,vec__35330,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35342 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35323,chunk__35324,count__35325,i__35326,pl_35342,vec__35330,k,plugin,seq__35323__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35342.call(null,msg_hist);
});})(seq__35323,chunk__35324,count__35325,i__35326,pl_35342,vec__35330,k,plugin,seq__35323__$1,temp__4657__auto__))
);
} else {
}

var G__35343 = cljs.core.next.call(null,seq__35323__$1);
var G__35344 = null;
var G__35345 = (0);
var G__35346 = (0);
seq__35323 = G__35343;
chunk__35324 = G__35344;
count__35325 = G__35345;
i__35326 = G__35346;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35347 = [];
var len__25983__auto___35354 = arguments.length;
var i__25984__auto___35355 = (0);
while(true){
if((i__25984__auto___35355 < len__25983__auto___35354)){
args35347.push((arguments[i__25984__auto___35355]));

var G__35356 = (i__25984__auto___35355 + (1));
i__25984__auto___35355 = G__35356;
continue;
} else {
}
break;
}

var G__35349 = args35347.length;
switch (G__35349) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35347.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35350_35358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35351_35359 = null;
var count__35352_35360 = (0);
var i__35353_35361 = (0);
while(true){
if((i__35353_35361 < count__35352_35360)){
var msg_35362 = cljs.core._nth.call(null,chunk__35351_35359,i__35353_35361);
figwheel.client.socket.handle_incoming_message.call(null,msg_35362);

var G__35363 = seq__35350_35358;
var G__35364 = chunk__35351_35359;
var G__35365 = count__35352_35360;
var G__35366 = (i__35353_35361 + (1));
seq__35350_35358 = G__35363;
chunk__35351_35359 = G__35364;
count__35352_35360 = G__35365;
i__35353_35361 = G__35366;
continue;
} else {
var temp__4657__auto___35367 = cljs.core.seq.call(null,seq__35350_35358);
if(temp__4657__auto___35367){
var seq__35350_35368__$1 = temp__4657__auto___35367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35350_35368__$1)){
var c__25689__auto___35369 = cljs.core.chunk_first.call(null,seq__35350_35368__$1);
var G__35370 = cljs.core.chunk_rest.call(null,seq__35350_35368__$1);
var G__35371 = c__25689__auto___35369;
var G__35372 = cljs.core.count.call(null,c__25689__auto___35369);
var G__35373 = (0);
seq__35350_35358 = G__35370;
chunk__35351_35359 = G__35371;
count__35352_35360 = G__35372;
i__35353_35361 = G__35373;
continue;
} else {
var msg_35374 = cljs.core.first.call(null,seq__35350_35368__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35374);

var G__35375 = cljs.core.next.call(null,seq__35350_35368__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__35350_35358 = G__35375;
chunk__35351_35359 = G__35376;
count__35352_35360 = G__35377;
i__35353_35361 = G__35378;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25990__auto__ = [];
var len__25983__auto___35383 = arguments.length;
var i__25984__auto___35384 = (0);
while(true){
if((i__25984__auto___35384 < len__25983__auto___35383)){
args__25990__auto__.push((arguments[i__25984__auto___35384]));

var G__35385 = (i__25984__auto___35384 + (1));
i__25984__auto___35384 = G__35385;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35380){
var map__35381 = p__35380;
var map__35381__$1 = ((((!((map__35381 == null)))?((((map__35381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35381):map__35381);
var opts = map__35381__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35379){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35379));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35387){if((e35387 instanceof Error)){
var e = e35387;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35387;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35391){
var map__35392 = p__35391;
var map__35392__$1 = ((((!((map__35392 == null)))?((((map__35392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35392):map__35392);
var msg_name = cljs.core.get.call(null,map__35392__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479258327672