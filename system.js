        document.querySelector('.button').addEventListener('click', function(){    
            const selectElement = document.getElementById('types');
            const selectedValue = selectElement.value;
            const num = parseInt(document.getElementById('number').value);

    if(selectedValue === "decimal"){

        const decimal = num.toString(10);
        const binary = num.toString(2);
        const octal =num.toString(8);
        const hexadecimal = num.toString(16);

        alert("you selected a decimal");
        document.getElementById('output').innerText = 
        `the representation of ${num} in decimal is :  ${decimal}\n`+
         `the representation of ${num} in binary is :  ${binary}\n`+
         `the representation of ${num} in octal is :  ${octal} \n`+
         `the representation of ${num} in hexadecimal is :  ${hexadecimal}\n `;

         document.getElementById('ans').innerText = 
         `${decimal}\nBinary: ${binary}\nOctal: ${octal}\nHexadecimal: ${hexadecimal}`;

        
    }
    if(selectedValue === "binary"){

        const decimal = num.toString(10);
        const binary = num.toString(2);
        const octal =num.toString(8);
        const hexadecimal = num.toString(16);

        alert("you selected a binary");
        document.getElementById('output').innerText = 
        `the representation of ${num} in decimal is :  ${decimal}\n`+
         `the representation of ${num} in binary is :  ${binary}\n`+
         `the representation of ${num} in octal is :  ${octal} \n`+
         `the representation of ${num} in hexadecimal is :  ${hexadecimal}\n `;

        
    }
    
    if(selectedValue === "octal"){

        const decimal = num.toString(10);
        const binary = num.toString(2);
        const octal =num.toString(8);
        const hexadecimal = num.toString(16);

        alert("you selected a octal");


        document.getElementById('output').innerText = 
        `the representation of ${num} in decimal is :  ${decimal}\n`+
         `the representation of ${num} in binary is :  ${binary}\n`+
         `the representation of ${num} in octal is :  ${octal} \n`+
         `the representation of ${num} in hexadecimal is :  ${hexadecimal}\n `;

        
    }
    if(selectedValue === "binary"){

        const decimal = num.toString(10);
        const binary = num.toString(2);
        const octal =num.toString(8);
        const hexadecimal = num.toString(16);

        alert("you selected a binary");

        
        document.getElementById('output').innerText = 
        `the representation of ${num} in decimal is :  ${decimal}\n`+
         `the representation of ${num} in binary is :  ${binary}\n`+
         `the representation of ${num} in octal is :  ${octal} \n`+
         `the representation of ${num} in hexadecimal is :  ${hexadecimal}\n `;

        
    }

    if (selectedValue === " ") {
        alert("OOPS!!, SOMETHING WENT WRONG... PLEASE MAKE A SELECTION. ");
        document.getElementById('output').innerText = " Ensure to make a selection";

        exit;
    }
