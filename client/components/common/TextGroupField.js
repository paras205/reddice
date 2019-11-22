import React from 'react';

const TextGroupField = ({ field, value, label, error, type, onChange }) => {
	return (
		<div className="form-group">
			<label className="control-label">{label}</label>
			<input value={value} onChange={onChange} type={type} name={field} className="form-control" />
			{error && <span className="help-block">{error}</span>}
		</div>
	);
};
export default TextGroupField;
