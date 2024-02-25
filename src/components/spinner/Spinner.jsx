import React from "react";

const Spinner = ({ initial }) => {
    return (
        <div className={`w-full h-150 flex items-center justify-center relative ${initial ? "initial" : ""}`}>
            <div className="spinner w-50 h-50">
                <svg className="animate-spin w-full h-full" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" stroke="#6cb2eb" strokeWidth="4"></circle>
                </svg>
            </div>
        </div>
    );
};

export default Spinner;