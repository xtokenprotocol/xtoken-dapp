import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '@blueprintjs/core';
import { media } from '../../../styles/media';

interface Props {
  text: string;
  active: boolean;
  onClick: () => void;
}

export function Tab(props: Props) {
  return (
    <StyledTab active={props.active} onClick={() => props.onClick()}>
      <Text ellipsize>{props.text}</Text>
    </StyledTab>
  );
}

interface StyledProps {
  active: boolean;
}
const StyledTab = styled.button.attrs(_ => ({
  type: 'button',
  className: 'btn',
}))`
  color: var(--dark-gray) !important;
  background-color: var(--light-gray);
  padding: 9px 11px;
  border-radius: 8px;
  font-size: 12px;
  ${media.lg`font-size: 1rem;`}
  ${(props: StyledProps) =>
    props.active &&
    css`
      background-color: var(--white);
      &:hover {
        color: var(--gold) !important;
      }
    `}
`;
