$(function(){

	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		$.getJSON('https://www.googleapis.com/youtube/v3/search',
		 {part: 'snippet', key: 'AIzaSyDClnxGpMTvrFgWJictXRbGa106oRO3oME', q:searchTerm},
		 function(data) {
				displayResults(data.items);
				//console.log(data);
		});
	});


	function displayResults(content) {
		var html = "";
		$.each(content, function(index, value) {
			console.log(content);
			var url = value.snippet.thumbnails.default.url;
			var vidID = value.id.videoId;
			html += "<a target='_blank' href='https://www.youtube.com/watch?v=" + vidID + "'> <img class='thumbnails' src='" + url + "' ></a>";
			//console.log(url);
			$('.videos').html(html);
		});

	}
});
