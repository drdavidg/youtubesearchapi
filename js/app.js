$(function(){

	var searchTerm = "cats";
	$.getJSON('https://www.googleapis.com/youtube/v3/search',
	 {part: 'snippet', key: 'AIzaSyDClnxGpMTvrFgWJictXRbGa106oRO3oME', q:searchTerm},
	 function(data) {
			/*optional stuff to do after success */
			//console.log(data);
			//try to find thumbnail image url
			//console.log(data.items[0].snippet.title);
			var url = data.items[0].snippet.thumbnails.default.url;
			//console.log(url);
			displayResults(data.items);

	});

	function displayResults(content) {
		var html = "";
		$.each(content, function(index, value) {
			//console.log(content);
			var url = value.snippet.thumbnails.default.url;
			html += "<img src='" + url + "' >";
			console.log(url);
			$('.container').html(html);
		});

	}
});
