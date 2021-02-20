/**
 *
 * TradeButton
 *
 */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Spinner, Text } from '@blueprintjs/core';
import { media } from '../../../styles/media';

interface Props {
  text: React.ReactNode;
  textColor: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export function TradeButton(props: Props) {
  return (
    <StyledButton
      type={props.type}
      disabled={props.disabled}
      className="xtoken-border"
      textColor={props.textColor}
      onClick={() => props.onClick()}
    >
      <Text
        ellipsize
        className="d-flex flex-row align-items-center justify-content-center"
        tagName="span"
      >
        {props.loading && <Spinner className="mr-1" size={17} />}
        {props.text}
      </Text>
    </StyledButton>
  );
}
TradeButton.defaultProps = {
  textColor: 'var(--white)',
  type: 'button',
  onClick: () => {},
};

interface StyledButtonProps {
  textColor: string;
  disabled?: boolean;
}

const StyledButton = styled.button`
  color: ${(props: StyledButtonProps) => props.textColor};
  background-color: var(--Gold);
  border-radius: 20px;
  padding: 11px 22px;
  font-size: 12px;
  &:hover:not(:disabled) {
    color: var(--white);
  }
  &:disabled span {
    opacity: 0.7;
  }
  ${(props: StyledButtonProps) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: var(--component-bg-inactive);
    `}
  ${media.lg`
  font-size: 14px
  `}
`;
