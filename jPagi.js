;(function($)
{
	$.fn.jPagi=function(options)
	{
		var opts = $.extend({}, $.fn.jPagi.defaults, options);
		
		//getting the amount of elements inside content div
		var number_of_items = $(this).children().size();
		//calculate the number of pages we are going to have
		var number_of_pages = Math.ceil(number_of_items/opts.show_per_page);

		nav_btns_holder = '.jpagi-nav-btns';
		var $this=$(this);

		//create hidden input elements to hold page number and other values
		$this.after("<input type='hidden' id='jPagiCurrentPage' /><input type='hidden' id='jPagiShowPerPage' /><input type='hidden' id='jPagiShowMaxNav' /><input type='hidden' id='jPagiTotalPages' /><input type='hidden' id='jPagiEndOffset' /><input type='hidden' id='jPagiStartOffset' />");


		//set the value of our hidden input fields
			$('#jPagiCurrentPage').val(0);
			$('#jPagiShowPerPage').val(opts.show_per_page);
			$('#jPagiShowMaxNav').val(opts.show_nav_btns);
			$('#jPagiTotalPages').val(number_of_pages);
			start_offset=0;
			end_offset=start_offset+parseInt(opts.show_nav_btns);
			$('#jPagiStartOffset').val(start_offset);
			$('#jPagiEndOffset').val(end_offset);
			obj=$(this);
			
			var navigation_html = '<a class="jpagi_previous_link jpagi-btn-inactive" href="#" onclick="jQuery.jPagi.previous();return false;">Previous</a>';
			var current_link = 0;
			var style='';
			while(number_of_pages > current_link){
			if(current_link>=opts.show_nav_btns){
			
			style=' style="display:none" ';
			}
			navigation_html += '<a '+style+' class="jpagi-page-link" href="#" onclick="jQuery.jPagi.show_page(' + current_link +');return false;" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
			current_link++;
		}
		navigation_html += '<a class="jpagi_next_link jpagi-btn-active" href="#" onclick="jQuery.jPagi.next();return false;">Next</a>';
		
		$(nav_btns_holder).html(navigation_html);
		
		//add jpagi_active_page class to the first page link
		$(nav_btns_holder+'').find('.jpagi-page-link:first').addClass('jpagi_active_page');
		return this.each(function()
		{			
			//hide all the elements inside content div
			$(this).children().css('display', 'none');
			
			//and show the first n (show_per_page) elements
			$(this).children().slice(0, opts.show_per_page).css('display', 'block');
			
		});
		
	}

	
	$.jPagi = {};
	
	$.jPagi.previous=function(obj){
	
	new_page = parseInt($('#jPagiCurrentPage').val()) - 1;
	//if there is an item before the current active link run the function
	if($('.jpagi_active_page').prev('.jpagi-page-link').length==true){
		//go_to_page(new_page);
	}
	go_to_page(new_page);
	if(new_page==(parseInt($('#jPagiStartOffset').val())-1))
	{
		
		if(new_page==-1)
		{
			return;
		}else
		{
			
			render_prev_nav(obj,new_page);
		}
	}
	
	
}

$.jPagi.show_page = function(page_num){
	go_to_page(page_num);
	return false;
}

 
$.jPagi.next=function(){
	new_page = parseInt($('#jPagiCurrentPage').val()) + 1;
	//if there is an item after the current active link run the function
	if($('.jpagi_active_page').next('.jpagi-page-link').length==true){
	
	}
	go_to_page(new_page);
	if(new_page==(parseInt($('#jPagiEndOffset').val())))
	{
		if(new_page==parseInt($('#jPagiTotalPages').val()))
		{
			return;
		}else
		{
			
			render_nav(obj,new_page);
		}
	}
	
}
 
function render_prev_nav(obj,page_num)
{	
	++page_num;	
	css='';
	start_offset=page_num-parseInt($('#jPagiShowMaxNav').val());
	end_offset=page_num;
	$('#jPagiEndOffset').val(end_offset);
	$('#jPagiStartOffset').val(start_offset);
	var prev_link_class='jpagi_previous_link';
	if(page_num!=0)
	{
		prev_link_class='jpagi_previous_link jpagi-btn-active';
	}
	var navigation_html = '<a class="'+prev_link_class+'" '+css+' href="#" onclick="jQuery.jPagi.previous();return false;">Previous</a>';
	current_link=start_offset;
	no_of_pages=parseInt($('#jPagiTotalPages').val());	
	style='';	
	while(end_offset > current_link){		
		link_class='class="jpagi-page-link"';
		if(current_link==(page_num-1))
		{
			link_class='class="jpagi-page-link jpagi_active_page"';
		}
		
		navigation_html += '<a '+style+' '+link_class+'  href="#" onclick="jQuery.jPagi.show_page(' + current_link +');"  longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
		current_link++;
	}
	navigation_html += '<a class="jpagi_next_link jpagi-btn-active" href="#" onclick="jQuery.jPagi.next();return false;">Next</a>';
	
	$(nav_btns_holder).html(navigation_html);
	
}
 
function render_nav(obj,page_num)
{
	
	style='';
	css='';
	nxt_css='';
	end_offset=page_num+parseInt($('#jPagiShowMaxNav').val());
	start_offset=page_num;
	$('#jPagiEndOffset').val(end_offset);
	$('#jPagiStartOffset').val(start_offset);
	var prev_link_class='jpagi_previous_link';
	var next_link_class='jpagi_next_link jpagi-btn-active';

	if(page_num!=0)
	{
		prev_link_class='jpagi_previous_link jpagi-btn-active';
	}
	
	if(page_num==parseInt($('#jPagiTotalPages').val())-1)
	{
		next_link_class='jpagi_next_link jpagi-btn-inactive'
	}

	var navigation_html = '<a class="'+prev_link_class+'" '+css+' href="#" onclick="jQuery.jPagi.previous();return false;">Previous</a>';
	current_link=start_offset;
	no_of_pages=parseInt($('#jPagiTotalPages').val())
	
	style='';
	
	while(end_offset > current_link){
		if(current_link>=no_of_pages){
		
		style=' style="display:none" ';
		}
		link_class='class="jpagi-page-link"';
		if(current_link==page_num)
		{
			link_class='class="jpagi-page-link jpagi_active_page"';
			
		}
		navigation_html += '<a '+style+' '+link_class+' href="javascript:jQuery.jPagi.show_page('+ current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
		current_link++;
	}
	navigation_html += '<a class="'+next_link_class+'" '+nxt_css+' href="#" onclick="jQuery.jPagi.next();return false;">Next</a>';
	
	$(nav_btns_holder).html(navigation_html);
	
}

function go_to_page(page_num){
	
	//get the number of items shown per page
	
	if(page_num==parseInt($('#jPagiTotalPages').val()))
	{		
		return false;
	}

	if(page_num==-1)
	{
		return false;
	}

	if(page_num==0)
	{
		$("a.jpagi_previous_link").addClass('jpagi-btn-inactive');
	}else
	{
		$("a.jpagi_previous_link").removeClass('jpagi-btn-inactive').addClass('jpagi-btn-active');
	}

	if(page_num==parseInt($('#jPagiTotalPages').val())-1)
	{
		$("a.jpagi_next_link").addClass('jpagi-btn-inactive');
	}else
	{
		$("a.jpagi_next_link").removeClass('jpagi-btn-inactive').addClass('jpagi-btn-active');
	}
	var show_per_page = parseInt($('#jPagiShowPerPage').val());
	
	//get the element number where to start the slice from
	start_from = page_num * show_per_page;
	
	//get the element number where to end the slice
	end_on = start_from + show_per_page;
	
	//hide all children elements of content div, get specific items and show them
	obj.children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
	
	//get the page link that has longdesc attribute of the current page and add jpagi_active_page class to it and remove that class from previously active page link
	$('.jpagi-page-link[longdesc=' + page_num +']').addClass('jpagi_active_page').siblings('.jpagi_active_page').removeClass('jpagi_active_page');
	
	//update the current page input field
	$('#jPagiCurrentPage').val(page_num);
	
};

$.fn.jPagi.defaults = {
	  show_per_page: 5,
	  show_nav_btns: 4,
	}
	
})(jQuery);