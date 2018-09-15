var name="window";
var b={
	bbb:function(){
		// name="linlin";
		return function(){
			alert(name);
		}

	}
}
var a={
  name:"bobo",
  aaa:b.bbb()
};
a.aaa();