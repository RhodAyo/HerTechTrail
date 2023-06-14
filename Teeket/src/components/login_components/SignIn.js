import React, { useState } from "react";
import google from "../../assets/other-images/google_signin.svg";
import { useNavigate } from "react-router-dom";
import { firebaseSetup } from "../../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { loginValidate } from "../../userValidation";

import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as yup from "yup";

function Login() {
  // yup rules for input values and types
  const loginValidate = yup
    .object({
      email: yup.string().email("must be a valid email").required(),
      password: yup
        .string()
        .required()
        .min(3, "must be at least 3 characters long"),
    })
    .required();

  // reack hook form to get values, handle errors and use yup as schema validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginValidate),
  });

  const navigate = useNavigate();
  const [formInput, setformInput] = useState({ email: "", password: "" });
  const { email, password } = formInput;

  const onChange = (e) => {
    setformInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const formDataCopy = { ...formInput };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(firebaseSetup, "users", user.uid), formDataCopy);
      navigate("/home");
      toast.success("Successful Login!");
    } catch (error) {
      toast.error("Oops..Try again!");
    }
  };

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(firebaseSetup, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(firebaseSetup, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/home");
      toast.success("Successful Login!");
    } catch (error) {
      toast.error("Oops..Try again!");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col overflow-auto mt-6">
        <div>
          <h3 className="text-2xl font-semibold">
            Log in or sign up to continue
          </h3>
        </div>
        {/* option 1 for google signin */}
        <div className="py-6">
          <button
            type="button"
            className="bg-[#FFFFFF] py-2 pb-3 px-16 text-[#1F1F1F] rounded-[12px] text-sm- font-bold  font-light flex flex-row rounded-lg border border-grey-500"
            onClick={onGoogleClick}
          >
            <img src={google} alt="google-logo" className="px-3" />
            Continue with Google
          </button>
        </div>

        {/*  horizontal rule*/}
        <div className="inline-flex items-center justify-center w-full">
          <hr className=" w-64 h-px my-3 bg-gray-300 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>

        {/* <div class="relative flex py-5 items-center w-64">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4 text-gray-400">or</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div> */}

        {/* option 2: sign in via email and paasword */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <input
              type="email"
              className="md:w-[500px] md:text-center w-[350px] form-input py-3 px-6 rounded-xl my-4 bg-[#EDEDED] border border-gray-300"
              placeholder="Enter your email address"
              id="email"
              name="email"
              value={email}
              {...register("email")}
              onChange={onChange}
            />
            <p>{errors.email?.message}</p>
            {errors.email && (
              <p style={{ color: "red", fontSize: "30px" }}>
                {errors.email.message}
              </p>
            )}
          </section>
          <section>
            <input
              type="password"
              className="md:w-[500px] md:text-center w-[350px] form-input py-3 px-6 rounded-xl bg-[#EDEDED] border border-gray-300"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={password}
              {...register("password")}
              onChange={onChange}
              minLength="8"
              autoComplete="on"
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "30px" }}>
                {errors.password.message}
              </p>
            )}
          </section>
          <button
            type="button"
            className="md:w-[500px] w-[350px] bg-[#0052f6] py-3 pb-3 px-4 my-4 text-[#FFFFFF] items-center justify-center text-center rounded-[12px] text-sm- font-bold  font-light flex flex-row rounded-lg border border-grey-500"
            onClick={onSubmit}
          >
            Continue with Email
          </button>
          <ToastContainer />
        </form>
        <h4 className="text-[#8F8F8F] my-4 text-center font-bold text-[14px]">
          By continuing, you acknowledge that you have read <br /> and
          understood, and agree to Teeket’s{" "}
          <span className="underline decoration-solid font-bold text-[#000000]">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline decoration-solid font-bold text-[#000000]">
           Privacy Policy.
          </span>
        </h4>
      </div>
    </>
  );
}
export default Login;
