import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './LegalPage.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <Link to="/" className="legal-back-link">
        <ChevronLeft size={20} />
        Back to Home
      </Link>
      
      <h1 className="legal-title">Privacy Policy</h1>
      <span className="legal-date">Last Updated: October 9, 2025</span>

      <div className="legal-content">
        <p>
          This Privacy Policy (“Policy”) governs how InnoVibe Care.EV Mobility India Pvt Ltd (“Company”, “we”, “our”, or “us”), operating under the brand “InnoVibe Care.EV”, collects, uses, protects, and discloses your personal information via our websites (www.innovibemobility.com) and the Care.EV App.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Personal Identification Data:</strong> Name, address, phone number, email, date of birth, gender, and registration details.</li>
            <li><strong>Service Data:</strong> Vehicle information, booking and transaction records, payment details, insurance and claim data, rental service details.</li>
            <li><strong>Technical Data:</strong> Browser/device data, IP address, location, cookies, log files, usage data, and device identifiers.</li>
            <li><strong>Communication Data:</strong> Customer service queries, feedback, complaint details, email correspondence.</li>
            <li><strong>Other Data:</strong> Data voluntarily provided via websites, App, surveys, marketing campaigns, or social media.</li>
          </ul>
        </section>

        <section>
          <h2>2. Use of Information</h2>
          <ul>
            <li>Providing and managing EV services (servicing, conversions, charging, rentals, fleet, insurance, claims, spares).</li>
            <li>Processing bookings, payments, refunds, and support requests.</li>
            <li>Customer communications — sending booking updates, notifications, offers, service reminders.</li>
            <li>Maintaining and improving websites and App functionality.</li>
            <li>Fulfilling legal and regulatory requirements.</li>
            <li>Marketing and promotional activities (if consented).</li>
            <li>Analytics to enhance service quality and user experience.</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing & Disclosure</h2>
          <ul>
            <li>With authorised employees, service partners, franchisees, and affiliates necessary to deliver requested services.</li>
            <li>With payment gateway providers for transaction processing.</li>
            <li>With insurers, claim handlers, and fleet partners for relevant services.</li>
            <li>With government authorities, law enforcement, or regulatory bodies when required by law or investigation.</li>
            <li>With third-party vendors for analytics, cloud hosting, IT support, or marketing — but only under strict confidentiality agreements.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties for unrelated purposes.</p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <ul>
            <li>Secure servers and encrypted connections for storage and transmission.</li>
            <li>Limited, need-to-know access for staff handling data.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Technical controls, password protection, and data backups.</li>
          </ul>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data held.</li>
            <li><strong>Correction:</strong> Update or rectify inaccurate personal data.</li>
            <li><strong>Deletion:</strong> Request deletion of your information, subject to legal/regulatory retention requirements.</li>
            <li><strong>Withdraw Consent:</strong> Opt out of marketing at any time.</li>
            <li><strong>Objection:</strong> Restrict processing under applicable law.</li>
            <li><strong>Data Portability:</strong> Request transfer of data to another service/provider.</li>
          </ul>
          <p>To exercise these rights, email <strong>Customercare@innovibemobility.com</strong>.</p>
        </section>

        <section>
          <h2>6. Cookies & Tracking</h2>
          <p>Our websites and App use cookies and similar technologies to:</p>
          <ul>
            <li>Improve user experience and analyse site traffic.</li>
            <li>Remember user preferences and login sessions.</li>
            <li>Track usage for security and performance.</li>
          </ul>
          <p>You may disable cookies in your browser settings, but certain site features may not function properly.</p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <ul>
            <li>Personal data is retained only as long as necessary for service fulfilment, compliance, or regulatory requirements.</li>
            <li>Booking, payment, and service records are retained per statutory guidelines.</li>
            <li>Data may be anonymized or deleted when no longer necessary.</li>
          </ul>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>Our sites and App may link to external organizations or social media platforms. We are not responsible for their privacy practices. Please review their privacy policies before sharing personal data.</p>
        </section>

        <section>
          <h2>9. Children’s Privacy</h2>
          <p>Our services are not directly intended for persons under 18 years. If information of minors is provided, parental consent must be ensured.</p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>We reserve the right to amend this Policy at any time. Updates will be published on our websites and App. Continued use means acceptance of the revised Policy.</p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            <strong>Email:</strong> Customercare@innovibemobility.com<br />
            <strong>Customer Care:</strong> +91 9014336878<br />
            <strong>Address:</strong> Gitam iTBI, VDA, Rushikonda, Visakhapatnam, AP - 530045.
          </p>
          <p>This privacy policy applies to all customers engaging with InnoVibe Care.EV Mobility India Pvt Ltd services through www.innovibemobility.com and the Care.EV App.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
