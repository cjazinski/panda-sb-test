// Generated with util/create-component.js
import React from 'react';
import { AvatarProps } from './Avatar.types';
import { Avatar as AAvatar } from '@ark-ui/react';

const Avatar: React.FC<AvatarProps> = ({ someProp, ...props }) => {
  return (
    <AAvatar.Root>
      <AAvatar.Fallback>??</AAvatar.Fallback>
      <AAvatar.Image src="https://via.placeholder.com/150" alt="Avatar" />
    </AAvatar.Root>
  );
};

export default Avatar;
