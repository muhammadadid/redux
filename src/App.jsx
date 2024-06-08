import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout } from "./redux/slices/loginSlice";
import { increment, decrement } from "./redux/slices/counterSlice";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>{isLogin ? "Sudah Login" : "Belum Login"}</h1>
      <button onClick={handleAuth}>{isLogin ? "Logout" : "Login"}</button>
      <h1>Counter</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}

export default App;
