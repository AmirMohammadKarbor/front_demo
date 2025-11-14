import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface ContactFormValues {
  first_name: string;
  last_name: string;
  phone_number: string;
  comment: string;
}

export default function ContactBridge() {
  const validationSchema = Yup.object({
    first_name: Yup.string().trim().required("لطفا نام را وارد کنید"),
    last_name: Yup.string().trim().required("لطفا نام خانوادگی را وارد کنید"),
    phone_number: Yup.string()
      .matches(/^09\d{9}$/, "شماره تماس معتبر نیست")
      .required("شماره تماس الزامی است"),
    comment: Yup.string().trim().required("لطفا پیام خود را بنویسید"),
  });

  const initialValues: ContactFormValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    comment: "",
  };

  const API_URL = import.meta.env.VITE_API_URL || "https://httpbin.org/post";

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    try {

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("خطا در ارسال داده به سرور");
      }

      const data = await res.json();
      console.log("پاسخ سرور:", data);

      alert("پیام شما با موفقیت ارسال شد!");
      resetForm();
    } catch (error) {
      console.error("خطا:", error);
      alert("ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <section
      id="contact"
      className="background-gradient min-h-screen text-white flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-3xl font-bold mb-20 text-brand-gradient text-transparent">
        پل ارتباطی
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {["instagram", "twitter", "youtube"].map((name) => (
          <div
            key={name}
            className="border border-white/60 rounded-xl w-32 h-32 flex flex-col items-center justify-center text-center hover:bg-white/10 transition"
          >
            <img
              src={`/src/assets/images/${name}-logo.png`}
              alt={name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-sm capitalize">{name}</p>
          </div>
        ))}
      </div>

      <Formik<ContactFormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="backdrop-blur-md bg-white/10 rounded-2xl p-8 w-full max-w-md">
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-right">نام</label>
              <Field
                type="text"
                name="first_name"
                className="bg-transparent border-b border-white focus:outline-none p-2 text-right"
              />
              <ErrorMessage
                name="first_name"
                component="p"
                className="text-red-400 text-sm mt-1 text-right"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 text-right">نام خانوادگی</label>
              <Field
                type="text"
                name="last_name"
                className="bg-transparent border-b border-white focus:outline-none p-2 text-right"
              />
              <ErrorMessage
                name="last_name"
                component="p"
                className="text-red-400 text-sm mt-1 text-right"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 text-right">شماره تماس</label>
              <Field
                type="tel"
                name="phone_number"
                className="bg-transparent border-b border-white focus:outline-none p-2 text-right"
              />
              <ErrorMessage
                name="phone_number"
                component="p"
                className="text-red-400 text-sm mt-1 text-right"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-1 text-right">پیام شما</label>
              <Field
                as="textarea"
                name="comment"
                rows={3}
                className="bg-transparent border-b border-white focus:outline-none p-2 text-right resize-none"
              />
              <ErrorMessage
                name="comment"
                component="p"
                className="text-red-400 text-sm mt-1 text-right"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/3 py-4 rounded-full bg-button-gradient hover:opacity-90 transition"
            >
              ارسال پیام
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
