import type { Metadata } from 'next';
import { AdminLayout } from './AdminLayout';

export default function ({ children }) {
  if (process.env.cloudMode) {
    return null;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Admin | Retech Labs',
    default: 'Admin | Retech Labs',
  },
};
