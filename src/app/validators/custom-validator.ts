import { AbsoluteSourceSpan } from '@angular/compiler';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static checkFirstAndLastUppercase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length > 0) {
        const isFirstUpper =
          control.value[0] === control.value[0].toUpperCase();
        const isLastUpper =
          control.value[control.value.length - 1] ===
          control.value[control.value.length - 1].toUpperCase();

        const isValid = isFirstUpper && isLastUpper;

        if (isValid) {
          return null;
        } else {
          return { isFirstUpper: isFirstUpper, isLastUpper: isLastUpper };
        }
      } else {
        return null;
      }
    };
  }

  static checkAddressUSA() {
    return (control: AbstractControl): ValidationErrors | null => {
      const validCountryNames = [
        'usa',
        'u.s.a',
        'united states',
        'united states of america',
      ];

      const isInArray = validCountryNames.includes(control.value.toLowerCase());

      return isInArray ? null : { invalidName: control.value };
    };
  }

  static checkNotMinor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const today = new Date().getFullYear();
      const birthDate = control.value
      const age = today - birthDate

      if (age < 18) {
        return { underAge: true };
      }

      return null;
    };
  }

  static CustomPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const regex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*\d).{8,}$/;

      if (!regex.test(control.value)) {
        return { invalidPassword: true };
      }

      return null;
    };
  }

  static KeywordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const includesWords = /(qui|quo|qua)/i.test(control.value);

      if (!includesWords) {
        return { invalidKeyword: true };
      }

      return null;
    };
  }
}
