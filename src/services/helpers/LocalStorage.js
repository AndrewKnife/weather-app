class LocalStorage {
    constructor() {
        if (!LocalStorage.Singleton) {
            LocalStorage.Singleton = this
        }
        return LocalStorage.Singleton
    }

    getDataByKey(key) {
        return JSON.parse(localStorage[key] || null);
    }

    saveToStorage(key, data) {
        localStorage[key] = JSON.stringify(data);
    }

    saveToObjectArrayByIdKey(key, data, id) {
        let lsData = this.getDataByKey(key)
        let exists = false
        if(!Array.isArray(lsData)){
            lsData = []
        }
        for (let i = 0; i < lsData.length; i++) {
            if (lsData[i] && lsData[i][id] === data[id]) {
                exists = true
            }
        }
        if (!exists) {
            lsData.push(data)
            this.saveToStorage(key, lsData)
        }
    }

    removeFromObjectArrayByIdKey(key, id, value) {
        let lsData = this.getDataByKey(key)
        for (let i = 0; i < lsData.length; i++) {
            if (lsData[i][id] === value) {
                lsData.splice(i, 1);
                this.saveToStorage(key, lsData)
            }
        }
    }
}

export default new LocalStorage()
