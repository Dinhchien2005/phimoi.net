import isEmpty from "validator/lib/isEmpty";
import React, { useState } from "react";
function Content2(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onChangePass = (e) => {
    const value1 = e.target.value;
    setPassword(value1);
  };
  const ValidateForm = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Vui lòng điền email";
    }
    if (isEmpty(password)) {
      msg.password = "Vui lòng điền mật khẩu";
    }
    setValidation(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const HandleButton = () => {
    const isValid = ValidateForm();
    if (!isValid) return;
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-2 lg:w-2/3">
        <div className="p-2">
          <div className="block lg:flex bg-white lg:shadow-lg rounded-lg">
            <div className="w-full lg:w-1/3 flex lg:border-r border-gray-200">
              <div className="m-auto rounded-full">
                <a
                  href="/"
                  className="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0"
                >
                  <div className="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase">
                    Parsinta
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-6 py-16">
              <div className="mb-4 font-light tracking-widest text-2xl font-serif">
                LOGIN
              </div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    autoComplete="email"
                    required
                    placeholder="abc@gmail.com"
                    onChange={onChangeEmail}
                  />
                  <p className="text-red-400 text-xs italic">
                    {validation.email}
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    autoComplete="current-password"
                    placeholder="*******"
                    onChange={onChangePass}
                    required
                  />
                  <p className="text-red-400 text-xs italic">
                    {validation.password}
                  </p>
                </div>
                <label className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="remeber"
                    id="remeber"
                    defaultChecked
                  />
                  <span className="ml-2">I want to remember you ?</span>
                </label>
                <div className="block md:flex items-center justify-between">
                  <button
                    type="button"
                    className="btn"
                    onClick={HandleButton}
                  >
                    LOGIN
                  </button>

                  <a
                    className="text-gray-600 hover:text-gray-700 no-underline block mt-3"
                    href="/password/reset"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content2;
