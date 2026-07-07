"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your organisation."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a phone number."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please share a brief message.")
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const services = [
  "Strategic Communications Advisory",
  "Executive & Leadership Coaching",
  "Spokesperson & Media Training",
  "Corporate Communication Skills Training",
  "Crisis & Reputation Management"
];

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(data: EnquiryFormValues) {
    console.log("Enquiry submission", data);
    setSubmitted(true);
    reset();
  }

  return (
    <div className="glass-panel rounded-[28px] p-5 sm:p-8 lg:p-10">
      {submitted ? (
        <div className="flex min-h-[26rem] flex-col items-start justify-center">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10 text-emerald">
            <CheckCircle2 aria-hidden="true" />
          </div>
          <h3 className="font-display text-3xl text-ink">Thank you for your enquiry.</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-navy/70">
            Your details have been received. The next step would be to connect this form to the
            preferred email service or backend endpoint.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="focus-ring mt-8 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-emerald/35 hover:text-emerald"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" error={errors.fullName?.message}>
              <input {...register("fullName")} autoComplete="name" className="field-input" />
            </Field>
            <Field label="Company / Organisation" error={errors.company?.message}>
              <input {...register("company")} autoComplete="organization" className="field-input" />
            </Field>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" autoComplete="email" className="field-input" />
            </Field>
            <Field label="Phone Number" error={errors.phone?.message}>
              <input {...register("phone")} type="tel" autoComplete="tel" className="field-input" />
            </Field>
          </div>
          <Field label="Service Interested In" error={errors.service?.message}>
            <select {...register("service")} className="field-input">
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} rows={5} className="field-input resize-none" />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            Submit Enquiry
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      {children}
      {error ? <span className="text-xs font-medium text-red-700">{error}</span> : null}
    </label>
  );
}
