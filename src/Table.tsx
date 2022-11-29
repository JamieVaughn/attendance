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
import type { StudentsType, SectionData } from "./types";

type Cohort = { year: number; section: number };

export const Table: Component<Cohort> = (props) => {
  const [data, setData] = createSignal<SectionData>({
    absent: [],
    stringDates: [],
    students: [],
    absenceLog: [],
  });

  createEffect(() => {
    setData(getData(`${"i".repeat(props.section)}${props.year}`));
  });

  return (
    <section
      class={styles.grid}
      style={`--students: ${data().students.length}; --classes: ${
        data().stringDates.length
      }`}
    >
      <span class={styles.placeholder} title="yyyy-mm-dd :: Day">
        <h2>
          {props.year} Section: {props.section}
        </h2>
        <br />
        <span>Classes: {data().stringDates.length}, 3hrs each</span>
      </span>
      <For each={data().students}>
        {(student: StudentsType[number]) => (
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
                  data()
                    .absent.flat()
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
      <For each={data().stringDates}>{(date) => <div>{date}</div>}</For>
      <For each={data().absenceLog}>
        {(row, index) => (
          <For each={row}>
            {(student, _i) => {
              return !isFuture(
                new Date(data().stringDates[index()].split(" :: ")[0])
              ) ? (
                <output
                  class={student.present ? styles.present : styles.absent}
                >
                  {student.present ? `✅` : "✖️"}
                </output>
              ) : (
                <output class={styles.future}>-</output>
              );
            }}
          </For>
        )}
      </For>
    </section>
  );
};
