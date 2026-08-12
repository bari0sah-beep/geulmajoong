import styles from './page.module.css';

const contactInfo = [
  {
    icon: '📧',
    label: '이메일',
    value: 'marketing@example.com',
    href: 'mailto:marketing@example.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/marketing',
    href: 'https://linkedin.com',
  },
  {
    icon: '📍',
    label: '위치',
    value: '서울특별시',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* ===== Page Hero ===== */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 className="section-title">연락처</h1>
          <p className="section-subtitle">협업 제안이나 문의 사항이 있으시면 편하게 연락 주세요</p>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Side */}
            <div className={styles.infoSide}>
              <h2 className={styles.infoTitle}>함께 멋진 마케팅을<br />만들어 봐요 🙌</h2>
              <p className={styles.infoDesc}>
                디지털 마케팅 캠페인, SNS 채널 전략, 콘텐츠 기획 등
                마케팅 관련 업무 협업 및 프리랜서 프로젝트를 환영합니다.
                아래 연락처로 먼저 문의 주세요.
              </p>

              <div className={styles.contactList}>
                {contactInfo.map((info) => (
                  <div key={info.label} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{info.icon}</span>
                    <div className={styles.contactDetail}>
                      <span className={styles.contactLabel}>{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.availability}>
                <span className={styles.availDot} />
                <span>현재 협업 제안을 받고 있습니다</span>
              </div>
            </div>

            {/* Message Side */}
            <div className={styles.messageSide}>
              <div className={`card ${styles.messageCard}`}>
                <h3 className={styles.formTitle}>간단한 문의 남기기</h3>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">이름</label>
                    <input
                      id="name"
                      type="text"
                      className={styles.input}
                      placeholder="홍길동"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">이메일</label>
                    <input
                      id="email"
                      type="email"
                      className={styles.input}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="subject">문의 유형</label>
                    <select id="subject" className={styles.input}>
                      <option value="">선택해 주세요</option>
                      <option value="collab">협업 제안</option>
                      <option value="freelance">프리랜서 프로젝트</option>
                      <option value="consult">마케팅 컨설팅</option>
                      <option value="other">기타 문의</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">문의 내용</label>
                    <textarea
                      id="message"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="문의 내용을 입력해 주세요"
                      rows={5}
                    />
                  </div>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    문의 보내기 →
                  </button>
                </form>
                <p className={styles.formNote}>
                  * 이 폼은 데모용입니다. 실제 문의는 이메일로 보내주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
