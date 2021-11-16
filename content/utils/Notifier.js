export default class Notifier {
    constructor() {
        this._callbacks = new Set();
    }

    addCallback(cb) {
        this._callbacks.add(cb);

        return () => {
            this.removeCallback(cb);
        };
    }

    removeCallback(cb) {
        this._callbacks.delete(cb);
    }

    executeCallbacks() {
        this._callbacks.forEach(cb => cb());
    }
}
