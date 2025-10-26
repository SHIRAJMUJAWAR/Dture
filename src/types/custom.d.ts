// Allow importing .jsx components without explicit declaration files
// This provides a lightweight typing for React components exported from .jsx files
declare module '*.jsx' {
  import type { ComponentType } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}
