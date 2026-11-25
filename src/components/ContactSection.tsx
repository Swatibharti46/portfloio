import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

interface FormValues {
  firstName: string;
  email: string;
  type: 'hireMe' | 'openSource' | 'designSystem' | 'other';
  comment: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  type?: string;
  comment?: string;
}

interface TouchedFields {
  firstName: boolean;
  email: boolean;
  type: boolean;
  comment: boolean;
}

const INITIAL_VALUES: FormValues = {
  firstName: '',
  email: '',
  type: 'hireMe',
  comment: '',
};

const INITIAL_TOUCHED: TouchedFields = {
  firstName: false,
  email: false,
  type: false,
  comment: false,
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const trimmedName = values.firstName.trim();
  if (!trimmedName) {
    errors.firstName = 'Required — please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.firstName = 'Must be at least 2 characters.';
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Required — please enter your email address.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Invalid email address.';
  }

  if (!values.type) {
    errors.type = 'Required — please select an enquiry type.';
  }

  const trimmedComment = values.comment.trim();
  if (!trimmedComment) {
    errors.comment = 'Required — please enter your message.';
  } else if (trimmedComment.length < 25) {
    errors.comment = 'Must be at least 25 characters.';
  }

  return errors;
}

export const ContactSection: React.FC = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<TouchedFields>(INITIAL_TOUCHED);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const errors = validateForm(values);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name as keyof TouchedFields;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      email: true,
      type: true,
      comment: true,
    });

    const currentErrors = validateForm(values);
    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    const submittedName = values.firstName.trim();

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus({
        type: 'success',
        message: `Thanks for your submission, ${submittedName}, we will get back to you shortly!`,
      });
      setValues(INITIAL_VALUES);
      setTouched(INITIAL_TOUCHED);
    }, 650);
  };

  const showNameError = touched.firstName && Boolean(errors.firstName);
  const showEmailError = touched.email && Boolean(errors.email);
  const showTypeError = touched.type && Boolean(errors.type);
  const showCommentError = touched.comment && Boolean(errors.comment);

  const commentLength = values.comment.trim().length;

  return (
    <section
      id="contactme-section"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#2563EB] tracking-tight mb-2">
              Start a Conversation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 [text-wrap:balance]">
              Contact Me
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">
              Have a product idea, design system initiative, or frontend engineering challenge? Send a note below and I will respond within one business day.
            </p>

            <div className="mt-8 pt-6 border-t border-zinc-200 space-y-4 text-sm">
              <div>
                <span className="text-zinc-500 block">Direct Email</span>
                <a
                  href="mailto:hello@clarahayes.dev"
                  className="font-medium text-zinc-900 hover:text-[#2563EB] transition-colors"
                >
                  hello@clarahayes.dev
                </a>
              </div>
              <div>
                <span className="text-zinc-500 block">Location &amp; Availability</span>
                <span className="font-medium text-zinc-900">
                  Seattle, WA · Open to remote &amp; hybrid roles
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8">
              {submissionStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mb-6 p-4 rounded-xl border flex items-start gap-3 text-sm ${
                    submissionStatus.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-red-50 border-red-200 text-red-900'
                  }`}
                >
                  {submissionStatus.type === 'success' ? (
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <p className="font-semibold">
                      {submissionStatus.type === 'success'
                        ? 'All good!'
                        : 'Oops!'}
                    </p>
                    <p className="mt-0.5">{submissionStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-zinc-900 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="name"
                    placeholder="Jordan Taylor"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showNameError}
                    aria-describedby={showNameError ? 'firstName-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-zinc-900 bg-white placeholder:text-zinc-400 transition-colors focus:outline-none focus:ring-2 ${
                      showNameError
                        ? 'border-red-500 focus:ring-red-500/25'
                        : 'border-zinc-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  />
                  {showNameError && (
                    <p
                      id="firstName-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-900 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jordan@studio.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showEmailError}
                    aria-describedby={showEmailError ? 'email-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-zinc-900 bg-white placeholder:text-zinc-400 transition-colors focus:outline-none focus:ring-2 ${
                      showEmailError
                        ? 'border-red-500 focus:ring-red-500/25'
                        : 'border-zinc-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  />
                  {showEmailError && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Enquiry Type Field */}
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-zinc-900 mb-1.5"
                  >
                    Type of enquiry
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showTypeError}
                    aria-describedby={showTypeError ? 'type-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-zinc-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                      showTypeError
                        ? 'border-red-500 focus:ring-red-500/25'
                        : 'border-zinc-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  >
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="designSystem">Design system architecture</option>
                    <option value="other">Other</option>
                  </select>
                  {showTypeError && (
                    <p
                      id="type-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.type}</span>
                    </p>
                  )}
                </div>

                {/* Your Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Your message
                    </label>
                    <span className="text-xs text-zinc-500 tabular-nums">
                      {commentLength} / 25 min characters
                    </span>
                  </div>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={5}
                    placeholder="Share a brief overview of your timeline, goals, and project scope..."
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showCommentError}
                    aria-describedby={showCommentError ? 'comment-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-zinc-900 bg-white placeholder:text-zinc-400 transition-colors resize-y focus:outline-none focus:ring-2 ${
                      showCommentError
                        ? 'border-red-500 focus:ring-red-500/25'
                        : 'border-zinc-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  />
                  {showCommentError && (
                    <p
                      id="comment-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.comment}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white text-sm font-medium hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
