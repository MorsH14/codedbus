"use client";

import styled from "@emotion/styled";

const TermsContainer = styled.div`
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

export default function TermsOfServicePage() {
  return (
    <TermsContainer>
      <h1>Codedbus - Terms of Service</h1>
      <p><strong>Last updated:</strong> 17 June 2025</p>

      <h2>Acceptance of Terms</h2>
      <p>
        Welcome to the website of Codedbus Information Technology Limited (&ldquo;Codedbus&rdquo;). By accessing or using this site, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2>Legal Notice</h2>
      <p>
        Codedbus may update these Terms of Service at any time without notice. Continued use of the site signifies your agreement to any changes. All rights not expressly granted herein are reserved.
      </p>

      <h2>Software Usage</h2>
      <p>
        All software and related documentation available for download on this site are the copyrighted property of Codedbus. You may only use such software according to the applicable End User License Agreement (EULA). No use is permitted without agreement to these terms.
      </p>

      <h2>Website Content Usage</h2>
      <p>Unless otherwise stated:</p>
      <ul>
        <li>You may view, print, or distribute site content only for personal, informational, and non-commercial use.</li>
        <li>All copyright and proprietary notices must remain intact.</li>
        <li>You may not modify the content.</li>
      </ul>
      <p>Codedbus may revoke this permission at any time without notice.</p>

      <h2>Warranties and Disclaimers</h2>
      <p>
        All content and software on this site are provided &ldquo;as is&rdquo;, without warranties of any kind. Codedbus disclaims all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <p>Codedbus is not liable for:</p>
      <ul>
        <li>Errors or inaccuracies in content</li>
        <li>Lost profits, data, or usage</li>
        <li>Business interruptions</li>
        <li>Replacement costs</li>
        <li>Any indirect, incidental, or consequential damages</li>
      </ul>

      <h2>Global Access &amp; Product Availability</h2>
      <p>
        This website may reference products and services not available in your country. These references do not imply future availability in your region.
      </p>

      <h2>Submissions</h2>
      <p>
        Except for credit card data used for purchases, any information you share with Codedbus via this site will be treated as non-confidential. You grant Codedbus a royalty-free license to use such content for any purpose.
      </p>
      <p>
        You may not transmit unlawful, obscene, defamatory, or otherwise prohibited materials to this site. Codedbus assumes no liability for such communications if they occur.
      </p>
      <p>For refund-related matters, please refer to our Refund and Return Policy.</p>

      <h2>Linking to This Website</h2>
      <p>You may link to Codedbus&rsquo;s website provided that:</p>
      <ul>
        <li>You do not replicate site content</li>
        <li>You do not misrepresent your relationship with Codedbus</li>
        <li>You do not imply endorsement</li>
        <li>You do not include offensive or unlawful content</li>
        <li>You remove the link upon Codedbus&rsquo;s request</li>
      </ul>

      <h2>Third-Party Links &amp; Products</h2>
      <p>
        Codedbus may provide links to external websites or mention third-party products. These are offered for convenience only, without endorsement or warranty.
      </p>
      <p>
        Accessing third-party content is at your own risk. Codedbus is not responsible for any loss resulting from such interactions.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed and interpreted in accordance with the laws of Nigeria. Accessing this site where its contents are unlawful is strictly prohibited.
      </p>
    </TermsContainer>
  );
}
