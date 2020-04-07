import React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as classes from './image-preview.module.scss';

const animClasses = {
  enter: classes['ImagePreview_enter'],
  enterActive: classes['ImagePreview_enter_active'],
  exit: classes['ImagePreview_exit'],
  exitActive: classes['ImagePreview_exit_active']
}

const ImagePreview = ({ img }) => {
  return (
    // <CSSTransition
    //   in={img}
    //   timeout={300}
    //   mountOnEnter
    //   unmountOnExit
    //   classNames={animClasses}>
    //   <div className={classes.ImagePreview}>
    //     <img src={img} className='img-thumbnail' alt="картинка"></img>
    //   </div>
    // </CSSTransition>

    <div className={classes.ImagePreview}>
      <img src={img} className='img-thumbnail' alt="картинка"></img>
    </div>

  )
}

export default ImagePreview;