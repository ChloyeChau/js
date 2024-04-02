class pantsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'pantsScene' });
    }

    preload() {
        this.load.image('pantsScene', 'assets/pantsScene.png')
    
    }
    
    create () {
        this.timedEvent = this.time.addEvent({ delay: 5000, callback: this.delay5Seconds, callbackScope: this, loop: false });

        this.story = this.add.image(0, 0, 'pantsScene').setOrigin(0, 0).setScale(1);
       
        console.log("pantsScene");
      //   let map = this.make.tilemap({ key: "world" });
    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to Bedroom");
        this.scene.start("level3_Bedroom");
        },this);
    
    }// end of create //

    delay5Seconds(){
    
        // this.timeSnd.play();
        console.log("after 5 secs");
        // if(collect 3pants, jump to level3)
        // else(start from level1)
        this.scene.start("level3_Bedroom");
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
