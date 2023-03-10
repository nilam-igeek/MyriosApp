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
  imagesListOfRoleData: '',
  wishListFilterData: '',
  wishlistAddData: '',
  wishlistRemoveData: '',
  userStatusData: '',
  addPeopleData: '',
  eidtPeopleData: '',
  loginToken: '',
  regiToken: ''
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
    case ACTION_TYPES.LOGIN_API_TOKEN:
      return {
        ...state,
        loginToken: action.payload,
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
    case ACTION_TYPES.REGISTER_API_TOKEN:
      return {
        ...state,
        regiToken: action.payload,
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

    case ACTION_TYPES.WISHLISTS_FILTER_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.WISHLISTS_FILTER_API_SUCCESS:
      return {
        ...state,
        wishListFilterData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.WISHLISTS_FILTER_API_ERROR:
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
        wishlistAddData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.WISHLISTS_ADD_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };


    case ACTION_TYPES.WISHLISTS_REMOVED_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.WISHLISTS_REMOVED_API_SUCCESS:
      return {
        ...state,
        wishlistRemoveData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.WISHLISTS_REMOVED_API_ERROR:
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

    //======================== ADD PEOPLE ========================//
    case ACTION_TYPES.ADD_PEOPLE_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.ADD_PEOPLE_API_SUCCESS:
      return {
        ...state,
        addPeopleData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.ADD_PEOPLE_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };


    //======================== EDIT PEOPLE ========================//
    case ACTION_TYPES.EDIT_PEOPLE_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.EDIT_PEOPLE_API_SUCCESS:
      return {
        ...state,
        eidtPeopleData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.EDIT_PEOPLE_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //======================== IMAGES_LIST =======================//
    case ACTION_TYPES.IMAGES_LIST_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.IMAGES_LIST_API_SUCCESS:
      return {
        ...state,
        imagesListOfRoleData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.IMAGES_LIST_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //======================== USER STATUS ========================//
    case ACTION_TYPES.USER_STATUS_API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.USER_STATUS_API_SUCCESS:
      return {
        ...state,
        userStatusData: action.payload,
        loading: false,
      };
    case ACTION_TYPES.USER_STATUS_API_ERROR:
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