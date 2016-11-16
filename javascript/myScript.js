function beginer(all){
	$("#matter").html("Loading...");
	$("#matsec").html("");
		var obj = JSON.parse(all);
		var len = obj.albums.length;
		for(var i=0;i<len;i++){
			var k = obj.albums[i];
			var str = "<div class='card'><img src='images/"+k.image+"' class='album_image' width='50%'><div class='abt'><span class='bold'>"+k.title+"</span><br><span class='light'>"+k.by+"</span><br><span class='light'>Rating"+k.rating+"</span><br><br><span class='light ma'>"+k.data+"</span><br><hr><span class='light'>"+k.likes+"</span></div></div>"
			$("#matsec").append(str);			
		}
}

$(document).ready(function() {
	var all = '{'+
		'"albums":['+
			'{"title":"Act it like","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"Act it like","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"Act it like","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"Act it like","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"Act it like","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"}'+
		']'+
	'}';
	var business = '{'+
		'"albums":['+
			'{"title":"bus 1","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"bus 2","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"bus 3","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"bus 4","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"},'+
			'{"title":"bus 5","by":"xxx","rating":"4","data":"asdfghjkkgfdfsiuyfudghhuytfcvbjugfvbnjhg","likes":"4","image":"album.jpg"}'+
		']'+
	'}';
	beginer(all);
	$('#dropDownButton').click(function() {
		$('#dropDown').toggle();
	});
	$("#all").click(function(){
		beginer(all);
	});
	$("#business").click(function(){
		beginer(business);
	})
});