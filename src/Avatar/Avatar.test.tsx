// Generated with util/create-component.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import Avatar from './Avatar';

describe('Created Component with util', () => {
  it('Renders a div with Hello World', () => {
    const argProp = 'Hello World';
    const component = <Avatar someProp={argProp} />;
    const container = document.createElement('div');

    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => root.render(component));

    expect(document.body.textContent).toMatch('Hello World');
  });
});
