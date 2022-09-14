import { RocketProvider } from "./Rockets";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <RocketProvider>{children}</RocketProvider>
    </UserProvider>
  );
};

export default Providers;
