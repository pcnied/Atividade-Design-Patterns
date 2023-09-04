// SEM ADAPTER
// import isEmail from "validator/lib/isEmail";
// const email = "petersonail.com";

// if (isEmail(email)) {
//   console.log("E-mail válido.");
// } else console.log("E-mail inválido");

// COM ADAPTER - CLASSES
import { EmailValidatorClassAdapter } from "./structural/adapter/validation/email.validator.class.adapter";
import { EmailValidatorProtocol } from "./structural/adapter/validation/email.validator.protocol";

function validarEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("E-mail é válido (Class)");
  } else {
    console.log("E-mail é inválido (Class)");
  }
}

// COM ADAPTER - FUNÇÕES
import { emailValidatorFunctionAdapter } from "./structural/adapter/validation/email.validator.function.adapter";
import { EmailValidatorFunctionProtocol } from "./structural/adapter/validation/email.validator.protocol";

function validarEmailFunction(
  emailValidator: EmailValidatorFunctionProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("E-mail é válido (Function)");
  } else {
    console.log("E-mail é inválido (Function)");
  }
}

const email = "petersongmail.com";
validarEmailClass(new EmailValidatorClassAdapter(), email);
validarEmailFunction(emailValidatorFunctionAdapter, email);
