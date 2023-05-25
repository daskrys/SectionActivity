class SceneOne extends Phaser.Scene
{
    constructor ()
    {
       
        
    }

    preload ()
    {
        
    }

    create () 
    {

    }

    update () 
    {
       
    }
}

let config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 500,
        height: 800,
    },

    scene: [SceneOne],
    title: "Prototype",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);