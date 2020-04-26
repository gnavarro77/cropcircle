var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		displayTraceRegulateur: true
	},
	methods: {
		displayTraceRegulateurValueChangeHandler: function(event) {
			var display = this.displayTraceRegulateur;
			s.selectAll('.traceRegulateur').forEach(function(el) {
				display ? el.removeClass('hidden') : el.addClass('hidden');
			});
		}
	}
});