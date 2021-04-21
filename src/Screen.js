import Header from "./Header";
import { useFns, useUser } from "./context";

const Screen = () => {
  const { logUserIn, logUserOut } = useFns();
  const { loggedIn } = useUser();

  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={loggedIn ? logUserOut : logUserIn}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Screen;
