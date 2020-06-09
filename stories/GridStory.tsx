import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { GridLayoutTrial } from '@app/GridLayoutDemo/GridLayoutTrial';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Grid Dashboard',
  () => <GridLayoutTrial />,
  { info: { inline: true } }
);