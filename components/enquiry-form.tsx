"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  organisation: z.string().min(2, "Please enter your organisation."),
  workEmail: z.string().email("Please enter a valid work email address."),
  areaOfInterest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Please share a brief context."),
  website: z.string().max(0, "Spam protection triggered.")
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const areasOfInterest = [
  "Strategic Communications Advisory",
  "Reputation & Issues Management",
  "Crisis Preparedness & Response",
  "Stakeholder & Public Affairs",
  "Communication Audit",
  "Leadership Coaching",
  "Media Training",
  "Comms Academy",
  "Custom Training Programme",
  "Custom Corporate Programme",
  "Other"
];

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      organisation: "",
      workEmail: "",
      areaOfInterest: "",
      message: "",
      website: ""
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const areaOfInterest = params.get("areaOfInterest");

    if (areaOfInterest && areasOfInterest.includes(areaOfInterest)) {
      setValue("areaOfInterest", areaOfInterest, { shouldValidate: true });
    }
  }, [setValue]);

  async function onSubmit(data: EnquiryFormValues) {
    // Demo behaviour only: no email service or backend endpoint is connected yet.
    // Ready to connect later to Resend, Formspree or a Next.js API route.
    await new Promise((resolve) => setTimeout(resolve, 450));
    console.log("Demo enquiry submission", data);
    setSubmitted(true);
    reset();
  }

  return (
    <div className="glass-panel rounded-[24px] p-5 sm:p-8 lg:p-10">
      {submitted ? (
        <div className="flex min-h-[26rem] flex-col items-start justify-center">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10 text-emerald">
            <CheckCircle2 aria-hidden="true" />
          </div>
          <h3 className="font-display text-3xl text-ink">Thank you for your enquiry.</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-navy/70">
            This demo form has logged your enquiry in the browser console. Connect it to Resend,
            Formspree or an API endpoint before using it for live email delivery.
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
            <Field label="Organisation" error={errors.organisation?.message}>
              <input {...register("organisation")} autoComplete="organization" className="field-input" />
            </Field>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Work Email" error={errors.workEmail?.message}>
              <input {...register("workEmail")} type="email" autoComplete="email" className="field-input" />
            </Field>
            <Field label="Area of Interest" error={errors.areaOfInterest?.message}>
              <select {...register("areaOfInterest")} className="field-input">
                <option value="">Select an area</option>
                {areasOfInterest.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Briefly tell us what your organisation is navigating." error={errors.message?.message}>
            <textarea {...register("message")} rows={5} className="field-input resize-none" />
          </Field>
          <label className="hidden" aria-hidden="true">
            Leave this field empty
            <input {...register("website")} tabIndex={-1} autoComplete="off" />
          </label>
          {errors.website?.message ? (
            <p className="text-xs font-medium text-red-700">{errors.website.message}</p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Preparing enquiry..." : "Submit Enquiry"}
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
