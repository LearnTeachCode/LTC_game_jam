const config = {
    default: {
        player:{},
        score: {},
        debug: false
    },
    loader:{
        x: 80,
        y: 150,
        text: 'loading...',
        font: '30px Courier',
        fill: '#fff',
        logo: 'assets/img/boilerplate-logo.png',
        playerImage: 'assets/img/template-player-face.png',
        mapImage: 'assets/img/sample-neutral-map.png'
    },
    init:{
        screenWidth: 640,
        screenHeight: 480,
        phoneWidth: 360,
        phoneHeight: 740
    },

    player:{
        speed: 10,
        score:{
            font: 'bold 30px Courier',
            color: '#fff',
            text: 'SCORE:'
        }
    },
    gameLoop:{
        
    },
    neutralMap:{
        velocity: 120,
        mapsCount: 2,
        mapLabel: 'neutral-map'
    }
};

config.default.player = {
    speed: 10,
    spriteSrc: "../spriteLocation.png",
};

config.default.score = {
    font: 'bold 30px Courier',
    color: '#fff',
    text: 'SCORE:'
}