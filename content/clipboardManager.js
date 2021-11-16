import Notifier from './utils/Notifier.js';

class ClipboardManager {
    constructor() {
        this._datas = new Set();
        this.clipboardChangeNotifier = new Notifier();
    }

    add(data) {
        this._datas.add(data);
        this.clipboardChangeNotifier.executeCallbacks();
    }

    getAll() {
        return [...this._datas];
    }

    remove(data) {
        const size = this._datas.size;

        this._datas.delete(data);

        if (size > this._datas.size) {
            this.clipboardChangeNotifier.executeCallbacks();
        }
    }

    removeAll() {
        if (this._datas.size === 0) {
            return;
        }

        this._datas.clear();
        this.clipboardChangeNotifier.executeCallbacks();
    }
}

export default new ClipboardManager();
