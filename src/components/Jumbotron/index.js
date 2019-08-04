import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cityImage from '../../assets/cityImage.webp';

const Styles = styled.div`
  .jumbo {
    background: url(${cityImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  h1 {
    text-align: center;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to incube8</h1>
      </Container>
    </Jumbo>
  </Styles>
)
