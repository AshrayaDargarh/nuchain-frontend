import React from 'react'

import InnerBanner from '@/app/_components/InnerBanner';
import TopBanner from '@/app/_components/TopBanner';

const Support = () => {

    const faqQnA = [
        { question: "What is a blockchain?", answer: "A blockchain is a decentralized, digital ledger system that records immutable  transactions securely and transparently." },
        { question: "What is NuChain?", answer: "NuChain is a high-speed, scalable blockchain as a service platform with a unique proof-of-reputation consensus mechanism, enabling 200,000 TPS and real-world applications across various sectors. It aims to address scalability, speed, and customization limitations in existing platforms." },
        { question: "How long does it usually take to develop a blockchain?", answer: "On average, it takes approximately 8-10 months, and sometimes up to a year, to develop a layer 1 blockchain. However, with NuChain, we aim to implement and begin executing layer 1 in just 10 weeks." },
        { question: "What is the significance of throughput in blockchain technology?", answer: "Throughput in blockchain technology is crucial for transaction processing speed, impacting real-time interactions in gaming, DePIN, and finance. NuChain's high throughput of 200,000 TPS surpasses Solana&apos;s 65,000 TPS and Ethereum&apos;s 30 TPS, making it an ideal platform for high-transaction-speed applications." },
        { question: "What problems does NuChain solve?", answer: "NuChain addresses enterprise challenges like high setup time, slow transaction speed, and lack of support." },
        { question: "What is the difference between Layer 1 and Layer 0?", answer: "Layer 1 in blockchain, like Bitcoin or Ethereum, is the primary network that processes transactions directly on its blockchain. In contrast, Layer 0 is the foundational infrastructure supporting the creation of purpose-specific blockchains to tackle scalability and interoperability issues." },
    ]

    return (

        <main>
            <InnerBanner
                sectionname="Bridging Gaps"
                heading="Hi! How can we help"
                subheading="Our experts are just one click away!"
                imageurl="assets/bannerimages/support-min.png"
            />

            <TopBanner content="Access our comprehensive FAQ section and knowledge base for quick solutions" />

            <section className='section-spacing-design'>
                <div className='container-xxl'>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className='row g-4'>
                            {faqQnA.map((item, index) => (
                                <div key={index} className='col col-12 col-md-6'>
                                    <div  className="accordion-item support-accordian-design">
                                        <h2 className="accordion-header" id={`flush-heading${index}`}>
                                            <button className="accordion-button collapsed py-2 py-md-4" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{item.answer}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-spacing-design background-grey'>
                <div className='container-xxl'>
                    <div className='text-center para-image-text-box'>
                        <h3>Connect with Experts</h3>
                        <p>Submit your questions and concerns to our dedicated support team and receive prompt assistance.</p>
                        <a href='/contact-us' type="submit" className="btn-pink">Contact Us</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Support
