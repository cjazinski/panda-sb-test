import React, { useEffect } from 'react';
import { MemoryRouter } from 'react-router';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import '../src/index.css';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#FFF' },
      { name: 'dark', value: '#000' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  chakra: {
    theme: null,
  },
};

const ColorMode = (props) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode]);

  return props.children;
};

export const globalTypes = {
  colorMode: {
    title: 'Color Mode',
    defaultValue: 'light',
    toolbar: {
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <MemoryRouter initialEntries={['/']}>
      <ChakraProvider>
        <ColorMode colorMode={context.globals.colorMode}>
          <Story />
        </ColorMode>
      </ChakraProvider>
    </MemoryRouter>
  ),
];
