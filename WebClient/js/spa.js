var page = ["#home", "#contact","#about", "#searchpage", "#phone", "#laptop", "#tablet", "#cart", "#help", "#account", "#addproduct", "#customeract", "#addstaff", "#updateproduct", "#deleteproduct"];
var curPage = page[0];

$(document).ready(function(){
   var newPage = getPage(window.location.hash);
   render(newPage);

$('footer a').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });

$('li a').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });

$('right-menu a').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });

$('#searchbtn').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#search').keyup(function(e){
	e.preventDefault();
	if(e.which == 13){
		var newPage = $(this).attr('href');
		window.location.hash=newPage;
	}
   });

$('#cartbtn').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });

$('#accountbtn').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#editact').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#addprod').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#editcustomer').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#addstaffbtn').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#updateprod').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#deleteprod').click(function(e){
	e.preventDefault();
	var newPage = $(this).attr('href');
	window.location.hash=newPage;
   });

$('#total').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });

$(window).on('hashchange', function(){
       var newPage = getPage(window.location.hash);
       render(newPage);
   });

});

function render(newPage){
    if (newPage == curPage) return;
    $(curPage).hide();
    $(newPage).show();
    curPage = newPage; 
}

function getPage(hash){
   var i = page.indexOf(hash);
   if (i<0 && hash != "") window.location.hash=page[0]; 
   return i < 1 ? page[0] : page[i];
}
