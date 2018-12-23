import React from 'react';
import Button from 'components/common/Button';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Pagination = ({lastPage, tag, page, type}) => {
  const pages = parseInt(page);
  const createPagePage = (page) => {
    return tag ? `/tag/${tag}/${page}`: ( type ? `/type/${type}/${page}` : `/page/${page}`)
  }
  return (
    <div className={cx('pagination')}>
      <Button disabled={pages===1} to={createPagePage(pages-1)}>
        이전 페이지
      </Button>
      <div className={cx('number')}>
        {page}
      </div>
      <Button disabled={lastPage < 2 ? pages === 1 : pages === lastPage} to={createPagePage(pages+1)} >
        다음 페이지
      </Button>
    </div>
  );
}


export default Pagination;