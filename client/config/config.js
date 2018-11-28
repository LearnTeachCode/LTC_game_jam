const config = {
    //Any NONE GAME STATE config information goes under default
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
        background: "#000000",
        playerImage: {
            src: 'assets/img/templatePlayerFace.png',
            key: "player"
        },
        mapImage:{ 
            src: 'assets/img/floorBG.png',
            key: "gameMap"
        },
        placeHolder: {
            src: "assets/img/placeHolder.png",
            key: "placeHolder"
        },
        bgm: {
            mp3: "assets/audio/bodenstaendig2000InRock4bit.mp3",
            ogg: "assets/audio/bodenstaendig2000InRock4bit.ogg",
            label:   "loadingScreenBgm"
        },
        sceenImg: "",
        loadValue:  0,
        loadScreen:{
            src: "assets/img/loadingScreenAsset.png",
            spriteLabel: "loadScreen",
            xPosition: 0,
            yPosition: 100
        },
        loadText:{
            src:      "assets/img/loadingTextAsset.png",
            spriteLabel:    "loadText",
            xPosition: 0,
            yPosition: 10
        },
        cursors: {},
        velocity: 120
    },
    init:{
        screenWidth: 375,
        screenHeight: 812,
        phoneWidth: 360,
        phoneHeight: 740
    },
    boot:{
        bootString : "...preparing to load."
    },
    menuState: {
        background: {
            xRegion: 0.5,
            yRegion: 0.5,
            key: "mainMenuBackground",
            src: "assets/img/mainMenuRed.png"
        },
        title: {
            xRegion: 0.5,
            yRegion: 0.383,
            key: "titleGraphic",
            src: "assets/img/pathLightTitleAsset.png"
        },
        startButton: {
            xRegion: 0.5,
            yRegion: 0.496,
            key: "startButton",
            src: "assets/img/startButtonAsset.png",
            opacityCycleDurationInSeconds: 3,
            tweenToTransparentProperties: { alpha: 0.5 },
            tweenToOpaqueProperties: { alpha: 1.0 },
            tweenToTransparentEasing: Phaser.Easing.Quadratic.In,
            tweenToOpaqueEasing: Phaser.Easing.Quadratic.Out
        },
        startButtonDots: {
            xRegion: 0.5,
            yRegion: 0.5,
            key: "startButtonDots",
            src: "assets/img/startDotsAsset.png"
        }
    },
    gameLoop:{
        xStartRegion: 0.5,
        yStartRegion: 0.75,
        blocks: {
            full: {},
            half: {},
            quarter: {}
        }
    },
    neutralMap:{
        velocity: 120,
        mapsCount: 2,
        imgKey: "neutralMap",
        imgSrc: "assets/img/floorBgAsset.png"
    },
    gameOverState: {
        gameOverLabel: {
            xRegion: 0.5,
            yRegion: 0.25,
            text: "Game Over!",
            style: {
                font: "35px Courier",
                fill: "#fff"
            }
        },
        finalScoreLabel: {
            xRegion: 0.5,
            yRegion: 0.33,
            text: "Final Score:",
            style: {
                font: "30px Courier",
                fill: "#fff"
            }
        },
        finalScoreText: {
            xRegion: 0.5,
            yRegion: 0.45,
            style: {
                font: "30px Courier",
                fill: "#fff"
            }
        },
        restartButton: {
            xRegion: 0.5,
            yRegion: 0.66,
            key: "restartButton",
            src: "assets/img/startButton.png" // TODO: Make restart button
        }
    }
};

config.default.player = {
    speed: 4,
    color: config.default.colors.white,
    key: "player",
    src: "../spriteLocation.png"
};

config.default.blocks = {
    score: { //this model is subject to change
        full: 25,
        half: 50,
        quarter: 100
    }
}

config.default.score = {
    style : {
        font: "bold 30px Courier",
        color: "#fff",
    },    
    interface: {},
    amount: 0,
    bonus1: 1,
    text: "SCORE:",
    x: 0,
    y: 5
};

config.default.debug = {
    isOn: true, //to avoid coercion
    controls: {}
};

config.default.neutralMap = {
    velocity: 120,
    mapsCount: 2,
    key: "neutralMap",
    src: "assets/img/floorBgAsset.png"
}

config.default.gameMap = {
    normalSpeed: 1,
    hardSpeed: 2
};

config.default.controls = {
    mouse: 0,
    keyboard: 1
};

config.default.colors = {
    white: 0xFFFFFF,
    // primaries
    red: 0xFF0000,
    yellow: 0xFFFF00,
    blue: 0x0000FF,
    // secondaries
    orange: 0xFF8000,
    purple: 0x800080,
    green: 0x00FF00
};

config.default.gameInformation = {
    title: "PathLight"
};