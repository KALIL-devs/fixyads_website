import Link from 'next/link';
import styles from './CourseCard.module.css';

interface CourseCardProps {
    title: string;
    description: string;
    duration: string;
    level: string;
    link: string;
    imageColor?: string;
}

const CourseCard = ({ title, description, duration, level, link, imageColor = '#0056b3' }: CourseCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.image} style={{ backgroundColor: imageColor, color: 'white' }}>
                {title} Image
            </div>
            <div className={styles.content}>
                <span className={styles.tag}>{level}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.meta}>
                    <span>⏱ {duration}</span>
                    <span>🎓 Certification</span>
                </div>

                <Link href={link} className={`btn btn-outline ${styles.button}`}>
                    View Syllabus
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
