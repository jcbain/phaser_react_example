import { Scene } from "phaser";

export default class ExampleScene extends Scene {
  create() {
    const text = this.add.text(250, 250, "Toggle UI", {
      backgroundColor: "white",
      color: "blue",
      fontSize: 48
    });

    text.setInteractive({ useHandCursor: true });

    }
}