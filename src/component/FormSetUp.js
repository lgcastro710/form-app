import { Form, Text,Scope} from 'informed';

export const FormSetUp= () => {
        return (
            <div className="contendor">
                <div className="title-form">
                    <h1>Set Up Info</h1>
                   
                </div>
                <div className="form-center">
                    <Form>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>Owner*<Text field="" placeholder="text"/></label>
                                <label>SSN*<Text field="" placeholder="text"/></label>
                                <label>Address*<Text field="" placeholder="text"/></label>
                                <label>City*<Text field="" placeholder="text"/></label>
                                <label>State*<Text field="" placeholder="text"/></label>
                                <label>State*<Text field="" placeholder="text"/></label>
                                <label>Zip*<Text field="" placeholder="text"/></label>
                                <label>Fax*<Text field="" placeholder="text"/></label>
                                <label>MC*<Text field="" placeholder="text"/></label>
                                <label>DOT*<Text field="" placeholder="text"/></label>
                            </Scope>
                        </div>


                        <div className="btns-form">
                            <button type="">Salir</button>
                            <button type="submit">Guardar</button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
