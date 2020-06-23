class HistoryHelper {
  static setQueryParameter(key, value) {
    if ('URLSearchParams' in window) {
      let searchParams = new URLSearchParams(window.location.search)
      value ? searchParams.set(key, value) : searchParams.delete(key)
      let newRelativePathQuery = window.location.pathname
      newRelativePathQuery += searchParams.toString() ? '?' + searchParams.toString() : ''
      window.history.replaceState(null, '', newRelativePathQuery)
    }
  }

  static getQueryParameter(key) {
    if ('URLSearchParams' in window) {
      let searchParams = new URLSearchParams(window.location.search)
      return searchParams.get(key)
    }
    return null
  }
}

export default HistoryHelper
