import * as request from 'supertest';
import { setupApp, getApp, closeApp } from './test-utils';

describe('Todo Module (e2e)', () => {
  beforeAll(async () => {
    await setupApp();
  });

  afterAll(async () => {
    await closeApp();
  });

  it('/todos (GET)', () => {
    return request(getApp().getHttpServer())
      .get('/todos')
      .expect(200)
      .expect([]);
  });
});
