import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Subscibe to my newsletter</h2>
        <p className="text-gray-500 my-2">it's free!</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscibe
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://fluentcrm.com/wp-content/uploads/2022/10/Email-marketing-vs-newsletters-.png" />
      </div>
    </div>
  );
}
