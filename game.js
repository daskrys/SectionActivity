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
        width: 1920,
        height: 1080,
    },

    scene: [SceneOne],
    title: "Temp Name",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);