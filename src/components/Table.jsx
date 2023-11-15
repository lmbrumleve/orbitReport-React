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
       <td>{data.operational ? "Active" : "Inactive"}</td>
     </tr>
     For the Status, create a conditional that will tell a user if a satellite is active or inactive based on its operational value.

     </tbody>
           )
          })}
   </table>
   </div>
  );
  };

export default Table;