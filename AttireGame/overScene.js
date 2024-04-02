class overScene extends Phaser.Scene {
    constructor() {
        super({ key: 'overScene' });
    }

    preload() {
        this.load.image('overScene', 'assets/overScene.png')

    //mp3
    this.load.audio('overSong', 'assets/gwenchana.mp3');
    
    }
    
    create () {
        this.overScene = this.add.image(0, 0, 'overScene').setOrigin(0, 0).setScale(1);
       
        console.log("overScene");
      //   let map = this.make.tilemap({ key: "world" });

    // music
    window.music.stop()
    this.music = this.sound.add("overSong",{loop: true}).setVolume(0.2);
    this.music.play();
    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to instructions");
        this.scene.stop("overScene");
        this.scene.start("instructions");
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
