import React, { useState } from 'react';

const InputField = (props: any) => {
	const [value, setValue] = useState<string>('');
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		props.updateInput(e.target.value);
		setValue(e.target.value);
  	}
	console.log('render InputField')
	return (
		<input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={value} onChange={handleChangeInput} placeholder="New Todo" aria-label="Full name"/>
	);
}

export default InputField;