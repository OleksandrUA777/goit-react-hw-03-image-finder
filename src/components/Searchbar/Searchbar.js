import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  Button,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  inputChangeHandler = event => {
    this.setState({ query: event.currentTarget.value });
  };
  formSubmitHandler = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarWrap className="searchbar">
        <SearchForm className="form" onSubmit={this.formSubmitHandler}>
          <Button type="submit" className="button">
            <ButtonLabel className="button-label">Search</ButtonLabel>
          </Button>

          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.inputChangeHandler}
          />
        </SearchForm>
      </SearchbarWrap>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
