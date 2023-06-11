import Button from "../buttons/Button";
import Input from "../form/Input";

export default function MailForm() {
  return (
    <form className="grid gap-2.5 text-white bg-[#5368df] mt-[7.75rem] pt-[4.375rem] pb-[3.75rem] px-8" action="#">
      <h3 className="text-[0.8125rem] font-medium uppercase tracking-[.3125rem]">35,000+ already joined</h3>

      <h2 className="text-2xl tracking-wider leading-7 mb-[1.375rem]">Stay up-to-date with what we’re doing</h2>

      <div className="grid gap-4">
          <Input formName="mailForm" type="email" placeholder="Enter your email address" />
          <Button
            bg="bg-[#fa5757]"
            textColor="text-white"
            text="Contact Us"
            width="w-full"
          />
      </div>
    </form>
  );
}
