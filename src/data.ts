import { addDays, getDay, isEqual, formatISO } from 'date-fns'

const startDate = 'Sep 26, 2022'
const startDateArr = [2022, 8, 26] // year, month, date
export const students = [
  'Akul',
  'David Miner',
  'Heather', 
  'Jackie',
  'Lance',
  'Sandra',
]
const classDays = ['Mon', 'Wed', 'Thu']
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const startDateObj = new Date(startDate)
const numClasses = 20
const skipDays = [new Date(2022, 9, 3), new Date(2022, 9, 5), new Date(2022, 9, 6), new Date(2022, 9, 26)]
const numWeeks = 7
let sectionClassDates: Date[] = []

const translateDateObj = (num: number): Date => {
  return addDays(startDateObj, num)
}
const formatDayString = (date: Date) => {
  return `${formatISO(date, {representation: 'date'})} :: ${daysOfWeek[getDay(date)]}`
}
let i = 0
while(sectionClassDates.length < 20 && i < 25) {
  sectionClassDates.push(translateDateObj(0+(i*7)))
  sectionClassDates.push(translateDateObj(2+(i*7)))
  sectionClassDates.push(translateDateObj(3+(i*7)))
  sectionClassDates = sectionClassDates.filter(day => {
    console.log(new Date(day), skipDays)
    return !skipDays.some(skipDay => isEqual(new Date(day), skipDay))
  })
  i++
}

const stringDates: string[] = sectionClassDates.map(date => formatDayString(date))
console.log(stringDates.length, stringDates)


export {
  sectionClassDates,
  stringDates
}
