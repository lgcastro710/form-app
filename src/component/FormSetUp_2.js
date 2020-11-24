import {  Text,Scope, Option, Select} from 'informed';
import { useForm } from '../hooks/useForm';

export const FormSetUp_2= () => {
    const [formvalues, getInputChange] = useForm({
       ein:'',
       clasification:'',
       factoring:'',
       factoring_mail:'',
       dispatcher:'',
       dispatch:'',
       state_preference:'',
    });

    const submitSetUp_2 = (e) =>{
        e.preventDefault()
        console.log(formvalues)
    }

    const {ein,clasification,factoring,factoring_mail,dispatcher,dispatch,state_preference}= formvalues;
        return (
            <div className="contendor">
                <div className="title-form">
                    <h1>Set Up Info</h1>
                </div>
                <div className="form-center">
                    <form onSubmit={submitSetUp_2}>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>EIN<Text 
                                field="ein" 
                                placeholder="text"
                                initialValue={ein}
                                onChange={getInputChange}
                                /></label>
                                <label>Company Clasification<Text 
                                field="clasification" 
                                placeholder="text"
                                initialValue={clasification}
                                onChange={getInputChange}
                                /></label>
                                <label>Factoring CO*<Text 
                                field="factoring" 
                                placeholder="text"
                                initialValue={factoring}
                                onChange={getInputChange}
                                /></label>
                                <label>Factoring Mail<Text 
                                field="factoring_mail" 
                                placeholder="text"
                                initialValue={factoring_mail}
                                onChange={getInputChange}
                                /></label>
                                <label>Dispatcher<Text 
                                field="dispatcher" 
                                placeholder="text"
                                initialValue={dispatcher}
                                onChange={getInputChange}
                                /></label>
                                <label>Dispatch<Text 
                                field="dispatch" 
                                placeholder="text"
                                initialValue={dispatch}
                                onChange={getInputChange}
                                /></label>
                                <label>
                                    State Preference
                                    <Select 
                                    field="state_preference"
                                    initialValue={state_preference}
                                    onChange={getInputChange}
                                    >
                                        <Option value="" disabled>
                                        STATE SELECT
                                        </Option>
                                        <Option value="ny">NY</Option>
                                        <Option value="ca">CA</Option>
                                        <Option value="ky">KY</Option>
                                        <Option value="nv">NV</Option>
                                        <Option value="tx">TX</Option>
                                        <Option value="mt">MT</Option>
                                    </Select>
                                </label>
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
