import React from 'react';
import { render } from './test-utils'

import App from './App';

const { getByTestId } = render(
  <App/>
)

describe('App', () => {
  it('renders all the components', () => { 
    expect(getByTestId('topBar')).toBeDefined();
    expect(getByTestId('sideBar')).toBeDefined();
    expect(getByTestId('userCard')).toBeDefined();
    expect(getByTestId('tabBar')).toBeDefined();
    expect(getByTestId('tabPanel')).toBeDefined();
  })

})