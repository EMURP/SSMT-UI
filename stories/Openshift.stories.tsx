import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Openshift } from '@app/Openshift/Openshift';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Openshift',
  () => <Openshift />,
  { info: { inline: true } }
);