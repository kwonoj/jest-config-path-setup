import DummyController from 'command/access/DummyController';

jest.mock('command/access/DummyController');

describe('dummy', () => {
  it('should work', () => {
    console.log(DummyController);
    expect(DummyController).toBeTruthy();
  });
});