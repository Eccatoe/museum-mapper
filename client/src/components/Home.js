import { useState, useEffect } from "react"
import MuseumContainer from "./MuseumContainer"

function Home({currentUser}) {
  const [museums, setMuseums] = useState([])




  useEffect(() => {
    fetch("/museums")
      .then((r) => r.json())
      .then((data)=>setMuseums(data))
  }, [])

  console.log(currentUser)
  return (
    <>
      <MuseumContainer museums={museums} />
    </>
  )
}

export default Home
