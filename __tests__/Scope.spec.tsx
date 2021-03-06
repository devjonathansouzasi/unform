import React from 'react';

import { Scope, Input } from '../lib';
import render from '../lib/RenderTest';

describe('RenderTest', () => {
  it('should name form elements based on scope', () => {
    const { container } = render(
      <Scope path="profile">
        <Input name="name" />
      </Scope>
    );

    expect(!!container.querySelector("input[name='profile.name']")).toBe(true);
  });

  it('should concat scope paths', () => {
    const { container } = render(
      <Scope path="profile">
        <Scope path="user">
          <Input name="name" />
        </Scope>
      </Scope>
    );

    expect(!!container.querySelector("input[name='profile.user.name']")).toBe(
      true
    );
  });
});
