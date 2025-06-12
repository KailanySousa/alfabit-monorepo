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
