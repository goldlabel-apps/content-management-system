const initialState = {
  updated: Date.now(),
  user: null,
  authing: false,
  credentials: [
    {
      username: ``,
      password: ``,
      valid: false,
      remember: true
    }
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "AUTH/DO/LOGOUT":
      // console.log("AUTH/DO/LOGOUT", action.user);
      return {
        ...state,
        updated: Date.now(),
        user: null
      };
    case "AUTH/SAVE/USER":
      // console.log("AUTH/SAVE/USER", action.user);
      return {
        ...state,
        updated: Date.now(),
        user: action.user
      };

    case "AUTH/TOGGLE/AUTHING":
      // console.log("AUTH/TOGGLE/AUTHING", action);
      return {
        ...state,
        updated: Date.now(),
        authing: action.bool
      };

    case "AUTH/UPDATE_CREDENTIALS":
      return {
        ...state,
        updated: Date.now(),
        credentials: [action.payload]
      };

    case "STARTOVER":
      return initialState;

    default:
      return state;
  }
}
