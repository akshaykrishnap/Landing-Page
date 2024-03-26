class Landing {
    //property
    database = {
        "Milan": { username: "Milan", password: 'milan123' },
        "Manu": { username: "Maun", password: 'manu123' },
        "Micheal": { username: "Micheal", password: 'micheal123' },
        "Miller": { username: "Miller", password: 'miller123' }

    }
    //method to store data
    saveData() {
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }
    //method to retrive data
    getData() {
        const data = JSON.parse(localStorage.getItem("database"))
        console.log(data);
    }
    //register
    register() {
        this.getData()

        let uname = reguname.value
        let pswd = regpswd.value
        console.log(uname);
        console.log(pswd);
        if (uname == "" || pswd == "") {
            alert('Please fill the form completely')
        } else {
            if (uname in this.database) {
                alert('User Already Exist')
            } else {
                this.database[uname] = { username: uname, password: pswd }
                console.log(this.database);
                this.saveData()
                alert('Registration Succesfull')

                // navigate
                window.location = 'index.html'
            }
        }
    }

    //login
    login() {
        this.getData()
        let uname = loguname.value
        let pswd = logpswd.value
        console.log(uname);
        console.log(pswd);

        if (uname == "" || pswd == "") {
            alert('Please fill the form completely')
        }
        else {
            if (uname in this.database) {
                if (this.database[uname].password == pswd) {
                    alert('Login successfull')
                    localStorage.setItem("user", uname)
                    //navigate
                    window.location ="dash.html"
                }
                else {
                    alert('Incorrect Username or Password')
                }
            }
            else {
                alert('User does not exist ... please register')
            }
        }
    }

}

const obj = new Landing()
obj.saveData()
obj.getData()