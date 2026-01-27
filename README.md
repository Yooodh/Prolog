# <img width="1747" height="1042" alt="prolog_title" src="https://github.com/user-attachments/assets/a9a1f5e7-aa9f-4174-b4a4-e4a97d1d867c" />

> **Prolog - 기존 블로그 서비스의 불편함과 한계점을 해결하고자 개선된 모던 블로그 플랫폼** <br/>
> 개발 기간 : 25.05.07 ~ 25.06.04

<div align="center">

 ### Team Prolog
 <table>
     <tr>
      <td align="center"><a href="https://github.com/Yooodh"><img src=https://avatars.githubusercontent.com/u/93702328?v=4 width="50px;" alt=""/><br /><sub><b>@Yo_o.</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/JangIkIk?tab=repositories"><img src=https://avatars.githubusercontent.com/u/108041161?v=4 width="50px;" alt=""/><br /><sub><b>@Jangs</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/uudeok/"><img src=https://avatars.githubusercontent.com/u/128568494?v=4 width="50px;" alt=""/><br /><sub><b>@uudeok</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/mjhn010"><img src=https://avatars.githubusercontent.com/u/120008573?v=4 width="50px;" alt=""/><br /><sub><b>@jun Y</b></sub></a><br /></td>      
      <td align="center"><a href="https://github.com/imi21123"><img src=https://avatars.githubusercontent.com/u/91395969?v=4 width="50px;" alt=""/><br /><sub><b>@Chaeyeon Han</b></sub></a><br /></td>
     </tr>
      <td align="center">유대현</td>
      <td align="center">장준익</td>
      <td align="center">서유덕</td>   
      <td align="center">윤준영</td>
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

### 🔍 정렬 & 검색
- 최신순, 인기순 기반의 정렬 기능 지원
- 무한 스크롤 방식의 페이지네이션을 통한 대량의 콘텐츠 로딩 최적화 및 사용자 편의성 제공
- 제목, 내용, 태그, 작성자 대상의 다중 검색 지원
- #태그, @작성자 형식을 활용한 정밀 검색 기능 제공

![range](https://github.com/user-attachments/assets/cc635a16-8dea-48e3-9533-97f68e1bd6c1)
![search](https://github.com/user-attachments/assets/56e21dab-908f-4e71-87e4-1ab874305ce1)

### ❤️ 소셜 인터랙션
- 게시글 좋아요 및 관심 콘텐츠 북마크 기능 지원
- 팔로우 기반의 사용자 구독 및 실시간 알림 서비스 제공
- 실시간 댓글 작성, 수정, 삭제 기능 지원

![interaction](https://github.com/user-attachments/assets/674e68fe-93f1-4f88-8b16-affe9fb0f1ad)

### 🤖 콘텐츠 작성 및 AI
- 실시간 미리보기가 포함된 마크다운 기반의 편집 인터페이스 지원
- 30초 주기 자동 임시 저장(최대 10개) 및 AWS S3 활용 이미지 업로드 지원
- 다중 태그 시스템 및 공개/비공개 설정 기능 제공
- GPT-4o-mini 활용하여 500자 이상 콘텐츠에 대한 섹션별 자동 요약 지원
- 요약된 정보를 JSON 형식으로 변환하여 저장 기능 지원

![write](https://github.com/user-attachments/assets/caa3844a-8a50-4137-bd8e-3303083f5395)

### 👤 마이페이지
- 프로필 이미지, 배경 이미지, 자기소개 설정 지원
- 북마크 포함 다양한 정렬 옵션과 고급 필터링 검색 제공

![mypage](https://github.com/user-attachments/assets/a9d2bf10-8b21-457a-b9c1-ec476d8147c1)

### 🔔 알림 시스템
- 댓글 발생 및 신규 게시글 업로드 실시간 알림 지원
- 읽음/안 읽음 처리 등 사용자 알림 상태 관리 기능 제공
- 구독자 대상 자동 일괄 알림 전송 시스템 제공

![alarm](https://github.com/user-attachments/assets/3a2d0403-8537-494b-ba50-22301d6048cc)


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



