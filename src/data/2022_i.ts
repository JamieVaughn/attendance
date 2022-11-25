import { getClassTimeline } from "../utils";
import type { Student } from '../types'

const startDate = 'Sep 26, 2022'
const skipDates = [new Date(2022, 9, 3), new Date(2022, 9, 5), new Date(2022, 9, 6), new Date(2022, 9, 26)]

const createStudent = (name: string, email: string, fccId: string) => ({name, email, fccId, present: true, dropped: false})

export const students: Student[] = [
  // createStudent('Brett', 'bkabat35@gmail.com', 'fcc321f603b-a7f6-4e89-ab59-a2d37a7cfbc3'),
  createStudent('Akul', 'akulsingh1511@gmail.com', 'fccbba861c9-ebd9-497e-8b4b-6b9bcd273f22'),
  createStudent('David Miner', 'dminerur@outlook.com', 'seaeagles'),
  createStudent('Heather', 'hrcurran13@gmail.com', 'heatherrooo'),
  createStudent('Jackie', 'jsmartin09@gmail.com', 'JSM-Dev'),
  createStudent('Lance', 'lbecoats63@gmail.com', 'fcc7831610a-2fb3-47bb-96a5-602e267ef757'),
  createStudent('Sandra', 'sandragonzalez0234@gmail.com', 'fcc035112b5-cfa7-471f-a40a-0bad863c932c'),
]

export const absent: string[][] =[
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

const present = (student: Student, i: number) => {
  const isAbsent = absent[i].includes(student.name.toLowerCase())
  return {name: student.name, present: !isAbsent}
}
export const absenceLog = Array.from({length: 20}).map((arr, i) => students.map(student => present(student, i)))

export const stringDates = getClassTimeline(startDate, skipDates)