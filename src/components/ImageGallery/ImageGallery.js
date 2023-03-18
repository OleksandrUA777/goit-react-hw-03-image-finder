import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <List className="ImageGallery">
      {images.map(({ webformatURL, id, ...otherProps }) => (
        <ImageGalleryItem
          image={webformatURL}
          key={id}
          {...otherProps}
        ></ImageGalleryItem>
      ))}
    </List>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
// return (
//     <ul className="gallery">
//       {images.map(({ id, previewURL, largeImageURL, tags }) => {
//         return (
//           <>
//             <li key={id} className="gallery-item">
//               <img
//                 src={largeImageURL}
//                 alt={tags}
//                 width={90}
//                 onClick={this.openModal}
//               />
//             </li>
//           </>
//         );
//       })}
//       <ImageGalleryItem images={images}/>
//     </ul>
//   );
