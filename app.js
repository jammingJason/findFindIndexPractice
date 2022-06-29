const scores = [ 0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93 ];

scores.find(function(score) {
	return score > 75;
});

scores.find(function(score) {
	return score != 0 && score % 2 === 0;
});

const evenScores = scores.filter(function(score) {
	return score % 2 === 0;
});

const firstEven = scores.findIndex(function(score) {
	return score != 0 && score % 2 === 0;
});

function partition(arr, pivot) {
	const pivotIndex = arr.findIndex(function(el) {
		return el > pivot;
	});
	const left = arr.slice(0, pivotIndex);
	const right = arr.slice(pivotIndex);
	return [ left, right ];
}
//partition(scores, 0)
//Returns...
// [
//   [ 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93 ]
// ];

// *********************************
// Writing Our Own Versions
// *********************************

function myFind(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return arr[i];
	}
	return undefined;
}

function myFindIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return i;
	}
	return -1;
}

myFindIndex(scores, function(score) {
	return score != 0 && score % 2 === 0;
});
