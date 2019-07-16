const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(stringY) {
    if (stringY.length >= 4 && stringY.length < 16) {
        return true;
    } else {
        return false;
    }
}

function isLoginUnique(arrX, stringY) {
    if (!arrX.includes(stringY)) {
        return true;
    } else {
        return false;
    }
}

function addLogin(arrX, stringY) {
    if (isLoginValid(stringY)) {
        if (isLoginUnique(arrX, stringY)) {
            arrX.push(stringY);
            return 'Логин успешно добавлен!';
        } else {
            return 'Такой логин уже используется!';
        }
    } else {
        return 'Ошибка! Логин должен быть от 4 до 16 символов!';
    }
}

console.log(addLogin(logins, 'Ajax')); ; // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
