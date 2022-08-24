import { CounterPipePipe } from './counter-pipe.pipe';

describe('CounterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CounterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
