import { FiCheck, FiFileText, FiRefreshCw, FiUsers } from 'react-icons/fi';
import styles from './AboutSection.module.css';

const principles = [
  'Everyday hospital workflows come first',
  'Offline-first by design, with sync when connectivity returns',
  'Simple workflows for busy staff with varied digital experience',
  'Patient information accessed according to staff permissions',
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.diagram}>
            <span className={`${styles.node} ${styles.records}`}><FiFileText /></span>
            <span className={`${styles.node} ${styles.people}`}><FiUsers /></span>
            <span className={styles.brandMark}>
              <svg viewBox="0 0 48 48" focusable="false">
                <path d="M17 5h14v12h12v14H31v12H17V31H5V17h12Z" fill="currentColor" />
              </svg>
            </span>
          </div>
          <div className={styles.brandCard}>
            <span className={styles.syncIcon}><FiRefreshCw /></span>
            <div>
              <strong>Great<span>Mind</span></strong>
              <p>Built for everyday hospital work.</p>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>About GreatMind</p>
          <h2 id="about-heading">Built Around How Hospitals <span>Actually Work.</span></h2>
          <p className={styles.body}>
            GreatMind is an offline-first hospital management system being built
            for Nigerian hospitals, where busy teams often work with paper
            records, basic devices, and unreliable internet.
          </p>
          <p className={styles.body}>
            Our aim is to bring scattered information into one practical system,
            with clear workflows that fit the working day and help staff keep
            essential work moving when connectivity drops.
          </p>
          <ul className={styles.principles}>
            {principles.map((principle) => (
              <li key={principle}>
                <FiCheck aria-hidden="true" focusable="false" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
