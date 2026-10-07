"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarPlus, MapPin } from "lucide-react";
import { academyRsvpSchema, type AcademyRsvpValues } from "@/lib/academy-rsvp-schema";
import { academyLaunch } from "@/lib/academy-launch";
import styles from "@/app/academylaunch/invitation.module.css";

export function AcademyRsvp() {
  const lock = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState<"attending" | "declined" | null>(null);
  const [failure, setFailure] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AcademyRsvpValues>({
    resolver: zodResolver(academyRsvpSchema),
    defaultValues: { name:"", email:"", phone:"", organisation:"", designation:"", website:"" }
  });
  async function submit(data: AcademyRsvpValues) {
    if (lock.current) return;
    lock.current = true;
    setFailure("");
    try {
      const response = await fetch("/api/academy-rsvp", {
        method:"POST", headers: { "Content-Type":"application/json" },
        body:JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Save failed");
      setSaved(data.attendance);
      requestAnimationFrame(() => confirmation.current?.focus());
    } catch {
      setFailure("We couldn’t save your RSVP at the moment. Please try again. Your details are still here.");
    } finally { lock.current = false; }
  }
  if (saved) return <div className={styles.confirmation} tabIndex={-1} ref={confirmation} role="status">
    <h3>{saved === "attending" ? "Thank you. We look forward to seeing you." : "Thank you for letting us know."}</h3>
    {saved === "attending" && <><p>11 November 2026 · 3–6 PM · Liberal Latte</p><div className={styles.utilities}>
      <a href="/rsvp/calendar" download="lka-comms-academy-launch.ics"><CalendarPlus size={18} aria-hidden="true" />Add to calendar</a>
      <a href={academyLaunch.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" />Get directions</a>
    </div></>}
  </div>;
  const fields = [{ name:"name",label:"Full name",required:true,autoComplete:"name" },{name:"email",label:"Email",required:true,autoComplete:"email"},{name:"phone",label:"Phone number",required:false,autoComplete:"tel"},{name:"organisation",label:"Organisation",required:false,autoComplete:"organization"},{name:"designation",label:"Designation",required:false,autoComplete:"organization-title"}] as const;
  return <form className={styles.form} onSubmit={handleSubmit(submit)} noValidate aria-busy={isSubmitting}>
    <fieldset><legend>Attendance (required)</legend><div className={styles.options}>
      {[["attending","Yes, I’ll be there"],["declined","Sorry, I’m unable to attend"]].map(([value,label]) => <label className={styles.option} key={value}><input type="radio" value={value} {...register("attendance")} aria-describedby={errors.attendance ? "attendance-error" : undefined} />{label}</label>)}
    </div>{errors.attendance && <p id="attendance-error" className={styles.error}>{errors.attendance.message}</p>}</fieldset>
    <div className={styles.fields}>{fields.map(field => <label key={field.name} className={styles.field} htmlFor={"rsvp-"+field.name}>{field.label}{field.required ? " (required)" : " (optional)"}
      <input id={"rsvp-"+field.name} type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"} autoComplete={field.autoComplete} {...register(field.name)} required={field.required} maxLength={field.name === "email" ? 254 : field.name === "phone" ? 50 : 160} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? field.name+"-error" : undefined} />
      {errors[field.name] && <span id={field.name+"-error"} className={styles.error}>{errors[field.name]?.message}</span>}
    </label>)}
    </div>
    <div className={styles.honeypot} aria-hidden="true"><label>Leave blank<input {...register("website")} tabIndex={-1} autoComplete="off" /></label></div>
    <p className={styles.notice}>Your details will be used to manage your RSVP and communicate with you about this event.</p>
    {failure && <p role="alert" className={styles.error}>{failure}</p>}
    <button className={styles.submit} disabled={isSubmitting} type="submit">{isSubmitting ? "Saving RSVP..." : "Send RSVP"}</button>
  </form>;
}
