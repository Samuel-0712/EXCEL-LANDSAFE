import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import { submitInquiryToSupabase } from '../../lib/supabase';
import { sendAllLeadNotifications } from '../../lib/email';
import { X, CheckCircle2, AlertCircle, MessageSquare, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDestination?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Expert Visa Assistance',
  initialDestination = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [destination, setDestination] = useState(initialDestination);
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialDestination) setDestination(initialDestination);
  }, [initialService, initialDestination]);

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
      serviceOfInterest: service,
      destination: destination || undefined,
      message: message || `Inquiry regarding ${service}${destination ? ' for ' + destination : ''}`
    };

    const { error } = await submitInquiryToSupabase(payload);
    setLoading(false);

    if (error) {
      console.error("Modal submit error:", error);
      const detail = error.message || error.details || 'Submission error. Please try again.';
      setErrorMsg(`Submission issue: ${detail}`);
    } else {
      setSubmitted(true);
      sendAllLeadNotifications(payload).catch(err => console.error("Async modal email error:", err));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-elevated border border-brand-surface z-10 p-6 sm:p-8 my-auto overflow-hidden"
          >

            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-brand-surface">
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-charcoal">
                  Start Your Travel &amp; Visa Inquiry
                </h3>
                <p className="text-xs text-brand-muted font-body mt-1">
                  Our senior advisory team responds promptly within 1–2 business hours.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="p-2 rounded-full text-brand-muted hover:text-brand-charcoal hover:bg-brand-surface transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="pt-5">
              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light text-brand-green flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="font-display font-bold text-2xl text-brand-charcoal">
                    Thank You, {fullName.split(' ')[0]}!
                  </h4>

                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed font-body">
                    We have received your travel inquiry. Our senior visa and tour advisory team will contact you via WhatsApp or Email within 1–2 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={handleReset} variant="secondary" size="sm">
                      Close Window
                    </Button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Excel Landsafe, I just submitted an inquiry for ${destination || 'travel advisory'}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-brand-green text-white font-semibold text-xs flex items-center gap-2 hover:bg-brand-green-hover transition-colors"
                    >
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p>{errorMsg}</p>
                        <a 
                          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold underline mt-1 block"
                        >
                          Or contact us directly on WhatsApp &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tunde Balogun"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm text-brand-charcoal font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 800 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm text-brand-charcoal font-body"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm text-brand-charcoal font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                      Preferred Destination (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zanzibar, Dubai, Singapore, Schengen"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm text-brand-charcoal font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1">
                      Message / Specific Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your trip dates, passport type, or specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-surface focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm text-brand-charcoal font-body resize-none"
                    />
                  </div>

                  <div className="pt-3 flex justify-end border-t border-brand-surface">
                    <Button
                      type="submit"
                      loading={loading}
                      size="md"
                      className="w-full sm:w-auto"
                    >
                      {loading ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    </Button>
                  </div>

                </form>
              )}
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
