(() => {
	var r = {
			956: r => {
				r.exports = {
					alertt: () => {
						alert("ok")
					}
				}
			}
		},
		t = {};

	function e(o) {
		var a = t[o];
		if (void 0 !== a) return a.exports;
		var s = t[o] = {
			exports: {}
		};
		return r[o](s, s.exports, e), s.exports
	}(() => {
		const {
			alertt: r
		} = e(956);
		r()
	})()
})();