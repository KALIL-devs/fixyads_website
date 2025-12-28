'use client';

import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link href={link} className={styles.card} aria-label={`View ${title}`}>
      {/* Icon */}
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>{icon}</div>
      </div>

      {/* Content */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Arrow */}
      <div className={styles.arrowBtn}>↗</div>
    </Link>
  );
};

export default ServiceCard;
