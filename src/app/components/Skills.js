"use client"
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Main = styled.div`
  width:100%;
  height:fit-content;
  background-color: black;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: nowrap;
  
  @media(max-width:998px){
  width:100%;
  height:fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const Container = styled.div`
  height: fit-content;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px auto;
  gap:15vw;

@media(max-width:998px){
width:90%;
height:fit-content;
display:flex;
align-items:center;
justify-content: center;
}

`;

const Panel = styled.div`
  height: 270px;
  width: 190px;
  position: relative;
  margin: 10px;
  &:hover .card {
    filter: blur(1.5px);
  }
  &:hover .card1 {
    background-size: 45% 30%;
  }
  &:hover .card2 {
    background-size: 45% 30%;
  }
  &:hover .card3 {
    background-size: 45% 30%;
  }
  &:hover .title {
    color: black;
  }
  &:hover .border {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  &:hover .slide {
    bottom: 0px;
  }
  &:hover .ring:before,
  &:hover .ring:after {
    transform: translateX(-50%) translateY(-50%) rotate(310deg);
  }
`;

const Ring = styled.div`
  color: #2DD65F;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 170px;

  &:before,
  &:after {
    content: '';
    padding: 0.7em 0.4em;
    position: absolute;
    left: 50%;
    width: 115%;
    top: 50%;
    display: block;
    border: 5px dotted #50c9c3;
    border-radius: 50%;
    transition: transform 1s;
    transform: translateX(-50%) translateY(-50%) rotate(50deg);
  }

  &:before {
    border-color: rgb(235, 235, 235) rgb(235, 235, 235) rgba(0, 0, 0, 0)
      rgba(0, 0, 0, 0);
    z-index: -1;
  }

  &:after {
    border-color: #2DD65F;
  }
`;

const Card = styled.div`
  background-color: white;
  position: relative;
  transition: all 1s;
  height: 270px;
  width: 190px;
  border-radius:10px;
  border: 3px solid #2DD65F;

`;

const Card1 = styled(Card)`
  background-image: url(/atomy.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center;  
`;

const Card2 = styled(Card)`
  background-image: url(/nodejs.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;

const Card3 = styled(Card)`
  background-image: url(/db.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card4 = styled(Card)`
  background-image: url(/js.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card5 = styled(Card)`
  background-image: url(/html.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card6 = styled(Card)`
  background-image: url(/css.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card7 = styled(Card)`
  background-image: url(/bootstrap.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card8 = styled(Card)`
  background-image: url(/next.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;
const Card9 = styled(Card)`
  background-image: url(/pth.png);
  background-repeat: no-repeat;
  background-size: 45% 30%;
  background-position: center; 
`;

const Title = styled.p`
  text-align: right;
  position: absolute;
  font-size: 26px;
  margin-left:15px;
  margin-top:10px;
  font-weight: 700;
  transition: all 1s;
  color:white;
  top: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Para = styled.p`
  text-align: center;
  position: absolute;
  font-family: "Raleway";
  font-size: 16px;
  padding: 20px;
  margin: 0;
  bottom: 0;
`;

const Border = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 260px;
  width: 180px;
  transition: border 1s;
  overflow: hidden;
`;

const Slide = styled.div`
  height: 260px;
  width: 180px;
  position: absolute;
  border: 1px solid black;
  bottom: -270px;
  background: rgba(0, 0, 0, 0.5);
  transition: bottom 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Skills = () => {
  return (
    <>
     <NavBar />
      <Main>
         
        <Container>
          <Panel>
            <Card1 className="card card1" />
            <Title className="title">ReactJS</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card2 className="card card2" />
            <Title className="title">NodeJS</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card3 className="card card3" />
            <Title className="title">MongoDB</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card4 className="card card4" />
            <Title className="title">JavaScript</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card5 className="card card5" />
            <Title className="title">HTML</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card6 className="card card6" />
            <Title className="title">CSS</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card7 className="card card7" />
            <Title className="title">Bootstrap</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card8 className="card card8" />
            <Title className="title">NextJS</Title>
            <Ring className="ring" />
          </Panel>
          <Panel>
            <Card9 className="card card9" />
            <Title className="title">Python</Title>
            <Ring className="ring" />
          </Panel>
        </Container>
      </Main>
    </>
  );
};

export default Skills;
