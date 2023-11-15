import satData from './satData.jsx';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
  //code continues
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
};

export default Buttons;