import { getClassTimeline } from "../utils";

type Student = {
  name: string,
  email: string,
  present: boolean
}

const startDate = 'Nov 28, 2022'
const skipDates = [new Date(2022, 12, 8), new Date(2022, 12, 26), new Date(2022, 12, 28), new Date(2022, 12, 29), new Date(2023, 1, 2)]

const createStudent = (name: string, email: string) => ({name, email, present: true, dropped: false})

export const students: Student[] = [
  createStudent('Akul', 'akulsingh1511@gmail.com'),
  createStudent('David Miner', 'dminerur@outlook.com'),
  createStudent('Heather', 'hrcurran13@gmail.com'),
  createStudent('Jackie', 'jsmartin09@gmail.com'),
  createStudent('Lance', 'lbecoats63@gmail.com'),
  createStudent('Sandra', 'sandragonzalez0234@gmail.com'),
]

export const absent: string[][] =[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]

const present = (student: Student, i: number) => {
  const isAbsent = absent[i].includes(student.name.toLowerCase())
  return {name: student.name, present: !isAbsent}
}
export const absenceLog = Array.from({length: 20}).map((arr, i) => students.map(student => present(student, i)))

export const stringDates = getClassTimeline(startDate, skipDates)
