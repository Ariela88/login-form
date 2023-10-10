import { AbsoluteSourceSpan } from "@angular/compiler";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {


  static checkFirstAndLastUppercase(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value && control.value.length > 0) {



        const isFirstUpper = control.value[0] === control.value[0].toUpperCase()
        const isLastUpper = control.value[control.value.length - 1] === control.value[control.value.length - 1].toUpperCase()

        const isValid = isFirstUpper && isLastUpper

        if (isValid) {
          return null
        } else {
          return { isFirstUpper: isFirstUpper, isLastUpper: isLastUpper }
        }
      } else {
        return null
      }
    }
 }



  static checkAddressUSA() {

    return (control: AbstractControl): ValidationErrors | null => {

const validCountryNames = ['usa','u.s.a','united states','united states of america']

const isInArray = validCountryNames.includes(control.value.toLowerCase())




      return isInArray ? null : {invalidName: control.value}
    }


  }


  loginAndPasswordUser(){

    return (control: AbstractControl): ValidationErrors | null => {





            return null
          }

  }


  static checkNotMinor(){

    return (control: AbstractControl): ValidationErrors | null => {



      return null
    }


  }


  static isPasswordValid(){

    return (control: AbstractControl): ValidationErrors | null => {
//min 8 caratteri,
//almeno una minuscola, un nipote di paperino e due caratteri speciali(! £ $ ?@#*€)



      return null
    }


  }

}
