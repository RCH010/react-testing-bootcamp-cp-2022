import { render, screen } from '@testing-library/react';
import { Home } from '../../views/Home';

describe('Tests on Homeview', () => {
  test('should display a header with the tittle of the project', () => {
    render(<Home />);
    const titleEl = screen.getByRole('heading', {
      name: /Astronomy Picture of the Day/i,
    });

    expect(titleEl).toBeInTheDocument();
  });

  test('should display a footer', () => {
    render(<Home />);

    const footerEl = screen.getByText(
      /Project created during Wizeline Academy React Testing Bootcamp/
    );
    expect(footerEl).toBeInTheDocument();
  });
});
