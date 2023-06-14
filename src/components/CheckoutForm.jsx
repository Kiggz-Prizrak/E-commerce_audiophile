import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";

const CheckoutForm = ({ setIsValid }) => {
  const [formDatas, setFormDatas] = useState({
    billing: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    shipping: {
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
    payment: {
      method: "",
      eMonayNumber: "",
      eMonayPin: "",
    },
  });

  const [isEmoney, setIsEmoney] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState,
  } = useForm();

  const { errors } = formState;

  const subForm = (data) => {
    console.log(data);
    setIsValid(true);
  };

  const validateOption = (value) => {
    if (!value) {
      return "Please select an option.";
    }
    return true;
  };

 

  return (
    <>
      <form
        onSubmit={handleSubmit(subForm)}
        className="checkoutForm"
        action="submit"
      >
        {/*  */}
        <div>
          <div className="labelContainer">
            <label
              htmlFor="name"
              className={errors.name?.message ? "errorMessage" : ""}
            >
              Name
            </label>
            <input
              className={errors.name?.message ? "errorInput" : "input"}
              id="name"
              type="text"
              placeholder="your name"
              enterKeyHint="next"
              {...register("name", {
                required: "please provide this field",
                pattern: {
                  value:
                    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                  message: "please provide valid data",
                },
              })}
            />
            <p className="errorMessage">{errors.name?.message}</p>
          </div>

          <div className="labelContainer">
            <label
              htmlFor="email"
              className={errors.email?.message ? "errorMessage" : ""}
            >
              E-mail
            </label>
            <input
              className={errors.email?.message ? "errorInput" : "input"}
              id="email"
              type="email"
              enterKeyHint="next"
              placeholder="youremail@email.com"
              {...register("email", {
                required: "please provide this field",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "please entry valid email",
                },
              })}
            />
            <p className="errorMessage">{errors.email?.message}</p>
          </div>

          <div className="labelContainer">
            <label
              htmlFor="phone"
              className={errors.phone?.message ? "errorMessage" : ""}
            >
              Phone
            </label>
            <input
              className={errors.phone?.message ? "errorInput" : "input"}
              id="phone"
              type="tel"
              placeholder="+33 666 33 66"
              {...register("phone", {
                required: "please provide this field",
                pattern: {
                  value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                  message: "please entry valid phone number",
                },
              })}
            />
            <p className="errorMessage">{errors.phone?.message}</p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div>
          <div className="labelContainer">
            <label
              htmlFor="adress"
              className={errors.adress?.message ? "errorMessage" : ""}
            >
              Adress
            </label>
            <input
              className={errors.adress?.message ? "errorInput" : "input"}
              id="adress"
              type="text"
              placeholder="your adress"
              enterKeyHint="next"
              {...register("adress", {
                required: "please provide this field",
                pattern: {
                  value: /^\s*\S+(?:\s+\S+){2}/,
                  message: "please provide valid data",
                },
              })}
            />
            <p className="errorMessage">{errors.adress?.message}</p>
          </div>

          <div className="labelContainer">
            <label
              htmlFor="zipCode"
              className={errors.zipCode?.message ? "errorMessage" : ""}
            >
              ZIP Code
            </label>
            <input
              className={errors.zipCode?.message ? "errorInput" : "input"}
              id="zipCode"
              type="text"
              placeholder="100001"
              enterKeyHint="next"
              {...register("zipCode", {
                required: "please provide this field",
                pattern: {
                  value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                  message: "please provide valid data",
                },
              })}
            />
            <p className="errorMessage">{errors.zipCode?.message}</p>
          </div>

          <div className="labelContainer">
            <label
              htmlFor="city"
              className={errors.city?.message ? "errorMessage" : ""}
            >
              City
            </label>
            <input
              className={errors.city?.message ? "errorInput" : "input"}
              id="city"
              type="text"
              placeholder="your city"
              enterKeyHint="next"
              {...register("city", {
                required: "please provide this field",
                pattern: {
                  value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
                  message: "please provide valid data",
                },
              })}
            />
            <p className="errorMessage">{errors.city?.message}</p>
          </div>

          <div className="labelContainer">
            <label
              htmlFor="country"
              className={errors.country?.message ? "errorMessage" : ""}
            >
              Country
            </label>
            <input
              className={errors.country?.message ? "errorInput" : "input"}
              id="country"
              type="text"
              placeholder="your country"
              enterKeyHint="next"
              {...register("country", {
                required: "please provide this field",
                pattern: {
                  value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
                  message: "please provide valid data",
                },
              })}
            />
            <p className="errorMessage">{errors.country?.message}</p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div>
          {/*  */}
          <div className="checkForm-radio-section">
            <p>Payement Method</p>
            <div className="checkForm-radio-container">
              <input
                onClick={() => setIsEmoney(true)}
                type="radio"
                name="option"
                value="eMonay"
                {...register("option", { validate: validateOption })}
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                onClick={() => setIsEmoney(false)}
                type="radio"
                name="option"
                value="onDelivery"
                {...register("option", { validate: validateOption })}
              />
              <label>Option 2</label>
            </div>
            <p className="errorMessage">{errors.option?.message}</p>
          </div>

          {isEmoney ? (
            <div className="checkForm-eMoney-section">
              <div className="labelContainer">
                <label
                  htmlFor="eMoneyNumber"
                  className={errors.eMoneyNumber?.message ? "errorMessage" : ""}
                >
                  e-Money Number
                </label>
                <input
                  className={
                    errors.eMoneyNumber?.message ? "errorInput" : "input"
                  }
                  id="eMoneyNumber"
                  type="text"
                  placeholder="2846848384"
                  {...register("eMoneyNumber", {
                    required: "please provide this field",
                    pattern: {
                      value: /^-?[0-9]\d*\.?\d*$/,
                      message: "please entry a valid data",
                    },
                  })}
                />
                <p className="errorMessage">{errors.eMoneyNumber?.message}</p>
              </div>
              <div className="labelContainer">
                <label
                  htmlFor="eMoneyPin"
                  className={errors.eMoneyPin?.message ? "errorMessage" : ""}
                >
                  e-Money PIN
                </label>
                <input
                  className={errors.eMoneyPin?.message ? "errorInput" : "input"}
                  id="eMoneyPin"
                  type="text"
                  placeholder="2077"
                  {...register("eMoneyPin", {
                    required: "please provide this field",
                    pattern: {
                      value: /^-?[0-9]\d*\.?\d*$/,
                      message: "please entry a valid code",
                    },
 
                  })}
                />
                <p className="errorMessage">{errors.eMoneyPin?.message}</p>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* <div className="checkForm-eMoney-section">
            <div className="labelContainer">
              <label
                htmlFor="eMoneyNumber"
                className={errors.eMoneyNumber?.message ? "errorMessage" : ""}
              >
                e-Money Number
              </label>
              <input
                className={
                  errors.eMoneyNumber?.message ? "errorInput" : "input"
                }
                id="eMoneyNumber"
                type="text"
                placeholder="2846848384"
                {...register("eMoneyNumber", {
                  required: "please provide this field",
                  pattern: {
                    value: /^-?[0-9]\d*\.?\d*$/,
                    message: "please entry a valid data",
                  },
                  validate: {
                    zeroMonth: (fieldValue) => {
                      return fieldValue > 0 || "must be a valid data";
                    },
                  },
                })}
              />
              <p className="errorMessage">{errors.eMoneyNumber?.message}</p>
            </div>
            <div className="labelContainer">
              <label
                htmlFor="eMoneyPin"
                className={errors.eMoneyPin?.message ? "errorMessage" : ""}
              >
                e-Money PIN
              </label>
              <input
                className={errors.eMoneyPin?.message ? "errorInput" : "input"}
                id="eMoneyPin"
                type="text"
                maxLength={4}
                placeholder="2077"
                {...register("eMoneyPin", {
                  required: "please provide this field",
                  pattern: {
                    value: /^-?[0-9]\d*\.?\d*$/,
                    message: "please entry a valid code",
                  },
                  validate: {
                    invalidCode: (fieldValue) => {
                      return fieldValue < 4 || "must be a valid code";
                    },
                    noCode: (fieldValue) => {
                      return fieldValue > 0 || "must be a valid code";
                    },
                  },
                })}
              />
              <p className="errorMessage">{errors.year?.message}</p>
            </div>
          </div> */}

          {/*  */}
        </div>
        {/*  */}

        <button type="submit">sub</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default CheckoutForm;
