import React from 'react';
import DownloadCard from '../download-card/downloadCard';
import downloads from '../../content/versions.json';

const Downloads = () => (
    <div className="downloads" id="downloads">
        <div className="downloads__viewport">
            <div className="downloads__description">
                <h2 className="downloads__title">Download the extension</h2>
                <p className="downloads__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <div className="downloads__list">
                {downloads.map((download) => {
                    return(
                        <DownloadCard 
                            key={download.id}
                            id={download.id}
                            name={`Add to ${download.name}`}
                            minVersion={`Minimum version ${download.minVersion}`}
                        />
                    );
                })}
            </div>
        </div>
    </div>  
)

export default Downloads