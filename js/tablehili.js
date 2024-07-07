<script>
	var thElements = document.querySelectorAll('th');

	thElements.forEach(function(th) {
		th.addEventListener('mouseover', function() {
			var index = th.cellIndex;
			var rows = document.querySelectorAll('tbody tr');
			rows.forEach(function(row) {
				var td = row.children[index];
				if (td) {
					var hiliChars = td.querySelectorAll('.hili-char');
					for (var i = 0; i < hiliChars.length; i++) {
						hiliChars[i].classList.add('highlight');
					}
				}
			});
		});
		th.addEventListener('mouseout', function() {
			var rows = document.querySelectorAll('tbody tr');
			rows.forEach(function(row) {
				var td = row.children[th.cellIndex];
				if (td) {
					var hiliChars = td.querySelectorAll('.hili-char');
					for (var i = 0; i < hiliChars.length; i++) {
						hiliChars[i].classList.remove('highlight');
					}
				}
			});
		});
	});
</script>