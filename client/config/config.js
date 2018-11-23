var config = {
    loader:{
        x: 80,
        y: 150,
        text: 'loading...',
        font: '30px Courier',
        fill: '#fff',
        logo: 'assets/img/boilerplate-logo.png',
        playerImage: 'assets/img/template-player-face.png',
        mapImage: 'assets/img/sample-neutral-map.png',
    },

    init:{
        screenWidth: 640,
        screenHeight: 480,
    },

    player:{
        speed: 50,
        score:{
            font: 'bold 30px Courier',
            color: '#fff',
            text: 'SCORE:',
        },
    },

    neutralMap:{
        velocity: 120,
        mapsCount: 2,
        mapLabel: 'neutral-map',
    },

    loadingScreen:{
        bgm: {
            mp3file: 'assets/audio/bodenstaendig_2000_in_rock_4bit.mp3',
            oggfile: 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg',
            label: 'loadingScreen-bgm',
        },
        screenImg: 'assets/img/flame-blackBG.png',
        velocity: 120,
    },
}
