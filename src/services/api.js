import * as request from 'superagent';

export default class ApiService {
  constructor({state, options}) {
    this.currentState = state;
    this.client = request.agent();
    this.headers = this.setHeaders(options);
    this.baseURL = this.setBaseURL(options);
  }

  setHeaders(options) {
    const {headers} = options;
    return {
      ...getDefaultHeaders(),
      ...headers,
    };
  }

  setBaseURL(options) {
    const {baseURL} = options;
    if (baseURL) {
      return baseURL;
    }

    throw new Error(
      `You failed to provide a baseURL and no baseURL has been registered for this label: ${options.label ||
        ''}`,
    );
  }

  async makeRequest(payload) {
    const {method, data, url, onSuccess, onFailure} = payload;
    const dataOrParams = getDataOrParams(method);

    try {
      /* eslint-disable */
      const {body} = await this.client[method.toLowerCase()](this.baseURL + url)
        .set(this.headers)
        [dataOrParams](data);

      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(body);
      }

      return body;
    } catch (error) {
      if (onFailure && typeof onFailure === 'function') {
        onFailure(error);
      }
      throw new Error(error);
    }
  }
}

function getDefaultHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

function getDataOrParams(method) {
  return ['GET'].includes(method) ? 'query' : 'send';
}
