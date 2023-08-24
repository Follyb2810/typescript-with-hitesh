"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReel() {
        return 8;
    }
}
class intagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepaia() {
        console.log('serpis');
    }
}
const foll = new intagram('folly', 'folly', 3);
foll.getReel();
