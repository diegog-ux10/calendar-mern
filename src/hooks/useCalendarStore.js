import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent());
  };
  return {
    events,
    setActiveEvent,
  };
};