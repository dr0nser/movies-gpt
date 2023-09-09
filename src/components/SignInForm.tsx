import SignInSchema from "../utils/signInSchema";
import { useFormik } from "formik";
import { SignInDetails } from "../utils/types";

const SignInForm: React.FunctionComponent = (): JSX.Element => {
  const initialValues: SignInDetails = {
    email: "",
    password: "",
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignInSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <input
        id="email"
        className="w-[330px] my-2 px-5 py-3 text-md bg-stone-800 text-gray-400 focus:outline-none rounded-md"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p className="text-sm text-red-600">{formik.errors.email}</p>
      )}
      <input
        id="password"
        className="w-[330px] my-2 px-5 py-3 text-md bg-stone-800 text-gray-400 focus:outline-none rounded-md"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <p className="text-sm text-red-600">{formik.errors.password}</p>
      )}
      <button
        type="submit"
        className="w-[330px] mt-10 bg-red-700 hover:bg-red-800 text-gray-100 font-semibold text-lg py-3 rounded-md"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignInForm;
