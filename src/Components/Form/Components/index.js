import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { Wrapper, Label, Input, InputBlock, Error, ActionsBlock } from "./components";
// import { Button } from "../common/Button";

const Form = ({ validationSchema, inputs, submitFunc }) => (
  <Formik
    initialValues={inputs.reduce((initialValues, input) => {
      initialValues[input.name] = input.value || "";
      return initialValues;
    }, {})}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      submitFunc(values);
      actions.resetForm();
    }}
    render={({
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    }) => {
      const inputsToDisplay = inputs.map(({ id, name, label, required, autoComplete, xs, sm }) => (
        <Grid item xs={xs} sm={sm} key={id}>
          <TextField
            required={required}
            id={id}
            name={name}
            label={label}
            fullWidth
            autoComplete={autoComplete}
            value={values[name]}
            onChange={handleChange}
          />
        </Grid>
      ));
      return (
        <Wrapper onSubmit={handleSubmit}>
          <Grid container spacing={24}>
            {inputsToDisplay}
            <Grid item xs={6} sm={4}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Add Player
              </Button>
            </Grid>
          </Grid>
        </Wrapper>
      );
    }}
  />
);

Form.propTypes = {
  submitFunc: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
