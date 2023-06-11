let Game_Object = [];

class GameObeject {
    constructor() {
        Game_Object.push(this);

        this.timedelta = 0;
        this.has_class_start = false;
    }

    start () { // initial run once

    }

    update () { // it is executed onec per time(except for first time)
    
    }

    destroy () { // delete current object
        for (let i in Game_Object) {
            if (Game_Object[i] === this) { 	// if this object is the one being, delete it
                Game_Object.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;
let Game_Object_Frame = (timestamp) => {
    for (let obj of Game_Object) {
        if (!obj.has_class_start) {
            obj.start(); // start object's run function only once per frame.
            obj.has_class_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(Game_Object_Frame);
}

requestAnimationFrame(Game_Object_Frame);

export {
    GameObeject
}

