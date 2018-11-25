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
        menuState.startButtonDots = data.menuState.startButtonDots || config.menuState.startButtonDots;
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
        const graphicCenter = [0.5, 0.5];    // [X, Y]

        // Instantiate graphics ---------------------------------------
        let menuBackgroundData = [
            menuState.width * menuState.background.xRegion,
            menuState.height * menuState.background.yRegion,
            menuState.background.imageKey
        ];
        menuState.background.sprite = game.add.image(...menuBackgroundData);
        menuState.background.sprite.anchor.setTo(...graphicCenter);
        menuState.background.sprite.scale.x =
            menuState.background.sprite.scale.y =
            menuState.getScaleValueToEnvelopeRect(menuState.background.sprite.width, menuState.background.sprite.height, menuState.width, menuState.height);

        let menuTitleData = [
            menuState.width * menuState.title.xRegion,
            menuState.height * menuState.title.yRegion,
            menuState.title.imageKey
        ];
        menuState.title.sprite = game.add.sprite(...menuTitleData);
        menuState.title.sprite.anchor.setTo(...graphicCenter);

        let startButtonData = [
            menuState.width * menuState.startButton.xRegion,
            menuState.height * menuState.startButton.yRegion,
            menuState.startButton.imageKey,
            menuState.startGame,
            menuState
        ];
        menuState.startButton.button = game.add.button(...startButtonData);
        menuState.startButton.button.anchor.setTo(...graphicCenter);

        let startButtonDotsData = [
            menuState.width * menuState.startButtonDots.xRegion,
            menuState.height * menuState.startButtonDots.yRegion,
            menuState.startButtonDots.imageKey
        ];
        menuState.startButtonDots.sprite = game.add.sprite(...startButtonDotsData);
        menuState.startButtonDots.sprite.anchor.setTo(...graphicCenter);

        // Animate graphics ---------------------------------------
        menuState.tweenStartButtonToTransparent();
    },

    tweenStartButtonToTransparent: function () {
        let startButtonTweenToTransparentData = [
            menuState.startButton.tweenToTransparentProperties,
            menuState.startButton.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.startButton.tweenToTransparentEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.startButton.tweenForward = game.add.tween(menuState.startButton.button).to(...startButtonTweenToTransparentData);
        menuState.startButton.tweenForward.onComplete.add(menuState.tweenStartButtonToOpaque);  // begin tweening to opaque after finished tweening to transparent
    },

    tweenStartButtonToOpaque: function () {
        let startButtonTweenToOpaqueData = [
            menuState.startButton.tweenToOpaqueProperties,
            menuState.startButton.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.startButton.tweenToOpaqueEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.startButton.tweenBackward = game.add.tween(menuState.startButton.button).to(...startButtonTweenToOpaqueData);
        menuState.startButton.tweenBackward.onComplete.add(menuState.tweenStartButtonToTransparent);    // begin tweening to transparent after finished tweening to opaque
    }
};
