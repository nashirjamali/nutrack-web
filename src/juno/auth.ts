import { User } from '@junobuild/core-peer';
import { createContext } from 'react';

export const AuthContext = createContext<{ user: User | undefined | null }>({
  user: undefined
});
