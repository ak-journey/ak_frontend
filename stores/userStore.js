import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: ()=>({
        user: {
            isAuthenticated: false,
            id: null,
            name: null,
            email: null,
            gravatar: null,
            access: null,
            refresh: null,
        }
    }),
    actions: {
        initStore() {
            if(localStorage.getItem('user.access')) {
                this.user.access = localStorage.getItem('user.access'),
                this.user.refresh = localStorage.getItem('user.refresh'),
                this.user.id = localStorage.getItem('user.id'),
                this.user.name = localStorage.getItem('user.name'),
                this.user.email = localStorage.getItem('user.email'),
                this.user.gravatar = localStorage.getItem('user.gravatar'),
                this.user.isAuthenticated = true

                this.refreshToken();
                console.log('Initialized user:', this.user);
            }
        },
        setToken(data){
            console.log('setToken', data);

            this.user.access = data.access;
            this.user.refresh = data.refresh;
            this.user.isAuthenticated = true;

            localStorage.setItem('user.access', data.access);
            localStorage.setItem('user.refresh', data.refresh);
        },
        removeToken(){
            console.log('removeToken');

            this.user.access = null;
            this.user.refresh = null;
            this.user.id = null;
            this.user.name = null;
            this.user.email = null;
            this.user.gravatar = null,
            this.user.isAuthenticated = false;

            localStorage.setItem('user.access', '');
            localStorage.setItem('user.refresh', '');
            localStorage.setItem('user.id', '');
            localStorage.setItem('user.name', '');
            localStorage.setItem('user.email', '');
            localStorage.setItem('user.gravatar', '');
        },
        setUserInfo(user){
            console.log('setUserInfo', user);

            this.user.id = user.id;
            this.user.name = user.name;
            this.user.email = user.email;
            this.user.gravatar = user.gravatar;
            
            localStorage.setItem('user.id', this.user.id);
            localStorage.setItem('user.name', this.user.name);
            localStorage.setItem('user.email', this.user.email);
            localStorage.setItem('user.gravatar', this.user.gravatar);

            console.log('User', this.user);
        },
        async refreshToken(){
            try {
                let response = await fetch('http://127.0.0.1:8000/api/refresh/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'refresh': this.user.refresh})
                })
                let data = await response.json();
                this.user.access = data.access;
                localStorage.setItem('user.access', data.access);
                console.log("Refresh data: ", data);
                console.log("Refresh data.access: ", data.access);
            } catch(error) {
                console.log(error);
                this.removeToken();
            }      
        }
    }
})