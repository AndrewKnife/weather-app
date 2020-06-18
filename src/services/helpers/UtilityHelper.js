class UtilityHelper {
  /**
   * @param {string} string
   * @param data
   * @returns string
   */
  static formatString (string, ...data) {
    if (string) {
      for (let i = 0; i < data.length; i++) {
        let reg = '%s'
        if (!string.includes('%s')) {
          reg = new RegExp('\\{' + i + '\\}', 'gm')
        }
        string = string.replace(reg, data[i])
      }
      return string
    }
  }
}

export default UtilityHelper
