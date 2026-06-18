let globalUiIdCounter = 0

/**
 * Benzersiz DOM id üretir (`ui-input-1`, `ui-dialog-2`, …).
 * @param {string} prefix
 * @returns {string}
 */
export function createUiId(prefix) {
  globalUiIdCounter += 1
  return `${prefix}-${globalUiIdCounter}`
}

/**
 * Modül başına sayaç — bileşen dosyasında `let n = 0` yerine.
 * @param {string} prefix
 * @returns {() => string}
 */
export function createUiIdFactory(prefix) {
  let counter = 0
  return () => {
    counter += 1
    return `${prefix}-${counter}`
  }
}
