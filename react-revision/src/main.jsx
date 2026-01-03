import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import State from "./State.jsx";
import Counter from "./Counter.jsx";
import CheckBoxes from "./CheckBoxes.jsx";
import HandleDropdown from "./HandleDropdown.jsx";
import LoopinJSX from "./LoopinJSX.jsx";
import ClockProps from "./ClockProps.jsx";
import NestedLoop from "./NestedLoop.jsx";
import UseEffect from "./UseEffect.jsx";
import Inline from "./Inline.jsx";
import ExternalCss from "./ExternalCss.jsx";
import RGBColorMixer from "./RGBColorMixer.jsx";
import InterviewPrep from "./InterviewPrep.jsx";
import ModuleCss from "./ModuleCss.jsx";
import App from "./App.jsx";
import './index.css';
import Test from "./Practice/Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Inline /> */}
    {/* <State/>
    {<Counter/> */}
    {/* <CheckBoxes/> */}
    {/* <HandleDropdown/>  */}
    {/* <LoopinJSX/> */}
    {/* <ClockProps/> */}
    {/* <NestedLoop /> */}
    {/* <UseEffect /> */}
    {/* <Inline /> */}
    {/* <ExternalCss /> */}
    {/* <RGBColorMixer/> */}
    {/* <InterviewPrep/> */}
    {/* <ModuleCss/> */}
    <Test/>
  </StrictMode>
);