import React from 'react';

const FieldDesc = ({ description }) => (
  <div className="field-desc">
    {description || 'Description not available.'}
  </div>
);

export default FieldDesc;
