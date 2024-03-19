class storyLine3 extends Phaser.Scene {
    constructor() {
        super({ key: 'storyLine3' });
    }

    preload() {
        this.load.image('story3', 'assets/Storyline3.png')
    
    }
    
    create () {
        this.story = this.add.image(0, 0, 'story3').setOrigin(0, 0).setScale(1);
       
        console.log("story3");
      //   let map = this.make.tilemap({ key: "world" });
    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to instructions");
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
