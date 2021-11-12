export const getData = async () => {
  let res = await fetch('https://poloniex.com/public?command=returnTicker')

  return res.json()
}
