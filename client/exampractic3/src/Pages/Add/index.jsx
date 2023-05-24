import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../../../src/App.css"
import { useFormik } from 'formik';
import { postDataByID } from "../../api/httpsrequests";
import { prodSchema } from "../../validation/ProductSchema";

function Add() {
  

  function handleSubmit(values,action){
    // act
    postDataByID(values)
    console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      price:'',
      desc:'',
      imageURL:'',
    },
    onSubmit:handleSubmit,
    validationSchema:prodSchema,

    
  });

  return (
    <>
      <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1>ADD PRODUCTS</h1>
      <form onSubmit={formik.handleSubmit} className="add">
      <TextField 
      error = {formik.errors.name && formik.touched.name ? true : false}
      onChange={formik.handleChange}
       onBlur={formik.handleBlur}
        name = "name" type="text" id="outlined-basic" label="name" variant="outlined" />
        {formik.errors.name && formik.touched.name && <p style={{color:"red"}}>{formik.errors.name}</p>}

      
      <TextField  error = {formik.errors.price && formik.touched.price ? true : false}
      onChange={formik.handleChange}
       onBlur={formik.handleBlur}
        name = "price" type="number" id="outlined-basic" label="price" variant="outlined" />
       {formik.errors.price && formik.touched.price && <p style={{color:"red"}}>{formik.errors.price}</p>}
      
      <TextField error = {formik.errors.desc && formik.touched.desc ? true : false}
       onChange={formik.handleChange} onBlur={formik.handleBlur} name = "desc" type="text" id="outlined-basic" label="desc" variant="outlined" />
      {formik.errors.desc && formik.touched.desc && <p style={{color:"red"}}>{formik.errors.desc}</p>}

      
      <TextField  error = {formik.errors.imageURL && formik.touched.imageURL ? true : false}
      onChange={formik.handleChange} onBlur={formik.handleBlur} name = "imageURL" type="text" id="outlined-basic" label="imageURL" variant="outlined" />
      {formik.errors.imageURL && formik.touched.imageURL && <p style={{color:"red"}}>{formik.errors.imageURL}</p>}

      <Button type="submit" variant="contained" color="success">
        Success
      </Button>
      </form>
    </>
  );
}

export default Add;
