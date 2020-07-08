$(document).ready(function () {
	$(".tab").animated("fadeIn", "fadeIn");
	$('#form-res').on('submit', function () {
		var arr = [];
		var resultat = 0;

		$('input[type="radio"]:checked').each(function () {
			var value = $(this).val();
			arr.push(value);
			resultat = arr.reduce(function (a, b) {
				return Number(a) + Number(b);
			})
		});

		console.log(resultat);
		
		if (arr.length === 10) {
			document.getElementById("prevBtn").style.display = "none";
			document.getElementById("nextBtn").style.display = "none";
			document.getElementById("myBar").style.display = "none";

		}
		if (resultat >= 0 && resultat <= 3) {

			console.log('resultat >= 0 && resultat <= 2');
			$('.res-1').show();
		} 
		if (resultat >= 4 && resultat <= 6) {
			console.log('resultat >= 3 && resultat <= 5');
			$('.res-2').show();
		}
		if (resultat >= 7 ) {
			console.log('6>');
			$('.res-3').show();
		}  

		return false;
	});
});

var currentTab = 0; 
showTab(currentTab); 

var tabsCount = 10;

function showTab(n) {

	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "Завершить тест";
	} else {
		document.getElementById("nextBtn").innerHTML = "Далеe";
	}

	fixStepIndicator(n)
}

function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
		$('#form-res').submit();
	}
	showTab(currentTab);
}

function validateForm() {
	var x, y, i, valid = false;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
		if (y[i].checked) {
			valid = true;
		}
	}
	return valid; 
}

function fixStepIndicator(n) {
	var progress = document.getElementById('myBar');
	var width = 100 / tabsCount * n;
	progress.style.width = width + "%";
}



