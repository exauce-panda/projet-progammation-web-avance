import Image from "next/image";
import reactLogo from "@/public/react.png";
import styles from './Home.module.css';
import DescAlpha from '@/components/DescriptionAlphaCenter'
import MainEven from '@/components/MainEvent'

export default function Page() {

  return (
    <>
      <div className={styles.top}>
        <DescAlpha />
      </div>
      <div className={styles.down}>
        <MainEven />
      </div>
    </>
  );
}
