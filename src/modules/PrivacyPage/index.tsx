"use client";

import styled from "@emotion/styled";

const PrivacyContainer = styled.div`
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

export default function PrivacyPolicy() {
  return (
    <PrivacyContainer>
      <h1>Codedbus - Privacy Policy</h1>
      <p><strong>Last Updated:</strong> 17th June, 2025</p>

      <h2>Introduction</h2>
      <p>
        Codedbus Information Technology Limited (&ldquo;Codedbus&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and disclose your information when you use our website and related services.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following information when you use our site:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you voluntarily provide.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring URLs, and other diagnostic data.</li>
        <li><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and analyze site traffic. You can manage cookie settings through your browser.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Provide and maintain our services</li>
        <li>Respond to inquiries or support requests</li>
        <li>Improve and personalize your experience</li>
        <li>Send administrative messages or promotional materials (with your consent)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share your data with:</p>
      <ul>
        <li>Service Providers assisting us in delivering the website and related services</li>
        <li>Legal Authorities, if required to comply with legal obligations or protect our rights</li>
        <li>Business Transfers, in the event of a company merger, acquisition, or asset sale</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights &amp; Choices</h2>
      <p>Depending on your jurisdiction, you may have rights to:</p>
      <ul>
        <li>Access or correct your personal data</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw consent for data processing</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <p>
        To exercise these rights, please contact us at <a href="mailto:contact@codedbus.com">contact@codedbus.com</a>.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites. We are not responsible for their privacy practices or content. We encourage you to review their privacy policies.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our site is not intended for children under 13. We do not knowingly collect personal information from minors. If we discover such data has been collected, we will take appropriate steps to delete it.
      </p>

      <h2>International Transfers</h2>
      <p>
        If you access our services from outside Nigeria, be aware that your information may be transferred and processed in Nigeria or other countries.
      </p>
      <h2>Change to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. When we do, we will revise the &ldquo;Effective Date&rdquo; at the top. Continued use of our site constitutes acceptance of the revised policy.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@codedbus.com">contact@codedbus.com</a>.
      </p>
    </PrivacyContainer>
  );
}
