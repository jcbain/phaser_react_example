import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';

// import ExampleScene from "./scenes/examplescene";

const Button = () => {
    const [ counter, setCounter ] = useState(0)
    return (
        <button onClick={() => setCounter(prev => prev + 1)}>
            {counter}
        </button>
    )
}

const Game = () => {

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
                gravity: { y: 300 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    }

    useEffect(() => {

        new Phaser.Game(config)

    }, [config])

    return (
        <>
        <div id="phaser-game" />
        <Button />
        </>
    )
}

export default Game;