import { Form, Text,Scope } from 'informed';

export const Form2= () => {
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
                    <Form>
                        <div className="content-inputs">

                            <Scope scope="favorite">
                                <label>Remis:<Text field="" placeholder="text"/></label>
                                <label>USA Truck:<Text field="" placeholder="text"/></label>
                                <label>CH Robinson:<Text field="" placeholder="text"/></label>
                                <label>#Account Motor Carrier:<Text field="" placeholder="text"/></label>
                                <label>Libro Elec:<Text field="" placeholder="text"/></label>
                                <label>IFTA#:<Text field="" placeholder="text"/></label>
                                <label>NM#:<Text field="" placeholder="text"/></label>
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
