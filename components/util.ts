export const capitalize = (str: string) => str.replace(/\w\S*/g, w => (w.replace(/^\w/, c => c.toUpperCase())))
export const kebabCase = (str: string) => str.toLowerCase().split(' ').join('-')
