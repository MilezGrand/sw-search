import { Meta, StoryObj } from '@storybook/react';
import Person from './Person';
import '../index.scss'

const meta: Meta<typeof Person> = {
  title: 'Person',
  component: Person,
};

export default meta;
type Story = StoryObj<typeof Person>;

export const Default: Story = {
  args: {
    personInfo: {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      skin_color: 'fair',
    },
  },
};
