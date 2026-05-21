import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './LegalPage.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <Link to="/" className="legal-back-link">
        <ChevronLeft size={20} />
        Back to Home
      </Link>
      
      <h1 className="legal-title">Terms & Conditions</h1>
      <span className="legal-date">Last Updated: October 9, 2025</span>

      <div className="legal-content">
        <p>
          These Terms & Conditions ("Terms") govern your access to and use of the websites www.innovibemobility.com and the Care.EV mobile application ("App"), and services provided by InnoVibe Care.EV Mobility India Pvt Ltd ("Company," "we," "our," or "us"), operating under the brand name "InnoVibe Care.EV" with the tagline <em>Your EV, Our Expert Care</em>. By accessing our websites, App, or using our services, you ("user," "you," or "customer") agree to comply with these Terms.
        </p>

        <section>
          <h2>Company Information</h2>
          <p>
            <strong>Company Name:</strong> InnoVibe Care.EV Mobility India Pvt Ltd<br />
            <strong>Brand:</strong> InnoVibe Care.EV<br />
            <strong>Head Office:</strong> Gitam iTBI, VDA, Rushikonda, Visakhapatnam, AP - 530045.<br />
            <strong>Customer Care:</strong> +91 9014336878<br />
            <strong>Email:</strong> Customercare@innovibemobility.com
          </p>
        </section>

        <section>
          <h2>Scope of Services</h2>
          <p>Our services include but are not limited to:</p>
          <ul>
            <li>Multi-brand EV servicing for 2, 3, and 4 wheelers</li>
            <li>EV conversion (Hybrid & Full EV)</li>
            <li>EV charging station solutions (home, public, and fast charging)</li>
            <li>EV insurance and accidental claim support</li>
            <li>EV fleet and rental services</li>
            <li>EV spare parts and accessories</li>
            <li>EV battery replacement, swapping, and upgrades</li>
            <li>Service booking through Care.EV App and www.evcare.co.in</li>
          </ul>
        </section>

        <section>
          <h2>User Eligibility</h2>
          <ul>
            <li>You must be at least 18 years old and legally capable of entering into a contract under the laws of India.</li>
            <li>Users must provide accurate, current, and complete registration details during bookings.</li>
          </ul>
        </section>

        <section>
          <h2>Bookings & Payments</h2>
          <ul>
            <li>Bookings for services can be made through the Care.EV App or website.</li>
            <li>Payments must be made online through the designated payment gateways integrated into our platforms.</li>
            <li>Service prices, offers, and discounts are subject to change without prior notice.</li>
          </ul>
        </section>

        <section>
          <h2>Cancellations & Refunds</h2>
          <ul>
            <li>Customers may request cancellations as per the specific service's cancellation policy.</li>
            <li>Refund requests must be submitted with booking details to <strong>refunds@evcare.co.in</strong>.</li>
            <li>Refund approvals are processed within 7–10 business days, subject to verification of eligibility.</li>
            <li>Convenience fees, processing charges, or partially availed services may not be refunded.</li>
          </ul>
        </section>

        <section>
          <h2>Service Terms</h2>
          <ul>
            <li>Our company will exercise reasonable care and skill in providing services, but service timelines may vary depending on availability and technical requirements.</li>
            <li>EV conversions, repairs, and upgrades will be carried out as per prescribed safety standards. Customers acknowledge potential risks inherent in mechanical/electrical work.</li>
            <li>Use of genuine or equivalent quality spare parts is assured; in some cases, alternatives may be recommended for better efficiency or safety.</li>
          </ul>
        </section>

        <section>
          <h2>Warranty & Liability</h2>
          <ul>
            <li>Warranty on parts and services is subject to manufacturer terms and specific service categories.</li>
            <li>InnoVibe Care.EV Mobility India Pvt Ltd is not liable for damages arising from misuse, unauthorized modifications, or third-party interventions.</li>
            <li>We are not responsible for any indirect, incidental, or consequential damages such as loss of business, data, or vehicle downtime caused during or after our services.</li>
          </ul>
        </section>

        <section>
          <h2>Insurance & Claims</h2>
          <p>Assistance with EV insurance and accidental claims is provided for convenience. However, the final settlement is subject to verification and approval by the respective insurance company. InnoVibe Care.EV shall not be held liable for delays or rejections from third-party insurers.</p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>All content on our websites, App, branding, logos, and materials are the intellectual property of InnoVibe Care.EV Mobility India Pvt Ltd. Users are prohibited from copying, distributing, or modifying any content without written consent.</p>
        </section>

        <section>
          <h2>Privacy & Data Protection</h2>
          <p>By using our services, you agree that your personal and payment data may be stored and processed for providing services. We take reasonable technical and administrative measures to protect your data. For details, refer to our Privacy Policy available on our websites.</p>
        </section>

        <section>
          <h2>Third-Party Links & Services</h2>
          <p>Websites or the App may include links to third-party platforms. We are not responsible for their content, accuracy, or reliability. Accessing external websites is at your own risk.</p>
        </section>

        <section>
          <h2>Termination of Services</h2>
          <p>We reserve the right to terminate or block access to services if:</p>
          <ul>
            <li>You fail to comply with these Terms.</li>
            <li>Fraudulent, abusive, or illegal activity is detected.</li>
          </ul>
        </section>

        <section>
          <h2>Governing Law & Dispute Resolution</h2>
          <ul>
            <li>These Terms are governed by the laws of India.</li>
            <li>Any disputes shall fall under the exclusive jurisdiction of the courts of Visakhapatnam, Andhra Pradesh.</li>
          </ul>
        </section>

        <section>
          <h2>Amendments</h2>
          <p>We reserve the right to modify or amend these Terms at any time. Updated terms will be posted on our websites, and continued use of services implies acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            <strong>Customer Care:</strong> +91 9014336878<br />
            <strong>Email:</strong> Customercare@innovibemobility.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
