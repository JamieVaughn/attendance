import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  splitProps,
} from "solid-js";
import { For } from "solid-js";
import { isFuture } from "date-fns";
import { getData } from "./data";
import styles from "./App.module.css";
import type { Student } from "./types";

type Cohort = { year: number; section: number };

export const Table: Component<Cohort> = (props) => {
  console.log("table", props);
  const { absent, stringDates, students, absenceLog } = getData(
    `${"i".repeat(props.section)}${props.year}`
  );

  createEffect(() => {
    console.log(absent, stringDates, students, absenceLog);
  });

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
        {(student: Student) => (
          <h3>
            <div>
              <a
                href={`https://www.freecodecamp.org/${student.fccId}`}
                target="_blank"
              >
                {student.name}
              </a>
            </div>
            <small class={styles.email}>{student.email}</small>
            <div>
              <small>
                absences:{" "}
                {
                  absent
                    .flat()
                    .filter(
                      (s: string) =>
                        s.toLowerCase() === student.name.toLowerCase()
                    ).length
                }
              </small>
            </div>
          </h3>
        )}
      </For>
      <For each={stringDates}>{(item) => <div>{item}</div>}</For>
      <For each={absenceLog}>
        {(row, index) => (
          <For each={row}>
            {(student, index) =>
              !isFuture(new Date(stringDates[index()])) && (
                <output
                  class={student.present ? styles.present : styles.absent}
                >
                  {student.present ? `✅` : "✖️"}
                </output>
              )
            }
          </For>
        )}
      </For>
    </section>
  );
};
