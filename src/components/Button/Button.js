import { LoadMore } from './LoadMore.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return <LoadMore onClick={onClick}>Load More</LoadMore>;
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
