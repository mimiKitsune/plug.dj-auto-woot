setInterval(function(){
	var woot = $('#woot')
	if (!woot.hasClass('selected')) {
		woot.click()
	}

 }, 1000);