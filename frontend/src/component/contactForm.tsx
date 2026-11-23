import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    services: '',
    preferredDate: '',
    preferredTimeHH: '',
    preferredTimeMM: '',
    preferredTimeAMPM: 'AM',
    otherDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare the data for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.emailAddress,
        phone_number: formData.phoneNumber,
        service: formData.services,
        preferred_date: formData.preferredDate,
        preferred_time: `${formData.preferredTimeHH}:${formData.preferredTimeMM} ${formData.preferredTimeAMPM}`,
        other_details: formData.otherDetails || 'Not provided',
        to_email: 'owner@youremail.com', // Owner's email
      };

      // With:
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      // Reset form after successful submission
      setFormData({
        name: '',
        emailAddress: '',
        phoneNumber: '',
        services: '',
        preferredDate: '',
        preferredTimeHH: '',
        preferredTimeMM: '',
        preferredTimeAMPM: 'AM',
        otherDetails: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if all required fields are filled
  const isFormValid =
    formData.name.trim() !== '' &&
    formData.emailAddress.trim() !== '' &&
    formData.phoneNumber.trim() !== '' &&
    formData.services.trim() !== '' &&
    formData.preferredDate.trim() !== '' &&
    formData.preferredTimeHH.trim() !== '' &&
    formData.preferredTimeMM.trim() !== '';

  return (
    <div className="bg-neutral-900/90 w-full mx-auto font-bold text-white !p-12 drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-900/50 border border-green-500 text-green-300 rounded">
          Thank you! Your appointment request has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <h1 className="text-4xl font-bold text-white text-center !mb-8">CONTACT US</h1>

      <form onSubmit={handleSubmit} className="!space-y-6">
        <div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 sr-only w-full"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="!mt-3 block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-400 sr-only"
            >
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className="!mt-3 block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-400 sr-only"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="!mt-3 block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="services" className="block text-sm font-medium text-gray-400 sr-only">
            Services You'd Like To Book
          </label>
          <div className="relative">
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="!mt-3 block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-gray-400 appearance-none focus:outline-none focus:border-yellow-500"
              required
            >
              <option value="" className="bg-black" disabled>
                Services You'd Like To Book
              </option>
              <option value="service1" className="bg-black text-white">
                Hair Braids, Wedding and Part
              </option>
              <option value="service2" className="bg-black text-white">
                Hair Styles
              </option>
              <option value="service3" className="bg-black text-white">
                Hair Coloring
              </option>
              <option value="service3" className="bg-black text-white">
                Hair Cut and Trims
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 !mt-6 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-400">
              Preferred Appointment Date
            </label>
            <div className="relative !mt-1">
              <input
                type="date"
                name="preferredDate"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 [&::-webkit-calendar-picker-indicator]:bg-white [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:rounded-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="preferredTimeHH" className="block text-sm font-medium text-gray-400">
              Preferred Appointment Time
            </label>
            <div className="!mt-1 flex !space-x-2">
              <input
                type="number"
                name="preferredTimeHH"
                id="preferredTimeHH"
                value={formData.preferredTimeHH}
                onChange={handleChange}
                placeholder="HH"
                min="1"
                max="12"
                className="w-1/3 !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                required
              />
              <input
                type="number"
                name="preferredTimeMM"
                id="preferredTimeMM"
                value={formData.preferredTimeMM}
                onChange={handleChange}
                placeholder="MM"
                min="0"
                max="59"
                className="w-1/3 !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                required
              />
              <div className="relative w-1/3">
                <select
                  name="preferredTimeAMPM"
                  id="preferredTimeAMPM"
                  value={formData.preferredTimeAMPM}
                  onChange={handleChange}
                  className="block w-full !px-4 !py-3 bg-transparent border-4 border-gray-500 text-white appearance-none pr-8 focus:outline-none focus:border-yellow-500"
                >
                  <option value="AM" className="bg-[#1a1a1a] text-white">
                    AM
                  </option>
                  <option value="PM" className="bg-[#1a1a1a] text-white">
                    PM
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="otherDetails" className="block text-sm font-medium text-gray-400 sr-only">
            Other Important Details For Us To Know
          </label>
          <textarea
            name="otherDetails"
            id="otherDetails"
            value={formData.otherDetails}
            onChange={handleChange}
            rows={4}
            placeholder="Other Important Details For Us To Know (Optional)"
            className="!mt-3 block w-full !px-4 !py-3 bg-transparent border-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full md:w-auto !mt-4 !px-8 !py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] cursor-pointer ${
              isFormValid && !isSubmitting
                ? 'bg-[#e0b973] text-black hover:bg-white hover:text-black'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
