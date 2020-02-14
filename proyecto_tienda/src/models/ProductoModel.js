/* eslint-disable */
import { Model } from 'vue-mc';
import { required, string, length } from 'vue-mc/validation';

export default class ProductoModel extends Model {
    requiredValidationMessage = 'This field is mandatory';
    dataLongValidationMessage = 'The title is too long';

    defaults() {
        return {
            nombre: "",
            descripcion: "",
            precio: 0,
            portada: "",
            variedad: "",
        };
    }
    validation() {
        return {
            nombre: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
        }
    }
    routes() {
        return {
          save: 'api/nueva-tarea',
        };
    }
}