import { HelloPipe } from './hello.pipe';

describe('HelloPipe', () => {
  it('create an instance', () => {
    const pipe = new HelloPipe();
    expect(pipe).toBeTruthy();
  });
});
