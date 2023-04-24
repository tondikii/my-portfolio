import type {NextComponentType, NextPageContext} from "next";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import Swal from "sweetalert2";
import Head from "next/head";

import styles from "@/styles/Contact.module.css";

interface Props {
  renderAnimation: boolean;
}

const Contact: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const {renderAnimation} = props;

  const publicKey: string = process.env.emailJsPublicKey || "";
  const serviceId: string = process.env.emailJsServiceId || "";
  const templateId: string = process.env.emailJsTemplateId || "";

  const form = useRef<HTMLFormElement>(
    typeof window === "object" ? document.createElement("form") : null
  ) || {current: ""};

  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
      setLoading(true);
      await emailjs.sendForm(
        serviceId,
        templateId,
        form?.current || "",
        publicKey
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been successfully sent!",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed send message!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Head>
        <meta
          name="description"
          content="Contact Tondiki Andika for furhter information or any services needed"
        />
        <meta property="og:title" content="Contact Tondiki Andika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderAnimation && (
        <div className="w-5/6 flex flex-col-reverse md:flex-row justify-between md:h-4/5 md:items-end">
          <Image
            src="/illustration-contact-me.svg"
            alt="Illustration contact me"
            className={`w-5/6 md:w-7/12 ${styles.slideLeft}`}
            width={0}
            height={0}
          />
          <div
            className={`flex flex-col md:mb-32 md:w-1/3 w-2/3 self-end ${styles.slideRight}`}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-full"
            >
              <label className="text-sm md:text-base font-medium">Name</label>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-3 rounded-md p-1">
                <input
                  className="bg-white rounded w-full py-1 px-2"
                  placeholder="..."
                  type="text"
                  name="from_name"
                />
              </div>
              <label className="text-sm md:text-base font-medium">Email</label>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-3 rounded-md p-1">
                <input
                  className="bg-white rounded w-full py-1 px-2"
                  placeholder="..."
                  type="email"
                  name="email"
                />
              </div>
              <label className="text-sm md:text-base font-medium">
                Message
              </label>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 rounded-md px-1 pt-1 pb-0">
                <textarea
                  className="bg-white rounded w-full py-1 px-2"
                  placeholder="..."
                  name="message"
                />
              </div>
              <button
                className={`${
                  loading ? "opacity-60" : ""
                } mb-2 md:mb-0 md:mt-4 self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl w-40 p-1`}
                type="submit"
                disabled={loading}
              >
                <div className="w-full p-3 bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white rounded-xl">
                  {loading ? "Loading..." : "Send"}
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
