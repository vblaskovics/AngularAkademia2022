import { FilesizeConverterPipe } from './filesize-converter.pipe';

describe('FilesizeConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilesizeConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
