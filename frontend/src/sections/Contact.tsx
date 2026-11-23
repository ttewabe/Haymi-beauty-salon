import React from 'react';
import ContactForm from '../component/contactForm';
import Images from '../component/Image';

const Contacts: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center z-50 !overflow-x-hidden"
      style={{ backgroundImage: `url(${Images.welcome})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="w-full flex flex-col items-center mx-auto space-y-16 relative z-50 !pb-24 !mt-24 ">
        <div className=" md:!w-[80%] !w-[90%] ">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
