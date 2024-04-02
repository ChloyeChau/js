class qrScene extends Phaser.Scene {
    constructor() {
        super({ key: 'qrScene' });
    }

    preload() {
        this.load.image('qrScene', 'assets/qrScene.png')
    
    }
    
    create () {
        this.story = this.add.image(0, 0, 'qrScene').setOrigin(0, 0).setScale(1);
       
        console.log("qrScene");
      //   let map = this.make.tilemap({ key: "world" });
    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Take a screenshot of the voucher! Press Spacebar to play again");
        this.scene.start("preloadScene");
        },this);
    
    }
    }

//     {
//     {
// var level1Down = this.input.keyboard.addKey(49);

//         level1Down.on("down", function() {
//             console.log("1 pressed, jump to map1");
//             this.scene.start("level1_Living");
//         }, this);

//         var level2Down = this.input.keyboard.addKey(50);

//         level2Down.on("down", function() {
//             console.log("2 pressed, jump to map2");
//             this.scene.start("level2_Kitchen");
//         }, this);

//         var level3Down = this.input.keyboard.addKey(51);

//         level3Down.on("down", function() {
//             console.log("3 pressed, jump to map3");
//             this.scene.start("level3_Bedroom");
//         }, this);
//     }
// }
