import { ReactNode } from 'react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
export interface ButtonProps extends ChakraButtonProps {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'alternative';
}
