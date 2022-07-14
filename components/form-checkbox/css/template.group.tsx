/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';
import { Checkbox, ICheckboxProps } from './template';

interface ICheckboxGroupProps {
  layout: string;
  invalid: boolean;
  options: ICheckboxProps[];
}

const defaultOptions: ICheckboxProps[] = [
  { id: 'optionA', labelText: 'Option A' },
  { id: 'optionB', labelText: 'Option B', checked: true },
  { id: 'optionC', labelText: 'Option C' },
  { id: 'optionD', labelText: 'Option D' },
];

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: ICheckboxGroupProps = {
  layout: 'vertical',
  invalid: false,
  options: defaultOptions,
};

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  layout = defaultArgs.layout,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
}) => (
  <div
    className={clsx(
      'rvo-checkbox__group',
      layout === 'horizontal' && 'rvo-checkbox__group--horizontal',
      layout === 'vertical' && 'rvo-checkbox__group--vertical',
      invalid && 'rvo-custom-radio-button__group--error',
    )}
  >
    {options.map((option) => (
      <Checkbox key={option.id} id={option.id} labelText={option.labelText} checked={option.checked} />
    ))}
  </div>
);
