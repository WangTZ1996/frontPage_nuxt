export function formatNumber (n) {
  let [a, b] = ('' + n).split('.')
  a = a.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return b ? `${a}.${b}` : a
}
