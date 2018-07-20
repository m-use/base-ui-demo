$(document).ready(function() {

	// Next input on 'Enter'
	$('input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $(this).next('input').focus();
    }
	});

	$('input').blur(function() {
		var inputValue = $(this).val(),
			cssProperty = $(this).attr("data-css-property"),
			element = $(this).attr("data-element");
		updateCSS(inputValue, element, cssProperty);
		// injectStyles('.' + element + '{' + cssProperty + ':' + inputValue + ';}');
	})

	// Function to inject style
	function injectStyles(rule) {
		console.log(rule);
	  $('h1').prepend('hi');
	}

	// Function to update CSS
	function updateCSS(pInputValue, pElementClass, pCssProperty) {		
		var elementClass = '.' + pElementClass;

	  $(elementClass).css({
	  	[pCssProperty]: pInputValue
	  });
	}
});