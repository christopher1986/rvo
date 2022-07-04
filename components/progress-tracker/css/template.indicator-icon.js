/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  state: {
    options: ['start', 'incomplete', 'doing', 'completed', 'disabled', 'end'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium', 'large'],
    mapping: { small: 'sm', medium: 'md', large: 'lg' },
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  state: 'incomplete',
  size: 'medium',
};

export const IndicatorIcon = ({ state = defaultArgs.state, size = defaultArgs.size }) =>
  `<div class="${clsx(
    'rvo-progress-tracker__indicator-icon',
    `rvo-progress-tracker__indicator-icon--${state}`,
    `rvo-progress-tracker__indicator-icon--${size}`,
  )}"></div>`;
