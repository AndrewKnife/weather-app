import {formatString} from './UtilityHelper'

const KEY_MISMATCH_WARNING = 'The response contained a key that is not described in the store with key name: {0}'

class ObjectLoader {
  constructor () {
    if (!ObjectLoader.Singleton) {
      ObjectLoader.Singleton = this
    }
    return ObjectLoader.Singleton
  }

  loadFromResponse (store, response) {
    if (response) {
      Object.keys(response).forEach((key) => {
        if (store.hasOwnProperty(key)) {
          store[key] = response[key]
        } else {
          console.warn(formatString(KEY_MISMATCH_WARNING, key))
        }
      })
    }
  }
}

export default new ObjectLoader()
