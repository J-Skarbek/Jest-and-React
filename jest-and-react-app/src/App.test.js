import { render, screen } from '@testing-library/react';
import App from './App';

// test('App Component', () => {
//   it("renders correct heading", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   });
// });


describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: 'Our First Test'}).textContent).toMatch(/our first test/i);
  });
});