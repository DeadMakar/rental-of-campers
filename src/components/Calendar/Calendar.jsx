import { useField, useFormikContext } from "formik";
import { StyledDatePicker } from "./Calendar.styled";

const Calendar = () => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField("date");

  return (
    <StyledDatePicker
      {...field}
      minDate={new Date()}
      name="date"
      calendarStartDay={1}
      dateFormat="EEEE, d"
      selected={field.value}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      placeholderText="Booking date"
      autoComplete="off"
    />
  );
};

export default Calendar;
