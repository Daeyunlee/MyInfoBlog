import React, { Component } from 'react';
import Button from 'components/common/Button';
import styles from './MenuBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Item = ({type}) => (
  <Button key = {type} theme="mobile" to = {`/type/${type}/1`}>{type}</Button>
)

class MenuBar extends Component {

  render() {

    const {types, postId, postType = 'info', onRemove} = this.props;

    const items= types.map(type => (
      <Item
        type = {type}
        key = {`${type}Key`}
      />
    ))

    return (
      <div className={cx('menuBar')} >
        <div className={cx('buttons')}>
          <Button key="create" theme="moblie" to={`/editor/${postType}`} >작성</Button>
          {
            postId && [
              <Button key="edit" theme="moblie" to ={`/update/${postType}?id=${postId}`} >수정</Button>,
              <Button key="remove" theme="moblie" onClick={onRemove}>삭제</Button>
            ]
          }
        </div>
        <div className = {cx('types')}>
          {items}
        </div>
      </div>
    );
  }
}


export default MenuBar;