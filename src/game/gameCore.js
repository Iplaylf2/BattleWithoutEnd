const privateMap = new WeakMap();
export default class GameCore {
    constructor() {
        const _private = {};
        privateMap.set(this, _private);
    }
    tick() {
    }
}