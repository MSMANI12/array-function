let arry=[1,2,3,4,5,6,7,8]
var total=0;
for(i=0;i<arry.length;i++){
	document.write(total+=arry[i]);
	
	
}
document.write(total);
document.write("<br>")


let arr=[1,2,3,4,5,6,7,8]
function calsum(arr){
	var total=0;
	for(i=0;i<arr.length;i++){
		total+=arr[i]/arr.length
	}
	return total
}

	document.write(calsum(arr));

