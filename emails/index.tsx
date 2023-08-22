import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function Email(name: string) {
  return (
    <Html style={{ fontFamily: 'Blanka, Arial, sans-serif', backgroundColor: '#000', padding: '40px 0' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#000', padding: '40px', borderRadius: '30px', position: 'relative' }}>
        <img src="https://i.imgur.com/wJ2pzwQ.jpg" alt="Your Image Description" style={{ maxWidth: '100%', borderRadius: '20px', marginBottom: '20px' }} />

        <h2 style={{ color: '#ffffff', textAlign: 'center', fontSize: '24px', fontFamily: 'TAN Moonlight, Arial, sans-serif', textDecoration: 'underline' }}>
          <i>NATIONAL ART HONORS SOCIETY (NAHS)</i>
        </h2>

        {/* About NAHS */}
        <p style={{ color: '#ffffff', lineHeight: '1.7', fontSize: '16px', padding: '10px 0', marginTop: '20px' }}>
          NAHS champions the convergence of creativity, passion, and excellence in the arts. We cultivate a community where budding artists are celebrated, mentored, and encouraged to reach their full potential. Join us and be a part of this creative journey. Learn more at our <a href="https://nahs-website-example.com" style={{ color: '#ffcd00' }}>website</a>.
        </p>

        {/* Intro/Message */}
        <p style={{ color: '#ffffff', lineHeight: '1.7', fontSize: '16px', padding: '20px 0' }}>
          We're thrilled to announce our upcoming meeting. Be part of our vibrant community!
        </p>

        {/* Rapid-fire FAQs */}
        <div style={{ padding: '10px 0', borderTop: '2px dashed #fff', borderBottom: '2px dashed #fff', marginTop: '20px', marginBottom: '20px' }}>
            <h3 style={{ color: '#ffffff', fontSize: '20px', fontFamily: 'TAN Moonlight, Arial, sans-serif', textDecoration: 'underline' }}>
                Rapid-fire FAQs:
            </h3>
            <p style={{ color: '#ffffff' }}>
                <strong style={{ color: '#ffcd00' }}>1. When is our first meeting?{"   "}</strong>
                <span style={{ background: 'linear-gradient(45deg, #ffcd00, #ff1663)', borderRadius: '5px', padding: '3px 5px' }}>August 22</span>
            </p>
            <p style={{ color: '#ffffff' }}>
                <strong style={{ color: '#ffcd00' }}>2. What does NAHS do?{"   "}</strong> 
                NAHS champions the convergence of creativity, passion, and excellence in the arts.
            </p>
            <p style={{ color: '#ffffff' }}>
                <strong style={{ color: '#ffcd00' }}>3. How can I join?{"   "}</strong> 
                Show up to our meetings and signup on our membership form. A form link will be provided during the meeting.
            </p>
        </div>

        {/* CTA Button */}
        <Button
          pX={30}
          pY={15}
          href="https://linktr.ee/mhs_nahs?utm_source=qr_code" // replace with your actual Linktree link
          style={{ background: 'linear-gradient(45deg, #ffcd00, #ff1663)', color: '#ffffff', display: 'block', margin: '30px auto', textDecoration: 'none', border: 'none', borderRadius: '10px' }}
        >
          Links
        </Button>

        {/* Footer/Signature */}
        <p style={{ color: '#ffffff', fontSize: '14px', marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
          Can't wait to see you there!
          <br />
          Warm wishes,
          <br />
          <i style={{ color: '#ffcd00' }}>The NAHS Team</i>
        </p>

      </div>
    </Html>
  );
}
