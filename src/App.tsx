import { Component, createSignal } from "solid-js";
import { Table } from "./Table";
import { currentCohort } from "./data";
import { cohortType } from "./types";
import logo from "./assets/mcc_logo.png";
import styles from "./App.module.css";

const App: Component = () => {
  const [cohort, setCohort] = createSignal<cohortType>(currentCohort);
  const handleClick = (year: number, section: number) => {
    setCohort({ year, section });
  };
  const setClassIfActive = (id: string) => {
    return id === Object.values(cohort()).join("") ? styles.active : "";
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.flex}>
          <img src={logo} class={styles.logo} alt="logo" />
          <span>FE Attendance Logs</span>
        </div>
        <nav class={styles.flex}>
          <a
            href="#_2022_1"
            class={setClassIfActive("20221")}
            onClick={() => handleClick(2022, 1)}
          >
            2022:i
          </a>
          <a
            href="#_2022_2"
            class={setClassIfActive("20222")}
            onClick={() => handleClick(2022, 2)}
          >
            2022:ii
          </a>
        </nav>
      </header>
      <main>
        <Table section={cohort().section} year={cohort().year} />
      </main>
    </div>
  );
};

export default App;
