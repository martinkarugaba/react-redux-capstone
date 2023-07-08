import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vitest } from 'vitest';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('calls the setQuery callback with the input value when it changes', () => {
    const setQuery = vitest.fn();
    const { getByTestId } = render(
      <SearchForm
        query=""
        setQuery={setQuery}
        handleSubmit={() => {}}
      />,
    );
    const inputElement = getByTestId('search-input');

    fireEvent.change(inputElement, { target: { value: 'USA' } });

    expect(setQuery).toHaveBeenCalledWith('USA');
  });
});
