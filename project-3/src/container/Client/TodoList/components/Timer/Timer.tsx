import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';

function Timer() {
	const [time, setTime] = useState<string>(moment().format('HH : mm : ss'));
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setTime(moment().format('HH : mm : ss'));
		}, 1000);
		return () => {
			clearTimeout(timeoutRef.current);
		};
	},
	[time]);
	return (
		<p className="set_time">{time}</p>
	);
}

export default React.memo(Timer);