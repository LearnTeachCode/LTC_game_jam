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
        mapImage: 'assets/img/sample-neutral-map.png',
        bgm: {
            mp3file: "assets/audio/bodenstaendig_2000_in_rock_4bit.mp3",
            oggfile: "assets/audio/bodenstaendig_2000_in_rock_4bit.ogg",
            label:   "loadingScreen-bgm"
        },
        sceenImg: "assets/img/flame-blackBG.png",
        velocity: 120
    },
    init:{
        screenWidth: 640,
        screenHeight: 480,
        phoneWidth: 360,
        phoneHeight: 740
    },
    gameLoop:{
        xStartRegion: 0.5,
        yStartRegion: 0.75
    },
    neutralMap:{
        velocity: 120,
        mapsCount: 2,
        mapLabel: 'neutral-map'
    }
};

config.default.player = {
    speed: 50,
    imageKey: "player",
    spriteSrc: "../spriteLocation.png"
};

config.default.score = {
    style : {
        font: 'bold 30px Courier',
        color: '#fff',
    },    
    interface: {},
    amount: 0,
    bonus1: 1,
    text: 'SCORE:',
    x: 0,
    y: 5
};

config.default.debug = {
    isOn: true, //to avoid coercion
    controls: {}
};

config.default.gameMap = {
    normalSpeed: 1,
    hardSpeed: 2,
};

config.default.controls = {
    mouse: 0,
    keyboard: 1
}
