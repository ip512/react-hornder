import * as React from 'react';
import { CowCard } from '../components/CowCard';
import styled from 'styled-components/macro';

export function Features() {
  const names = [
    'Shanon',
    'Luke',
    'Brandon',
    'Cindy',
    'Joe',
    'Nicole',
    'Steeve',
    'Daisy',
    'Marge',
    'Homer',
    'Olie',
    'David',
  ];

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
    <CowCard img={`cow-${i}.jpg`} name={names[i - 1]} key={i} />
  ));

  return <List>{cards}</List>;
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
