import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { withCenteredStory } from '../../utils/storybook/withCenteredStory';

import { LoadingPlaceholder, LoadingPlaceholderProps } from './LoadingPlaceholder';
import mdx from './LoadingPlaceholder.mdx';

const meta: Meta<typeof LoadingPlaceholder> = {
  title: 'General/LoadingPlaceholder',
  component: LoadingPlaceholder,
  decorators: [withCenteredStory],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
};

export const Basic: StoryFn<typeof LoadingPlaceholder> = (args: LoadingPlaceholderProps) => {
  return <LoadingPlaceholder {...args} />;
};

Basic.args = {
  text: 'Loading...',
};

export default meta;
