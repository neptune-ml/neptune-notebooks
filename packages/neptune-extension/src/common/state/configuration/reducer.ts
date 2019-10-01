import {API_TOKEN_LOCAL_STORAGE_KEY, ApiTokenParsed, parseApiToken} from 'common/api/auth';
import {ConfigurationActions} from "./actions";

interface ConfigurationState {
  apiToken?: string
  apiTokenParsed?: ApiTokenParsed
  isApiTokenValid?: boolean
  inferredUsername?: string
}

const initialApiToken = localStorage.getItem(API_TOKEN_LOCAL_STORAGE_KEY) || undefined;
const initialApiTokenParsed = initialApiToken ? parseApiToken(initialApiToken) : undefined;

const initialState: ConfigurationState = {
  apiToken: initialApiToken,
  apiTokenParsed: initialApiTokenParsed,
};

export function configurationReducer(state: ConfigurationState = initialState, action:ConfigurationActions): ConfigurationState {
  switch (action.type) {
    case "API_TOKEN_SET": {

      // do not parse api token if it is the same, just return current state
      if (action.payload.token === state.apiToken) {
        return state;
      }

      return {
        ...state,
        apiToken: action.payload.token,
        apiTokenParsed: parseApiToken(action.payload.token),
      };
    }

    case "USERNAME_SET": {
      return {
        ...state,
        inferredUsername: action.payload.username,
      };
    }

    case "API_TOKEN_SET_VALID": {
      return {
        ...state,
        isApiTokenValid: action.payload.valid,
      }
    }

    default:
        return state;
  }
}
