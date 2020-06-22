class HistoryHelper {
  static setQueryParameter(key, value) {
    if ('URLSearchParams' in window) {
      let searchParams = new URLSearchParams(window.location.search)
      searchParams.set(key, value)
      let newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
      window.history.replaceState(null, '', newRelativePathQuery);
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
