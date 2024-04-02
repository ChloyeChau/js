class level1_Living extends Phaser.Scene {
  constructor() {
    super({ key: "level1_Living" });
    this.shirtCount = 0;
    this.XshirtCount = 0;
  }

  preload() {
    //Step 1, load JSON
    this.load.tilemapTiledJSON("map1", "assets/LivingRoom.tmj");

    //Step 2, peload any images here
    this.load.image("BedroomIMG", "assets/4_Bedroom_32x32.png");
    this.load.image("LivingRoomIMG", "assets/2_LivingRoom_32x32.png");
    this.load.image("RoomBuilderIMG", "assets/Room_Builder_free_32x32.png");

    this.load.spritesheet("gen1", "assets/nakedGen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("shirt", "assets/Shirt.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("blueS", "assets/blueS.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("pinkS", "assets/pinkS.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("stripeS", "assets/stripeS.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

  } // end of preload //

  create() {

    this.anims.create({
      key: "shirtMove",
      frames: this.anims.generateFrameNumbers("shirt", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,
    })

    this.anims.create({
      key: "blueSMove",
      frames: this.anims.generateFrameNumbers("blueS", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,
    })

    this.anims.create({
      key: "pinkSMove",
      frames: this.anims.generateFrameNumbers("pinkS", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,
    })

    this.anims.create({
      key: "stripeSMove",
      frames: this.anims.generateFrameNumbers("stripeS", {start:0,end:1}),
      frameRate: 6,
      repeat: -1,
    })

    //Step 3, create the map from main
    let map = this.make.tilemap({ key: "map1" });

    //Step 4, load the game tiles
    //1st parameter is name in Tiled,
    //2nd parameter is key in Preload

    let floorTiles = map.addTilesetImage("RoomBuilder", "RoomBuilderIMG");
    let furnitureTiles = map.addTilesetImage("LivingRoom", "LivingRoomIMG");
    let furniture2Tiles = map.addTilesetImage("Bedroom", "BedroomIMG");

    //Step 5, create an array of tiles
    let tilesArray = [floorTiles, furnitureTiles, furniture2Tiles];

    //Step 6, load in layer by layer
    this.floorLayer = map.createLayer("Floor", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("Wall", tilesArray, 0, 0);
    this.wallBoarderLayer = map.createLayer("Wall Boarder", tilesArray, 0, 0);
    this.furnitureLayer = map.createLayer("Furniture", tilesArray, 0, 0);
    this.furniture2Layer = map.createLayer("Furniture 2", tilesArray, 0, 0);

// player stays within map
// this.physics.world.bounds.width = this.floorLayer.width
// this.physics.world.bounds.height = this.floorLayer.height
// this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "gen-up",
      frames: this.anims.generateFrameNumbers("gen1", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-left",
      frames: this.anims.generateFrameNumbers("gen1", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-down",
      frames: this.anims.generateFrameNumbers("gen1", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-right",
      frames: this.anims.generateFrameNumbers("gen1", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    // object layer //
    let start = map.findObject("Object Layer 1", (obj) => obj.name === "Start");

    // shirt object
    let shirt1 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt1");
    let shirt2 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt2");
    let shirt3 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt3");

    this.shirt1 = this.physics.add.sprite(shirt1.x, shirt1.y, "shirt").play("shirtMove").setScale(0.7)
    this.shirt2 = this.physics.add.sprite(shirt2.x, shirt2.y, "shirt").play("shirtMove").setScale(0.7)
    this.shirt3 = this.physics.add.sprite(shirt3.x, shirt3.y, "shirt").play("shirtMove").setScale(0.7)

     // kelefe shirts object
     let blueS = map.findObject("Object Layer 1", (obj) => obj.name === "blueS");
     let pinkS = map.findObject("Object Layer 1", (obj) => obj.name === "pinkS");
     let stripeS = map.findObject("Object Layer 1", (obj) => obj.name === "stripeS");
 
     this.blueS = this.physics.add.sprite(blueS.x, blueS.y, "shirt").play("blueSMove").setScale(0.7)
     this.pinkS = this.physics.add.sprite(pinkS.x, pinkS.y, "shirt").play("pinkSMove").setScale(0.7)
     this.stripeS = this.physics.add.sprite(stripeS.x, stripeS.y, "shirt").play("stripeSMove").setScale(0.7)

    // this player sprite
    this.player = this.physics.add.sprite(start.x, start.y, "gen1");
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

    //Collectables (Shirt)
    this.physics.add.overlap(this.player, this.shirt1, this.collectShirt, null, this);
    this.physics.add.overlap(this.player, this.shirt2, this.collectShirt, null, this);
    this.physics.add.overlap(this.player, this.shirt3, this.collectShirt, null, this);

     //Dont - Collectables (Shirt)
     this.physics.add.overlap(this.player, this.blueS, this.collectXshirt, null, this);
     this.physics.add.overlap(this.player, this.pinkS, this.collectXshirt, null, this);
     this.physics.add.overlap(this.player, this.stripeS, this.collectXshirt, null, this);

    //Collider
    this.wallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wallLayer);

    this.wallBoarderLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wallBoarderLayer);

    this.furnitureLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.furnitureLayer);

    this.furniture2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.furniture2Layer);

    this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.5);

  } // end of create //

  update() {

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
    if (this.player.x > 803 && this.player.y > 400 && this.player.y < 466) {
      console.log("Door1");
      this.level2_kitchen();
    }

     // Check for the shirtCount
     if (this.shirtCount > 2 ) {
      console.log('Collected 3 shirt, jump to scene then level2_Kitchen');
      this.scene.start("shirtScene");
  }

 // Check for the XshirtCount
 if (this.XshirtCount > 0 ) {
  console.log('Wrong shirt, Game Over');
  this.scene.start("overScene");
}

  } // end of update //

  level2_kitchen(player, tile) {
    console.log("shirtScene");
    this.scene.start("shirtScene");
  }
  
// Collect Shirt
  collectShirt(player, item) {
    console.log("collectShirt");
    this.shirtCount++
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove shirt
    return false;
  }

  // Collect Xshirt
  collectXshirt(player, item) {
    console.log("collectXshirt");
    this.XshirtCount++
    // this.cameras.main.shake(200);
    item.disableBody(true, true); // remove Xshirt
    return false;
  }

}
