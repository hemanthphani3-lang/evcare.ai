import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './LegalPage.css';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Refund Policy | EVcare.AI";
  }, []);

  return (
    <div className="legal-page-container">
      <Link to="/" className="legal-back-link">
        <ChevronLeft size={20} />
        Back to Home
      </Link>

      <h1 className="legal-title">Refund Policy</h1>
      <span className="legal-date">Last Updated: October 8, 2025</span>

      <div className="legal-content">
        <p>
          This Refund Policy ("Policy") applies to all bookings, purchases, and payments made through www.innovibemobility.com, www.evcare.co.in, and the Care.EV App, operated by InnoVibe Care.EV Mobility India Pvt Ltd ("Company").
        </p>

        <section>
          <h2>1. Eligibility for Refund</h2>
          <p>A refund may be requested for service bookings, purchases, conversions, rentals, insurance, parts, and charging made online through our platforms if:</p>
          <ul>
            <li>The service is cancelled by the customer before the commencement, and within the specific time window stipulated per service category.</li>
            <li>The service, product, or booking is not delivered as per specifications, or is unavailable due to unforeseen circumstances initiated by the Company.</li>
            <li>Overpayment or duplicate payment is made for the same booking.</li>
            <li>In case of accidental failed transactions or technical errors (after verification).</li>
          </ul>
          <p>Refunds are <strong>NOT</strong> available for services already rendered, delivered parts, or for EV conversion once initiated unless the failure or defect is attributable solely to the Company.</p>
        </section>

        <section>
          <h2>2. Process for Requesting Refund</h2>
          <ul>
            <li>Refund requests must be submitted via email to <strong>refunds@evcare.co.in</strong> within 72 hours of the original booking/payment, with complete booking/payment details.</li>
            <li>Requests made after 72 hours may not be eligible, except in cases of verified technical errors or company-initiated cancellations.</li>
            <li>The Company reserves the right to seek additional documentation and clarification for refund verification.</li>
          </ul>
        </section>

        <section>
          <h2>3. Refund Timeline</h2>
          <ul>
            <li>Verified refunds will be credited within 7–10 business days from the date of approval.</li>
            <li>Cancellations should be done within 7 days.</li>
            <li>Refunds are credited to the original mode of payment, unless otherwise mutually agreed.</li>
            <li>Any processing fee, convenience charge, or partial service/booking already utilized may be deducted where applicable.</li>
          </ul>
        </section>

        <section>
          <h2>4. Non-Refundable Items and Fees</h2>
          <ul>
            <li>Fees for successfully rendered services, diagnostic charges, completed conversions, insurance premium payments, and replacement/spare parts once delivered are non-refundable unless specified under warranty or defect clauses.</li>
            <li>Any transaction costs, government taxes, or third-party levies are not refundable.</li>
            <li>Consumable items, personalized services, and time-based rentals (partially or fully used) cannot be refunded.</li>
          </ul>
        </section>

        <section>
          <h2>5. Exceptions and Partial Refunds</h2>
          <ul>
            <li>If only part of the booked services were rendered, and the remainder is cancelled within the stipulated window, partial refunds may be considered after deduction for the utilized component.</li>
            <li>No refunds are processed for cancellations made after the stipulated window or for "no show" bookings unless verified company error exists.</li>
          </ul>
        </section>

        <section>
          <h2>6. Cancellation by Company</h2>
          <p>If a booking/order is cancelled by InnoVibe Care.EV Mobility India Pvt Ltd due to non-availability, technical failure, or any company-side issue, the full amount shall be refunded without deduction.</p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            <strong>Email:</strong> refunds@evcare.co.in<br />
            <strong>Customer Care:</strong> +91 9014336878
          </p>
        </section>

        <section>
          <h2>8. Policy Changes</h2>
          <p>This policy is subject to modification at the sole discretion of the Company. Updated policies will be reflected on our websites and App. Continued use of services reflects acceptance of the current Refund Policy.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
