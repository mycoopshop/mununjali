(function($){
		$(window).on('load', function(){
			 $("#instafeed-loader").show();
			$.instagramFeed({
		'username': document.getElementById("instafeedinsusername").value,
		'container': "#instagram-feed-v1",
		'display_profile': parseFloat(document.getElementById("instafeedprofile").value),
        'display_biography': parseFloat(document.getElementById("instafeedbiography").value),
        'display_gallery': parseFloat(document.getElementById("instafeedgallery").value),
        'display_captions': parseFloat(document.getElementById("instafeedcaptions").value),
        'display_igtv': parseFloat(document.getElementById("instafeedigtv").value),     
        'callback': null,
        'styling': true,
        'items': parseFloat(document.getElementById("no_item").value),
        'items_per_row': parseFloat(document.getElementById("no_row").value),
        'margin': document.getElementById("no_margin").value,
        'lazy_load': document.getElementById("instafeedlazy_load").value,
        'cache_time': parseFloat(document.getElementById("instafeedcache_time").value)
			});
		});
	})(jQuery);	
