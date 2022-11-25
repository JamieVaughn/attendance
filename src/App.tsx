import { Component, createSignal, createEffect } from "solid-js";
import { Table } from "./Table";

import logo from "./assets/mcc_logo.png";
import styles from "./App.module.css";

const App: Component = () => {
  const [cohort, setCohort] = createSignal<{ year: number; section: number }>({
    year: 2022,
    section: 1,
  });
  const handleClick = (year: number, section: number) => {
    setCohort({ year, section });
  };
  createEffect(() => {
    console.log("cohort", cohort());
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.flex}>
          <img src={logo} class={styles.logo} alt="logo" />
          <span>FE Attendance Logs</span>
        </div>
        <nav class={styles.flex}>
          <a href="#_2022_1" onClick={() => handleClick(2022, 1)}>
            2022:i
          </a>
          <a href="#_2022_2" onClick={() => handleClick(2022, 2)}>
            2022:ii
          </a>
        </nav>
      </header>
      <main>
        <Table
          cohort={cohort}
          section={cohort().section}
          year={cohort().year}
        />
      </main>
    </div>
  );
};

export default App;
