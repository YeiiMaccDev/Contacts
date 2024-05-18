const contacts = new Map();

const printContact = (name, email, cellphone) => {
    console.log(`Datos: Nonbre: ${name} email: ${email} telefono: ${cellphone}`)
}

const validateEmail = (email) => {
    if (!email) {
        throw new Error(`Email no puede ser vacio`);
    }

    if (!email.includes('@')) {
        throw new Error(`Email no contiene @ en su estructura`);
    }
}

// newContact crea el nuevo contacto  o lanza error en caso de error en formato del email
const newContact = (name, email, cellphone) => {

    validateEmail(email);

    const nContact = {name, email, cellphone};
    contacts.set(email, nContact);
}

const listContacts = () => {
    contacts.values().forEach(({name, email, cellphone}) => {
        printContact(name, email, cellphone);
    });  
}

const modifyContact = (id, attribute, newValue) => {
    if (attribute === "email") {
        validateEmail(newValue);
    }

    const contact = contacts.get(id)
    contact[attribute] = newValue;
}

const listDetailsContact = (id) => {
    const {name, email, cellphone} = contacts.get(id);
    printContact(name, email, cellphone)
}


// marco

//  Id natural del contacto es el correo electronico
newContact('Yeison Macias', "yeiimaccdev@gmail.com", "3209362334");
newContact('Marco Dubbeld', "marcoDubbled@gmail.com", "3235957695");

listContacts();

modifyContact("marcoDubbled@gmail.com", "cellphone", "3017590424");

listDetailsContact("marcoDubbled@gmail.com");
