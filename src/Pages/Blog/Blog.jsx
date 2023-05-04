import React from "react";
import {  FaDownload} from 'react-icons/fa';
import Pdf from 'react-to-pdf';



const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800  text-orange-500">
      <div className="border  p-5 shadow">
      <Pdf targetRef={ref} filename="ph.pdf">
						{({ toPdf }) => (
							<button className="tooltip tooltip-secondary" data-tip="Download" onClick={toPdf}>
								<FaDownload />
							</button>
						)}
					</Pdf>


      <h2 className="font-bold Text-2xl p-5">
        1.Differences between uncontrolled and controlled components.
      </h2>
      <p>
        Now that we have understood both the controlled and uncontrolled
        components in react, let us see at many key differences between them :
        <br />
        In a controlled component react, state handles all the form data, while,
        in an uncontrolled component, the HTML form element data is overseen by
        as it were the DOM. <br />
        In the event that you're using a controlled component, you're in control
        of your form input values. The developer can choose what to insert or
        not and where to insert it. <br />
        It may be a must to use react state in a controlled component to handle
        the dynamic form data. It is optional for the uncontrolled component to
        have a state, but it must use react Ref. <br />
        Controlled components are predictable since the component manages the
        state of the form elements. <br />
       
      </p>

      </div>
      <div className="border  p-5 shadow">
      <Pdf targetRef={ref} filename="ph.pdf">
						{({ toPdf }) => (
							<button className="tooltip tooltip-secondary" data-tip="Download" onClick={toPdf}>
								<FaDownload />
							</button>
						)}
					</Pdf>

      <h2 className="font-bold Text-2xl p-5">
          2.How to validate React props using PropTypes
        </h2>
        <p>
          1. PropTypes.any =The props can be of any data type. 2.
          PropTypes.array =The props should be an array. 3. PropTypes.bool =The
          props should be a boolean. 4. PropTypes.func =The props should be a
          function. 5. PropTypes.number =The props should be a number. 6.
          PropTypes.object =The props should be an object. 7. PropTypes.string
          =The props should be a string. 8. PropTypes.symbol =The props should
          be a symbol. 9. PropTypes.instanceOf =The props should be an instance
          of a particular JavaScript class. 10. PropTypes.isRequired =The props
          must be provided. 11. PropTypes.element =The props must be an element.
          12. PropTypes.node =The props can render anything: numbers, strings,
          elements or an array (or fragment) containing these types. 13.
          PropTypes.oneOf() =The props should be one of several types of
          specific values. 14.
          PropTypes.oneOfType([PropTypes.string,PropTypes.number]) =The props
          should be an object that could be one of many types.
        </p>
      </div>
        <div className="border  p-5 shadow">
        <Pdf targetRef={ref} filename="ph.pdf">
						{({ toPdf }) => (
							<button className="tooltip tooltip-secondary" data-tip="Download" onClick={toPdf}>
								<FaDownload />
							</button>
						)}
					</Pdf>
        <h2 className="font-bold Text-2xl p-5">3.	Tell us the difference between nodejs and express js.</h2>

<p>Node.js is a run-time environment created to run JavaScript on the server side.

Express.js is a framework for Node.js, so in order to use it, you will use Node.js anyway. Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing</p>

        </div>
<div className="border  p-5 shadow">
<Pdf targetRef={ref} filename="ph.pdf">
						{({ toPdf }) => (
							<button className="tooltip tooltip-secondary" data-tip="Download" onClick={toPdf}>
								<FaDownload />
							</button>
						)}
					</Pdf>

<h2 className="font-bold Text-2xl p-5">4.	What is a custom hook, and why will you create a custom hook?</h2>
<p> React hooks are functions that let you use and interact with state in React function components. React comes with a few built-in hooks, the foremost commonly used ones being useState, useRef, and useEffect. The previous two are used to store data across renders, whereas the last mentioned is used to execute side effects when that data changes. <br/>

We can also build our own hooks using the built-in hooks as building blocks. These are often referred to as “custom hooks” to differentiate them from the built-in hooks. In my experience, custom hooks are the most underused React abstraction. Developers who are newer to React can struggle to understand how to build custom hooks or when to use them. This post will focus on answering those questions.
</p>
</div>
    </div>
  );
};

export default Blog; 
