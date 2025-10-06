import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Lottie from "lottie-react";
import travelAnimation from "../../public/World.json"; 
import { Typewriter } from "react-simple-typewriter";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <h1 className={styles.heroTitle}>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </h1>

      <section className={styles.container}>
        {/* Left side */}
        <div className={styles.left}>
           <h1 className={styles.subTitle}>
            <Typewriter
              words={[
      " Track Every Step You Take ✈️🌍",
      "Your Personal Travel Journal 📖🖊️",
      "Where Memories Meet Maps 🗺️❤️",
      "A New Way to Remember Your Journeys 🛤️🌟 ",
    ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2200}
            />
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to="/login" className={styles.cta}>
            Start tracking now
          </Link>
        </div>

        {/* Right side */}
        <div className={styles.right}>
          <Lottie animationData={travelAnimation} loop={true} />
        </div>
      </section>
    </main>
  );
}
