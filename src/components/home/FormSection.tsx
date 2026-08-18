import React, { useState } from 'react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import { submitInquiryToSupabase } from '../../lib/supabase';
import { sendAllLeadNotifications } from '../../lib/email';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const FormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Expert Visa Assistance');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Phone).');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    const payload = {
      fullName,
      email,
      phone,
      message: message || 'Direct website inquiry'
    };

    const { error } = await submitInquiryToSupabase(payload);
    setLoading(false);

    if (error) {
      console.error("Form submit error:", error);
      const detail = error.message || error.details || 'Submission error. Please try again.';
      setErrorMsg(`Submission issue: ${detail}`);
    } else {
      setSubmitted(true);
      // Trigger admin alert & client auto-reply asynchronously in background
      sendAllLeadNotifications(payload).catch(err => console.error("Async email dispatch error:", err));
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-elevated border border-brand-surface grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
              Let's Discuss Your Travel Plans
            </h2>

            <p className="text-sm sm:text-base text-brand-muted font-body leading-relaxed">
              Fill out the form to request a callback or file evaluation. Alternatively, chat directly with a senior consultant on WhatsApp.
            </p>

            <div className="space-y-4 pt-4 border-t border-brand-surface">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-light/50 border border-brand-green/20 hover:bg-brand-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors">
                    Instant WhatsApp Advisory
                  </p>
                  <p className="text-xs text-brand-muted">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Inline Form */}
          <div className="lg:col-span-7 bg-brand-bg/50 p-6 sm:p-8 rounded-2xl border border-brand-surface">
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-brand-green mx-auto" />
                <h3 className="font-display font-bold text-2xl text-brand-charcoal">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-brand-muted font-body max-w-sm mx-auto">
                  Thank you {fullName}. An advisor will reach out to you shortly.
                </p>
                <Button variant="secondary" onClick={() => setSubmitted(false)} size="sm">
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tunde Balogun"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green outline-none text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 800 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. yourname@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                    Tell Us About Your Travel Plans
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Details about preferred destinations, travel dates, or passport type..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green outline-none text-sm bg-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  size="md"
                  className="w-full"
                >
                  {loading ? 'Sending Inquiry...' : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
