'use client';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Register2 from './secondregister/page';

const metadata = {
  title: 'MoveAr',
  description: 'La manera facil moverser',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
        <Register2></Register2>
      </body>
    </html>
  );
}
