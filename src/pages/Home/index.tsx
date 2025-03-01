import styles from "./home.module.scss";
import Wrapper from "@/layouts/Wrapper";
const VideoSRC = "/AdobeStock_Video.mov";

export default function Home() {
    return (
        <Wrapper>
            <div className={styles.container}>
                <h1 className={styles.pageHeading}>SI 2025</h1>
                <div className={styles.subContainer}>
                    <div className={styles.text}>
                    Hi! there, John What would you like to know?
                    </div>
                    <p className={styles.desc}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    <br />
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>

                    <div className={styles.videoContainer}>
                    <video autoPlay muted>
                        <source src={VideoSRC} type="video/mp4" />
                    </video>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
  }
  