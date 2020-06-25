// Getting the fields.
$password_display_field = document.getElementById('password')
$password_length = document.getElementById('password_length')

// Assigning an empty string to generate password field so that user cannot copy the emelent, instead they get an alert.
$password_display_field.value = ''

// Function for generating password.
const generatePassword = () => {
    // characters for password
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+={}[]|?><.';

    // declaring an empty password string.
    password = ''

    // Checking if the value for length of password is passed or not.
    if ($password_length.value === '') {
        // Assining the default value if not specified.
        $password_length.value = 10
    }

    // Boundary conditions to check for generating password of length b/w 6 and 20.
    if ($password_length.value >= 6 && $password_length.value <= 20) {


        // The main loop of generating password.
        for (let i = 0; i < $password_length.value; i++) {
            random_index = Math.floor(Math.random() * chars.length) // generating a random number
            password += chars[random_index] // assinging the character located at the generated random number
        }


        // Displaying the password in the field
        $password_display_field.value = password
    }
    // if boundary condtions fails then this is displayed.
    else {

        alert("Length of password should be between 6 and 20.")
    }
}

const copyPassword = () => {
    // selecting the field
    $password_display_field.select()
    // for mobile devices 
    $password_display_field.setSelectionRange(0, 99999)

    // if the password is not generated then it alerts
    if ($password_display_field.value === '') {
        alert("Nothing to copy.")
    }
    else 
    // it copies the password and displayes to the user what they just copied
    {

        document.execCommand('copy')

        alert("Generated Password: " + $password_display_field.value + " successfully copied.")
    }

}