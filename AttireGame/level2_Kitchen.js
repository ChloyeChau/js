
class level2_Kitchen extends Phaser.Scene {

    constructor (){
        super({key: 'level2_Kitchen' });
        this.pantsCount = 0;
        this.XpantsCount = 0;
    }

    preload () {
//Step 1, load JSON
    this.load.tilemapTiledJSON("map2","assets/Kitchen.tmj");

//Step 2, peload any images here
    this.load.image("KitchenIMG","assets/12_Kitchen_32x32.png")
    this.load.image("RoomBuilderIMG","assets/Room_Builder_free_32x32.png")

    this.load.spritesheet("gen2","assets/shirtGen.png", {
    frameWidth: 64,
    frameHeight: 64,
    });

    this.load.spritesheet("pants", "assets/Pants.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("blackP", "assets/blackP.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("blueP", "assets/blueP.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    //mp3
    this.load.audio('gameSong', 'assets/gameSong.mp3');

} // end of preload //

    create (){

      // this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });
      

    this.anims.create({
      key: "pantsMove",
      frames: this.anims.generateFrameNumbers("pants", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,

    })
    
    this.anims.create({
      key: "blackPMove",
      frames: this.anims.generateFrameNumbers("blackP", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,

    })

    this.anims.create({
      key: "bluePMove",
      frames: this.anims.generateFrameNumbers("blueP", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,

    })

//Step 3, create the map from main
let map = this.make.tilemap ({key: "map2"});

//Step 4, load the game tiles
//1st parameter is name in Tiled,
//2nd parameter is key in Preload

let floorTiles = map.addTilesetImage("RoomBuilder", "RoomBuilderIMG");
let furnitureTiles = map.addTilesetImage("Kitchen", "KitchenIMG");

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
this.furniture2Layer = map.createLayer("Furniture2",tilesArray,0,0);

this.anims.create({
    key: "gen2-up",
    frames: this.anims.generateFrameNumbers("gen2", { start: 105, end: 112 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen2-left",
    frames: this.anims.generateFrameNumbers("gen2", { start: 118, end: 125 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen2-down",
    frames: this.anims.generateFrameNumbers("gen2", { start: 131, end: 138 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "gen2-right",
    frames: this.anims.generateFrameNumbers("gen2", { start: 144, end: 151 }),
    frameRate: 5,
    repeat: -1,
  });

  // object layer //
  var start = map.findObject("Object Layer 2",obj => obj.name === "Start");

// pants object
let pants1 = map.findObject("Object Layer 2", (obj) => obj.name === "pants1");
let pants2 = map.findObject("Object Layer 2", (obj) => obj.name === "pants2");
let pants3 = map.findObject("Object Layer 2", (obj) => obj.name === "pants3");

this.pants1 = this.physics.add.sprite(pants1.x, pants1.y, "pants").play("pantsMove").setScale(0.7)
this.pants2 = this.physics.add.sprite(pants2.x, pants2.y, "pants").play("pantsMove").setScale(0.7)
this.pants3 = this.physics.add.sprite(pants3.x, pants3.y, "pants").play("pantsMove").setScale(0.7)

// kelefe pants object
let blackP1 = map.findObject("Object Layer 2", (obj) => obj.name === "blackP1");
let blackP2 = map.findObject("Object Layer 2", (obj) => obj.name === "blackP2");
let blueP = map.findObject("Object Layer 2", (obj) => obj.name === "blueP");

this.blackP1 = this.physics.add.sprite(blackP1.x, blackP1.y, "pants").play("blackPMove").setScale(0.7)
this.blackP2 = this.physics.add.sprite(blackP2.x, blackP2.y, "pants").play("blackPMove").setScale(0.7)
this.blueP = this.physics.add.sprite(blueP.x, blueP.y, "pants").play("bluePMove").setScale(0.7)

// this player sprite
  this.player = this.physics.add.sprite(start.x, start.y, "gen2");
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

//Collectables (Pants)
this.physics.add.overlap(this.player, this.pants1, this.collectPants, null, this);
this.physics.add.overlap(this.player, this.pants2, this.collectPants, null, this);
this.physics.add.overlap(this.player, this.pants3, this.collectPants, null, this);

//Dont - Collectables (Pants)
this.physics.add.overlap(this.player, this.blackP1, this.collectXpants, null, this);
this.physics.add.overlap(this.player, this.blackP2, this.collectXpants, null, this);
this.physics.add.overlap(this.player, this.blueP, this.collectXpants, null, this);

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
  this.player.anims.play("gen2-left", true);
} else if (this.cursors.right.isDown) {
  this.player.setVelocityX(160);
  this.player.anims.play("gen2-right", true);
} else if (this.cursors.up.isDown) {
  this.player.setVelocityY(-160);
  this.player.anims.play("gen2-up", true);
} else if (this.cursors.down.isDown) {
  this.player.setVelocityY(160);
  this.player.anims.play("gen2-down", true);
} else {
  this.player.setVelocity(0);
  this.player.anims.stop();
}
if (
  this.player.x > 801 &&
  this.player.y > 378 &&
  this.player.y < 479
) {
  console.log("Door2");
  this.level3_Bedroom();
}

// Check for the pantsCount
if (this.pantsCount > 2 ) {
  console.log('Collected 3 pants, jump to scene then level3_Bedroom');
  this.scene.start("pantsScene");
}

// Check for the XpantsCount
if (this.XpantsCount > 0 ) {
  console.log('Wrong pants, Game Over');
  this.scene.start("overScene");
}

} // end of update //

// Game Timeout //
// delay10Seconds(){
    
//   // this.timeSnd.play();
//   console.log("after 10 secs");
//   // if(collect 3pants, jump to level3)
//   // else(start from level1)
//   this.scene.start("level1");
// } 

level3_Bedroom(player, tile) {
  console.log("pantsScene");
  this.scene.start("pantsScene",);
}

// Collect Pants
collectPants(player, item) {
  console.log("collectPants");
  this.pantsCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove pants
  return false;
}

 // Collect Xpants
 collectXpants(player, item) {
  console.log("collectXpants");
  this.XpantsCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove Xpants
  return false;
}


}