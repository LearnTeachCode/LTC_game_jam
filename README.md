<div align="center"><img src="https://user-images.githubusercontent.com/121322/47754742-28d44480-dc59-11e8-9071-5b45e89edde4.png"></div>


<h1> Link To The Repository </h1>
<h4>
    https://github.com/michellelynne/LTC_game_jam
</h4>

<h1> Link To Our Slack </h1>
<h4>
    https://learnteachcode.org/slack
</h4>

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
    
            https://websitename.io

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
    

## Hosts

<a href="https://github.com/E-A-N">
    <img width="100" height="100" src="https://avatars1.githubusercontent.com/u/17329104?s=460&v=4">
</a>
<a href="http://www.michellebrenner.com/">
    <img width="100" height="100" src="https://avatars3.githubusercontent.com/u/10392961?s=400&v=4">
</a>
<a href="https://jamcity.com">
    <img width="100" height="100" src="http://jamcity-corp.akamaized.net/wp-content/uploads/open_graph.jpg">
</a>
