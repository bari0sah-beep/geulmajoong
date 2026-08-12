import styles from './page.module.css';

const skillCategories = [
  {
    icon: '📱',
    title: '디지털 마케팅',
    items: [
      { name: 'SEO / SEM', level: 85 },
      { name: '퍼포먼스 광고', level: 80 },
      { name: 'GA4 데이터 분석', level: 78 },
      { name: '이메일 마케팅', level: 72 },
    ],
  },
  {
    icon: '📣',
    title: 'SNS 운영',
    items: [
      { name: '인스타그램 운영', level: 92 },
      { name: '틱톡 콘텐츠', level: 80 },
      { name: '유튜브 기획', level: 70 },
      { name: '커뮤니티 관리', level: 85 },
    ],
  },
  {
    icon: '📢',
    title: '광고 기획',
    items: [
      { name: '메타 광고 운영', level: 88 },
      { name: '구글 광고 운영', level: 75 },
      { name: '캠페인 전략 수립', level: 82 },
      { name: '예산 최적화', level: 78 },
    ],
  },
  {
    icon: '🔍',
    title: '시장조사',
    items: [
      { name: '경쟁사 분석', level: 85 },
      { name: '소비자 리서치', level: 80 },
      { name: '트렌드 모니터링', level: 90 },
      { name: '인사이트 리포팅', level: 82 },
    ],
  },
];

const tools = [
  'Google Analytics 4', 'Meta Ads Manager', 'Google Ads',
  'Notion', 'Figma', 'Canva', 'Excel / Sheets', 'Looker Studio',
];

export default function SkillsPage() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Skills</span>
          <h1 className="section-title">역량</h1>
          <p className="section-subtitle">다양한 마케팅 업무에서 쌓아온 핵심 역량을 소개합니다</p>
        </div>
      </section>

      {/* ===== Skills Grid ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.skillsGrid}>
            {skillCategories.map((cat) => (
              <div key={cat.title} className={`card ${styles.skillCard}`}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillIcon}>{cat.icon}</span>
                  <h2 className={styles.skillTitle}>{cat.title}</h2>
                </div>
                <div className={styles.skillItems}>
                  {cat.items.map((item) => (
                    <div key={item.name} className={styles.skillItem}>
                      <div className={styles.skillMeta}>
                        <span className={styles.skillName}>{item.name}</span>
                        <span className={styles.skillLevel}>{item.level}%</span>
                      </div>
                      <div className={styles.skillTrack}>
                        <div
                          className={styles.skillFill}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tools Section ===== */}
      <section className={`section ${styles.toolsSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tools</span>
            <h2 className="section-title">사용 도구</h2>
          </div>
          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div key={tool} className={styles.toolBadge}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
