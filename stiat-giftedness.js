define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();

	return stiatExtension({

		category: {
			name: 'Gifted Students',
			title: {
				media: {word: 'Gifted Students'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Gifted'},
				{word: 'Bright'},
				{word: 'Talented'},
				{word: 'Intelligent'},
				{word: 'Advanced'},
				{word: 'Exceptional'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		attribute1: {
			name: 'Negative',
			title: {
				media: {word: 'Negative'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Sample 1'},
				{word: 'Sample 2'},
				{word: 'Sample 3'},
				{word: 'Weird'},
				{word: 'Entitled'},
				{word: 'Selfish'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		attribute2: {
			name: 'Positive',
			title: {
				media: {word: 'Positive'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Sample 4'},
				{word: 'Curious'},
				{word: 'Creative'},
				{word: 'Helpful'},
				{word: 'Hardworking'},
				{word: 'Friendly'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		base_url: {
			image: 'https://baranan.github.io/minno-tasks/images/' // Not used here, but required field
		}
	});
});
