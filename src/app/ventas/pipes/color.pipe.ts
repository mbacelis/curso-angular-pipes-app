import { Pipe, PipeTransform } from "@angular/core";
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case Color.azul:
                return 'Azul';
            case Color.negro:
                return 'Negro';
            case Color.rojo:
                return 'Rojo';
            case Color.verde:
                return 'Verde';
            default:
                return 'Color no soportado'
        }
    }
}