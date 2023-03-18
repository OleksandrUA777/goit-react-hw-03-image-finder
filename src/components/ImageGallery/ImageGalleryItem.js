import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, Item } from './ImageGallery.styled';

export class ImageGalleryItem extends Component {
  state = {
    open: false,
    src: '',
  };
  openModal = event => {
    this.setState({ open: true, src: event.currentTarget.src });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <>
        <Item className="ImageGalleryItem">
          <Image
            className="ImageGalleryItem-image "
            src={largeImageURL}
            alt={tags}
            width="400px"
            onClick={this.openModal}
          />
        </Item>
        {this.state.open && (
          <Modal closeModal={this.closeModal} src={this.state.src} />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

// render() {
//   const { images } = this.props;
//   return images.map(({ id, previewURL, largeImageURL, tags }) => {
//     return (
//       <>
//         <li key={id} className="gallery-item">
//           <img
//             src={largeImageURL}
//             alt={tags}
//             width={90}
//             onClick={this.openModal}
//           />
//         </li>
//       </>
//     );
//   });
// }
