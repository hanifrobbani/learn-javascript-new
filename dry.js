function validateUserInput(name, email, password) {
    if (name === '' || email === '' || password === '') {
      console.log('All fields are required!');
      return false;
    }
    if (!validateEmail(email)) {
      console.log('Invalid email format!');
      return false;
    }
    if (password.length < 6) {
      console.log('Password must be at least 6 characters long!');
      return false;
    }
    return true;
  }
  
  function registerUser(name, email, password) {
    if (!validateUserInput(name, email, password)) {
      return;
    }
  
    // Simpan pengguna baru
    console.log(`User registered: ${name}, ${email}`);
  }
  
  function updateUser(name, email, password) {
    if (!validateUserInput(name, email, password)) {
      return;
    }
  
    // Update pengguna
    console.log(`User updated: ${name}, ${email}`);
  }
  
  function validateEmail(email) {
    // Sederhana validasi email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Penggunaan
  registerUser('John Doe', 'john@example.com', 'password123');
  updateUser('John Doe', 'john@example.com', 'newpassword123');
  