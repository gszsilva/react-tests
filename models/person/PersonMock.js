import Person from './Person';
import Sex from './SexEnum'

const PersonMock = [
  new Person({ id: 1, name: 'Amélia Santos', age: 27, sex: Sex.FEMALE }),
  new Person({ id: 2, name: 'Roberto Castro', age: 52, sex: Sex.MALE }),
  new Person({ id: 3, name: 'Roberto Castro', age: 52, sex: Sex.MALE }),
]

export default PersonMock;