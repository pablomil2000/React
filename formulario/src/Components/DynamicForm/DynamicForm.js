import { useState } from "react";
import { Container } from "react-bootstrap";
import './DynamicForm.css'
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default function DynamicForm() {
    const [step, setStep] = useState(1);

    const showNextStep = () => {
        if (step === 3) {
            console.error("No quedan pasos");
            return false;
        }
        setStep(step + 1);
        // console.log(step);
    }

    const showPreviusStep = () => {
        if (step === 1) {
            console.error("No hay pasos anteriores");
            return false;
        }
        setStep(step - 1);
        // console.log(step);
    }


    return (
        <div className="dynamic-form mt-4 mb-5" id="#dynamic-form">
            <Container className="text-center p-4">
                <div className="content-dynamic-form mt-5 p-4">
                    <h1 className="title-dynamic-form"> Fill the form</h1>
                    <p className="steps-numbers">Step {step} of 3</p>

                    {getPageByStep(step, setStep)}

                    <div className="actions">
                        {step > 1 && step < 4 && (
                            <div className="container-text">
                                <p className="before" onClick={() => showPreviusStep()}>
                                    ⬅️ Before Step
                                </p>
                            </div>
                        )}


                        {step < 3 && (
                            <div className="container-text">
                                <p className="next" onClick={() => showNextStep()}>
                                    Next Step ➡️
                                </p>
                            </div>

                        )}

                    </div>
                </div>
            </Container >
        </div >
    );
}


function getPageByStep(step, setStep) {
    if (step === 1) {
        return <FirstStep />
    } else if (step === 2) {
        return <SecondStep />
    } else if (step === 3) {
        return <ThirdStep />

    }
}