import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Icon,
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { IoMdCheckmarkCircle, IoMdAlert } from 'react-icons/io';
import { IoWarning } from 'react-icons/io5';
import { BsLightningFill } from 'react-icons/bs';
import { AlertProps } from './Alert.types';

const Alert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  size = 'sm',
  fontSize = 'sm',
  variant = 'solid',
  isCloseable = true,
  fullColor = false,
  textAlign = 'left',
  ...props
}) => {
  const [icon, setIcon] = useState<React.ReactNode>();

  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    switch (type) {
      case 'success':
        setIcon(<Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />);
        break;
      case 'info':
        setIcon(<Icon as={IoMdAlert} color="white" boxSize={6} />);
        break;
      case 'warning':
        setIcon(<Icon as={IoWarning} color="white" boxSize={6} />);
        break;
      case 'error':
        setIcon(<Icon as={BsLightningFill} color="white" boxSize={6} />);
        break;
      default:
        setIcon(<Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />);
        break;
    }
  }, [type]);

  // FullColor variants
  if (fullColor) {
    return (
      <>
        {isVisible ? (
          <ChakraAlert
            borderRadius="8px"
            status={type}
            variant={variant}
            justifyContent={textAlign === 'center' ? 'center' : 'left'}
            alignItems={textAlign === 'center' ? 'center' : ''}
            {...props}
          >
            <AlertIcon />
            <AlertTitle
              mr="12px"
              justifySelf={textAlign === 'center' ? 'center' : 'left'}
            >
              {title}
            </AlertTitle>
            <AlertDescription>{message}</AlertDescription>
            {isCloseable ? (
              <CloseButton
                position="absolute"
                fontSize={{ sm: '8px', md: '12px' }}
                right={{ sm: '-4px', md: '8px' }}
                top={{ sm: '-4px', md: '8px' }}
                onClick={onClose}
              />
            ) : null}
          </ChakraAlert>
        ) : null}
      </>
    );
  }

  const backgroundColor = (type: string) => {
    const alertColor = { color: '', darkColor: '' };
    if (type === 'success') {
      alertColor.color = 'green.600';
      alertColor.darkColor = 'green.400';
    }
    if (type === 'info') {
      alertColor.color = 'blue.600';
      alertColor.darkColor = 'blue.400';
    }
    if (type === 'warning') {
      alertColor.color = 'yellow.700';
      alertColor.darkColor = 'yellow.300';
    }
    if (type === 'error') {
      alertColor.color = 'red.600';
      alertColor.darkColor = 'red.400';
    }
    return alertColor;
  };

  return (
    <Flex
      w="full"
      bg="light.pageBackground"
      _dark={{
        bg: 'dark.pageBackground',
      }}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Flex
        maxW={size}
        w="full"
        mx="auto"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        shadow={'md'}
        rounded="lg"
        overflow="hidden"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w={12}
          bg={backgroundColor(type).color}
        >
          {icon}
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <Box
              as="span"
              color={backgroundColor(type).color}
              _dark={{
                color: `${backgroundColor(type).darkColor}`,
              }}
              fontWeight="bold"
            >
              {title}
            </Box>
            <Box
              as="p"
              color="gray.600"
              _dark={{
                color: 'gray.200',
              }}
              fontSize={fontSize}
            >
              {message}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Alert;
