# React Phaser App

This is a POC

Ripped from [here](https://github.com/bschulte/phaser3-react-example) but not in TypeScript

Creates an example scene inside a react component using `useEffect`

#### install
```sh
yarn 
```

#### run local
```sh
yarn start
```

### Problems with creating a Phaser instance as a React component

There is somewhat of an issue with making this two libraries play nicely together. Initially, when the `<Game />` component is rendered, a phaser instance is loaded up but if state changes at a parent level above, then a new phaser instance will appear below the original and every subsequent time it is changed.

However, I solved this with a prop added to `<Game initialized/>` when this is set to `true` a new game will not be rendered because of a condition set in `useEffect` within the `Game` component. A custom hook was added `useLoadedGame` to load up the game once so that state above doesn't influence any rendering actions performed on `Game`.
