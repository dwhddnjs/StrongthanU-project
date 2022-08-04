import b from '../images/b.png';
import s from '../images/s.png';
import g from '../images/g.png';
import p from '../images/p.png';
import d from '../images/d.png';
import c from '../images/c.png';

const tierData = [
  {
    id: 0,
    tier: '브론즈',
    img: b,
    color: '#9D4A2F',
    desc: '데드리프트 기준으로 본인 몸무게 1배 미만 치는 당신은 선풍기 바람에 날라갈 정도의 멸치일 가능성이 높습니다. 기초 근력 부족으로 인해 3대운동 훈련시 부상을 입을 위험이 있기에 바로 3대 운동을 진행하기 보단 맨몸 운동(푸쉬업, 맨몸스쿼트, 인버티드 로우, 등), 헬스장 머신으로 기초 근력 향상 과 자세 및 코어 잡는법을 연습 후 3대운동에 도전하는것을 추천드립니다. 하지만 그것보다도 헬스장이나 크로스핏부터 먼저 등록 하는 것을 권장 드립니다',
  },
  {
    id: 1,
    tier: '실버',
    img: s,
    color: '#688895',
    desc: '데드리프트 기준으로 본인 몸무게 1.5배 미만 치는 당신은 운동을 시작한지 얼마 안된 헬린이일 가능성이 높습니다. 헬스장이 낫설고 시작한지 얼마 안된 당신 또한 기초 근력 및 코어 기능이 떨어짐으로 가벼운 덤벨 혹은 케틀벨을 이용한 자세 위주의 저중량 고반복 운동(덤벨프레스, 와이드스쿼트, 덤벨데드리프트)을 주 4 ~6일빈도의 훈련을 추천드립니다. 혹여 진입 장벽이 너무 높다면 헬스장 PT 또는 크로스핏을 정석적인 교육 받는 것 또한 추천드립니다',
  },
  {
    id: 2,
    tier: '골드',
    img: g,
    color: '#D1A23A',
    desc: '데드리프트 기준으로 본인 몸무게 2배 미만 치는 당신은 운동에 재미가 붙은 헬린이일 가능성이 높습니다. 보통 일주일 하고 그만두는 일반인과 다르게 몸에 근육이 붙는 것에 흥미를 느끼는 당신은 성장 의지 있다는 것을 알 수 있습니다 근육의 비대와 고립에 집착 하기보단 기초 근력은 충분하나 코어 사용의 안정성이 부족할 가능성이 높음으로 3대운동(벤치프레스, 스쿼트, 데드리프트)를 운동하되 자세위주의 저중량고반복 근육의협응 훈련을 하는것을 추천합니다',
  },
  {
    id: 3,
    tier: '플레티넘',
    img: p,
    color: '#15C460',
    desc: '데드리프트 기준으로 본인 몸무게 2.5배 미만 치는 당신은 헬스 경력자의 가능성이 높습니다 운동이 하나의 취미가 넘어서 일상이 되버렸으며 운동이 쉬는 날에는 불안함을 느낄정도의 중독일 가능성이 높습니다 당신은 이미 기초근력과 자세 및 퍼포먼스는 충분하며 코어의 안정성 또한 갖췄기에 강한 스트렝스가 필요한 당신은 컨디션과 훈련빈도를 고려하여 스트렝스프로그램 고중량저반복(그레이스컬, 캔디토, 스트롱리프트, 매드카우, 등) 진행해 보는걸 추천합니다.',
  },
  {
    id: 4,
    tier: '다이아',
    img: d,
    color: '#27217F',
    desc: '데드리프트 기준으로 본인 몸무게 3배 미만 치는 당신은 언더아머 단속반일 가능성이 높습니다 중량 5g 무게까지 집착하는 당신은 마구리 벨트 무게까지 중량에 포함시킬 가능합니다 이미 충분한 스트렝스와 퍼포먼스를 갖춘 당신은 좀 더 효율적인 리프팅을 위해 디테일한 리프팅 기술(슬랙아웃, 레그드라이브, 라운드백 등)을 본인 자세에 녹여보는 것을 추천합니다 다양한 유튜브 파워리프팅 영상을 보면서 연구를 하거나 흔하지 않지만 리프팅짐을 PT를 받는 것을 추천합니다.',
  },
  {
    id: 5,
    tier: '챌린저',
    img: c,
    color: '#ff6347',
    desc: '데드리프트 기준으로 본인 몸무게 3배 이상 치는 인자강 파워리프터일 가능성이 높습니다 스쿼트, 데드리프트 중량이 2이상으로 시작하는 당신은 IPF Korea 혹은 무장비 리프팅 대회를 준비하는 것을 추천합니다  사실 이런분들 한테는 해줄 조언은 없지만 본인이 강하고 운동을 즐기는 만큼 운동을 장기적으로 안전하게 부상없이 훈련 하는 것 추천합니다 사실 이 티어부터는 인자강의 영역이라고 생각할수 있지만 장기적으로 꾸준히 오래 훈련한다면 도달 할 수 있다고 생각합니다',
  },
];

const getTierInfo = (multiple: number) => {
  if (multiple < 1) {
    return tierData[0];
  } else if (multiple < 1.5) {
    return tierData[1];
  } else if (multiple < 2) {
    return tierData[2];
  } else if (multiple < 2.5) {
    return tierData[3];
  } else if (multiple < 3) {
    return tierData[4];
  } else {
    return tierData[5];
  }
};

export default getTierInfo;
