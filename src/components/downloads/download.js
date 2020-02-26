import React from 'react';
import DownloadCard from '../download-card/downloadCard';

const Downloads = () => (
    <div className="downloads" id="downloads">
        <h2 className="downloads__title">Download the extension</h2>
        <p className="downloads__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        <DownloadCard 
            title="Add to Chrome"
            description="Minimum version 62"
            />
    </div>
)

export default Downloads