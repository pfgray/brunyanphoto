'use strict';

describe('BrunyanphotoApp', () => {
  let React = require('react/addons');
  let BrunyanphotoApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    BrunyanphotoApp = require('components/BrunyanphotoApp.js');
    component = React.createElement(BrunyanphotoApp);
  });

  it('should create a new instance of BrunyanphotoApp', () => {
    expect(component).toBeDefined();
  });
});
