import React from 'react';
import {Button, Icon} from '@ui-kitten/components';

const PlusIcon = (props) => <Icon {...props} name="plus-square-outline" />;

function EnvanterAddIcon() {
  return <Button size="small" accessoryLeft={PlusIcon} />;
}

export default EnvanterAddIcon;
