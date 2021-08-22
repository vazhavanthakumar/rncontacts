import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOADING,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  CREATE_CONTACTS_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
} from '../../constants/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };

    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },

        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.map(contact => {
            if (contact.id === payload.id) {
              return payload;
            } else {
              return contact;
            }
          }),
        },
      };

    case EDIT_CONTACT_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: null,
        },
      };

    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: true,
          error: null,
        },
      };

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: false,
          error: null,
        },

        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.filter(
            contact => contact.id !== payload,
          ),
        },
      };

    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: false,
          error: null,
        },
      };

    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };

    case CREATE_CONTACTS_SUCCESS:
      console.log('payload :>> ', payload);
      console.log('state.getContacts.data :>> ', state.getContacts.data);
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          data: payload,
        },

        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: [payload, ...state.getContacts.data],
        },
      };

    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };

    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default contacts;
