import axios from 'axios';
import { vitest } from 'vitest';
import { fetchCountries } from './countriesSlice';

vitest.mock('axios');

describe('fetchCountries', () => {
  afterEach(() => {
    vitest.clearAllMocks();
  });

  it('should throw an error when the API request fails', async () => {
    const errorMessage = 'Failed to fetch countries';
    axios.get.mockRejectedValue(new Error(errorMessage));

    try {
      await fetchCountries();
    } catch (error) {
      expect(error.message).toEqual(errorMessage);
    }
  });
});
