import styles from './page.module.css';

const experiences = [
  {
    type: 'work',
    company: '(주)디지털브랜드컴퍼니',
    role: '마케터 / 디지털 마케팅팀',
    period: '2023.01 – 현재',
    location: '서울',
    items: [
      'SNS 채널(인스타그램, 틱톡) 기획 및 콘텐츠 운영 총괄',
      '메타·구글 퍼포먼스 광고 집행 및 성과 분석',
      '월간 마케팅 리포트 작성 및 전략 보고',
      '인플루언서 발굴 및 협업 캠페인 관리',
    ],
  },
  {
    type: 'work',
    company: '(주)마케팅스튜디오',
    role: '마케터 인턴 / 콘텐츠팀',
    period: '2022.06 – 2022.12',
    location: '서울',
    items: [
      '블로그·카카오채널 콘텐츠 기획 및 제작',
      '소비자 리서치 및 시장 분석 보조',
      '광고 크리에이티브 A/B 테스트 진행',
    ],
  },
];

const activities = [
  {
    type: 'activity',
    title: '대학 마케팅 학회 MAKA',
    role: '부회장 · 브랜드전략팀',
    period: '2021.03 – 2022.02',
    items: [
      '기업 협찬 마케팅 프로젝트 5건 기획·발표',
      '팀원 20명 대상 디지털 마케팅 스터디 운영',
    ],
  },
  {
    type: 'activity',
    title: '중소기업 SNS 마케팅 서포터즈',
    role: '서포터즈 활동',
    period: '2020.09 – 2021.02',
    items: [
      '지역 중소기업 5곳 SNS 채널 운영 지원',
      '콘텐츠 제작 및 인사이트 분석 보고서 제출',
    ],
  },
  {
    type: 'activity',
    title: '마케팅 공모전 수상',
    role: '팀 리더',
    period: '2021.09',
    items: [
      '전국 대학생 마케팅 공모전 우수상 수상',
      'MZ세대 타겟 뷰티 브랜드 리포지셔닝 전략 기획',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Experience</span>
          <h1 className="section-title">경력</h1>
          <p className="section-subtitle">마케터로서 쌓아온 주요 경력과 활동 경험입니다</p>
        </div>
      </section>

      {/* ===== Work Experience ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Work Experience</span>
            <h2 className="section-title">주요 경력</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={`card ${styles.timelineCard}`}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.role}>{exp.role}</p>
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <ul className={styles.itemList}>
                    {exp.items.map((item, j) => (
                      <li key={j} className={styles.listItem}>
                        <span className={styles.bullet}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Activities ===== */}
      <section className={`section ${styles.activitiesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Activities</span>
            <h2 className="section-title">활동 경험</h2>
          </div>
          <div className={styles.activityGrid}>
            {activities.map((act, i) => (
              <div key={i} className={`card ${styles.activityCard}`}>
                <div className={styles.activityHeader}>
                  <h3 className={styles.activityTitle}>{act.title}</h3>
                  <span className={styles.activityPeriod}>{act.period}</span>
                </div>
                <p className={styles.activityRole}>{act.role}</p>
                <ul className={styles.itemList}>
                  {act.items.map((item, j) => (
                    <li key={j} className={styles.listItem}>
                      <span className={styles.bullet}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
