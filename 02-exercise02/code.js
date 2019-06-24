new Vue({
    el : '#app',
    data : {
        keyUpText: '',
        name: '',
        age: 0
    },
    methods : {
        textKeyUp: function(e){
            this.keyUpText = e.target.value;
        },
        ctrlEnter: function(e){
            this.keyUpText = e.target.value;
        }
    }
});