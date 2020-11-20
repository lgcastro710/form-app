import {  Text, Checkbox, Select, Option, Scope } from "informed";
import { useForm } from "../hooks/useForm";

export const FormBasic = () => {
  const [formValues, getInputChange] = useForm({
    phone: "",
    email: "",
    assigned: "",
    lenguage: "",
    carga:'',
    authorize:''
  });

  const { email, phone, assigned, lenguage,authorize,carga } = formValues;

  const submitBasic = (e) =>{
    e.preventDefault();
    console.log(formValues)
  }
  return (
    <div className="contendor">
      <h1>BASIC INFO.</h1>
      <div className="form-center">
        <form onSubmit={submitBasic}>
          <div className="content-inputs">
            <label>
              Manager Phone*:
              <Text
                field="phone"
                type="numbre"
                placeholder="text"
                initialValue={phone}
                onChange={getInputChange}
              />
            </label>
            <Scope scope="favorite">
              <label>
                Manager Mail*:
                <Text
                  type="email"
                  field="email"
                  placeholder="text"
                  initialValue={email}
                  onChange={getInputChange}
                />
              </label>
              <label>
                Executive Assigned*:
                <Select
                  field="assigned"
                  initialValue={assigned}
                  onChange={getInputChange}
                >
                  <Option disabled>Select.</Option>
                  <Option value="single">Single</Option>
                  <Option value="relationship">Relationship</Option>
                  <Option value="complicated">Complicated</Option>
                </Select>
              </label>
              <label>
                Lenguage*:
                <Text
                  field="lenguage"
                  placeholder="text"
                  initialValue={lenguage}
                  onChange={getInputChange}
                />
              </label>
            </Scope>
          </div>

          <div className="checkbox-cargas">
            <label>
              Service Type: <Checkbox 
              field="carga" 
              initialValue={carga}
              onChange={getInputChange}
              
              />
              Cargas
            </label>
          </div>

          <div className="group-checkbox">
            <label>
              Authorize:
              <Checkbox 
              className="checkbox-spacing" 
              field="authorize"
              initialValue={authorize}
              onChange={getInputChange}
              />
              IFTA
              <Checkbox 
              field="authorize" 
              initialValue={authorize}
              onChange={getInputChange}
              />
              OREGON
              <Checkbox 
              field="authorize"
              initialValue={authorize}
              onChange={getInputChange} 
              />
              KY
              <Checkbox 
              field="authorize" 
              initialValue={authorize}
              onChange={getInputChange}
              />
              NM
              <Checkbox 
              field="authorize"
              initialValue={authorize}
              onChange={getInputChange}
               />
              NY
            </label>
          </div>

          <div className="btns-form">
            <button type="">Salir</button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
