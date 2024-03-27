import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  bookingDate: Yup.string().required("Please choose date"),
});

export default schema;
