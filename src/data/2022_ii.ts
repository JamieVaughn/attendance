import { getClassTimeline, createStudent } from "../utils";
import type { StudentsType, AbsenceLogType, AbsentType, DatesType } from '../types'


const startDate = 'Nov 28, 2022'
const skipDates = [new Date(2022, 12, 8), new Date(2022, 12, 26), new Date(2022, 12, 28), new Date(2022, 12, 29)]


const students: StudentsType = [
  // createStudent('Brett', 'bkabat35@gmail.com', 'fcc321f603b-a7f6-4e89-ab59-a2d37a7cfbc3'),
  createStudent('Akul', 'akulsingh1511@gmail.com', 'fccbba861c9-ebd9-497e-8b4b-6b9bcd273f22'),
  createStudent('David Miner', 'dminerur@outlook.com', 'seaeagles'),
  createStudent('Koi', 'mkareyne@gmail.com', 'k'),
  createStudent('Heather', 'hrcurran13@gmail.com', 'heatherrooo'),
  createStudent('Jackie', 'jsmartin09@gmail.com', 'JSM-Dev'),
  createStudent('Lance', 'lbecoats63@gmail.com', 'fcc7831610a-2fb3-47bb-96a5-602e267ef757'),
  createStudent('Sandra', 'sandragonzalez0234@gmail.com', 'fcc035112b5-cfa7-471f-a40a-0bad863c932c'),
]

const absent: AbsentType =[
  ['akul'],
  ['akul', 'koi'],
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

const present = (student: StudentsType[number], i: number) => {
  const isAbsent = absent[i].includes(student.name.toLowerCase())
  return {name: student.name, present: !isAbsent}
}

const absenceLog: AbsenceLogType = Array.from({length: 20}).map((arr, i) => students.map(student => present(student, i)))

const stringDates: DatesType = getClassTimeline(startDate, skipDates)

export {
  absent,
  absenceLog,
  stringDates,
  students
}
