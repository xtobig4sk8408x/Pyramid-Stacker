import PyramidMap from "./PyramidMap.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileSize = 32;

const pyramidMap = new PyramidMap(tileSize);

function gameLoop() {
    pyramidMap.draw(canvas, ctx);
}

setInterval(gameLoop, 1000 / 60);