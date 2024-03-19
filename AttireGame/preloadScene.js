class preloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'preloadScene' });
    }

    create() {
        console.log("preloadScene");
        this.add.text(10, 500, 'Animation labs, press spacebar to continue', { font: '24px Courier', fill: '#ffffff' });

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function() {
            this.scene.start("level1_Living");
        }, this);

        var level1Down = this.input.keyboard.addKey(49);

        level1Down.on("down", function() {
            console.log("1 pressed, jump to map1");
            this.scene.start("level1_Living");
        }, this);

        var level2Down = this.input.keyboard.addKey(50);

        level2Down.on("down", function() {
            console.log("2 pressed, jump to map2");
            this.scene.start("level2_Kitchen");
        }, this);

        var level3Down = this.input.keyboard.addKey(51);

        level3Down.on("down", function() {
            console.log("3 pressed, jump to map3");
            this.scene.start("level3_Bedroom");
        }, this);
    }
}
