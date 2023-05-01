import UseApi from "../../util/UseApi";
import "./FormDetails.css";

const url = "https://formapp-ba5d6-default-rtdb.firebaseio.com/data.json";

const FormDetails = () => {
  const { data, error, isLoading } = UseApi(url);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return (
      <>
        <div className="spinner-border text-danger" role="status"></div>
        <h1>Loading...</h1>
      </>
    );
  }

  const values = Object.values(data);
 
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Guardian Name</th>
            <th>Marital Status</th>
            <th>Govt. IdType</th>
            <th>Govt. idNumber</th>
          </tr>
        </thead>
        <tbody>
          {values.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.Address}</td>
              <td>{item.guardianName}</td>
              <td>{item.maritalStatus}</td>
              <td>{item.idType}</td>
              <td>{item.idNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDetails;
