// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27198 = [];
var len__25983__auto___27204 = arguments.length;
var i__25984__auto___27205 = (0);
while(true){
if((i__25984__auto___27205 < len__25983__auto___27204)){
args27198.push((arguments[i__25984__auto___27205]));

var G__27206 = (i__25984__auto___27205 + (1));
i__25984__auto___27205 = G__27206;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27201 = (function (f,blockable,meta27202){
this.f = f;
this.blockable = blockable;
this.meta27202 = meta27202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27203,meta27202__$1){
var self__ = this;
var _27203__$1 = this;
return (new cljs.core.async.t_cljs$core$async27201(self__.f,self__.blockable,meta27202__$1));
});

cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27203){
var self__ = this;
var _27203__$1 = this;
return self__.meta27202;
});

cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27202","meta27202",408080383,null)], null);
});

cljs.core.async.t_cljs$core$async27201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27201";

cljs.core.async.t_cljs$core$async27201.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27201");
});

cljs.core.async.__GT_t_cljs$core$async27201 = (function cljs$core$async$__GT_t_cljs$core$async27201(f__$1,blockable__$1,meta27202){
return (new cljs.core.async.t_cljs$core$async27201(f__$1,blockable__$1,meta27202));
});

}

return (new cljs.core.async.t_cljs$core$async27201(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27210 = [];
var len__25983__auto___27213 = arguments.length;
var i__25984__auto___27214 = (0);
while(true){
if((i__25984__auto___27214 < len__25983__auto___27213)){
args27210.push((arguments[i__25984__auto___27214]));

var G__27215 = (i__25984__auto___27214 + (1));
i__25984__auto___27214 = G__27215;
continue;
} else {
}
break;
}

var G__27212 = args27210.length;
switch (G__27212) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27210.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27217 = [];
var len__25983__auto___27220 = arguments.length;
var i__25984__auto___27221 = (0);
while(true){
if((i__25984__auto___27221 < len__25983__auto___27220)){
args27217.push((arguments[i__25984__auto___27221]));

var G__27222 = (i__25984__auto___27221 + (1));
i__25984__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var G__27219 = args27217.length;
switch (G__27219) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27217.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27224 = [];
var len__25983__auto___27227 = arguments.length;
var i__25984__auto___27228 = (0);
while(true){
if((i__25984__auto___27228 < len__25983__auto___27227)){
args27224.push((arguments[i__25984__auto___27228]));

var G__27229 = (i__25984__auto___27228 + (1));
i__25984__auto___27228 = G__27229;
continue;
} else {
}
break;
}

var G__27226 = args27224.length;
switch (G__27226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27224.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27231,ret){
return (function (){
return fn1.call(null,val_27231);
});})(val_27231,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27232 = [];
var len__25983__auto___27235 = arguments.length;
var i__25984__auto___27236 = (0);
while(true){
if((i__25984__auto___27236 < len__25983__auto___27235)){
args27232.push((arguments[i__25984__auto___27236]));

var G__27237 = (i__25984__auto___27236 + (1));
i__25984__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var G__27234 = args27232.length;
switch (G__27234) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27232.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25793__auto___27239 = n;
var x_27240 = (0);
while(true){
if((x_27240 < n__25793__auto___27239)){
(a[x_27240] = (0));

var G__27241 = (x_27240 + (1));
x_27240 = G__27241;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27242 = (i + (1));
i = G__27242;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27246 = (function (flag,meta27247){
this.flag = flag;
this.meta27247 = meta27247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27248,meta27247__$1){
var self__ = this;
var _27248__$1 = this;
return (new cljs.core.async.t_cljs$core$async27246(self__.flag,meta27247__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27248){
var self__ = this;
var _27248__$1 = this;
return self__.meta27247;
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27247","meta27247",-2127805492,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27246";

cljs.core.async.t_cljs$core$async27246.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27246");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27246 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27246(flag__$1,meta27247){
return (new cljs.core.async.t_cljs$core$async27246(flag__$1,meta27247));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27246(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27252 = (function (flag,cb,meta27253){
this.flag = flag;
this.cb = cb;
this.meta27253 = meta27253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27254,meta27253__$1){
var self__ = this;
var _27254__$1 = this;
return (new cljs.core.async.t_cljs$core$async27252(self__.flag,self__.cb,meta27253__$1));
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27254){
var self__ = this;
var _27254__$1 = this;
return self__.meta27253;
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27253","meta27253",-1009815590,null)], null);
});

cljs.core.async.t_cljs$core$async27252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27252";

cljs.core.async.t_cljs$core$async27252.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async27252");
});

cljs.core.async.__GT_t_cljs$core$async27252 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27252(flag__$1,cb__$1,meta27253){
return (new cljs.core.async.t_cljs$core$async27252(flag__$1,cb__$1,meta27253));
});

}

return (new cljs.core.async.t_cljs$core$async27252(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27255_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27256_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24875__auto__ = wport;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27257 = (i + (1));
i = G__27257;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24875__auto__ = ret;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24863__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24863__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___27263 = arguments.length;
var i__25984__auto___27264 = (0);
while(true){
if((i__25984__auto___27264 < len__25983__auto___27263)){
args__25990__auto__.push((arguments[i__25984__auto___27264]));

var G__27265 = (i__25984__auto___27264 + (1));
i__25984__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27260){
var map__27261 = p__27260;
var map__27261__$1 = ((((!((map__27261 == null)))?((((map__27261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27261):map__27261);
var opts = map__27261__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27258){
var G__27259 = cljs.core.first.call(null,seq27258);
var seq27258__$1 = cljs.core.next.call(null,seq27258);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27259,seq27258__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27266 = [];
var len__25983__auto___27316 = arguments.length;
var i__25984__auto___27317 = (0);
while(true){
if((i__25984__auto___27317 < len__25983__auto___27316)){
args27266.push((arguments[i__25984__auto___27317]));

var G__27318 = (i__25984__auto___27317 + (1));
i__25984__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var G__27268 = args27266.length;
switch (G__27268) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27266.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27153__auto___27320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___27320){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___27320){
return (function (state_27292){
var state_val_27293 = (state_27292[(1)]);
if((state_val_27293 === (7))){
var inst_27288 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27294_27321 = state_27292__$1;
(statearr_27294_27321[(2)] = inst_27288);

(statearr_27294_27321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (1))){
var state_27292__$1 = state_27292;
var statearr_27295_27322 = state_27292__$1;
(statearr_27295_27322[(2)] = null);

(statearr_27295_27322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (4))){
var inst_27271 = (state_27292[(7)]);
var inst_27271__$1 = (state_27292[(2)]);
var inst_27272 = (inst_27271__$1 == null);
var state_27292__$1 = (function (){var statearr_27296 = state_27292;
(statearr_27296[(7)] = inst_27271__$1);

return statearr_27296;
})();
if(cljs.core.truth_(inst_27272)){
var statearr_27297_27323 = state_27292__$1;
(statearr_27297_27323[(1)] = (5));

} else {
var statearr_27298_27324 = state_27292__$1;
(statearr_27298_27324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (13))){
var state_27292__$1 = state_27292;
var statearr_27299_27325 = state_27292__$1;
(statearr_27299_27325[(2)] = null);

(statearr_27299_27325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (6))){
var inst_27271 = (state_27292[(7)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27292__$1,(11),to,inst_27271);
} else {
if((state_val_27293 === (3))){
var inst_27290 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27292__$1,inst_27290);
} else {
if((state_val_27293 === (12))){
var state_27292__$1 = state_27292;
var statearr_27300_27326 = state_27292__$1;
(statearr_27300_27326[(2)] = null);

(statearr_27300_27326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (2))){
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27292__$1,(4),from);
} else {
if((state_val_27293 === (11))){
var inst_27281 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27281)){
var statearr_27301_27327 = state_27292__$1;
(statearr_27301_27327[(1)] = (12));

} else {
var statearr_27302_27328 = state_27292__$1;
(statearr_27302_27328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (9))){
var state_27292__$1 = state_27292;
var statearr_27303_27329 = state_27292__$1;
(statearr_27303_27329[(2)] = null);

(statearr_27303_27329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (5))){
var state_27292__$1 = state_27292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27304_27330 = state_27292__$1;
(statearr_27304_27330[(1)] = (8));

} else {
var statearr_27305_27331 = state_27292__$1;
(statearr_27305_27331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (14))){
var inst_27286 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27306_27332 = state_27292__$1;
(statearr_27306_27332[(2)] = inst_27286);

(statearr_27306_27332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (10))){
var inst_27278 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27307_27333 = state_27292__$1;
(statearr_27307_27333[(2)] = inst_27278);

(statearr_27307_27333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (8))){
var inst_27275 = cljs.core.async.close_BANG_.call(null,to);
var state_27292__$1 = state_27292;
var statearr_27308_27334 = state_27292__$1;
(statearr_27308_27334[(2)] = inst_27275);

(statearr_27308_27334[(1)] = (10));


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
});})(c__27153__auto___27320))
;
return ((function (switch__27041__auto__,c__27153__auto___27320){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_27312 = [null,null,null,null,null,null,null,null];
(statearr_27312[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_27312[(1)] = (1));

return statearr_27312;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_27292){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27313){if((e27313 instanceof Object)){
var ex__27045__auto__ = e27313;
var statearr_27314_27335 = state_27292;
(statearr_27314_27335[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27336 = state_27292;
state_27292 = G__27336;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_27292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_27292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___27320))
})();
var state__27155__auto__ = (function (){var statearr_27315 = f__27154__auto__.call(null);
(statearr_27315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27320);

return statearr_27315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___27320))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27524){
var vec__27525 = p__27524;
var v = cljs.core.nth.call(null,vec__27525,(0),null);
var p = cljs.core.nth.call(null,vec__27525,(1),null);
var job = vec__27525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27153__auto___27711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results){
return (function (state_27532){
var state_val_27533 = (state_27532[(1)]);
if((state_val_27533 === (1))){
var state_27532__$1 = state_27532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27532__$1,(2),res,v);
} else {
if((state_val_27533 === (2))){
var inst_27529 = (state_27532[(2)]);
var inst_27530 = cljs.core.async.close_BANG_.call(null,res);
var state_27532__$1 = (function (){var statearr_27534 = state_27532;
(statearr_27534[(7)] = inst_27529);

return statearr_27534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27532__$1,inst_27530);
} else {
return null;
}
}
});})(c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results))
;
return ((function (switch__27041__auto__,c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_27538 = [null,null,null,null,null,null,null,null];
(statearr_27538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_27538[(1)] = (1));

return statearr_27538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_27532){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27539){if((e27539 instanceof Object)){
var ex__27045__auto__ = e27539;
var statearr_27540_27712 = state_27532;
(statearr_27540_27712[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27713 = state_27532;
state_27532 = G__27713;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_27532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_27532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results))
})();
var state__27155__auto__ = (function (){var statearr_27541 = f__27154__auto__.call(null);
(statearr_27541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27711);

return statearr_27541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___27711,res,vec__27525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27542){
var vec__27543 = p__27542;
var v = cljs.core.nth.call(null,vec__27543,(0),null);
var p = cljs.core.nth.call(null,vec__27543,(1),null);
var job = vec__27543;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25793__auto___27714 = n;
var __27715 = (0);
while(true){
if((__27715 < n__25793__auto___27714)){
var G__27546_27716 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27546_27716) {
case "compute":
var c__27153__auto___27718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27715,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (__27715,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function (state_27559){
var state_val_27560 = (state_27559[(1)]);
if((state_val_27560 === (1))){
var state_27559__$1 = state_27559;
var statearr_27561_27719 = state_27559__$1;
(statearr_27561_27719[(2)] = null);

(statearr_27561_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (2))){
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27559__$1,(4),jobs);
} else {
if((state_val_27560 === (3))){
var inst_27557 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27559__$1,inst_27557);
} else {
if((state_val_27560 === (4))){
var inst_27549 = (state_27559[(2)]);
var inst_27550 = process.call(null,inst_27549);
var state_27559__$1 = state_27559;
if(cljs.core.truth_(inst_27550)){
var statearr_27562_27720 = state_27559__$1;
(statearr_27562_27720[(1)] = (5));

} else {
var statearr_27563_27721 = state_27559__$1;
(statearr_27563_27721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (5))){
var state_27559__$1 = state_27559;
var statearr_27564_27722 = state_27559__$1;
(statearr_27564_27722[(2)] = null);

(statearr_27564_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (6))){
var state_27559__$1 = state_27559;
var statearr_27565_27723 = state_27559__$1;
(statearr_27565_27723[(2)] = null);

(statearr_27565_27723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (7))){
var inst_27555 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27566_27724 = state_27559__$1;
(statearr_27566_27724[(2)] = inst_27555);

(statearr_27566_27724[(1)] = (3));


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
});})(__27715,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
;
return ((function (__27715,switch__27041__auto__,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_27570 = [null,null,null,null,null,null,null];
(statearr_27570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_27570[(1)] = (1));

return statearr_27570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_27559){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27571){if((e27571 instanceof Object)){
var ex__27045__auto__ = e27571;
var statearr_27572_27725 = state_27559;
(statearr_27572_27725[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27726 = state_27559;
state_27559 = G__27726;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_27559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_27559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(__27715,switch__27041__auto__,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
})();
var state__27155__auto__ = (function (){var statearr_27573 = f__27154__auto__.call(null);
(statearr_27573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27718);

return statearr_27573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(__27715,c__27153__auto___27718,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
);


break;
case "async":
var c__27153__auto___27727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27715,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (__27715,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function (state_27586){
var state_val_27587 = (state_27586[(1)]);
if((state_val_27587 === (1))){
var state_27586__$1 = state_27586;
var statearr_27588_27728 = state_27586__$1;
(statearr_27588_27728[(2)] = null);

(statearr_27588_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (2))){
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27586__$1,(4),jobs);
} else {
if((state_val_27587 === (3))){
var inst_27584 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27586__$1,inst_27584);
} else {
if((state_val_27587 === (4))){
var inst_27576 = (state_27586[(2)]);
var inst_27577 = async.call(null,inst_27576);
var state_27586__$1 = state_27586;
if(cljs.core.truth_(inst_27577)){
var statearr_27589_27729 = state_27586__$1;
(statearr_27589_27729[(1)] = (5));

} else {
var statearr_27590_27730 = state_27586__$1;
(statearr_27590_27730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (5))){
var state_27586__$1 = state_27586;
var statearr_27591_27731 = state_27586__$1;
(statearr_27591_27731[(2)] = null);

(statearr_27591_27731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (6))){
var state_27586__$1 = state_27586;
var statearr_27592_27732 = state_27586__$1;
(statearr_27592_27732[(2)] = null);

(statearr_27592_27732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27587 === (7))){
var inst_27582 = (state_27586[(2)]);
var state_27586__$1 = state_27586;
var statearr_27593_27733 = state_27586__$1;
(statearr_27593_27733[(2)] = inst_27582);

(statearr_27593_27733[(1)] = (3));


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
});})(__27715,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
;
return ((function (__27715,switch__27041__auto__,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_27597 = [null,null,null,null,null,null,null];
(statearr_27597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_27597[(1)] = (1));

return statearr_27597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_27586){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27598){if((e27598 instanceof Object)){
var ex__27045__auto__ = e27598;
var statearr_27599_27734 = state_27586;
(statearr_27599_27734[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27735 = state_27586;
state_27586 = G__27735;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_27586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_27586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(__27715,switch__27041__auto__,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
})();
var state__27155__auto__ = (function (){var statearr_27600 = f__27154__auto__.call(null);
(statearr_27600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27727);

return statearr_27600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(__27715,c__27153__auto___27727,G__27546_27716,n__25793__auto___27714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27736 = (__27715 + (1));
__27715 = G__27736;
continue;
} else {
}
break;
}

var c__27153__auto___27737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___27737,jobs,results,process,async){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___27737,jobs,results,process,async){
return (function (state_27622){
var state_val_27623 = (state_27622[(1)]);
if((state_val_27623 === (1))){
var state_27622__$1 = state_27622;
var statearr_27624_27738 = state_27622__$1;
(statearr_27624_27738[(2)] = null);

(statearr_27624_27738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (2))){
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27622__$1,(4),from);
} else {
if((state_val_27623 === (3))){
var inst_27620 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27622__$1,inst_27620);
} else {
if((state_val_27623 === (4))){
var inst_27603 = (state_27622[(7)]);
var inst_27603__$1 = (state_27622[(2)]);
var inst_27604 = (inst_27603__$1 == null);
var state_27622__$1 = (function (){var statearr_27625 = state_27622;
(statearr_27625[(7)] = inst_27603__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27604)){
var statearr_27626_27739 = state_27622__$1;
(statearr_27626_27739[(1)] = (5));

} else {
var statearr_27627_27740 = state_27622__$1;
(statearr_27627_27740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (5))){
var inst_27606 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27622__$1 = state_27622;
var statearr_27628_27741 = state_27622__$1;
(statearr_27628_27741[(2)] = inst_27606);

(statearr_27628_27741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (6))){
var inst_27608 = (state_27622[(8)]);
var inst_27603 = (state_27622[(7)]);
var inst_27608__$1 = cljs.core.async.chan.call(null,(1));
var inst_27609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27610 = [inst_27603,inst_27608__$1];
var inst_27611 = (new cljs.core.PersistentVector(null,2,(5),inst_27609,inst_27610,null));
var state_27622__$1 = (function (){var statearr_27629 = state_27622;
(statearr_27629[(8)] = inst_27608__$1);

return statearr_27629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27622__$1,(8),jobs,inst_27611);
} else {
if((state_val_27623 === (7))){
var inst_27618 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27630_27742 = state_27622__$1;
(statearr_27630_27742[(2)] = inst_27618);

(statearr_27630_27742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (8))){
var inst_27608 = (state_27622[(8)]);
var inst_27613 = (state_27622[(2)]);
var state_27622__$1 = (function (){var statearr_27631 = state_27622;
(statearr_27631[(9)] = inst_27613);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27622__$1,(9),results,inst_27608);
} else {
if((state_val_27623 === (9))){
var inst_27615 = (state_27622[(2)]);
var state_27622__$1 = (function (){var statearr_27632 = state_27622;
(statearr_27632[(10)] = inst_27615);

return statearr_27632;
})();
var statearr_27633_27743 = state_27622__$1;
(statearr_27633_27743[(2)] = null);

(statearr_27633_27743[(1)] = (2));


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
});})(c__27153__auto___27737,jobs,results,process,async))
;
return ((function (switch__27041__auto__,c__27153__auto___27737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_27637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_27637[(1)] = (1));

return statearr_27637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_27622){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27638){if((e27638 instanceof Object)){
var ex__27045__auto__ = e27638;
var statearr_27639_27744 = state_27622;
(statearr_27639_27744[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27745 = state_27622;
state_27622 = G__27745;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_27622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_27622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___27737,jobs,results,process,async))
})();
var state__27155__auto__ = (function (){var statearr_27640 = f__27154__auto__.call(null);
(statearr_27640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27737);

return statearr_27640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___27737,jobs,results,process,async))
);


var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__,jobs,results,process,async){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__,jobs,results,process,async){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27680_27746 = state_27678__$1;
(statearr_27680_27746[(2)] = inst_27674);

(statearr_27680_27746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (20))){
var state_27678__$1 = state_27678;
var statearr_27681_27747 = state_27678__$1;
(statearr_27681_27747[(2)] = null);

(statearr_27681_27747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (1))){
var state_27678__$1 = state_27678;
var statearr_27682_27748 = state_27678__$1;
(statearr_27682_27748[(2)] = null);

(statearr_27682_27748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (4))){
var inst_27643 = (state_27678[(7)]);
var inst_27643__$1 = (state_27678[(2)]);
var inst_27644 = (inst_27643__$1 == null);
var state_27678__$1 = (function (){var statearr_27683 = state_27678;
(statearr_27683[(7)] = inst_27643__$1);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27644)){
var statearr_27684_27749 = state_27678__$1;
(statearr_27684_27749[(1)] = (5));

} else {
var statearr_27685_27750 = state_27678__$1;
(statearr_27685_27750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (15))){
var inst_27656 = (state_27678[(8)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27678__$1,(18),to,inst_27656);
} else {
if((state_val_27679 === (21))){
var inst_27669 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27686_27751 = state_27678__$1;
(statearr_27686_27751[(2)] = inst_27669);

(statearr_27686_27751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (13))){
var inst_27671 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27687 = state_27678;
(statearr_27687[(9)] = inst_27671);

return statearr_27687;
})();
var statearr_27688_27752 = state_27678__$1;
(statearr_27688_27752[(2)] = null);

(statearr_27688_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var inst_27643 = (state_27678[(7)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(11),inst_27643);
} else {
if((state_val_27679 === (17))){
var inst_27664 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27664)){
var statearr_27689_27753 = state_27678__$1;
(statearr_27689_27753[(1)] = (19));

} else {
var statearr_27690_27754 = state_27678__$1;
(statearr_27690_27754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (12))){
var inst_27653 = (state_27678[(10)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(14),inst_27653);
} else {
if((state_val_27679 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(4),results);
} else {
if((state_val_27679 === (19))){
var state_27678__$1 = state_27678;
var statearr_27691_27755 = state_27678__$1;
(statearr_27691_27755[(2)] = null);

(statearr_27691_27755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (11))){
var inst_27653 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27692 = state_27678;
(statearr_27692[(10)] = inst_27653);

return statearr_27692;
})();
var statearr_27693_27756 = state_27678__$1;
(statearr_27693_27756[(2)] = null);

(statearr_27693_27756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (9))){
var state_27678__$1 = state_27678;
var statearr_27694_27757 = state_27678__$1;
(statearr_27694_27757[(2)] = null);

(statearr_27694_27757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (5))){
var state_27678__$1 = state_27678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27695_27758 = state_27678__$1;
(statearr_27695_27758[(1)] = (8));

} else {
var statearr_27696_27759 = state_27678__$1;
(statearr_27696_27759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (14))){
var inst_27658 = (state_27678[(11)]);
var inst_27656 = (state_27678[(8)]);
var inst_27656__$1 = (state_27678[(2)]);
var inst_27657 = (inst_27656__$1 == null);
var inst_27658__$1 = cljs.core.not.call(null,inst_27657);
var state_27678__$1 = (function (){var statearr_27697 = state_27678;
(statearr_27697[(11)] = inst_27658__$1);

(statearr_27697[(8)] = inst_27656__$1);

return statearr_27697;
})();
if(inst_27658__$1){
var statearr_27698_27760 = state_27678__$1;
(statearr_27698_27760[(1)] = (15));

} else {
var statearr_27699_27761 = state_27678__$1;
(statearr_27699_27761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (16))){
var inst_27658 = (state_27678[(11)]);
var state_27678__$1 = state_27678;
var statearr_27700_27762 = state_27678__$1;
(statearr_27700_27762[(2)] = inst_27658);

(statearr_27700_27762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (10))){
var inst_27650 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27701_27763 = state_27678__$1;
(statearr_27701_27763[(2)] = inst_27650);

(statearr_27701_27763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (18))){
var inst_27661 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27702_27764 = state_27678__$1;
(statearr_27702_27764[(2)] = inst_27661);

(statearr_27702_27764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (8))){
var inst_27647 = cljs.core.async.close_BANG_.call(null,to);
var state_27678__$1 = state_27678;
var statearr_27703_27765 = state_27678__$1;
(statearr_27703_27765[(2)] = inst_27647);

(statearr_27703_27765[(1)] = (10));


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
});})(c__27153__auto__,jobs,results,process,async))
;
return ((function (switch__27041__auto__,c__27153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_27707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_27707[(1)] = (1));

return statearr_27707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_27678){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27708){if((e27708 instanceof Object)){
var ex__27045__auto__ = e27708;
var statearr_27709_27766 = state_27678;
(statearr_27709_27766[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27767 = state_27678;
state_27678 = G__27767;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__,jobs,results,process,async))
})();
var state__27155__auto__ = (function (){var statearr_27710 = f__27154__auto__.call(null);
(statearr_27710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_27710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__,jobs,results,process,async))
);

return c__27153__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27768 = [];
var len__25983__auto___27771 = arguments.length;
var i__25984__auto___27772 = (0);
while(true){
if((i__25984__auto___27772 < len__25983__auto___27771)){
args27768.push((arguments[i__25984__auto___27772]));

var G__27773 = (i__25984__auto___27772 + (1));
i__25984__auto___27772 = G__27773;
continue;
} else {
}
break;
}

var G__27770 = args27768.length;
switch (G__27770) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27768.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27775 = [];
var len__25983__auto___27778 = arguments.length;
var i__25984__auto___27779 = (0);
while(true){
if((i__25984__auto___27779 < len__25983__auto___27778)){
args27775.push((arguments[i__25984__auto___27779]));

var G__27780 = (i__25984__auto___27779 + (1));
i__25984__auto___27779 = G__27780;
continue;
} else {
}
break;
}

var G__27777 = args27775.length;
switch (G__27777) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27775.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27782 = [];
var len__25983__auto___27835 = arguments.length;
var i__25984__auto___27836 = (0);
while(true){
if((i__25984__auto___27836 < len__25983__auto___27835)){
args27782.push((arguments[i__25984__auto___27836]));

var G__27837 = (i__25984__auto___27836 + (1));
i__25984__auto___27836 = G__27837;
continue;
} else {
}
break;
}

var G__27784 = args27782.length;
switch (G__27784) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27782.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27153__auto___27839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___27839,tc,fc){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___27839,tc,fc){
return (function (state_27810){
var state_val_27811 = (state_27810[(1)]);
if((state_val_27811 === (7))){
var inst_27806 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27812_27840 = state_27810__$1;
(statearr_27812_27840[(2)] = inst_27806);

(statearr_27812_27840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (1))){
var state_27810__$1 = state_27810;
var statearr_27813_27841 = state_27810__$1;
(statearr_27813_27841[(2)] = null);

(statearr_27813_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (4))){
var inst_27787 = (state_27810[(7)]);
var inst_27787__$1 = (state_27810[(2)]);
var inst_27788 = (inst_27787__$1 == null);
var state_27810__$1 = (function (){var statearr_27814 = state_27810;
(statearr_27814[(7)] = inst_27787__$1);

return statearr_27814;
})();
if(cljs.core.truth_(inst_27788)){
var statearr_27815_27842 = state_27810__$1;
(statearr_27815_27842[(1)] = (5));

} else {
var statearr_27816_27843 = state_27810__$1;
(statearr_27816_27843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (13))){
var state_27810__$1 = state_27810;
var statearr_27817_27844 = state_27810__$1;
(statearr_27817_27844[(2)] = null);

(statearr_27817_27844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (6))){
var inst_27787 = (state_27810[(7)]);
var inst_27793 = p.call(null,inst_27787);
var state_27810__$1 = state_27810;
if(cljs.core.truth_(inst_27793)){
var statearr_27818_27845 = state_27810__$1;
(statearr_27818_27845[(1)] = (9));

} else {
var statearr_27819_27846 = state_27810__$1;
(statearr_27819_27846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (3))){
var inst_27808 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27810__$1,inst_27808);
} else {
if((state_val_27811 === (12))){
var state_27810__$1 = state_27810;
var statearr_27820_27847 = state_27810__$1;
(statearr_27820_27847[(2)] = null);

(statearr_27820_27847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (2))){
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27810__$1,(4),ch);
} else {
if((state_val_27811 === (11))){
var inst_27787 = (state_27810[(7)]);
var inst_27797 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27810__$1,(8),inst_27797,inst_27787);
} else {
if((state_val_27811 === (9))){
var state_27810__$1 = state_27810;
var statearr_27821_27848 = state_27810__$1;
(statearr_27821_27848[(2)] = tc);

(statearr_27821_27848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (5))){
var inst_27790 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27791 = cljs.core.async.close_BANG_.call(null,fc);
var state_27810__$1 = (function (){var statearr_27822 = state_27810;
(statearr_27822[(8)] = inst_27790);

return statearr_27822;
})();
var statearr_27823_27849 = state_27810__$1;
(statearr_27823_27849[(2)] = inst_27791);

(statearr_27823_27849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (14))){
var inst_27804 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27824_27850 = state_27810__$1;
(statearr_27824_27850[(2)] = inst_27804);

(statearr_27824_27850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (10))){
var state_27810__$1 = state_27810;
var statearr_27825_27851 = state_27810__$1;
(statearr_27825_27851[(2)] = fc);

(statearr_27825_27851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (8))){
var inst_27799 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
if(cljs.core.truth_(inst_27799)){
var statearr_27826_27852 = state_27810__$1;
(statearr_27826_27852[(1)] = (12));

} else {
var statearr_27827_27853 = state_27810__$1;
(statearr_27827_27853[(1)] = (13));

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
});})(c__27153__auto___27839,tc,fc))
;
return ((function (switch__27041__auto__,c__27153__auto___27839,tc,fc){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_27831 = [null,null,null,null,null,null,null,null,null];
(statearr_27831[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_27831[(1)] = (1));

return statearr_27831;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_27810){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27832){if((e27832 instanceof Object)){
var ex__27045__auto__ = e27832;
var statearr_27833_27854 = state_27810;
(statearr_27833_27854[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27855 = state_27810;
state_27810 = G__27855;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_27810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_27810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___27839,tc,fc))
})();
var state__27155__auto__ = (function (){var statearr_27834 = f__27154__auto__.call(null);
(statearr_27834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___27839);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___27839,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__){
return (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27915 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27921_27942 = state_27919__$1;
(statearr_27921_27942[(2)] = inst_27915);

(statearr_27921_27942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var inst_27899 = init;
var state_27919__$1 = (function (){var statearr_27922 = state_27919;
(statearr_27922[(7)] = inst_27899);

return statearr_27922;
})();
var statearr_27923_27943 = state_27919__$1;
(statearr_27923_27943[(2)] = null);

(statearr_27923_27943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27902 = (state_27919[(8)]);
var inst_27902__$1 = (state_27919[(2)]);
var inst_27903 = (inst_27902__$1 == null);
var state_27919__$1 = (function (){var statearr_27924 = state_27919;
(statearr_27924[(8)] = inst_27902__$1);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27903)){
var statearr_27925_27944 = state_27919__$1;
(statearr_27925_27944[(1)] = (5));

} else {
var statearr_27926_27945 = state_27919__$1;
(statearr_27926_27945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (6))){
var inst_27899 = (state_27919[(7)]);
var inst_27906 = (state_27919[(9)]);
var inst_27902 = (state_27919[(8)]);
var inst_27906__$1 = f.call(null,inst_27899,inst_27902);
var inst_27907 = cljs.core.reduced_QMARK_.call(null,inst_27906__$1);
var state_27919__$1 = (function (){var statearr_27927 = state_27919;
(statearr_27927[(9)] = inst_27906__$1);

return statearr_27927;
})();
if(inst_27907){
var statearr_27928_27946 = state_27919__$1;
(statearr_27928_27946[(1)] = (8));

} else {
var statearr_27929_27947 = state_27919__$1;
(statearr_27929_27947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (3))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (2))){
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27919__$1,(4),ch);
} else {
if((state_val_27920 === (9))){
var inst_27906 = (state_27919[(9)]);
var inst_27899 = inst_27906;
var state_27919__$1 = (function (){var statearr_27930 = state_27919;
(statearr_27930[(7)] = inst_27899);

return statearr_27930;
})();
var statearr_27931_27948 = state_27919__$1;
(statearr_27931_27948[(2)] = null);

(statearr_27931_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (5))){
var inst_27899 = (state_27919[(7)]);
var state_27919__$1 = state_27919;
var statearr_27932_27949 = state_27919__$1;
(statearr_27932_27949[(2)] = inst_27899);

(statearr_27932_27949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27913 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27933_27950 = state_27919__$1;
(statearr_27933_27950[(2)] = inst_27913);

(statearr_27933_27950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27906 = (state_27919[(9)]);
var inst_27909 = cljs.core.deref.call(null,inst_27906);
var state_27919__$1 = state_27919;
var statearr_27934_27951 = state_27919__$1;
(statearr_27934_27951[(2)] = inst_27909);

(statearr_27934_27951[(1)] = (10));


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
});})(c__27153__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27042__auto____0 = (function (){
var statearr_27938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27938[(0)] = cljs$core$async$reduce_$_state_machine__27042__auto__);

(statearr_27938[(1)] = (1));

return statearr_27938;
});
var cljs$core$async$reduce_$_state_machine__27042__auto____1 = (function (state_27919){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e27939){if((e27939 instanceof Object)){
var ex__27045__auto__ = e27939;
var statearr_27940_27952 = state_27919;
(statearr_27940_27952[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27953 = state_27919;
state_27919 = G__27953;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27042__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27042__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27042__auto____0;
cljs$core$async$reduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27042__auto____1;
return cljs$core$async$reduce_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__))
})();
var state__27155__auto__ = (function (){var statearr_27941 = f__27154__auto__.call(null);
(statearr_27941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_27941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__))
);

return c__27153__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27954 = [];
var len__25983__auto___28006 = arguments.length;
var i__25984__auto___28007 = (0);
while(true){
if((i__25984__auto___28007 < len__25983__auto___28006)){
args27954.push((arguments[i__25984__auto___28007]));

var G__28008 = (i__25984__auto___28007 + (1));
i__25984__auto___28007 = G__28008;
continue;
} else {
}
break;
}

var G__27956 = args27954.length;
switch (G__27956) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27954.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__){
return (function (state_27981){
var state_val_27982 = (state_27981[(1)]);
if((state_val_27982 === (7))){
var inst_27963 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27983_28010 = state_27981__$1;
(statearr_27983_28010[(2)] = inst_27963);

(statearr_27983_28010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (1))){
var inst_27957 = cljs.core.seq.call(null,coll);
var inst_27958 = inst_27957;
var state_27981__$1 = (function (){var statearr_27984 = state_27981;
(statearr_27984[(7)] = inst_27958);

return statearr_27984;
})();
var statearr_27985_28011 = state_27981__$1;
(statearr_27985_28011[(2)] = null);

(statearr_27985_28011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (4))){
var inst_27958 = (state_27981[(7)]);
var inst_27961 = cljs.core.first.call(null,inst_27958);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27981__$1,(7),ch,inst_27961);
} else {
if((state_val_27982 === (13))){
var inst_27975 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27986_28012 = state_27981__$1;
(statearr_27986_28012[(2)] = inst_27975);

(statearr_27986_28012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (6))){
var inst_27966 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
if(cljs.core.truth_(inst_27966)){
var statearr_27987_28013 = state_27981__$1;
(statearr_27987_28013[(1)] = (8));

} else {
var statearr_27988_28014 = state_27981__$1;
(statearr_27988_28014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (3))){
var inst_27979 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else {
if((state_val_27982 === (12))){
var state_27981__$1 = state_27981;
var statearr_27989_28015 = state_27981__$1;
(statearr_27989_28015[(2)] = null);

(statearr_27989_28015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (2))){
var inst_27958 = (state_27981[(7)]);
var state_27981__$1 = state_27981;
if(cljs.core.truth_(inst_27958)){
var statearr_27990_28016 = state_27981__$1;
(statearr_27990_28016[(1)] = (4));

} else {
var statearr_27991_28017 = state_27981__$1;
(statearr_27991_28017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (11))){
var inst_27972 = cljs.core.async.close_BANG_.call(null,ch);
var state_27981__$1 = state_27981;
var statearr_27992_28018 = state_27981__$1;
(statearr_27992_28018[(2)] = inst_27972);

(statearr_27992_28018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (9))){
var state_27981__$1 = state_27981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27993_28019 = state_27981__$1;
(statearr_27993_28019[(1)] = (11));

} else {
var statearr_27994_28020 = state_27981__$1;
(statearr_27994_28020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (5))){
var inst_27958 = (state_27981[(7)]);
var state_27981__$1 = state_27981;
var statearr_27995_28021 = state_27981__$1;
(statearr_27995_28021[(2)] = inst_27958);

(statearr_27995_28021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (10))){
var inst_27977 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27996_28022 = state_27981__$1;
(statearr_27996_28022[(2)] = inst_27977);

(statearr_27996_28022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (8))){
var inst_27958 = (state_27981[(7)]);
var inst_27968 = cljs.core.next.call(null,inst_27958);
var inst_27958__$1 = inst_27968;
var state_27981__$1 = (function (){var statearr_27997 = state_27981;
(statearr_27997[(7)] = inst_27958__$1);

return statearr_27997;
})();
var statearr_27998_28023 = state_27981__$1;
(statearr_27998_28023[(2)] = null);

(statearr_27998_28023[(1)] = (2));


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
});})(c__27153__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_28002 = [null,null,null,null,null,null,null,null];
(statearr_28002[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_28002[(1)] = (1));

return statearr_28002;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_27981){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_27981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object)){
var ex__27045__auto__ = e28003;
var statearr_28004_28024 = state_27981;
(statearr_28004_28024[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28025 = state_27981;
state_27981 = G__28025;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__))
})();
var state__27155__auto__ = (function (){var statearr_28005 = f__27154__auto__.call(null);
(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_28005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__))
);

return c__27153__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25538__auto__ = (((_ == null))?null:_);
var m__25539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,_);
} else {
var m__25539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28251 = (function (ch,cs,meta28252){
this.ch = ch;
this.cs = cs;
this.meta28252 = meta28252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28253,meta28252__$1){
var self__ = this;
var _28253__$1 = this;
return (new cljs.core.async.t_cljs$core$async28251(self__.ch,self__.cs,meta28252__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28253){
var self__ = this;
var _28253__$1 = this;
return self__.meta28252;
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28252","meta28252",141605075,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28251";

cljs.core.async.t_cljs$core$async28251.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28251");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28251 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28251(ch__$1,cs__$1,meta28252){
return (new cljs.core.async.t_cljs$core$async28251(ch__$1,cs__$1,meta28252));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28251(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27153__auto___28476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___28476,cs,m,dchan,dctr,done){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___28476,cs,m,dchan,dctr,done){
return (function (state_28388){
var state_val_28389 = (state_28388[(1)]);
if((state_val_28389 === (7))){
var inst_28384 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28390_28477 = state_28388__$1;
(statearr_28390_28477[(2)] = inst_28384);

(statearr_28390_28477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (20))){
var inst_28287 = (state_28388[(7)]);
var inst_28299 = cljs.core.first.call(null,inst_28287);
var inst_28300 = cljs.core.nth.call(null,inst_28299,(0),null);
var inst_28301 = cljs.core.nth.call(null,inst_28299,(1),null);
var state_28388__$1 = (function (){var statearr_28391 = state_28388;
(statearr_28391[(8)] = inst_28300);

return statearr_28391;
})();
if(cljs.core.truth_(inst_28301)){
var statearr_28392_28478 = state_28388__$1;
(statearr_28392_28478[(1)] = (22));

} else {
var statearr_28393_28479 = state_28388__$1;
(statearr_28393_28479[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (27))){
var inst_28331 = (state_28388[(9)]);
var inst_28329 = (state_28388[(10)]);
var inst_28256 = (state_28388[(11)]);
var inst_28336 = (state_28388[(12)]);
var inst_28336__$1 = cljs.core._nth.call(null,inst_28329,inst_28331);
var inst_28337 = cljs.core.async.put_BANG_.call(null,inst_28336__$1,inst_28256,done);
var state_28388__$1 = (function (){var statearr_28394 = state_28388;
(statearr_28394[(12)] = inst_28336__$1);

return statearr_28394;
})();
if(cljs.core.truth_(inst_28337)){
var statearr_28395_28480 = state_28388__$1;
(statearr_28395_28480[(1)] = (30));

} else {
var statearr_28396_28481 = state_28388__$1;
(statearr_28396_28481[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (1))){
var state_28388__$1 = state_28388;
var statearr_28397_28482 = state_28388__$1;
(statearr_28397_28482[(2)] = null);

(statearr_28397_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (24))){
var inst_28287 = (state_28388[(7)]);
var inst_28306 = (state_28388[(2)]);
var inst_28307 = cljs.core.next.call(null,inst_28287);
var inst_28265 = inst_28307;
var inst_28266 = null;
var inst_28267 = (0);
var inst_28268 = (0);
var state_28388__$1 = (function (){var statearr_28398 = state_28388;
(statearr_28398[(13)] = inst_28268);

(statearr_28398[(14)] = inst_28267);

(statearr_28398[(15)] = inst_28265);

(statearr_28398[(16)] = inst_28306);

(statearr_28398[(17)] = inst_28266);

return statearr_28398;
})();
var statearr_28399_28483 = state_28388__$1;
(statearr_28399_28483[(2)] = null);

(statearr_28399_28483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (39))){
var state_28388__$1 = state_28388;
var statearr_28403_28484 = state_28388__$1;
(statearr_28403_28484[(2)] = null);

(statearr_28403_28484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (4))){
var inst_28256 = (state_28388[(11)]);
var inst_28256__$1 = (state_28388[(2)]);
var inst_28257 = (inst_28256__$1 == null);
var state_28388__$1 = (function (){var statearr_28404 = state_28388;
(statearr_28404[(11)] = inst_28256__$1);

return statearr_28404;
})();
if(cljs.core.truth_(inst_28257)){
var statearr_28405_28485 = state_28388__$1;
(statearr_28405_28485[(1)] = (5));

} else {
var statearr_28406_28486 = state_28388__$1;
(statearr_28406_28486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (15))){
var inst_28268 = (state_28388[(13)]);
var inst_28267 = (state_28388[(14)]);
var inst_28265 = (state_28388[(15)]);
var inst_28266 = (state_28388[(17)]);
var inst_28283 = (state_28388[(2)]);
var inst_28284 = (inst_28268 + (1));
var tmp28400 = inst_28267;
var tmp28401 = inst_28265;
var tmp28402 = inst_28266;
var inst_28265__$1 = tmp28401;
var inst_28266__$1 = tmp28402;
var inst_28267__$1 = tmp28400;
var inst_28268__$1 = inst_28284;
var state_28388__$1 = (function (){var statearr_28407 = state_28388;
(statearr_28407[(13)] = inst_28268__$1);

(statearr_28407[(14)] = inst_28267__$1);

(statearr_28407[(15)] = inst_28265__$1);

(statearr_28407[(18)] = inst_28283);

(statearr_28407[(17)] = inst_28266__$1);

return statearr_28407;
})();
var statearr_28408_28487 = state_28388__$1;
(statearr_28408_28487[(2)] = null);

(statearr_28408_28487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (21))){
var inst_28310 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28412_28488 = state_28388__$1;
(statearr_28412_28488[(2)] = inst_28310);

(statearr_28412_28488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (31))){
var inst_28336 = (state_28388[(12)]);
var inst_28340 = done.call(null,null);
var inst_28341 = cljs.core.async.untap_STAR_.call(null,m,inst_28336);
var state_28388__$1 = (function (){var statearr_28413 = state_28388;
(statearr_28413[(19)] = inst_28340);

return statearr_28413;
})();
var statearr_28414_28489 = state_28388__$1;
(statearr_28414_28489[(2)] = inst_28341);

(statearr_28414_28489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (32))){
var inst_28331 = (state_28388[(9)]);
var inst_28329 = (state_28388[(10)]);
var inst_28330 = (state_28388[(20)]);
var inst_28328 = (state_28388[(21)]);
var inst_28343 = (state_28388[(2)]);
var inst_28344 = (inst_28331 + (1));
var tmp28409 = inst_28329;
var tmp28410 = inst_28330;
var tmp28411 = inst_28328;
var inst_28328__$1 = tmp28411;
var inst_28329__$1 = tmp28409;
var inst_28330__$1 = tmp28410;
var inst_28331__$1 = inst_28344;
var state_28388__$1 = (function (){var statearr_28415 = state_28388;
(statearr_28415[(9)] = inst_28331__$1);

(statearr_28415[(10)] = inst_28329__$1);

(statearr_28415[(20)] = inst_28330__$1);

(statearr_28415[(21)] = inst_28328__$1);

(statearr_28415[(22)] = inst_28343);

return statearr_28415;
})();
var statearr_28416_28490 = state_28388__$1;
(statearr_28416_28490[(2)] = null);

(statearr_28416_28490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (40))){
var inst_28356 = (state_28388[(23)]);
var inst_28360 = done.call(null,null);
var inst_28361 = cljs.core.async.untap_STAR_.call(null,m,inst_28356);
var state_28388__$1 = (function (){var statearr_28417 = state_28388;
(statearr_28417[(24)] = inst_28360);

return statearr_28417;
})();
var statearr_28418_28491 = state_28388__$1;
(statearr_28418_28491[(2)] = inst_28361);

(statearr_28418_28491[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (33))){
var inst_28347 = (state_28388[(25)]);
var inst_28349 = cljs.core.chunked_seq_QMARK_.call(null,inst_28347);
var state_28388__$1 = state_28388;
if(inst_28349){
var statearr_28419_28492 = state_28388__$1;
(statearr_28419_28492[(1)] = (36));

} else {
var statearr_28420_28493 = state_28388__$1;
(statearr_28420_28493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (13))){
var inst_28277 = (state_28388[(26)]);
var inst_28280 = cljs.core.async.close_BANG_.call(null,inst_28277);
var state_28388__$1 = state_28388;
var statearr_28421_28494 = state_28388__$1;
(statearr_28421_28494[(2)] = inst_28280);

(statearr_28421_28494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (22))){
var inst_28300 = (state_28388[(8)]);
var inst_28303 = cljs.core.async.close_BANG_.call(null,inst_28300);
var state_28388__$1 = state_28388;
var statearr_28422_28495 = state_28388__$1;
(statearr_28422_28495[(2)] = inst_28303);

(statearr_28422_28495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (36))){
var inst_28347 = (state_28388[(25)]);
var inst_28351 = cljs.core.chunk_first.call(null,inst_28347);
var inst_28352 = cljs.core.chunk_rest.call(null,inst_28347);
var inst_28353 = cljs.core.count.call(null,inst_28351);
var inst_28328 = inst_28352;
var inst_28329 = inst_28351;
var inst_28330 = inst_28353;
var inst_28331 = (0);
var state_28388__$1 = (function (){var statearr_28423 = state_28388;
(statearr_28423[(9)] = inst_28331);

(statearr_28423[(10)] = inst_28329);

(statearr_28423[(20)] = inst_28330);

(statearr_28423[(21)] = inst_28328);

return statearr_28423;
})();
var statearr_28424_28496 = state_28388__$1;
(statearr_28424_28496[(2)] = null);

(statearr_28424_28496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (41))){
var inst_28347 = (state_28388[(25)]);
var inst_28363 = (state_28388[(2)]);
var inst_28364 = cljs.core.next.call(null,inst_28347);
var inst_28328 = inst_28364;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28388__$1 = (function (){var statearr_28425 = state_28388;
(statearr_28425[(9)] = inst_28331);

(statearr_28425[(10)] = inst_28329);

(statearr_28425[(27)] = inst_28363);

(statearr_28425[(20)] = inst_28330);

(statearr_28425[(21)] = inst_28328);

return statearr_28425;
})();
var statearr_28426_28497 = state_28388__$1;
(statearr_28426_28497[(2)] = null);

(statearr_28426_28497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (43))){
var state_28388__$1 = state_28388;
var statearr_28427_28498 = state_28388__$1;
(statearr_28427_28498[(2)] = null);

(statearr_28427_28498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (29))){
var inst_28372 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28428_28499 = state_28388__$1;
(statearr_28428_28499[(2)] = inst_28372);

(statearr_28428_28499[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (44))){
var inst_28381 = (state_28388[(2)]);
var state_28388__$1 = (function (){var statearr_28429 = state_28388;
(statearr_28429[(28)] = inst_28381);

return statearr_28429;
})();
var statearr_28430_28500 = state_28388__$1;
(statearr_28430_28500[(2)] = null);

(statearr_28430_28500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (6))){
var inst_28320 = (state_28388[(29)]);
var inst_28319 = cljs.core.deref.call(null,cs);
var inst_28320__$1 = cljs.core.keys.call(null,inst_28319);
var inst_28321 = cljs.core.count.call(null,inst_28320__$1);
var inst_28322 = cljs.core.reset_BANG_.call(null,dctr,inst_28321);
var inst_28327 = cljs.core.seq.call(null,inst_28320__$1);
var inst_28328 = inst_28327;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28388__$1 = (function (){var statearr_28431 = state_28388;
(statearr_28431[(9)] = inst_28331);

(statearr_28431[(10)] = inst_28329);

(statearr_28431[(30)] = inst_28322);

(statearr_28431[(29)] = inst_28320__$1);

(statearr_28431[(20)] = inst_28330);

(statearr_28431[(21)] = inst_28328);

return statearr_28431;
})();
var statearr_28432_28501 = state_28388__$1;
(statearr_28432_28501[(2)] = null);

(statearr_28432_28501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (28))){
var inst_28347 = (state_28388[(25)]);
var inst_28328 = (state_28388[(21)]);
var inst_28347__$1 = cljs.core.seq.call(null,inst_28328);
var state_28388__$1 = (function (){var statearr_28433 = state_28388;
(statearr_28433[(25)] = inst_28347__$1);

return statearr_28433;
})();
if(inst_28347__$1){
var statearr_28434_28502 = state_28388__$1;
(statearr_28434_28502[(1)] = (33));

} else {
var statearr_28435_28503 = state_28388__$1;
(statearr_28435_28503[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (25))){
var inst_28331 = (state_28388[(9)]);
var inst_28330 = (state_28388[(20)]);
var inst_28333 = (inst_28331 < inst_28330);
var inst_28334 = inst_28333;
var state_28388__$1 = state_28388;
if(cljs.core.truth_(inst_28334)){
var statearr_28436_28504 = state_28388__$1;
(statearr_28436_28504[(1)] = (27));

} else {
var statearr_28437_28505 = state_28388__$1;
(statearr_28437_28505[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (34))){
var state_28388__$1 = state_28388;
var statearr_28438_28506 = state_28388__$1;
(statearr_28438_28506[(2)] = null);

(statearr_28438_28506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (17))){
var state_28388__$1 = state_28388;
var statearr_28439_28507 = state_28388__$1;
(statearr_28439_28507[(2)] = null);

(statearr_28439_28507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (3))){
var inst_28386 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28388__$1,inst_28386);
} else {
if((state_val_28389 === (12))){
var inst_28315 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28440_28508 = state_28388__$1;
(statearr_28440_28508[(2)] = inst_28315);

(statearr_28440_28508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (2))){
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28388__$1,(4),ch);
} else {
if((state_val_28389 === (23))){
var state_28388__$1 = state_28388;
var statearr_28441_28509 = state_28388__$1;
(statearr_28441_28509[(2)] = null);

(statearr_28441_28509[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (35))){
var inst_28370 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28442_28510 = state_28388__$1;
(statearr_28442_28510[(2)] = inst_28370);

(statearr_28442_28510[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (19))){
var inst_28287 = (state_28388[(7)]);
var inst_28291 = cljs.core.chunk_first.call(null,inst_28287);
var inst_28292 = cljs.core.chunk_rest.call(null,inst_28287);
var inst_28293 = cljs.core.count.call(null,inst_28291);
var inst_28265 = inst_28292;
var inst_28266 = inst_28291;
var inst_28267 = inst_28293;
var inst_28268 = (0);
var state_28388__$1 = (function (){var statearr_28443 = state_28388;
(statearr_28443[(13)] = inst_28268);

(statearr_28443[(14)] = inst_28267);

(statearr_28443[(15)] = inst_28265);

(statearr_28443[(17)] = inst_28266);

return statearr_28443;
})();
var statearr_28444_28511 = state_28388__$1;
(statearr_28444_28511[(2)] = null);

(statearr_28444_28511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (11))){
var inst_28287 = (state_28388[(7)]);
var inst_28265 = (state_28388[(15)]);
var inst_28287__$1 = cljs.core.seq.call(null,inst_28265);
var state_28388__$1 = (function (){var statearr_28445 = state_28388;
(statearr_28445[(7)] = inst_28287__$1);

return statearr_28445;
})();
if(inst_28287__$1){
var statearr_28446_28512 = state_28388__$1;
(statearr_28446_28512[(1)] = (16));

} else {
var statearr_28447_28513 = state_28388__$1;
(statearr_28447_28513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (9))){
var inst_28317 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28448_28514 = state_28388__$1;
(statearr_28448_28514[(2)] = inst_28317);

(statearr_28448_28514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (5))){
var inst_28263 = cljs.core.deref.call(null,cs);
var inst_28264 = cljs.core.seq.call(null,inst_28263);
var inst_28265 = inst_28264;
var inst_28266 = null;
var inst_28267 = (0);
var inst_28268 = (0);
var state_28388__$1 = (function (){var statearr_28449 = state_28388;
(statearr_28449[(13)] = inst_28268);

(statearr_28449[(14)] = inst_28267);

(statearr_28449[(15)] = inst_28265);

(statearr_28449[(17)] = inst_28266);

return statearr_28449;
})();
var statearr_28450_28515 = state_28388__$1;
(statearr_28450_28515[(2)] = null);

(statearr_28450_28515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (14))){
var state_28388__$1 = state_28388;
var statearr_28451_28516 = state_28388__$1;
(statearr_28451_28516[(2)] = null);

(statearr_28451_28516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (45))){
var inst_28378 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28452_28517 = state_28388__$1;
(statearr_28452_28517[(2)] = inst_28378);

(statearr_28452_28517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (26))){
var inst_28320 = (state_28388[(29)]);
var inst_28374 = (state_28388[(2)]);
var inst_28375 = cljs.core.seq.call(null,inst_28320);
var state_28388__$1 = (function (){var statearr_28453 = state_28388;
(statearr_28453[(31)] = inst_28374);

return statearr_28453;
})();
if(inst_28375){
var statearr_28454_28518 = state_28388__$1;
(statearr_28454_28518[(1)] = (42));

} else {
var statearr_28455_28519 = state_28388__$1;
(statearr_28455_28519[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (16))){
var inst_28287 = (state_28388[(7)]);
var inst_28289 = cljs.core.chunked_seq_QMARK_.call(null,inst_28287);
var state_28388__$1 = state_28388;
if(inst_28289){
var statearr_28456_28520 = state_28388__$1;
(statearr_28456_28520[(1)] = (19));

} else {
var statearr_28457_28521 = state_28388__$1;
(statearr_28457_28521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (38))){
var inst_28367 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28458_28522 = state_28388__$1;
(statearr_28458_28522[(2)] = inst_28367);

(statearr_28458_28522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (30))){
var state_28388__$1 = state_28388;
var statearr_28459_28523 = state_28388__$1;
(statearr_28459_28523[(2)] = null);

(statearr_28459_28523[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (10))){
var inst_28268 = (state_28388[(13)]);
var inst_28266 = (state_28388[(17)]);
var inst_28276 = cljs.core._nth.call(null,inst_28266,inst_28268);
var inst_28277 = cljs.core.nth.call(null,inst_28276,(0),null);
var inst_28278 = cljs.core.nth.call(null,inst_28276,(1),null);
var state_28388__$1 = (function (){var statearr_28460 = state_28388;
(statearr_28460[(26)] = inst_28277);

return statearr_28460;
})();
if(cljs.core.truth_(inst_28278)){
var statearr_28461_28524 = state_28388__$1;
(statearr_28461_28524[(1)] = (13));

} else {
var statearr_28462_28525 = state_28388__$1;
(statearr_28462_28525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (18))){
var inst_28313 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28463_28526 = state_28388__$1;
(statearr_28463_28526[(2)] = inst_28313);

(statearr_28463_28526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (42))){
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28388__$1,(45),dchan);
} else {
if((state_val_28389 === (37))){
var inst_28356 = (state_28388[(23)]);
var inst_28256 = (state_28388[(11)]);
var inst_28347 = (state_28388[(25)]);
var inst_28356__$1 = cljs.core.first.call(null,inst_28347);
var inst_28357 = cljs.core.async.put_BANG_.call(null,inst_28356__$1,inst_28256,done);
var state_28388__$1 = (function (){var statearr_28464 = state_28388;
(statearr_28464[(23)] = inst_28356__$1);

return statearr_28464;
})();
if(cljs.core.truth_(inst_28357)){
var statearr_28465_28527 = state_28388__$1;
(statearr_28465_28527[(1)] = (39));

} else {
var statearr_28466_28528 = state_28388__$1;
(statearr_28466_28528[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (8))){
var inst_28268 = (state_28388[(13)]);
var inst_28267 = (state_28388[(14)]);
var inst_28270 = (inst_28268 < inst_28267);
var inst_28271 = inst_28270;
var state_28388__$1 = state_28388;
if(cljs.core.truth_(inst_28271)){
var statearr_28467_28529 = state_28388__$1;
(statearr_28467_28529[(1)] = (10));

} else {
var statearr_28468_28530 = state_28388__$1;
(statearr_28468_28530[(1)] = (11));

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
});})(c__27153__auto___28476,cs,m,dchan,dctr,done))
;
return ((function (switch__27041__auto__,c__27153__auto___28476,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27042__auto__ = null;
var cljs$core$async$mult_$_state_machine__27042__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$mult_$_state_machine__27042__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$mult_$_state_machine__27042__auto____1 = (function (state_28388){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_28388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__27045__auto__ = e28473;
var statearr_28474_28531 = state_28388;
(statearr_28474_28531[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28388;
state_28388 = G__28532;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27042__auto__ = function(state_28388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27042__auto____1.call(this,state_28388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27042__auto____0;
cljs$core$async$mult_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27042__auto____1;
return cljs$core$async$mult_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___28476,cs,m,dchan,dctr,done))
})();
var state__27155__auto__ = (function (){var statearr_28475 = f__27154__auto__.call(null);
(statearr_28475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___28476);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___28476,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28533 = [];
var len__25983__auto___28536 = arguments.length;
var i__25984__auto___28537 = (0);
while(true){
if((i__25984__auto___28537 < len__25983__auto___28536)){
args28533.push((arguments[i__25984__auto___28537]));

var G__28538 = (i__25984__auto___28537 + (1));
i__25984__auto___28537 = G__28538;
continue;
} else {
}
break;
}

var G__28535 = args28533.length;
switch (G__28535) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28533.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,state_map);
} else {
var m__25539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,mode);
} else {
var m__25539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___28550 = arguments.length;
var i__25984__auto___28551 = (0);
while(true){
if((i__25984__auto___28551 < len__25983__auto___28550)){
args__25990__auto__.push((arguments[i__25984__auto___28551]));

var G__28552 = (i__25984__auto___28551 + (1));
i__25984__auto___28551 = G__28552;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((3) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25991__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28544){
var map__28545 = p__28544;
var map__28545__$1 = ((((!((map__28545 == null)))?((((map__28545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545):map__28545);
var opts = map__28545__$1;
var statearr_28547_28553 = state;
(statearr_28547_28553[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28545,map__28545__$1,opts){
return (function (val){
var statearr_28548_28554 = state;
(statearr_28548_28554[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28545,map__28545__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28549_28555 = state;
(statearr_28549_28555[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28540){
var G__28541 = cljs.core.first.call(null,seq28540);
var seq28540__$1 = cljs.core.next.call(null,seq28540);
var G__28542 = cljs.core.first.call(null,seq28540__$1);
var seq28540__$2 = cljs.core.next.call(null,seq28540__$1);
var G__28543 = cljs.core.first.call(null,seq28540__$2);
var seq28540__$3 = cljs.core.next.call(null,seq28540__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28541,G__28542,G__28543,seq28540__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28723 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28724){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28724 = meta28724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28725,meta28724__$1){
var self__ = this;
var _28725__$1 = this;
return (new cljs.core.async.t_cljs$core$async28723(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28724__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28725){
var self__ = this;
var _28725__$1 = this;
return self__.meta28724;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28724","meta28724",-1721505362,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28723";

cljs.core.async.t_cljs$core$async28723.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28723");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28723 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28723(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28724){
return (new cljs.core.async.t_cljs$core$async28723(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28724));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28723(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27153__auto___28890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28827){
var state_val_28828 = (state_28827[(1)]);
if((state_val_28828 === (7))){
var inst_28742 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28829_28891 = state_28827__$1;
(statearr_28829_28891[(2)] = inst_28742);

(statearr_28829_28891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (20))){
var inst_28754 = (state_28827[(7)]);
var state_28827__$1 = state_28827;
var statearr_28830_28892 = state_28827__$1;
(statearr_28830_28892[(2)] = inst_28754);

(statearr_28830_28892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (27))){
var state_28827__$1 = state_28827;
var statearr_28831_28893 = state_28827__$1;
(statearr_28831_28893[(2)] = null);

(statearr_28831_28893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (1))){
var inst_28729 = (state_28827[(8)]);
var inst_28729__$1 = calc_state.call(null);
var inst_28731 = (inst_28729__$1 == null);
var inst_28732 = cljs.core.not.call(null,inst_28731);
var state_28827__$1 = (function (){var statearr_28832 = state_28827;
(statearr_28832[(8)] = inst_28729__$1);

return statearr_28832;
})();
if(inst_28732){
var statearr_28833_28894 = state_28827__$1;
(statearr_28833_28894[(1)] = (2));

} else {
var statearr_28834_28895 = state_28827__$1;
(statearr_28834_28895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (24))){
var inst_28787 = (state_28827[(9)]);
var inst_28801 = (state_28827[(10)]);
var inst_28778 = (state_28827[(11)]);
var inst_28801__$1 = inst_28778.call(null,inst_28787);
var state_28827__$1 = (function (){var statearr_28835 = state_28827;
(statearr_28835[(10)] = inst_28801__$1);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28801__$1)){
var statearr_28836_28896 = state_28827__$1;
(statearr_28836_28896[(1)] = (29));

} else {
var statearr_28837_28897 = state_28827__$1;
(statearr_28837_28897[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (4))){
var inst_28745 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28745)){
var statearr_28838_28898 = state_28827__$1;
(statearr_28838_28898[(1)] = (8));

} else {
var statearr_28839_28899 = state_28827__$1;
(statearr_28839_28899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (15))){
var inst_28772 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28772)){
var statearr_28840_28900 = state_28827__$1;
(statearr_28840_28900[(1)] = (19));

} else {
var statearr_28841_28901 = state_28827__$1;
(statearr_28841_28901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (21))){
var inst_28777 = (state_28827[(12)]);
var inst_28777__$1 = (state_28827[(2)]);
var inst_28778 = cljs.core.get.call(null,inst_28777__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28779 = cljs.core.get.call(null,inst_28777__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28780 = cljs.core.get.call(null,inst_28777__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28827__$1 = (function (){var statearr_28842 = state_28827;
(statearr_28842[(12)] = inst_28777__$1);

(statearr_28842[(13)] = inst_28779);

(statearr_28842[(11)] = inst_28778);

return statearr_28842;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28827__$1,(22),inst_28780);
} else {
if((state_val_28828 === (31))){
var inst_28809 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28809)){
var statearr_28843_28902 = state_28827__$1;
(statearr_28843_28902[(1)] = (32));

} else {
var statearr_28844_28903 = state_28827__$1;
(statearr_28844_28903[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (32))){
var inst_28786 = (state_28827[(14)]);
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28827__$1,(35),out,inst_28786);
} else {
if((state_val_28828 === (33))){
var inst_28777 = (state_28827[(12)]);
var inst_28754 = inst_28777;
var state_28827__$1 = (function (){var statearr_28845 = state_28827;
(statearr_28845[(7)] = inst_28754);

return statearr_28845;
})();
var statearr_28846_28904 = state_28827__$1;
(statearr_28846_28904[(2)] = null);

(statearr_28846_28904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (13))){
var inst_28754 = (state_28827[(7)]);
var inst_28761 = inst_28754.cljs$lang$protocol_mask$partition0$;
var inst_28762 = (inst_28761 & (64));
var inst_28763 = inst_28754.cljs$core$ISeq$;
var inst_28764 = (cljs.core.PROTOCOL_SENTINEL === inst_28763);
var inst_28765 = (inst_28762) || (inst_28764);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28765)){
var statearr_28847_28905 = state_28827__$1;
(statearr_28847_28905[(1)] = (16));

} else {
var statearr_28848_28906 = state_28827__$1;
(statearr_28848_28906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (22))){
var inst_28787 = (state_28827[(9)]);
var inst_28786 = (state_28827[(14)]);
var inst_28785 = (state_28827[(2)]);
var inst_28786__$1 = cljs.core.nth.call(null,inst_28785,(0),null);
var inst_28787__$1 = cljs.core.nth.call(null,inst_28785,(1),null);
var inst_28788 = (inst_28786__$1 == null);
var inst_28789 = cljs.core._EQ_.call(null,inst_28787__$1,change);
var inst_28790 = (inst_28788) || (inst_28789);
var state_28827__$1 = (function (){var statearr_28849 = state_28827;
(statearr_28849[(9)] = inst_28787__$1);

(statearr_28849[(14)] = inst_28786__$1);

return statearr_28849;
})();
if(cljs.core.truth_(inst_28790)){
var statearr_28850_28907 = state_28827__$1;
(statearr_28850_28907[(1)] = (23));

} else {
var statearr_28851_28908 = state_28827__$1;
(statearr_28851_28908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (36))){
var inst_28777 = (state_28827[(12)]);
var inst_28754 = inst_28777;
var state_28827__$1 = (function (){var statearr_28852 = state_28827;
(statearr_28852[(7)] = inst_28754);

return statearr_28852;
})();
var statearr_28853_28909 = state_28827__$1;
(statearr_28853_28909[(2)] = null);

(statearr_28853_28909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (29))){
var inst_28801 = (state_28827[(10)]);
var state_28827__$1 = state_28827;
var statearr_28854_28910 = state_28827__$1;
(statearr_28854_28910[(2)] = inst_28801);

(statearr_28854_28910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (6))){
var state_28827__$1 = state_28827;
var statearr_28855_28911 = state_28827__$1;
(statearr_28855_28911[(2)] = false);

(statearr_28855_28911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (28))){
var inst_28797 = (state_28827[(2)]);
var inst_28798 = calc_state.call(null);
var inst_28754 = inst_28798;
var state_28827__$1 = (function (){var statearr_28856 = state_28827;
(statearr_28856[(7)] = inst_28754);

(statearr_28856[(15)] = inst_28797);

return statearr_28856;
})();
var statearr_28857_28912 = state_28827__$1;
(statearr_28857_28912[(2)] = null);

(statearr_28857_28912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (25))){
var inst_28823 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28858_28913 = state_28827__$1;
(statearr_28858_28913[(2)] = inst_28823);

(statearr_28858_28913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (34))){
var inst_28821 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28859_28914 = state_28827__$1;
(statearr_28859_28914[(2)] = inst_28821);

(statearr_28859_28914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (17))){
var state_28827__$1 = state_28827;
var statearr_28860_28915 = state_28827__$1;
(statearr_28860_28915[(2)] = false);

(statearr_28860_28915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (3))){
var state_28827__$1 = state_28827;
var statearr_28861_28916 = state_28827__$1;
(statearr_28861_28916[(2)] = false);

(statearr_28861_28916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (12))){
var inst_28825 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28827__$1,inst_28825);
} else {
if((state_val_28828 === (2))){
var inst_28729 = (state_28827[(8)]);
var inst_28734 = inst_28729.cljs$lang$protocol_mask$partition0$;
var inst_28735 = (inst_28734 & (64));
var inst_28736 = inst_28729.cljs$core$ISeq$;
var inst_28737 = (cljs.core.PROTOCOL_SENTINEL === inst_28736);
var inst_28738 = (inst_28735) || (inst_28737);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28738)){
var statearr_28862_28917 = state_28827__$1;
(statearr_28862_28917[(1)] = (5));

} else {
var statearr_28863_28918 = state_28827__$1;
(statearr_28863_28918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (23))){
var inst_28786 = (state_28827[(14)]);
var inst_28792 = (inst_28786 == null);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28792)){
var statearr_28864_28919 = state_28827__$1;
(statearr_28864_28919[(1)] = (26));

} else {
var statearr_28865_28920 = state_28827__$1;
(statearr_28865_28920[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (35))){
var inst_28812 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28812)){
var statearr_28866_28921 = state_28827__$1;
(statearr_28866_28921[(1)] = (36));

} else {
var statearr_28867_28922 = state_28827__$1;
(statearr_28867_28922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (19))){
var inst_28754 = (state_28827[(7)]);
var inst_28774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28754);
var state_28827__$1 = state_28827;
var statearr_28868_28923 = state_28827__$1;
(statearr_28868_28923[(2)] = inst_28774);

(statearr_28868_28923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (11))){
var inst_28754 = (state_28827[(7)]);
var inst_28758 = (inst_28754 == null);
var inst_28759 = cljs.core.not.call(null,inst_28758);
var state_28827__$1 = state_28827;
if(inst_28759){
var statearr_28869_28924 = state_28827__$1;
(statearr_28869_28924[(1)] = (13));

} else {
var statearr_28870_28925 = state_28827__$1;
(statearr_28870_28925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (9))){
var inst_28729 = (state_28827[(8)]);
var state_28827__$1 = state_28827;
var statearr_28871_28926 = state_28827__$1;
(statearr_28871_28926[(2)] = inst_28729);

(statearr_28871_28926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (5))){
var state_28827__$1 = state_28827;
var statearr_28872_28927 = state_28827__$1;
(statearr_28872_28927[(2)] = true);

(statearr_28872_28927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (14))){
var state_28827__$1 = state_28827;
var statearr_28873_28928 = state_28827__$1;
(statearr_28873_28928[(2)] = false);

(statearr_28873_28928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (26))){
var inst_28787 = (state_28827[(9)]);
var inst_28794 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28787);
var state_28827__$1 = state_28827;
var statearr_28874_28929 = state_28827__$1;
(statearr_28874_28929[(2)] = inst_28794);

(statearr_28874_28929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (16))){
var state_28827__$1 = state_28827;
var statearr_28875_28930 = state_28827__$1;
(statearr_28875_28930[(2)] = true);

(statearr_28875_28930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (38))){
var inst_28817 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28876_28931 = state_28827__$1;
(statearr_28876_28931[(2)] = inst_28817);

(statearr_28876_28931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (30))){
var inst_28787 = (state_28827[(9)]);
var inst_28779 = (state_28827[(13)]);
var inst_28778 = (state_28827[(11)]);
var inst_28804 = cljs.core.empty_QMARK_.call(null,inst_28778);
var inst_28805 = inst_28779.call(null,inst_28787);
var inst_28806 = cljs.core.not.call(null,inst_28805);
var inst_28807 = (inst_28804) && (inst_28806);
var state_28827__$1 = state_28827;
var statearr_28877_28932 = state_28827__$1;
(statearr_28877_28932[(2)] = inst_28807);

(statearr_28877_28932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (10))){
var inst_28729 = (state_28827[(8)]);
var inst_28750 = (state_28827[(2)]);
var inst_28751 = cljs.core.get.call(null,inst_28750,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28752 = cljs.core.get.call(null,inst_28750,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28753 = cljs.core.get.call(null,inst_28750,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28754 = inst_28729;
var state_28827__$1 = (function (){var statearr_28878 = state_28827;
(statearr_28878[(7)] = inst_28754);

(statearr_28878[(16)] = inst_28751);

(statearr_28878[(17)] = inst_28753);

(statearr_28878[(18)] = inst_28752);

return statearr_28878;
})();
var statearr_28879_28933 = state_28827__$1;
(statearr_28879_28933[(2)] = null);

(statearr_28879_28933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (18))){
var inst_28769 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28880_28934 = state_28827__$1;
(statearr_28880_28934[(2)] = inst_28769);

(statearr_28880_28934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (37))){
var state_28827__$1 = state_28827;
var statearr_28881_28935 = state_28827__$1;
(statearr_28881_28935[(2)] = null);

(statearr_28881_28935[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (8))){
var inst_28729 = (state_28827[(8)]);
var inst_28747 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28729);
var state_28827__$1 = state_28827;
var statearr_28882_28936 = state_28827__$1;
(statearr_28882_28936[(2)] = inst_28747);

(statearr_28882_28936[(1)] = (10));


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
});})(c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27041__auto__,c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27042__auto__ = null;
var cljs$core$async$mix_$_state_machine__27042__auto____0 = (function (){
var statearr_28886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28886[(0)] = cljs$core$async$mix_$_state_machine__27042__auto__);

(statearr_28886[(1)] = (1));

return statearr_28886;
});
var cljs$core$async$mix_$_state_machine__27042__auto____1 = (function (state_28827){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_28827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e28887){if((e28887 instanceof Object)){
var ex__27045__auto__ = e28887;
var statearr_28888_28937 = state_28827;
(statearr_28888_28937[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28938 = state_28827;
state_28827 = G__28938;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27042__auto__ = function(state_28827){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27042__auto____1.call(this,state_28827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27042__auto____0;
cljs$core$async$mix_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27042__auto____1;
return cljs$core$async$mix_$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27155__auto__ = (function (){var statearr_28889 = f__27154__auto__.call(null);
(statearr_28889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___28890);

return statearr_28889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___28890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28939 = [];
var len__25983__auto___28942 = arguments.length;
var i__25984__auto___28943 = (0);
while(true){
if((i__25984__auto___28943 < len__25983__auto___28942)){
args28939.push((arguments[i__25984__auto___28943]));

var G__28944 = (i__25984__auto___28943 + (1));
i__25984__auto___28943 = G__28944;
continue;
} else {
}
break;
}

var G__28941 = args28939.length;
switch (G__28941) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28939.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28947 = [];
var len__25983__auto___29072 = arguments.length;
var i__25984__auto___29073 = (0);
while(true){
if((i__25984__auto___29073 < len__25983__auto___29072)){
args28947.push((arguments[i__25984__auto___29073]));

var G__29074 = (i__25984__auto___29073 + (1));
i__25984__auto___29073 = G__29074;
continue;
} else {
}
break;
}

var G__28949 = args28947.length;
switch (G__28949) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28947.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24875__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24875__auto__,mults){
return (function (p1__28946_SHARP_){
if(cljs.core.truth_(p1__28946_SHARP_.call(null,topic))){
return p1__28946_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28946_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24875__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28950 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28951){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28951 = meta28951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28952,meta28951__$1){
var self__ = this;
var _28952__$1 = this;
return (new cljs.core.async.t_cljs$core$async28950(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28951__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28952){
var self__ = this;
var _28952__$1 = this;
return self__.meta28951;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28951","meta28951",1769351173,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28950";

cljs.core.async.t_cljs$core$async28950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28950");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28950 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28951){
return (new cljs.core.async.t_cljs$core$async28950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28951));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28950(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27153__auto___29076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29076,mults,ensure_mult,p){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29076,mults,ensure_mult,p){
return (function (state_29024){
var state_val_29025 = (state_29024[(1)]);
if((state_val_29025 === (7))){
var inst_29020 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29026_29077 = state_29024__$1;
(statearr_29026_29077[(2)] = inst_29020);

(statearr_29026_29077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (20))){
var state_29024__$1 = state_29024;
var statearr_29027_29078 = state_29024__$1;
(statearr_29027_29078[(2)] = null);

(statearr_29027_29078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (1))){
var state_29024__$1 = state_29024;
var statearr_29028_29079 = state_29024__$1;
(statearr_29028_29079[(2)] = null);

(statearr_29028_29079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (24))){
var inst_29003 = (state_29024[(7)]);
var inst_29012 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29003);
var state_29024__$1 = state_29024;
var statearr_29029_29080 = state_29024__$1;
(statearr_29029_29080[(2)] = inst_29012);

(statearr_29029_29080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (4))){
var inst_28955 = (state_29024[(8)]);
var inst_28955__$1 = (state_29024[(2)]);
var inst_28956 = (inst_28955__$1 == null);
var state_29024__$1 = (function (){var statearr_29030 = state_29024;
(statearr_29030[(8)] = inst_28955__$1);

return statearr_29030;
})();
if(cljs.core.truth_(inst_28956)){
var statearr_29031_29081 = state_29024__$1;
(statearr_29031_29081[(1)] = (5));

} else {
var statearr_29032_29082 = state_29024__$1;
(statearr_29032_29082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (15))){
var inst_28997 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29033_29083 = state_29024__$1;
(statearr_29033_29083[(2)] = inst_28997);

(statearr_29033_29083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (21))){
var inst_29017 = (state_29024[(2)]);
var state_29024__$1 = (function (){var statearr_29034 = state_29024;
(statearr_29034[(9)] = inst_29017);

return statearr_29034;
})();
var statearr_29035_29084 = state_29024__$1;
(statearr_29035_29084[(2)] = null);

(statearr_29035_29084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (13))){
var inst_28979 = (state_29024[(10)]);
var inst_28981 = cljs.core.chunked_seq_QMARK_.call(null,inst_28979);
var state_29024__$1 = state_29024;
if(inst_28981){
var statearr_29036_29085 = state_29024__$1;
(statearr_29036_29085[(1)] = (16));

} else {
var statearr_29037_29086 = state_29024__$1;
(statearr_29037_29086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (22))){
var inst_29009 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
if(cljs.core.truth_(inst_29009)){
var statearr_29038_29087 = state_29024__$1;
(statearr_29038_29087[(1)] = (23));

} else {
var statearr_29039_29088 = state_29024__$1;
(statearr_29039_29088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (6))){
var inst_28955 = (state_29024[(8)]);
var inst_29005 = (state_29024[(11)]);
var inst_29003 = (state_29024[(7)]);
var inst_29003__$1 = topic_fn.call(null,inst_28955);
var inst_29004 = cljs.core.deref.call(null,mults);
var inst_29005__$1 = cljs.core.get.call(null,inst_29004,inst_29003__$1);
var state_29024__$1 = (function (){var statearr_29040 = state_29024;
(statearr_29040[(11)] = inst_29005__$1);

(statearr_29040[(7)] = inst_29003__$1);

return statearr_29040;
})();
if(cljs.core.truth_(inst_29005__$1)){
var statearr_29041_29089 = state_29024__$1;
(statearr_29041_29089[(1)] = (19));

} else {
var statearr_29042_29090 = state_29024__$1;
(statearr_29042_29090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (25))){
var inst_29014 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29043_29091 = state_29024__$1;
(statearr_29043_29091[(2)] = inst_29014);

(statearr_29043_29091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (17))){
var inst_28979 = (state_29024[(10)]);
var inst_28988 = cljs.core.first.call(null,inst_28979);
var inst_28989 = cljs.core.async.muxch_STAR_.call(null,inst_28988);
var inst_28990 = cljs.core.async.close_BANG_.call(null,inst_28989);
var inst_28991 = cljs.core.next.call(null,inst_28979);
var inst_28965 = inst_28991;
var inst_28966 = null;
var inst_28967 = (0);
var inst_28968 = (0);
var state_29024__$1 = (function (){var statearr_29044 = state_29024;
(statearr_29044[(12)] = inst_28968);

(statearr_29044[(13)] = inst_28967);

(statearr_29044[(14)] = inst_28965);

(statearr_29044[(15)] = inst_28990);

(statearr_29044[(16)] = inst_28966);

return statearr_29044;
})();
var statearr_29045_29092 = state_29024__$1;
(statearr_29045_29092[(2)] = null);

(statearr_29045_29092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (3))){
var inst_29022 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29024__$1,inst_29022);
} else {
if((state_val_29025 === (12))){
var inst_28999 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29046_29093 = state_29024__$1;
(statearr_29046_29093[(2)] = inst_28999);

(statearr_29046_29093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (2))){
var state_29024__$1 = state_29024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29024__$1,(4),ch);
} else {
if((state_val_29025 === (23))){
var state_29024__$1 = state_29024;
var statearr_29047_29094 = state_29024__$1;
(statearr_29047_29094[(2)] = null);

(statearr_29047_29094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (19))){
var inst_28955 = (state_29024[(8)]);
var inst_29005 = (state_29024[(11)]);
var inst_29007 = cljs.core.async.muxch_STAR_.call(null,inst_29005);
var state_29024__$1 = state_29024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29024__$1,(22),inst_29007,inst_28955);
} else {
if((state_val_29025 === (11))){
var inst_28965 = (state_29024[(14)]);
var inst_28979 = (state_29024[(10)]);
var inst_28979__$1 = cljs.core.seq.call(null,inst_28965);
var state_29024__$1 = (function (){var statearr_29048 = state_29024;
(statearr_29048[(10)] = inst_28979__$1);

return statearr_29048;
})();
if(inst_28979__$1){
var statearr_29049_29095 = state_29024__$1;
(statearr_29049_29095[(1)] = (13));

} else {
var statearr_29050_29096 = state_29024__$1;
(statearr_29050_29096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (9))){
var inst_29001 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29051_29097 = state_29024__$1;
(statearr_29051_29097[(2)] = inst_29001);

(statearr_29051_29097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (5))){
var inst_28962 = cljs.core.deref.call(null,mults);
var inst_28963 = cljs.core.vals.call(null,inst_28962);
var inst_28964 = cljs.core.seq.call(null,inst_28963);
var inst_28965 = inst_28964;
var inst_28966 = null;
var inst_28967 = (0);
var inst_28968 = (0);
var state_29024__$1 = (function (){var statearr_29052 = state_29024;
(statearr_29052[(12)] = inst_28968);

(statearr_29052[(13)] = inst_28967);

(statearr_29052[(14)] = inst_28965);

(statearr_29052[(16)] = inst_28966);

return statearr_29052;
})();
var statearr_29053_29098 = state_29024__$1;
(statearr_29053_29098[(2)] = null);

(statearr_29053_29098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (14))){
var state_29024__$1 = state_29024;
var statearr_29057_29099 = state_29024__$1;
(statearr_29057_29099[(2)] = null);

(statearr_29057_29099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (16))){
var inst_28979 = (state_29024[(10)]);
var inst_28983 = cljs.core.chunk_first.call(null,inst_28979);
var inst_28984 = cljs.core.chunk_rest.call(null,inst_28979);
var inst_28985 = cljs.core.count.call(null,inst_28983);
var inst_28965 = inst_28984;
var inst_28966 = inst_28983;
var inst_28967 = inst_28985;
var inst_28968 = (0);
var state_29024__$1 = (function (){var statearr_29058 = state_29024;
(statearr_29058[(12)] = inst_28968);

(statearr_29058[(13)] = inst_28967);

(statearr_29058[(14)] = inst_28965);

(statearr_29058[(16)] = inst_28966);

return statearr_29058;
})();
var statearr_29059_29100 = state_29024__$1;
(statearr_29059_29100[(2)] = null);

(statearr_29059_29100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (10))){
var inst_28968 = (state_29024[(12)]);
var inst_28967 = (state_29024[(13)]);
var inst_28965 = (state_29024[(14)]);
var inst_28966 = (state_29024[(16)]);
var inst_28973 = cljs.core._nth.call(null,inst_28966,inst_28968);
var inst_28974 = cljs.core.async.muxch_STAR_.call(null,inst_28973);
var inst_28975 = cljs.core.async.close_BANG_.call(null,inst_28974);
var inst_28976 = (inst_28968 + (1));
var tmp29054 = inst_28967;
var tmp29055 = inst_28965;
var tmp29056 = inst_28966;
var inst_28965__$1 = tmp29055;
var inst_28966__$1 = tmp29056;
var inst_28967__$1 = tmp29054;
var inst_28968__$1 = inst_28976;
var state_29024__$1 = (function (){var statearr_29060 = state_29024;
(statearr_29060[(12)] = inst_28968__$1);

(statearr_29060[(13)] = inst_28967__$1);

(statearr_29060[(17)] = inst_28975);

(statearr_29060[(14)] = inst_28965__$1);

(statearr_29060[(16)] = inst_28966__$1);

return statearr_29060;
})();
var statearr_29061_29101 = state_29024__$1;
(statearr_29061_29101[(2)] = null);

(statearr_29061_29101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (18))){
var inst_28994 = (state_29024[(2)]);
var state_29024__$1 = state_29024;
var statearr_29062_29102 = state_29024__$1;
(statearr_29062_29102[(2)] = inst_28994);

(statearr_29062_29102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29025 === (8))){
var inst_28968 = (state_29024[(12)]);
var inst_28967 = (state_29024[(13)]);
var inst_28970 = (inst_28968 < inst_28967);
var inst_28971 = inst_28970;
var state_29024__$1 = state_29024;
if(cljs.core.truth_(inst_28971)){
var statearr_29063_29103 = state_29024__$1;
(statearr_29063_29103[(1)] = (10));

} else {
var statearr_29064_29104 = state_29024__$1;
(statearr_29064_29104[(1)] = (11));

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
});})(c__27153__auto___29076,mults,ensure_mult,p))
;
return ((function (switch__27041__auto__,c__27153__auto___29076,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29068[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29068[(1)] = (1));

return statearr_29068;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29024){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29069){if((e29069 instanceof Object)){
var ex__27045__auto__ = e29069;
var statearr_29070_29105 = state_29024;
(statearr_29070_29105[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29106 = state_29024;
state_29024 = G__29106;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29076,mults,ensure_mult,p))
})();
var state__27155__auto__ = (function (){var statearr_29071 = f__27154__auto__.call(null);
(statearr_29071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29076);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29076,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29107 = [];
var len__25983__auto___29110 = arguments.length;
var i__25984__auto___29111 = (0);
while(true){
if((i__25984__auto___29111 < len__25983__auto___29110)){
args29107.push((arguments[i__25984__auto___29111]));

var G__29112 = (i__25984__auto___29111 + (1));
i__25984__auto___29111 = G__29112;
continue;
} else {
}
break;
}

var G__29109 = args29107.length;
switch (G__29109) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29107.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29114 = [];
var len__25983__auto___29117 = arguments.length;
var i__25984__auto___29118 = (0);
while(true){
if((i__25984__auto___29118 < len__25983__auto___29117)){
args29114.push((arguments[i__25984__auto___29118]));

var G__29119 = (i__25984__auto___29118 + (1));
i__25984__auto___29118 = G__29119;
continue;
} else {
}
break;
}

var G__29116 = args29114.length;
switch (G__29116) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29114.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29121 = [];
var len__25983__auto___29192 = arguments.length;
var i__25984__auto___29193 = (0);
while(true){
if((i__25984__auto___29193 < len__25983__auto___29192)){
args29121.push((arguments[i__25984__auto___29193]));

var G__29194 = (i__25984__auto___29193 + (1));
i__25984__auto___29193 = G__29194;
continue;
} else {
}
break;
}

var G__29123 = args29121.length;
switch (G__29123) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29121.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27153__auto___29196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29162){
var state_val_29163 = (state_29162[(1)]);
if((state_val_29163 === (7))){
var state_29162__$1 = state_29162;
var statearr_29164_29197 = state_29162__$1;
(statearr_29164_29197[(2)] = null);

(statearr_29164_29197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (1))){
var state_29162__$1 = state_29162;
var statearr_29165_29198 = state_29162__$1;
(statearr_29165_29198[(2)] = null);

(statearr_29165_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (4))){
var inst_29126 = (state_29162[(7)]);
var inst_29128 = (inst_29126 < cnt);
var state_29162__$1 = state_29162;
if(cljs.core.truth_(inst_29128)){
var statearr_29166_29199 = state_29162__$1;
(statearr_29166_29199[(1)] = (6));

} else {
var statearr_29167_29200 = state_29162__$1;
(statearr_29167_29200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (15))){
var inst_29158 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29168_29201 = state_29162__$1;
(statearr_29168_29201[(2)] = inst_29158);

(statearr_29168_29201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (13))){
var inst_29151 = cljs.core.async.close_BANG_.call(null,out);
var state_29162__$1 = state_29162;
var statearr_29169_29202 = state_29162__$1;
(statearr_29169_29202[(2)] = inst_29151);

(statearr_29169_29202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (6))){
var state_29162__$1 = state_29162;
var statearr_29170_29203 = state_29162__$1;
(statearr_29170_29203[(2)] = null);

(statearr_29170_29203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (3))){
var inst_29160 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29162__$1,inst_29160);
} else {
if((state_val_29163 === (12))){
var inst_29148 = (state_29162[(8)]);
var inst_29148__$1 = (state_29162[(2)]);
var inst_29149 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29148__$1);
var state_29162__$1 = (function (){var statearr_29171 = state_29162;
(statearr_29171[(8)] = inst_29148__$1);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29149)){
var statearr_29172_29204 = state_29162__$1;
(statearr_29172_29204[(1)] = (13));

} else {
var statearr_29173_29205 = state_29162__$1;
(statearr_29173_29205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (2))){
var inst_29125 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29126 = (0);
var state_29162__$1 = (function (){var statearr_29174 = state_29162;
(statearr_29174[(7)] = inst_29126);

(statearr_29174[(9)] = inst_29125);

return statearr_29174;
})();
var statearr_29175_29206 = state_29162__$1;
(statearr_29175_29206[(2)] = null);

(statearr_29175_29206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (11))){
var inst_29126 = (state_29162[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29162,(10),Object,null,(9));
var inst_29135 = chs__$1.call(null,inst_29126);
var inst_29136 = done.call(null,inst_29126);
var inst_29137 = cljs.core.async.take_BANG_.call(null,inst_29135,inst_29136);
var state_29162__$1 = state_29162;
var statearr_29176_29207 = state_29162__$1;
(statearr_29176_29207[(2)] = inst_29137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (9))){
var inst_29126 = (state_29162[(7)]);
var inst_29139 = (state_29162[(2)]);
var inst_29140 = (inst_29126 + (1));
var inst_29126__$1 = inst_29140;
var state_29162__$1 = (function (){var statearr_29177 = state_29162;
(statearr_29177[(10)] = inst_29139);

(statearr_29177[(7)] = inst_29126__$1);

return statearr_29177;
})();
var statearr_29178_29208 = state_29162__$1;
(statearr_29178_29208[(2)] = null);

(statearr_29178_29208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (5))){
var inst_29146 = (state_29162[(2)]);
var state_29162__$1 = (function (){var statearr_29179 = state_29162;
(statearr_29179[(11)] = inst_29146);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29162__$1,(12),dchan);
} else {
if((state_val_29163 === (14))){
var inst_29148 = (state_29162[(8)]);
var inst_29153 = cljs.core.apply.call(null,f,inst_29148);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29162__$1,(16),out,inst_29153);
} else {
if((state_val_29163 === (16))){
var inst_29155 = (state_29162[(2)]);
var state_29162__$1 = (function (){var statearr_29180 = state_29162;
(statearr_29180[(12)] = inst_29155);

return statearr_29180;
})();
var statearr_29181_29209 = state_29162__$1;
(statearr_29181_29209[(2)] = null);

(statearr_29181_29209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (10))){
var inst_29130 = (state_29162[(2)]);
var inst_29131 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29162__$1 = (function (){var statearr_29182 = state_29162;
(statearr_29182[(13)] = inst_29130);

return statearr_29182;
})();
var statearr_29183_29210 = state_29162__$1;
(statearr_29183_29210[(2)] = inst_29131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (8))){
var inst_29144 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29184_29211 = state_29162__$1;
(statearr_29184_29211[(2)] = inst_29144);

(statearr_29184_29211[(1)] = (5));


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
});})(c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27041__auto__,c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29162){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__27045__auto__ = e29189;
var statearr_29190_29212 = state_29162;
(statearr_29190_29212[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29213 = state_29162;
state_29162 = G__29213;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27155__auto__ = (function (){var statearr_29191 = f__27154__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29196);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29196,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29215 = [];
var len__25983__auto___29273 = arguments.length;
var i__25984__auto___29274 = (0);
while(true){
if((i__25984__auto___29274 < len__25983__auto___29273)){
args29215.push((arguments[i__25984__auto___29274]));

var G__29275 = (i__25984__auto___29274 + (1));
i__25984__auto___29274 = G__29275;
continue;
} else {
}
break;
}

var G__29217 = args29215.length;
switch (G__29217) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29215.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29277,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29277,out){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (7))){
var inst_29229 = (state_29249[(7)]);
var inst_29228 = (state_29249[(8)]);
var inst_29228__$1 = (state_29249[(2)]);
var inst_29229__$1 = cljs.core.nth.call(null,inst_29228__$1,(0),null);
var inst_29230 = cljs.core.nth.call(null,inst_29228__$1,(1),null);
var inst_29231 = (inst_29229__$1 == null);
var state_29249__$1 = (function (){var statearr_29251 = state_29249;
(statearr_29251[(9)] = inst_29230);

(statearr_29251[(7)] = inst_29229__$1);

(statearr_29251[(8)] = inst_29228__$1);

return statearr_29251;
})();
if(cljs.core.truth_(inst_29231)){
var statearr_29252_29278 = state_29249__$1;
(statearr_29252_29278[(1)] = (8));

} else {
var statearr_29253_29279 = state_29249__$1;
(statearr_29253_29279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (1))){
var inst_29218 = cljs.core.vec.call(null,chs);
var inst_29219 = inst_29218;
var state_29249__$1 = (function (){var statearr_29254 = state_29249;
(statearr_29254[(10)] = inst_29219);

return statearr_29254;
})();
var statearr_29255_29280 = state_29249__$1;
(statearr_29255_29280[(2)] = null);

(statearr_29255_29280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (4))){
var inst_29219 = (state_29249[(10)]);
var state_29249__$1 = state_29249;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29249__$1,(7),inst_29219);
} else {
if((state_val_29250 === (6))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29256_29281 = state_29249__$1;
(statearr_29256_29281[(2)] = inst_29245);

(statearr_29256_29281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (2))){
var inst_29219 = (state_29249[(10)]);
var inst_29221 = cljs.core.count.call(null,inst_29219);
var inst_29222 = (inst_29221 > (0));
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29222)){
var statearr_29258_29282 = state_29249__$1;
(statearr_29258_29282[(1)] = (4));

} else {
var statearr_29259_29283 = state_29249__$1;
(statearr_29259_29283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (11))){
var inst_29219 = (state_29249[(10)]);
var inst_29238 = (state_29249[(2)]);
var tmp29257 = inst_29219;
var inst_29219__$1 = tmp29257;
var state_29249__$1 = (function (){var statearr_29260 = state_29249;
(statearr_29260[(10)] = inst_29219__$1);

(statearr_29260[(11)] = inst_29238);

return statearr_29260;
})();
var statearr_29261_29284 = state_29249__$1;
(statearr_29261_29284[(2)] = null);

(statearr_29261_29284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (9))){
var inst_29229 = (state_29249[(7)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29249__$1,(11),out,inst_29229);
} else {
if((state_val_29250 === (5))){
var inst_29243 = cljs.core.async.close_BANG_.call(null,out);
var state_29249__$1 = state_29249;
var statearr_29262_29285 = state_29249__$1;
(statearr_29262_29285[(2)] = inst_29243);

(statearr_29262_29285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (10))){
var inst_29241 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29263_29286 = state_29249__$1;
(statearr_29263_29286[(2)] = inst_29241);

(statearr_29263_29286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (8))){
var inst_29219 = (state_29249[(10)]);
var inst_29230 = (state_29249[(9)]);
var inst_29229 = (state_29249[(7)]);
var inst_29228 = (state_29249[(8)]);
var inst_29233 = (function (){var cs = inst_29219;
var vec__29224 = inst_29228;
var v = inst_29229;
var c = inst_29230;
return ((function (cs,vec__29224,v,c,inst_29219,inst_29230,inst_29229,inst_29228,state_val_29250,c__27153__auto___29277,out){
return (function (p1__29214_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29214_SHARP_);
});
;})(cs,vec__29224,v,c,inst_29219,inst_29230,inst_29229,inst_29228,state_val_29250,c__27153__auto___29277,out))
})();
var inst_29234 = cljs.core.filterv.call(null,inst_29233,inst_29219);
var inst_29219__$1 = inst_29234;
var state_29249__$1 = (function (){var statearr_29264 = state_29249;
(statearr_29264[(10)] = inst_29219__$1);

return statearr_29264;
})();
var statearr_29265_29287 = state_29249__$1;
(statearr_29265_29287[(2)] = null);

(statearr_29265_29287[(1)] = (2));


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
});})(c__27153__auto___29277,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29277,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29269[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29249){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29270){if((e29270 instanceof Object)){
var ex__27045__auto__ = e29270;
var statearr_29271_29288 = state_29249;
(statearr_29271_29288[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29289 = state_29249;
state_29249 = G__29289;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29277,out))
})();
var state__27155__auto__ = (function (){var statearr_29272 = f__27154__auto__.call(null);
(statearr_29272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29277);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29277,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29290 = [];
var len__25983__auto___29339 = arguments.length;
var i__25984__auto___29340 = (0);
while(true){
if((i__25984__auto___29340 < len__25983__auto___29339)){
args29290.push((arguments[i__25984__auto___29340]));

var G__29341 = (i__25984__auto___29340 + (1));
i__25984__auto___29340 = G__29341;
continue;
} else {
}
break;
}

var G__29292 = args29290.length;
switch (G__29292) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29290.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29343,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29343,out){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (7))){
var inst_29298 = (state_29316[(7)]);
var inst_29298__$1 = (state_29316[(2)]);
var inst_29299 = (inst_29298__$1 == null);
var inst_29300 = cljs.core.not.call(null,inst_29299);
var state_29316__$1 = (function (){var statearr_29318 = state_29316;
(statearr_29318[(7)] = inst_29298__$1);

return statearr_29318;
})();
if(inst_29300){
var statearr_29319_29344 = state_29316__$1;
(statearr_29319_29344[(1)] = (8));

} else {
var statearr_29320_29345 = state_29316__$1;
(statearr_29320_29345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (1))){
var inst_29293 = (0);
var state_29316__$1 = (function (){var statearr_29321 = state_29316;
(statearr_29321[(8)] = inst_29293);

return statearr_29321;
})();
var statearr_29322_29346 = state_29316__$1;
(statearr_29322_29346[(2)] = null);

(statearr_29322_29346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (4))){
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(7),ch);
} else {
if((state_val_29317 === (6))){
var inst_29311 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29323_29347 = state_29316__$1;
(statearr_29323_29347[(2)] = inst_29311);

(statearr_29323_29347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (3))){
var inst_29313 = (state_29316[(2)]);
var inst_29314 = cljs.core.async.close_BANG_.call(null,out);
var state_29316__$1 = (function (){var statearr_29324 = state_29316;
(statearr_29324[(9)] = inst_29313);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (2))){
var inst_29293 = (state_29316[(8)]);
var inst_29295 = (inst_29293 < n);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29295)){
var statearr_29325_29348 = state_29316__$1;
(statearr_29325_29348[(1)] = (4));

} else {
var statearr_29326_29349 = state_29316__$1;
(statearr_29326_29349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (11))){
var inst_29293 = (state_29316[(8)]);
var inst_29303 = (state_29316[(2)]);
var inst_29304 = (inst_29293 + (1));
var inst_29293__$1 = inst_29304;
var state_29316__$1 = (function (){var statearr_29327 = state_29316;
(statearr_29327[(10)] = inst_29303);

(statearr_29327[(8)] = inst_29293__$1);

return statearr_29327;
})();
var statearr_29328_29350 = state_29316__$1;
(statearr_29328_29350[(2)] = null);

(statearr_29328_29350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (9))){
var state_29316__$1 = state_29316;
var statearr_29329_29351 = state_29316__$1;
(statearr_29329_29351[(2)] = null);

(statearr_29329_29351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (5))){
var state_29316__$1 = state_29316;
var statearr_29330_29352 = state_29316__$1;
(statearr_29330_29352[(2)] = null);

(statearr_29330_29352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (10))){
var inst_29308 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29331_29353 = state_29316__$1;
(statearr_29331_29353[(2)] = inst_29308);

(statearr_29331_29353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (8))){
var inst_29298 = (state_29316[(7)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29316__$1,(11),out,inst_29298);
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
});})(c__27153__auto___29343,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29343,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29335[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29335[(1)] = (1));

return statearr_29335;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29316){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29336){if((e29336 instanceof Object)){
var ex__27045__auto__ = e29336;
var statearr_29337_29354 = state_29316;
(statearr_29337_29354[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29355 = state_29316;
state_29316 = G__29355;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29343,out))
})();
var state__27155__auto__ = (function (){var statearr_29338 = f__27154__auto__.call(null);
(statearr_29338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29343);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29343,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29363 = (function (f,ch,meta29364){
this.f = f;
this.ch = ch;
this.meta29364 = meta29364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29365,meta29364__$1){
var self__ = this;
var _29365__$1 = this;
return (new cljs.core.async.t_cljs$core$async29363(self__.f,self__.ch,meta29364__$1));
});

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29365){
var self__ = this;
var _29365__$1 = this;
return self__.meta29364;
});

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29366 = (function (f,ch,meta29364,_,fn1,meta29367){
this.f = f;
this.ch = ch;
this.meta29364 = meta29364;
this._ = _;
this.fn1 = fn1;
this.meta29367 = meta29367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29368,meta29367__$1){
var self__ = this;
var _29368__$1 = this;
return (new cljs.core.async.t_cljs$core$async29366(self__.f,self__.ch,self__.meta29364,self__._,self__.fn1,meta29367__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29368){
var self__ = this;
var _29368__$1 = this;
return self__.meta29367;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29356_SHARP_){
return f1.call(null,(((p1__29356_SHARP_ == null))?null:self__.f.call(null,p1__29356_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29364","meta29364",-1595652042,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29363","cljs.core.async/t_cljs$core$async29363",199412876,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29367","meta29367",1143968115,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29366";

cljs.core.async.t_cljs$core$async29366.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29366");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29366 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29366(f__$1,ch__$1,meta29364__$1,___$2,fn1__$1,meta29367){
return (new cljs.core.async.t_cljs$core$async29366(f__$1,ch__$1,meta29364__$1,___$2,fn1__$1,meta29367));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29366(self__.f,self__.ch,self__.meta29364,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24863__auto__ = ret;
if(cljs.core.truth_(and__24863__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24863__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29364","meta29364",-1595652042,null)], null);
});

cljs.core.async.t_cljs$core$async29363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29363";

cljs.core.async.t_cljs$core$async29363.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29363");
});

cljs.core.async.__GT_t_cljs$core$async29363 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29363(f__$1,ch__$1,meta29364){
return (new cljs.core.async.t_cljs$core$async29363(f__$1,ch__$1,meta29364));
});

}

return (new cljs.core.async.t_cljs$core$async29363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29372 = (function (f,ch,meta29373){
this.f = f;
this.ch = ch;
this.meta29373 = meta29373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29374,meta29373__$1){
var self__ = this;
var _29374__$1 = this;
return (new cljs.core.async.t_cljs$core$async29372(self__.f,self__.ch,meta29373__$1));
});

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29374){
var self__ = this;
var _29374__$1 = this;
return self__.meta29373;
});

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29373","meta29373",96825082,null)], null);
});

cljs.core.async.t_cljs$core$async29372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29372";

cljs.core.async.t_cljs$core$async29372.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29372");
});

cljs.core.async.__GT_t_cljs$core$async29372 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29372(f__$1,ch__$1,meta29373){
return (new cljs.core.async.t_cljs$core$async29372(f__$1,ch__$1,meta29373));
});

}

return (new cljs.core.async.t_cljs$core$async29372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29378 = (function (p,ch,meta29379){
this.p = p;
this.ch = ch;
this.meta29379 = meta29379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29380,meta29379__$1){
var self__ = this;
var _29380__$1 = this;
return (new cljs.core.async.t_cljs$core$async29378(self__.p,self__.ch,meta29379__$1));
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29380){
var self__ = this;
var _29380__$1 = this;
return self__.meta29379;
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null)], null);
});

cljs.core.async.t_cljs$core$async29378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29378";

cljs.core.async.t_cljs$core$async29378.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29378");
});

cljs.core.async.__GT_t_cljs$core$async29378 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29378(p__$1,ch__$1,meta29379){
return (new cljs.core.async.t_cljs$core$async29378(p__$1,ch__$1,meta29379));
});

}

return (new cljs.core.async.t_cljs$core$async29378(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29381 = [];
var len__25983__auto___29425 = arguments.length;
var i__25984__auto___29426 = (0);
while(true){
if((i__25984__auto___29426 < len__25983__auto___29425)){
args29381.push((arguments[i__25984__auto___29426]));

var G__29427 = (i__25984__auto___29426 + (1));
i__25984__auto___29426 = G__29427;
continue;
} else {
}
break;
}

var G__29383 = args29381.length;
switch (G__29383) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29381.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29429,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29429,out){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (7))){
var inst_29400 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29406_29430 = state_29404__$1;
(statearr_29406_29430[(2)] = inst_29400);

(statearr_29406_29430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (1))){
var state_29404__$1 = state_29404;
var statearr_29407_29431 = state_29404__$1;
(statearr_29407_29431[(2)] = null);

(statearr_29407_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (4))){
var inst_29386 = (state_29404[(7)]);
var inst_29386__$1 = (state_29404[(2)]);
var inst_29387 = (inst_29386__$1 == null);
var state_29404__$1 = (function (){var statearr_29408 = state_29404;
(statearr_29408[(7)] = inst_29386__$1);

return statearr_29408;
})();
if(cljs.core.truth_(inst_29387)){
var statearr_29409_29432 = state_29404__$1;
(statearr_29409_29432[(1)] = (5));

} else {
var statearr_29410_29433 = state_29404__$1;
(statearr_29410_29433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (6))){
var inst_29386 = (state_29404[(7)]);
var inst_29391 = p.call(null,inst_29386);
var state_29404__$1 = state_29404;
if(cljs.core.truth_(inst_29391)){
var statearr_29411_29434 = state_29404__$1;
(statearr_29411_29434[(1)] = (8));

} else {
var statearr_29412_29435 = state_29404__$1;
(statearr_29412_29435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (3))){
var inst_29402 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
if((state_val_29405 === (2))){
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29404__$1,(4),ch);
} else {
if((state_val_29405 === (11))){
var inst_29394 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29413_29436 = state_29404__$1;
(statearr_29413_29436[(2)] = inst_29394);

(statearr_29413_29436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (9))){
var state_29404__$1 = state_29404;
var statearr_29414_29437 = state_29404__$1;
(statearr_29414_29437[(2)] = null);

(statearr_29414_29437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (5))){
var inst_29389 = cljs.core.async.close_BANG_.call(null,out);
var state_29404__$1 = state_29404;
var statearr_29415_29438 = state_29404__$1;
(statearr_29415_29438[(2)] = inst_29389);

(statearr_29415_29438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (10))){
var inst_29397 = (state_29404[(2)]);
var state_29404__$1 = (function (){var statearr_29416 = state_29404;
(statearr_29416[(8)] = inst_29397);

return statearr_29416;
})();
var statearr_29417_29439 = state_29404__$1;
(statearr_29417_29439[(2)] = null);

(statearr_29417_29439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (8))){
var inst_29386 = (state_29404[(7)]);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29404__$1,(11),out,inst_29386);
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
});})(c__27153__auto___29429,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29429,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null,null,null];
(statearr_29421[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29404){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__27045__auto__ = e29422;
var statearr_29423_29440 = state_29404;
(statearr_29423_29440[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29441 = state_29404;
state_29404 = G__29441;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29429,out))
})();
var state__27155__auto__ = (function (){var statearr_29424 = f__27154__auto__.call(null);
(statearr_29424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29429);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29429,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29442 = [];
var len__25983__auto___29445 = arguments.length;
var i__25984__auto___29446 = (0);
while(true){
if((i__25984__auto___29446 < len__25983__auto___29445)){
args29442.push((arguments[i__25984__auto___29446]));

var G__29447 = (i__25984__auto___29446 + (1));
i__25984__auto___29446 = G__29447;
continue;
} else {
}
break;
}

var G__29444 = args29442.length;
switch (G__29444) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29442.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto__){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto__){
return (function (state_29614){
var state_val_29615 = (state_29614[(1)]);
if((state_val_29615 === (7))){
var inst_29610 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29616_29657 = state_29614__$1;
(statearr_29616_29657[(2)] = inst_29610);

(statearr_29616_29657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (20))){
var inst_29580 = (state_29614[(7)]);
var inst_29591 = (state_29614[(2)]);
var inst_29592 = cljs.core.next.call(null,inst_29580);
var inst_29566 = inst_29592;
var inst_29567 = null;
var inst_29568 = (0);
var inst_29569 = (0);
var state_29614__$1 = (function (){var statearr_29617 = state_29614;
(statearr_29617[(8)] = inst_29591);

(statearr_29617[(9)] = inst_29568);

(statearr_29617[(10)] = inst_29567);

(statearr_29617[(11)] = inst_29569);

(statearr_29617[(12)] = inst_29566);

return statearr_29617;
})();
var statearr_29618_29658 = state_29614__$1;
(statearr_29618_29658[(2)] = null);

(statearr_29618_29658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (1))){
var state_29614__$1 = state_29614;
var statearr_29619_29659 = state_29614__$1;
(statearr_29619_29659[(2)] = null);

(statearr_29619_29659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (4))){
var inst_29555 = (state_29614[(13)]);
var inst_29555__$1 = (state_29614[(2)]);
var inst_29556 = (inst_29555__$1 == null);
var state_29614__$1 = (function (){var statearr_29620 = state_29614;
(statearr_29620[(13)] = inst_29555__$1);

return statearr_29620;
})();
if(cljs.core.truth_(inst_29556)){
var statearr_29621_29660 = state_29614__$1;
(statearr_29621_29660[(1)] = (5));

} else {
var statearr_29622_29661 = state_29614__$1;
(statearr_29622_29661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (15))){
var state_29614__$1 = state_29614;
var statearr_29626_29662 = state_29614__$1;
(statearr_29626_29662[(2)] = null);

(statearr_29626_29662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (21))){
var state_29614__$1 = state_29614;
var statearr_29627_29663 = state_29614__$1;
(statearr_29627_29663[(2)] = null);

(statearr_29627_29663[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (13))){
var inst_29568 = (state_29614[(9)]);
var inst_29567 = (state_29614[(10)]);
var inst_29569 = (state_29614[(11)]);
var inst_29566 = (state_29614[(12)]);
var inst_29576 = (state_29614[(2)]);
var inst_29577 = (inst_29569 + (1));
var tmp29623 = inst_29568;
var tmp29624 = inst_29567;
var tmp29625 = inst_29566;
var inst_29566__$1 = tmp29625;
var inst_29567__$1 = tmp29624;
var inst_29568__$1 = tmp29623;
var inst_29569__$1 = inst_29577;
var state_29614__$1 = (function (){var statearr_29628 = state_29614;
(statearr_29628[(9)] = inst_29568__$1);

(statearr_29628[(10)] = inst_29567__$1);

(statearr_29628[(11)] = inst_29569__$1);

(statearr_29628[(14)] = inst_29576);

(statearr_29628[(12)] = inst_29566__$1);

return statearr_29628;
})();
var statearr_29629_29664 = state_29614__$1;
(statearr_29629_29664[(2)] = null);

(statearr_29629_29664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (22))){
var state_29614__$1 = state_29614;
var statearr_29630_29665 = state_29614__$1;
(statearr_29630_29665[(2)] = null);

(statearr_29630_29665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (6))){
var inst_29555 = (state_29614[(13)]);
var inst_29564 = f.call(null,inst_29555);
var inst_29565 = cljs.core.seq.call(null,inst_29564);
var inst_29566 = inst_29565;
var inst_29567 = null;
var inst_29568 = (0);
var inst_29569 = (0);
var state_29614__$1 = (function (){var statearr_29631 = state_29614;
(statearr_29631[(9)] = inst_29568);

(statearr_29631[(10)] = inst_29567);

(statearr_29631[(11)] = inst_29569);

(statearr_29631[(12)] = inst_29566);

return statearr_29631;
})();
var statearr_29632_29666 = state_29614__$1;
(statearr_29632_29666[(2)] = null);

(statearr_29632_29666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (17))){
var inst_29580 = (state_29614[(7)]);
var inst_29584 = cljs.core.chunk_first.call(null,inst_29580);
var inst_29585 = cljs.core.chunk_rest.call(null,inst_29580);
var inst_29586 = cljs.core.count.call(null,inst_29584);
var inst_29566 = inst_29585;
var inst_29567 = inst_29584;
var inst_29568 = inst_29586;
var inst_29569 = (0);
var state_29614__$1 = (function (){var statearr_29633 = state_29614;
(statearr_29633[(9)] = inst_29568);

(statearr_29633[(10)] = inst_29567);

(statearr_29633[(11)] = inst_29569);

(statearr_29633[(12)] = inst_29566);

return statearr_29633;
})();
var statearr_29634_29667 = state_29614__$1;
(statearr_29634_29667[(2)] = null);

(statearr_29634_29667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (3))){
var inst_29612 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29614__$1,inst_29612);
} else {
if((state_val_29615 === (12))){
var inst_29600 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29635_29668 = state_29614__$1;
(statearr_29635_29668[(2)] = inst_29600);

(statearr_29635_29668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (2))){
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29614__$1,(4),in$);
} else {
if((state_val_29615 === (23))){
var inst_29608 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29636_29669 = state_29614__$1;
(statearr_29636_29669[(2)] = inst_29608);

(statearr_29636_29669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (19))){
var inst_29595 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29637_29670 = state_29614__$1;
(statearr_29637_29670[(2)] = inst_29595);

(statearr_29637_29670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (11))){
var inst_29580 = (state_29614[(7)]);
var inst_29566 = (state_29614[(12)]);
var inst_29580__$1 = cljs.core.seq.call(null,inst_29566);
var state_29614__$1 = (function (){var statearr_29638 = state_29614;
(statearr_29638[(7)] = inst_29580__$1);

return statearr_29638;
})();
if(inst_29580__$1){
var statearr_29639_29671 = state_29614__$1;
(statearr_29639_29671[(1)] = (14));

} else {
var statearr_29640_29672 = state_29614__$1;
(statearr_29640_29672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (9))){
var inst_29602 = (state_29614[(2)]);
var inst_29603 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29614__$1 = (function (){var statearr_29641 = state_29614;
(statearr_29641[(15)] = inst_29602);

return statearr_29641;
})();
if(cljs.core.truth_(inst_29603)){
var statearr_29642_29673 = state_29614__$1;
(statearr_29642_29673[(1)] = (21));

} else {
var statearr_29643_29674 = state_29614__$1;
(statearr_29643_29674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (5))){
var inst_29558 = cljs.core.async.close_BANG_.call(null,out);
var state_29614__$1 = state_29614;
var statearr_29644_29675 = state_29614__$1;
(statearr_29644_29675[(2)] = inst_29558);

(statearr_29644_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (14))){
var inst_29580 = (state_29614[(7)]);
var inst_29582 = cljs.core.chunked_seq_QMARK_.call(null,inst_29580);
var state_29614__$1 = state_29614;
if(inst_29582){
var statearr_29645_29676 = state_29614__$1;
(statearr_29645_29676[(1)] = (17));

} else {
var statearr_29646_29677 = state_29614__$1;
(statearr_29646_29677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (16))){
var inst_29598 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29647_29678 = state_29614__$1;
(statearr_29647_29678[(2)] = inst_29598);

(statearr_29647_29678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (10))){
var inst_29567 = (state_29614[(10)]);
var inst_29569 = (state_29614[(11)]);
var inst_29574 = cljs.core._nth.call(null,inst_29567,inst_29569);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29614__$1,(13),out,inst_29574);
} else {
if((state_val_29615 === (18))){
var inst_29580 = (state_29614[(7)]);
var inst_29589 = cljs.core.first.call(null,inst_29580);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29614__$1,(20),out,inst_29589);
} else {
if((state_val_29615 === (8))){
var inst_29568 = (state_29614[(9)]);
var inst_29569 = (state_29614[(11)]);
var inst_29571 = (inst_29569 < inst_29568);
var inst_29572 = inst_29571;
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29572)){
var statearr_29648_29679 = state_29614__$1;
(statearr_29648_29679[(1)] = (10));

} else {
var statearr_29649_29680 = state_29614__$1;
(statearr_29649_29680[(1)] = (11));

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
});})(c__27153__auto__))
;
return ((function (switch__27041__auto__,c__27153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_29653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29653[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__);

(statearr_29653[(1)] = (1));

return statearr_29653;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1 = (function (state_29614){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29654){if((e29654 instanceof Object)){
var ex__27045__auto__ = e29654;
var statearr_29655_29681 = state_29614;
(statearr_29655_29681[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29682 = state_29614;
state_29614 = G__29682;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__ = function(state_29614){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1.call(this,state_29614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto__))
})();
var state__27155__auto__ = (function (){var statearr_29656 = f__27154__auto__.call(null);
(statearr_29656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto__);

return statearr_29656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto__))
);

return c__27153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29683 = [];
var len__25983__auto___29686 = arguments.length;
var i__25984__auto___29687 = (0);
while(true){
if((i__25984__auto___29687 < len__25983__auto___29686)){
args29683.push((arguments[i__25984__auto___29687]));

var G__29688 = (i__25984__auto___29687 + (1));
i__25984__auto___29687 = G__29688;
continue;
} else {
}
break;
}

var G__29685 = args29683.length;
switch (G__29685) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29683.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29690 = [];
var len__25983__auto___29693 = arguments.length;
var i__25984__auto___29694 = (0);
while(true){
if((i__25984__auto___29694 < len__25983__auto___29693)){
args29690.push((arguments[i__25984__auto___29694]));

var G__29695 = (i__25984__auto___29694 + (1));
i__25984__auto___29694 = G__29695;
continue;
} else {
}
break;
}

var G__29692 = args29690.length;
switch (G__29692) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29690.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29697 = [];
var len__25983__auto___29748 = arguments.length;
var i__25984__auto___29749 = (0);
while(true){
if((i__25984__auto___29749 < len__25983__auto___29748)){
args29697.push((arguments[i__25984__auto___29749]));

var G__29750 = (i__25984__auto___29749 + (1));
i__25984__auto___29749 = G__29750;
continue;
} else {
}
break;
}

var G__29699 = args29697.length;
switch (G__29699) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29697.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29752,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29752,out){
return (function (state_29723){
var state_val_29724 = (state_29723[(1)]);
if((state_val_29724 === (7))){
var inst_29718 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29725_29753 = state_29723__$1;
(statearr_29725_29753[(2)] = inst_29718);

(statearr_29725_29753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (1))){
var inst_29700 = null;
var state_29723__$1 = (function (){var statearr_29726 = state_29723;
(statearr_29726[(7)] = inst_29700);

return statearr_29726;
})();
var statearr_29727_29754 = state_29723__$1;
(statearr_29727_29754[(2)] = null);

(statearr_29727_29754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (4))){
var inst_29703 = (state_29723[(8)]);
var inst_29703__$1 = (state_29723[(2)]);
var inst_29704 = (inst_29703__$1 == null);
var inst_29705 = cljs.core.not.call(null,inst_29704);
var state_29723__$1 = (function (){var statearr_29728 = state_29723;
(statearr_29728[(8)] = inst_29703__$1);

return statearr_29728;
})();
if(inst_29705){
var statearr_29729_29755 = state_29723__$1;
(statearr_29729_29755[(1)] = (5));

} else {
var statearr_29730_29756 = state_29723__$1;
(statearr_29730_29756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (6))){
var state_29723__$1 = state_29723;
var statearr_29731_29757 = state_29723__$1;
(statearr_29731_29757[(2)] = null);

(statearr_29731_29757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (3))){
var inst_29720 = (state_29723[(2)]);
var inst_29721 = cljs.core.async.close_BANG_.call(null,out);
var state_29723__$1 = (function (){var statearr_29732 = state_29723;
(statearr_29732[(9)] = inst_29720);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29723__$1,inst_29721);
} else {
if((state_val_29724 === (2))){
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29723__$1,(4),ch);
} else {
if((state_val_29724 === (11))){
var inst_29703 = (state_29723[(8)]);
var inst_29712 = (state_29723[(2)]);
var inst_29700 = inst_29703;
var state_29723__$1 = (function (){var statearr_29733 = state_29723;
(statearr_29733[(10)] = inst_29712);

(statearr_29733[(7)] = inst_29700);

return statearr_29733;
})();
var statearr_29734_29758 = state_29723__$1;
(statearr_29734_29758[(2)] = null);

(statearr_29734_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (9))){
var inst_29703 = (state_29723[(8)]);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29723__$1,(11),out,inst_29703);
} else {
if((state_val_29724 === (5))){
var inst_29703 = (state_29723[(8)]);
var inst_29700 = (state_29723[(7)]);
var inst_29707 = cljs.core._EQ_.call(null,inst_29703,inst_29700);
var state_29723__$1 = state_29723;
if(inst_29707){
var statearr_29736_29759 = state_29723__$1;
(statearr_29736_29759[(1)] = (8));

} else {
var statearr_29737_29760 = state_29723__$1;
(statearr_29737_29760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (10))){
var inst_29715 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29738_29761 = state_29723__$1;
(statearr_29738_29761[(2)] = inst_29715);

(statearr_29738_29761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (8))){
var inst_29700 = (state_29723[(7)]);
var tmp29735 = inst_29700;
var inst_29700__$1 = tmp29735;
var state_29723__$1 = (function (){var statearr_29739 = state_29723;
(statearr_29739[(7)] = inst_29700__$1);

return statearr_29739;
})();
var statearr_29740_29762 = state_29723__$1;
(statearr_29740_29762[(2)] = null);

(statearr_29740_29762[(1)] = (2));


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
});})(c__27153__auto___29752,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29752,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29744[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29744[(1)] = (1));

return statearr_29744;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29723){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29745){if((e29745 instanceof Object)){
var ex__27045__auto__ = e29745;
var statearr_29746_29763 = state_29723;
(statearr_29746_29763[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29764 = state_29723;
state_29723 = G__29764;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29752,out))
})();
var state__27155__auto__ = (function (){var statearr_29747 = f__27154__auto__.call(null);
(statearr_29747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29752);

return statearr_29747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29752,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29765 = [];
var len__25983__auto___29835 = arguments.length;
var i__25984__auto___29836 = (0);
while(true){
if((i__25984__auto___29836 < len__25983__auto___29835)){
args29765.push((arguments[i__25984__auto___29836]));

var G__29837 = (i__25984__auto___29836 + (1));
i__25984__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var G__29767 = args29765.length;
switch (G__29767) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29765.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29839,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29839,out){
return (function (state_29805){
var state_val_29806 = (state_29805[(1)]);
if((state_val_29806 === (7))){
var inst_29801 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29807_29840 = state_29805__$1;
(statearr_29807_29840[(2)] = inst_29801);

(statearr_29807_29840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (1))){
var inst_29768 = (new Array(n));
var inst_29769 = inst_29768;
var inst_29770 = (0);
var state_29805__$1 = (function (){var statearr_29808 = state_29805;
(statearr_29808[(7)] = inst_29769);

(statearr_29808[(8)] = inst_29770);

return statearr_29808;
})();
var statearr_29809_29841 = state_29805__$1;
(statearr_29809_29841[(2)] = null);

(statearr_29809_29841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (4))){
var inst_29773 = (state_29805[(9)]);
var inst_29773__$1 = (state_29805[(2)]);
var inst_29774 = (inst_29773__$1 == null);
var inst_29775 = cljs.core.not.call(null,inst_29774);
var state_29805__$1 = (function (){var statearr_29810 = state_29805;
(statearr_29810[(9)] = inst_29773__$1);

return statearr_29810;
})();
if(inst_29775){
var statearr_29811_29842 = state_29805__$1;
(statearr_29811_29842[(1)] = (5));

} else {
var statearr_29812_29843 = state_29805__$1;
(statearr_29812_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (15))){
var inst_29795 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29813_29844 = state_29805__$1;
(statearr_29813_29844[(2)] = inst_29795);

(statearr_29813_29844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (13))){
var state_29805__$1 = state_29805;
var statearr_29814_29845 = state_29805__$1;
(statearr_29814_29845[(2)] = null);

(statearr_29814_29845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (6))){
var inst_29770 = (state_29805[(8)]);
var inst_29791 = (inst_29770 > (0));
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29791)){
var statearr_29815_29846 = state_29805__$1;
(statearr_29815_29846[(1)] = (12));

} else {
var statearr_29816_29847 = state_29805__$1;
(statearr_29816_29847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (3))){
var inst_29803 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29805__$1,inst_29803);
} else {
if((state_val_29806 === (12))){
var inst_29769 = (state_29805[(7)]);
var inst_29793 = cljs.core.vec.call(null,inst_29769);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29805__$1,(15),out,inst_29793);
} else {
if((state_val_29806 === (2))){
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29805__$1,(4),ch);
} else {
if((state_val_29806 === (11))){
var inst_29785 = (state_29805[(2)]);
var inst_29786 = (new Array(n));
var inst_29769 = inst_29786;
var inst_29770 = (0);
var state_29805__$1 = (function (){var statearr_29817 = state_29805;
(statearr_29817[(7)] = inst_29769);

(statearr_29817[(10)] = inst_29785);

(statearr_29817[(8)] = inst_29770);

return statearr_29817;
})();
var statearr_29818_29848 = state_29805__$1;
(statearr_29818_29848[(2)] = null);

(statearr_29818_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (9))){
var inst_29769 = (state_29805[(7)]);
var inst_29783 = cljs.core.vec.call(null,inst_29769);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29805__$1,(11),out,inst_29783);
} else {
if((state_val_29806 === (5))){
var inst_29769 = (state_29805[(7)]);
var inst_29778 = (state_29805[(11)]);
var inst_29773 = (state_29805[(9)]);
var inst_29770 = (state_29805[(8)]);
var inst_29777 = (inst_29769[inst_29770] = inst_29773);
var inst_29778__$1 = (inst_29770 + (1));
var inst_29779 = (inst_29778__$1 < n);
var state_29805__$1 = (function (){var statearr_29819 = state_29805;
(statearr_29819[(11)] = inst_29778__$1);

(statearr_29819[(12)] = inst_29777);

return statearr_29819;
})();
if(cljs.core.truth_(inst_29779)){
var statearr_29820_29849 = state_29805__$1;
(statearr_29820_29849[(1)] = (8));

} else {
var statearr_29821_29850 = state_29805__$1;
(statearr_29821_29850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (14))){
var inst_29798 = (state_29805[(2)]);
var inst_29799 = cljs.core.async.close_BANG_.call(null,out);
var state_29805__$1 = (function (){var statearr_29823 = state_29805;
(statearr_29823[(13)] = inst_29798);

return statearr_29823;
})();
var statearr_29824_29851 = state_29805__$1;
(statearr_29824_29851[(2)] = inst_29799);

(statearr_29824_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (10))){
var inst_29789 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29825_29852 = state_29805__$1;
(statearr_29825_29852[(2)] = inst_29789);

(statearr_29825_29852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (8))){
var inst_29769 = (state_29805[(7)]);
var inst_29778 = (state_29805[(11)]);
var tmp29822 = inst_29769;
var inst_29769__$1 = tmp29822;
var inst_29770 = inst_29778;
var state_29805__$1 = (function (){var statearr_29826 = state_29805;
(statearr_29826[(7)] = inst_29769__$1);

(statearr_29826[(8)] = inst_29770);

return statearr_29826;
})();
var statearr_29827_29853 = state_29805__$1;
(statearr_29827_29853[(2)] = null);

(statearr_29827_29853[(1)] = (2));


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
});})(c__27153__auto___29839,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29839,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29831[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29831[(1)] = (1));

return statearr_29831;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29805){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29832){if((e29832 instanceof Object)){
var ex__27045__auto__ = e29832;
var statearr_29833_29854 = state_29805;
(statearr_29833_29854[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29855 = state_29805;
state_29805 = G__29855;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29839,out))
})();
var state__27155__auto__ = (function (){var statearr_29834 = f__27154__auto__.call(null);
(statearr_29834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29839);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29839,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29856 = [];
var len__25983__auto___29930 = arguments.length;
var i__25984__auto___29931 = (0);
while(true){
if((i__25984__auto___29931 < len__25983__auto___29930)){
args29856.push((arguments[i__25984__auto___29931]));

var G__29932 = (i__25984__auto___29931 + (1));
i__25984__auto___29931 = G__29932;
continue;
} else {
}
break;
}

var G__29858 = args29856.length;
switch (G__29858) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29856.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27153__auto___29934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27153__auto___29934,out){
return (function (){
var f__27154__auto__ = (function (){var switch__27041__auto__ = ((function (c__27153__auto___29934,out){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29902_29935 = state_29900__$1;
(statearr_29902_29935[(2)] = inst_29896);

(statearr_29902_29935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (1))){
var inst_29859 = [];
var inst_29860 = inst_29859;
var inst_29861 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29900__$1 = (function (){var statearr_29903 = state_29900;
(statearr_29903[(7)] = inst_29861);

(statearr_29903[(8)] = inst_29860);

return statearr_29903;
})();
var statearr_29904_29936 = state_29900__$1;
(statearr_29904_29936[(2)] = null);

(statearr_29904_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29864 = (state_29900[(9)]);
var inst_29864__$1 = (state_29900[(2)]);
var inst_29865 = (inst_29864__$1 == null);
var inst_29866 = cljs.core.not.call(null,inst_29865);
var state_29900__$1 = (function (){var statearr_29905 = state_29900;
(statearr_29905[(9)] = inst_29864__$1);

return statearr_29905;
})();
if(inst_29866){
var statearr_29906_29937 = state_29900__$1;
(statearr_29906_29937[(1)] = (5));

} else {
var statearr_29907_29938 = state_29900__$1;
(statearr_29907_29938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (15))){
var inst_29890 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29908_29939 = state_29900__$1;
(statearr_29908_29939[(2)] = inst_29890);

(statearr_29908_29939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (13))){
var state_29900__$1 = state_29900;
var statearr_29909_29940 = state_29900__$1;
(statearr_29909_29940[(2)] = null);

(statearr_29909_29940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var inst_29860 = (state_29900[(8)]);
var inst_29885 = inst_29860.length;
var inst_29886 = (inst_29885 > (0));
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29886)){
var statearr_29910_29941 = state_29900__$1;
(statearr_29910_29941[(1)] = (12));

} else {
var statearr_29911_29942 = state_29900__$1;
(statearr_29911_29942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (12))){
var inst_29860 = (state_29900[(8)]);
var inst_29888 = cljs.core.vec.call(null,inst_29860);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(15),out,inst_29888);
} else {
if((state_val_29901 === (2))){
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(4),ch);
} else {
if((state_val_29901 === (11))){
var inst_29864 = (state_29900[(9)]);
var inst_29868 = (state_29900[(10)]);
var inst_29878 = (state_29900[(2)]);
var inst_29879 = [];
var inst_29880 = inst_29879.push(inst_29864);
var inst_29860 = inst_29879;
var inst_29861 = inst_29868;
var state_29900__$1 = (function (){var statearr_29912 = state_29900;
(statearr_29912[(7)] = inst_29861);

(statearr_29912[(8)] = inst_29860);

(statearr_29912[(11)] = inst_29878);

(statearr_29912[(12)] = inst_29880);

return statearr_29912;
})();
var statearr_29913_29943 = state_29900__$1;
(statearr_29913_29943[(2)] = null);

(statearr_29913_29943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var inst_29860 = (state_29900[(8)]);
var inst_29876 = cljs.core.vec.call(null,inst_29860);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(11),out,inst_29876);
} else {
if((state_val_29901 === (5))){
var inst_29861 = (state_29900[(7)]);
var inst_29864 = (state_29900[(9)]);
var inst_29868 = (state_29900[(10)]);
var inst_29868__$1 = f.call(null,inst_29864);
var inst_29869 = cljs.core._EQ_.call(null,inst_29868__$1,inst_29861);
var inst_29870 = cljs.core.keyword_identical_QMARK_.call(null,inst_29861,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29871 = (inst_29869) || (inst_29870);
var state_29900__$1 = (function (){var statearr_29914 = state_29900;
(statearr_29914[(10)] = inst_29868__$1);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29871)){
var statearr_29915_29944 = state_29900__$1;
(statearr_29915_29944[(1)] = (8));

} else {
var statearr_29916_29945 = state_29900__$1;
(statearr_29916_29945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (14))){
var inst_29893 = (state_29900[(2)]);
var inst_29894 = cljs.core.async.close_BANG_.call(null,out);
var state_29900__$1 = (function (){var statearr_29918 = state_29900;
(statearr_29918[(13)] = inst_29893);

return statearr_29918;
})();
var statearr_29919_29946 = state_29900__$1;
(statearr_29919_29946[(2)] = inst_29894);

(statearr_29919_29946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29883 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29920_29947 = state_29900__$1;
(statearr_29920_29947[(2)] = inst_29883);

(statearr_29920_29947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29860 = (state_29900[(8)]);
var inst_29864 = (state_29900[(9)]);
var inst_29868 = (state_29900[(10)]);
var inst_29873 = inst_29860.push(inst_29864);
var tmp29917 = inst_29860;
var inst_29860__$1 = tmp29917;
var inst_29861 = inst_29868;
var state_29900__$1 = (function (){var statearr_29921 = state_29900;
(statearr_29921[(7)] = inst_29861);

(statearr_29921[(8)] = inst_29860__$1);

(statearr_29921[(14)] = inst_29873);

return statearr_29921;
})();
var statearr_29922_29948 = state_29900__$1;
(statearr_29922_29948[(2)] = null);

(statearr_29922_29948[(1)] = (2));


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
});})(c__27153__auto___29934,out))
;
return ((function (switch__27041__auto__,c__27153__auto___29934,out){
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29900){
while(true){
var ret_value__27043__auto__ = (function (){try{while(true){
var result__27044__auto__ = switch__27041__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27044__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object)){
var ex__27045__auto__ = e29927;
var statearr_29928_29949 = state_29900;
(statearr_29928_29949[(5)] = ex__27045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29950 = state_29900;
state_29900 = G__29950;
continue;
} else {
return ret_value__27043__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
;})(switch__27041__auto__,c__27153__auto___29934,out))
})();
var state__27155__auto__ = (function (){var statearr_29929 = f__27154__auto__.call(null);
(statearr_29929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27153__auto___29934);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27155__auto__);
});})(c__27153__auto___29934,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479258316758