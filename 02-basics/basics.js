new Vue({
    el: '#app',
    data : {
        itemsInStock : 15,
        isNinja : true,
        cloakMessage : "You shouldn't see me",
        movieTitles : ["The Matrix", "Fast 5", "Hackers", "Avengers"],
        employees :[
            { name : "Tom", title: "Boss" },
            { name : "Galila", title: "Manager" },
            { name : "Lucas", title: "Zoo Keeper" },
            { name : "Leo", title: "Butler" },
            { name : "Joshua", title : "Laundry" }
        ],
        people : [
            { id: 1, name: "Tom"},
            { id: 2, name: "Galila"},
            { id: 3, name: "Lucas"},
            { id: 4, name: "Leo"},
            { id: 5, name: "Joshua"}
         ]

    },
    methods:{
        addPerson: function(){

            let i = this.people.length+1;
            this.people.push({name:"Tom"+i, id: i})
        },
        shufflePersons: function(){
            let array = this.people;
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.people = array;
        }
    }
});