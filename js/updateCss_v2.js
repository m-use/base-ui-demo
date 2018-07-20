$(document).ready(function() {
	// Next input on 'Enter'
	$('input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $(this).next('input').focus();
    }
	});

	createPlaceholders();
	injectCss();

	// Update CSS on user input
	$('input').focusout(function() {
		var inputValue = $(this).val();
		$(this).attr('data-css-value', inputValue);

		injectCss();
	});

	// Create input placeholders
	function createPlaceholders() {
		$('input').each(function(index) {
			var cssValue = $(this).attr('data-css-value');

			$(this).attr("placeholder", cssValue);
		});
	}

	// Collect all data-element values
	function collectClasses() {
		var classesArray = [];
		$('input').each(function(index) {
			var element = $(this).attr('data-element');
			if(index == 0) {
				classesArray.push(element);
			} else {
				$.each(classesArray, function(index,value) {
					if(value == element) {
						return false;
					} else {
						classesArray.push(element);
					}
				});
			}
		});
		return classesArray;
	}


	// Function to create style tag
	function injectCss() {

		// Remove existing CSS created with this function
		if($("#css").length) {
	    $("#css").remove();
		}

		var classesArray = collectClasses(),
			classRulesArray = [[],[]],
			rulesArray = [],
			rulesArrayTwo = [],
			css = "";

		$.each(classesArray, function( classesArrayIndex, classesArrayValue ) {

			rulesArray[classesArrayIndex] = "." + classesArrayValue + " { ";

			// FOR EACH LOOKS AT DATA-ELEMENT NUMBER ONLY
			$('input[data-element="'+ classesArrayValue +'"]').each(function(inputIndex) {

				var cssProperties = $(this).attr('data-css-property').split(","),
					cssValue = $(this).attr('data-css-value');

				$.each(cssProperties, function( index, value ) {
					var cssProperty = $.trim(value);
					classRulesArray[classesArrayIndex].push([cssProperty, cssValue]);

					console.log(classesArrayValue);
					console.log(inputIndex);

					rulesArray[classesArrayIndex] = rulesArray[classesArrayIndex].concat(classRulesArray[classesArrayIndex][inputIndex][0] + ": " + classRulesArray[classesArrayIndex][inputIndex][1] + "; ");
				})
			});

			rulesArray[classesArrayIndex] = rulesArray[classesArrayIndex].concat("}");
		});

		console.log('END LOOP HERE!!!!!!!!!!');

		$.each(classRulesArray, function(index) {
			console.log(index + ": " + classRulesArray[index] + '\n');
		})

		// Appends style tag with combined CSS rules to <head>
		css = rulesArray.join(' ');
		$('<style id="css">' + css + '</style>').appendTo('head');
	}
});