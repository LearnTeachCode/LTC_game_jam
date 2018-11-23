const config = {
    default: {
        player:{},
        score: {},
        debug: {}
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
    xStartRegion: 0.5,
    yStartRegion: 0.75
};

config.default.score = {
    font: 'bold 30px Courier',
    color: '#fff',
    amount: 0,
    bonus1: 1,
    text: 'SCORE:'
}

config.default.debug = {
    isOn: true, //to avoid coercion
    controls: {}
}