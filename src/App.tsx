import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </CookiesProvider>
  );
};
