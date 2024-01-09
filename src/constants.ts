import { Education, Experience } from '@/types'

export const EMAIL = 'kimkyeseung@gmail.com'
export const PHONE_NUMBER = '010 - 2848 - 9508'
export const GITHUB_URL = 'https://github.com/kimkyeseung'
export const ADDRESS = '서울 영등포구 당산동'

export const DISPLAY_DATE_FORAMT = 'YYYY.MM'

export const EXPERIENCES: Experience[] = [
  {
    name: '위버',
    techs: [
      'react / next',
      'react-query, zustand',
      'typescript',
      'styled-components',
      'formik / yup',
      'nx - monorepo',
    ],
    joinedAt: '2022/09/20',
    seperatedAt: '2023/12/31',
    descriptions: [
      { title: '기업과 강사를 연결하는 B2B 워크샵 플랫폼' },
      {
        title: '제품팀 구성',
        details: ['팀 리더 1', '기획자 1', '프론트엔드 개발자 1', '디자이너 1'],
      },
      {
        title: '업무 및 문화',
        details: [
          '코드 리뷰를 통한 코드 품질 및 컨벤션 관리',
          '작업계획 작성 및 리뷰 문화를 통한 개발 문화',
          '기술 부채 관리',
          '데일리 스크럼',
          '스프린트 방식',
        ],
      },
    ],
    url: 'https://www.weebur.com/',
    projects: [
      {
        title: '디자인 시스템 구축',
        details: [
          '위버 브랜드 컨셉 및 사이트 특징에 맞는 디자인 시스템에 따라 필요 컴포넌트 개발',
          'styled-components 활용하여 ..',
          'story-book을 이용하여 ..',
          '디자이너와 함께 size, variant, fillType 등 컴포넌트 별 공통, 개별 prop 사용 규칙 정립',
        ],
      },
      {
        title: '서비스 런칭 & 관리자 사이트 개발',
        details: [
          '빠른 런칭 및 높은 리소스 재사용을 위한 모노레포 방식으로 프로젝트 구성',
          'formik, yup을 활용한 효율적인 validation 및 form 상태 관리',
          'react-query와 zustand를 활용한 서버 및 클라이언트 상태 관리 효율화',
        ],
      },
      {
        title: '구매자 회원가입 및 채팅을 통한 자율 거래',
        details: [
          'socket.io를 이용한 채팅 기능 개발',
          '커머스 기능 개발 (토스페이먼츠 연동)',
          '예약, 주문 기능 개발',
        ],
      },
      {
        title: '상품 상세 페이지 PDF 다운로드 제공',
        details: [
          'B2B 서비스에서 상위부서에 보고하기위한 용도의 예약정보 다운로드 기능 제공',
          'react-pdf를 이용하여 워크샵 상품 상세 페이지 내용 pdf 다운로드 있는 기능 개발',
          '기존 외주 디자이너 수기 작업 완전 대체',
        ],
      },
      {
        title: '기술부채 관리',
        details: [
          '빠른 배포에 따른 기술부채가 늘어남에 따라 기술부채의 문서화, 우선순위 정렬 등 기술부채 관리 및 ',
        ],
      },
    ],
  },
  {
    name: '아토머스',
    descriptions: [{ title: '심리상담 & 마음치유 플랫폼' }],
    url: 'https://www.mindcafe.co.kr/',
    techs: ['vue / vuex', 'python3 / flask', 'react / nextjs', 'docker'],
    joinedAt: '2021/1/4',
    seperatedAt: '2022/9/16',
    projects: [
      {
        title: '전문가용 페이지 개발',
        description:
          '상담사 및 코치들이 웹을 통하여 고객과 음성통화 및 채팅할 수 있는 웹 어플리케이션',
        details: [
          'vuetify를 통한 기본 ',
          '채팅',
          '예약',
          '이력관리 기능 개발',
          'vue, vuetify 를 활용하여 기존 레거시 사이트를 재구축',
          '배포, 및 지속적인 기능 개발 및 리팩토링',
          '유지보수, 성능 최적화',
        ],
      },
      {
        title: '통화, 채팅 품질 개선 프로젝트 참여',
        details: [
          '채팅',
          '예약',
          '이력관리 기능 개발',
          'vue, vuetify 를 활용하여 기존 레거시 사이트를 재구축',
          '배포, 및 지속적인 기능 개발 및 리팩토링',
          '유지보수, 성능 최적화',
        ],
      },
      {
        title: '종합 심리검사 그래프 UI 작업',
        details: [
          'vue-slider-component 라이브러리를 활용',
          '필터',
          //(내용 추가)
        ],
      },
      {
        title: '캘린더 UI를 통한 상담일정 관리 프로젝트',
        details: [
          'v-calendar 라이브러리를 활용',
          '필터',
          //(내용 추가)
        ],
      },
      {
        title: '관리자용 페이지 개발용 보일러플레이트 제작',
        details: [
          'vuetify',
          '각 페이지별 필요한 필드, 컴포넌트, 레이아웃 등을 모듈화하여 모든 개발자들이 사용할 수 있는 공용 컴포넌트 제작',
          '사용법 및 컴포넌트 규칙 문서화',
        ],
      },
    ],
  },
  {
    name: '부크크',
    url: 'https://bookk.co.kr/',
    descriptions: [{ title: 'POD 기반 자가출판 플랫폼' }],
    joinedAt: '2019/6/10',
    seperatedAt: '2020/9/1',
    techs: ['react / redux', 'nodejs / express', 'mongodb / mongoose'],
    projects: [
      {
        title: '부크크 레거시 서비스 리뉴얼',
        details: ['WYSIWYG 기반 커뮤니티 게시판 기능 구현'],
      },
      {
        title: '부크크 RESTfull api 작업 및 파일 서버 개발 참여',
        details: [
          'mongoDB, mongoose를 이용한 데이터베이스 관리',
          '사용자 계정 정보 DB 스키마 관리 및 관련엔드포인트 작성',
          '게시판, 게시물, 댓글 DB 스키마 관리 및 관련 엔드포인트 작성',
          '도서상품 및 작가서비스 상품 DB 스키마 관리 및 관련 엔드포인트 작성',
          '부크크 서비스 운영, 도서 상품 심사에 필요한 DB스키마 관리 및 엔드 포인트 작성',
          'JWT, passport를 이용한 중요 정보 암호화 관리 및 엔드포인트별 권한 관리',
          'multer, sharp를 이용한 파일 관리 및 이미지 리사이징 처리',
        ],
      },
    ],
  },
  {
    name: 'IGAWorks',
    url: 'https://www.igaworks.com/',
    descriptions: [
      {
        title:
          '모바일 데이터와 플랫폼을 제공해주는 종합 데이터 테크 SaaS 서비스',
        details: ['adbrix 팀 합류'],
      },
    ],
    joinedAt: '2019/1',
    seperatedAt: '2019/4',
    techs: ['vue / vuex', 'typescript', 'c#', 'asp.net'],
    projects: [
      {
        title: '애드브릭스 리마스터 프로젝트 참여',
        details: [
          '유저의 계정, 앱, 페이지 별로 선택한 column을 저장하여 새로고침, 재접속 후에도 선택값을 유지하는 컴포넌트 제작',
          '의존성 단계의 컴포넌트의 table-store에 접근하여 재사용성을 높이고 간결한 유지보수가 가능하도록 코드 작성',
        ],
      },
    ],
  },
]

export const EDUCATIONS: Education[] = [
  {
    name: '바닐라코딩',
    joinedAt: '2018/05',
    seperatedAt: '2018/11',
    descriptions: [{ title: '바닐라코딩 프론트 엔드 부트캠프 4기 수료' }],
    url: 'https://www.vanillacoding.co/',
    curriculums: [
      {
        title: 'Basic and Advanced Javascript ES5, ES6',
        description:
          '라이브러리를 사용하지 않은 Pure 자바스크립트를 기본으로 하여 프로토타입을 이용한 상속(행동 위임), 클로저, Promise, async + await 을 활용한 비동기 프로그래밍, 객체 지향 프로그래밍, 디자인 패턴 등 심화개념을 학습하였습니다.',
      },
      {
        title: 'Data Structure & Algorithm',
        description:
          'Hash Table, Linked List, Graph, Tree, Binary Search Tree 등 대표적인 자료구조들을 직접 구현하고 적용해보았고, 다양한 알고리즘과 그에 따른 시간복잡도(Big-O) 개념을 학습하였습니다.',
      },
      {
        title: 'Javascript Frameworks and Basic Back-end Development',
        description:
          'React를 이용하여 실제로 작동하는 웹 어플리케이션을 제작해보았고 Redux와 React-Router를 이용한 flux 패턴방식의 상태 관리 및 라우트 관리를 하였습니다. Node.JS와 Express를 이용한 백엔드 개발의 기초와 작동 방식을 이해하고 작은 서버를 설계하였습니다. MongoDB를 학습하고 database의 CRUD를 직접 구현하고 학습하였습니다.',
      },
    ],
  },
]
