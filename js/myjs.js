require(['jquery'], function ($){
	(function($){
		var href = window.location.href.split('/');
		if(href[href.length-2] == 'about'){
			var html = $('.article-entry p').text();
			$('.article-entry p').empty();
		    var arr = html.split('');
		    var n=1;
		    var timer = setInterval(function(){
		    	var text = '';
		    	for(var i=0;i<n;i++){
		    		var item = arr[i];
		    		item = item == '/' ? '</br>' : item;
		    		text += item;
		    	}
		    	n++;
		    	if(n<=arr.length) text += '_';
		    	else clearInterval(timer);
		    	$('.article-entry p').empty().html(text);
		    },100);
		}
	})($)
});
