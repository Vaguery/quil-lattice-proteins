// Compiled by ClojureScript 1.9.293 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25864__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27007_27009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27008_27010 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27007_27009,_STAR_print_fn_STAR_27008_27010,sb__25864__auto__){
return (function (x__25865__auto__){
return sb__25864__auto__.append(x__25865__auto__);
});})(_STAR_print_newline_STAR_27007_27009,_STAR_print_fn_STAR_27008_27010,sb__25864__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27008_27010;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27007_27009;
}
return [cljs.core.str(sb__25864__auto__)].join('');
}catch (e27005){if((e27005 instanceof Error)){
var e1 = e27005;
try{return obj.toString();
}catch (e27006){if((e27006 instanceof Error)){
var e2 = e27006;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e27006;

}
}} else {
throw e27005;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_27012 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27012;
}});

//# sourceMappingURL=utils.js.map?rel=1479816749249