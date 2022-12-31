export enum TodoStatus {
	ACTIVE 		= 'ACTIVE',
  	COMPLETED 	= 'COMPLETED',
	NONE			= 'NONE'
}

export interface Todo {
	content : string,
	created_date: string,
	status: string,
	id: string
}