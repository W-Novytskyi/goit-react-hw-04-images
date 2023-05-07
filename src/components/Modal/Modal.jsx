import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Mod } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) props.onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Mod>{props.children}</Mod>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = e => {
//     if (e.currentTarget === e.target) this.props.onClose();
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleOverlayClick}>
//         <Mod>{this.props.children}</Mod>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Modal;
