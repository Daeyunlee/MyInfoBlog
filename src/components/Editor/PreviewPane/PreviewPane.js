import React from 'react';
import MarkdownRender from 'components/common/MarkdownRender';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PreviewPane = ({markdown, title}) => (
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>
      {title}
    </h1>
    <div>
      <MarkdownRender markdown={markdown} />
    </div>
  </div>
);


export default PreviewPane;