import ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

const apiReducer = (state = initialState, action) => {
  console.log("action.apiReducer------>",action);
  switch (action.type) {

    //======================== LOGIN =======================//  
    case ACTION_TYPES.LOGIN_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.LOGIN_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.LOGIN_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    //======================== REGISTER ========================//
    case ACTION_TYPES.REGISTER_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.REGISTER_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.REGISTER_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     //======================== WISHLISTS ========================//
    case ACTION_TYPES.WISHLISTS_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.WISHLISTS_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.WISHLISTS_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     case ACTION_TYPES.WISHLISTS_ADD_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.WISHLISTS_ADD_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.WISHLISTS_ADD_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

     //======================== MASTERS ========================//
     case ACTION_TYPES.REFUGEES_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.REFUGEES_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.REFUGEES_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    
    case ACTION_TYPES.DONOR_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.DONOR_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.DONOR_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     case ACTION_TYPES.SHELTERS_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.SHELTERS_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.SHELTERS_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    case ACTION_TYPES.REQUESTS_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.REQUESTS_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.REQUESTS_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    case ACTION_TYPES.MEETING_STATUS_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.MEETING_STATUS_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.MEETING_STATUS_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     //======================== PROFILE ========================//
    case ACTION_TYPES.PROFILE_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.PROFILE_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.PROFILE_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
      //======================== CONTACT-US ========================//
     case ACTION_TYPES.CONTACT_US_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.CONTACT_US_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.CONTACT_US_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
      //======================== HELPED ========================//
     case ACTION_TYPES.HELPED_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.HELPED_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.HELPED_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     //======================== PEOPLE ========================//
     case ACTION_TYPES.PEOPLE_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.PEOPLE_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.PEOPLE_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
     //======================== CREATE-MEETING ========================//
     case ACTION_TYPES.CREATE_MEETING_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.CREATE_MEETING_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.CREATE_MEETING_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    //======================== MEETING ========================//
    case ACTION_TYPES.MEETING_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.MEETING_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.MEETING_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default apiReducer;