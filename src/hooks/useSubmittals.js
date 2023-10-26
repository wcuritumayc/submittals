
import responseSubmittals from '../mocks/with-results.json';
import withoutResults from '../mocks/without-results.json';
import { useState, useEffect } from 'react';

export function useSubmittals() {
  const [responseSubmittals, setResponseSubmittals] = useState([]);

  /*const submittals = responseSubmittals.submittals

  const mappedSubmittals = submittals?.map(submittal => ({
    status: submittal.status,
    id: submittal.id,
    spec: submittal.spec,
    revision: submittal.revision,
    title: submittal.title,
    type: submittal.type,
    priority: submittal.priority,
    dueDate: submittal.dueDate,
    ballInCourt: submittal.ballInCourt,
    address: submittal.address
  }))
  */

  const url = 'https://submittal2-get-endpoint.free.beeceptor.com';
  useEffect(() => {
    const fetchData = async () => {
        await fetch(url)
          .then(res => res.json())
          .then(json => {
            console.log("json::",json);
            setResponseSubmittals(json);
          })
          .catch(error => console.error('Error GET response:', error));
    };

    fetchData();
  }, [url]);

  return { submittals: responseSubmittals }
}