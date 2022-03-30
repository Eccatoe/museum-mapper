import { useState, useEffect} from "react"
import MuseumContainer from "./MuseumContainer"
import AppAdapter from '../adapters/AppAdapter'

function Home({museums, setMuseums}) {

  useEffect(() => {
    AppAdapter.getMuseums()
      .then((data)=>setMuseums(data))
  }, [])

  return (
    <>
      <MuseumContainer museums={museums} />
    </>
  )
}

export default Home
