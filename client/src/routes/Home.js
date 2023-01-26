import { Map } from "../components/map/Index";
import styles from "./Home.module.css";

const Home = () => {
   return (
      <div className={styles.container}>
         <Map />
      </div>
   );
};

export default Home;
