import * as yup from 'yup';

export const prodSchema = yup.object().shape({
  name:yup.string().min(3).max(15).required("name is required"),
  price:yup.number().required("price is required"),
  desc:yup.string().min(5).max(25).required("description is required"),
  imageURL:yup.string().required("Image is required"),
});