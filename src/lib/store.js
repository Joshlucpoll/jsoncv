export const storeKeys = {
  cvJSON: 'cvJSON',
  cvSavedTime: 'cvSavedTime',
  primaryColor: 'primary-color',
  theme: 'theme',
}

const defaultPrimaryColor = '#2A3FFB'

function updateSavedTime() {
  localStorage.setItem(storeKeys.cvSavedTime, Date.now())
}

export function saveCVJSON(str) {
  localStorage.setItem(storeKeys.cvJSON, str)
  updateSavedTime()
}

export function getCVData() {
  const v = localStorage.getItem(storeKeys.cvJSON)
  if (!v) return
  return JSON.parse(v)
}

export function saveTheme(theme) {
  localStorage.setItem(storeKeys.theme, theme)
  updateSavedTime()
}

export function getTheme() {
  const theme = localStorage.getItem(storeKeys.theme)
  if (!theme) return 'default'
  return theme
}

export function getCVSavedTime() {
  return localStorage.getItem(storeKeys.cvSavedTime)
}

export function savePrimaryColor(color) {
  localStorage.setItem(storeKeys.primaryColor, color)
  updateSavedTime()
}

export function getPrimaryColor() {
  return localStorage.getItem(storeKeys.primaryColor) || defaultPrimaryColor
}
