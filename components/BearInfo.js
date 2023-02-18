'use client';

import useBearStore from '@/stores/useBearStore';

const BearInfo = () => {
  const numberOfBears = useBearStore(state => state.bears);
  return <div>🐻 : {numberOfBears}</div>;
};

export default BearInfo;

// useRef를 내부적으로 쓰는지 'use client' 내부에서만 쓸 수 있다고 에러가 뜸
// Client 컴포넌트와 서버 컴포넌트의 분리를 정확히 해야할 거 같음
// recoil처럼 provider 안 줘도 되고 좋음 뭐 설정해줄 거 없나봄
// recoil과 비교해보면 아톰도 정의해주지 않아도 되고
// 가져다가 쓰려면 아톰 불러와야하고 리코일 함수 import 해와야 하는데
// 이거는 그냥 store만 가져다 쓰면 됨