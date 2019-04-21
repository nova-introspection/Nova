import React from 'react';
import { Menu } from 'semantic-ui-react';

const Field = (props) => {
  const { field, handleClick } = props;

  let fieldType = field.type.name;

  if (field.isList) fieldType = `[${fieldType}]`;
  if (field.isRequired) fieldType = `${fieldType}!`;

  const strOutput = `${field.name}: ${fieldType}`;

  return (
    <Menu.Item onClick={() => handleClick(field.type.name)}>
      <p>{strOutput}</p>
      {field.description}
    </Menu.Item>
  );
};

export default Field;
