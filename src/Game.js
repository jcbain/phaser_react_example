import React, { useEffect, useCallback } from 'react';
import Phaser from 'phaser';
import ExampleScene from './scenes/examplescene'

const Game = ({initialized}) => {

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [ExampleScene] 
    }

    useEffect(() => {
        if(!initialized){
            new Phaser.Game(config)
        }
    }, [config])

    return (
        <div id="phaser-game" />
    )
}

export default Game;