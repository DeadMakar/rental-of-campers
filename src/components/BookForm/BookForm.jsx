import { useDispatch } from "react-redux";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { bookVan } from "../../redux/cars/slice";
import { schema } from "../../schemas";
// import Calendar from "../Calendar";
import sprite from "../../assets/images/sprite.svg";
import {
  ErrorMsg,
  Form,
  Input,
  Label,
  SubmitBtn,
  TitleBlock,
} from "./BookForm.styled";

const BookForm = () => {
  const dispatch = useDispatch();

  const formInit = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const WeekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatDate = (date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const dayOfWeekIndex = date.getDay();

    const formattedDate = `${months[monthIndex]} ${day}, ${WeekDay[dayOfWeekIndex]}`;
    return formattedDate;
  };

  const handleFormSubmit = async ({ name, email, date, comment }, actions) => {
    const formData = {
      name,
      email,
      date: formatDate(date),
      comment,
    };

    const isValid = await schema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(bookVan(formData));
    toast("Successfully sent!", { duration: 1500 });

    setTimeout(() => window.location.reload(), 700);
  };

  return (
    <Formik
      initialValues={formInit}
      onSubmit={handleFormSubmit}
      validationSchema={schema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>

          <Label>
            {/* {<Calendar />} */}
            <svg>
              <use href={sprite + "#icon-calendar-btn"} />
            </svg>
            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps("comment")}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
            Send
          </SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
