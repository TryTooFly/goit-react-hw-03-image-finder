import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.closeByEscape);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.closeByEscape);
  }
  closeByEscape = e => {
    if (e.key === 'Escape') this.props.onClick();
  };
  closeByBackdrop = e => {
    if (e.target === e.currentTarget) this.props.onClick();
  };

  render() {
    const { img } = this.props;
    return (
      <div className="Overlay" onClick={this.closeByBackdrop}>
        <div className="Modal">
          <img src={img} alt={img} loading="lazy" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
