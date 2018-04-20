function fetchJson() {
	let newData;
	$.get( "https://jsonplaceholder.typicode.com/photos", function( data ) {
	 
	 newData = data;
	 console.log($.parseJSON(newData));
	});

	

}