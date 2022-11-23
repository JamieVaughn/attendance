import { addDays, getDay, isEqual, formatISO } from 'date-fns'


export function getClassTimeline(startDate: string, skipDates: Array<Date>) {

  const startDateObj = new Date(startDate)
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
      return !skipDates.some(skipDate => isEqual(new Date(day), skipDate))
    })
    i++
  }

  const stringDates: string[] = sectionClassDates.map(date => formatDayString(date))


  return stringDates
}
