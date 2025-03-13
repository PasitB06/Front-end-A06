import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image
            src={'/img/cover.jpg'}
            alt="cover"
            fill={true}
            objectFit="cover"
            />

            <div className={styles.bannerText}>
                <h1 className="text-4xl font-medium">where every event finds its venue</h1>
            </div>
        </div>
    );
}