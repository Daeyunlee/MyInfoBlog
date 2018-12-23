import React, { Component } from 'react';

import styles from './infoTemplate.scss';
import classNames from 'classnames/bind';

import InfoMyIntroduce from 'components/info/infoMyIntroduce';
import InfoCompany from 'components/info/infoMyIntroduce';
import InfoHi from 'components/info/infoHi';

const cx = classNames.bind(styles);


class infoTemplate extends Component {
  render() {
    return (
      <div className={cx('Info-Background')}>
        <div>
          <InfoHi />
        </div>
        <div>
          <InfoMyIntroduce />
        </div>
        <div>
          <InfoCompany />
        </div>
      </div>
    );
  }
}


export default infoTemplate;