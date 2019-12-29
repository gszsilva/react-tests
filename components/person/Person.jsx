import React from 'react';
import styled from '@emotion/styled'
import PersonMock from '../../models/person/PersonMock'

const Main = () => {

  let PersonLi = styled.li({
    color: 'hotpink'
  }) 

  return (
    <div>
      <ul>
        // {PersonMock.map(person => {
        //   return (
        //     <PersonLi>
        //       a
        //     </PersonLi>
        //   )
        // })}
      </ul>
    </div>
  )
}

export default Main;