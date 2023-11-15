import './styling.css'

const Table = ({ sat }) => {
  return (
    <div>
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     {sat.map((data) =>{
      return (
     <tbody>
     <tr>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational}</td>
     </tr>

     </tbody>
           )
          })}
   </table>
   </div>
  );
  };

export default Table;