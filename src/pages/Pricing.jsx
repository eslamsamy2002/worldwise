// Uses the same styles as Product
import Lottie from "lottie-react";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import dev from "../../public/Money.json"

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div className={styles.animatedbackgroundd}>
        <Lottie animationData={dev} className={styles.lottieanimationn} />
      </div>
      <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Explore cities and countries around the world with ease! Our platform helps you discover
      detailed city information, visualize locations on a map, and manage your favorite destinations.
      Sign up today to unlock all features and make planning your travels smarter and simpler.
          </p>
        </div>
        
      </section>
    </main>
  );
}
