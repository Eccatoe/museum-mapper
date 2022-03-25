import { useState, useEffect } from "react"
import MuseumContainer from "./MuseumContainer"

function Home() {
  const [museums, setMuseums] = useState([])
  useEffect(() => {
    fetch("/museums")
      .then((r) => r.json())
      .then(setMuseums)
  }, [])
  return (
    <>
      <MuseumContainer museums={museums} />
    </>
  )
}

export default Home
