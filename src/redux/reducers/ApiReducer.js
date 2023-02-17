import ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',

  loginData: '',
  regiData: '',
  refugeeData: '',
  donorData: '',
  shelterData: '',
  requestContactData: '',
  dataProfile: '',
  wishListData: '',
  profileData: '',
  contactUSData: '',
  helpedData: '',
  peopleData: '',

};

const apiReducer = (state = initialState, action) => {
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
        loginData: action.payload,
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
        regiData: action.payload,
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
        wishListData: action.payload,
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
        refugeeData: action.payload,
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
        donorData: action.payload,
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
        shelterData: action.payload,
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
        requestContactData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.REQUESTS_API_ERROR:
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
        profileData: action.payload,
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
        contactUSData: action.payload,
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
        helpedData: action.payload,
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
        peopleData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.PEOPLE_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //======================== SET_PROFILE ========================//
    case ACTION_TYPES.PROFILE_SET_DATA:
      return {
        ...state,
        dataProfile: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;