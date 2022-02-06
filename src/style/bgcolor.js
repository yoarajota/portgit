const [BgColor, setBgColor] = useState()
const ChangeBgColor = () => {
  setBgColor(isLargerThan768 ? 'white' : 'black')
}