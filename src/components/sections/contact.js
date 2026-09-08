import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, phone } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .cta-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;

    .email-link,
    .phone-link {
      ${({ theme }) => theme.mixins.bigButton};
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I’m actively open to new opportunities, mobile engineering roles, and impactful projects.
        Whether you have a question, an opportunity, or just want to connect, feel free to reach
        out!
      </p>

      <div className="cta-wrapper">
        <a className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
        <a className="phone-link" href={`tel:${phone}`}>
          Call: +91 8292448021
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
