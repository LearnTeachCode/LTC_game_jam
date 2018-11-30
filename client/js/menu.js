    /**
     * Initializes the menuState 1st; declaring all the variables for width, height, etc.. so menuState will functions as a namespace.
     * @function init
     * @param  {Object} data  An object declaring the width, height, background, title, startButton, and startButtonDots
     * @return {Object}       
     */
let menuState = {};
menuState = {
    init: (data) => {
        data = typeof data === "undefined" ? { menuState: {} } : data;
        menuState.width = data.width || config.init.screenWidth;
        menuState.height = data.height || config.init.screenHeight;
        menuState.background = data.menuState.background || config.menuState.background;
        menuState.background2 = data.menuState.background2 || config.menuState.background2;
        menuState.title = data.menuState.title || config.menuState.title;
        menuState.startButton = data.menuState.startButton || config.menuState.startButton;
        menuState.startButtonDots = data.menuState.startButtonDots || config.menuState.startButtonDots;
    },
    /** $pure
     * Makes sure the background image fills the game display no matter the size of the background.
     * @function getScaleValueToEnvelopeRect
     * @param  {Object} childWidth   Background width
     * @param  {Object} childHeight  Background height
     * @param  {Object} parentWidth  The game display's width
     * @param  {Object} parentHeight The game display's height
     * @return {Number}                           
     */
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
            menuState.background.key
        ];
        menuState.background.sprite = game.add.image(...menuBackgroundData);
        menuState.background.sprite.anchor.setTo(...graphicCenter);
        menuState.background.sprite.scale.x =
            menuState.background.sprite.scale.y =
            menuState.getScaleValueToEnvelopeRect(menuState.background.sprite.width, menuState.background.sprite.height, menuState.width, menuState.height);

        let menuBackground2Data = [
            menuState.width * menuState.background2.xRegion,
            menuState.height * menuState.background2.yRegion,
            menuState.background2.key
        ];
        menuState.background2.sprite = game.add.image(...menuBackground2Data);
        menuState.background2.sprite.anchor.setTo(...graphicCenter);
        menuState.background2.sprite.scale.x =
            menuState.background2.sprite.scale.y =
            menuState.getScaleValueToEnvelopeRect(menuState.background2.sprite.width, menuState.background2.sprite.height, menuState.width, menuState.height);

        let menuTitleData = [
            menuState.width * menuState.title.xRegion,
            menuState.height * menuState.title.yRegion,
            menuState.title.key
        ];
        menuState.title.sprite = game.add.sprite(...menuTitleData);
        menuState.title.sprite.anchor.setTo(...graphicCenter);

        let startButtonData = [
            menuState.width * menuState.startButton.xRegion,
            menuState.height * menuState.startButton.yRegion,
            menuState.startButton.key,
            menuState.startGame,
            menuState
        ];
        menuState.startButton.button = game.add.button(...startButtonData);
        menuState.startButton.button.anchor.setTo(...graphicCenter);

        let startButtonDotsData = [
            menuState.width * menuState.startButtonDots.xRegion,
            menuState.height * menuState.startButtonDots.yRegion,
            menuState.startButtonDots.key
        ];
        menuState.startButtonDots.sprite = game.add.sprite(...startButtonDotsData);
        menuState.startButtonDots.sprite.anchor.setTo(...graphicCenter);

        // Animate graphics ---------------------------------------
        menuState.startButtonTweenToTransparentData = [
            menuState.startButton.tweenToTransparentProperties,
            menuState.startButton.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.startButton.tweenToTransparentEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.startButtonTweenToOpaqueData = [
            menuState.startButton.tweenToOpaqueProperties,
            menuState.startButton.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.startButton.tweenToOpaqueEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.tweenStartButtonToTransparent();

        menuState.background2TweenToTransparentData = [
            menuState.background2.tweenToTransparentProperties,
            menuState.background2.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.background2.tweenToTransparentEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.background2TweenToOpaqueData = [
            menuState.background2.tweenToOpaqueProperties,
            menuState.background2.opacityCycleDurationInSeconds * 1000 / 2,
            menuState.background2.tweenToOpaqueEasing,
            true    // autostart tween, saves a call to tween.start()
        ];
        menuState.tweenBackground2ToTransparent();
    },

    tweenStartButtonToTransparent: function () {
        menuState.startButton.tweenToTransparent = game.add.tween(menuState.startButton.button).to(...menuState.startButtonTweenToTransparentData);
        menuState.startButton.tweenToTransparent.onComplete.add(menuState.tweenStartButtonToOpaque);  // begin tweening to opaque after finished tweening to transparent
    },
    tweenStartButtonToOpaque: function () {
        menuState.startButton.tweenToOpaque = game.add.tween(menuState.startButton.button).to(...menuState.startButtonTweenToOpaqueData);
        menuState.startButton.tweenToOpaque.onComplete.add(menuState.tweenStartButtonToTransparent);    // begin tweening to transparent after finished tweening to opaque
    },

    tweenBackground2ToTransparent: function () {
        menuState.background2.tweenToTransparent = game.add.tween(menuState.background2.sprite).to(...menuState.background2TweenToTransparentData);
        menuState.background2.tweenToTransparent.onComplete.add(menuState.tweenBackground2ToOpaque);
    },
    tweenBackground2ToOpaque: function () {
        menuState.background2.tweenToOpaque = game.add.tween(menuState.background2.sprite).to(...menuState.background2TweenToOpaqueData);
        menuState.background2.tweenToOpaque.onComplete.add(menuState.tweenBackground2ToTransparent);
    }
};
