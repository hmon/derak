import { render } from '@testing-library/react';

import SharedLayouts from './shared-layouts';

describe('SharedLayouts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLayouts />);
    expect(baseElement).toBeTruthy();
  });
});
