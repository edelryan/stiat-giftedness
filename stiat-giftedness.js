define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.3/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
    var API = new APIConstructor();

    return stiatExtension({
        category: {
            name: 'Gifted Students',
            title: {
                media: { word: 'Gifted' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            media: [
                { word: 'Bright' },
                { word: 'Talented' },
                { word: 'Exceptional' },
                { word: 'Gifted' },
                { word: 'Advanced' },
                { word: 'High-achieving' }
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute1: {
            name: 'Unpleasant',
            title: {
                media: { word: 'Negative' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            media: [
                { word: 'Difficult' },
                { word: 'Problem' },
                { word: 'Burden' },
                { word: 'Frustrating' },
                { word: 'Demanding' },
                { word: 'Disruptive' }
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute2: {
            name: 'Pleasant',
            title: {
                media: { word: 'Positive' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            media: [
                { word: 'Helpful' },
                { word: 'Motivating' },
                { word: 'Inspiring' },
                { word: 'Rewarding' },
                { word: 'Exciting' },
                { word: 'Encouraging' }
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        },

        base_url: {
            image: '' // not needed unless you're using images
        }
    });
});
