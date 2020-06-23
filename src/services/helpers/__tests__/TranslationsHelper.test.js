import TranslationsHelper from "../TranslationsHelper";

test('TranslationHelper Initializes', () => {
    expect(TranslationsHelper.init()).toBeValid;
});

test('TranslationHelper returns translations by key', () => {
    expect(TranslationsHelper.translate('country')).toStrictEqual('Country');
});
