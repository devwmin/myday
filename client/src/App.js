import styles from "./App.module.css";
import { AppRouter } from "./components/Router";

function App() {
   return (
      <div className={`app ${styles.container}`}>
         <AppRouter />
      </div>
   );
}

export default App;
