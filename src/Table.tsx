import { Accessor, Component, splitProps } from "solid-js";
import { For } from "solid-js";
import { isFuture } from "date-fns";
import { getData } from "./data";
import styles from "./App.module.css";

type Cohort = { year: number; section: number };

export const Table: Component<Cohort> = (props) => {
  console.log("table", props);
  const { absent, stringDates, students, log } = getData(
    `${"i".repeat(props.section)}${props.year}`
  );
  return (
    <section
      class={styles.grid}
      style={`--students: ${students.length}; --classes: ${stringDates.length}`}
    >
      <span class={styles.placeholder}>
        <span>Classes: {stringDates.length}, 3hrs each</span>
        <br />
        <span>yyyy-mm-dd :: Day</span>
      </span>
      <For each={students}>
        {(student) => (
          <h3>
            <div>{student.name}</div>
            <small class={styles.email}>{student.email}</small>
            <div>
              <small>
                absences:{" "}
                {
                  absent
                    .flat()
                    .filter(
                      (s) => s.toLowerCase() === student.name.toLowerCase()
                    ).length
                }
              </small>
            </div>
          </h3>
        )}
      </For>
      <For each={stringDates}>{(item) => <div>{item}</div>}</For>
      <For each={log}>
        {(row, index) => (
          <For each={row}>
            {(student, index) =>
              !isFuture(new Date(stringDates[index()])) && (
                <span class={student.present ? styles.present : styles.absent}>
                  {student.present ? `✅` : "✖️"}
                </span>
              )
            }
          </For>
        )}
      </For>
    </section>
  );
};
