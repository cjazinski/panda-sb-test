import React from 'react';
import { ButtonProps } from './Button.types';
import { css } from '../../styled-system/css';

/**
 * Branded button with a few variants.
 */
const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <>
      <button
        className={css({
          bg: 'red.300',
          fontFamily: 'Inter',
          px: '4',
          py: '3',
          borderRadius: 'md',
          _hover: { bg: 'red.400' },
        })}
      >
        {children}
      </button>
      <div
        className={css({
          bg: 'red.300',
          fontFamily: 'Inter',
          px: '4',
          py: '3',
          borderRadius: 'md',
          _hover: { bg: 'red.400' },
        })}
      >
        {children}
      </div>
    </>
  );
};

export default Button;
