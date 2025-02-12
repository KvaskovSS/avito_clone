import React, { useState } from 'react';

type FormComponentProps = object

const FormComponent: React.FC<FormComponentProps> = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <div>
            <h2>Создание объявления</h2>
        </div>
    );

    
};

export default FormComponent;