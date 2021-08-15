export const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const NUMBER_PATTERN = /^[0-9]*$/;
export const RUT_PATTERN = /^[0-9-.K]*$/;
// Letras, puntos, y espacios 
export const LETTERS_PATTERN = /^([a-zA-zÀ-ÿ\u00f1\u00d1\.]+\s?[a-zA-zÀ-ÿ\u00f1\u00d1\.]+)+$/;

// Letras, puntos, y espacios 
export const PARAGRAPH_PATTERN = /^([a-zA-zÀ-ÿ\u00f1\u00d1\.0-9]+\s?[a-zA-zÀ-ÿ\u00f1\u00d1\.0-9]+)+$/;

// Letras, numeros y espacios
export const ALPHANUM_PATTERN = /^([a-zA-zÀ-ÿ\u00f1\u00d10-9]*\s?[a-zA-zÀ-ÿ\u00f1\u00d10-9]*)+$/;
// Letras, guin, y espacios 
export const NAME_PATTERN = /^([a-zA-zÀ-ÿ\u00f1\u00d1\-]+\s?[a-zA-zÀ-ÿ\u00f1\u00d1\-]+)+$/;

// export const PASS_PATTERN = /([a-zA-z]+[0-9]+)+.*/;
export const PASS_PATTERN = /^(?=\w*\d)(?=\w*[a-zA-Z])\S{8,8}$/;
