$(document).ready(function(){

	myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			m4a:"mp4/" + bible.ot_nt + "/" + bible.bookMP4Prefix + "-01.mp3",
		},
	], {
		swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
		supplied: "m4a",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true,
	});
	
	for (var i=2; i<=bible.numChapters; i++)
	{
		media_file_index = i;
		if (i < 10) { media_file_index = '0' + i; }
		media_file = "mp4/" + bible.ot_nt + "/" + bible.bookMP4Prefix + "-" + media_file_index + ".mp3";
		myPlaylist.add({
		  m4a: media_file,
		});	
	}
	
	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		if ($(this).attr("rel") != undefined) {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).attr("rel"); 
			$("#"+activeTab).fadeIn(); 
		}
		else if ($(this).hasClass("fontplus")) {
			var currentSize = $('#verses').css('font-size');
			var currentSize = parseFloat(currentSize)*1.2;
			$('#verses').css('font-size', currentSize);
		}
		else if ($(this).hasClass("fontminus")) {
			var currentSize = $('#verses').css('font-size');
			var currentSize = parseFloat(currentSize)*0.8;
			$('#verses').css('font-size', currentSize);
		}
	});

	
	
	//highlight buttons
	$('.menu > li').hover(
        function(){
			$(this).addClass('on');
        },
        function(){
			$(this).removeClass('on');
        }
    );
	
	$('#verses h3').each(function() {
		$(this).append('<span><img src="./Images/play-bttn.jpg" /></span>');
	});
		
	$('#verses h3').click(function() {
		var oh3txt = $(this).html();
		var nh3txt = oh3txt.replace(/play\-bttn\.jpg/, 'ajax-loader.gif');
		$(this).html(nh3txt);
		var patt = new RegExp(bible.chapterSuffix);
		if ($(this).attr('id').match(patt)) { 
			var media_file_index = ($(this).attr('id')).substr(0, ($(this).attr('id')).length - (bible.chapterSuffix).length);
			media_file_index = media_file_index.match(/(\d+)/g);
			media_file_index -= 1;
			myPlaylist.play(media_file_index);
			//$(this).html(oh3txt);
			var $this = jQuery(this);
			setTimeout( function(){ $this.html(oh3txt); }, 3000);
		}
	});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47309649-1', '172.52.106.106');
  ga('send', 'pageview');


});
