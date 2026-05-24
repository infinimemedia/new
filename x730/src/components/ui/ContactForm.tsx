"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { ButtonHover } from "@/components/ui/button-hover";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Security Consulting",
    "Close Protection",
    "Event Security",
    "Risk Assessment",
    "Private Investigation",
    "Advanced Technology",
    "Training",
    "General Inquiry",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    // Simulate submission — wire to real endpoint (e.g. Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setState("sent");
  };

  if (state === "sent") {
    return (
      <div className="border border-[#1C1C1C] bg-[#0C0C0C] p-12 text-center">
        <div className="w-16 h-16 bg-[#F4F4F5]/5 border border-[#1C1C1C] flex items-center justify-center mx-auto mb-6">
          <span
            className="text-3xl text-[#C4A35A]"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            ✓
          </span>
        </div>
        <h3
          className="text-2xl text-[#F4F4F5] uppercase mb-4"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          Message Received
        </h3>
        <p className="text-[#5A5A5A] text-sm">
          We will respond to your inquiry personally within 24 hours. All
          communications are treated with strict confidentiality.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#1C1C1C] bg-[#0C0C0C] p-8 lg:p-10"
    >
      <h3
        className="text-2xl text-[#F4F4F5] uppercase mb-8"
        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
      >
        Send Us a Message
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Full Name <span className="text-[#C4A35A]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors placeholder:text-[#3a3a3a]"
            placeholder="John Smith"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors placeholder:text-[#3a3a3a]"
            placeholder="Company Name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Email <span className="text-[#C4A35A]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors placeholder:text-[#3a3a3a]"
            placeholder="john@company.com"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors placeholder:text-[#3a3a3a]"
            placeholder="+1 (000) 000-0000"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Service of Interest
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="text-[#3a3a3a]">
              Select a service...
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs text-[#C4A35A] tracking-widest uppercase">
            Message <span className="text-[#C4A35A]">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="bg-[#070707] border border-[#1C1C1C] text-[#F4F4F5] text-sm px-4 py-3 outline-none focus:border-[#C4A35A] transition-colors resize-none placeholder:text-[#3a3a3a]"
            placeholder="Briefly describe your security requirements or inquiry..."
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-[#5A5A5A]">
          All communications are strictly confidential.
        </p>
        <ButtonHover
          type="submit"
          variant="gold"
          disabled={state === "sending"}
        >
          {state === "sending" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight size={14} />
            </>
          )}
        </ButtonHover>
      </div>
    </form>
  );
}
