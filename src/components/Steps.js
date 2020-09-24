import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

function StepsComponent(){
    return(
        <Steps current={0}>
            <Step title="Datos generales" description="Infórmacion básica" />
            <Step title="Ingresos" description="Información de ingresos" />
            <Step title="Peps" description="Persona Expuesta Políticamente" />
            <Step title="Direcciones y Contactos" description="Direcciones, teléfonos y/o redes sociales" />
        </Steps>
    )
}

export default StepsComponent