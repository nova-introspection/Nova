import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const styles = {
  container: {
    textAlign: 'left',
    minHeight: '1.5em',
    fontSize: '16px',
  },
  field: {
    borderBottom: 'solid 1px #2a2a2a',
    padding: '10px',
    cursor: 'pointer',
  },
  description: {
    borderBottom: 'solid 1px #2a2a2a',
    padding: '10px 10px 10px 25px',
    background: 'hsl(0, 0%, 17%)',
  },
};

const Field = (props) => {
  const { field, handleClick } = props;
  const [showDesc, useDesc] = useState(false);
  let fieldType = field.type.name;

  if (field.isList) fieldType = `[${fieldType}]`;
  if (field.isRequired) fieldType = `${fieldType}!`;

  function toggleDesc() {
    useDesc(!showDesc);
  }

  function activeIcon() {
    if (showDesc) return 'fa-caret-up';
    return 'fa-caret-down';
  }

  function typeColor() {
    switch (field.type.name) {
      case 'String':
        return 'string';
      case 'Int':
        return 'int';
      case 'Boolean':
        return 'bool';
      default:
        return 'type';
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.field}>
        <p
          onClick={toggleDesc}
        >
          {field.name}: <br></br><span
            onClick={() => handleClick(field.type.name)}
            className={typeColor()}
          >
            {fieldType}
          </span>
          <i style={{float: 'right', color: '#444444'}} className={`fas ${activeIcon()}`}></i>
        </p>
      </div>
      {showDesc && (<div style={styles.description}>
        {field.description || 'Description not available.'}
      </div>)}
    </div>
  );
};

export default Field;
