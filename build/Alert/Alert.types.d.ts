export interface AlertProps {
    variant?: 'solid' | 'subtle' | 'left-accent' | 'top-accent';
    type: 'success' | 'error' | 'warning' | 'info' | 'loading';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    fullColor?: boolean;
    isCloseable?: boolean;
    textAlign?: 'left' | 'center';
    title?: string;
    message: string;
}
