import React from 'react';

import AppointmentForm from '../components/AppointmentForm';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <title>Contact - Insurance</title>
      <section className='section contact-section'>
        <AppointmentForm />
        <div className='section-ctn'>
          <a className='contact-links ' href='mailto:john.smith@brandname.com'>
            <code> john.smith@brandname.com</code>
          </a>
          <a className='contact-links ' href='tel:+48 123 456 789'>
            <code> 123 456 789</code>
          </a>
        </div>
      </section>
    </Layout>
  );
};
export default ContactPage;
