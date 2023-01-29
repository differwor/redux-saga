import { TodoStatus } from "models/todo";

export const getDateString = (date: Date) => {
	const dateArr: string[] = date.toLocaleDateString().split('/').reverse();
   return dateArr[0] + '-' + dateArr[2] + '-' + dateArr[1];
}

export const getStatus = (status : TodoStatus | undefined): string => {
	switch (status) {
		 case TodoStatus.NONE: 
			  return "All Status"
		 
		 case TodoStatus.ACTIVE:
			  return "Active"

		 case TodoStatus.COMPLETED:
			  return "Completed"

		 default:
			  return ''
	}
}

export const dateFormat = (date: string): string => {
	const dateArr: string[] = date.split('-');
	return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
}