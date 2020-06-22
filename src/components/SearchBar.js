import React from 'react';
import InputDropDown from "./basic/InputDropDown";
import FormButton from "./basic/FormButton";
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import {formatString} from "../services/helpers/UtilityHelper";
import {connect} from "react-redux";
import historyActions from "../store/history/historyActions";

const COUNTRIES_KEY = 'countries'
const DATA_FILE_TYPE = '.json'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      citiesList: [],
      countryString: '',
      cityString: '',
      invalidCountry: false
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
      countryString: value,
      cityString: ''
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
        this.setState({invalidCountry: false})
      } catch (e) {
        this.setState({invalidCountry: true, citiesList: []})
      }
    } else {
      this.setState({invalidCountry: true, citiesList: []})
    }
  }

  searchAction(e) {
    e.preventDefault()
    this.props.updateHistory(formatString('%s,%s', this.state.cityString, this.state.countryString))
  }

  render() {
    return (
      <form className="col-12 text-center" onClick={this.loadCountries}>
        <InputDropDown value={this.state.countryString} list={this.state.countriesList}
                       class={this.state.invalidCountry ? 'invalid' : null}
                       onChange={this.onCountryInput} placeholder={TranslationsHelper.translate('country')}/>
        <InputDropDown value={this.state.cityString} list={this.state.citiesList} onChange={this.onCityInput}
                       onActive={this.onCityActive} placeholder={TranslationsHelper.translate('city')}/>
        <FormButton onClick={this.searchAction}/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHistory: (query) => {
      dispatch(historyActions.updateHistory(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)