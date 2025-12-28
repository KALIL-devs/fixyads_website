import styles from "./StatsBar.module.css";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "95%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

export default function StatsBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={index} className={styles.stat}>
            <h3 className={styles.value}>{item.value}</h3>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
