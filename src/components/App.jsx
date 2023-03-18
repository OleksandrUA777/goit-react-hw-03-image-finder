import { Component } from 'react';
import { Button } from './Button/Button';
import { fetchImages } from './helpers/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    data: '',
    page: 1,
    images: [],

    show: false,
    loading: false,
  };
  componentDidUpdate(prevProp, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;

    if (currentQuery.trim() === '') {
      alert('введи щось');
      return;
    }
    if (prevQuery !== currentQuery || prevState.page !== this.state.page) {
      fetchImages(this.state.query, this.state.page).then(images => {
        this.setState(prev => ({ images: [...prev.images, ...images] }));
        this.setState({ show: images.length >= 12, loading: false });
      });
    }
  }
  resetData = () => {
    this.setState({ images: [], page: 1 });
  };
  handleSubmit = query => {
    this.setState({ query, loading: true });
    this.resetData();
  };
  LoadMoreClickHandler = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, loading: true, show: false };
    });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {this.state.show && <Button onClick={this.LoadMoreClickHandler} />}
        {this.state.loading && <Loader />}
      </>
    );
  }
}
