import React, { useEffect, useCallback } from 'react';
import Phaser from 'phaser';

// import ExampleScene from "./scenes/examplescene";



const Game = ({initialized}) => {

    function preload () {
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    function create () {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles('red');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        const logo = this.physics.add.image(400, 100, 'logo');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo);
    }

    const config = {
        type: Phaser.AUTO,
        width:  800,
        height: 800,
        parent: "phaser-game",
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 100 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    }
    const game = useCallback(() => {
        if(!initialized){
            new Phaser.Game(config)
        }

    }, [config])


    useEffect(() => {
        game()
    }, [config])

    return (
        <div id="phaser-game" />
    )
}

export default Game;