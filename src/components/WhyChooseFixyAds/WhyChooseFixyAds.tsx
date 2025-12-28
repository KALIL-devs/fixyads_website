import styles from "./WhyChooseFixyAds.module.css";

const features = [
  {
    title: "Expert Team",
    description: "Certified marketing professionals",
    image: "/whychoosefixyads/expert.png",
    cardtag: "Performance rate deco",
    variant: "orange",
  },
  {
    title: "Data Driven",
    description: "Decisions powered by analytics",
    image: "/whychoosefixyads/dataDriven.png",
    cardtag: "Performance rate deco",
    variant: "teal",
  },
  {
    title: "Affordable Plans",
    description: "Best value for your budget",
    image: "/whychoosefixyads/coin.png",
    cardtag: "Performance rate deco",
    variant: "orange",
  },
  {
    title: "Transparent Reports",
    description: "Clear performance tracking",
    image: "/whychoosefixyads/image.png",
    cardtag: "Performance rate deco",
    variant: "teal",
  },
];


export default function WhyChooseFixyAds() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionbg}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Why Choose FixyAds</h2>
          <p className={styles.subheading}>
            Performance-focused strategies that deliver <b>real, measurable growth</b>
          </p>

          <div className={styles.grid}>
            {features.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  item.variant === "orange" ? styles.orangeCard : styles.tealCard
                }`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>

                <hr className={styles.hr} />

                <p className={styles.cardtag}>{item.cardtag}</p>
              </div>
            ))}
          </div>

          <div className={styles.trustBar}>
            <span>🚀 50+ Projects Delivered</span>
            <span>⭐ 95% Client Satisfaction</span>
            <span>🤝 Trusted by Startups & SMEs</span>
          </div>

          <div className={styles.ctaWrapper}>
            <a href="#contact" className="btn primary-btn"  style={{color: 'white'}}>
              Get Free Strategy Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
