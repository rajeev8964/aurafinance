export default function Security() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Security & Privacy
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Your financial data is protected with enterprise-grade security
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">AES-256 Encryption</h3>
                        </div>
                        <p className="mt-4 text-gray-500">
                            All sensitive financial metadata is encrypted using AES-256 encryption standards.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">SOC2 Compliance</h3>
                        </div>
                        <p className="mt-4 text-gray-500">
                            We maintain SOC2 compliance standards to ensure enterprise-grade security.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">Plaid Integration</h3>
                        </div>
                        <p className="mt-4 text-gray-500">
                            Secure financial data integration through Plaid&apos;s bank-level security protocols.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection</h2>
                    <div className="prose prose-gray max-w-none">
                        <p>
                            At AuraFinance, we take your privacy and security seriously. We implement multiple layers of protection to ensure your financial data remains safe and secure.
                        </p>
                        <ul>
                            <li>End-to-end encryption for all data transmission</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Multi-factor authentication for account access</li>
                            <li>Secure API connections with OAuth 2.0</li>
                            <li>Data anonymization for analytics and machine learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}