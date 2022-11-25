import * as i2022 from './2022_i'
import * as ii2022 from './2022_ii'

import { SectionData, cohortType } from '../types'

const cohorts: Record<string, SectionData> = {
  i2022,
  ii2022,
}

export const getData = (key: string) => cohorts[key]

export const currentCohort: cohortType = { year: 2022, section: 2 }
