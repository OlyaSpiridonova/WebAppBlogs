import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore. Nostrum quo tempore dolorem eius, laborum quos vitae recusandae nihil molestiae tenetur obcaecati distinctio minus optio consequatur facere hic nesciunt.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore. Nostrum quo tempore dolorem eius, laborum quos vitae recusandae nihil molestiae tenetur obcaecati distinctio minus optio consequatur facere hic nesciunt.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
