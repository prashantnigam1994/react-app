import React from 'react'

export default function Alerts({ alert }) {
  const capitalize = (text) => {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div className="alert-container">
      {alert && (<div className={`alert alert-${alert.type}`} role="alert">{capitalize(alert.type)} : {alert.msg}</div>)}
    </div>
  )
}