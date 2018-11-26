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
            src: 'assets/img/template-player-face.png',
            key: "player"
        },
        mapImage:{ 
            src: 'assets/img/floorBG.png',
            key: "gameMap"
        },
        placeHolder: {
            src: "assets/img/placeholder.png",
            key: "placeHolder"
        },
        bgm: {
            mp3: "assets/audio/bodenstaendig_2000_in_rock_4bit.mp3",
            ogg: "assets/audio/bodenstaendig_2000_in_rock_4bit.ogg",
            label:   "loadingScreen-bgm"
        },
        sceenImg: "assets/img/flame-blackBG.png",
        loadValue:  0,
        loadScreen:{
            spriteSrc: "assets/img/Loading_Screen_Asset.png",
            spriteLabel: "loadScreen",
            xPosition: 0,
            yPosition: 100
        },
        loadText:{
            spriteSrc:      "assets/img/Loading_Text_Asset.png",
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
            imageKey: "mainMenuBackground",
            spriteSrc: "assets/img/Main_Menu_Red.png"
        },
        title: {
            xRegion: 0.5,
            yRegion: 0.383,
            imageKey: "titleGraphic",
            spriteSrc: "assets/img/PathLight_Title_Asset.png"
        },
        startButton: {
            xRegion: 0.5,
            yRegion: 0.496,
            imageKey: "startButton",
            spriteSrc: "assets/img/Start_Button_Asset.png",
            opacityCycleDurationInSeconds: 3,
            tweenToTransparentProperties: { alpha: 0.5 },
            tweenToOpaqueProperties: { alpha: 1.0 },
            tweenToTransparentEasing: Phaser.Easing.Quadratic.In,
            tweenToOpaqueEasing: Phaser.Easing.Quadratic.Out
        },
        startButtonDots: {
            xRegion: 0.5,
            yRegion: 0.5,
            imageKey: "startButtonDots",
            spriteSrc: "assets/img/Start_Dots_Asset.png"
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
        imgSrc: "assets/img/Floor_BG_Asset.png"
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
            imageKey: "restartButton",
            spriteSrc: "assets/img/startButton.png" // TODO: Make restart button
        }
    }
};

config.default.player = {
    speed: 4,
    imageKey: "player",
    spriteSrc: "../spriteLocation.png"
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
    src: "assets/img/Floor_BG_Asset.png"
}

config.default.gameMap = {
    normalSpeed: 1,
    hardSpeed: 2
};

config.default.controls = {
    mouse: 0,
    keyboard: 1
};

config.default.gameInformation = {
    title: "PathLight"
};