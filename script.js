/*var image = ["http://i.imgur.com/gsFXQn3.png?1", "http://i.imgur.com/5BtlSUe.png", "http://i.imgur.com/LvCJHaY.png", "http://i.imgur.com/OPHvidH.jpg", "http://i.imgur.com/oZIddbA.png", "http://i.imgur.com/4ytSMSf.png", "http://i.imgur.com/0CcbGx5.png", "http://i.imgur.com/Z1XZPfG.png", "http://i.imgur.com/VLj8GAI.png", "http://i.imgur.com/RMRCvi2.png", "http://i.imgur.com/LFygwda.jpg", "http://i.imgur.com/tpwDNrC.png", "http://i.imgur.com/9m41jxR.png", "http://i.imgur.com/2TjVoXt.jpg", "http://i.imgur.com/uyettql.png", "http://i.imgur.com/4zfvQwc.png", "http://i.imgur.com/M9Pxmcu.png", "http://i.imgur.com/WcXaiAw.jpg", "http://i.imgur.com/PXhGWMP.jpg", "http://i.imgur.com/C1QcA8r.png", "http://i.imgur.com/mx7cIj2.png", "http://i.imgur.com/qiI8pZa.png", "http://i.imgur.com/G4A5wKJ.png"];

var size = image.length
var x = Math.floor(size*Math.random())
$('.previmg_ev').attr('src', image[x]);
*/

//EmmaVera
$('#ev').click(function() { 
	$('.evintro').slideToggle(650);
	$('#evimg').slideToggle(650);
});
$('#emma').click(function() { 
	$('.eintro').slideToggle(650);
	$('#eimg').slideToggle(650);
});
$('#vera').click(function() { 
	$('.vintro').slideToggle(650);
	$('#vimg').slideToggle(650);
});
//Yuri Bakery
$('#yb').click(function() { 
	$('.ybintro').slideToggle(650);
	$('#ybimg').slideToggle(650);
});
$('#bridget').click(function() { 
	$('.bintro').slideToggle(650);
	$('#bimg').slideToggle(650);
});
$('#jay').click(function() { 
	$('.jintro').slideToggle(650);
	$('#jimg').slideToggle(650);
});
//Librarians
$('#libr1').click(function() { 
	$('#nao').slideToggle(0);
	if($(this).is('.radius')){$(this).removeClass('radius'); return;}
	if($(this).not('.radius')){$(this).addClass('radius'); return;}
});
$('#libr2').click(function() { 
	$('#momoka').slideToggle(0);
	if($(this).is('.radius')){$(this).removeClass('radius'); return;}
	if($(this).not('.radius')){$(this).addClass('radius'); return;}
});
$('#libr3').click(function() { 
	$('#misc').slideToggle(0);
	if($(this).is('.radius')){$(this).removeClass('radius'); return;}
	if($(this).not('.radius')){$(this).addClass('radius'); return;}
});
