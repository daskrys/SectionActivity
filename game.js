class SceneOne extends Phaser.Scene
{
    constructor ()
    {
        super('sceneone');   
    }

    preload ()
    {
        this.load.image('snail', 'assets/snail.jpg');
        this.load.image('roly', 'assets/rolypoly.png');
        this.load.image('background', 'assets/background.png')
        this.load.image('start', 'assets/start.png')
        this.load.image('fairy', 'assets/fairy.png')
    }

    create () 
    {
        // get the screen width + height
        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor('#737373');
        
        this.add.text(90, 200, "Roly Poly: To the End", {color: '#FFFFFF'}).setFontSize(25);
        
        this.add.image(width * 0.5, height * 0.5, 'background');
        let start = this.add.image(width * 0.5, height * 0.325, 'start');
        let fairy1 = this.add.image(width * 0, height * 0.5, 'fairy');
        fairy1.setScale(0.25);

        let roly1 = this.add.image(width * 0.2, height * 0.65, 'roly');
        roly1.setScale(0.4);
        roly1.flipX=true;

        this.tweens.add({
            targets: start,
            //x: width * 0.5,
            //alpha:0,
            duration: 1000,
            ease: 'Linear',
        });
        this.tweens.add({
            targets: fairy1,
            x: width * 0.90,
            //alpha:0,
            duration: 10000,
            ease: 'Linear',
        });
        this.tweens.add({
            targets: roly1,
            x: width * 0.50,
            //alpha:0,
            duration: 10000,
            ease: 'Linear',
        });

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