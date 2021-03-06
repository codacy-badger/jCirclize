(function( $ ){
	$.fn.circlize = function(options) {
		var defaults = {
			radius: 100,
			perc: 50,
			background: "rgba(20,20,20,0.5)",
			foreground: "#1a1a1a",
			stroke: 20
		};
		var opts = $.extend(true ,{}, defaults, options );
		return this.each(function() {
			var angle = opts.perc === 100 ? 2 : 2 - (opts.perc/100) * 2;
			var box = (Math.PI*(opts.radius));
			var x = box/2;
			var y = box/2;
			var html = "<canvas class=\"circle lol\" width="+box+" height="+box+"></canvas>" + 
						"<canvas class=\"circle sad\" width="+box+" height="+box+"></canvas>" +
						"<div class=\"percentage\">"+ opts.perc +"%</div>";
			$(this).append(html);
			$(this).addClass("canvasized");
			var cnv = $(this).children(".circle");
			var context = $(cnv)[0].getContext("2d");
			context.beginPath();
			context.arc(x, y, opts.radius, angle*Math.PI, 0);
			context.fillStyle = "transparent";
			context.fill();
			context.strokeStyle = opts.foreground;
			context.lineWidth = opts.stroke;
			context.stroke();
			var ctn = $(cnv)[1].getContext("2d");
			ctn.beginPath();
			ctn.arc(x, y, opts.radius, 0*Math.PI, 2*Math.PI);
			ctn.fillStyle = "transparent";
			ctn.fill();
			ctn.strokeStyle = opts.background;
			ctn.lineWidth = opts.stroke;
			ctn.stroke();
		});
	};
})( jQuery );
