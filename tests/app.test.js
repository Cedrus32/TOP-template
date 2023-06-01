import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from '../src/components/App.js';

describe('App component', () => {
    it('renders correct handling', () => {
        render(<App/>);
        expect(screen.getByRole('heading').textContent).toMatch(/Hello from App/i);
    });
});
