import { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from '@/components/molecules/LogInModal';

const meta = {
  title: 'Organisms/LoginModal',
  component: LoginModal,
  parameters: {
    // layout: 'centered',
  },
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
