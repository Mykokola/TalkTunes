const getData =  async () => {
    const response = await fetch('https://64ff6cf3f8b9eeca9e2a1cd5.mockapi.io/todo/number')
    const result = await response.json()
    return result
}
export default getData