import Lottie from "lottie-react";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import dev from "../../public/Global Mobile News Network.json"

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
         <div className={styles.animatedbackgroundd}>
        <Lottie animationData={dev} className={styles.lottieanimationn} />
      </div>
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise is your go-to platform for exploring cities and countries around the globe.
      Discover detailed city insights, view interactive maps, and track your favorite destinations
      all in one place.
          </p>
          <p>
            Whether you are planning your next adventure, learning about new cultures, or just curious
      about the world, WorldWide makes it easy and fun to explore. Sign up today to start your
      journey with us!
          </p>
        </div>
      </section>
    </main>
  );
}
