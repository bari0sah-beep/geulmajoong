import styles from './page.module.css';

const strengths = [
  {
    icon: '📊',
    title: '데이터 분석',
    desc: 'GA4, 메타 광고 관리자 등 분석 도구를 활용하여 캠페인 성과를 정량적으로 측정하고 인사이트를 도출합니다.',
  },
  {
    icon: '✏️',
    title: '기획력',
    desc: '브랜드 아이덴티티에 맞는 마케팅 전략을 수립하고, 실행 가능한 콘텐츠 로드맵을 설계합니다.',
  },
  {
    icon: '🎨',
    title: '콘텐츠 제작',
    desc: '채널별 특성을 반영한 카피라이팅과 비주얼 방향을 기획하여 높은 인게이지먼트를 이끌어냅니다.',
  },
  {
    icon: '🤝',
    title: '커뮤니케이션',
    desc: '클라이언트 및 유관 부서와 원활한 협업을 통해 프로젝트 목표를 달성하고 신뢰를 구축합니다.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* ===== Page Header ===== */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">About Me</span>
          <h1 className="section-title">소개</h1>
          <p className="section-subtitle">브랜드의 이야기를 데이터와 감성으로 전달합니다</p>
        </div>
      </section>

      {/* ===== Bio Section ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.bioLeft}>
              <div className={styles.profileCard}>
                <div className={styles.avatar}>KM</div>
                <div className={styles.profileInfo}>
                  <h2 className={styles.profileName}>김마케터</h2>
                  <p className={styles.profileRole}>Digital Marketing Specialist</p>
                  <div className={styles.profileTags}>
                    <span className="badge">SNS 마케팅</span>
                    <span className="badge">광고 기획</span>
                    <span className="badge">콘텐츠 전략</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bioRight}>
              <h2 className={styles.bioTitle}>데이터와 창의성으로 브랜드를 성장시킵니다</h2>
              <p className={styles.bioPara}>
                디지털 마케팅 분야에서 3년간 다양한 브랜드의 온라인 마케팅을 담당했습니다.
                SNS 채널 운영, 퍼포먼스 광고 집행, 콘텐츠 기획 등 통합 마케팅 업무를 수행하며
                브랜드 인지도 향상과 실질적인 매출 성과를 만들어왔습니다.
              </p>
              <p className={styles.bioPara}>
                데이터를 기반으로 캠페인을 분석하고, 크리에이티브한 아이디어를 더해
                소비자의 마음을 움직이는 마케팅을 추구합니다.
                트렌드를 빠르게 파악하고 실행에 옮기는 것을 즐깁니다.
              </p>

              <div className={styles.infoList}>
                {[
                  { label: '이메일', value: 'marketing@example.com' },
                  { label: '위치', value: '서울특별시' },
                  { label: '경력', value: '3년 이상' },
                ].map((info) => (
                  <div key={info.label} className={styles.infoItem}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Strengths Section ===== */}
      <section className={`section ${styles.strengthsSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Strengths</span>
            <h2 className="section-title">나의 강점</h2>
          </div>
          <div className={styles.strengthsGrid}>
            {strengths.map((item) => (
              <div key={item.title} className={`card ${styles.strengthCard}`}>
                <span className={styles.strengthIcon}>{item.icon}</span>
                <h3 className={styles.strengthTitle}>{item.title}</h3>
                <p className={styles.strengthDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
