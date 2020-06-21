import SiteConfig from "../SiteConfig";
import {formatString} from "./UtilityHelper";

const ERROR_USING_DEFAULT_TRANSLATIONS = '%s - was not found! Using default translations'
const FILE_TYPE = '.json'

class TranslationsHelper {
    constructor() {
        if (!TranslationsHelper.Singleton) {
            TranslationsHelper.Singleton = this
            this.init()
        }
        return TranslationsHelper.Singleton
    }

    init() {
        try {
            this.translations = require('../../assets/translations/' + SiteConfig.locale + FILE_TYPE)
        } catch (e) {
            this.useFallbackTranslations()
        }
    }

    useFallbackTranslations() {
        this.translations = require('../../assets/translations/en' + FILE_TYPE)
        console.error(formatString(ERROR_USING_DEFAULT_TRANSLATIONS, SiteConfig.locale + FILE_TYPE))
    }

    translate(key, ...data) {
        if (data) {
            return formatString(this.translations[key], ...data)
        }
        return this.translations[key]
    }
}

export default new TranslationsHelper()
