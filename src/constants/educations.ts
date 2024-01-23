import { Education } from '@/types'

export const EDUCATIONS: Education[] = [
  {
    name: '바닐라코딩',
    joinedAt: '2018/05',
    seperatedAt: '2018/11',
    descriptions: [{ title: '바닐라코딩 프론트 엔드 부트캠프 4기 수료' }],
    url: 'https://www.vanillacoding.co/',
    curriculums: [
      {
        title: 'Javascript ES5, ES6 기본과 심화 개념',
        descriptions: [
          '라이브러리를 사용하지 않은 Pure 자바스크립트',
          '프로토타입을 이용한 상속(행동 위임), 클로저, 비동기 프로그래밍',
          '객체 지향 프로그래밍, 디자인 패턴 등 심화 개념',
        ],
      },
      {
        title: '자료 구조와 알고리즘',
        descriptions: [
          'Hash Table, Linked List, Graph, Tree, Binary Search Tree 등 대표적인 자료 구조 구현 및 적용',
          '다양한 알고리즘과 그에 따른 시간복잡도(Big-O) 개념을 학습',
        ],
      },
      {
        title: 'Javascript 프레임워크와 기본 백엔드 개발',
        descriptions: [
          'React를 이용하여 실제로 작동하는 웹 어플리케이션을 제작',
          'Redux와 React-Router를 이용한 flux 패턴방식의 상태 관리 및 라우트 관리',
          'Node.js와 Express, MongoDB를 이용한 백엔드 개발의 기초와 작동 방식을 이해',
        ],
      },
    ],
  },
  {
    name: 'UI/UX Web Designer 교육',
    joinedAt: '2016/08',
    seperatedAt: '2017/01',
    descriptions: [{ title: 'UI/UX 기반 반응형 웹디자이너 교육 수료' }],
    curriculums: [
      {
        title: '웹 디자인 기초 및 포토샵, HTML / CSS 기본',
        descriptions: [
          '포토샵 기본 스킬 및 와이어프레임 제작 방법',
          'XHTML 과 HTML5의 시맨틱 마크업 및 멀티미디어 컨텐츠 구현',
          '미디어 쿼리를 통한 반응형 디자인 설계 등을 학습',
        ],
      },
      {
        title: '웹 기획 및 사용자 중심 UX',
        descriptions: [
          '사용자 리서치와 페르소나(Persona) 작성',
          '웹 표준의 필요성, 웹사이트 구조 설계와 정보구조 등을 학습',
        ],
      },
      {
        title: '포트폴리오 제작',
        descriptions: [
          '실제 프로젝트를 통한 웹 기획 경험',
          '조별 및 개인별 프로젝트를 통한 사이트 리뉴얼 디자인 시안 발표',
        ],
      },
    ],
  },
]
