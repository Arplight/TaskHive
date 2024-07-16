import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  description: Yup.string()
    .max(120, "Description must be at most 120 characters")
    .required("Description is required"),
  category: Yup.string()
    .max(50, "Category must be at most 50 characters")
    .required("Category is required"),
  date: Yup.date().required("Date is required").nullable(),
  time: Yup.string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format")
    .required("Time is required"),
  priority: Yup.string()
    .oneOf(["low", "medium", "high"], "Invalid priority")
    .required("Priority is required"),
  fulfillment: Yup.number()
    .min(0, "Fulfillment must be at least 0")
    .max(100, "Fulfillment must be at most 100")
    .required("Fulfillment is required"),
});
