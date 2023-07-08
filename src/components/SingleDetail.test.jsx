import React from 'react';
import { render } from '@testing-library/react';
import SingleDetail from './SingleDetail';

describe('SingleDetail', () => {
  const detail = {
    item: 'Test Item',
    value: 'Test Value',
  };

  it('renders the SingleDetail component correctly', () => {
    const { getByText } = render(
      <SingleDetail item={detail.item} value={detail.value} />,
    );

    // Assert that the component renders the correct text
    const itemElement = getByText(detail.item);
    expect(itemElement).toBeInTheDocument();

    const valueElement = getByText(detail.value);
    expect(valueElement).toBeInTheDocument();

    // Assert that the component has the correct styles
    const singleDetailElement = getByText(detail.item).closest('li');
    expect(singleDetailElement).toHaveClass('flex');
    expect(singleDetailElement).toHaveClass('text-white');
    expect(singleDetailElement).toHaveClass('odd:bg-secondary');
    expect(singleDetailElement).toHaveClass('justify-between');
    expect(singleDetailElement).toHaveClass('items-center');
    expect(singleDetailElement).toHaveClass('px-4');
    expect(singleDetailElement).toHaveClass('py-6');

    const itemTextElement = getByText(detail.item);
    expect(itemTextElement).toHaveClass('text-lg');
    expect(itemTextElement).toHaveClass('font-bold');

    const valueTextElement = getByText(detail.value);
    expect(valueTextElement).toHaveClass('text-xg');
    expect(valueTextElement).toHaveClass('font-medium');
  });
});
