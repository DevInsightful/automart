import { createContext, useReducer } from "react";
// import user from "../UserData.json";
let user = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  address: "123 Main Street",
  phone: "123-456-7890",
  cart: [],
};
export const UserContext = createContext({});
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      console.log(state)
      return { cart: [...state.cart, action.payload] };
    case "remove":
      return { cart: state.user.cart.pop(action.payload) };
    default:
      return state;
  }
};
const UserContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, user);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
