"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-[32px] font-bold mb-2"
            style={{ color: "#18315B" }}
          >
            Contact Us
          </h1>
          <p className="text-[15px]" style={{ color: "#7D7D7D" }}>
            Have a question or want to place an inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-14">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div
                className="p-10 rounded-[12px] text-center"
                style={{ backgroundColor: "#E8F7EF" }}
              >
                <svg
                  className="mx-auto mb-4"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#098B48" />
                  <path
                    d="M14 24l7 7 13-13"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3
                  className="text-[20px] font-bold mb-2"
                  style={{ color: "#098B48" }}
                >
                  Message Sent!
                </h3>
                <p className="text-[14px]" style={{ color: "#555555" }}>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-[13px] font-semibold mb-1.5"
                      style={{ color: "#18315B" }}
                    >
                      Full Name <span style={{ color: "#D92550" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr. Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-[8px] border text-[13px] outline-none transition-colors"
                      style={{ borderColor: "#E5EAF2", color: "#222222" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[13px] font-semibold mb-1.5"
                      style={{ color: "#18315B" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-2.5 rounded-[8px] border text-[13px] outline-none"
                      style={{ borderColor: "#E5EAF2", color: "#222222" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[13px] font-semibold mb-1.5"
                    style={{ color: "#18315B" }}
                  >
                    Email Address{" "}
                    <span style={{ color: "#D92550" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-[8px] border text-[13px] outline-none"
                    style={{ borderColor: "#E5EAF2", color: "#222222" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-[13px] font-semibold mb-1.5"
                    style={{ color: "#18315B" }}
                  >
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-[8px] border text-[13px] outline-none cursor-pointer"
                    style={{
                      borderColor: "#E5EAF2",
                      color: form.subject ? "#222222" : "#9CA3AF",
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="support">After-Sales Support</option>
                    <option value="returns">Returns &amp; Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[13px] font-semibold mb-1.5"
                    style={{ color: "#18315B" }}
                  >
                    Message <span style={{ color: "#D92550" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-2.5 rounded-[8px] border text-[13px] outline-none resize-none"
                    style={{ borderColor: "#E5EAF2", color: "#222222" }}
                  />
                </div>

                <button
                  type="submit"
                  className="py-3 rounded-[8px] text-[14px] font-bold transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="text-[18px] font-bold mb-5"
                style={{ color: "#18315B" }}
              >
                Get in Touch
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: "phone",
                    label: "Phone",
                    value: "+92 333 6835815",
                    sub: "Mon–Sat, 9am–6pm PKT",
                  },
                  {
                    icon: "email",
                    label: "Email",
                    value: "info@loftymediquip.com",
                    sub: "We reply within 24 hours",
                  },
                  {
                    icon: "location",
                    label: "Address",
                    value: "Islamabad, Pakistan",
                    sub: "Visit us by appointment",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#ECF3FE" }}
                    >
                      <InfoIcon name={item.icon} />
                    </div>
                    <div>
                      <p
                        className="text-[12px] font-semibold uppercase tracking-wide mb-0.5"
                        style={{ color: "#7D7D7D" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[14px] font-semibold"
                        style={{ color: "#18315B" }}
                      >
                        {item.value}
                      </p>
                      <p
                        className="text-[12px]"
                        style={{ color: "#7D7D7D" }}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="p-6 rounded-[12px]"
              style={{ backgroundColor: "#ECF3FE" }}
            >
              <h4
                className="text-[15px] font-bold mb-4"
                style={{ color: "#18315B" }}
              >
                Business Hours
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span style={{ color: "#555555" }}>{day}</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#18315B" }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoIcon({ name }: { name: string }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "phone")
    return (
      <svg {...props}>
        <path
          d="M3.5 2.5H7l2 4.5-1.5 1.5a10 10 0 0 0 4 4L13 11l4.5 2v3.5C17.5 17.88 16.5 18 15.5 18 8.5 18 2 11.5 2 4.5c0-1 .12-2 1-2z"
          stroke="#3163B7"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "email")
    return (
      <svg {...props}>
        <rect
          x="2"
          y="4"
          width="16"
          height="12"
          rx="2"
          stroke="#3163B7"
          strokeWidth="1.3"
        />
        <path
          d="M2 6l8 5.5L18 6"
          stroke="#3163B7"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  if (name === "location")
    return (
      <svg {...props}>
        <path
          d="M10 2a6 6 0 0 0-6 6c0 4.5 6 11 6 11s6-6.5 6-11a6 6 0 0 0-6-6z"
          stroke="#3163B7"
          strokeWidth="1.3"
        />
        <circle cx="10" cy="8" r="2" stroke="#3163B7" strokeWidth="1.3" />
      </svg>
    );
  return null;
}
