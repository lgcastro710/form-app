import {  Text,Scope } from 'informed';
import { useForm } from '../hooks/useForm';

export const FromInsurance= () => {
    const [formValues, getInputChange ] = useForm({
       insurance:'',
       phone:'',
       fax:'',
       email:'',
       liability:'',
       cargo:'',
       physical:'',

    });

    const {insurance,phone,fax,email,liability,cargo,physical,date} = formValues;
    const submitAccount = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }
        return (
            <div className="contendor content-form">
                <div className="title-form">
                    <h1>Insurance Info </h1>
                  
                </div>
                <div className="form-center">
                    <form onSubmit={submitAccount}>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>Insurance:<Text 
                                field="insurance" 
                                placeholder="text"
                                initialValue={insurance}
                                onChange={getInputChange}
                                /></label>
                                <label>Phone:<Text 
                                field="phone" 
                                placeholder="text"
                                initialValue={phone}
                                onChange={getInputChange}
                                /></label>
                                <label>Fax:<Text 
                                field="fax" 
                                placeholder="text"
                                initialValue={fax}
                                onChange={getInputChange}
                                /></label>
                                <label>Email:<Text 
                                field="email" 
                                placeholder="text"
                                initialValue={email}
                                onChange={getInputChange}
                                /></label>
                                <label>Policy # Liability:<Text 
                                field="liability" 
                                placeholder="text"
                                initialValue={liability}
                                onChange={getInputChange}
                                /></label>
                                <label>Policy # Cargo:<Text 
                                field="cargo" 
                                placeholder="text"
                                initialValue={cargo}
                                onChange={getInputChange}
                                /></label>
                                <label>Policy # Physical:<Text 
                                field="physical" 
                                placeholder="number"
                                initialValue={physical}
                                onChange={getInputChange}
                                /></label>
                                <label>Expo # Date:<Text 
                                field="date" 
                                type="date"
                                placeholder="date"
                                initialValue={date}
                                onChange={getInputChange}
                                /></label>
                            </Scope>
                        </div>


                        <div className="btns-form">
                            <button type="">Salir</button>
                            <button type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
