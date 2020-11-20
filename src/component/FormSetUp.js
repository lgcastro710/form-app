import {  Text,Scope, Option, Select} from 'informed';
import { useForm } from '../hooks/useForm';

export const FormSetUp= () => {
    const [formvalues, getInputChange] = useForm({
        owner:'',
        ssn:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        fax:'',
        mc:'',
        dot:''
    });

    const submitSetUp = (e) =>{
        e.preventDefault()
        console.log(formvalues)
    }

    const {owner,ssn,address,city,state,zip,fax,mc,dot}= formvalues;
        return (
            <div className="contendor">
                <div className="title-form">
                    <h1>Set Up Info</h1>
                   
                </div>
                <div className="form-center">
                    <form onSubmit={submitSetUp}>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>Owner*<Text 
                                field="owner" 
                                placeholder="text"
                                initialValue={owner}
                                onChange={getInputChange}
                                /></label>
                                <label>SSN*<Text 
                                field="ssn" 
                                placeholder="text"
                                initialValue={ssn}
                                onChange={getInputChange}
                                /></label>
                                <label>Address*<Text 
                                field="address" 
                                placeholder="text"
                                initialValue={address}
                                onChange={getInputChange}
                                /></label>
                                <label>City*<Text 
                                field="city" 
                                placeholder="text"
                                initialValue={city}
                                onChange={getInputChange}
                                /></label>
                                <label>
                                    State*
                                    <Select 
                                    field="state"
                                    initialValue={state}
                                    onChange={getInputChange}
                                    >
                                        <Option value="" disabled>
                                            Select.
                                        </Option>
                                        <Option value="single">Single</Option>
                                        <Option value="relationship">Relationship</Option>
                                        <Option value="complicated">Complicated</Option>
                                    </Select>
                                </label>
                                <label>Zip*<Text 
                                field="zip" 
                                placeholder="text"
                                initialValue={zip}
                                onChange={getInputChange}
                                /></label>
                                <label>Fax*<Text 
                                field="fax" 
                                placeholder="text"
                                initialValue={fax}
                                onChange={getInputChange}
                                /></label>
                                <label>MC*<Text 
                                field="mc" 
                                placeholder="text"
                                initialValue={mc}
                                onChange={getInputChange}
                                /></label>
                                <label>DOT*<Text 
                                field="dot" 
                                placeholder="text"
                                initialValue={dot}
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
