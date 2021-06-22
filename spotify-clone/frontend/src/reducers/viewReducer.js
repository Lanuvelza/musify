export const initialViewState = {
  view: null,
}

const viewReducer = (state, action) => {
  console.log(action); 

  switch(action.type) {
    case "SET_VIEW":
      return {
        ...state,
        view: action.view
      };
    default: 
      return state;
  }
};

export default viewReducer;