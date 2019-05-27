import React from 'react';

const FieldDesc = (props) => {
  const { description } = props;
  return (
    <div className="field-desc">
      {description || 'Description not available.'}
    </div>
  );
};

export default FieldDesc;
