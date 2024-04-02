var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size 
    width: 640,
    height: 640,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#94EAFF',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [preloadScene, storyLine2, storyLine3, instructions, overScene, level1_Living, shirtScene, level2_Kitchen, pantsScene, 
level3_Bedroom, winScene, qrScene]
};

var game = new Phaser.Game(config);



