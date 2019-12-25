const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "jquery",
				weight: 12.3
			}, {
				text: "css3",
				weight: 7
			}, {
				text: "javascript",
				weight: 12
			}, {
				text: "nodejs",
				weight: 11.4
            }, {
				text: "html5",
				weight: 9
			}, {
				text: "PYTHON",
				weight: 15
			}, {
				text: "java",
				weight: 10
			}, {
				text: "SQL",
				weight: 12
			}, {
				text: "C++",
				weight: 12
			}, {
				text: "Django",
				weight: 12
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modl form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code", "take up complex problems", "and turn them into" ,"simple solutions."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
