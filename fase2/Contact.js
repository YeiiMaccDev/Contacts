
class Contact {
    constructor(name, email, cellphone) {
        // Validar el correo electrónico antes de asignarlo
        this.validateEmail(email);

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
        this.validateEmail(email);
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

    validateEmail(email) {
        if (!email) {
            throw new Error(`Email no puede ser vacio`);
        }

        if (!email.includes('@')) {
            throw new Error(`Email no contiene @ en su estructura`);
        }
    }
}





class ContactService {
    constructor() {
        this.contacts = new Map();
    }

    // Crea nuevo contacto con una instancia y lo almacena en la lista.
    createContact(name, email, cellphone) {
        const contact = new Contact(name, email, cellphone);
        this.contacts.set(email, contact);
    }

    // iterar la lista de contactos e imprimir los detalles de cada uno.
    listContacts() {
        this.contacts.values().forEach(contact => {
            contact.contactDetails();
        });
    }

    // Modificar datos del usuario id(email)
    modifyContact(id, attribute, newValue) {
        const contact = this.contacts.get(id);
        // Validar que el contacto existe
        if (!contact) {
            throw new Error(`Contacto con el email ${id} no encontrado`);
        }

        // Validar que el atributo a modificar existe
        if (typeof contact[attribute] === 'undefined') {
            throw new Error(`El atributo ${attribute} no encontrado.`);
        }

        // Construir dinámicamente el nombre de la función setter en base del atributo a modificar.
        const setterFuntion = `set${attribute.charAt(0).toUpperCase()}${attribute.slice(1)}`;
        // Actualizar el nuevo valor del atributo
        contact[setterFuntion] = newValue;

    }

    // Mostar los detalles de un usuario filtrado por id(email)
    showContactDetails(id) {
        const contact = this.contacts.get(id);
        if (contact) {
            contact.contactDetails();
        } else {
            throw new Error(`Contacto con email ${id} no encontrado`);
        }
    }
}





// Crea una instancia de ContactService
const contactService = new ContactService();

// Crear contactos usando
//  Id natural del contacto es el correo electronico(email)
contactService.createContact('Yeison Macias', 'yeiimaccdev@gmail.com', '3209362334');
contactService.createContact('Marco Dubbeld', 'marcoDubbled@gmail.com', '3235957695');

// Mostrar lista de contactos
console.log("----> Lista de contactos <----");
contactService.listContacts();

// Modificar un contacto usando
contactService.modifyContact('yeiimaccdev@gmail.com', 'name', 'Yeison Macias Buitrago');
contactService.modifyContact('marcoDubbled@gmail.com', 'cellphone', '3017590424');

// Mostrar detalles de un contacto usando
console.log("\nMostrando detalles del contacto modificado");
contactService.showContactDetails('yeiimaccdev@gmail.com');

console.log("\nMostrando detalles de un contacto modificado");
contactService.showContactDetails('marcoDubbled@gmail.com');

// Generar error al modificar un atributo que no existe o está mal escrito.:
console.log("\n ---> Generar error al modificar un atributo que no existe o está mal escrito.")
contactService.modifyContact('yeiimaccdev@gmail.com', 'lastName', 'Macias');