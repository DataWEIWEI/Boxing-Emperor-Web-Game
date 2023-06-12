import { GameObeject } from '/static/js/game_object/base.js';
import { Controller } from '/static/js/controller/base.js';

class GameMap extends GameObeject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.Controller = new Controller(this.$canvas);
    }

    start() {

    }

    update() {
        this.render(); // clear(redo render) the contents of the previous frame
    }

    render() {
        // this.cts.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height())
    }
}

export {
    GameMap
}