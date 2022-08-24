import { HelloPipePipe } from './hello-pipe.pipe';

describe('HelloPipePipe', () => {
  it('create an instance', () => {
    const pipe = new HelloPipePipe();
    expect(pipe).toBeTruthy();
  });
});
