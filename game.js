class SceneOne extends Phaser.Scene
{
    constructor ()
    {
        super('sceneone');   
    }

    preload ()
    {
        
    }

    create () 
    {
        this.cameras.main.setBackgroundColor('#737373');
        this.add.text(150, 200, "Game Name", {color: '#FFFFFF'}).setFontSize(35);
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