import { ref } from 'vue'

export const date = ref(new Date())

export const getElapsedDays = date => Math.ceil((date - getInitMoment(date.getFullYear())) / (24 * 60 * 60 * 1000))

export const getInitMoment = year => new Date(`${year}-01-01T00:00:00`)

export const getPercentage = (date, isCountdown) =>
  isCountdown && isLastDay(date)
    ? (getTimeDiff(date) / (24 * 60 * 60) * 100).toFixed(1)
    : (getElapsedDays(date) / getYearTotalDays(date) * 100).toFixed(1)

export const getTimeDiff = date => (getInitMoment(date.getFullYear() + 1) - date) / 1000

export const getYearTotalDays = date => isLeap(date.getFullYear()) ? 366 : 365

export const isLastDay = date => getPercentage(date, false) === '100.0'

export const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
