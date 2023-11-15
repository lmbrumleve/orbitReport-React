import satData from './satData.jsx';
import './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id} className="flex-container">
        {sat} Orbit
      </button>
    )})}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
  </div>
  )
};

export default Buttons;