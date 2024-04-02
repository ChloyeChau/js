class winScene extends Phaser.Scene {
    constructor() {
        super({ key: 'winScene' });
    }

    preload() {
        this.load.image('winScene', 'assets/winningScene.png')

 //mp3
    this.load.audio('winSong', 'assets/winSceneSong.mp3');
    }
    
    create () {
        this.story = this.add.image(0, 0, 'winScene').setOrigin(0, 0).setScale(1);
       
        console.log("winScene");
      //   let map = this.make.tilemap({ key: "world" });

      // music
      this.music = this.sound.add("winSong",{loop: true}).setVolume(0.2);
      this.music.play();

// this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });
    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, collect voucher");
        this.scene.start("qrScene");
        },this);

    } // end of create //
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
