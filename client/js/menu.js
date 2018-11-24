// initialize menuState 1st so it functions as a namespace
let menuState = {};
menuState = {
    init: (data) => {
        data = typeof data === "undefined" ? { menuState: {} } : data;
        menuState.width = data.width || config.init.screenWidth;
        menuState.height = data.height || config.init.screenHeight;
        menuState.background = data.menuState.background || config.menuState.background;
        menuState.title = data.menuState.title || config.menuState.title;
        menuState.startButton = data.menuState.startButton || config.menuState.startButton;
    },

    getScaleValueToEnvelopeRect: (childWidth, childHeight, parentWidth, parentHeight) => {
        let xScale = parentWidth / childWidth;
        let yScale = parentHeight / childHeight;
        if (childHeight * xScale >= parentHeight)
            return xScale;
        else
            return yScale;
    },

    startGame: function() {
        //game.state.start("gameLoop", data);   // data is currently undefined
        game.state.start("gameLoop");
    },

    create: () => {
        const spriteCenter = [0.5, 0.5];    // [X, Y]

        let menuBackgroundData = [
            menuState.width * menuState.background.xRegion,
            menuState.height * menuState.background.yRegion,
            menuState.background.imageKey
        ];
        menuState.background.sprite = game.add.image(...menuBackgroundData);
        menuState.background.sprite.anchor.setTo(...spriteCenter);
        menuState.background.sprite.scale.x =
            menuState.background.sprite.scale.y =
            menuState.getScaleValueToEnvelopeRect(menuState.background.sprite.width, menuState.background.sprite.height, menuState.width, menuState.height);

        let menuTitleData = [
            menuState.width * menuState.title.xRegion,
            menuState.height * menuState.title.yRegion,
            menuState.title.text,
            menuState.title.style
        ];
        menuState.title.textObj = game.add.text(...menuTitleData);
        menuState.title.textObj.anchor.setTo(...spriteCenter);

        let startButtonData = [
            menuState.width * menuState.startButton.xRegion,
            menuState.height * menuState.startButton.yRegion,
            menuState.startButton.imageKey,
            menuState.startGame,
            menuState,
            0,
            0,
            0
        ];
        menuState.startButton.button = game.add.button(...startButtonData);
        menuState.startButton.button.anchor.setTo(...spriteCenter);
    }
};
