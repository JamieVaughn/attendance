type Student = {
  name: string,
  email: string,
  fccId: string,
  present: boolean,
  dropped: boolean
}

export type AbsenceLogType = Pick<Student, 'name' | 'present'>[][]
export type AbsentType = string[][]
export type DatesType = string[]

export type StudentsType = Student[]

export type SectionData = {
  students: StudentsType;
  absent: AbsentType;
  stringDates: DatesType;
  absenceLog: AbsenceLogType;
};

export type cohortType = {year: number, section: number}
