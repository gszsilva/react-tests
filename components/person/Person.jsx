import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PersonMock from '../../models/person/PersonMock'

const Main = () => {

  const PersonUl = styled.ul({
    listStyle: 'none',
    paddingLeft: 0,
  })

  const firstHover = css({
    backgroundColor: 'red',
    color: 'white',
  })

  const PersonLi = styled.li({
    borderRadius: '3px',
    width: '100px',
    height: '20px',
    padding: '10px',
    backgroundColor: 'gray',
    color: 'black',
    style: 'none',
    marginBottom: '10px',
    transition: '.2s all',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }) 

  return (
    <div>
      <PersonUl>
        {PersonMock.map(person => {
          return (
            <Link to={`/person/${person.id}/detail`}>
              <PersonLi>
                {person.name}
              </PersonLi>
            </Link>
          )
        })}
      </PersonUl>
    </div>
  )
}

export default Main;