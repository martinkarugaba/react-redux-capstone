import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails';

const mockStore = configureStore([]);
const store = mockStore({
  countries: {
    countries: [
      {
        name: { common: 'Country 1' },
        capital: 'Capital City 1',
        subregion: 'Subregion 1',
        population: 1000000,
        landlocked: true,
        area: 1000,
        flag: 'https://example.com/flag1.png',
      },
      {
        name: { common: 'Country 2' },
        capital: 'Capital City 2',
        subregion: 'Subregion 2',
        population: 2000000,
        landlocked: false,
        area: 2000,
        flag: 'https://example.com/flag2.png',
      },
    ],
  },
});

describe('CountryDetails', () => {
  it('should render country details correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/country/Country 1']}>
          <Routes>
            <Route
              path="/country/:name"
              element={<CountryDetails />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Capital')).toBeInTheDocument();
    expect(screen.getByText('Capital City 1')).toBeInTheDocument();
    expect(screen.getByText('Subregion')).toBeInTheDocument();
    expect(screen.getByText('Subregion 1')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument();
    expect(screen.getByText('Area')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Landlocked')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });
});
