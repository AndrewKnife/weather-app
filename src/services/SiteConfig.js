class SiteConfig {
  constructor () {
    if (!SiteConfig.Singleton) {
      SiteConfig.Singleton = this
      this.init()
    }
    return SiteConfig.Singleton
  }

  init () {
    this.locale = 'en'
  }
}

export default new SiteConfig()
