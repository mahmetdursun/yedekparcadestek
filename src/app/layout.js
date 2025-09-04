import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';

import Providers from './providers'; // 👈 server -> client köprüsü

export const metadata = {
  title: 'yedekparcadestek',
  description: 'Araç parça ve aksesuar'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
