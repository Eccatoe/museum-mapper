import {Link} from 'react-router-dom'
import waMonument from '../assets/wa_monument.mp4'

function SplishSplash() {
  return (
    <div id="splash">
        <video autoPlay muted loop id="myVideo">
  <source src={waMonument} type="video/mp4"/>
</video>
<Link className="explore" to="/home">Explore DC</Link>
    </div>
  )
}

export default SplishSplash