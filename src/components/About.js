import React from 'react'

export default function About({mode}) {
//   const toggleClick = () => {
//         if (myStyle.backgroundColor === 'white') {
//             setMyStyle({
//                 color: 'white', 
//                 backgroundColor: 'black'
//             });

//             setBtnText("Enable Light Mode");
//         } else {
//             setMyStyle({
//                 color: 'black', 
//                 backgroundColor: 'white'
//             });

//             setBtnText("Enable Dark Mode");
//         }

//         if (mode === 'dark') {
//             setMyStyle({
//                 color: '#ffffff', 
//                 backgroundColor: '#0b042b'
//             });
//         } else {
//             setMyStyle({
//                 color: '#000000', 
//                 backgroundColor: '#ffffff'
//             });
//         }
//   }

//   const [myStyle, setMyStyle] = useState({
//     color: '#000000', 
//     backgroundColor: '#ffffff'
//   });

let myStyle = {
    color: mode === 'dark' ? '#ffffff' : '#000000',
    backgroundColor: mode === 'dark' ? '#0b042b' : '#ffffff',
}

//   const [btnText, setBtnText] = useState("Enable Dark Mode")

  return (
    <div>
        <h2 style={{color: mode === 'dark' ? '#ffffff' : '#000000'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    About TextUtils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TextUtils</strong> is a simple and powerful text manipulation
                    tool built using React. It helps users analyze and transform text
                    quickly, making it useful for students, developers, and writers.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
                    Features
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils provides features like converting text to uppercase or
                    lowercase, removing extra spaces, copying text to the clipboard,
                    and counting words and characters in real time.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Why Use TextUtils?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is fast, easy to use, and works entirely in the browser.
                    It helps improve productivity by saving time on repetitive text
                    formatting tasks, with support for dark mode and a clean UI.
                </div>
                </div>
            </div>
        </div>
        {/* <button className="btn btn-primary my-3" onClick={toggleClick}>{btnText}</button> */}
    </div>
  )
}
