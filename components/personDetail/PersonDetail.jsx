import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PersonMock from '../../models/person/PersonMock';
import Person from '../../models/person/Person';

const PersonDetail = () => {
  const [person, setPerson] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.id > 0) {
      const newPerson = PersonMock.find(p => p.id === Number(params.id));
      setPerson(new Person({...newPerson}));
    }
  }, [])

  return person && person.id > 0 && (
      <div>
        <h3>Person Detail</h3>
        <div>
          Name: {person.name}
        </div>
        <div>
          Age: {person.age}
        </div>
        <div>
          Sex: {person.sex}
        </div>

        <Link to={'/'}>Back</Link>
      </div>
    )
  
}

export default PersonDetail;