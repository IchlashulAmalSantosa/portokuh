import { describe, it, expect } from 'vitest';
import { formatMetric, slugify } from '../utils';

describe('formatMetric', () => {
  it('appends the given suffix to a number', () => {
    expect(formatMetric(92.4, '%')).toBe('92.4%');
    expect(formatMetric(50, 'M+ rows')).toBe('50M+ rows');
  });
});

describe('slugify', () => {
  it('converts a project title into a URL-safe slug', () => {
    expect(slugify('E-Commerce Sales Prediction')).toBe('e-commerce-sales-prediction');
    expect(slugify('Customer Segmentation Dashboard')).toBe(
      'customer-segmentation-dashboard'
    );
  });
});
