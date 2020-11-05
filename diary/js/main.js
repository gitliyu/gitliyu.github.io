var content = $('.cbp_tmtimeline');
data.forEach(function(item, index){
	var icon = ['phone', 'screen', 'mail', 'earth'][index % 4];
	var date = item.date.split(' ');
	var diary = '<div>'
	+ '<time class="cbp_tmtime">'
	+ '<span>'+ date[0] +'</span><span>'+ date[1] +'</span></time>'
	+ '<div class="cbp_tmicon cbp_tmicon-'+ icon +'"></div>'
	+ '<div class="cbp_tmlabel">';
	if (item.title) {
		diary += '<h2>'+ item.title +'</h2>'
	}
	diary += item.text + '</div></div>';
	content.prepend(diary)
})		