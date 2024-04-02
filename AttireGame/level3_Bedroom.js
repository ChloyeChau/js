
class level3_Bedroom extends Phaser.Scene {

    constructor (){
        super({key: 'level3_Bedroom' });
        this.shoesCount = 0;
        this.XshoesCount = 0;
    }

    preload () {
//Step 1, load JSON
    this.load.tilemapTiledJSON("map3","assets/Bedroom.tmj");

//Step 2, peload any images here
    this.load.image("BedroomIMG","assets/4_Bedroom_32x32.png")
    this.load.image("RoomBuilderIMG","assets/Room_Builder_free_32x32.png")

    this.load.spritesheet("gen3","assets/pantsGen.png", {
    frameWidth: 64,
    frameHeight: 64,
    });

    this.load.spritesheet("shoes", "assets/Shoes.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    
    this.load.spritesheet("Sblue", "assets/Sblue.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    
    this.load.spritesheet("Sgrey", "assets/Sgrey.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

     //mp3
     this.load.audio('gameSong', 'assets/gameSong.mp3');

} // end of preload //

create (){

  // this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });

  // console.log("animationScene")
  
      // Call to update inventory
      // this.time.addEvent({
      //   delay: 500,
      //   callback: updateInventory,
      //   callbackScope: this,
      //   loop: false,
      // });
  
      this.anims.create({
        key: "shoesMove",
        frames: this.anims.generateFrameNumbers("shoes", {start:0,end:1}),
        frameRate: 6,
        repeat: -1,
  
      })

      this.anims.create({
        key: "SblueMove",
        frames: this.anims.generateFrameNumbers("Sblue", {start:0,end:1}),
        frameRate: 6,
        repeat: -1,
  
      })

      this.anims.create({
        key: "SgreyMove",
        frames: this.anims.generateFrameNumbers("Sgrey", {start:0,end:1}),
        frameRate: 6,
        repeat: -1,
  
      })

//Step 3, create the map from main
let map = this.make.tilemap ({key: "map3"});

//Step 4, load the game tiles
//1st parameter is name in Tiled,
//2nd parameter is key in Preload

let floorTiles = map.addTilesetImage("RoomBuilder", "RoomBuilderIMG");
let furnitureTiles = map.addTilesetImage("Bedroom", "BedroomIMG");

//Step 5, create an array of tiles
let tilesArray = [
    floorTiles,
    furnitureTiles,
];

//Step 6, load in layer by layer
this.floorLayer = map.createLayer("Floor",tilesArray,0,0);
this.wallLayer = map.createLayer("Wall",tilesArray,0,0);
this.carpetLayer = map.createLayer("Carpet",tilesArray,0,0);
this.wallBoarderLayer = map.createLayer("Wall Boarder",tilesArray,0,0);
this.furnitureLayer = map.createLayer("Furniture",tilesArray,0,0);
this.furniture2Layer = map.createLayer("Furniture 2",tilesArray,0,0);

this.anims.create({
    key: "gen3-up",
    frames: this.anims.generateFrameNumbers("gen3", { start: 105, end: 112 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen3-left",
    frames: this.anims.generateFrameNumbers("gen3", { start: 118, end: 125 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen3-down",
    frames: this.anims.generateFrameNumbers("gen3", { start: 131, end: 138 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen3-right",
    frames: this.anims.generateFrameNumbers("gen3", { start: 144, end: 151 }),
    frameRate: 5,
    repeat: -1,
  });

   // object layer //
  var start = map.findObject("Object Layer 3",obj => obj.name === "Start");

  // shoes object
  let shoes1 = map.findObject("Object Layer 3", (obj) => obj.name === "shoes1");
  let shoes2 = map.findObject("Object Layer 3", (obj) => obj.name === "shoes2");
  let shoes3 = map.findObject("Object Layer 3", (obj) => obj.name === "shoes3");
  
  this.shoes1 = this.physics.add.sprite(shoes1.x, shoes1.y, "shoes").play("shoesMove").setScale(0.7)
  this.shoes2 = this.physics.add.sprite(shoes2.x, shoes2.y, "shoes").play("shoesMove").setScale(0.7)
  this.shoes3 = this.physics.add.sprite(shoes3.x, shoes3.y, "shoes").play("shoesMove").setScale(0.7)

  // kelefe pants object
let Sblue = map.findObject("Object Layer 3", (obj) => obj.name === "Sblue");
let Sgrey1 = map.findObject("Object Layer 3", (obj) => obj.name === "Sgrey1");
let Sgrey2 = map.findObject("Object Layer 3", (obj) => obj.name === "Sgrey2");

this.Sblue = this.physics.add.sprite(Sblue.x, Sblue.y, "shoes").play("SblueMove").setScale(0.7)
this.Sgrey1 = this.physics.add.sprite(Sgrey1.x, Sgrey1.y, "shoes").play("SgreyMove").setScale(0.7)
this.Sgrey2 = this.physics.add.sprite(Sgrey2.x, Sgrey2.y, "shoes").play("SgreyMove").setScale(0.7)

  // this player sprite
  this.player = this.physics.add.sprite(start.x, start.y, "gen3");
  window.player = this.player;
  
  // create the arrow keys
  this.cursors = this.input.keyboard.createCursorKeys();
  
// var level3Down = this.input.keyboard.addKey("3");
  
//   rDown.on(
//     "down",
//     function () {
//       console.log("R pressed (reload game)");
//       this.scene.start("gameScene");
//     },
//     this
//   );
  
//   aDown.on(
//     "down",
//     function () {
//       console.log("A pressed (main menu)");
//       this.scene.start("preloadScene");
//     },
//     this
//   );

  var level2Down = this.input.keyboard.addKey(50);

// level2Down.on(
//   "down",
//   function () {
//     console.log("2 pressed, jump to level 2");
//     this.scene.start("level2");
//   },
//   this
// );

// make the camera follow the player
this.cameras.main.startFollow(this.player);

//Collectables (Shoes)
this.physics.add.overlap(this.player, this.shoes1, this.collectShoes, null, this);
this.physics.add.overlap(this.player, this.shoes2, this.collectShoes, null, this);
this.physics.add.overlap(this.player, this.shoes3, this.collectShoes, null, this);

//Dont - Collectables (Shoes)
this.physics.add.overlap(this.player, this.Sblue, this.collectXshoes, null, this);
this.physics.add.overlap(this.player, this.Sgrey1, this.collectXshoes, null, this);
this.physics.add.overlap(this.player, this.Sgrey2, this.collectXshoes, null, this);

//Collider
this.wallLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.wallLayer);

this.wallBoarderLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.wallBoarderLayer);

this.furnitureLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.furnitureLayer);

this.furniture2Layer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.furniture2Layer);

this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.5)

// music
this.time_Snd = this.sound.add('gameSong');
this.time_Snd.play();
window.count1 = this.time_Snd;
// window.count1.loop = true;

} // end of create //

update() {
  
if (this.cursors.left.isDown) {
  this.player.setVelocityX(-160);
  this.player.anims.play("gen3-left", true);
} else if (this.cursors.right.isDown) {
  this.player.setVelocityX(160);
  this.player.anims.play("gen3-right", true);
} else if (this.cursors.up.isDown) {
  this.player.setVelocityY(-160);
  this.player.anims.play("gen3-up", true);
} else if (this.cursors.down.isDown) {
  this.player.setVelocityY(160);
  this.player.anims.play("gen3-down", true);
} else {
  this.player.setVelocity(0);
  this.player.anims.stop();
}

// Check for the shoesCount
if (this.shoesCount > 2 ) {
  console.log('Collected 3 shoes, jump to winScene');
  this.scene.start("winScene");
}

// Check for the XpantsCount
if (this.XshoesCount > 0 ) {
  console.log('Wrong shoes, Game Over');
  this.scene.start("overScene");
}
} // end of update //

// Collect Shoes
collectShoes(player, item) {
  console.log("collectShoes");
  this.shoesCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove shoes
  return false;
}

 // Collect Xshoes
 collectXshoes(player, item) {
  console.log("collectXshoes");
  this.XshoesCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove Xshoes
  return false;
}


}