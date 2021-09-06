function fn1(){}
function fn2(name = 1){}
function fn3(a,b,c){}
function fn4(a,b,c=2){}
function fn5(a,b=1,c=2){}
function fn6(a,b=1,c){}
function fn7(a=1,b=1,c){}


function logFnLen(fn){
  console.log(`function :${fn.name}.length  is ${fn.length}`)
}

logFnLen(fn1) //0
logFnLen(fn2)// 0
logFnLen(fn3) //3
logFnLen(fn4) //2
logFnLen(fn5) //1
logFnLen(fn6) //1
logFnLen(fn7) //0

logFnLen(123['toString'])