import type { Component } from "solid-js";
import { For } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

import { students, sectionClassDates, stringDates } from "./data";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <span>MCC FE Attendance: Section 1</span>
        <span>Classes: {stringDates.length}</span>
      </header>
      <main
        class={styles.grid}
        style={`--students: ${students.length}; --classes: ${stringDates.length}`}
      >
        <span class={styles.placeholder}>yyyy-mm-dd :: Day</span>
        <For each={students}>{(student) => <h3>{student}</h3>}</For>
        <For each={stringDates}>{(item) => <div>{item}</div>}</For>
        <For
          each={Array.from({ length: stringDates.length * students.length })}
        >
          {(box, index) => (
            <span>{index() % Math.ceil(Math.random() * 10) ? "✅" : "✖️"}</span>
          )}
        </For>
      </main>
    </div>
  );
};

export default App;
