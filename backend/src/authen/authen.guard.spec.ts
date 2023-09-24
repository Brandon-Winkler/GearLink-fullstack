import { AuthenGuard } from './authen.guard';

describe('AuthenGuard', () => {
  it('should be defined', () => {
    expect(new AuthenGuard()).toBeDefined();
  });
});
