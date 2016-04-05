function *about() {
    this.body = yield render('about', {myCorp: {
        name:'BAVC',
        copyrigth: new Date().getFullYear()
    }});
};