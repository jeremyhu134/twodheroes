const config = {
type: Phaser.AUTO,
width: 1280,
height: 660,
backgroundColor: "a9a9a9",
physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      enableBody: true,
    }
},
  scene:[MenuScene,ArenaScene]
};

const game = new Phaser.Game(config);

let gameState = {
    hero: null,
    gameover: false,
    amountcrawlers: 0,
    wave : 0,
    ballmechStats: {
        health: 400,
        ammo : 30,
        primarydamage: 10,
        primaryvelocityx: 800,
        primaryspread: 10,
        releadtime : 3000,
        velocityY: -500,
        velocityX: 200,
        primarycooldown : 10,
        ability1cooldown : 750,
        ability1damage: 0,
        herogravity : 0
    },
    alientrooperStats: {
        health: 150,
        ammo : 10,
        primarydamage: 8,
        primaryvelocityx: 800,
        primaryspread: 10,
        releadtime : 1500,
        velocityY: -610,
        velocityX: 300,
        primarycooldown : 3,
        ability1cooldown : 1000,
        ability1damage: 0,
        herogravity : 0
    },
    reconexpertStats: {
        health: 200,
        ammo : 5,
        primarydamage: 50,
        primaryvelocityx: 1500,
        primaryspread: 0,
        releadtime : 1800,
        velocityY: -610,
        velocityX: 235,
        primarycooldown : 40,
        ability1cooldown : 200,
        ability1damage: 5,
        herogravity : 0,
        
    },
    goliathheroStats: {
        health: 325,
        ammo : 150,
        primarydamage: 3,
        primaryvelocityx: 600,
        primaryspread: 100,
        releadtime : 1000,
        velocityY: -610,
        velocityX: 225,
        primarycooldown : 8,
        ability1cooldown : 400,
        ability1damage: 20,
        herogravity : 0
    },
    zaroStats: {
        health: 200,
        ammo : 60,
        primarydamage: 3,
        primaryvelocityx: 850,
        primaryspread: 100,
        releadtime : 2000,
        velocityY: -610,
        velocityX: 240,
        primarycooldown : 2,
        ability1cooldown : 400,
        ability1damage: 25,
        herogravity : 0
    },
    acreeStats: {
        health: 250,
        ammo : 1,
        primarydamage: 40,
        primaryvelocityx: 1000,
        primaryspread: 1,
        releadtime : 600,
        velocityY: -610,
        velocityX: 235,
        primarycooldown : 2,
        ability1cooldown :850,
        ability1damage: 80,
        herogravity : 0
    },
    theadminStats: {
        health: 300,
        ammo : 10,
        primarydamage: 25,
        primaryvelocityx: 700,
        primaryspread: 1,
        releadtime : 2000,
        velocityY: -610,
        velocityX: 250,
        primarycooldown : 40,
        ability1cooldown :500,
        ability1damage: 10,
        herogravity : 0
    },
    lucioStats: {
        health: 200,
        ammo : 20,
        primarydamage: 20,
        primaryvelocityx: 800,
        primaryspread: 1,
        releadtime : 2000,
        velocityY: -610,
        velocityX: 300,
        primarycooldown : 40,
        ability1cooldown : 600,
        ability1damage: 0,
        herogravity : 0
    },
    reset () {
        gameState.score = 0;
        gameState.enemyscore = 0;
        gameState.gameover = false;
    }
}
