import { ButtonComponent } from '@alfabit-k/button';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    text: 'Action',
    variant: 'primary',
    disabled: false,
    theme: 'blue',
  },
};

export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true,
  },
};

export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'secondary',
  },
};

export const SecondaryButtonDisabled: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true,
  },
};

export const TertiaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary',
    disabled: false,
  },
};

export const TertiaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true,
  },
};

export const PrimaryButtonViolet: Story = {
  args: {
    text: 'Action',
    variant: 'primary',
    disabled: false,
    theme: 'violet',
  },
};

export const PrimaryButtonDisabledViolet: Story = {
  args: {
    ...PrimaryButtonViolet.args,
    disabled: true,
  },
};

export const SecondaryButtonViolet: Story = {
  args: {
    ...PrimaryButtonViolet.args,
    variant: 'secondary',
  },
};

export const SecondaryButtonDisabledViolet: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true,
  },
};

export const TertiaryButtonViolet: Story = {
  args: {
    ...PrimaryButtonViolet.args,
    variant: 'tertiary',
    disabled: false,
  },
};

export const TertiaryButtonDisabledViolet: Story = {
  args: {
    ...TertiaryButtonViolet.args,
    disabled: true,
  },
};
