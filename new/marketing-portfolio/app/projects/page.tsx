import styles from './page.module.css';

const projects = [
  {
    id: 1,
    tag: 'SNS 마케팅',
    title: '뷰티 브랜드 SNS 리브랜딩 캠페인',
    role: '캠페인 기획 · 콘텐츠 전략 담당',
    period: '2024.03 – 2024.08',
    description:
      '뷰티 브랜드의 인스타그램·틱톡 채널 통합 운영을 맡아 브랜드 리포지셔닝 전략을 수립했습니다. 숏폼 콘텐츠 중심으로 채널 전략을 재편하고, 인플루언서 협업을 통해 바이럴 효과를 극대화했습니다.',
    results: [
      { label: '팔로워 증가', value: '+320%' },
      { label: '인게이지먼트율', value: '+87%' },
      { label: '브랜드 언급량', value: '+215%' },
    ],
  },
  {
    id: 2,
    tag: '퍼포먼스 광고',
    title: '이커머스 신규 고객 획득 광고 캠페인',
    role: '메타·구글 광고 운영 · 성과 분석 담당',
    period: '2023.09 – 2024.02',
    description:
      '의류 이커머스 브랜드의 신규 고객 유입을 위한 퍼포먼스 광고를 기획하고 운영했습니다. A/B 테스트를 통해 크리에이티브를 최적화하고, 리타겟팅 전략으로 전환율을 개선했습니다.',
    results: [
      { label: '신규 고객 유입', value: '+180%' },
      { label: '전환율 개선', value: '+42%' },
      { label: 'ROAS', value: '380%' },
    ],
  },
  {
    id: 3,
    tag: '콘텐츠 마케팅',
    title: '식품 브랜드 유튜브 채널 런칭',
    role: '채널 기획 · 콘텐츠 디렉션 담당',
    period: '2023.03 – 2023.08',
    description:
      '건강식품 브랜드의 유튜브 채널을 신규 기획하고 론칭했습니다. 타겟 고객의 관심사 기반 콘텐츠 전략을 수립하고 6개월 내 구독자 5만 명 달성을 이끌었습니다.',
    results: [
      { label: '구독자 달성', value: '5만 명' },
      { label: '평균 조회수', value: '1.2만 회' },
      { label: '누적 조회수', value: '150만 회' },
    ],
  },
  {
    id: 4,
    tag: '시장조사',
    title: '신제품 출시 전 소비자 인사이트 리서치',
    role: '리서치 기획 · 분석 리포팅 담당',
    period: '2022.10 – 2023.01',
    description:
      '헬스케어 브랜드의 신제품 출시에 앞서 소비자 인식 조사와 경쟁사 분석을 진행했습니다. FGD 및 온라인 설문 데이터를 기반으로 포지셔닝 전략 수립에 기여했습니다.',
    results: [
      { label: '조사 참여자', value: '500명+' },
      { label: '경쟁사 분석', value: '15개사' },
      { label: '출시 후 인지도', value: '+65%' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Projects</span>
          <h1 className="section-title">프로젝트</h1>
          <p className="section-subtitle">직접 기획하고 실행한 주요 마케팅 프로젝트를 소개합니다</p>
        </div>
      </section>

      {/* ===== Projects List ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.projectList}>
            {projects.map((project) => (
              <div key={project.id} className={`card ${styles.projectCard}`}>
                <div className={styles.projectMeta}>
                  <span className="badge">{project.tag}</span>
                  <span className={styles.period}>{project.period}</span>
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectRole}>💼 {project.role}</p>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.resultsGrid}>
                  {project.results.map((result) => (
                    <div key={result.label} className={styles.resultItem}>
                      <span className={styles.resultValue}>{result.value}</span>
                      <span className={styles.resultLabel}>{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
