import '../App.css';

function ListOfSubmittals({submittals}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Spec</th>
            <th>Rev</th>
            <th>Title</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Ball in Court</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            submittals.map(submittal => (
              <tr key={submittal.id}>
                <td>{submittal.status}</td>
                <td>{submittal.id}</td>
                <td>{submittal.spec}</td>
                <td>{submittal.revision}</td>
                <td>{submittal.title}</td>
                <td>{submittal.type}</td>
                <td>{submittal.priority}</td>
                <td>{submittal.dueDate}</td>
                <td>{submittal.ballInCourt}</td>
                <td>{submittal.address}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

function NoSubmittalsResults() {
  return (
    <p>No Submittals found.</p>
  )
}

export function Submittals({submittals}) {
  const hasSubmittals = submittals?.length > 0

  return (
    hasSubmittals
    ? <ListOfSubmittals submittals={submittals}/>
    : <NoSubmittalsResults />
  )
}