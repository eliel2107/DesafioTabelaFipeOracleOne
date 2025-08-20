import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

configure({ testIdAttribute: 'data-testid' });
expect.extend(toHaveNoViolations);
