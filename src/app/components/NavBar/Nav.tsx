import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav() {
  return (
    <Wrapper>
      <Item
        href="#"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <Icon src="/mootches.png" alt="Mootches icon" />
        <Label>My mootches</Label>
      </Item>
      <Item
        href="#"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <Icon src="/account.png" alt="My account" />
        <Label>My profile</Label>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const Label = styled.span`
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
