import './globals.css';

export const metadata = {
  title: 'Northstar Systems | Digital services with direction',
  description: 'Strategy, design and engineering for ambitious teams.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}