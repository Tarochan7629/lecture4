<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<script>
function frac(bunshi,bunbo){
	var bunsu = {
		bunshi:bunshi,
		bunbo:bunbo
	};
	return bunsu;
};

function multiply(a,b){
	var bunshi;
	var bunbo;
	
	if(Number.isInteger(a)){
		a = frac(a,1);
	}
	if(Number.isInteger(b)){
		b = frac(b,1);
	}
	
	var bunsu = {
		bunshi:a.bunshi * b.bunshi,
		bunbo:a.bunbo * b.bunbo
	}
	
	return yakubun(bunsu);
}
function yakubun (bunsu){
	var bunshi = bunsu.bunshi;
	var bunbo = bunsu.bunbo;
	var koyakusu = 1;
	if(bunshi<bunbo){
		for(var i = 2; i<=bunshi; i++){
			if(bunshi % i ===0){
				if(bunbo % i ===0){
					koyakusu = i;
				}
			}
		}
	}
	else{
		for(var i = 2; i<=bunbo; i++){
			if(bunbo % i ===0){
				if(bunshi % i ===0){
					koyakusu = i;
				}
			}
		}
	}
	return {
		bunshi:bunshi/koyakusu,
		bunbo:bunbo/koyakusu
	};
}


</script>
</body>
</html>