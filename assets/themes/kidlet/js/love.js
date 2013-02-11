(function(a) {
	a.fn.typewriter = function() {
		this.each(function() {
			var d = a(this),
				c = d.html(),
				b = 0;
			d.html("");
			var e = setInterval(function() {
				var f = c.substr(b, 1);
				if (f == "<") {
					b = c.indexOf(">", b) + 1
				} else {
					b++
				}
				d.html(c.substring(0, b) + (b & 1 ? "<span style=color:#75715e;>_</span>" : ""));	
				if (b >= c.length) {
					clearInterval(e)
				}
			}, 150)
		});
		return this
	}
})(jQuery);

function timeElapse(c) {
	var e = Date();
	var f = (Date.parse(e) - Date.parse(c)) / 1000;
	var g = Math.floor(f / (3600 * 24));
	f = f % (3600 * 24);
	var b = Math.floor(f / 3600);
	if (b < 10) {
		b = "0" + b
	}
	f = f % 3600;
	var d = Math.floor(f / 60);
	if (d < 10) {
		d = "0" + d
	}
	f = f % 60;
	if (f < 10) {
		f = "0" + f
	}
	var a = '<span class="digit">' + g + '</span> days <span class="digit">' + b + '</span> hours <span class="digit">' + d + '</span> minutes <span class="digit">' + f + "</span> seconds";
	$("#TimeForUs").html(a)
}
