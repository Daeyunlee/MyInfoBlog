import React, { Component } from 'react';

import styles from './Search.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Search extends Component {

  render() {
    const {onChange, onSubmit, value} = this.props;

    return (
      <div className = {cx('searchBox')}>
        <input 
          className={cx('search')}
          placeholder = '제목을 입력하세요'
          value = {value}
          name = 'search'
          onChange = {e => onChange(e.target.value)}
          onKeyPress = {onSubmit}
        />
      </div>
    );
  }
}

export default Search;