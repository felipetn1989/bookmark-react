import { useState } from "react";
import Input from "../form/Input";

import errorIcon from "../images/icon-error.svg"

export default function MailForm() {
  const [mail, setMail] = useState("");
  const [showError, setShowError] = useState(false);

  function handleOnChange(e) {
    setMail(e.target.value);
  }

  function handleSubmit(e, mailString) {
    e.preventDefault();

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    setShowError(emailRegex.test(mail));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-2.5 text-white bg-[#5368df] mt-[7.75rem] pt-[4.375rem] pb-[3.75rem] px-8"
      action="#"
      noValidate
    >
      <h3 className="text-[0.8125rem] font-medium uppercase tracking-[.3125rem]">
        35,000+ already joined
      </h3>

      <h2 className="text-2xl tracking-wider leading-7 mb-[1.375rem]">
        Stay up-to-date with what we’re doing
      </h2>

      <div className="grid gap-4">
        <div>
          <Input
            formName="mailForm"
            type="email"
            placeholder="Enter your email address"
            handleOnChange={handleOnChange}
            error={showError}
          />
          {!showError && (
            <div className="relative">
              <p className="bg-[#fa5757] w-full text-left px-2 text-[0.625rem] font-medium italic translate-y-[-0.25rem] rounded-b-lg">
                Whoops, make sure it's an email
              </p>
              <img className="absolute top-[-2.25rem] right-4" src={errorIcon} alt="error icon" />
            </div>
          )}
        </div>
        <button
          className={`text-sm font-medium shadow-md px-[1.1875rem] py-3.5 tracking-wide rounded-md m-auto hover:bg-white w-full bg-[#fa5757] hover:text-[#fa5757] border border-[#fa5757]`}
        >
          Contact Us
        </button>
      </div>
    </form>
  );
}
