import React from 'react'
import "../Style.css"
import styled from 'styled-components'
import MainBody from '../components/MainBody'

const mainPage = () => {
  return (
    <MainContainer>
      <MainBody/> 
        <h2>GIS Mapping of Hit College</h2>
        <iframe title="Mapping of Hit College" src="http://16.170.213.98:80" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
    </MainContainer>
  )
}

export default mainPage

const MainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
`