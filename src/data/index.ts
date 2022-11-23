import * as i2022 from './2022_i'
import * as ii2022 from './2022_ii'

export function getData(key: string){
  return {
    i2022,
    ii2022,
  }[key]
}
