import React from "react";

const TextInput = ({ name, label, error, ...rest }) => {
	return (
		<div className="vehicleUpdateItem">
			<label htmlFor={name}>{label}</label>
			<input {...rest} name={name} id={name} className=" vehicleUpdateInput" />
		</div>
	);
};

export default TextInput;
