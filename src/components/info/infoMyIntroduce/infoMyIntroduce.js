import React from 'react';

import styles from './infoMyIntroduce.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const infoMyIntroduce = () => (
  <div className ={cx('My-Background')}>
    <div className={cx('My-information')} >
      <div>저는 22살 이대윤입니다.</div>
      <div>
        제가 가진 아이디어로 스타트업 창업을 해보고 싶다는 생각에 프로그래밍을 배우게 되었습니다.        
      </div>
    </div>
    <div className={cx('My-feature')} >
      <div>
        현재 React를 독학 하고 있으며 추후에는 Node.js를 배울 계획입니다.
      </div>
      <div>
        이 블로그는 제가 처음으로 해본 프로젝트입니다. 간단하게 배운 내용을 쉽게 정리하고 볼 수 있도록
        CRUD가 가능하도록 만들었습니다.
        S3로 호스팅 한 React를 이용한 클라이언트 사이드 렌더링을 하고 있구요
        Lambda, DynamoDB등을 활용하여 간단한 REST API을 만들어 현재 활용 하고 있습니다.
        추후에는 서버사이드 렌더링을 통해 SEO 활성화를 계획하고 있습니다.
        현재 프로그래밍을 배운지 2개월이 거의 되어가는 제가 보여드릴 수 있고 말씀 드릴 수 있는 제 기술의 전부입니다.
        제가 말씀 드릴 수 있는건 저를 영입 하신다면 그것이 잘못된 결정이 아님을 결과로 증명 해 보이도록 하겠습니다.
        저와 함께 로켓을 달고 성장 할 회사와 함께 하고 싶습니다.
      </div>
      <div>

      </div>
    </div>
  </div>
);


export default infoMyIntroduce;