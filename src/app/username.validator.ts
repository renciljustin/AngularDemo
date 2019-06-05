import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value && (control.value as string).indexOf(' ') >= 0) {
            return {
                noSpace: true
            };
        }
        return null;
    }

    static duplicate(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUsername = 'rencil';
                if ((control.value as string).toLowerCase() === existingUsername) {
                    resolve({
                        duplicate: true
                    });
                }
                resolve(null);
            }, 1500);
        });
    }
}
