const validateEmail = (email) => {
    if (!email) {
        throw new Error(`Email no puede ser vacio`);
    }

    if (!email.includes('@')) {
        throw new Error(`Email no contiene @ en su estructura`);
    }
};


class Contact {
    constructor(name, email, cellphone) {
        // Validar el correo electrónico antes de asignarlo
        validateEmail(email);

        this.name = name;
        this.email = email;
        this.cellphone = cellphone;
    }

    set setName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setEmail(email) {
        // Validar el correo electrónico antes de asignarlo
        validateEmail(email);
        this.email = email;
    }

    get getEmail() {
        return this.email;
    }

    set setCellphone(cellphone) {
        this.cellphone = cellphone;
    }

    get getCellphone() {
        return this.cellphone;
    }

    contactDetails() {
        console.log(`Contacto ${this.name} , email: ${this.email}, cellphone: ${this.cellphone}`);
    }
}


// Crear contactos
const contact1 = new Contact('Yeison Macias', 'yeiimaccdev@gmail.com', '3209362334');
const contact2 = new Contact('Marco Dubbeld', 'marcoDubbled@gmail.com', '3235957695');


// Contacto 1
console.log('---- Datos contacto n1 ----')
contact1.contactDetails();

// Actualizar nombre del contacto 1
contact1.setName = 'Yesion Macias Buitrago';
console.log(`Nombre ajustado: ${contact1.getName}`);
console.log(" ")


// Contacto 2
console.log('---- Datos contacto n2 ----')
contact2.contactDetails();

// Actualizar telefono del contacto 2
contact2.setCellphone = '3017590424';
console.log(`Telefono ajustado: ${contact2.getCellphone}`);





console.log(" ")
console.log('-----> Lista de contactos <----')

// Lista de contactos
const contacts = new Map();

// Agregar nuevos contactos a la lista
const addContactToList = (contact) => {
    contacts.set(contact.email, contact);
}


// lIstar los usuarios en la lista actual
const listContacts = () => {
    contacts.values().forEach((contact) => {
        contact.contactDetails();
    });  
}

// Agregar los contactos a la lista
addContactToList(contact1);
addContactToList(contact2);

// Listar contactos
listContacts();