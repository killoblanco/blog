export const readingTime = (minutes: number) => {
  const readTime = Math.ceil(minutes)
  return `${readTime} minuto${readTime > 1 ? 's' : ''} de lectura`
}
