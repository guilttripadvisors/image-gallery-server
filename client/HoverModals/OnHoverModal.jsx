import React, { Component } from 'react';

import LeftButton from './LeftButton';
import RightButton from './RightButton';
import Carousel from './Carousel';
import ImageGalleryButton from './ImageGalleryButton';

class OnHoverModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: props.photoIndex,

    };
  }
  /*
      TODO:
      Add Left and right button,
       gallery button,
       flag,
       thumbs,
       and carousel to this Component
  */

  render() {
    const {
      photos, photoIndex, image, leftClick, rightClick, handleImageClick
    } = this.props;
    return (
      <div className="image-onHover-modal">
        <div className="image-onHover-modal-container">
          <LeftButton
            id="left-button"
            leftClick={leftClick}
          />
          <RightButton
            id="right-button"
            rightClick={rightClick}
          />
          {/* TODO: Carousel */}
          {/* check to see if carousel needs id */}
          <Carousel
            handleImageClick={handleImageClick}
            photos={photos}
            photoIndex={photoIndex}
            images={image}
          />
          <ImageGalleryButton />
          {/* TODO: Helpful */}
        </div>
        {/* TODO: Report */}
      </div>
    );
  }
}

export default OnHoverModal;
