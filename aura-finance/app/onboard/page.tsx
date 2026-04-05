'use client';

import { useEffect, useState } from 'react';
import api from '../../lib/api';

// Type declarations for Plaid
declare global {
    interface Window {
        Plaid: {
            create: (config: {
                token: string;
                onSuccess: (public_token: string, metadata: any) => void;
                onExit: (err: any, metadata: any) => void;
            }) => { open: () => void };
        };
    }
}

export default function Onboard() {
    const [linkToken, setLinkToken] = useState(null);

    useEffect(() => {
        // Fetch link token from backend
        api.createLinkToken()
            .then((data) => {
                setLinkToken(data.link_token);
            })
            .catch((error) => console.error('Error fetching link token:', error));
    }, []);

    useEffect(() => {
        if (linkToken) {
            // Load Plaid Link script
            const script = document.createElement('script');
            script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js';
            script.onload = () => {
                const handler = window.Plaid.create({
                    token: linkToken,
                    onSuccess: (public_token, metadata) => {
                        // Send public_token to backend
                        api.exchangePublicToken(public_token)
                            .then((data) => {
                                console.log('Access token:', data.access_token);
                                // Redirect to dashboard or something
                                window.location.href = '/dashboard';
                            });
                    },
                    onExit: (err, metadata) => {
                        console.log('Plaid Link exited:', err, metadata);
                    },
                });
                handler.open();
            };
            document.head.appendChild(script);
        }
    }, [linkToken]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Connect Your Bank</h1>
                <p className="mt-2 text-gray-600">Securely link your bank account to get started with AuraFinance.</p>
                {linkToken ? (
                    <p className="mt-4">Opening Plaid Link...</p>
                ) : (
                    <p className="mt-4">Loading...</p>
                )}
            </div>
        </div>
    );
}