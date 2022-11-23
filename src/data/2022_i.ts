import { getClassTimeline } from "../utils";

type Student = {
  name: string,
  email: string,
  present: boolean
}

const startDate = 'Sep 26, 2022'
const skipDates = [new Date(2022, 9, 3), new Date(2022, 9, 5), new Date(2022, 9, 6), new Date(2022, 9, 26)]

const createStudent = (name: string, email: string) => ({name, email, present: true, dropped: false})

export const students: Student[] = [
  createStudent('Akul', 'akulsingh1511@gmail.com'),
  createStudent('David Miner', 'dminerur@outlook.com'),
  createStudent('Heather', 'hrcurran13@gmail.com'),
  createStudent('Jackie', 'jsmartin09@gmail.com'),
  createStudent('Lance', 'lbecoats63@gmail.com'),
  createStudent('Sandra', 'sandragonzalez0234@gmail.com'),
]

export const absent =[
  [],
  ['sandra'],
  ['sandra'],
  [],
  ['sandra'],
  ['sandra'],
  ['akul'],
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
const base = Array.from({length: 20})
const present = (student: Student, i: number) => {
  const isAbsent = absent[i].includes(student.name.toLowerCase())
  return {name: student.name, present: !isAbsent}
}
export const log = base.map((arr, i) => students.map(student => present(student, i)))

export const stringDates = getClassTimeline(startDate, skipDates)
