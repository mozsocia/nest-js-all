import * as request from 'supertest';
import { setupApp, getApp, closeApp } from './test-utils';

describe('App Module (e2e)', () => {
  beforeAll(async () => {
    await setupApp();
  });

  afterAll(async () => {
    await closeApp();
  });

  it('/ (GET)', () => {
    return request(getApp().getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
