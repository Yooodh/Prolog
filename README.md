<div align="center">

# 📝 Prolog

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.7.0-2D3748?logo=prisma)](https://www.prisma.io/)

</div>

> **Prolog - 기존 블로그 서비스의 불편함과 한계점을 해결하고자 개선된 모던 블로그 플랫폼** <br/>
> 개발 기간 : 25.05.07 ~ 25.06.04

### Team Prolog
<div>
 <table>
     <tr>
      <td align="center"><a href="https://github.com/JangIkIk?tab=repositories"><img src=https://avatars.githubusercontent.com/u/108041161?v=4 width="50px;" alt=""/><br /><sub><b>@Jangs</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/mjhn010"><img src=https://avatars.githubusercontent.com/u/120008573?v=4 width="50px;" alt=""/><br /><sub><b>@jun Y</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/uudeok/"><img src=https://avatars.githubusercontent.com/u/128568494?v=4 width="50px;" alt=""/><br /><sub><b>@uudeok</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Yooodh"><img src=https://avatars.githubusercontent.com/u/93702328?v=4 width="50px;" alt=""/><br /><sub><b>@Daehyun Yoo</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/imi21123"><img src=https://avatars.githubusercontent.com/u/91395969?v=4 width="50px;" alt=""/><br /><sub><b>@Chaeyeon Han</b></sub></a><br /></td>
     </tr>
      <td align="center">장준익</td>
      <td align="center">윤준영</td>
      <td align="center">서유덕</td>
      <td align="center">유대현</td>
      <td align="center">한채연</td>
    </tr>
 </table>
</div>

## 프로젝트 소개

"pro로 성장하는 모든 순간의 log"

지식 공유의 번거로움을 덜고 개발자의 본질에 집중합니다. <br/>
Prolog는 AI 기반 요약과 개발 최적화 UI를 제공하는 모던 블로그 플랫폼입니다. <br/>
불필요한 과정 없이 당신의 기술 자산을 체계적으로 기록하세요.

### 핵심 가치
- **모던한 UI/UX**: 직관적이고 아름다운 사용자 인터페이스
- **AI 기반 요약**: OpenAI를 활용한 스마트 콘텐츠 요약
- **자동 백업**: 서비스 지속성을 고려한 자동 임시 저장
- **확장된 마크다운**: 풍부한 마크다운 기능 지원
- **안전한 인증**: OAuth 2.0 기반 소셜 로그인

## 주요 기능

### 콘텐츠 작성
- **마크다운 에디터**: 실시간 미리보기와 풍부한 편집 기능
- **자동 임시 저장**: 30초마다 자동으로 임시 저장 (최대 10개)
- **이미지 업로드**: AWS S3를 통한 다중 이미지 업로드
- **태그 시스템**: 다중 태그 지원으로 콘텐츠 분류
- **공개/비공개 설정**: 콘텐츠 공개 범위 제어

### AI 기능
- **스마트 요약**: GPT-4o-mini를 활용한 섹션별 자동 요약
- **500자 이상부터 사용 가능**: 충분한 콘텐츠에 대한 의미있는 요약 제공
- **JSON 형식 저장**: 구조화된 요약 데이터 저장

### 소셜 기능
- **댓글 시스템**: 실시간 댓글 작성, 수정, 삭제
- **좋아요**: 게시글에 대한 좋아요 기능
- **북마크**: 관심 있는 게시글 저장
- **구독**: 다른 사용자 구독 및 알림 받기

### 알림 시스템
- **실시간 알림**: 댓글, 새 게시글 알림
- **읽음 처리**: 알림 읽음 상태 관리
- **일괄 알림**: 구독자에게 자동 알림 발송

### 검색 기능
- **다중 검색**: 제목, 내용, 태그, 작성자 검색
- **고급 필터링**: `#태그`, `@작성자` 형식 지원
- **정렬 옵션**: 최신순, 인기순 정렬
- **페이지네이션**: 효율적인 콘텐츠 로딩

### 사용자 관리
- **OAuth 인증**: Google, GitHub 소셜 로그인
- **프로필 관리**: 프로필 이미지, 배경 이미지, 자기소개 설정
- **카테고리 관리**: 사용자별 독립적인 카테고리 시스템

## 기술 스택

### Frontend
- **Framework**: Next.js 15.3.2 (App Router)
- **Language**: TypeScript 5.0
- **UI Library**: React 19.0
- **State Management**: Zustand 5.0.4
- **Styling**: SCSS/SASS
- **Markdown Editor**: @uiw/react-md-editor 4.0.6
- **Icons**: @radix-ui/react-icons

### Backend
- **Runtime**: Node.js
- **ORM**: Prisma 6.7.0
- **Database**: PostgreSQL
- **Authentication**: NextAuth v5 (JWT)
- **File Storage**: AWS S3

### AI & External Services
- **AI**: OpenAI GPT-4o-mini
- **Image Processing**: AWS SDK for S3

### Development Tools
- **Linter**: ESLint, Biome
- **Formatter**: Prettier
- **Package Manager**: npm


## 주요 기능 상세

### 마크다운 에디터
- 실시간 미리보기
- 코드 하이라이팅
- 이미지 드래그 앤 드롭
- 커스텀 툴바 명령어

### AI 요약
- 섹션별 자동 요약
- JSON 형식으로 구조화된 데이터 저장
- 500자 이상부터 사용 가능

### 자동 임시 저장
- 30초 디바운스로 자동 저장
- 최대 10개 임시 저장 가능
- 수정 및 삭제 지원



