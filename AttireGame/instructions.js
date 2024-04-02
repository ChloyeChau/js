class instructions extends Phaser.Scene {
    constructor() {
        super({ key: 'instructions' });
    }

    preload() {
        this.load.image('instructions', 'assets/Instructions.png')
    
    //mp3
    this.load.audio('gameSong', 'assets/gameSong.mp3');
    }
    
    create () {
        this.timedEvent = this.time.addEvent({ delay: 6000, callback: this.delay6Seconds, callbackScope: this, loop: false });

        this.story = this.add.image(0, 0, 'instructions').setOrigin(0, 0).setScale(1);
       
        console.log("instructions, wait for 6 seconds");

    // music
      window.music = this.sound.add("gameSong",{loop: true}).setVolume(0.2);
      window.music.play();

      //   let map = this.make.tilemap({ key: "world" });
    
        // var spaceDown = this.input.keyboard.addKey('SPACE');
        
        // spaceDown.on('down', function(){
        // console.log("Spacebar pressed, go to game");
        // this.scene.start("level1_Living");
        // },this);
    
    } // end of create //

    // Game Timeout //
delay6Seconds(){
    
  // this.timeSnd.play();
  console.log("after 6 secs");
  // if(collect 3pants, jump to level3)
  // else(start from level1)
  this.scene.start("level1_Living");
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
