import { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  User, 
  Mail, 
  Phone, 
  Database,
  ShieldCheck,
  History,
  X
} from 'lucide-react';
import type { PilotRequestSubmission } from '../types';

const STORAGE_KEY = 'sentinelroutePilotRequests';

export const PilotForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  
  const [errors, setErrors] = useState<{
    fullName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    organisationName?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedCount, setSavedCount] = useState<number>(0);
  const [showSavedList, setShowSavedList] = useState(false);
  const [storedSubmissions, setStoredSubmissions] = useState<PilotRequestSubmission[]>([]);

  // Safely read existing submissions count
  const refreshStorageCount = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSavedCount(parsed.length);
          setStoredSubmissions(parsed);
          return;
        }
      }
    } catch {
      // safe fallback
    }
    setSavedCount(0);
    setStoredSubmissions([]);
  };

  useEffect(() => {
    refreshStorageCount();
  }, []);

  const validate = () => {
    const newErrors: {
      fullName?: string;
      phoneNumber?: string;
      emailAddress?: string;
      organisationName?: string;
    } = {};

    // Full Name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    }

    // Phone Number (permit spaces, +, -, (), reasonable length 7 to 20)
    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!phoneRegex.test(phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (digits, +, -, () accepted).';
    }

    // Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!emailRegex.test(emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    // Organisation Name
    if (!organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    } else if (organisationName.trim().length < 2) {
      newErrors.organisationName = 'Organisation Name must be at least 2 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    let existingSubmissions: PilotRequestSubmission[] = [];

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      existingSubmissions = saved ? JSON.parse(saved) : [];

      if (!Array.isArray(existingSubmissions)) {
        existingSubmissions = [];
      }
    } catch {
      existingSubmissions = [];
    }

    const newSubmission: PilotRequestSubmission = {
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      emailAddress: emailAddress.trim(),
      organisationName: organisationName.trim(),
      submittedAt: new Date().toISOString()
    };

    existingSubmissions.push(newSubmission);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSubmissions));
    } catch (err) {
      console.error('Local storage save error:', err);
    }

    // Update UI state
    setIsSubmitted(true);
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setOrganisationName('');
    setErrors({});
    refreshStorageCount();
  };

  return (
    <section id="pilot" className="py-10 lg:py-14 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Context & Security reassurance */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-500/35 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Pilot Registration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Put Verified Custody to Work
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-5">
              Interested in testing SentinelRoute within your courier, logistics, secure-document or SME delivery workflow? Submit your details to register interest in a pilot.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Zero software redesign required for initial trial deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Test reusable smart-seal pairing on your active routes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Review cryptographically defensible custody certificates in real time</span>
              </div>
            </div>

            {/* Local Storage Status indicator */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Storage Mode: <strong>Client-Side LocalStorage</strong> ({savedCount} request{savedCount === 1 ? '' : 's'} recorded)
                </span>
              </div>
              {savedCount > 0 && (
                <button
                  type="button"
                  onClick={() => setShowSavedList(true)}
                  className="text-amber-400 hover:text-amber-300 font-medium underline cursor-pointer text-[11px]"
                >
                  View Local Submissions
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Thank you. Your pilot request has been saved.
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                    Your details have been registered into browser local storage for the SentinelRoute pilot evaluation team.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Submit Another Pilot Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. John Campbell"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.fullName ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400/20'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        placeholder="e.g. +44 20 7946 0912"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.phoneNumber ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400/20'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="emailAddress"
                        type="email"
                        value={emailAddress}
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                          if (errors.emailAddress) setErrors({ ...errors, emailAddress: undefined });
                        }}
                        placeholder="name@organisation.co.uk"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.emailAddress ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400/20'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                      />
                    </div>
                    {errors.emailAddress && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.emailAddress}</span>
                      </p>
                    )}
                  </div>

                  {/* Organisation Name */}
                  <div>
                    <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Organisation Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        id="organisationName"
                        type="text"
                        value={organisationName}
                        onChange={(e) => {
                          setOrganisationName(e.target.value);
                          if (errors.organisationName) setErrors({ ...errors, organisationName: undefined });
                        }}
                        placeholder="e.g. Apex Secure Logistics Ltd"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.organisationName ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400/20'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                      />
                    </div>
                    {errors.organisationName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.organisationName}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-98 cursor-pointer"
                    >
                      <span>Request a Pilot</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    No backend network calls • Purely stored in browser localStorage
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Modal for Reviewing Local Stored Submissions */}
      {showSavedList && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  Local Pilot Submissions ({storedSubmissions.length})
                </h3>
              </div>
              <button
                onClick={() => setShowSavedList(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-3 pr-1 text-left">
              {storedSubmissions.map((sub, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-bold text-white text-sm">{sub.fullName}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {new Date(sub.submittedAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div>
                      <span className="text-slate-500">Org:</span> {sub.organisationName}
                    </div>
                    <div>
                      <span className="text-slate-500">Email:</span> {sub.emailAddress}
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500">Phone:</span> {sub.phoneNumber}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-right">
              <button
                onClick={() => setShowSavedList(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
