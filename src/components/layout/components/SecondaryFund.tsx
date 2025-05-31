import { ReactNode } from 'react'

interface SecondaryFundProps {
    children: ReactNode;
}

function SecondaryFund({ children }: SecondaryFundProps) {
    return (
        <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-400 via-blue-500 to-blue-900">
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dna-pattern" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <path d="M30,10 Q50,30 30,50 Q10,30 30,10 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M70,10 Q90,30 70,50 Q50,30 70,10 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M30,50 Q50,70 30,90 Q10,70 30,50 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M70,50 Q90,70 70,90 Q50,70 70,50 Z" fill="none" stroke="white" strokeWidth="1" />
                            <line x1="30" y1="30" x2="70" y2="30" stroke="white" strokeWidth="1" />
                            <line x1="30" y1="70" x2="70" y2="70" stroke="white" strokeWidth="1" />
                        </pattern>
                        <pattern id="health-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#health-grid)" />
                    <rect width="100%" height="100%" fill="url(#dna-pattern)" />
                </svg>
            </div>
            {children}
        </div>
    )
}

export default SecondaryFund
