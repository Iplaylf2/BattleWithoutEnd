const privateMap = new WeakMap();
export default class GameService {
    constructor() {
        const _private = {};
        privateMap.set(this, _private);
    }
    loadData() {
    }
    createPlayer() {
    }
    savePlayer() {
    }
    selectPlayer() {
    }
    play() {
    }
    pause() {
    }
    resume() {
    }
    stop() {
    }
}