import ApiBuilder from 'claudia-api-builder';

const api : any = new ApiBuilder();

api.get('/', () => 'hello world');

export = api;
