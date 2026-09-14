import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import './Policy.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page">
            <div className="container">
                <header className="policy-header">
                    <p className="policy-eyebrow">The Still Space by Arshita</p>
                    <h1 className="policy-title">Terms of Service</h1>
                    <p className="policy-subtitle">
                        Please review the following policies carefully. They help maintain
                        a safe, consistent, and respectful therapeutic space for everyone.
                    </p>
                </header>

                <div className="policy-body">
                    {/* 1 — Crisis & Emergency Support */}
                    <section className="policy-section">
                        <div className="policy-section-number">1</div>
                        <h2>Crisis &amp; Emergency Support</h2>

                        <div className="policy-callout policy-callout--emergency">
                            <div className="policy-callout-label">
                                <AlertTriangle size={16} aria-hidden="true" />
                                <span>Important</span>
                            </div>
                            <p className="policy-callout-text">
                                Therapy is not an emergency service.
                            </p>
                        </div>

                        <p>
                            If you are experiencing a mental health emergency, are at
                            immediate risk of harming yourself or someone else, or need
                            urgent support, please contact your nearest emergency services
                            or a 24&times;7 crisis helpline immediately instead of waiting
                            for a therapy session.
                        </p>
                        <p>
                            If possible, also inform a trusted family member or support
                            person who can stay with you until you receive help.
                        </p>
                        <p>
                            Emergency contact details and crisis helpline numbers will be
                            shared with clients during intake.
                        </p>
                    </section>

                    {/* 2 — Session Fees & Payment Policy */}
                    <section className="policy-section">
                        <div className="policy-section-number">2</div>
                        <h2>Session Fees &amp; Payment Policy</h2>
                        <ul>
                            <li>Individual therapy sessions are 50&ndash;60 minutes long.</li>
                            <li>
                                The session fee is &#8377;1,200 unless a different fee has been
                                mutually agreed upon.
                            </li>
                            <li>
                                Payment must be completed at least 24 hours before the
                                scheduled session to confirm your appointment.
                            </li>
                            <li>
                                Appointments may be released or rescheduled if payment is
                                not received within the required timeframe.
                            </li>
                            <li>
                                Sessions begin at the scheduled time regardless of late
                                arrival and end at the agreed session time.
                            </li>
                        </ul>
                    </section>

                    {/* 3 — Psychological Assessments */}
                    <section className="policy-section">
                        <div className="policy-section-number">3</div>
                        <h2>Psychological Assessments</h2>
                        <p>
                            Psychological assessments are charged separately from therapy
                            sessions. This is because assessments involve:
                        </p>
                        <ul>
                            <li>Clinical interviews and history taking.</li>
                            <li>Administration of standardized assessment tools.</li>
                            <li>Scoring, interpretation, and clinical formulation.</li>
                            <li>A written report and feedback session (when applicable).</li>
                        </ul>
                        <p>
                            The assessment fee varies depending on the type and number of
                            tools required and will always be discussed with you before
                            beginning the assessment process.
                        </p>
                    </section>

                    {/* 4 — Cancellation & Rescheduling Policy */}
                    <section className="policy-section">
                        <div className="policy-section-number">4</div>
                        <h2>Cancellation &amp; Rescheduling Policy</h2>

                        <div className="policy-callout policy-callout--notice">
                            <div className="policy-callout-label">
                                <span>24-hour notice required</span>
                            </div>
                        </div>

                        <p>
                            Please provide at least 24 hours&rsquo; notice if you need to
                            cancel or reschedule a session.
                        </p>
                        <ul>
                            <li>
                                Sessions cancelled with less than 24 hours&rsquo; notice,
                                missed appointments, or no-shows are non-refundable.
                            </li>
                            <li>
                                In the case of a genuine emergency, the session may be
                                rescheduled once at the therapist&rsquo;s discretion.
                            </li>
                            <li>
                                Repeated late cancellations or missed sessions may affect
                                future appointment availability.
                            </li>
                            <li>Rescheduling is subject to available slots.</li>
                        </ul>
                    </section>

                    {/* 5 — Annual Fee Revision */}
                    <section className="policy-section">
                        <div className="policy-section-number">5</div>
                        <h2>Annual Fee Revision</h2>
                        <p>
                            To ensure the sustainability of the practice and continued
                            professional development, therapy fees are reviewed periodically.
                        </p>
                        <ul>
                            <li>A fee revision of up to 10% may be implemented annually.</li>
                            <li>
                                Existing clients will be informed at least one month in
                                advance of any fee changes.
                            </li>
                            <li>
                                The revised fee will apply only after prior communication and
                                will not affect sessions already booked and paid for.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;