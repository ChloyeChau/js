
class level2_Kitchen extends Phaser.Scene {

    constructor ()
    {
        super({key: 'level2_Kitchen' });
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

} // end of preload //

    create (){

    // console.log("animationScene")

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

  var start = map.findObject("Object Layer 2",obj => obj.name === "Start");
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


} // end of create //


update() {
  this.wallLayer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.wallLayer);

  this.wallBoarderLayer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.wallBoarderLayer);

  this.furnitureLayer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.furnitureLayer);

  this.furniture2Layer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.furniture2Layer);

  this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.5)
  
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
} // end of update //

level3_Bedroom(player, tile) {
  console.log("level3_Bedroom");
  this.scene.start("level3_Bedroom",);
}
}