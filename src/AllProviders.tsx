import { ContentProvider } from './context/ContentContext';
import { OptionsProvider } from './context/OptionsContext';
import { ThemesProvider } from './context/ThemesContext';
import { UserProvider } from './context/UserContext';

const AllProivders = ({ children }) => {
  return (
    <ThemesProvider>
      <OptionsProvider>
        <UserProvider>
          <ContentProvider>{children}</ContentProvider>
        </UserProvider>
      </OptionsProvider>
    </ThemesProvider>
  );
};

export default AllProivders;
