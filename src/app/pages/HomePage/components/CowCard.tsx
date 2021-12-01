import styled from 'styled-components/macro';

export function CowCard(props: any) {
  return (
    <Wrapper>
      <img src={`/images/${props.img}`} alt={props.name} />
      <Name>{props.name}</Name>
    </Wrapper>
  );
}

const Name = styled.p`
  color: #fff;
  margin: 2px 0;
  padding: 3px;
  text-align: center;
  font-weight: bold;
`;

const Wrapper = styled.div`
  background-color: #c33dcf;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  width: 310px;
  height: 338px;
  color: #fff;
`;
