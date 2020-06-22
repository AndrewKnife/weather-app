import React from 'react';
import InputDropDown from "./basic/InputDropDown";
import FormButton from "./basic/FormButton";
import TranslationsHelper from "../services/helpers/TranslationsHelper";

const COUNTRIES_KEY = 'countries'
const DATA_FILE_TYPE = '.json'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      citiesList: [],
      countryString: '',
      cityString: ''
    }
    this.onCountryInput = this.onCountryInput.bind(this)
    this.onCityInput = this.onCityInput.bind(this)
    this.onCityActive = this.onCityActive.bind(this)
    this.loadCountries = this.loadCountries.bind(this)
    this.loadCities = this.loadCities.bind(this)
    this.searchAction = this.searchAction.bind(this)
  }

  onCountryInput(value) {
    this.setState(() => ({
      countryString: value
    }))
  }

  onCityInput(value) {
    this.setState(() => ({
      cityString: value
    }))
    this.loadCities()
  }

  onCityActive() {
    this.loadCities()
  }

  loadCountries() {
    import('../assets/json/countries/countries.json').then((data) => {
      this.setState(() => ({
        countriesList: data[COUNTRIES_KEY]
      }))
    })
  }

  loadCities = () => {
    if (this.state.countriesList.includes(this.state.countryString)) {
      try {
        import('../assets/json/countries/cities/' + this.state.countryString + DATA_FILE_TYPE).then((data) => {
          this.setState(() => ({
            citiesList: data[this.state.countryString]
          }))
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      console.log('the country is invalid')
    }
  }

  searchAction() {

  }

  render() {
    return (
      <form className="col-12 text-center" onClick={this.loadCountries}>
        <InputDropDown value={this.state.countryString} list={this.state.countriesList}
                       onChange={this.onCountryInput} placeholder={TranslationsHelper.translate('country')}/>
        <InputDropDown value={this.state.cityString} list={this.state.citiesList} onChange={this.onCityInput}
                       onActive={this.onCityActive} placeholder={TranslationsHelper.translate('city')}/>
        <FormButton onClick={this.searchAction}/>
      </form>
    );
  }
}

export default SearchBar
