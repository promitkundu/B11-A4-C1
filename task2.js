function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }

    const special = ['.', '-', '_', '+', '@'];
    if (special.includes(email[0])) {
        return false;
    }
    if (!email.includes('@')) {
        return false;
    }
    if (email.includes(' ')) {
        return false;
    }
    if (!email.endsWith('.com')) {
        return false;
    }

    return true;
}
const total = validEmail("he ro@alom.com");
console.log(total);