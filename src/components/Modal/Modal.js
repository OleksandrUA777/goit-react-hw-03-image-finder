import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from './modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }
  onCloseModalByEsc = event => {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <Overlay onClick={this.closeModal} />
        <ModalWindow>
          <img src={this.props.src} alt={this.props.alt} width="600" />
        </ModalWindow>
      </>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
