"use client";

import styled from "@emotion/styled";

const RefundContainer = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #000;
  line-height: 1.7;

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export default function RefundPolicy() {
  return (
    <RefundContainer>
      <h1>Codedbus - Refund &amp; Return Policy</h1>
      <p><strong>Last Updated:</strong> 17th June, 2025.</p>

      <h2>Introduction</h2>
      <p>
        At Codedbus Information Technology Limited (&ldquo;Codedbus&rdquo;), we strive to ensure your satisfaction with our digital products and services. This policy outlines our approach to refunds and cancellations.
      </p>

      <h2>Digital Products &amp; Services</h2>
      <p>
        Due to the nature of digital goods (including software, licenses, and downloadable content), all sales are final once access or download has been granted.
      </p>
      <p>However, a refund may be considered under the following conditions:</p>
      <ul>
        <li>A technical issue on our end prevented delivery or access.</li>
        <li>You were charged in error.</li>
        <li>A recurring subscription is canceled within the first 7 days of the billing cycle (where applicable).</li>
      </ul>
      <p>
        To request a refund, please email <a style={{ color: 'blue'}} href="mailto:support@codedbus.com">support@codedbus.com</a> within 7 days of purchase. Be sure to include proof of payment and a description of the issue.
      </p>

      <h2>Processing Refunds</h2>
      <p>
        If your request is approved, your refund will be issued to the original payment method within 7&ndash;14 business days, depending on your bank or provider.
      </p>

      <h2>Non-Refundable Services</h2>
      <p>The following are not eligible for refunds:</p>
      <ul>
        <li>Customized or one-time services</li>
        <li>Promotional items clearly marked as &ldquo;non-refundable&rdquo;</li>
        <li>Services already rendered</li>
        <li>Expired subscription or unused features</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        Questions? Reach out for <a style={{ color: 'blue'}} href="/contact">support</a>.
      </p>
    </RefundContainer>
  );
}
