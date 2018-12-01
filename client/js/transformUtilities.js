const transformUtilities = {};

/*
 * Makes sure the background image fills the game display no matter the size of the background.
 * @function getScaleValueToEnvelopeRect
 * @param  {Object} childWidth   Background width
 * @param  {Object} childHeight  Background height
 * @param  {Object} parentWidth  The game display's width
 * @param  {Object} parentHeight The game display's height
 * @return {Number}
 */
transformUtilities.getScaleValueToEnvelopeRect = (childWidth, childHeight, parentWidth, parentHeight) => {
    let xScale = parentWidth / childWidth;
    let yScale = parentHeight / childHeight;
    if (childHeight * xScale >= parentHeight)
        return xScale;
    else
        return yScale;
};

transformUtilities.getTopPosition = (yPosition, height, anchorYPosition) => {
    return yPosition - height * anchorYPosition;
};

transformUtilities.getBottomPosition = (yPosition, height, anchorYPosition) => {
    return yPosition + height * (1 - anchorYPosition);
};