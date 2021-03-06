

/****************************************** */
// call 和 apply 的功能相同，都是改变 this 的执行，并立即执行函数。区别在于传参方式不同。
// func.call(thisArg, arg1, arg2, ...)：第一个参数是 this 指向的对象，其它参数依次传入。
// func.apply(thisArg, [argsArray])：第一个参数是 this 指向的对象，第二个参数是数组或类数组。

var a = {};
Array.prototype.push.call(a, '5','6');
console.log(a);
Array.prototype.push.apply(a, ['5','6']);
console.log(a);
