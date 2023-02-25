import { type NextPage } from "next";

interface Props {
  rating: number;
}
export const RatingSummary: NextPage<Props> = ({ rating }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/images/illustration-thank-you.svg"
        alt="Thank you"
        className="mt-2.5 w-36 md:mt-[13px] md:w-[162px]"
      />
      <div className="mt-6 rounded-full bg-brand-blue px-3 py-[5px] text-brand md:mt-8 md:px-5 md:leading-6">
        You selected {rating} out of 5
      </div>
      <h1 className="mt-6 text-md font-bold leading-[30px] text-white md:mt-8 md:text-lg">
        Thank you!
      </h1>
      <p className="mt-2.5 text-center text-[14px] text-brand-gray-200 md:w-[340px] md:text-base md:leading-6">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
