import React from 'react';

interface EmptyStateProps {
    title?: string;
    message?: string;
    imagePath?: string; // Optional custom image
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    title = "Próximamente",
    message = "Estamos trabajando para traerte nuesvas actualizaciones. ¡Vuelve pronto!",
    imagePath
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
            <div className="relative w-24 h-24 mb-6">

                {/* Simple animated placeholder icon (Maintenance / Construction) */}
                {!imagePath ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative bg-yellow-100 p-4 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-yellow-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <img src={imagePath} alt="Empty State" className="w-full h-full object-contain" />
                )}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 max-w-md">{message}</p>
        </div>
    );
};
