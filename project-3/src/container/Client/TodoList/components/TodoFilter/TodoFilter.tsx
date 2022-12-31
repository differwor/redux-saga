import React, { useState, forwardRef, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { AppDispatch } from "../../../../../app/store";
import { TodoStatus } from "../../../../../models/todo";
import { getDateString, getStatus } from "../../../../../utils/utils";
import { changeFilterType, setSelectedDate } from "../../module/todosSlice";

function TodoFilter() {
  const dispatch: AppDispatch = useAppDispatch();
  
  const selectStore = useAppSelector((state) => state.todos);

  const [showAll, setShowAll] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date>(new Date(selectStore.selectedDate));

  const filterStatus = useMemo(() => getStatus(selectStore.filter.byStatus), [selectStore.filter.byStatus]);
     
  const handleChangeStatus = () => {
    Object.values(TodoStatus).every((status, index) => {
      if (selectStore.filter.byStatus === status) {
        let arrStatus = Object.values(TodoStatus);
        dispatch(changeFilterType({byStatus: arrStatus[(arrStatus.length === (index + 1) ? 0 : index + 1)]})); // number of status
          return false;
        }
        return true;
    });
  };
  
  const handleOnChange = (date: Date) => {
    setStartDate(date);
    dispatch(setSelectedDate(getDateString(date)));
  }

  const ExampleCustomInput: any = forwardRef(({ value, onClick }: { value: string, onClick: React.MouseEventHandler<HTMLButtonElement> }, ref: React.LegacyRef<HTMLButtonElement> | undefined) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  console.log('render date')
  return (
    <>  
      <button className={`bg-white ${!showAll ? 'text-black border-gray-400' : 'text-white bg-black'} font-semibold py-[0.2rem] px-4 border shadow rounded-lg mr-2`} onClick={() => {setShowAll(showAll ? false : true); dispatch(changeFilterType({byDate: showAll ? true : false}))}}>
        All
      </button>
      <div className='flex min-w-[120px] items-center justify-center hover:bg-gray-100 border border-gray-400 shadow rounded-lg text-black'>
          <DatePicker
            selected={startDate}
            onChange={handleOnChange}
            dateFormat="dd/MM/yyyy"
            disabled={!showAll ? false : true}
            highlightDates={selectStore.notedDate.map((date) => new Date(date))}
            placeholderText="This highlights a week ago and a week from today"
            customInput={<ExampleCustomInput />}
          />
      </div>
      <button onClick={handleChangeStatus} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-[0.2rem] px-4 min-w-[120px] border border-gray-400 shadow rounded-lg ml-2">
        { filterStatus }
      </button>
    </>
  );
}

export default React.memo(TodoFilter);