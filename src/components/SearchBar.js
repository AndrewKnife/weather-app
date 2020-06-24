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
    this.clearSearch = this.clearSearch.bind(this)
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

  clearSearch(e) {
    e.preventDefault()
    this.setState({countryString: '', cityString: '', citiesList: []})
    this.props.updateHistory('')
  }

  render() {
    return (
      <form className="col-12 text-center" onClick={this.loadCountries}>
        <InputDropDown value={this.state.countryString} list={this.state.countriesList}
                       class={this.state.invalidCountry ? 'invalid' : null}
                       wrapperClass="col-12 col-md-2"
                       onChange={this.onCountryInput} placeholder={TranslationsHelper.translate('country')}/>
        <InputDropDown value={this.state.cityString} list={this.state.citiesList} onChange={this.onCityInput}
                       wrapperClass="col-12 col-md-2"
                       onActive={this.onCityActive} placeholder={TranslationsHelper.translate('city')}/>
        <div className="col-12 col-md-2 col-xl-1 d-inline-block px-2">
          <FormButton onClick={this.searchAction} label={TranslationsHelper.translate('search')} class="col-12"/>
        </div>
        {this.props.history ? (
          <div className="mt-3">
            <span>{TranslationsHelper.translate('searched-for-label')}</span>
            <span className="bold px-3">{this.props.history}</span>
            <FormButton onClick={this.clearSearch} label={TranslationsHelper.translate('clear-search')}/>
          </div>
        ) : null}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHistory: (query) => {
      dispatch(historyActions.updateHistory(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)