import {  Text,Scope } from 'informed';
import { useForm } from '../hooks/useForm';

export const FormAccount= () => {
    const [formValues, getInputChange ] = useForm({
        remis:'',
        trunk:'',
        robinson:'',
        motorcarrier:'',
        libro:'',
        ifta:'',
        nm:''

    });

    const {remis,trunk,robinson,motorcarrier,libro,ifta,nm} = formValues;
    const submitAccount = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }
        return (
            <div className="contendor">
                <div className="title-form">
                    <h1>ACCOUNT NUMBERS</h1>
                    <div className="btn-add">
                        <p>ADD..</p>
                        <h1 className="circle-btn">+</h1>
                    </div>
                </div>
                <div className="form-center">
                    <form onSubmit={submitAccount}>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>Remis:<Text 
                                field="remis" 
                                placeholder="text"
                                initialValue={remis}
                                onChange={getInputChange}
                                /></label>
                                <label>USA Truck:<Text 
                                field="trunk" 
                                placeholder="text"
                                initialValue={trunk}
                                onChange={getInputChange}
                                /></label>
                                <label>CH Robinson:<Text 
                                field="robinson" 
                                placeholder="text"
                                initialValue={robinson}
                                onChange={getInputChange}
                                /></label>
                                <label>#Account Motor Carrier:<Text 
                                field="motorcarrier" 
                                placeholder="text"
                                initialValue={motorcarrier}
                                onChange={getInputChange}
                                /></label>
                                <label>Libro Elec:<Text 
                                field="libro" 
                                placeholder="text"
                                initialValue={libro}
                                onChange={getInputChange}
                                /></label>
                                <label>IFTA#:<Text 
                                field="ifta" 
                                placeholder="text"
                                initialValue={ifta}
                                onChange={getInputChange}
                                /></label>
                                <label>NM#:<Text 
                                field="nm" 
                                placeholder="text"
                                initialValue={nm}
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
