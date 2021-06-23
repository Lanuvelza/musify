export const initialInstagramDataState = {
  user: null,
  instagram__users: null,
  instagram__user: null, 
  posts: null, 
  post: null,
  latest__post: null, 
}

const instagramReducer = (state, action) => {
  console.log(action)

  switch(action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "SET_INSTAGRAM_USERS": 
      return {
        ...state,
        instagram__users: action.instagram__users
      }
    case "SET_INSTAGRAM_USER": 
      return {
        ...state,
        instagram__user: action.instagram__user
      }
    case "SET_POSTS": 
      return {
        ...state, 
        posts: action.posts
      }
    case "SET_POST": 
      return {
        ...state,
        post: action.post
      }
    case "LATEST_POST": 
      return {
        ...state, 
        latest__post: action.latest__post
      }
    default: 
      return state;
  }
};

export default instagramReducer;