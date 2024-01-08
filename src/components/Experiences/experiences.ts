import { Experience } from '@/types'

export const experiences: Experience[] = [
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
    description: '기업과 강사를 연결하는 B2B 워크샵 플랫폼.',
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
    ],
  },
  {
    name: '아토머스',
    description: '심리상담 & 마음치유 플랫폼',
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
    description: 'POD 기반 자가출판 플랫폼',
    joinedAt: '2019/6/10',
    seperatedAt: '2020/9/1',
    techs: ['react / redux', 'nodejs / express', 'mongodb / mongoose'],
    projects: [
      {
        title: '부크크 레거시 서비스 리뉴얼',
        details: ['WYSIWYG 기반 커뮤니티 게시판 기능 구현'],
      },
      {
        title: '부크크 RESTfull api 작업',
        details: ['http 메소드'],
      },
    ],
  },
]
