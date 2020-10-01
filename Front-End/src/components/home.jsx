import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Badge } from "react-bootstrap";

const Home = () => {
  const [list, setList] = React.useState("Nill");
  const [salInput, setSalInput] = React.useState("");
  const [isTaxCalculated, setIsTaxCalculated] = React.useState(false);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    setIsTaxCalculated(false);
  }, [salInput]);

  const onSubmit = (data) => {
    console.log("data: " + JSON.stringify(data.annualSal));
    axios
      .get(
        "http://localhost:8088/employee/tax/details?annualsalary=" +
          data.annualSal
      )
      .then(function (response) {
        setList(response.data);
        setIsTaxCalculated(true);
      })
      .catch(function (error) {});
  };

  return (
    <React.Fragment>
      <div
        className="col-12 col-lg-4 ml-5 mt-5"
        style={{
          backgroundColor: "#58b2ca4d",
          width: "300px",
          minHeight: "200px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group text-left">
            <label htmlFor="inputAnnualSal">Enter Annual Salary</label>
            <input
              type="text"
              className="form-control"
              name="annualSal"
              placeholder="Annual Salary"
              onChange={(e) => setSalInput(e.target.value)}
              ref={register({ required: "Annual Salary is required" })}
            />
          </div>

          <p>
            {errors.annualSal && (
              <Badge variant="danger">{errors.annualSal.message}</Badge>
            )}
          </p>

          <button type="submit" className="btn btn-primary">
            Calculate Tax
          </button>
        </form>
      </div>

      {isTaxCalculated && (
        <div
          className="ml-5 mt-5"
          style={{
            backgroundColor: "#55e25db5",
            width: "200px",
            minHeight: "20px",
          }}
        >
          {" "}
          <strong> Calculated tax:</strong> {list}
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
