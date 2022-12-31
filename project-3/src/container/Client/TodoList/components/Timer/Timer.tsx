import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Timer() {
	const [time, setTime] = useState<string>(moment().format('HH : mm : ss'));
	useEffect(() => {
		let timer = setTimeout(() => {
			setTime(moment().format('HH : mm : ss'));
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	},
	[time]);
	return (
		<p className="set_time">{time}</p>
	);
}

export default React.memo(Timer);