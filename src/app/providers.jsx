'use client';

import { SessionProvider } from 'next-auth/react';

// (İsteğe bağlı) Redux kullanıyorsan ekle:
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/store';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      {/* Redux kullanmıyorsan bu satırları ve importları kaldır */}
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </SessionProvider>
  );
}
