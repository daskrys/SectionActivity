class SceneOne extends Phaser.Scene
{
    constructor ()
    {
        super('sceneone');   
    }

    preload ()
    {
        this.load.image('snail', 'assets/snail.jpg');
        this.load.image('roly', 'assets/roly.png');
    }

    create () 
    {
        this.cameras.main.setBackgroundColor('#737373');
        this.add.text(90, 200, "Roly Poly: To the End", {color: '#FFFFFF'}).setFontSize(25);

        
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
    title: "Prototype",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);