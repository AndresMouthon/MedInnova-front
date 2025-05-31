import InputField from "../../../../components/helpers/InputField";
import { IFormComponentProps } from "../models/IMedicoProps";

function FormComponent({
    medico,
    handleChange,
}: IFormComponentProps) {
    return (
        <section className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField id="documento" label="Documento" type="number" value={medico.usuario_id.documento} onChange={handleChange} />
                <InputField id="nombres" label="Nombres" type="text" value={medico.usuario_id.nombres} onChange={handleChange} />
                <InputField id="apellidos" label="Apellidos" type="text" value={medico.usuario_id.apellidos} onChange={handleChange} />
                <InputField id="telefono" label="Teléfono" type="number" value={medico.telefono} onChange={handleChange} />
                <InputField id="especialidad" label="Especialidad" type="text" value={medico.especialidad} onChange={handleChange} />
                <InputField id="numero_colegiatura" label="N° Colegiatura" type="text" value={medico.numero_colegiatura} onChange={handleChange} />
                <InputField id="horario_atencion" label="Horario de Atención" type="" value={medico.horario_atencion} onChange={handleChange} />
                <InputField id="genero" label="Género" type="text" value={medico.usuario_id.genero} onChange={handleChange} />
            </div>
        </section>
    );
}

export default FormComponent;
