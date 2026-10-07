import styles from './Features.module.css';

const features = [
  {
    title: 'Patient Records',
    description: 'Register patients with a unique hospital-wide ID, search medical histories and consultation notes, and flag possible duplicate records.',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z M14 2v6h6 M8 13h8 M8 17h5',
  },
  {
    title: 'Appointments & Queues',
    description: 'Book, reschedule or cancel appointments, check patients in, and manage walk-in queues in one place.',
    icon: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z M8 14h2 M14 14h2 M8 18h2',
  },
  {
    title: 'Admissions & Wards',
    description: 'Coordinate admissions, allocate beds, track ward occupancy, and manage patient discharge workflows.',
    icon: 'M3 18v3 M21 18v3 M3 18h18v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5Z M5 11V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6 M8 11V8h8v3 M12 8v3',
  },
  {
    title: 'Billing & Payments',
    description: 'Create bills, record payments, apply approved discounts or waivers, and issue clear receipts.',
    icon: 'M4 3l2 1 2-1 2 1 2-1 2 1 2-1 2 1 2-1v18l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1V3Z M8 8h8 M8 12h8 M12 16h4',
  },
  {
    title: 'Offline-First Operations',
    description: 'Keep essential hospital workflows moving without internet. Changes sync automatically when connectivity returns.',
    icon: 'M20 7v5h-5 M4 17v-5h5 M6.1 6.1A8 8 0 0 1 19.5 9L20 12 M4 12l.5 3a8 8 0 0 0 13.4 2.9',
    featured: true,
  },
  {
    title: 'Hospital Dashboard',
    description: 'Give authorized staff a clear view of patient flow, admissions, billing, collections, and daily hospital activity.',
    icon: 'M3 3h7v7H3V3Z M14 3h7v4h-7V3Z M14 11h7v10h-7V11Z M3 14h7v7H3v-7Z',
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="services" aria-labelledby="features-heading">
      <div className={styles.features__container}>
        <div className={styles.features__intro}>
          <p className={styles.features__eyebrow}>Our features</p>
          <h2 id="features-heading">Everything You Need in One Place</h2>
          <p className={styles.features__summary}>
            From the front desk to the ward, GreatMind brings essential hospital
            workflows together—built for the realities of care in Nigeria.
          </p>
        </div>

        <ul className={styles.features__grid}>
          {features.map(({ title, description, icon, featured }) => (
            <li
              className={`${styles.features__card} ${featured ? styles['features__card--featured'] : ''}`}
              key={title}
            >
              <div className={styles['features__card-top']}>
                <span className={styles.features__icon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d={icon} />
                  </svg>
                </span>
                {featured && <span className={styles.features__badge}>Core feature</span>}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}