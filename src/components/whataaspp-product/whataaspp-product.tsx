import React from 'react';

export interface WhataasppProductProps {
    className?: string;
}

export const WhataasppProduct: React.FC<WhataasppProductProps> = ({ className = '' }) => (
    <div className={className}>WhataasppProduct</div>
)