import { Meta, StoryObj } from '@storybook/react';
import { SignUpModal } from '@/components/molecules/SignUpModal';

const meta = {
  title: 'Organisms/SignUpModal',
  component: SignUpModal,
} satisfies Meta<typeof SignUpModal>;
export default meta;

type Story = StoryObj<typeof meta>;

const closeModal = () => {
  alert('test');
};

export const Default: Story = {
  args: {
    closeModal: closeModal,
  },
};
