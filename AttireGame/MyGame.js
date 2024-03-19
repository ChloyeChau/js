var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size 
    width: 32 * 20,
    height: 32 * 20,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#94EAFF',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [preloadScene, level1_Living, level2_Kitchen, level3_Bedroom]
};

var game = new Phaser.Game(config);



