var f1 = function(){
  console.log(1+1);
  console.log(1+2);
}

var a = [f1];
a[0]();

var o = {
  func:f1
}
o.func();
