import ApiBuilder from 'claudia-api-builder';

const api: ApiBuilder = new ApiBuilder();

api.get('/', () => 'hello world');

export = api;
