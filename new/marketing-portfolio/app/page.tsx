import Link from 'next/link';
import styles from './page.module.css';

const featuredProject = {
  title: '뷰티 브랜드 SNS 리브랜딩 캠페인',
  role: '캠페인 기획 · 콘텐츠 전략',
  description: '인스타그램·틱톡 채널 통합 운영으로 팔로워 3배 성장 및 브랜드 인지도 향상',
  result: '팔로워 +320% · 인게이지먼트율 +87%',
  tag: 'SNS 마케팅',
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ===== Hero Section ===== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Digital Marketing Specialist</span>
            <h1 className={styles.heroName}>안녕하세요,<br />마케터 <span className={styles.accent}>김마케터</span>입니다</h1>
            <p className={styles.heroDesc}>
              데이터 기반 전략과 창의적인 콘텐츠로 브랜드의 성장을 이끄는 디지털 마케터입니다.
              고객의 마음을 움직이는 캠페인을 기획하고 실행합니다.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/projects" className="btn btn-primary">프로젝트 보기</Link>
              <Link href="/contact" className="btn btn-outline">연락하기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { value: '3+', label: '년 마케팅 경력' },
              { value: '12+', label: '진행 프로젝트' },
              { value: '320%', label: '최대 팔로워 성장률' },
              { value: '5억+', label: '캠페인 누적 도달' },
            ].map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Project Section ===== */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Project</span>
            <h2 className="section-title">대표 프로젝트</h2>
          </div>

          <div className={styles.featuredCard}>
            <div className={styles.featuredLeft}>
              <span className="badge">{featuredProject.tag}</span>
              <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
              <p className={styles.featuredRole}>담당 역할 | {featuredProject.role}</p>
              <p className={styles.featuredDesc}>{featuredProject.description}</p>
              <div className={styles.featuredResult}>
                <span className={styles.resultIcon}>📈</span>
                <span>{featuredProject.result}</span>
              </div>
              <Link href="/projects" className="btn btn-primary" style={{ marginTop: '24px', alignSelf: 'flex-start' }}>
                전체 프로젝트 보기 →
              </Link>
            </div>
            <div className={styles.featuredRight}>
              <div className={styles.featureVisual}>
                <div className={styles.visualBar}>
                  <span className={styles.visualLabel}>팔로워</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '82%' }} />
                  </div>
                  <span className={styles.visualValue}>+320%</span>
                </div>
                <div className={styles.visualBar}>
                  <span className={styles.visualLabel}>도달</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '70%' }} />
                  </div>
                  <span className={styles.visualValue}>+215%</span>
                </div>
                <div className={styles.visualBar}>
                  <span className={styles.visualLabel}>전환율</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: '55%' }} />
                  </div>
                  <span className={styles.visualValue}>+87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Links ===== */}
      <section className={`section ${styles.quickSection}`}>
        <div className="container">
          <div className={styles.quickGrid}>
            {[
              { href: '/about', icon: '👤', title: '소개', desc: '저에 대해 더 알아보세요' },
              { href: '/skills', icon: '⚡', title: '역량', desc: '마케팅 핵심 역량 소개' },
              { href: '/experience', icon: '💼', title: '경력', desc: '주요 경력과 활동 경험' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={`card ${styles.quickCard}`}>
                <span className={styles.quickIcon}>{item.icon}</span>
                <h3 className={styles.quickTitle}>{item.title}</h3>
                <p className={styles.quickDesc}>{item.desc}</p>
                <span className={styles.quickArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
