import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectHeader from './ProjectHeader';


export default {
  title: 'UI Components/ProjectHeader',
  component: ProjectHeader,
} as ComponentMeta<typeof ProjectHeader>;

const Template: ComponentStory<typeof ProjectHeader> = () => <ProjectHeader/>;

export const BasicHeader = Template.bind({});

