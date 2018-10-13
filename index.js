export const match = cases => key => (cases.hasOwnProperty(key) ? cases[key] : cases['_'])
