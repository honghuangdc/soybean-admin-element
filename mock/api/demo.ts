import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  {
    url: '/mock/apiDemoWithAdapter',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          dataId: '123',
          dataName: 'demoName'
        }
      };
    }
  }
];

export default apis;
