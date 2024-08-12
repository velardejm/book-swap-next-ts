import { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from '@/components/molecules/LoginModal';

const meta = {
  title: 'Organisms/LoginModal',
  component: LoginModal,
} satisfies Meta<typeof LoginModal>;
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
