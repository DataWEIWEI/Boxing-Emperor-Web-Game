import { Player } from "/static/js/player/base.js";
import { GIF } from "/static/js/utils/gif.js";

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animation();
    }

    init_animation() {
        let outer = this;
        let offsety = [0, -22, -22, -140, 0, 0, 0];
        let offsetx = [0, 0, 0, -30, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animation.set(i, {
                gif: gif,
                frame_cnt: 0, // total count of images
                frame_rate: 5, // render images per five frames
                offset_y: offsety[i],
                offset_x: offsetx[i],
                loaded: false, // load iamges complete or not
                scale: 2, // magnification times
            });

            gif.onload = function () {
                let obj = outer.animation.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 4;
                }
            }
        }
    }
}