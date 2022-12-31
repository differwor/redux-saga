import React from 'react';

function TodoDate() {
	return (
		<div className="w-full ml-1 pl-1 flex text-center items-center overflow-x-scroll overflow-hidden overscroll-contain scrollbar-hide">
			<span className="h-7 w-7 px-4 rounded-lg cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"><p>24</p></span>
			<span className="h-7 w-7 px-4 rounded-lg cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"><p>25</p></span>
		</div>
	);
}

export default TodoDate;