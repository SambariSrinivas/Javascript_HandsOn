/*
Template Literals in Javascript

*/

const message = 'this is My\n' +
    'Javascript code\n' +
    'for learning ';
console.log(message);


//The above way of using string is verybad

//To resolve the above issue Template Literals came in to picture in Javascript.

//To Use Template Literal we need to use BackTick character (``)

//We can also pass different functions or variables into TemplateLiterals

//Templates mostly used in mailbody or OTPmessages.


console.log('**********Template Literals***********');


const mail_body = ``; //This is Empty Tempate Literal

const mailbody2 = `Hi Tom
Greetings of The Day!
we are excited! That you have subscribed to CodeAcademy.
You now Joined the worlds greatest learning platform to learn JavaScript.
Looking forward to provide you amazing learning experience in Javascript.
Thank you and Best Regards,
CodeAcademy.
`;

console.log(mailbody2);


//Passing Variables and Functions to Templates Literals.
console.log('*****sending variables into Template Literals********');

const Username = 'Tom';
const Academy = 'CodeAcademy';
const Language = 'JavaScript';

function Greet() {
    return 'Greetings of the Day!';

}


const mailbody3 = `Hi ${Username}
${Greet()}
we are excited! That you have subscribed to ${Academy}.
You now joined the worlds greatest learning platform to learn ${Language}.
Looking forward to provide you amazing learning experience in ${Language}.
Thank you and Best Regards,
${Academy}.
`;

console.log(mailbody3);