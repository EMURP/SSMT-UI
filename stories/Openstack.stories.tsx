import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Openstack } from '@app/Openstack/Openstack';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Openstack',
  () => <Openstack />,
  { info: { inline: true } }
);