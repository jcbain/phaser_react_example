import React, { useEffect } from 'react';
import Phaser from 'phaser';

const Game = () => {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height:800,
        parent: "phaser-game",
    }

    useEffect(() => {
        new Phaser.Game(config)
    }, [])

    return <div id="phaser-game" />
}

export default Game;