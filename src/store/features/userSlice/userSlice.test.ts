import { UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

const initialState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

describe("Given a user reducer", () => {
  describe("When it receives an user and the action to login user", () => {
    test("Then it should return the given user with the property isLogged set to true", () => {
      const user: UserState = {
        id: "",
        username: "Alex",
        token: "d42fm42kasdm1l3mdfas12",
        isLogged: false,
      };

      const expectedState: UserState = {
        id: "",
        username: "Alex",
        token: "d42fm42kasdm1l3mdfas12",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);

      const newState = userReducer(initialState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
