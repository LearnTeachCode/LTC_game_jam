<div align="center"><img src="https://user-images.githubusercontent.com/121322/47754742-28d44480-dc59-11e8-9071-5b45e89edde4.png"></div>

## How to install the game
- Install git
    - Here's an installion guide for [git](https://www.atlassian.com/git/tutorials/install-git)
- Install github (optional)
    - Here's a link to installing  the desktop version of [github](https://desktop.github.com/)
- Install nodeJs
    - This will automatically install npm which is used to run the game
    - Linux/Ubuntu/Debian command to install nodeJs is `sudo apt-get install nodejs npm`
    - Here's a guide for the [Windows Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    - Here's a guide for the [Mac Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- Inside commandline navigate to "eansPhaserBoilerPlate" folder
    - This should be achieved by entering `cd eanPhaserBoilerPlate`
- In command line run `npm install`
    - Our backend uses nodejs so this will install the resources our projects needs to run independently

## How to run the game
- Inside commandline navigate to "eansPhaserBoilerPlate" folder (if you're not already there)
    - This should be achieved by entering `cd eanPhaserBoilerPlate`
- In command line run `npm start`
    - This script actually starts up our server (which means our game is running)
- Open up a web browser and go to this address `http://localhost:7777`
    - `http://127.0.0.1:7777` also works because these are representations of the "home" address
- From here you'll be able to play the game!

## Latest stable build of the game that's playable:
<h4>
    <a align="center" href="https://e-a-n.github.io/magiflight/"> 
            https://e-a-n.github.io/magiflight/
    </a>
</h4>


## Naming Convention
- camel casing
    - applies to coding, files, and folders
    - example: `var name = "eanCharacter"`
- no capitalizing 1st letters

## Basic Source Control (using git)
- When submitting a change ALWAYS commit then pull, before you push!
    - `git add -A` (tracks files and adds them to staging)
    - `git commit -m "adding my file msg"` (timestamps your changes and comments to the repository)
    - `git pull origin master` (pulls latest changes from repository)
    - `git push origin master` (pushes your updated changes to repository for other people to pull)
    - Sometimes a push or pull may result in a merge conflict, when this happens just make resolve to the conflict by adjusting files to their correct version manually.

## Asset Pipeline
- All art asset files are on the google drive file below
    - https://drive.google.com/drive/folders/1p0RsQiJOHi4n0iVi67VQFI_4eDF6A0G6?usp=sharing
- Any assets that are planned to be used in the game go inside the `assetDump` directory
- All graphical assets must be [texture packed](https://www.codeandweb.com/texturepacker) into a sprite sheet and referenced via json atlas

## Pipeline
- **Adding Game States**
    - Create new javascript file in javascript directory.
    - Declare state name inside of a new js file.
        - ` var gameState = {}; `
    - Go to index.html and add it to the script BEFORE stateManager.
        - `<script type="text/javascript" src="javascript/gameState.js"></script> `
        - `<script type="text/javascript" src="javascript/stateManager.js"></script>`
    - Inside the stateManager add the state
        - `game.state.add("gameStateKey",gameState);`
    - To access use game.state.start from any point in the game
        - `game.state.start("gameStateKey");`

- **Deploying**
    - Bump the build number in ```buildVersion.txt```
        - Build number convention is ```Version.Major.Minor``` Example: ```1.5.11```

## Config Information
  - ***settings.js***
    - `stage` contains default width and height parameters of game
    - `difficulty` attributes are easy/medium/hard and effect game attributes differently
      - `esm` stands for **Enemy Speed Modifier** which adjusts enemy speeds based on difficulty choice
      - `ecdm` stands for **Enemy Count Down Modifier*** which adjusts how often an enemy appears based on difficulty choice
    - `player` contains information for attributes concerning different characters the player will be using
      - `sprKey` The sprite key for loading texture
      - `startX` and `startY` are the coordinates the character will be starting in the game
      - `horSpd` The horizontal speed of the character (to be added to body.velocity.x, this defaults to 0)
      - `vertSpd` The vertical speed fo the character (to be added to body.velocity.y)
      - `gravity` The speed at which the character will increasingly fall
    - `enemies` contains information for attributes concerning sprites the player will interacting with
      - types: `bats, ...`
      - `key` The sprite key for loading texture,
      - `amount` The amound of enemies to deploy
      - `frame` The frame basis to use for animation frame counters
      - `fNum` The number of frames to be used in an animation from starting frame to finish frame
      - `animeKey` The sprite key for referencing animation???
      - `vx` The vertical speed of the character (to be added to ```children[n].body.velocity.x```)
      - `vy` The vertical speed of the character (to be added to ```children[n].body.velocity.y```)
      - `intervals` The frequency in which enemies will be appearing

## Hosts

<a href="https://github.com/E-A-N">
    <img width="100" height="100" src="https://avatars1.githubusercontent.com/u/17329104?s=460&v=4">
</a>
<a href="https://github.com/michellelynne">
    <img width="100" height="100" src="https://avatars3.githubusercontent.com/u/10392961?s=400&v=4">
</a>

