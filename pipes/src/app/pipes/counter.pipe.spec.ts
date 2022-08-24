import { CounterPipe } from './counter.pipe';

describe('CounterPipe', () => {
  it('create an instance', () => {
    const pipe = new CounterPipe();
    expect(pipe).toBeTruthy();
  });
});
