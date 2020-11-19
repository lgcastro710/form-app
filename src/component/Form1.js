import React, {Component} from 'react';
import { Form, Text, Checkbox, Select, Option, Scope } from 'informed';

class Form1 extends Component {
    render() {
        return (
            <div className="contendor">
                <h1>BASIC INFO.</h1>
                <div className="form-center">
                    <Form>
                        <div className="content-inputs">
                            <label>Manager Phone*:<Text field="name" placeholder="text"/></label>
                            <Scope scope="favorite">
                                <label>Manager Mail*:<Text field="color" placeholder="text"/></label>
                                <label>
                                    Executive Assigned*:
                                    <Select field="status">
                                        <Option value="" disabled>
                                            Select.
                                        </Option>
                                        <Option value="single">Single</Option>
                                        <Option value="relationship">Relationship</Option>
                                        <Option value="complicated">Complicated</Option>
                                    </Select>
                                </label>
                                <label>Lenguage*:<Text field="food" placeholder="text"/></label>
                            </Scope>
                        </div>

                        <div className="checkbox-cargas">
                            <label>Service Type: <Checkbox field="authorize"/>Cargas</label>
                        </div>

                        <div className="group-checkbox">
                            <label>Authorize:
                                <Checkbox className="checkbox-spacing" field="authorize"/>IFTA
                                <Checkbox field="authorize"/>OREGON
                                <Checkbox field="authorize"/>KY
                                <Checkbox field="authorize"/>NM
                                <Checkbox field="authorize"/>NY
                            </label>
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
}



export default Form1;
